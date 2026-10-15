#!/usr/bin/env node
/**
 * Generates bitmap icons and the default social image from SVG sources.
 * Re-run after changing the logo or the site name:
 *   node scripts/generate-assets.mjs
 */
import { writeFileSync } from 'node:fs';
import sharp from 'sharp';

const out = (name) => new URL(`../public/${name}`, import.meta.url).pathname;
const NAME = process.argv[2] ?? 'Swiss Alternatives';
const DOMAIN = process.argv[3] ?? 'swiss-alternatives.ch';

const INK = '#121212';
const PAPER = '#f5f4f0';
const RED = '#d52b1e';

/** The mark on a solid tile (used for app icons, where transparency looks poor). */
const tile = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24">
  <rect width="24" height="24" fill="${PAPER}"/>
  <g transform="translate(3.6 3.6) scale(0.7)">
    <path d="M2 8V2h6M16 2h6v6M22 16v6h-6M8 22H2v-6" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="square"/>
    <path fill="${RED}" d="M10 5.6h4v4.4h4.4v4H14v4.4h-4V14H5.6v-4H10z"/>
  </g>
</svg>`;

/** Favicon-sized mark without padding. */
const mark = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24">
  <path d="M2 8V2h6M16 2h6v6M22 16v6h-6M8 22H2v-6" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="square"/>
  <path fill="${RED}" d="M10 5.6h4v4.4h4.4v4H14v4.4h-4V14H5.6v-4H10z"/>
</svg>`;

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <g stroke="#dcdad3" stroke-width="1">
    ${Array.from({ length: 11 }, (_, i) => `<line x1="${80 + (i + 1) * 86.67}" y1="0" x2="${80 + (i + 1) * 86.67}" y2="630"/>`).join('')}
  </g>
  <line x1="80" y1="120" x2="1120" y2="120" stroke="${INK}" stroke-width="2"/>
  <g transform="translate(80 40) scale(2.6)">
    <path d="M2 8V2h6M16 2h6v6M22 16v6h-6M8 22H2v-6" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="square"/>
    <path fill="${RED}" d="M10.2 6h3.6v4.2H18v3.6h-4.2V18h-3.6v-4.2H6v-3.6h4.2z"/>
  </g>
  <text x="156" y="90" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="30" font-weight="700" fill="${INK}" letter-spacing="-0.5">${NAME}</text>
  <text x="80" y="330" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="112" font-weight="700" fill="${INK}" letter-spacing="-5">Find the Swiss</text>
  <text x="80" y="450" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="112" font-weight="700" fill="${INK}" letter-spacing="-5">alternative<tspan fill="${RED}">.</tspan></text>
  <text x="80" y="550" font-family="Menlo, Courier New, monospace" font-size="21" fill="#5f5e5a" letter-spacing="1.5">HEADQUARTERS · OWNERSHIP · DEVELOPMENT · HOSTING · INFRASTRUCTURE</text>
  <text x="1120" y="90" text-anchor="end" font-family="Menlo, Courier New, monospace" font-size="22" fill="#5f5e5a">${DOMAIN}</text>
</svg>`;

const png = (svg) => sharp(Buffer.from(svg)).png();

/** Minimal ICO container wrapping a PNG image (supported by all modern browsers). */
async function ico(size) {
  const data = await png(mark(size)).resize(size, size).toBuffer();
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count
  header.writeUInt8(size, 6);
  header.writeUInt8(size, 7);
  header.writeUInt8(0, 8); // palette
  header.writeUInt8(0, 9); // reserved
  header.writeUInt16LE(1, 10); // colour planes
  header.writeUInt16LE(32, 12); // bits per pixel
  header.writeUInt32LE(data.length, 14);
  header.writeUInt32LE(22, 18); // offset
  return Buffer.concat([header, data]);
}

await png(tile(180)).toFile(out('apple-touch-icon.png'));
await png(tile(512)).toFile(out('icon-512.png'));
writeFileSync(out('favicon.ico'), await ico(32));
await png(og).toFile(out('og-default.png'));
console.log('✓ public/apple-touch-icon.png, icon-512.png, favicon.ico, og-default.png');
