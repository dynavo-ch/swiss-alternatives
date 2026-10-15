#!/usr/bin/env node
/**
 * Publishes the JSON Schemas Astro generates from src/content.config.ts into
 * schemas/ (committed), so editors can validate and autocomplete content files
 * without running Astro. Run via `npm run schemas` after changing the schema.
 */
import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';

const from = new URL('../.astro/collections/', import.meta.url);
const to = new URL('../schemas/', import.meta.url);
if (!existsSync(from)) {
  console.error('No generated schemas found — run `npx astro sync` first.');
  process.exit(1);
}
mkdirSync(to, { recursive: true });
for (const file of readdirSync(from).filter((f) => f.endsWith('.schema.json'))) {
  copyFileSync(new URL(file, from), new URL(file, to));
  console.log(`✓ schemas/${file}`);
}
