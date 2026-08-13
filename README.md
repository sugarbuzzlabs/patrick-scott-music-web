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

Merch `href`s are placeholders — point them at Stripe Payment Links or your store.

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

### Booking form → Formspree

1. Create a form at [formspree.io](https://formspree.io) and copy the ID out of the endpoint `https://formspree.io/f/XXXXXXXX`.
2. Put that ID in `formspreeId` in `src/data/site.json`.
3. Rebuild.

The form submits over `fetch` and shows the "Request sent" state in place — no redirect to a third-party thank-you page. If the request fails, the visitor gets your email address instead. Until the ID is set, the submit button composes a `mailto:` with the fields pre-filled, so the form is useful from day one.

There's a `_gotcha` honeypot field for spam.

**Using Netlify Forms instead?** Add `data-netlify="true"` and a hidden `form-name` input to the `<form>` in `src/pages/booking.astro`, and remove the `fetch` handler in that file's `<script>`. Netlify only — it won't work on Vercel.

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

### Custom domain

Point `patrickscottmusic.com` at the host, then confirm `site` in `astro.config.mjs` and `url` in `src/data/site.json` match — canonical URLs, OG tags, and the sitemap are all built from that value.

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
