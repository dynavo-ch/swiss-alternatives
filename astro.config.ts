import { defineConfig } from 'astro/config';
import { site } from './src/config/site';
import { defaultLocale, locales } from './src/i18n/config';

// Optional analytics (disabled by default) is the only third-party origin the CSP may allow.
const analyticsOrigin = site.analytics ? new URL(site.analytics.src).origin : '';

export default defineConfig({
  site: site.url,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  i18n: {
    defaultLocale,
    locales: [...locales],
    routing: { prefixDefaultLocale: false },
  },
  devToolbar: { enabled: false },
  // Content-Security-Policy with hashes for every script and style Astro emits.
  // The site loads nothing from third parties.
  security: {
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        `connect-src 'self'${analyticsOrigin ? ` ${analyticsOrigin}` : ''}`,
        "manifest-src 'self'",
        "base-uri 'self'",
        "form-action 'self'",
        "object-src 'none'",
      ],
    },
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
