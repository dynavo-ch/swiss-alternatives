#!/usr/bin/env node
/**
 * Fetches product and company logos from their official websites and
 * normalises them into consistent 256×256 PNG tiles.
 *
 *   npm run logos                    # fetch missing logos only
 *   npm run logos -- --force         # refetch everything
 *   npm run logos -- proton-mail     # only these slugs
 *
 * Source order (first usable wins):
 *   1. the website's SVG icon  2. web-app manifest icons (largest)
 *   3. apple-touch-icon        4. <link rel="icon"> PNG ≥ 64 px
 *   5. /apple-touch-icon.png   6. a favicon service (last resort)
 *
 * Normalisation never alters the mark itself: images are trimmed, scaled to
 * fit and centred on a white square (full-bleed app icons are kept full-bleed).
 * Only re-encoded PNGs are written — no third-party SVG markup is served.
 * Every logo's source URL is recorded in src/assets/logos/sources.json.
 *
 * Manual override: drop a file named <slug>.png (or .svg; companies:
 * company--<slug>.png) into src/assets/logos/manual/ and run the script —
 * manual files always win. List keys in exclude.txt to skip unusable icons.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';
import { parse } from 'yaml';

const root = new URL('../', import.meta.url);
const outDir = new URL('src/assets/logos/', root);
const manualDir = new URL('manual/', outDir);
const manifestFile = new URL('sources.json', outDir);
mkdirSync(outDir, { recursive: true });
mkdirSync(manualDir, { recursive: true });

const args = process.argv.slice(2);
const force = args.includes('--force');
const only = new Set(args.filter((a) => !a.startsWith('--')));
const SIZE = 256;
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36';
const MAX_BYTES = 3 * 1024 * 1024;

const manifest = existsSync(manifestFile) ? JSON.parse(readFileSync(manifestFile, 'utf8')) : {};

async function get(url, accept) {
  const response = await fetch(url, {
    redirect: 'follow',
    signal: AbortSignal.timeout(15_000),
    headers: { 'User-Agent': UA, ...(accept ? { Accept: accept } : {}) },
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response;
}

async function download(url) {
  const response = await get(url, 'image/*,*/*;q=0.5');
  const type = response.headers.get('content-type') ?? '';
  const buffer = Buffer.from(await response.arrayBuffer());
  if (buffer.length > MAX_BYTES) throw new Error('too large');
  if (!/image\/|svg|octet-stream/.test(type) && !/\.(png|svg|ico|webp|jpe?g)(\?|$)/i.test(url))
    throw new Error(`not an image (${type})`);
  return buffer;
}

const sizeOf = (sizes = '') =>
  Math.max(0, ...sizes.split(/\s+/).map((s) => Number(s.split('x')[0]) || 0));

/** Collects icon candidates declared by a web page, best first. */
async function candidates(pageUrl) {
  const list = [];
  let html = '';
  let base = pageUrl;
  try {
    const response = await get(pageUrl, 'text/html');
    base = response.url;
    html = await response.text();
  } catch {
    /* fall through to conventional paths and the favicon service */
  }
  const abs = (href) => new URL(href.replace(/&amp;/g, '&'), base).href;
  const tags = [...html.matchAll(/<link\b[^>]*>/gi)].map((m) => m[0]);
  const attr = (tag, name) => new RegExp(`${name}=["']([^"']+)["']`, 'i').exec(tag)?.[1];

  for (const tag of tags) {
    const rel = attr(tag, 'rel') ?? '';
    const href = attr(tag, 'href');
    if (!href) continue;
    const type = attr(tag, 'type') ?? '';
    if (/icon/i.test(rel) && (/svg/.test(type) || /\.svg(\?|$)/i.test(href)))
      list.push({ url: abs(href), score: 1000, how: 'svg icon' });
  }
  const manifestHref = tags
    .map((t) => (/rel=["']manifest["']/i.test(t) ? attr(t, 'href') : undefined))
    .find(Boolean);
  if (manifestHref) {
    try {
      const data = await (await get(abs(manifestHref))).json();
      for (const icon of data.icons ?? []) {
        const size = sizeOf(icon.sizes);
        if (size >= 128 && !/maskable/.test(icon.purpose ?? '')) {
          list.push({
            url: new URL(icon.src, abs(manifestHref)).href,
            score: 500 + size / 10,
            how: `manifest ${icon.sizes}`,
          });
        }
      }
    } catch {
      /* ignore broken manifests */
    }
  }
  for (const tag of tags) {
    const rel = attr(tag, 'rel') ?? '';
    const href = attr(tag, 'href');
    if (!href || /\.svg(\?|$)/i.test(href)) continue;
    const size = sizeOf(attr(tag, 'sizes'));
    if (/apple-touch-icon/i.test(rel))
      list.push({ url: abs(href), score: 400 + (size || 180) / 10, how: 'apple-touch-icon' });
    else if (/icon/i.test(rel) && size >= 64 && !/\.ico(\?|$)/i.test(href))
      list.push({ url: abs(href), score: 300 + size / 10, how: `icon ${size}px` });
  }
  const origin = new URL(base).origin;
  list.push({ url: `${origin}/apple-touch-icon.png`, score: 200, how: '/apple-touch-icon.png' });
  list.push({
    url: `https://www.google.com/s2/favicons?domain=${new URL(base).hostname}&sz=256`,
    score: 100,
    how: 'favicon service',
  });
  return list.sort((a, b) => b.score - a.score);
}

/** Normalises any image buffer into a 256×256 PNG tile. */
async function normalise(buffer, isSvg) {
  let image = sharp(buffer, { density: isSvg ? 384 : 72 }).ensureAlpha();
  const meta = await image.metadata();
  if (!isSvg && Math.max(meta.width ?? 0, meta.height ?? 0) < 48) throw new Error('too small');

  // Full-bleed app icons (opaque corners) keep their own background.
  const { data, info } = await image.clone().raw().toBuffer({ resolveWithObject: true });
  const alphaAt = (x, y) => data[(y * info.width + x) * info.channels + 3];
  const corners = [
    alphaAt(1, 1),
    alphaAt(info.width - 2, 1),
    alphaAt(1, info.height - 2),
    alphaAt(info.width - 2, info.height - 2),
  ];
  const fullBleed = corners.every((a) => a > 250) && Math.abs(info.width - info.height) <= 2;

  if (fullBleed) {
    return sharp(buffer, { density: isSvg ? 384 : 72 })
      .resize(SIZE, SIZE, { fit: 'cover' })
      .flatten({ background: '#ffffff' })
      .png()
      .toBuffer();
  }
  const trimmed = await image.trim({ threshold: 10 }).toBuffer();
  const inner = Math.round(SIZE * 0.72);
  const mark = await sharp(trimmed)
    .resize(inner, inner, { fit: 'inside', withoutEnlargement: false })
    .png()
    .toBuffer();
  return sharp({ create: { width: SIZE, height: SIZE, channels: 4, background: '#ffffff' } })
    .composite([{ input: mark, gravity: 'center' }])
    .flatten({ background: '#ffffff' })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/* ------------------------------------------------------------------ */

const entries = [];
for (const [collection, ext] of [
  ['products', '.md'],
  ['companies', '.yaml'],
]) {
  const dir = new URL(`src/content/${collection}/`, root);
  for (const file of readdirSync(dir).filter((f) => f.endsWith(ext))) {
    const text = readFileSync(new URL(file, dir), 'utf8');
    const data = ext === '.md' ? parse(/^---\n([\s\S]*?)\n---/.exec(text)?.[1] ?? '') : parse(text);
    const slug = file.slice(0, -ext.length);
    entries.push({ key: collection === 'products' ? slug : `company--${slug}`, url: data.website });
  }
}

const excluded = new Set(
  existsSync(new URL('exclude.txt', outDir))
    ? readFileSync(new URL('exclude.txt', outDir), 'utf8')
        .split('\n')
        .map((line) => line.replace(/#.*/, '').trim())
        .filter(Boolean)
    : [],
);
const manual = new Map(
  readdirSync(manualDir).map((f) => [f.replace(/\.(png|svg|webp|jpe?g)$/i, ''), f]),
);
let written = 0;
for (const { key, url } of entries) {
  if (only.size && !only.has(key) && !only.has(key.replace('company--', ''))) continue;
  const target = new URL(`${key}.png`, outDir);
  if (manual.has(key)) {
    const file = manual.get(key);
    writeFileSync(
      target,
      await normalise(readFileSync(new URL(file, manualDir)), file.endsWith('.svg')),
    );
    manifest[key] = {
      source: `manual/${file}`,
      method: 'manual',
      fetched: new Date().toISOString().slice(0, 10),
    };
    console.log(`✓ ${key} (manual)`);
    written++;
    continue;
  }
  if (excluded.has(key)) continue;
  if (!force && existsSync(target)) continue;
  if (!url) continue;
  let done = false;
  for (const candidate of await candidates(url)) {
    try {
      const buffer = await download(candidate.url);
      const isSvg =
        /svg/.test(candidate.how) || buffer.subarray(0, 200).toString().includes('<svg');
      writeFileSync(target, await normalise(buffer, isSvg));
      manifest[key] = {
        source: candidate.url,
        method: candidate.how,
        fetched: new Date().toISOString().slice(0, 10),
      };
      console.log(`✓ ${key.padEnd(34)} ${candidate.how}`);
      written++;
      done = true;
      break;
    } catch {
      /* try the next candidate */
    }
  }
  if (!done) console.warn(`✗ ${key}: no usable logo found`);
}

writeFileSync(
  manifestFile,
  JSON.stringify(Object.fromEntries(Object.entries(manifest).sort()), null, 2) + '\n',
);
console.log(`\n${written} logo(s) written to src/assets/logos/`);
