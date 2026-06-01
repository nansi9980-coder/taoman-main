import { useSiteContent } from '../context/SiteContentContext';
import { useLanguage } from '../context/LanguageContext';
import { mergeCmsSection } from '../utils/cmsSectionDefaults';
import { pickLocale } from '../utils/pickLocale';

/**
 * Hero de page devis avec support i18n.
 * @param {string} sectionKey - Clé CMS (ex: 'devisLavage').
 * @param {string} i18nNamespace - Namespace dans translations.* (ex: 'carwash', 'devisMoving', 'office').
 */
export function DevisPageHero({ sectionKey, i18nNamespace }) {
  const { section } = useSiteContent();
  const { translations: tc, language } = useLanguage();
  const hero = mergeCmsSection(sectionKey, section(sectionKey), language);
  const i18nHero = (i18nNamespace && tc?.[i18nNamespace]?.hero) || {};

  const title = pickLocale(language, hero.title, i18nHero.title);
  const subtitle = pickLocale(language, hero.subtitle, i18nHero.description);
  const eyebrow = i18nHero.eyebrow;

  return (
    <section className="bg-gradient-to-r from-primary to-primary-container py-20 px-6 text-white">
      <div className="max-w-[1200px] mx-auto text-center animate-fade-in-up">
        {eyebrow && (
          <p className="mb-4 text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-white/80">{eyebrow}</p>
        )}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
        {subtitle && (
          <p className="text-xl text-white/90 max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
