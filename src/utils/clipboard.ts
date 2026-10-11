/**
 * Copia un texto al portapapeles con feedback visual en el botón emisor y en un toast flotante opcional.
 */
export async function copiarAlPortapapeles(
  texto: string,
  boton?: HTMLElement | null,
  toast?: HTMLElement | null
): Promise<boolean> {
  if (!texto) return false;

  try {
    await navigator.clipboard.writeText(texto);

    // Feedback visual en el botón
    if (boton) {
      const textoSpan = boton.querySelector('.btn-copiar__texto');
      const originalText = textoSpan ? textoSpan.textContent : 'Copiar';
      boton.classList.add('btn-copiar--copiado');
      if (textoSpan) textoSpan.textContent = '¡Copiado!';

      setTimeout(() => {
        boton.classList.remove('btn-copiar--copiado');
        if (textoSpan) textoSpan.textContent = originalText;
      }, 2200);
    }

    // Feedback flotante en Toast
    if (toast) {
      toast.classList.add('activo');
      setTimeout(() => {
        toast.classList.remove('activo');
      }, 2500);
    }

    return true;
  } catch (err) {
    console.error('Error al copiar al portapapeles:', err);
    return false;
  }
}
