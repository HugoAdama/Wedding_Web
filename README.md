# 🌿 Camila & Mateo · Invitación de Boda Digital

Sitio web estático para invitación de boda construido con **Astro 7**, arquitectura modular por componentes, datos centralizados y tipados, optimizado para alto rendimiento (Lighthouse 95+), accesibilidad y despliegue continuo en **GitHub Pages**.

> 📚 **Documentación Completa**: Consulta la carpeta [`docs/`](./docs/README.md) para guías detalladas de [Arquitectura](./docs/architecture.md), [Personalización](./docs/customization-guide.md), [Privacidad y RSVP](./docs/privacy-and-rsvp.md) y [Despliegue](./docs/deployment.md).

---

## ✨ Características Principales

- **Arquitectura Modular en Astro 7**: Separación limpia de responsabilidades (`src/data/`, `src/components/`, `src/layouts/`, `src/utils/`, `src/types/`, `src/styles/`).
- **Datos Centralizados y Tipados**: Toda la información del evento (fechas, locaciones, cronograma, hoteles, regalos, FAQs) vive en `src/data/wedding.ts` respaldada por contratos en `src/types/wedding.ts`.
- **Selector de Paletas en Vivo (Demo Theme Switcher)**: Selector interactivo flotante (`ThemeSwitcher.astro` y `src/data/themes.ts`) que permite alternar en tiempo real entre 4 armonías de color (Oliva & Oro, Rosa Polvo, Azul Noche y Terracota) con persistencia en `localStorage`.
- **Reproductor Musical Ambiental Acústico**: Reproductor flotante con Web Audio API (`audioSynth.ts`) que sintetiza una melodía acústica suave y cálida en tiempo real con ecualizador animado, 100% offline y sin descargar archivos MP3 pesados.
- **Galería con Visor Lightbox Modal Accesible**: Modal nativo basado en la API HTML5 `<dialog>` (`LightboxModal.astro`), con controles de anterior/siguiente, contador, cierre por backdrop o tecla `Esc` y navegación por gestos/teclado.
- **RSVP Modular sin Backend Pesado**: Formulario desacoplado en subcomponentes (`AttendanceSelector.astro`, `GuestStepper.astro`, `MenuSelector.astro`) que valida datos y genera dinámicamente el mensaje preformateado para abrir en **WhatsApp** (`whatsapp.ts`).
- **Mesa de Regalos & Portapapeles Inteligente**: Soporte para cuentas bancarias (Soles y Dólares), código interbancario (CCI) y billeteras móviles, con botón de copia rápida al portapapeles y retroalimentación visual inmediata (`clipboard.ts`).
- **Barra de Progreso y Revelado de Lectura**: Indicador superior dorado de avance de lectura y animaciones escalonadas con `IntersectionObserver`, respetando `prefers-reduced-motion` y con respaldo `<noscript>`.
- **Sin Dependencias Innecesarias**: Sin D1, sin Serverless Functions, sin Turnstile, sin servicios de correo externos ni librerías pesadas en el cliente.
- **Iconografía 100% SVG**: Cero emojis. 17 iconos vectoriales semánticos y botánicos diseñados en SVG accesible (`currentColor`).
- **Fotografías WebP Optimizadas**: Galería y recuerdos procesados en formato WebP con dimensiones responsivas y carga diferida (`loading="lazy"`).
- **Integración con Calendarios**: Enlace directo para agregar a **Google Calendar** y descarga de archivo estándar **iCalendar (.ics)** para Apple Calendar / Outlook.
- **Plan B & Logística de Contingencia**: Sección con itinerario de emergencia y descarga de documento **Plan B en PDF**.
- **Privacidad Respetada**: Etiqueta `<meta name="robots" content="noindex, nofollow">` y aviso legal claro; ningún dato se almacena en bases de datos o servidores externos.
- **CI/CD Automatizado**: Workflow de **GitHub Actions** (`.github/workflows/deploy.yml`) para compilación y publicación automática en GitHub Pages.

---

## 📁 Estructura del Proyecto

```text
wedding-web/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline de despliegue a GitHub Pages
├── public/
│   ├── favicon.svg             # Favicon vectorial con monograma y olivo
│   ├── plan-b-boda.pdf         # Guía oficial del invitado y plan de contingencia
│   └── images/                 # Fotografías WebP optimizadas
├── src/
│   ├── components/
│   │   ├── common/             # Componentes utilitarios globales
│   │   │   ├── AddToCalendar.astro   # Google Calendar y descarga de .ics
│   │   │   ├── AudioPlayer.astro     # Reproductor musical ambiental flotante
│   │   │   ├── LightboxModal.astro   # Visor de pantalla completa para galería
│   │   │   ├── SectionHeader.astro   # Encabezados con divisores botánicos
│   │   │   └── ThemeSwitcher.astro   # Selector en vivo de paletas cromáticas
│   │   ├── icons/              # Biblioteca propia de iconos SVG (17 iconos, cero emojis)
│   │   └── sections/           # Secciones modulares de la página:
│   │       ├── Header.astro          # Barra superior con menú responsive
│   │       ├── Hero.astro            # Portada con foto en arco y cuenta regresiva
│   │       ├── Countdown.astro       # Contador de días, horas y minutos
│   │       ├── StoryTimeline.astro   # Línea de tiempo cronológica de la pareja
│   │       ├── CeremonyReception.astro# Locaciones, mapa embebido y Waze
│   │       ├── ScheduleTimeline.astro# Cronograma horario del día
│   │       ├── DressCode.astro       # Código de vestimenta y paleta sugerida
│   │       ├── PhotoGallery.astro    # Galería editorial escalonada
│   │       ├── Lodging.astro         # Hoteles recomendados y distancias
│   │       ├── GiftRegistry.astro    # Cuentas bancarias y copia al portapapeles
│   │       ├── RsvpSection.astro     # Formulario interactivo principal
│   │       │   └── rsvp/             # Subcomponentes atómicos de confirmación:
│   │       │       ├── AttendanceSelector.astro # Botones de asistencia Sí / No
│   │       │       ├── GuestStepper.astro       # Control de cantidad de invitados
│   │       │       └── MenuSelector.astro       # Selección de menú y alérgenos
│   │       ├── ContingencyPlan.astro # Logística Plan B y descarga de PDF
│   │       ├── Faq.astro             # Preguntas frecuentes con details/summary
│   │       ├── Contact.astro         # Canales directos de contacto
│   │       └── Footer.astro          # Despedida, hashtag y monograma
│   ├── data/
│   │   ├── themes.ts           # Definición de paletas y variables cromáticas demo
│   │   └── wedding.ts          # Datos centralizados y tipados del evento
│   ├── layouts/
│   │   └── Layout.astro        # Layout principal, SEO, Open Graph y observadores
│   ├── pages/
│   │   └── index.astro         # Ensamblador de la página de inicio
│   ├── styles/
│   │   ├── variables.css       # Tokens de diseño, colores HSL/Hex y tipografía
│   │   ├── reset.css           # Reset accesible y prefers-reduced-motion
│   │   └── global.css          # Estilos globales, botones y contenedores
│   ├── types/
│   │   └── wedding.ts          # Interfaces TypeScript (Eventos, Menús, RSVP, etc.)
│   └── utils/
│       ├── audioSynth.ts       # Sintetizador acústico con Web Audio API
│       ├── clipboard.ts        # Helper para copiar al portapapeles con feedback
│       └── whatsapp.ts         # Generador de mensaje formateado y URL wa.me
├── astro.config.mjs            # Configuración para GitHub Pages y modo estático
├── package.json
└── tsconfig.json
```

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Astro 7](https://astro.build/)
- **Estilos**: Vanilla CSS con Custom Properties (Mobile First, Grid, Flexbox, `clamp()`, `aspect-ratio`)
- **Lógica Interactiva**: Vanilla JavaScript y TypeScript (Sintetizador Web Audio, generador RSVP WhatsApp, descarga .ics, portapapeles, visor Lightbox)
- **Audio Nativo**: Web Audio API (acordes de Re, Sol, Si menor y La Mayor sin archivos externos)
- **Optimización de Medios**: Sharp & WebP
- **Tipografías**: *Cormorant Garamond*, *Great Vibes*, *Inter* (Google Fonts)
- **CI/CD**: GitHub Actions (`upload-pages-artifact`, `deploy-pages`)

---

## 🚀 Instalación y Desarrollo Local

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

3. **Compilar para producción**:
   ```bash
   npm run build
   ```
   El resultado estático se generará en la carpeta `./dist`.

4. **Previsualizar la compilación de producción**:
   ```bash
   npm run preview
   ```

---

## 🚢 Despliegue en GitHub Pages

1. Sube este repositorio a GitHub en la rama `main`.
2. En GitHub, ve a **Settings** → **Pages**.
3. En **Build and deployment**, selecciona **Source: GitHub Actions**.
4. Cada `git push` a `main` activará el workflow en `.github/workflows/deploy.yml` y publicará tu sitio automáticamente.

---

## 📋 Checklist Final del Proyecto

- [x] Web 100% estática en Astro 7 lista para GitHub Pages.
- [x] Sin D1, sin Functions, sin Turnstile, sin Resend.
- [x] Contenido esencial completo, coherente y tipado en TypeScript.
- [x] Selector interactivo de paletas en vivo (`ThemeSwitcher.astro`) con 4 temas.
- [x] Reproductor de música acústica con Web Audio API (`audioSynth.ts`) y ecualizador animado.
- [x] Visor Lightbox modal accesible para fotografías (`<dialog>` HTML5).
- [x] Subcomponentes modulares de confirmación de asistencia (`AttendanceSelector`, `GuestStepper`, `MenuSelector`).
- [x] Formulario interactivo con generador de enlace y mensaje de WhatsApp (`whatsapp.ts`).
- [x] Copiado al portapapeles accesible para cuentas bancarias y CCI (`clipboard.ts`).
- [x] Fecha límite de confirmación destacada (15 de octubre de 2026).
- [x] Mapa interactivo (Google Maps iframe) y enlaces a Google Maps / Waze.
- [x] Agregar a Google Calendar y descarga de archivo `.ics` estándar.
- [x] Open Graph configurado para previsualizaciones en WhatsApp y redes sociales.
- [x] `<meta name="robots" content="noindex, nofollow">` activo para privacidad.
- [x] Documento Plan B en PDF generado y disponible para descarga directa.
- [x] Imágenes WebP generadas y optimizadas.
- [x] Iconografía 100% en SVG (17 iconos específicos, cero emojis).
- [x] HTML semántico sin etiquetas sin cerrar (cumple con la rigurosidad de Astro 7).
- [x] Workflow de GitHub Actions configurado en `.github/workflows/deploy.yml`.

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
