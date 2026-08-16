/**
 * Renders show artwork at social sizes using the site's own design tokens.
 * Rendered through headless Chrome so Archivo and IBM Plex Mono actually load —
 * neither is installed locally, so an SVG/sharp pipeline would silently fall
 * back to Helvetica and look off-brand.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = '/Users/patrick/Code/github/sugarbuzzlabs/web/patrick-scott-music-web';
const OUT = path.dirname(__filename);
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const show = {
  day: 'Saturday',
  date: 'Aug 22',
  venue: "Johnny's Pizza",
  city: 'Hoschton, GA',
  time: process.env.SHOW_TIME || '',
  site: 'patrickscottmusic.com',
};

// Embedded so the render never depends on a file:// path resolving.
const b64 = (p) => fs.readFileSync(p).toString('base64');
const heroWide = `data:image/png;base64,${b64(`${ROOT}/src/assets/photos/hero-bw-stage.png`)}`;
const heroSquare = `data:image/png;base64,${b64(`${ROOT}/src/assets/photos/hero-bw-stage-square.png`)}`;

const FORMATS = [
  { name: 'instagram-square-1080', w: 1080, h: 1080, img: heroSquare, pos: 'center 18%', scale: 1 },
  { name: 'instagram-story-1080x1920', w: 1080, h: 1920, img: heroSquare, pos: 'center 20%', scale: 1.15 },
  { name: 'facebook-1200x630', w: 1200, h: 630, img: heroWide, pos: 'center 22%', scale: 0.8 },
];

const page = (f) => `<!doctype html>
<html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --ink-950: #0C0B0A;
    --paper: #F4F1EA;
    --gray-300: #B4AC9E;
    --accent: #E0A83E;
    --photo-filter: grayscale(1) contrast(1.06) brightness(0.98);
    --protect-bottom: linear-gradient(180deg, rgba(12,11,10,0) 28%, rgba(12,11,10,0.94) 88%);
    --s: ${f.scale};
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${f.w}px; height: ${f.h}px; background: var(--ink-950); overflow: hidden; }
  .card { position: relative; width: ${f.w}px; height: ${f.h}px; overflow: hidden; }
  .card img {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover; object-position: ${f.pos}; filter: var(--photo-filter);
  }
  .protect { position: absolute; inset: 0; background: var(--protect-bottom); }
  /* A touch of extra ink behind the type block only — keeps the face clean */
  .protect2 {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, rgba(12,11,10,0.55) 0%, rgba(12,11,10,0) 30%);
  }

  .inner {
    position: absolute; inset: 0;
    display: flex; flex-direction: column; justify-content: space-between;
    padding: calc(56px * var(--s));
  }

  .brand { display: flex; align-items: center; gap: calc(14px * var(--s)); }
  .mark {
    width: calc(52px * var(--s)); height: calc(52px * var(--s));
    border: calc(2px * var(--s)) solid var(--paper);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Archivo', sans-serif; font-weight: 900; font-stretch: 120%;
    font-size: calc(21px * var(--s)); color: var(--paper); line-height: 1;
  }
  .word {
    font-family: 'Archivo', sans-serif; font-weight: 800; font-stretch: 120%;
    text-transform: uppercase; font-size: calc(21px * var(--s));
    letter-spacing: 0.02em; color: var(--paper);
  }

  .mono {
    font-family: 'IBM Plex Mono', monospace; font-weight: 500;
    letter-spacing: 0.14em; text-transform: uppercase;
  }

  .when { font-size: calc(19px * var(--s)); color: var(--accent); margin-bottom: calc(18px * var(--s)); }

  .venue {
    font-family: 'Archivo', sans-serif; font-weight: 800; font-stretch: 120%;
    text-transform: uppercase; letter-spacing: -0.01em; line-height: 0.92;
    color: var(--paper); font-size: ${f.name.includes('facebook') ? 'calc(74px * var(--s))' : 'calc(96px * var(--s))'};
  }

  .where { font-size: calc(19px * var(--s)); color: var(--paper); margin-top: calc(22px * var(--s)); }

  .rule { height: calc(2px * var(--s)); background: var(--accent); width: calc(90px * var(--s)); margin-top: calc(26px * var(--s)); }

  .foot {
    display: flex; align-items: flex-end; justify-content: space-between;
    gap: calc(20px * var(--s)); margin-top: calc(26px * var(--s));
  }
  .site { font-size: calc(17px * var(--s)); color: var(--gray-300); }
  .tag { font-size: calc(15px * var(--s)); color: var(--accent); text-align: right; }
</style></head>
<body>
  <div class="card">
    <img src="${f.img}" alt="">
    <div class="protect2"></div>
    <div class="protect"></div>
    <div class="inner">
      <div class="brand">
        <div class="mark">PS</div>
        <div class="word">Patrick Scott</div>
      </div>

      <div>
        <div class="when mono">${show.day} · ${show.date}${show.time ? ' · ' + show.time : ''}</div>
        <div class="venue">${show.venue}</div>
        <div class="where mono">${show.city}</div>
        <div class="rule"></div>
        <div class="foot">
          <div class="site mono">${show.site}</div>
          <div class="tag mono">Live looping<br>Genre-bending covers</div>
        </div>
      </div>
    </div>
  </div>
</body></html>`;

for (const f of FORMATS) {
  const html = path.join(OUT, `${f.name}.html`);
  fs.writeFileSync(html, page(f));
  execFileSync(CHROME, [
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    `--window-size=${f.w},${f.h}`,
    `--screenshot=${path.join(OUT, f.name + '.png')}`,
    '--virtual-time-budget=6000',
    `file://${html}`,
  ], { stdio: 'pipe' });
  const st = fs.statSync(path.join(OUT, `${f.name}.png`));
  console.log(`${f.name}.png  ${f.w}x${f.h}  ${(st.size / 1024).toFixed(0)}KB`);
}
