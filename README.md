# patrickscottmusic.com

Static artist site for Patrick Scott, built with [Astro](https://astro.build). No backend, no database — it builds to plain HTML/CSS/JS in `dist/` and hosts free on Netlify or Vercel.

Design comes from the design system in `docs/Patrick Scott Music Design System.site/`. Tokens are ported **verbatim** — don't re-derive colors or type sizes, edit the token files.

---

## Local dev

```bash
npm install
```

```bash
npm run dev
```

Site runs at http://localhost:4321.

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run check` | TypeScript / Astro diagnostics |
| `npm run assets` | Regenerate favicons + OG image (runs automatically on dev/build) |

---

## What to edit

Everything you'll change day to day is JSON in `src/data/`.

### `src/data/shows.json` — the show listings

One object per date. Delete past shows or leave them; anything before today is filtered out automatically and dates sort themselves.

```json
{
  "date": "2026-08-21",
  "time": "8:00 PM",
  "venue": "Monday Night Brewing",
  "city": "Atlanta, GA",
  "ticketHref": "https://...",
  "note": "looping set",
  "soldOut": false
}
```

- `date` — ISO `YYYY-MM-DD`. It renders as `FRI · AUG 21`.
- `ticketHref` — a ticket link, or `null` for a free show (renders "Free show").
- `soldOut: true` — dims the row and replaces the button with "Sold out".
- `note` — optional, appended after the city.

### `src/data/links.json` — streaming + social

Shown in the Listen section and the footer. Replace the placeholder URLs with your real profiles.

### `src/data/videos.json` and `src/data/merch.json`

Cards on the home page. `image` is a filename from `src/assets/photos/`. Drop a new photo in that folder and reference it by name — Astro optimizes it and generates responsive sizes at build.

**Outstanding placeholders — these are live on the public site:**

- Every `href` in `videos.json` is `"#"`. Point them at the real YouTube videos.
- Every `href` in `merch.json` is `"#"`, and the items themselves are invented (tee, cap, poster) with placeholder prices and stand-in photos. Point them at Stripe Payment Links or your store, or delete the section from `src/pages/index.astro` if you aren't selling merch yet.
- **Download EPK** on the press-kit page links to the press-kit page itself. Point it at a hosted PDF or zip of the photos and bio.

Nothing on the site announces these as unfinished — a link that goes nowhere just looks broken, so either fill them in or remove the sections.

### `src/data/site.json` — the config with the TODOs

| Key | What to set |
| --- | --- |
| `formspreeId` | Formspree form ID for the booking form (see below) |
| `venmoHandle` | Your Venmo handle, no `@` — drives the tip link **and** the QR code |
| `paypalHandle` | Optional PayPal.me handle; set to `null` to hide that button |
| `newsletterAction` | Your mailing-list provider's form endpoint (see below) |
| `bookingEmail` | Booking address used in the footer, press kit, and mailto fallback |

Placeholder values start with `TODO_`. While they're unset the site still works — it shows a visible amber TODO note and falls back to something sensible. Search the repo for `TODO` to find them all.

---

## Wiring the forms

### Booking form → Netlify Forms

**No configuration in this repo.** The form in `src/pages/booking.astro` carries `name="booking"`, `data-netlify="true"`, and a hidden `form-name` input. Netlify's build bot detects it in the deployed HTML and starts capturing submissions automatically.

- **Reading submissions:** Netlify → your project → **Forms → booking**. Exportable as CSV.
- **Getting notified:** Forms → booking → Settings → **Form notifications** → add an email notification pointing at `booking@patrickscottmusic.com`. Do this, or submissions pile up unread in the dashboard.
- **Spam:** a `bot-field` honeypot is wired via `data-netlify-honeypot`. Netlify also offers reCAPTCHA if spam ever becomes a problem.
- **Free tier:** 100 submissions/month.

The form submits over `fetch` and shows the "Request sent" state in place, so there's no redirect to a generic thank-you page. If the POST fails, the visitor is shown the booking email address instead.

**Local dev:** Netlify Forms only exists on a Netlify deploy, so on `localhost` the submit handler falls back to composing a `mailto:`. Test the real path on a deploy preview, not `npm run dev`.

**If you ever leave Netlify,** this form stops working — it's the one piece of genuine platform lock-in. Swapping to Formspree means pointing the `fetch` at `https://formspree.io/f/<id>` and dropping the `data-netlify*` attributes.

### Email signup → your mailing-list provider

**TODO:** the signup form is stubbed. Set `newsletterAction` in `src/data/site.json` to your provider's POST endpoint and `newsletterEmailField` to the field name it expects:

| Provider | Action | Field |
| --- | --- | --- |
| Mailchimp | `https://<user>.us1.list-manage.com/subscribe/post?u=...&id=...` | `EMAIL` |
| ConvertKit | `https://app.convertkit.com/forms/<form-id>/subscriptions` | `email_address` |
| Buttondown | `https://buttondown.email/api/emails/embed-subscribe/<user>` | `email` |

Until it's set the form doesn't post anywhere — it validates the address and shows "You're on the list." in place, with a TODO note on the page.

### Tips → Venmo

Set `venmoHandle` in `src/data/site.json`. The "Tip" button in the nav (and the tip card in the press kit) opens a dialog with a Venmo link, a PayPal link, and a **QR code generated at build time** from that handle — it's inline SVG, so there's no external image request and nothing to keep in sync. Change the handle, rebuild, and the QR follows.

---

## Deploying

Build output is a static `dist/` folder. Both configs are already in the repo.

### Netlify

`netlify.toml` sets the build command, publish directory, and long-lived cache headers for hashed assets.

```bash
npx netlify deploy --prod
```

Or connect the repo in the Netlify UI — it picks up `netlify.toml` on its own.

### Vercel

`vercel.json` sets the framework preset and output directory.

```bash
npx vercel --prod
```

Or import the repo at vercel.com.

### Custom domain — current setup

Live at **https://patrickscottmusic.com**, hosted on Netlify (project `patrick-scott-music`, Sugarbuzz Labs team).

- **Registrar:** Namecheap
- **DNS:** Netlify DNS — nameservers are `dns1`–`dns4.p02.nsone.net`. Records are managed in Netlify, *not* in Namecheap's Advanced DNS panel. Editing records at Namecheap will do nothing.
- **Apex is primary**, `www` 301-redirects to it. `http` → `https`. HSTS enabled.
- **TLS:** Let's Encrypt, auto-renewing, covers apex + `*.patrickscottmusic.com`.

If you ever change the domain, update `site` in `astro.config.mjs` and `url` in `src/data/site.json` to match — canonical URLs, OG tags, and the sitemap are all built from that value.

#### DNS records

| Type | Host | Value | Purpose |
| --- | --- | --- | --- |
| NETLIFY | `@` | `patrick-scott-music.netlify.app` | site |
| NETLIFY | `www` | `patrick-scott-music.netlify.app` | site |
| MX (10) | `@` | `mx.zoho.com` | mail |
| MX (20) | `@` | `mx2.zoho.com` | mail |
| MX (50) | `@` | `mx3.zoho.com` | mail |
| TXT | `@` | `v=spf1 include:zohomail.com ~all` | SPF |
| TXT | `@` | `zoho-verification=zb62318635.zmverify.zoho.com` | Zoho domain verification |
| TXT | `zmail._domainkey` | `v=DKIM1; k=rsa; p=…` | DKIM |

Records can be edited in the Netlify UI (Domains → patrickscottmusic.com) or from the CLI:

```bash
netlify api getDnsRecords --data '{"zone_id":"6a7e82eebf140581ae71c84d"}'
```

Note the CLI needs the create payload wrapped in `body`:

```bash
netlify api createDnsRecord --data '{"zone_id":"<zone>","body":{"type":"TXT","hostname":"patrickscottmusic.com","value":"...","ttl":3600}}'
```

### Email

`booking@patrickscottmusic.com` is published in the footer, the press kit, and used as the booking form's mailto fallback — so it has to receive mail.

Mail runs on **Zoho Mail**, under the existing Sugarbuzz Labs Zoho organization — `patrickscottmusic.com` is an additional domain in that org, not a separate account. The org's primary domain is `ironandpsalm.com`; leave it that way. Changing the primary domain rewrites existing identities in the org.

DNS side is complete: MX, SPF, domain verification, and DKIM are all in the zone above and confirmed propagating.

Remaining, in the Zoho admin console:

1. Add `booking@patrickscottmusic.com` as an **email alias** on the existing Sugarbuzz Labs user (Users → user → Mail Alias). An alias delivers into the inbox you already read, allows send-as, and uses no extra user license.
2. Send a test message from an outside address (Gmail, phone) and confirm it arrives.

The SPF record uses `~all` (soft fail) to be forgiving during setup. Tighten it to `-all` once mail is confirmed working and nothing else sends as this domain.

Consider adding a DMARC record (`_dmarc` TXT, starting at `p=none`) once SPF and DKIM are both passing.

---

## SEO

Handled in `src/layouts/Base.astro`:

- Per-page title, description, and canonical URL
- Open Graph + Twitter card tags using `public/og-image.jpg` — the 1:1 hero crop, generated at 1200×1200 with the design system's photo treatment baked in
- `sitemap-index.xml` via `@astrojs/sitemap`, referenced from `public/robots.txt`
- JSON-LD: `MusicGroup` on the home page, plus a `MusicEvent` per upcoming show (sold-out dates are marked as such), so shows are eligible for event rich results
- Favicons and the web manifest from the PS monogram (`public/favicon.svg`)

`npm run assets` regenerates the icons and OG image from `public/favicon.svg` and `src/assets/photos/hero-bw-stage-square.png`. It runs automatically before dev and build, so those files aren't committed.

---

## Project structure

```
src/
  components/     Design-system components (Button, Card, ShowRow, …)
  data/           Hand-editable JSON — shows, links, videos, merch, config
  layouts/Base    Page shell: head/SEO, nav, footer, tip dialog
  lib/            Show dates, photo lookup, tip URLs + QR
  pages/          index, booking, press-kit, 404
  styles/
    tokens/       Design tokens, copied verbatim from the design system
    global.css    Base styles built only from those tokens
  assets/photos/  Source photography (optimized at build)
public/           Favicons, manifest, robots.txt, generated OG image
```

### Components

Reimplemented from the design system's React reference components in `docs/…/components/`. Same props, same visuals — hover and focus states moved from JS state to CSS pseudo-classes, so the site ships with almost no client JavaScript.

`Button` · `Card` · `Badge` · `Input` · `Select` · `Textarea` · `Dialog` · `IconButton` · `SectionHeader` · `ShowRow` · `PlatformLink`

Only three things use JS at all: the tip dialog (native `<dialog>`), the booking form submit, and the email signup stub.

---

## Design rules

From `docs/…/readme.md` and `SKILL.md` — worth keeping in mind before adding anything:

- **Black, white, and one amber accent** (`--accent`). Nothing outside the tokens. No gradients beyond the tokenized text-protection ones.
- Accent used **sparingly** — CTAs, eyebrows, live/active states, hover. Never more than one accent element per view region.
- **Photography is always black & white** via `--photo-filter`. Use the `.photo` class or the `Card` component.
- **Sharp corners.** `--radius-none` everywhere; `--radius-sm` (2px) on inputs only.
- **Type:** Archivo for display (800 weight, 120% stretch, uppercase) and body; IBM Plex Mono for labels, dates, and eyebrows (12px, uppercase, `0.14em` tracking — the `.mono` class).
- **Copy is minimal.** Headlines are 1–4 words, all caps. Body is sentence case, rarely over two sentences. First person, no exclamation marks, no emoji.
- Motion is restrained: 120–200ms, opacity/translate only, no bounce.
