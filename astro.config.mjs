import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import site from './src/data/site.json' with { type: 'json' };

export default defineConfig({
  site: site.url,
  integrations: [
    sitemap({
      // The stage view is private; the setlist is only meaningful at a gig.
      filter: (page) => !/\/(stage|setlist|table-tent)\/?$/.test(page),
    }),
  ],
  build: { inlineStylesheets: 'auto' },
});
