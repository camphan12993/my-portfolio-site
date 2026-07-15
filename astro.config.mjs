// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://camphan12993.github.io',
  base: '/my-portfolio-site',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()]
  }
});