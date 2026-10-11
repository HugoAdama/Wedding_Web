# 🎨 Guía de Personalización del Proyecto

Esta guía explica paso a paso cómo adaptar completamente la plantilla para una nueva boda.

---

## 1. Central de Datos (`src/data/wedding.ts`)

Más del 95% del contenido de la invitación se configura directamente en este archivo.

### Nombres, Canción y Pareja
```typescript
couple: {
  bride: 'Camila',
  groom: 'Mateo',
  fullNameBride: 'Camila Morales',
  fullNameGroom: 'Mateo Valdivia',
  initials: 'C & M',
  hashtag: '#CamilaYMateo2026',
  song: {
    title: 'Harvest Moon',
    artist: 'Neil Young',
  },
  pet: {
    name: 'Miga',
    description: 'Nuestra adorada gata atigrada que nos acompaña en cada etapa.',
  },
}
```

### Fechas y Plazos
```typescript
date: {
  display: 'Sábado 14 de noviembre de 2026',
  shortDisplay: '14 · 11 · 2026',
  iso: '2026-11-14T16:00:00-05:00', // Formato ISO para el contador regresivo
  city: 'Lima, Perú',
  rsvpDeadline: '15 de octubre de 2026',
}
```

### Locaciones y Enlaces de Mapas
```typescript
ceremony: {
  time: '4:00 p.m.',
  title: 'Ceremonia religiosa',
  venue: 'Parroquia San José',
  address: 'Av. Larco 1234, Miraflores, Lima',
  googleMapsUrl: 'https://www.google.com/maps/...',
  wazeUrl: 'https://waze.com/ul?...',
},
reception: {
  time: '6:30 p.m.',
  title: 'Recepción y fiesta',
  venue: 'Hacienda Los Olivos',
  address: 'Km 32 Carretera Cieneguilla, Lima',
  googleMapsUrl: 'https://www.google.com/maps/...',
  wazeUrl: 'https://waze.com/ul?...',
  embedMapUrl: 'https://www.google.com/maps?q=Cieneguilla,+Lima,+Peru&output=embed',
}
```

### Cuentas Bancarias y Mesa de Regalos
Puedes agregar cuentas en Soles, Dólares o billeteras electrónicas. Cada una cuenta con botón automático de copiado al portapapeles:
```typescript
giftRegistry: {
  bankAccounts: [
    {
      bank: 'BCP (Banco de Crédito del Perú)',
      accountType: 'Cuenta Corriente Soles',
      accountNumber: '194-98765432-0-11',
      cci: '00219400987654320111',
      beneficiary: 'Camila Morales & Mateo Valdivia',
    },
    {
      bank: 'Interbank',
      accountType: 'Cuenta de Ahorros Dólares (USD)',
      accountNumber: '200-3001234567',
      cci: '00320001300123456788',
      beneficiary: 'Mateo Valdivia & Camila Morales',
    },
  ],
  storeRegistry: {
    storeName: 'Saga Falabella / Novios',
    code: 'BODA-CAMIMATEO-2026',
    link: 'https://www.falabella.com.pe',
  },
}
```

### Opciones de Menú y Teléfono de WhatsApp
```typescript
rsvp: {
  deadline: '15 de octubre de 2026',
  whatsappNumber: '51999888777', // Número internacional sin '+' ni espacios
  formattedPhone: '+51 999 888 777',
  menuOptions: [
    { value: 'tradicional', label: 'Menú Tradicional (Lomo al jugo y guarnición campestre)' },
    { value: 'vegetariano', label: 'Menú Vegetariano (Risotto de setas y vegetales asados)' },
    { value: 'vegano', label: 'Menú Vegano (Bowl tibio de quinoa real y hummus de palta)' },
    { value: 'infantil', label: 'Menú Infantil (Milanesa crocante con puré artesanal)' },
  ],
}
```

---

## 2. Personalización de Paletas en Vivo (`src/data/themes.ts`)

El sitio incluye un selector interactivo en vivo. Para ajustar las paletas o agregar una nueva (por ejemplo, verde esmeralda o borgoña):

```typescript
export const weddingThemes: Record<string, WeddingTheme> = {
  miNuevoTema: {
    id: 'miNuevoTema',
    name: 'Borgoña & Champagne',
    subtitle: 'Otoño Romántico',
    colors: ['#5C1D24', '#D4AF37', '#F5ECE1'],
    variables: {
      '--oliva': '#7A2E38',
      '--oliva-oscuro': '#5C1D24',
      '--oliva-profundo': '#3D1016',
      '--dorado': '#D4AF37',
      '--dorado-oscuro': '#A88424',
      '--arena': '#F0E2D3',
      '--arena-suave': '#F8F1EB',
      '--terracota': '#9E3B48',
    },
  },
  // ...
};
```

---

## 3. Variables CSS Base (`src/styles/variables.css`)

Para definir los colores principales que se cargan antes de que el usuario interactúe con el selector de temas, edita `:root`:

```css
:root {
  --oliva: #6B7A5A;          /* Color principal botánico */
  --oliva-oscuro: #4A5740;   /* Fondos oscuros de sección y acentos */
  --terracota: #C97B5A;      /* Color cálido secundario */
  --crema: #F5EFE6;          /* Fondo general suave */
  --arena: #E8DCC8;          /* Fondos alternados y bordes sutiles */
  --dorado: #C9A961;         /* Acento de lujo en botones y monogramas */
}
```

---

## 4. Personalización del Reproductor Musical (`src/utils/audioSynth.ts`)

El sintetizador nativo Web Audio emite una progresión de notas arpegiadas. Si deseas cambiar las frecuencias o la velocidad:

```typescript
// En src/utils/audioSynth.ts:
private notas = [
  // Frecuencias en Hertz de tu progresión musical preferida
  146.83, 220.00, 293.66, 369.99, 440.00, // Re Mayor
  196.00, 246.94, 293.66, 392.00, 493.88, // Sol Mayor
  // ...
];

// Tempo entre notas (en milisegundos):
this.timer = window.setTimeout(() => this.tocarPaso(), 340);
```

---

## 5. Sustitución de Imágenes

Ubica tus fotos en `public/images/` asegurándote de usar formato **WebP**:

- `hero-wedding.webp` (Foto de portada en arco, proporción ~3:4 o 4:5).
- `historia-2019.webp` a `historia-2026.webp` (Fotos de la línea cronológica, proporción 4:3).
- `galeria-1.webp` a `galeria-6.webp` (Fotos de la galería con visor Lightbox).
- `og-image.webp` (Dimensión recomendada: **1200x630 píxeles** para previsualización nítida en WhatsApp).

---

## 6. Generación o Reemplazo del PDF Plan B

El archivo `public/plan-b-boda.pdf` puede ser reemplazado por tu propio PDF diseñado en Canva, Figma o Word. Solo renómbralo a `plan-b-boda.pdf` y colócalo dentro de la carpeta `public/`.
