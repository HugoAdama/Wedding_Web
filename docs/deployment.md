# 🚀 Guía de Despliegue en GitHub Pages

Este proyecto incluye integración continua (CI/CD) preconfigurada mediante GitHub Actions y optimizada para **Astro 7**.

🌐 **Despliegue de Producción Activo**: [https://hugoadama.github.io/Wedding_Web/](https://hugoadama.github.io/Wedding_Web/)

---

## 📋 Pasos para Desplegar

### 1. Repositorio en GitHub
El proyecto se encuentra versionado y publicado en GitHub bajo la rama `main`:
```bash
git remote add origin https://github.com/HugoAdama/Wedding_Web.git
git push -u origin main
```

### 2. Configurar la fuente de GitHub Pages
1. Entra a tu repositorio en GitHub ([HugoAdama/Wedding_Web](https://github.com/HugoAdama/Wedding_Web)).
2. Ve a la pestaña **Settings** (Configuración) → **Pages**.
3. En la sección **Build and deployment**:
   - **Source**: Selecciona `GitHub Actions`.

### 3. Workflow Automatizado (.github/workflows/deploy.yml)
Al hacer push a `main`, GitHub Actions ejecuta automáticamente el pipeline:
- Configura **Node.js 22** (versión requerida estrictamente por Astro 7).
- Ejecuta `npm ci` para instalar dependencias deterministas.
- Ejecuta `npm run build` para compilar el sitio estático en `./dist`.
- Sube el artefacto a GitHub Pages y publica la web de forma segura.

---

## 🌐 Configuración de Rutas y Subcarpetas (astro.config.mjs)

Debido a que GitHub Pages sirve los sitios de proyecto bajo una subruta con distinción de mayúsculas y minúsculas (`/Wedding_Web/`), [astro.config.mjs](file:///e:/WEDDING_WEB/astro.config.mjs) detecta dinámicamente el nombre del repositorio:

```javascript
// @ts-check
import { defineConfig } from 'astro/config';
import process from 'node:process';

// En GitHub Actions, GITHUB_REPOSITORY contiene el nombre exacto (ej. HugoAdama/Wedding_Web)
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
```

### 💡 Normalización de Recursos con `getAssetPath` (`src/utils/path.ts`)
Para evitar rutas rotas en imágenes, iconos, PDF y Open Graph, todas las URLs estáticas se normalizan mediante la función:
```typescript
import { getAssetPath } from '../utils/path';

const iconUrl = getAssetPath('/favicon.svg'); // '/Wedding_Web/favicon.svg' en prod, '/favicon.svg' en local
```
Esto asegura que el proyecto funcione al 100% tanto en desarrollo local (`http://localhost:4321/`) como en el subdirectorio de GitHub Pages sin configuraciones manuales adicionales.
