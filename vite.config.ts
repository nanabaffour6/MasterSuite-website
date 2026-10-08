import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

import { siteSeoPlugin } from './scripts/site-seo-plugin';

export default defineConfig({
  define: {
    'import.meta.env.VITE_MASTER_SUITE_BUILD_YEAR': new Date().getFullYear(),
  },
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [react(), siteSeoPlugin()],
  appType: 'mpa',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
