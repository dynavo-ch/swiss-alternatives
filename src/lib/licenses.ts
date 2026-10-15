/**
 * Licence classification. Source-available licences are not open source —
 * this keeps the distinction explicit instead of listing them side by side.
 */
const OSI = new Set(
  [
    '0BSD',
    'AGPL-3.0',
    'AGPL-3.0-only',
    'AGPL-3.0-or-later',
    'Apache-2.0',
    'Artistic-2.0',
    'BSD-2-Clause',
    'BSD-3-Clause',
    'CDDL-1.0',
    'EPL-2.0',
    'EUPL-1.2',
    'GPL-2.0',
    'GPL-2.0-only',
    'GPL-2.0-or-later',
    'GPL-3.0',
    'GPL-3.0-only',
    'GPL-3.0-or-later',
    'ISC',
    'LGPL-2.1',
    'LGPL-2.1-only',
    'LGPL-2.1-or-later',
    'LGPL-3.0',
    'LGPL-3.0-only',
    'LGPL-3.0-or-later',
    'MIT',
    'MPL-2.0',
    'Unlicense',
    'Zlib',
  ].map((id) => id.toLowerCase()),
);

const SOURCE_AVAILABLE = new Set(
  [
    'BUSL-1.1',
    'SSPL-1.0',
    'Elastic-2.0',
    'FSL-1.1-MIT',
    'FSL-1.1-Apache-2.0',
    'Commons-Clause',
  ].map((id) => id.toLowerCase()),
);

export type LicenseClass = 'osi' | 'source-available' | 'other';

/** Classifies an SPDX expression such as "GPL-3.0, MIT" or "Apache-2.0 OR MIT". */
export function licenseClass(license: string | undefined | null): LicenseClass | undefined {
  if (!license) return undefined;
  const ids = license
    .split(/[\s,;/()]+|\bOR\b|\bAND\b|\bWITH\b/i)
    .map((id) => id.trim().toLowerCase())
    .filter(Boolean);
  if (ids.length === 0) return undefined;
  if (ids.some((id) => SOURCE_AVAILABLE.has(id) || id.includes('source-available')))
    return 'source-available';
  return ids.every((id) => OSI.has(id)) ? 'osi' : 'other';
}
