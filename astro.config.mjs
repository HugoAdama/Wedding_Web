// @ts-check
import { defineConfig } from 'astro/config';
import process from 'node:process';

// Configuración lista para despliegue en GitHub Pages o dominio personalizado
const site = process.env.SITE_URL || 'https://boda.camilaymateo.pe';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  build: {
    format: 'directory',
  },
});
