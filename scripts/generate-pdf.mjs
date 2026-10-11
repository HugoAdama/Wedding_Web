import fs from 'fs';
import path from 'path';

// Creamos un PDF 1.4 simple y válido sin dependencias externas pesadas
function createSimplePdf(outputPath) {
  const content = `BT
/F1 20 Tf
50 780 Td
(CAMILA & MATEO - GUIA DEL INVITADO Y PLAN B) Tj
0 -28 Td
/F2 12 Tf
(Boda: Sabado 14 de Noviembre de 2026 - Lima, Peru) Tj
0 -36 Td
/F1 14 Tf
(1. ITINERARIO Y LOGISTICA) Tj
0 -20 Td
/F2 11 Tf
(Ceremonia: 4:00 p.m. Parroquia San Jose, Miraflores.) Tj
0 -16 Td
(Traslado oficial: 5:30 p.m. Salida puntual de buses privados hacia Cieneguilla.) Tj
0 -16 Td
(Recepcion: 6:30 p.m. Hacienda Los Olivos, Km 32 Cieneguilla.) Tj
0 -30 Td
/F1 14 Tf
(2. PLAN DE CONTINGENCIA / PLAN B (CLIMA Y MOVILIDAD)) Tj
0 -20 Td
/F2 11 Tf
(Clima en Cieneguilla: Tarde soleada y calida (24C), noche fresca (16C).) Tj
0 -16 Td
(En caso de viento nocturno o llovizna atipica, la cena se traslada al salon) Tj
0 -16 Td
(techado acristalado de la hacienda equipado con calefactores exteriores.) Tj
0 -16 Td
(Recomendacion: Llevar abrigo ligero, pashmina o saco para la noche.) Tj
0 -30 Td
/F1 14 Tf
(3. TRANSPORTE Y ESTACIONAMIENTO) Tj
0 -20 Td
/F2 11 Tf
(Estacionamiento privado gratuito con seguridad para 100 vehiculos en la hacienda.) Tj
0 -16 Td
(Buses de retorno programados: 11:30 p.m. / 1:30 a.m. / 2:30 a.m. hacia Miraflores.) Tj
0 -30 Td
/F1 14 Tf
(4. CONTACTOS DE ASISTENCIA Y COORDINACION DEL EVENTO) Tj
0 -20 Td
/F2 11 Tf
(Wedding Planner: Sofia Mendoza (+51 987 654 321)) Tj
0 -16 Td
(Coordinador de Transporte y Buses: Carlos Rios (+51 988 776 655)) Tj
0 -16 Td
(Confirmaciones RSVP WhatsApp: +51 999 888 777) Tj
0 -36 Td
/F2 10 Tf
(Este documento es un comprobante de logistica para los invitados de Camila & Mateo.) Tj
ET`;

  const streamLength = Buffer.byteLength(content, 'utf-8');

  const pdf = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 595.28 841.89]
  /Resources <<
    /Font <<
      /F1 4 0 R
      /F2 5 0 R
    >>
  >>
  /Contents 6 0 R
>>
endobj
4 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
6 0 obj
<<
  /Length ${streamLength}
>>
stream
${content}
endstream
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000000342 00000 n 
0000000413 00000 n 
trailer
<<
  /Size 7
  /Root 1 0 R
>>
startxref
${510 + streamLength}
%%EOF`;

  fs.writeFileSync(outputPath, pdf, 'binary');
  console.log('PDF generado exitosamente en:', outputPath);
}

const targetPath = path.resolve('public/plan-b-boda.pdf');
createSimplePdf(targetPath);
