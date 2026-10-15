#!/usr/bin/env node
/**
 * Editorial linter for directory content. Complements the build, which
 * already enforces the schema and all relations: this script checks the
 * conventions in docs/CONTENT.md that a schema cannot express.
 *
 *   npm run lint:content          # warnings only
 *   npm run lint:content -- --strict   # exit 1 on any warning (CI)
 */
import { readdirSync, readFileSync } from 'node:fs';
import { parse } from 'yaml';

const root = new URL('../src/content/', import.meta.url);
const strict = process.argv.includes('--strict');
const warnings = [];
const warn = (file, message) => warnings.push(`${file}: ${message}`);

// Words that usually signal marketing copy rather than description.
const HYPE =
  /\b(best[- ]in[- ]class|leading|revolution\w*|seamless\w*|powerful|world[- ]class|cutting[- ]edge|unparalleled|state[- ]of[- ]the[- ]art|game[- ]chang\w*|amazing|incredible|unbeatable)\b/i;

function frontMatter(text) {
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(text);
  return match ? { data: parse(match[1]), body: match[2] } : { data: {}, body: text };
}

function checkFacts(file, value, path = '') {
  if (!value || typeof value !== 'object' || value instanceof Date) return;
  if (Array.isArray(value)) return value.forEach((v, i) => checkFacts(file, v, `${path}[${i}]`));
  if ('value' in value && value.value !== 'unknown' && path.startsWith('swiss')) {
    if (!value.basis) warn(file, `${path}: claim without "basis"`);
    if (!value.source && value.basis !== 'inferred') warn(file, `${path}: claim without "source"`);
  }
  for (const [key, child] of Object.entries(value)) {
    if (key !== 'sources') checkFacts(file, child, path ? `${path}.${key}` : key);
  }
}

for (const name of readdirSync(new URL('products/', root))) {
  const file = `products/${name}`;
  const { data, body } = frontMatter(readFileSync(new URL(file, root), 'utf8'));
  const tagline = String(data.tagline ?? '');
  const description = String(data.description ?? '')
    .replace(/\s+/g, ' ')
    .trim();
  const words = body.trim().split(/\s+/).filter(Boolean).length;

  if (tagline.length > 90) warn(file, `tagline is ${tagline.length} characters (max 90)`);
  if (description.length < 110 || description.length > 170)
    warn(file, `description is ${description.length} characters (aim for 120–160)`);
  if (words < 60) warn(file, `body has only ${words} words (aim for 2–3 paragraphs)`);
  if (!data.lastVerified) warn(file, 'missing lastVerified');
  if (!data.sources?.length) warn(file, 'no sources');
  if (!data.alternativesTo?.length)
    warn(file, 'no alternativesTo — is it a replacement for anything?');
  for (const [label, text] of [
    ['tagline', tagline],
    ['description', description],
    ['body', body],
  ]) {
    const hype = HYPE.exec(text);
    if (hype) warn(file, `${label} contains marketing language: "${hype[0]}"`);
  }
  checkFacts(file, { swiss: data.swiss });
  if (data.swiss?.hosted?.value === 'yes' && !data.swiss?.dataLocations?.length)
    warn(file, 'hosted: yes but no dataLocations');
}

for (const name of readdirSync(new URL('companies/', root))) {
  const file = `companies/${name}`;
  const data = parse(readFileSync(new URL(file, root), 'utf8'));
  if (!data.lastVerified) warn(file, 'missing lastVerified');
  if (!data.sources?.length) warn(file, 'no sources');
  if (data.headquarters?.country === 'CH' && !data.headquarters?.canton)
    warn(file, 'Swiss headquarters without canton');
  if (
    data.ownership?.swissOwned &&
    data.ownership.swissOwned !== 'unknown' &&
    !data.ownership.source
  )
    warn(file, 'ownership claim without source');
}

if (warnings.length) {
  console.warn(
    `${warnings.length} content warning(s):\n` + warnings.map((w) => `  • ${w}`).join('\n'),
  );
  if (strict) process.exit(1);
} else {
  console.log('✓ Content follows the editorial conventions.');
}
