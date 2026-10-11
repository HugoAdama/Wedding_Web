import type { RsvpFormData } from '../types/wedding';

/**
 * Genera el texto formateado con Markdown de WhatsApp para la confirmación de boda.
 */
export function formatearMensajeWhatsApp(datos: RsvpFormData): string {
  const { nombre, asistencia, personas, menu, restricciones, mensaje } = datos;

  if (asistencia === 'si') {
    return [
      'Hola Camila y Mateo, ¡confirmo con mucha alegría mi asistencia a su boda! ✨',
      '',
      `*Nombre:* ${nombre}`,
      `*Asistencia:* Sí, confirmo`,
      `*Número de personas:* ${personas}`,
      `*Menú preferido:* ${menu || 'Menú Tradicional'}`,
      restricciones && restricciones.toLowerCase() !== 'ninguna' ? `*Alergias / Restricciones:* ${restricciones}` : '',
      mensaje ? `*Mensaje:* ${mensaje}` : '',
    ]
      .filter(Boolean)
      .join('\n');
  }

  return [
    'Hola Camila y Mateo,',
    '',
    `*Nombre:* ${nombre}`,
    `*Asistencia:* Lamentablemente no podré acompañarlos físicamente, pero les deseo lo mejor en este gran paso con todo mi cariño.`,
    mensaje ? `*Mensaje:* ${mensaje}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

/**
 * Genera el enlace directo wa.me con el mensaje codificado en URL.
 */
export function generarUrlWhatsApp(datos: RsvpFormData, numeroTelefono: string = '51999888777'): string {
  const texto = formatearMensajeWhatsApp(datos);
  return `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(texto)}`;
}
