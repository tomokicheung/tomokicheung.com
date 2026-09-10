// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  // Required for canonical URLs and Open Graph, which must be absolute.
  site: 'https://tomokicheung.com',

  fonts: [
    {
      name: 'Cormorant Garamond',
      cssVariable: '--font-cormorant',
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ['normal', 'italic'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      name: 'Space Grotesk',
      cssVariable: '--font-space-grotesk',
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
