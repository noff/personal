// Генерирует фото, OG-картинки и иконки в public/. Запуск: node scripts/make-images.mjs
import sharp from 'sharp';

const SRC = 'src/assets/mk-photo.png';
const BG = '#0a0b0d';
const ACC = '#c8f55a';

// Фото для JSON-LD и соцсетей
await sharp(SRC).flatten({ background: '#16181d' }).resize(800).jpeg({ quality: 84, mozjpeg: true }).toFile('public/michael-kechinov.jpg');

// Иконки
const iconSvg = (size) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${BG}"/>
  <text x="29" y="43" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="800" font-size="30" letter-spacing="-2" fill="#f2f1ec">MK</text>
  <circle cx="51" cy="41" r="4" fill="${ACC}"/>
</svg>`);
await sharp(iconSvg(180)).resize(180).png().toFile('public/apple-touch-icon.png');

async function og(file, name, line) {
  const photo = await sharp(SRC).resize({ height: 600 }).toBuffer();
  const meta = await sharp(photo).metadata();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <defs>
      <radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="${ACC}" stop-opacity="0.28"/><stop offset="1" stop-color="${ACC}" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="1200" height="630" fill="${BG}"/>
    <rect width="1200" height="630" fill="url(#g)"/>
    <text x="72" y="120" font-family="Menlo, monospace" font-size="24" fill="${ACC}" letter-spacing="2">${line}</text>
    <text x="68" y="290" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="800" font-size="104" letter-spacing="-5" fill="#f2f1ec">${name[0]}</text>
    <text x="68" y="400" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="800" font-size="104" letter-spacing="-5" fill="#f2f1ec">${name[1]}</text>
    <text x="72" y="540" font-family="Menlo, monospace" font-size="26" fill="#9a9ca3">mkechinov.com</text>
  </svg>`;
  await sharp(Buffer.from(svg))
    .composite([{ input: photo, left: 1200 - meta.width + 60, top: 630 - meta.height + 30 }])
    .flatten({ background: BG }).jpeg({ quality: 86, mozjpeg: true })
    .toFile(file);
}
await og('public/og.jpg', ['Михаил', 'Кечинов'], 'РАЗРАБОТКА · СТАРТАПЫ · ИИ');
console.log('done');
