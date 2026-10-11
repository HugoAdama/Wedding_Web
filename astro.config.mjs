// @ts-check
import { defineConfig } from 'astro/config';
import process from 'node:process';

// En GitHub Actions, GITHUB_REPOSITORY contiene el nombre exacto con mayúsculas/minúsculas (ej. HugoAdama/Wedding_Web)
const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : 'Wedding_Web';

const site = process.env.SITE_URL || 'https://hugoadama.github.io';
const base = process.env.BASE_PATH || (process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/');

export default defineConfig({
  site,
  base,
  build: {
    format: 'directory',
  },
});
