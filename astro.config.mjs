// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

const repositoryName = 'portfolio-website';
const isProduction = process.env.NODE_ENV === 'production';
const base = isProduction ? `/${repositoryName}/` : '/';

// https://astro.build/config
export default defineConfig({
	base,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});