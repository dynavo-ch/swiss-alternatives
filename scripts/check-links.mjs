#!/usr/bin/env node
/**
 * Checks every internal link and fragment in the built site (dist/).
 * Run after `npm run build`: `npm run check:links`.
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
if (!existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name.endsWith('.html')) files.push(path);
  }
})(DIST);

const idCache = new Map();
function idsOf(file) {
  if (!idCache.has(file)) {
    const html = readFileSync(file, 'utf8');
    idCache.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  return idCache.get(file);
}

function resolve(pathname) {
  const clean = decodeURIComponent(pathname);
  const candidates = [join(DIST, clean), join(DIST, clean, 'index.html')];
  return candidates.find((c) => existsSync(c) && statSync(c).isFile());
}

const problems = [];
let checked = 0;
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const page = '/' + relative(DIST, file).replace(/index\.html$/, '');
  for (const [, attr, raw] of html.matchAll(/\s(href|src)="([^"]*)"/g)) {
    if (/^(https?:|mailto:|tel:|data:|javascript:)/.test(raw) || raw.startsWith('//')) continue;
    const value = raw.replace(/&amp;/g, '&');
    checked++;
    const [beforeHash, hash] = value.split('#');
    const path = beforeHash.split('?')[0];
    if (!path) {
      if (hash && !idsOf(file).has(hash)) problems.push(`${page}: missing fragment #${hash}`);
      continue;
    }
    if (!path.startsWith('/')) {
      problems.push(`${page}: relative ${attr} "${raw}"`);
      continue;
    }
    const target = resolve(path);
    if (!target) problems.push(`${page}: broken ${attr} → ${raw}`);
    else if (hash && target.endsWith('.html') && !idsOf(target).has(hash)) {
      problems.push(`${page}: missing fragment ${raw}`);
    }
  }
}

if (problems.length) {
  console.error(
    `✗ ${problems.length} problem(s) in ${files.length} pages:\n` +
      [...new Set(problems)].map((p) => `  • ${p}`).join('\n'),
  );
  process.exit(1);
}
console.log(`✓ ${checked} internal links and fragments OK across ${files.length} pages.`);
