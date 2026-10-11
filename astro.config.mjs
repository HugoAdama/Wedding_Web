// @ts-check
import { defineConfig } from 'astro/config';
import process from 'node:process';

// Configuración lista para despliegue en GitHub Pages (HugoAdama/WEDDING_WEB)
const site = process.env.SITE_URL || 'https://hugoadama.github.io';
const base = process.env.BASE_PATH || (process.env.NODE_ENV === 'production' ? '/WEDDING_WEB/' : '/');

export default defineConfig({
  site,
  base,
  build: {
    format: 'directory',
  },
});
