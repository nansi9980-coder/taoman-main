/** Codes langues du site (alignés sur LanguageContext). */
export const LANG_CODES = ['FR', 'EN', 'ES', 'PT', 'DE', 'AR', 'ZH'];

/**
 * Construit un dictionnaire 7 langues avec repli EN → FR si une locale manque.
 */
export function buildLangPacks({ FR, EN, ES, PT, DE, AR, ZH }) {
  const en = EN || FR;
  const fr = FR || en;
  const fallback = (specific) => specific || en || fr;
  return {
    FR: fr,
    EN: en,
    ES: fallback(ES),
    PT: fallback(PT),
    DE: fallback(DE),
    AR: fallback(AR),
    ZH: fallback(ZH),
  };
}

export function pickLangPack(packs, language) {
  if (!packs) return {};
  return packs[language] || packs.EN || packs.FR || {};
}
