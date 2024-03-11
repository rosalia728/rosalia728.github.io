import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://silviotron.github.io',
  base: '/darkrebellion',
  integrations: [tailwind()]

});