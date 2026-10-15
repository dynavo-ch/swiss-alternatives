/**
 * Normalised logo tiles from src/assets/logos/ (see scripts/fetch-logos.mjs).
 * Resolved by convention: `<product-slug>.png`, then `company--<slug>.png`.
 */
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/logos/*.png', {
  eager: true,
});

const byKey = new Map(
  Object.entries(files).map(([path, mod]) => [
    path
      .split('/')
      .pop()!
      .replace(/\.png$/, ''),
    mod.default,
  ]),
);

export function productLogo(productId: string, companyId: string): ImageMetadata | undefined {
  return byKey.get(productId) ?? byKey.get(`company--${companyId}`);
}

export function companyLogo(companyId: string): ImageMetadata | undefined {
  return byKey.get(`company--${companyId}`);
}
