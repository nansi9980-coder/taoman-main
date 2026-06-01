/**
 * CMS multilingue : stockage { _v: 2, locales: { FR: {...}, EN: {...} } }
 * + résolution vitrine + synthèse i18n si traduction absente en base.
 */
import { getContentTranslations } from '../i18n/content';
import { getServicesTranslations } from '../i18n/services';
import { getFaqTranslations } from '../i18n/faq';
import { getLocalizedCmsV2Default } from '../i18n/cms-legal-blocks';
import { getCmsV2Default } from './cmsSectionDefaults';
import { mergeOperationalServices } from '../data/operational-services-defaults';
import { normalizeSectors } from '../data/sectors-defaults';
import { mergeRealisationSlides } from '../data/realisations-defaults';
import { mergeHeroMosaicBlock } from '../data/hero-mosaic-defaults';
import { mergeServicesPageHeroSlides } from '../data/services-page-hero-defaults';
import { isFrenchLocale } from './pickLocale';

export const CMS_LOCALE_VERSION = 2;

export function isMultiLocaleContent(content) {
  return Boolean(content && typeof content === 'object' && content.locales && typeof content.locales === 'object');
}

/** Extrait la map des langues (legacy = tout en FR). */
export function unwrapLocales(content) {
  if (!content || typeof content !== 'object') return { FR: {} };
  if (isMultiLocaleContent(content)) return { ...content.locales };
  return { FR: content };
}

/** Fusionne une langue éditée dans le blob à enregistrer. */
export function wrapLocalePayload(existingRaw, language, payload) {
  const locales = unwrapLocales(existingRaw);
  return {
    _v: CMS_LOCALE_VERSION,
    locales: {
      ...locales,
      [language]: payload,
    },
  };
}

function hasMeaningfulContent(obj) {
  if (!obj || typeof obj !== 'object') return false;
  if (Array.isArray(obj)) return obj.length > 0;
  return Object.keys(obj).some((k) => {
    const v = obj[k];
    if (v == null || v === '') return false;
    if (typeof v === 'object') return hasMeaningfulContent(v);
    return true;
  });
}

function aboutFromI18n(t) {
  const a = t.about || {};
  return {
    title: a.title,
    description: a.description,
    mission: a.mission?.body,
    vision: a.vision?.body,
    heroHighlights: a.hero?.highlights,
    values: (a.values?.items || []).map((v, i) => ({
      icon: String(i + 1).padStart(2, '0'),
      title: v.title,
      description: v.description,
    })),
    timeline: a.timeline?.items || [],
    leaders: a.leaders?.items || [],
    stats: (a.stats?.items || []).map((s) => ({ number: s.number, label: s.label })),
  };
}

function heroFromI18n(t) {
  const h = t.home?.hero || {};
  return {
    badgeMain: h.badgeMain,
    badges: h.badges,
    title: h.title,
    subtitle: h.subtitle,
    description: h.description,
    btn1: h.btn1,
    btn2: h.btn2,
    mosaic: mergeHeroMosaicBlock({
      liveLabel: h.liveLabel,
      livePill: h.livePill,
      kpiLabel: h.kpiLabel,
      kpiPercent: 96,
      tiles: ['logistics', 'services', 'teams'].map((id) => ({
        id,
        tag: h.mosaic?.[id]?.tag || '',
        title: h.mosaic?.[id]?.title || '',
        imageUrl: '',
      })),
    }),
  };
}

function sectorsFromI18n(t) {
  const items = t.sectors?.items || {};
  return {
    items: normalizeSectors({
      items: Object.entries(items).map(([slug, row]) => ({
        slug,
        title: row.title,
        tag: row.tag,
        short: row.short,
        description: row.short,
        highlights: row.highlights,
        imageUrl: '',
      })),
    }),
  };
}

function servicesPageFromI18n(t, language) {
  const page = t.services?.page || {};
  const svc = getServicesTranslations(language);
  return {
    badge: page.badge,
    title: page.title,
    description: page.description,
    btn1: page.btn1,
    btn2: page.btn2,
    heroSlides: mergeServicesPageHeroSlides(
      (svc.items || []).slice(0, 6).map((item, i) => ({
        id: `lavage-${i + 1}`,
        title: item.title,
        category: item.badge || 'Services',
        imageUrl: '',
      }))
    ),
  };
}

function operationalServicesFromI18n(language) {
  const svc = getServicesTranslations(language);
  return {
    items: mergeOperationalServices(
      (svc.items || []).map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        badge: item.badge,
        sla: item.sla,
        priceFrom: item.priceFrom,
        bullets: item.bullets,
        href: '',
        imageUrl: '',
        published: true,
      }))
    ),
  };
}

function contactFromI18n() {
  return {};
}

function footerFromI18n(t) {
  return {
    description: t.home?.cta?.description || t.about?.description || '',
  };
}

function legalBlockFromI18n(t, key, language) {
  const defaults = isFrenchLocale(language)
    ? getCmsV2Default(key)
    : getLocalizedCmsV2Default(key, language);
  const ns = t[key];
  if (!ns?.hero) return defaults;
  return {
    ...defaults,
    title: ns.hero.title || defaults.title,
    subtitle: ns.hero.description || defaults.subtitle,
  };
}

function faqFromI18n(language) {
  const faq = getFaqTranslations(language);
  return {
    items: faq.items || [],
    categories: faq.categories || [],
  };
}

function investmentFromI18n(t) {
  const inv = t.invest || {};
  return {
    badge: inv.hero?.eyebrow,
    title: inv.hero?.title,
    description: inv.hero?.description,
    subtitle: inv.programs?.description,
  };
}

function applySectionPostProcess(sectionKey, data, language) {
  if (!data || typeof data !== 'object') return data;
  switch (sectionKey) {
    case 'hero':
      return {
        ...data,
        mosaic: mergeHeroMosaicBlock(data.mosaic || {}),
      };
    case 'servicesPage':
      return {
        ...data,
        heroSlides: mergeServicesPageHeroSlides(data.heroSlides || []),
      };
    case 'operationalServices':
      return {
        items: mergeOperationalServices(data.items || []),
      };
    case 'sectors':
      return { items: normalizeSectors({ items: data.items || [] }) };
    case 'realisations':
      return {
        ...data,
        items: mergeRealisationSlides(data.items || []),
      };
    default:
      return data;
  }
}

/** Contenu CMS synthétisé depuis les fichiers i18n (quand la langue n'est pas en base). */
export function getSectionI18nFallback(sectionKey, language) {
  const lang = language || 'FR';
  const t = getContentTranslations(lang);

  let raw;
  switch (sectionKey) {
    case 'hero':
    case 'heroBanner':
      raw = heroFromI18n(t);
      break;
    case 'about':
      raw = aboutFromI18n(t);
      break;
    case 'sectors':
      raw = sectorsFromI18n(t);
      break;
    case 'servicesPage':
      raw = servicesPageFromI18n(t, lang);
      break;
    case 'operationalServices':
      raw = operationalServicesFromI18n(lang);
      break;
    case 'contact':
      raw = contactFromI18n();
      break;
    case 'footer':
      raw = footerFromI18n(t);
      break;
    case 'faq':
      raw = faqFromI18n(lang);
      break;
    case 'investment':
    case 'investmentTgi':
    case 'investmentTie':
      raw = investmentFromI18n(t);
      break;
    case 'legal':
    case 'privacy':
    case 'terms':
    case 'jobs':
    case 'devisLavage':
    case 'devisDemenagement':
    case 'devisBureaux':
    case 'devisClimatisation':
      raw = legalBlockFromI18n(t, sectionKey, lang);
      break;
    case 'cta':
      raw = {
        title: t.home?.cta?.title,
        subtitle: t.home?.cta?.subtitle,
        buttonText: t.home?.cta?.button,
      };
      break;
    default:
      return null;
  }
  return applySectionPostProcess(sectionKey, raw, lang);
}

/**
 * Résout le contenu d'une section pour la langue active (vitrine).
 */
export function resolveCmsForLanguage(rawContent, language, sectionKey) {
  const lang = language || 'FR';
  const locales = unwrapLocales(rawContent);

  if (isFrenchLocale(lang)) {
    const cms = locales.FR ?? rawContent ?? {};
    return applySectionPostProcess(sectionKey, cms, lang);
  }

  const localized = locales[lang];
  if (hasMeaningfulContent(localized)) {
    return applySectionPostProcess(sectionKey, localized, lang);
  }

  const i18n = getSectionI18nFallback(sectionKey, lang);
  if (i18n) return i18n;

  return applySectionPostProcess(sectionKey, locales.FR || {}, lang);
}
