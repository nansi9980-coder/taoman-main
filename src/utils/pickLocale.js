/** Langue interface = code FR, EN, ES… */
export function isFrenchLocale(language) {
  return !language || language === 'FR';
}

/**
 * Hors français : priorité aux traductions i18n.
 * En français : priorité au CMS, puis i18n en secours.
 */
export function pickLocale(language, cmsValue, i18nValue) {
  if (!isFrenchLocale(language)) {
    if (i18nValue != null && i18nValue !== '') return i18nValue;
    return cmsValue;
  }
  if (cmsValue != null && cmsValue !== '') return cmsValue;
  return i18nValue;
}

export function pickLocaleList(language, cmsList, i18nList) {
  if (!isFrenchLocale(language) && Array.isArray(i18nList) && i18nList.length > 0) {
    return i18nList;
  }
  if (Array.isArray(cmsList) && cmsList.length > 0) return cmsList;
  return i18nList || cmsList || [];
}
