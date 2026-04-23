// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

const repositoryName = 'portfolio-website';
const base = `/${repositoryName}`;

// https://astro.build/config
export default defineConfig({
	base,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});