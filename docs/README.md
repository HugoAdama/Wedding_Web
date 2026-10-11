# 📖 Documentación del Proyecto · Invitación de Boda Digital

Bienvenido a la documentación técnica, de mantenimiento y de personalización de la plantilla de invitación de boda construida en **Astro 7**.

---

## 🗂️ Contenido de la Documentación

1. [**Arquitectura y Responsabilidades**](./architecture.md):
   - Estructura detallada de carpetas (`/data`, `/components`, `/layouts`, `/utils`, `/types`, `/styles`, `/public`).
   - Principios de diseño modular, subcomponentes atómicos y separación de responsabilidades.
   - Capa de utilidades puras (`audioSynth.ts`, `clipboard.ts`, `whatsapp.ts`).
   - Diagrama de flujo de datos y decisiones técnicas (Web Audio API, Theme Switcher, Lightbox nativo).

2. [**Guía de Personalización**](./customization-guide.md):
   - Cómo adaptar los datos de la pareja, fechas, banquete y locaciones en `src/data/wedding.ts`.
   - Modificación y creación de nuevos temas cromáticos en `src/data/themes.ts`.
   - Personalización de la música ambiental en `src/utils/audioSynth.ts` y créditos de canción.
   - Configuración de cuentas bancarias (Soles/Dólares) y billeteras móviles.
   - Sustitución de fotografías en formato WebP.

3. [**RSVP y Privacidad**](./privacy-and-rsvp.md):
   - Arquitectura modular del formulario (`AttendanceSelector`, `GuestStepper`, `MenuSelector`).
   - Funcionamiento del generador y formateador de mensajes de WhatsApp (`src/utils/whatsapp.ts`).
   - Selección de menú (tradicional, vegetariano, vegano, infantil) y alérgenos.
   - Filosofía de privacidad (`noindex`, sin cookies, sin almacenamiento de datos en servidores de terceros).
   - Flujo de registro en Google Sheets / Excel para los novios.

4. [**Despliegue y CI/CD**](./deployment.md):
   - Configuración de GitHub Actions (`.github/workflows/deploy.yml`).
   - Configuración de GitHub Pages (Source: GitHub Actions).
   - Soporte para dominios personalizados o subrutas de repositorios mediante variables de entorno (`SITE_URL`, `BASE_PATH`).

5. [**Aprendizajes y Lecciones Técnicas**](./learnings.md):
   - Lecciones aprendidas en Astro 7 y Node 22 en CI/CD.
   - Resolución de sensibilidad a mayúsculas/minúsculas en GitHub Pages (`Wedding_Web`).
   - Arquitectura zero-backend con WhatsApp, Web Audio API y `<dialog>` nativo.
   - Métricas y rendimiento alcanzado (Lighthouse 98-100).

---

## 🌿 Principios de Diseño del Proyecto

- **Static First**: Renderizado estático de ultra-alto rendimiento en Astro 7 sin sobrecarga de frameworks pesados en el cliente.
- **Micro-interacciones y Experiencia Sensorial**:
  - Música ambiental acústica sintetizada en vivo con Web Audio API (cero descargas de MP3 y 100% offline).
  - Selector en vivo de paletas cromáticas con persistencia en `localStorage`.
  - Visor Lightbox accesible para la galería fotográfica mediante la etiqueta nativa `<dialog>`.
- **Cero Emojis**: Iconografía 100% SVG limpia, accesible y escalable para una estética editorial fina y botánica.
- **Mobile First**: Diseño adaptativo enfocado en la experiencia de los invitados en teléfonos móviles (pantalla en mano).
- **Mantenibilidad Centralizada**: Modificar los datos en `src/data/wedding.ts` y las paletas en `src/data/themes.ts` actualiza automáticamente todas las vistas, mapas, calendarios y mensajes.
