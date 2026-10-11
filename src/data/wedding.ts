import type { StoryMilestone, HotelOption, BankAccount, FaqItem } from '../types/wedding';
import { getAssetPath } from '../utils/path';
export * from '../types/wedding';

export const weddingData = {
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
  },

  date: {
    display: 'Sábado 14 de noviembre de 2026',
    shortDisplay: '14 · 11 · 2026',
    iso: '2026-11-14T16:00:00-05:00',
    year: '2026',
    month: '11',
    day: '14',
    city: 'Lima, Perú',
    rsvpDeadline: '15 de octubre de 2026',
  },

  hero: {
    subtitle: 'Nos casamos',
    image: getAssetPath('/images/hero-wedding.webp'),
    imageAlt: 'Camila y Mateo en un jardín de olivos al atardecer',
  },

  story: {
    title: 'Nuestra historia',
    subtitle: 'Seis años, un café semanal y muchas cartas de por medio.',
    milestones: [
      {
        year: '2019',
        title: 'El comienzo',
        description: 'Nos conocimos en un proyecto de fin de ciclo universitario. Mateo llegó tarde a la primera reunión y Camila ya había organizado a todo el equipo. Él prometió redimirse con un café, y ese café se convirtió en una tradición semanal imprescindible.',
        image: getAssetPath('/images/historia-2019.webp'),
        alt: 'Camila y Mateo compartiendo un café y cuadernos de estudio',
      },
      {
        year: '2020',
        title: 'La distancia',
        description: 'La cuarentena nos puso a prueba: Camila en Lima y Mateo en Arequipa. Mantuvimos viva la conexión con videollamadas interminables, películas sincronizadas a la distancia y cartas escritas a mano que hoy guardamos con infinito cariño.',
        image: getAssetPath('/images/historia-2020.webp'),
        alt: 'Cartas manuscritas y la gata Miga acompañando los recuerdos',
      },
      {
        year: '2022',
        title: 'El primer gran viaje',
        description: 'Viajamos juntos a Cusco. Nos perdimos explorando las calles de piedra de Ollantaytambo, la lluvia nos sorprendió entre risas y terminamos en un café hogareño planeando nuestro futuro. Ese día supimos que éramos el mejor equipo para la vida.',
        image: getAssetPath('/images/historia-2022.webp'),
        alt: 'Camila y Mateo caminando felices por las calles empedradas de Cusco',
      },
      {
        year: '2024',
        title: 'La propuesta',
        description: 'Frente al mar de Paracas y bajo una puesta de sol dorada, Mateo se arrodilló sobre la arena. Camila dio el sí con lágrimas de emoción antes de que él pudiera completar la pregunta. Fue el momento más mágico y sincero de nuestras vidas.',
        image: getAssetPath('/images/historia-2024.webp'),
        alt: 'Mateo pidiéndole matrimonio a Camila en la playa al atardecer',
      },
      {
        year: '2026',
        title: 'El gran día',
        description: 'Hoy sellamos nuestra historia rodeados de nuestras familias y mejores amigos, en la parroquia donde comenzó la fe de Camila y en una cálida hacienda campestre donde celebramos nuestro amor.',
        image: getAssetPath('/images/historia-2026.webp'),
        alt: 'Camila y Mateo vestidos de novios caminando entre los árboles de olivo',
      },
    ] as StoryMilestone[],
    footnote: 'Y siempre con nosotros: Miga, nuestra consentida gata. Nuestra canción: «Harvest Moon», de Neil Young.',
  },

  ceremony: {
    time: '4:00 p.m.',
    title: 'Ceremonia religiosa',
    venue: 'Parroquia San José',
    address: 'Av. Larco 1234, Miraflores, Lima',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Parroquia+San+Jose+Av+Larco+1234+Miraflores+Lima',
    wazeUrl: 'https://waze.com/ul?q=Parroquia+San+Jose+Miraflores+Lima',
  },

  reception: {
    time: '6:30 p.m.',
    title: 'Recepción y fiesta',
    venue: 'Hacienda Los Olivos',
    address: 'Km 32 Carretera Cieneguilla, Lima',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cieneguilla+Lima+Peru',
    wazeUrl: 'https://waze.com/ul?q=Cieneguilla+Lima+Peru',
    embedMapUrl: 'https://www.google.com/maps?q=Cieneguilla,+Lima,+Peru&output=embed',
  },

  schedule: [
    { time: '4:00 p.m.', title: 'Ceremonia Religiosa', detail: 'Parroquia San José (Miraflores)' },
    { time: '5:30 p.m.', title: 'Salida de Traslado en Buses', detail: 'Desde Miraflores hacia Cieneguilla para invitados' },
    { time: '6:30 p.m.', title: 'Cóctel de Bienvenida', detail: 'Jardines de la Hacienda Los Olivos' },
    { time: '8:00 p.m.', title: 'Cena y Brindis de Honor', detail: 'Banquete campestre al aire libre' },
    { time: '10:00 p.m.', title: 'Apertura de Pista y Fiesta', detail: 'Música en vivo y barra libre' },
    { time: '11:30 p.m.', title: 'Primer Bus de Retorno', detail: 'Salida con destino a Miraflores' },
    { time: '2:00 a.m.', title: 'After Party & Cierre de Boda', detail: 'Último bus de retorno hacia Lima' },
  ],

  dressCode: {
    title: 'Vestimenta',
    subtitle: 'Formal · Black Tie Opcional',
    note: 'La recepción es en jardín con áreas empedradas. Se sugiere llevar calzado cómodo o tacón ancho, y un abrigo ligero para la brisa nocturna en Cieneguilla.',
    suggestedPalette: [
      { name: 'Tierra', hex: '#8B7B63' },
      { name: 'Arena', hex: '#B8A78C' },
      { name: 'Verde oliva', hex: '#6B7A5A' },
      { name: 'Verde bosque', hex: '#3F4A35' },
      { name: 'Terracota', hex: '#C97B5A' },
    ],
    avoidPalette: [
      { name: 'Blanco (exclusivo novia)', hex: '#FFFFFF' },
      { name: 'Crema / Marfil', hex: '#F5EFE6' },
      { name: 'Rojo encendido', hex: '#C0392B' },
    ],
  },

  gallery: [
    {
      src: getAssetPath('/images/galeria-1.webp'),
      alt: 'Detalle de alianzas de boda y ramo de olivo con flores silvestres',
      width: 700,
      height: 933,
    },
    {
      src: getAssetPath('/images/galeria-2.webp'),
      alt: 'Abrazo de Camila y Mateo en el olivar iluminado por el sol',
      width: 700,
      height: 933,
    },
    {
      src: getAssetPath('/images/galeria-3.webp'),
      alt: 'Camila y Mateo compartiendo un café en sus inicios',
      width: 700,
      height: 933,
    },
    {
      src: getAssetPath('/images/galeria-4.webp'),
      alt: 'Banquete de boda al atardecer bajo guirnaldas de luces cálidas',
      width: 700,
      height: 933,
    },
    {
      src: getAssetPath('/images/galeria-5.webp'),
      alt: 'Miga descansando plácidamente sobre las cartas de amor',
      width: 700,
      height: 933,
    },
    {
      src: getAssetPath('/images/galeria-6.webp'),
      alt: 'Camila y Mateo sonriendo con alegría en la naturaleza',
      width: 700,
      height: 933,
    },
  ],

  lodging: {
    title: 'Hospedaje sugerido',
    subtitle: 'Opciones recomendadas para familiares y amigos que nos visitan desde otras ciudades.',
    hotels: [
      {
        name: 'Hotel Casa Andina Miraflores',
        distance: 'A 5 minutos de la parroquia en Miraflores',
        pricePerNight: 'S/ 320 aprox.',
        link: 'https://www.casa-andina.com',
      },
      {
        name: 'Hotel B Central Lima',
        distance: 'A 15 minutos en zona céntrica y cultural',
        pricePerNight: 'S/ 480 aprox.',
        link: 'https://hotelb.pe',
      },
      {
        name: 'Cabañas & Casas de Campo Cieneguilla',
        distance: 'A 5 minutos de la hacienda (ideal para descansar tras la fiesta)',
        pricePerNight: 'S/ 250 aprox.',
        link: 'https://www.airbnb.com',
      },
    ] as HotelOption[],
    notice: 'Recomendamos reservar con anticipación debido a la temporada alta de primavera.',
  },

  giftRegistry: {
    title: 'Mesa de regalos',
    quote: 'Tu presencia y tu cariño son el regalo más valioso que podemos recibir. Si además deseas hacernos un presente, puedes acompañarnos con lluvia de sobres el día del evento, transferencia o en nuestra mesa de bodas.',
    envelopeNotice: 'Habrá un buzón especial de lluvia de sobres durante la recepción en la hacienda.',
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
    ] as BankAccount[],
    storeRegistry: {
      storeName: 'Saga Falabella / Novios',
      code: 'BODA-CAMIMATEO-2026',
      link: 'https://www.falabella.com.pe',
    },
  },

  rsvp: {
    title: 'Confirma tu asistencia',
    subtitle: 'Al completar y enviar el formulario, se generará tu mensaje personalizado para abrirlo directamente en WhatsApp.',
    deadline: '15 de octubre de 2026',
    whatsappNumber: '51999888777', // Ficticio
    formattedPhone: '+51 999 888 777',
    menuOptions: [
      { value: 'tradicional', label: 'Menú Tradicional (Lomo al jugo y guarnición campestre)' },
      { value: 'vegetariano', label: 'Menú Vegetariano (Risotto de setas y vegetales asados)' },
      { value: 'vegano', label: 'Menú Vegano (Bowl tibio de quinoa real y hummus de palta)' },
      { value: 'infantil', label: 'Menú Infantil (Milanesa crocante con puré artesanal)' },
    ],
  },

  contingencyPlan: {
    title: 'Plan B & Logística de Emergencia',
    subtitle: 'Todo está planificado para que disfrutes sin preocupaciones bajo cualquier circunstancia.',
    description: 'Hemos coordinado un salón cerrado climatizado con ventanales panorámicos en caso de viento nocturno, traslados oficiales con buses privados y personal de asistencia disponible en todo momento.',
    pdfUrl: getAssetPath('/plan-b-boda.pdf'),
    items: [
      {
        title: 'Clima en Cieneguilla',
        desc: 'Tarde templada y soleada (24°C) y noche fresca (16°C). Si bajan las temperaturas, dispondremos de calefactores de exteriores y frazadas de lino.',
      },
      {
        title: 'Traslado seguro en buses',
        desc: 'Transporte privado Miraflores ↔ Cieneguilla con salidas de retorno programadas a las 11:30 p.m., 1:30 a.m. y 2:30 a.m.',
      },
      {
        title: 'Estacionamiento y seguridad',
        desc: 'Amplio estacionamiento vigilado para más de 100 automóviles en el interior de la Hacienda Los Olivos.',
      },
    ],
  },

  faq: [
    {
      question: '¿Puedo llevar un acompañante no mencionado en la invitación?',
      answer: 'Para garantizar la comodidad de todos y ajustarnos a la capacidad del recinto, nuestras invitaciones son personalizadas. Solo están contempladas las personas indicadas al recibir tu enlace de confirmación.',
    },
    {
      question: '¿Los niños son bienvenidos a la celebración?',
      answer: '¡Por supuesto! Queremos que toda la familia disfrute. Habrá un menú infantil y un área especial con monitoras para que los pequeños se diviertan con seguridad.',
    },
    {
      question: '¿Cómo funciona el transporte y traslado en buses?',
      answer: 'Tendremos buses privados con salida puntual a las 5:30 p.m. desde la parroquia en Miraflores hacia Cieneguilla. Por la noche habrá salidas de regreso a Miraflores a las 11:30 p.m., 1:30 a.m. y 2:30 a.m.',
    },
    {
      question: '¿Hay estacionamiento en el lugar de la recepción?',
      answer: 'Sí, la Hacienda Los Olivos cuenta con un amplio estacionamiento privado con personal de seguridad y valet para más de 100 vehículos.',
    },
    {
      question: '¿Cuál es el código de vestimenta (dress code)?',
      answer: 'Es Formal / Black Tie opcional. Sugerimos colores tierra, arena y verdes olivo. Les pedimos amablemente evitar el blanco (reservado para la novia), crema y rojo encendido.',
    },
    {
      question: '¿Se pueden tomar fotografías durante la ceremonia religiosa?',
      answer: 'Sí, pero solicitamos no usar flash y mantener los pasillos despejados para el equipo de fotógrafos oficiales.',
    },
    {
      question: '¿Hasta qué fecha puedo confirmar mi asistencia?',
      answer: 'La fecha límite improrrogable es el domingo 15 de octubre de 2026 para coordinar el catering y la asignación de mesas.',
    },
    {
      question: '¿Dónde y cómo se realiza el registro de invitados?',
      answer: 'Al enviar tu confirmación por WhatsApp, los novios actualizamos directamente nuestra planilla de control de asistencia. No es necesario completar ningún otro registro externo.',
    },
  ] as FaqItem[],

  contact: {
    whatsappUrl: 'https://wa.me/51999888777?text=Hola%20Camila%20y%20Mateo%2C%20tengo%20una%20consulta%20sobre%20la%20boda.',
    email: 'hola@camilaymateo.com',
    emailSubject: 'Consulta sobre la boda de Camila y Mateo',
  },

  privacy: {
    title: 'Aviso de Privacidad y Manejo de Datos',
    summary: 'Este sitio web es de uso estrictamente informativo y celebratorio. No recopilamos, no almacenamos cookies de rastreo ni guardamos bases de datos en servidores de terceros.',
    details: 'El formulario de RSVP opera 100% en el lado del cliente (navegador): únicamente estructura un mensaje de texto preformateado que tú decides enviar a través de tu aplicación personal de WhatsApp.',
  },
};
