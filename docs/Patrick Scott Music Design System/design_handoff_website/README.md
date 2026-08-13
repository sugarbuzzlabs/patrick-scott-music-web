# Handoff: patrickscottmusic.com

## Overview
Build and publish the production artist website for Patrick Scott (Atlanta live-looping performer) to Netlify, from the design system in this bundle.

## About the Design Files
Everything here is a **design reference built in HTML/JSX prototypes** — not production code to ship as-is. Recreate it in a real static-site setup of your choosing (plain HTML/CSS, Astro, or Vite+React all fit; the site is a single page plus booking/press-kit views, so keep it simple — Astro or plain HTML is recommended). Follow the design system exactly; do not restyle.

## Fidelity
**High-fidelity.** Colors, type, spacing, and interactions are final. Copy exact values from `../tokens/*.css` — never round them.

## Source of truth (read these first)
- `../readme.md` — brand context, content fundamentals (tone/copy rules), visual foundations, iconography
- `../styles.css` + `../tokens/` — all design tokens (76 custom props: colors, type, spacing, effects) and `@font-face` for the self-hosted fonts
- `../templates/website/Website.dc.html` — the homepage design: sticky nav, full-bleed B&W hero, shows list, listen/platform links, video cards, email capture, footer
- `../ui_kits/website/` — click-through prototype incl. Booking and Press Kit views (`index.html`, `Home.jsx`, `Booking.jsx`, `PressKit.jsx`)
- `../components/` — reusable primitives (Button, Badge, Card, Dialog, IconButton, Input, Select, Tabs, Textarea, PlatformLink, SectionHeader, ShowRow). Each has a `.d.ts` props contract and `.prompt.md` usage note. Reimplement these as your site's components.

## Assets
- `../assets/fonts/` — Archivo variable (wdth+wght, upright+italic) and IBM Plex Mono 400/500/600. Self-host; `@font-face` rules are in `../tokens/fonts.css`.
- `../assets/photos/` — 7 performance photos. Always render with `filter: var(--photo-filter)` (B&W treatment).
- `../assets/logo*.svg` — logo lockups, **but render the wordmark as live HTML text** (`PATRICK SCOTT/MUSIC`, IBM Plex Mono 400, 0.08em tracking, gold slash `var(--text-accent)`); the SVGs fall back to system monospace inside `<img>`.
- Icons: Lucide (1.5px stroke) — install `lucide` or use CDN.

## Interactions & Behavior
- Sticky nav: `rgba(12,11,10,0.8)` + `backdrop-filter: blur(12px)`, 1px bottom border `var(--border-subtle)`, anchor links to #shows/#listen/#book
- Hover: links shift to `var(--accent)`; transitions use `var(--dur) var(--ease)`
- Email capture: input + solid button; on submit swap to a mono-caps confirmation line ("You're on the list."). Wire to a real form backend (Netlify Forms is free and built-in — add `data-netlify="true"`).
- "Tip" button opens a dialog with Venmo/PayPal links (see `ui_kits/website/index.html`)
- Sold-out shows render the ShowRow sold-out state (no ticket link, muted, badge)

## Content
Use the copy verbatim from the template/UI kit (tone rules in `../readme.md` → CONTENT FUNDAMENTALS). Show listings are sample data — confirm real dates with the artist before launch.

## Netlify publish
1. `npm create astro@latest` (or plain `index.html`) in a new repo; copy `assets/` and token CSS in
2. Build the pages from the references above
3. `git push` to GitHub, then in Netlify: "Add new site → Import from Git" (or `npx netlify-cli deploy --prod` for CLI)
4. Netlify Forms for the email capture; set the custom domain patrickscottmusic.com in Site settings → Domain management
5. Lighthouse pass: preload the two font files, `loading="lazy"` on below-fold photos

## SEO / meta
Add title "Patrick Scott — Live Looping, Atlanta", meta description from the hero eyebrow copy, OG image from `assets/photos/hero-bw-stage.png`, and a favicon from the PS/M mark.
