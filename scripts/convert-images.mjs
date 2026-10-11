import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const sourceDir = 'C:/Users/PC/.gemini/antigravity-ide/brain/1246ba3d-9b68-4f1b-b946-0b7e4bc3b85f';
const targetDir = path.resolve('public/images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const mappings = [
  { src: 'hero_wedding_couple_1791693986201.jpg', dest: 'hero-wedding.webp', width: 900 },
  { src: 'cafe_beginning_1791694103200.jpg', dest: 'historia-2019.webp', width: 600 },
  { src: 'cat_miga_1791694070050.jpg', dest: 'historia-2020.webp', width: 600 },
  { src: 'cusco_trip_1791694035588.jpg', dest: 'historia-2022.webp', width: 600 },
  { src: 'proposal_beach_1791694012073.jpg', dest: 'historia-2024.webp', width: 600 },
  { src: 'hero_wedding_couple_1791693986201.jpg', dest: 'historia-2026.webp', width: 600 },
  { src: 'gallery_rings_hands_1791694176344.jpg', dest: 'galeria-1.webp', width: 700 },
  { src: 'hero_wedding_couple_1791693986201.jpg', dest: 'galeria-2.webp', width: 700 },
  { src: 'cafe_beginning_1791694103200.jpg', dest: 'galeria-3.webp', width: 700 },
  { src: 'gallery_venue_sunset_1791694221048.jpg', dest: 'galeria-4.webp', width: 700 },
  { src: 'cat_miga_1791694070050.jpg', dest: 'galeria-5.webp', width: 700 },
  { src: 'gallery_couple_laughing_1791694268791.jpg', dest: 'galeria-6.webp', width: 700 },
];

async function run() {
  for (const item of mappings) {
    const srcPath = path.join(sourceDir, item.src);
    const destPath = path.join(targetDir, item.dest);
    console.log(`Converting ${item.src} -> ${item.dest}...`);
    await sharp(srcPath)
      .resize({ width: item.width, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(destPath);
  }

  // Generar og-image.webp (1200x630) para Open Graph
  console.log('Generating og-image.webp (1200x630)...');
  await sharp(path.join(sourceDir, 'gallery_venue_sunset_1791694221048.jpg'))
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .webp({ quality: 85 })
    .toFile(path.join(targetDir, 'og-image.webp'));

  console.log('Todas las imágenes webp fueron generadas exitosamente!');
}

run().catch(console.error);
