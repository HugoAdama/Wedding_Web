# 🚀 Guía de Despliegue en GitHub Pages

Este proyecto incluye integración continua (CI/CD) preconfigurada mediante GitHub Actions.

---

## 📋 Pasos para Desplegar

### 1. Subir el repositorio a GitHub
Crea un repositorio público o privado en tu cuenta de GitHub y sube tu código a la rama `main`:
```bash
git init
git add .
git commit -m "feat: invitacion de boda lista en Astro 7"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
git push -u origin main
```

### 2. Configurar la fuente de GitHub Pages
1. Entra a tu repositorio en GitHub.
2. Ve a la pestaña **Settings** (Configuración) → **Pages**.
3. En la sección **Build and deployment**:
   - **Source**: Selecciona `GitHub Actions`.

### 3. Verificar el Workflow
Al hacer push a `main`, GitHub Actions ejecutará automáticamente el archivo [.github/workflows/deploy.yml](file:///e:/WEDDING_WEB/.github/workflows/deploy.yml):
- Instala Node 20.
- Ejecuta `npm ci` y `npm run build`.
- Sube el contenido de `./dist` como artefacto de GitHub Pages.
- Despliega la web de forma segura.

---

## 🌐 Configuración de Rutas (astro.config.mjs)

En [astro.config.mjs](file:///e:/WEDDING_WEB/astro.config.mjs):

```javascript
// @ts-check
import { defineConfig } from 'astro/config';
import process from 'node:process';

const site = process.env.SITE_URL || 'https://boda.camilaymateo.pe';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  build: {
    format: 'directory',
  },
});
```

- Si tu repositorio se despliega en una subcarpeta (por ejemplo: `https://<usuario>.github.io/<nombre-repo>/`), puedes establecer en los secrets o variables del workflow de GitHub:
  - `BASE_PATH`: `/<nombre-repo>/`
  - `SITE_URL`: `https://<usuario>.github.io`
- Si utilizas un dominio personalizado o un repositorio con nombre `<usuario>.github.io`, los valores predeterminados funcionan directamente.
