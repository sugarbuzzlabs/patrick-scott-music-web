/**
 * Live song-request queue.
 *
 *   GET  /api/queue            -> public queue state
 *   POST /api/queue            -> add a request  { song, name? }
 *   POST /api/queue/played     -> mark an entry played   (stage key required)
 *   POST /api/queue/bump       -> move an entry to the top (stage key required)
 *   POST /api/queue/clear      -> empty the queue         (stage key required)
 *
 * State lives in a Netlify Blob — one JSON document, rewritten on each change.
 * At a bar gig the write volume is a few dozen requests an hour, so a single
 * document is simpler and cheaper than a row store, and read-modify-write races
 * would need thousands of concurrent scans to matter.
 */
import { getStore } from '@netlify/blobs';

const KEY = 'current';
const MAX_QUEUE = 60;
const MAX_NAME = 40;

/**
 * Throttling is per-device, not per-IP: at a bar the whole room shares one
 * NAT address, so an IP limit low enough to stop a spammer would lock out
 * everyone after the first few scans. The IP cap is only an abuse backstop,
 * set high enough that a real venue never reaches it.
 */
const DEVICE_LIMIT = 5;
const IP_LIMIT = 80;
const RATE_WINDOW_MS = 10 * 60 * 1000;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'no-store',
    },
  });

const store = () => getStore({ name: 'setlist', consistency: 'strong' });

async function readState() {
  const raw = await store().get(KEY, { type: 'json' });
  return raw ?? { queue: [], played: [], rate: {}, open: true };
}

async function writeState(state) {
  await store().setJSON(KEY, state);
}

/** Requests are anonymous; we keep a coarse hash of the IP only for throttling. */
function clientKey(req) {
  const ip =
    req.headers.get('x-nf-client-connection-ip') ||
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown';
  let h = 0;
  for (let i = 0; i < ip.length; i++) h = (h * 31 + ip.charCodeAt(i)) | 0;
  return String(h);
}

function prune(rate, now) {
  const out = {};
  for (const [k, times] of Object.entries(rate)) {
    const keep = times.filter((t) => now - t < RATE_WINDOW_MS);
    if (keep.length) out[k] = keep;
  }
  return out;
}

const clean = (s, max) =>
  String(s ?? '')
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .trim()
    .slice(0, max);

function authorized(req) {
  const expected = process.env.STAGE_KEY;
  if (!expected) return false;
  const given = req.headers.get('x-stage-key') || '';
  return given.length === expected.length && given === expected;
}

/** Public shape — never leaks the rate-limit table. */
const publicView = (state) => ({
  open: state.open !== false,
  queue: state.queue.map(({ id, song, artist, name, votes, at }) => ({
    id,
    song,
    artist,
    name,
    votes,
    at,
  })),
  played: state.played.slice(-15),
});

export default async (req) => {
  const url = new URL(req.url);
  const action = url.pathname.split('/').filter(Boolean).pop();

  if (req.method === 'GET') {
    return json(publicView(await readState()));
  }

  if (req.method !== 'POST') {
    return json({ error: 'method not allowed' }, 405);
  }

  // ---- stage-only actions -------------------------------------------------
  if (['played', 'clear', 'bump', 'open', 'close'].includes(action)) {
    if (!authorized(req)) return json({ error: 'unauthorized' }, 401);

    const state = await readState();
    const body = await req.json().catch(() => ({}));

    if (action === 'clear') {
      // A new gig is a new crowd — drop the throttle history too.
      state.queue = [];
      state.played = [];
      state.rate = {};
    } else if (action === 'open' || action === 'close') {
      state.open = action === 'open';
    } else {
      const idx = state.queue.findIndex((e) => e.id === body.id);
      if (idx === -1) return json({ error: 'not found' }, 404);
      if (action === 'played') {
        const [entry] = state.queue.splice(idx, 1);
        state.played.push({ ...entry, playedAt: Date.now() });
      } else {
        const [entry] = state.queue.splice(idx, 1);
        state.queue.unshift(entry);
      }
    }

    await writeState(state);
    return json(publicView(state));
  }

  // ---- public: add a request ---------------------------------------------
  const state = await readState();
  if (state.open === false) {
    return json({ error: 'Requests are closed right now.' }, 403);
  }

  const body = await req.json().catch(() => null);
  if (!body) return json({ error: 'bad request' }, 400);

  const song = clean(body.song, 120);
  const artist = clean(body.artist, 120);
  const name = clean(body.name, MAX_NAME);
  if (!song) return json({ error: 'no song' }, 400);

  const now = Date.now();
  state.rate = prune(state.rate ?? {}, now);

  const ipKey = `ip:${clientKey(req)}`;
  const deviceKey = `dev:${clean(body.device, 40) || `anon:${clientKey(req)}`}`;

  const deviceHits = state.rate[deviceKey] ?? [];
  if (deviceHits.length >= DEVICE_LIMIT) {
    return json({ error: "That's plenty of requests for now — give someone else a turn." }, 429);
  }

  const ipHits = state.rate[ipKey] ?? [];
  if (ipHits.length >= IP_LIMIT) {
    return json({ error: 'Too many requests from this network right now.' }, 429);
  }

  if (state.queue.length >= MAX_QUEUE) {
    return json({ error: 'The queue is full.' }, 409);
  }

  // Same song already waiting? Count it as another vote instead of a duplicate.
  const existing = state.queue.find((e) => e.song.toLowerCase() === song.toLowerCase());
  if (existing) {
    existing.votes = (existing.votes ?? 1) + 1;
    if (name && !existing.name) existing.name = name;
  } else {
    state.queue.push({
      id: `${now.toString(36)}${Math.random().toString(36).slice(2, 8)}`,
      song,
      artist,
      name: name || null,
      votes: 1,
      at: now,
    });
  }

  state.rate[deviceKey] = [...deviceHits, now];
  state.rate[ipKey] = [...ipHits, now];
  await writeState(state);

  return json({ ok: true, ...publicView(state) });
};

export const config = { path: ['/api/queue', '/api/queue/:action'] };
