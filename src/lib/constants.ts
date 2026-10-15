/**
 * Shared enumerations used by the content schema, the UI and client scripts.
 * Human-readable labels live in the i18n dictionaries, keyed by these values.
 */

export const CANTONS = [
  'AG',
  'AI',
  'AR',
  'BE',
  'BL',
  'BS',
  'FR',
  'GE',
  'GL',
  'GR',
  'JU',
  'LU',
  'NE',
  'NW',
  'OW',
  'SG',
  'SH',
  'SO',
  'SZ',
  'TG',
  'TI',
  'UR',
  'VD',
  'VS',
  'ZG',
  'ZH',
] as const;
export type Canton = (typeof CANTONS)[number];

/** Official canton names in their local language(s). */
export const CANTON_NAMES: Record<Canton, string> = {
  AG: 'Aargau',
  AI: 'Appenzell Innerrhoden',
  AR: 'Appenzell Ausserrhoden',
  BE: 'Bern',
  BL: 'Basel-Landschaft',
  BS: 'Basel-Stadt',
  FR: 'Fribourg',
  GE: 'Geneva',
  GL: 'Glarus',
  GR: 'Graubünden',
  JU: 'Jura',
  LU: 'Lucerne',
  NE: 'Neuchâtel',
  NW: 'Nidwalden',
  OW: 'Obwalden',
  SG: 'St. Gallen',
  SH: 'Schaffhausen',
  SO: 'Solothurn',
  SZ: 'Schwyz',
  TG: 'Thurgau',
  TI: 'Ticino',
  UR: 'Uri',
  VD: 'Vaud',
  VS: 'Valais',
  ZG: 'Zug',
  ZH: 'Zurich',
};

export const AUDIENCES = [
  'consumer',
  'business',
  'enterprise',
  'public-sector',
  'developer',
] as const;
export type Audience = (typeof AUDIENCES)[number];

export const DEPLOYMENTS = ['saas', 'self-hosted', 'on-premises', 'managed'] as const;
export type Deployment = (typeof DEPLOYMENTS)[number];

export const PLATFORMS = [
  'web',
  'windows',
  'macos',
  'linux',
  'ios',
  'android',
  'browser-extension',
  'cli',
  'api',
] as const;
export type Platform = (typeof PLATFORMS)[number];

export const CERTIFICATIONS = [
  'iso-27001',
  'iso-27017',
  'iso-27018',
  'iso-27701',
  'iso-9001',
  'iso-14001',
  'iso-50001',
  'iso-22301',
  'soc-1',
  'soc-2',
  'bsi-c5',
  'pci-dss',
  'hipaa',
  'tisax',
  'isae-3402',
  'isae-3000',
  'finma',
  'hds',
] as const;
export type Certification = (typeof CERTIFICATIONS)[number];

/** Display labels for certifications are language-neutral. */
export const CERTIFICATION_LABELS: Record<Certification, string> = {
  'iso-27001': 'ISO/IEC 27001',
  'iso-27017': 'ISO/IEC 27017',
  'iso-27018': 'ISO/IEC 27018',
  'iso-27701': 'ISO/IEC 27701',
  'iso-9001': 'ISO 9001',
  'iso-14001': 'ISO 14001',
  'iso-50001': 'ISO 50001',
  'iso-22301': 'ISO 22301',
  'soc-1': 'SOC 1',
  'soc-2': 'SOC 2',
  'bsi-c5': 'BSI C5',
  'pci-dss': 'PCI DSS',
  hipaa: 'HIPAA',
  tisax: 'TISAX',
  'isae-3402': 'ISAE 3402',
  'isae-3000': 'ISAE 3000',
  finma: 'FINMA Circ. 2018/3 compliant',
  hds: 'HDS',
};

export const TRI_VALUES = ['yes', 'no', 'partial', 'unknown'] as const;
export type Tri = (typeof TRI_VALUES)[number];

export const HOSTING_VALUES = ['yes', 'no', 'partial', 'optional', 'unknown'] as const;
export type HostingValue = (typeof HOSTING_VALUES)[number];

export const BASIS_VALUES = ['verified', 'vendor', 'inferred'] as const;
export type Basis = (typeof BASIS_VALUES)[number];

export const FEATURE_KEYS = [
  'e2ee',
  'encryptionAtRest',
  'encryptionInTransit',
  'mfa',
  'sso',
  'scim',
  'api',
  'dataExport',
] as const;
export type FeatureKey = (typeof FEATURE_KEYS)[number];
