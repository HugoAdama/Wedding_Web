# 🔒 Privacidad y Funcionamiento del RSVP por WhatsApp

Uno de los principales objetivos de este proyecto es ofrecer una experiencia de confirmación de asistencia moderna, fluida y agradable sin comprometer la privacidad familiar ni requerir infraestructura costosa o vulnerable de backend.

---

## 🛡️ Políticas de Privacidad

1. **Meta Robots Noindex**:
   El layout incluye:
   ```html
   <meta name="robots" content="noindex, nofollow" />
   ```
   Esto previene que motores de búsqueda como Google, Bing o Yahoo indexen la invitación pública, protegiendo las fotografías familiares, fechas y locaciones privadas de búsquedas accidentales.

2. **Cero Almacenamiento en Servidores (Zero Server Storage)**:
   - No se utilizan cookies ni almacenamiento local para rastreo de usuarios.
   - No existe una base de datos conectada (como Firebase, Supabase o Cloudflare D1) que pueda sufrir brechas de seguridad o filtraciones de datos personales (nombres, teléfonos, alergias).
   - El sitio web es 100% estático (HTML, CSS y JavaScript client-side).

---

## 🧩 Arquitectura Modular del Formulario RSVP

El formulario se encuentra en [RsvpSection.astro](file:///e:/WEDDING_WEB/src/components/sections/RsvpSection.astro) y se compone de subcomponentes atómicos:

- **[AttendanceSelector.astro](file:///e:/WEDDING_WEB/src/components/sections/rsvp/AttendanceSelector.astro)**: Permite elegir de manera clara entre "¡Sí, asistiré con alegría!" y "Lamentablemente no podré". Oculta dinámicamente los campos de menú y personas si el invitado indica que no asistirá.
- **[GuestStepper.astro](file:///e:/WEDDING_WEB/src/components/sections/rsvp/GuestStepper.astro)**: Control numérico accesible con botones de más/menos para especificar la cantidad de personas contempladas.
- **[MenuSelector.astro](file:///e:/WEDDING_WEB/src/components/sections/rsvp/MenuSelector.astro)**: Selector de tarjetas para elegir entre los menús definidos en `weddingData.rsvp.menuOptions` (Tradicional, Vegetariano, Vegano, Infantil) y especificar restricciones alimentarias o alérgenos.

---

## 📱 Lógica de Formateo y Envío (`src/utils/whatsapp.ts`)

La utilidad [whatsapp.ts](file:///e:/WEDDING_WEB/src/utils/whatsapp.ts) toma los datos estructurados bajo la interfaz `RsvpFormData` y compone el mensaje:

### Caso 1: Invitado que asiste
```text
Hola Camila y Mateo, ¡confirmo con mucha alegría mi asistencia a su boda! ✨

*Nombre:* Sofía Mendoza
*Asistencia:* Sí, confirmo
*Número de personas:* 2
*Menú preferido:* Menú Tradicional (Lomo al jugo y guarnición campestre)
*Alergias / Restricciones:* Sin gluten
*Mensaje:* ¡Estamos muy felices de acompañarlos!
```

### Caso 2: Invitado que declina
```text
Hola Camila y Mateo,

*Nombre:* Carlos Fuentes
*Asistencia:* Lamentablemente no podré acompañarlos físicamente, pero les deseo lo mejor en este gran paso con todo mi cariño.
*Mensaje:* ¡Un fuerte abrazo a ambos!
```

### Proceso de Envío:
1. El invitado completa el formulario y presiona el botón **Enviar confirmación por WhatsApp**.
2. La función `generarUrlWhatsApp()` crea el enlace directo con codificación URL:
   ```text
   https://wa.me/51999888777?text=Hola%20Camila%20y%20Mateo...
   ```
3. Se abre la aplicación oficial de WhatsApp (o WhatsApp Web en escritorio).
4. El invitado revisa el mensaje en su propia pantalla antes de presionar Enviar.

---

## 📊 Registro y Gestión para los Novios

Para los novios y el wedding planner:
1. Conforme van recibiendo los mensajes estructurados en WhatsApp, marcan los nombres y platos en su hoja de cálculo privada de **Google Sheets** o **Excel**.
2. Ningún tercero ni proveedor externo tiene acceso a la lista de asistentes ni a la asignación de mesas.
