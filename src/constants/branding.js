/** Nom officiel de la marque — identique dans toutes les langues */
export const BRAND_NAME = 'TAOMAN GROUP INVESTMENTS';
export const BRAND_SHORT = 'TAOMAN';
export const BRAND_LEGAL = 'TAOMAN GROUP INVESTMENTS';

/** Affichage logo / splash (deux lignes) */
export const BRAND_LINE_1 = 'TAOMAN';
export const BRAND_LINE_2 = 'GROUP INVESTMENTS';

export const BRAND_TAGLINE = {
  en: 'Strategic investment, partnerships and projects in Togo',
  fr: 'Investissement stratégique, partenariats et projets au Togo',
};

/** @deprecated Use BRAND_NAME */
export const BRAND_FR = BRAND_NAME;

export const BRAND = {
  short: BRAND_SHORT,
  en: BRAND_NAME,
  fr: BRAND_NAME,
  legal: BRAND_LEGAL,
};

/** Nom de marque fixe — ne varie pas selon la langue */
export function getBrandName(_languageCode = 'FR') {
  return BRAND_NAME;
}

export function getBrandTagline(languageCode = 'FR') {
  const code = String(languageCode || 'FR').toUpperCase();
  return code === 'FR' ? BRAND_TAGLINE.fr : BRAND_TAGLINE.en;
}

/** Anciennes dénominations à remplacer par BRAND_NAME dans le contenu CMS */
const LEGACY_BRAND_REPLACEMENTS = [
  [/TAOMAN\s+Groupe\s+Investissement/gi, BRAND_NAME],
  [/Taoman\s+Groupe\s+Investissement/gi, BRAND_NAME],
  [/TAOMAN\s+GROUP\s+INVESTISSEMENT/gi, BRAND_NAME],
  [/Taoman\s+Group\s+Investissement/gi, BRAND_NAME],
  [/Taoman\s+Group\s+Investments?/gi, BRAND_NAME],
  [/TAOMAN\s+Groupe(?!\s+Investissement)/gi, BRAND_NAME],
  [/Taoman\s+Groupe(?!\s+Investissement)/gi, BRAND_NAME],
];

export function normalizeBrandText(value) {
  if (typeof value !== 'string' || !value) return value;
  return LEGACY_BRAND_REPLACEMENTS.reduce((text, [pattern, replacement]) => text.replace(pattern, replacement), value);
}

export function normalizeBrandDeep(value) {
  if (typeof value === 'string') return normalizeBrandText(value);
  if (Array.isArray(value)) return value.map(normalizeBrandDeep);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, normalizeBrandDeep(v)]));
  }
  return value;
}
