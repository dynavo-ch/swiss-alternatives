/**
 * Small scripts that must run before first paint and are therefore inlined.
 * Their SHA-256 hashes are added to the Content-Security-Policy at render
 * time (see InlineScript.astro), so no 'unsafe-inline' is needed.
 */
import { createHash } from 'node:crypto';

/** Sets the `js` class and restores the saved theme before paint (avoids a flash). */
export const themeBootstrap = `(function(){var d=document.documentElement;d.classList.replace('no-js','js');try{var t=localStorage.getItem('sa:theme');if(t==='light'||t==='dark')d.dataset.theme=t}catch(e){}})();`;

/** Shows the platform-appropriate search shortcut. */
export const shortcutLabel = `if(!/Mac|iPhone|iPad/.test(navigator.userAgent)){document.querySelectorAll('[data-shortcut]').forEach(function(el){el.textContent='Ctrl K'})}`;

export function sha256(code: string): `sha256-${string}` {
  return `sha256-${createHash('sha256').update(code).digest('base64')}`;
}
