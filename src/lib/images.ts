import type { ImageMetadata } from 'astro';

/**
 * Every photo in src/assets/photos, keyed by filename, so hand-edited JSON
 * data files can name an image as a plain string ("festival-stage.jpg") and
 * still get Astro's build-time optimization.
 */
const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

const byName = new Map<string, ImageMetadata>(
  Object.entries(photos).map(([path, mod]) => [path.split('/').pop()!, mod.default]),
);

export function photo(name: string): ImageMetadata {
  const found = byName.get(name);
  if (!found) {
    throw new Error(
      `Unknown photo "${name}". Add the file to src/assets/photos/ or fix the reference in src/data/.`,
    );
  }
  return found;
}
