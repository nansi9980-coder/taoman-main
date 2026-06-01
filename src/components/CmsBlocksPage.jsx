import { Header } from './Header';
import { Footer } from './Footer';
import { useSiteContent } from '../context/SiteContentContext';
import { useLanguage } from '../context/LanguageContext';
import { mergeCmsSection } from '../utils/cmsSectionDefaults';
import { pickLocale } from '../utils/pickLocale';

/**
 * Page légale / CGU / confidentialité avec blocs éditables depuis le CMS.
 * @param {string} i18nNamespace - Optionnel ('legal' | 'privacy' | 'terms')
 */
export function CmsBlocksPage({ sectionKey, activeLink, variant = 'gradient', i18nNamespace }) {
  const { section } = useSiteContent();
  const { translations: tc, language } = useLanguage();
  const data = mergeCmsSection(sectionKey, section(sectionKey), language);
  const i18nHero = (i18nNamespace && tc?.[i18nNamespace]?.hero) || {};
  const heroEyebrow = i18nHero.eyebrow;
  const heroTitle = pickLocale(language, data.title, i18nHero.title);
  const heroSubtitle = pickLocale(language, data.subtitle, i18nHero.description);

  const heroClass =
    variant === 'terms'
      ? 'bg-gradient-to-r from-primary to-primary-container py-20 px-6 text-white'
      : 'bg-gradient-to-r from-primary to-primary-container py-16 px-6 text-on-primary';

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink={activeLink} />

      <main className="flex-grow pt-24">
        <section className={heroClass}>
          <div className="max-w-[1400px] mx-auto text-center">
            {heroEyebrow && (
              <p className="mb-4 text-xs md:text-sm font-bold uppercase tracking-[0.35em] opacity-80">{heroEyebrow}</p>
            )}
            <h1 className="text-5xl font-bold mb-4">{heroTitle}</h1>
            {heroSubtitle && <p className="text-xl opacity-90">{heroSubtitle}</p>}
          </div>
        </section>

        <section className="py-16 px-6">
          <div className={variant === 'terms' ? 'max-w-[900px] mx-auto' : 'max-w-3xl mx-auto space-y-10'}>
            {variant === 'terms' ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 space-y-8">
                {(data.blocks || []).map((block, idx) => (
                  <section key={idx}>
                    <h2 className="text-3xl font-bold text-on-surface mb-4">{block.title}</h2>
                    {block.body && <p className="text-on-surface-variant leading-relaxed whitespace-pre-wrap">{block.body}</p>}
                    {block.listItems?.length > 0 && (
                      <ul className="list-disc list-inside space-y-2 text-on-surface-variant mt-4">
                        {block.listItems.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {block.footer && <p className="text-on-surface-variant mt-4">{block.footer}</p>}
                  </section>
                ))}
                {data.footerNote && (
                  <p className="text-sm text-on-surface-variant text-center pt-8 border-t border-outline/20">
                    {data.footerNote}
                  </p>
                )}
              </div>
            ) : (
              (data.blocks || []).map((block, idx) => (
                <div
                  key={idx}
                  className="interactive interactive-lift bg-white p-8 rounded-2xl shadow-md border border-outline-variant/20 animate-fade-in-up motion-reduce:hover:translate-y-0"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <h2 className="text-2xl font-bold text-on-surface mb-4">{block.title}</h2>
                  {block.body && (
                    <p className="text-on-surface-variant leading-relaxed whitespace-pre-wrap">{block.body}</p>
                  )}
                  {block.listItems?.length > 0 && (
                    <ul className="mt-4 space-y-2 text-on-surface-variant list-disc list-inside">
                      {block.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {block.footer && <p className="text-on-surface-variant mt-4">{block.footer}</p>}
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
