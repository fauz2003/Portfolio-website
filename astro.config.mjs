// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

const repositoryName = 'Portfolio-website';
const isProduction = process.env.NODE_ENV === 'production';
const base = isProduction ? `/${repositoryName}/` : '/';

// https://astro.build/config
export default defineConfig({
	base,

  vite: {
    envPrefix: ['PUBLIC_', 'VITE_'],
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});