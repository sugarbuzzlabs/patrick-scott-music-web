/**
 * Generates the raster assets that must live at stable URLs in public/:
 *   - apple-touch-icon.png / favicon-*.png / favicon.ico  (PS monogram)
 *   - og-image.jpg  (1:1 hero crop with the design system's photo treatment)
 *
 * Run via `npm run assets` (also runs automatically before build/dev).
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = (f) => path.join(root, 'public', f);

const monogram = await readFile(pub('favicon.svg'));

/** PS monogram at the sizes iOS/Android/Windows ask for. */
const iconSizes = [
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
  ['favicon-32.png', 32],
];

for (const [name, size] of iconSizes) {
  await sharp(monogram, { density: 384 })
    .resize(size, size, { fit: 'contain', background: '#0C0B0A' })
    .png()
    .toFile(pub(name));
  console.log(`icon  ${name} (${size}px)`);
}

/* .ico for legacy /favicon.ico requests — a bare 32px PNG payload, which every
   current browser accepts inside an ICO container. */
const png32 = await sharp(monogram, { density: 384 }).resize(32, 32).png().toBuffer();
const ico = Buffer.concat([
  Buffer.from([0, 0, 1, 0, 1, 0, 32, 32, 0, 0, 1, 0, 32, 0]),
  (() => {
    const b = Buffer.alloc(8);
    b.writeUInt32LE(png32.length, 0);
    b.writeUInt32LE(22, 4);
    return b;
  })(),
  png32,
]);
await writeFile(pub('favicon.ico'), ico);
console.log('icon  favicon.ico (32px)');

/* OG card: the 1:1 hero crop, with --photo-filter baked in
   (grayscale(1) contrast(1.06) brightness(0.98)). */
await sharp(path.join(root, 'src/assets/photos/hero-bw-stage-square.png'))
  .resize(1200, 1200, { fit: 'cover' })
  .grayscale()
  .linear(1.06, -0.06 * 128) // contrast(1.06) about the mid-point
  .modulate({ brightness: 0.98 })
  .jpeg({ quality: 82, progressive: true, mozjpeg: true })
  .toFile(pub('og-image.jpg'));
console.log('image og-image.jpg (1200x1200)');
