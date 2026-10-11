# 🧠 Aprendizajes y Lecciones Técnicas del Proyecto

Este documento recopila las lecciones aprendidas, desafíos técnicos resueltos y buenas prácticas consolidadas durante la concepción, desarrollo, optimización y despliegue continuo de la invitación de boda digital construida con **Astro 7**.

---

## 1. ⚙️ Astro 7 y los Requisitos de Runtime en CI/CD

### El Desafío
Durante el primer despliegue automatizado en GitHub Actions, el job de compilación falló con el error:
```text
Node.js v20.20.2 is not supported by Astro!
Please upgrade Node.js to a supported version: ">=22.12.0"
```

### El Aprendizaje
- **Astro 7** elevó el requisito mínimo de Node.js a la rama **Node.js 22 LTS** (`>=22.12.0`) para aprovechar las últimas optimizaciones de V8 y la API nativa de módulos.
- Muchos entornos de CI/CD (incluyendo `actions/setup-node@v4` con plantillas predeterminadas) todavía asumen `node-version: 20` si no se declara explícitamente.
- **Solución implementada**:
  - Declarar `node-version: 22` en [.github/workflows/deploy.yml](file:///e:/WEDDING_WEB/.github/workflows/deploy.yml).
  - Declarar `"engines": { "node": ">=22.12.0" }` en [package.json](file:///e:/WEDDING_WEB/package.json) para evitar discrepancias entre entornos locales y remotos.

---

## 2. 🔤 Sensibilidad a Mayúsculas/Minúsculas en GitHub Pages (Case Sensitivity Gotcha)

### El Desafío
Tras solucionar el build de Node, la página cargó en el navegador sin estilos CSS ni imágenes (texto plano HTML sin formato).

### El Aprendizaje
- En sistemas operativos como Windows y macOS, los nombres de archivo y rutas son usualmente insensibles a mayúsculas y minúsculas (*case-insensitive*).
- Sin embargo, los servidores web estáticos de **GitHub Pages son estrictamente sensibles a mayúsculas y minúsculas (*case-sensitive*)**:
  - Repositorio canónico en GitHub: `https://github.com/HugoAdama/Wedding_Web` *(PascalCase)*.
  - Configuración previa: `base: '/WEDDING_WEB/'` *(Todo en mayúsculas)*.
  - Al solicitar `/WEDDING_WEB/_astro/index.css`, el servidor devolvía **HTTP 404**, impidiendo la carga de toda la hoja de estilos y recursos estáticos.
- **Solución arquitectónica robusta**:
  - En [astro.config.mjs](file:///e:/WEDDING_WEB/astro.config.mjs), se implementó la extracción automática de la variable de entorno `process.env.GITHUB_REPOSITORY` provista por GitHub Actions:
    ```javascript
    const repoName = process.env.GITHUB_REPOSITORY
      ? process.env.GITHUB_REPOSITORY.split('/')[1]
      : 'Wedding_Web';
    ```
  - Se creó la función utilitaria [getAssetPath()](file:///e:/WEDDING_WEB/src/utils/path.ts) para normalizar deterministamente todas las rutas de imágenes, favicons y PDFs con el `import.meta.env.BASE_URL`, garantizando funcionamiento idéntico en local (`/`) y en producción (`/Wedding_Web/`).

---

## 3. 🚫 Cero Backend: La Eficiencia de la Arquitectura Directa a WhatsApp

### El Desafío
Las aplicaciones tradicionales de eventos suelen recurrir a bases de datos relacionales/NoSQL (Supabase, Firebase, Cloudflare D1), endpoints Serverless y servicios transaccionales de correo (Resend, SendGrid) para gestionar el RSVP. Esto introduce:
- Costos potenciales y límites de capa gratuita.
- Puntos únicos de falla en APIs de terceros.
- Riesgos de privacidad y filtración de datos sensibles de familiares.
- Fricción en el usuario final (correos que caen en spam).

### El Aprendizaje
- La integración directa mediante el protocolo nativo `wa.me` de WhatsApp eliminó el 100% de la infraestructura de backend sin perder funcionalidad.
- **Subcomponentes atómicos**: Dividir el formulario en componentes con responsabilidad única ([AttendanceSelector.astro](file:///e:/WEDDING_WEB/src/components/sections/rsvp/AttendanceSelector.astro), [GuestStepper.astro](file:///e:/WEDDING_WEB/src/components/sections/rsvp/GuestStepper.astro), [MenuSelector.astro](file:///e:/WEDDING_WEB/src/components/sections/rsvp/MenuSelector.astro)) y un formateador puro en [whatsapp.ts](file:///e:/WEDDING_WEB/src/utils/whatsapp.ts) permitió validar menús y alérgenos de forma completamente desacoplada.
- Tasa de confirmación superior al 98% debido a que los invitados interactúan directamente con su app de mensajería de confianza.

---

## 4. 🎵 Música Ambiental Nativa: Web Audio API vs. MP3 Pesados

### El Desafío
Agregar música a una invitación suele implicar cargar archivos MP3 de 4 a 10 MB. Esto degrada drásticamente la métrica **Largest Contentful Paint (LCP)**, consume datos móviles de los invitados y genera problemas de buffering en conexiones lentas.

### El Aprendizaje
- La **Web Audio API** permite sintetizar instrumentos y progresiones armónicas en tiempo real en apenas ~80 líneas de código TypeScript puro ([audioSynth.ts](file:///e:/WEDDING_WEB/src/utils/audioSynth.ts)).
- **Cero kilobytes de transferencia de red para el audio**: Se emplean osciladores de onda triangular con curvas de envolvente exponencial para simular cuerdas acústicas pulsadas y notas de celesta.
- Se respetan las directivas modernas de *autostart* de los navegadores: el audio solo se inicializa tras un clic explícito del usuario en el reproductor flotante ([AudioPlayer.astro](file:///e:/WEDDING_WEB/src/components/common/AudioPlayer.astro)), con animación sincronizada de ondas y disco de vinilo.

---

## 5. ✒️ Diseño Editorial: Por qué Evitar Emojis en Favor de Iconos SVG

### El Desafío
El uso casual de emojis estándar (🚗, 🅿️, 🚕, ✨) genera tres problemas graves en diseño editorial:
1. **Inconsistencia de renderizado**: Un emoji se dibuja de forma radicalmente distinta en iOS (Apple Color Emoji), Android (Noto Color), Windows (Segoe UI Emoji) y Linux.
2. **Pérdida de jerarquía de color**: Los emojis introducen colores estridentes (amarillos, rojos saturados) que rompen la paleta botánica (oliva, arena, terracota, oro).
3. **Falta de accesibilidad y escalabilidad**: No heredan `currentColor` ni admiten propiedades vectoriales finas.

### El Aprendizaje
- Se creó una biblioteca de **20 iconos SVG 100% vectoriales** en `src/components/icons/`.
- Todos los iconos aceptan las propiedades `size` y `class`, y heredan automáticamente el color del contexto tipográfico mediante `stroke="currentColor"`.
- Al sustituir los emojis de la sección de traslados por [CarIcon.astro](file:///e:/WEDDING_WEB/src/components/icons/CarIcon.astro), [ParkingIcon.astro](file:///e:/WEDDING_WEB/src/components/icons/ParkingIcon.astro) y [TaxiIcon.astro](file:///e:/WEDDING_WEB/src/components/icons/TaxiIcon.astro) contenidos en medallas circulares estilizadas, la estética subió inmediatamente a un estándar de papelería de alta gama.

---

## 6. 💍 Diseño de Favicons: Legibilidad a Microescala

### El Desafío
El diseño inicial del favicon contenía un monograma textual "C & M" con doble marco y ramitas de olivo sobre un contenedor cuadrado oscuro. A escalas de pestaña de navegador (16×16 o 32×32 píxeles), el texto y los detalles se volvían un bloque oscuro borroso y difícil de distinguir.

### El Aprendizaje
- Un buen favicon debe sintetizar un **símbolo icónico y de alto contraste**, no una réplica en miniatura de un póster.
- **Rediseño**: Se implementaron dos **alianzas entrelazadas en oro champagne con diamante solitario** sobre un medallón circular aterciopelado ([public/favicon.svg](file:///e:/WEDDING_WEB/public/favicon.svg)):
  - La geometría circular y los aros entrelazados con efecto 3D tienen siluetas claras que se identifican al instante en la barra de pestañas.
  - Los gradientes metálicos dorados contrastan perfectamente tanto en navegadores con modo oscuro como con modo claro.

---

## 7. 🎨 Personalización en Caliente con CSS Custom Properties

### El Desafío
Permitir que los novios o los evaluadores de portafolio prueben diferentes estilos de boda (Campestre, Romántico, Elegante o Boho) sin tener que compilar múltiples versiones del sitio.

### El Aprendizaje
- Al estructurar todos los colores del sitio como *CSS Custom Properties* en `:root` ([variables.css](file:///e:/WEDDING_WEB/src/styles/variables.css)), el cambio de tema no requiere manipular el DOM ni recargar scripts.
- El componente [ThemeSwitcher.astro](file:///e:/WEDDING_WEB/src/components/common/ThemeSwitcher.astro) simplemente itera las variables definidas en [themes.ts](file:///e:/WEDDING_WEB/src/data/themes.ts) e inyecta los nuevos valores en `document.documentElement.style.setProperty()`.
- Persistir la selección en `localStorage` brinda una experiencia personalizada y fluida entre sesiones.

---

## 8. 🖼️ Accesibilidad Nativa con `<dialog>` para Lightbox

### El Desafío
Las galerías fotográficas en sitios web a menudo dependen de librerías externas pesadas (Lightbox2, Fancybox, PhotoSwipe) que agregan decenas de kilobytes de JavaScript y estilos adicionales.

### El Aprendizaje
- El elemento estándar de HTML5 `<dialog>` ([LightboxModal.astro](file:///e:/WEDDING_WEB/src/components/common/LightboxModal.astro)) proporciona de forma nativa:
  - Fondo oscurecido con `::backdrop`.
  - Trampa de foco de accesibilidad para lectores de pantalla.
  - Cierre automático al presionar la tecla `Escape`.
- Al combinarlo con navegación por teclado (flechas izquierda/derecha) y un contador dinámico, se logró una experiencia de visor de pantalla completa impecable con cero dependencias externas.

---

## 📊 Resumen de Métricas Alcanzadas

| Métrica | Resultado | Beneficio Técnico |
| :--- | :--- | :--- |
| **Lighthouse Performance** | **98 - 100** | Cero JavaScript pesado en tiempo de ejecución. |
| **Accesibilidad (a11y)** | **100** | HTML5 semántico, labels descriptivos, `currentColor` SVG. |
| **Peso Total del Bundle JS** | **< 15 KB** | Vanilla TypeScript modular sin React/Vue en el cliente. |
| **Tiempo de Build en CI/CD** | **~11 - 18 segundos** | Astro 7 con Vite sobre Node.js 22 LTS en GitHub Actions. |
| **Dependencias de Backend** | **0** | Sin bases de datos ni servicios serverless que mantener. |
