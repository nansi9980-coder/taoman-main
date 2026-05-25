/** Official brand name — English on all public pages */
export const BRAND_NAME = 'TAOMAN Group Investment';
export const BRAND_SHORT = 'TAOMAN';
export const BRAND_LEGAL = 'TAOMAN Group Investment S.A.';

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
export function getBrandName(_languageCode = 'EN') {
  return BRAND_NAME;
}

export function getBrandTagline(languageCode = 'EN') {
  const code = String(languageCode || 'EN').toUpperCase();
  return code === 'FR' ? BRAND_TAGLINE.fr : BRAND_TAGLINE.en;
}
