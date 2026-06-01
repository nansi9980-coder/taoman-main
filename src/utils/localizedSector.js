import { getContentTranslations } from '../i18n/content';
import { SECTORS_FULL_EN } from '../i18n/sectors-full-en';
import { isFrenchLocale, pickLocale, pickLocaleList } from './pickLocale';

const FULL_BY_LANG = {
  EN: SECTORS_FULL_EN,
  ES: SECTORS_FULL_EN,
  PT: SECTORS_FULL_EN,
  DE: SECTORS_FULL_EN,
  AR: SECTORS_FULL_EN,
  ZH: SECTORS_FULL_EN,
};

function fullForSlug(language, slug) {
  if (isFrenchLocale(language)) return null;
  const pack = FULL_BY_LANG[language] || SECTORS_FULL_EN;
  return pack[slug] || null;
}

/** Fusionne secteur CMS/défaut avec traductions i18n et corps long hors FR. */
export function localizeSector(base, language) {
  if (!base) return null;
  const tr = getContentTranslations(language).sectors?.items?.[base.slug];
  const full = fullForSlug(language, base.slug);

  const merged = {
    ...base,
    title: pickLocale(language, base.title, tr?.title),
    tag: pickLocale(language, base.tag, tr?.tag),
    short: pickLocale(language, base.short, tr?.short),
    intro: pickLocale(language, base.intro, full?.intro || tr?.intro),
    context: pickLocale(language, base.context, full?.context),
    goal: pickLocale(language, base.goal, full?.goal),
    perimetre: pickLocale(language, base.perimetre, full?.perimetre),
    cout: pickLocale(language, base.cout, full?.cout),
    financement: pickLocale(language, base.financement, full?.financement),
    highlights: pickLocaleList(language, base.highlights, tr?.highlights),
    opportunities: pickLocaleList(language, base.opportunities, full?.opportunities),
    documents: pickLocaleList(language, base.documents, full?.documents),
    partenaires: pickLocaleList(language, base.partenaires, full?.partenaires),
  };

  return merged;
}
