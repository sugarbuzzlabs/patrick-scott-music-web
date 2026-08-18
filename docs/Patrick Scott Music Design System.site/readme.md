# Patrick Scott Music — Design System

Design system for **patrickscottmusic.com**, the artist site of Patrick Scott — an Atlanta-based live performer known for genre-bending covers (hip hop reworked folk-style, country, R&B, pop, chick rock) built around live looping with a pedal. Mostly cover shows at bars, breweries, festivals, and private events.

**Sources provided:** 7 performance photos uploaded by the artist (no logo, no font files, no existing site or codebase). Everything else here is authored from scratch per the artist's direction: bold, clean, eye-catching; clean modern sans; minimal copy.

## The direction

Stage-dark and poster-bold. Near-black warm backgrounds pulled from the hero photo, black & white photography, one stage-light amber accent, heavy expanded uppercase display type, and monospace metadata (dates, venues, labels) that nods to setlists and gig flyers.

## CONTENT FUNDAMENTALS

- **Minimal, few words.** Headlines are 1–4 words ("LIVE. LOOPED. UNEXPECTED."). Body copy rarely exceeds two short sentences.
- **Voice:** first person singular from Patrick ("I"), addressing "you". Down-to-earth but confident. No industry jargon, no exclamation marks.
- **Casing:** display headlines are ALL CAPS. Mono labels/eyebrows are ALL CAPS. Body copy is sentence case.
- **The hook leads:** the genre-bending covers angle ("hip hop, gone folk") and live show energy come first; bio details second.
- **No emoji.** Ever.
- **Examples:**
  - Hero: "ANY SONG. BUILT LIVE." / "Live looping, genre-bending covers. Atlanta."
  - Shows eyebrow: `UPCOMING SHOWS`
  - Booking CTA: "Book a show" / "Bars, breweries, weddings, private events."
  - Email capture: "New shows, first." + single email field.
  - Tips: "Enjoyed the show? Tip the band." → Venmo link.

## VISUAL FOUNDATIONS

- **Color:** dark-first. Page = `--ink-950` (#0C0B0A, warm near-black). Cards one step lighter (`--ink-800`). Text = toned white `--paper` (#F4F1EA). ONE accent: stage-light amber `--accent` (#E0A83E) — used sparingly (CTAs, live indicators, hover underlines). Never more than one accent per view region. A light `--paper` surface exists only for the press kit / print contexts.
- **Type:** Archivo (variable, width axis). Display = weight 800, font-stretch 120%, uppercase, tracking -0.01em, line-height 0.95. Body = Archivo 400/500, 16px, line-height 1.55. Meta/labels = IBM Plex Mono 500, 12px, uppercase, letter-spacing 0.14em. No other fonts.
- **Spacing:** 4px scale (`--space-*`), generous section padding (80–96px), max content width 1200px.
- **Corners:** sharp. `--radius-none` (0) for cards/images/buttons, `--radius-sm` (2px) max for inputs. No pills except the rare tag.
- **Backgrounds:** flat ink, or full-bleed B&W photography with protection gradients (`--protect-bottom`, `--protect-left`). No patterns, no textures, no color gradients.
- **Photography:** always black & white (`--photo-filter`), high contrast, live-performance subjects. Color photos get the grayscale filter applied in CSS. Crop tight and dramatic.
- **Borders:** 1px `--border-subtle` (12% paper) as the default divider; `--border-strong` on hover/active. Accent border reserved for the active/live state.
- **Shadows:** minimal — dark-on-dark relies on borders and surface steps; `--shadow-card` only for overlays/dialogs.
- **Animation:** restrained. 120–200ms, `--ease`, opacity/translate fades only. No bounces. Hover: text gains accent underline or surface lightens one step; buttons invert (fill ↔ outline). Press: brightness down slightly, no shrink.
- **Layout:** sticky top nav (thin, bordered bottom), full-bleed hero, alternating flat-ink sections. Left-aligned type; centered only for the email capture and footer.
- **Transparency/blur:** nav bar only (rgba ink at 80% + backdrop-blur 12px).

## ICONOGRAPHY

- **Icon set:** [Lucide](https://lucide.dev) via CDN — 1.5px stroke, geometric, matches Archivo's cleanness. Load: `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()` with `<i data-lucide="arrow-right"></i>`. In React, pass inline Lucide SVG as children.
- Common glyphs: arrow-right, arrow-up-right (external links), calendar, map-pin, ticket, play, mail, instagram, mic.
- **No logo exists.** The brand mark is typographic: a "PS" monogram (Archivo 900, stretched, in a 1px-bordered square) + "PATRICK SCOTT" wordmark. See `guidelines/brand-monogram.html`. If a real logo is made later, replace this.
- No emoji, no unicode-as-icons.

## Tips / payments note

For tips: link out to Venmo (venmo.com/u/username) or PayPal.me — no processing needed on a static site. The UI kit includes a "Tip the band" pattern built on Button. For merch/ticket sales, use Stripe Payment Links or Bandcamp embeds.

## Index

- `styles.css` — global entry (imports everything under `tokens/`)
- `tokens/` — colors, typography, spacing, effects, fonts
- `guidelines/` — foundation specimen cards (Design System tab)
- `components/core/` — Button, IconButton, Input, Select, Textarea, Badge, Card, Tabs, Dialog
- `components/music/` — ShowRow, SectionHeader, PlatformLink *(intentional additions: artist-site staples — tour listings, section headers with mono eyebrows, streaming links)*
- `ui_kits/website/` — patrickscottmusic.com screens (home, booking, press kit)
- `assets/photos/` — performance photography (apply `--photo-filter`); `hero-bw-stage.png` (16:9 hero) and `hero-bw-stage-square.png` (1:1, for social/cards)
- `SKILL.md` — agent skill entry point

**Caveats:** fonts are Google Fonts CDN (Archivo, IBM Plex Mono) — no font files were provided. No logo was provided; none was invented beyond the typographic monogram.
