/** Nom officiel de la marque — toujours utiliser cette constante */
export const BRAND_NAME = 'Taoman Group Investissement';
export const BRAND_SHORT = 'Taoman';
export const BRAND_LEGAL = 'Taoman Group Investissement S.A.';

/** Affichage logo / splash (deux lignes) */
export const BRAND_LINE_1 = 'Taoman';
export const BRAND_LINE_2 = 'Group Investissement';

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

/** @param {string} _languageCode — kept for API compatibility */
export function getBrandName(_languageCode = 'FR') {
  return BRAND_NAME;
}

export function getBrandTagline(languageCode = 'FR') {
  const code = String(languageCode || 'FR').toUpperCase();
  return code === 'FR' ? BRAND_TAGLINE.fr : BRAND_TAGLINE.en;
}
