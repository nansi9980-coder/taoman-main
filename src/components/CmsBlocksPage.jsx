import { Header } from './Header';
import { Footer } from './Footer';
import { useSiteContent } from '../context/SiteContentContext';
import { useLanguage } from '../context/LanguageContext';
import { mergeCmsSection } from '../utils/cmsSectionDefaults';
import { pickLocale } from '../utils/pickLocale';
import { PageHeroEnhanced } from './PageHeroEnhanced';
import { Reveal } from './Reveal';
import { SeoHead } from './SeoHead';
import { HERO_MEDIA_SPECS } from '../constants/heroMedia';

/**
 * Page légale / CGU / confidentialité avec blocs éditables depuis le CMS.
 */
export function CmsBlocksPage({
  sectionKey,
  activeLink,
  variant = 'gradient',
  i18nNamespace,
  seoPath = '',
  seoDescription = '',
}) {
  const { section } = useSiteContent();
  const { translations: tc, language } = useLanguage();
  const data = mergeCmsSection(sectionKey, section(sectionKey), language);
  const i18nHero = (i18nNamespace && tc?.[i18nNamespace]?.hero) || {};
  const heroEyebrow = i18nHero.eyebrow;
  const heroTitle = pickLocale(language, data.title, i18nHero.title);
  const heroSubtitle = pickLocale(language, data.subtitle, i18nHero.description);
  const seoDesc =
    seoDescription ||
    tc?.[i18nNamespace]?.seoDescription ||
    heroSubtitle ||
    heroTitle;

  const isTerms = variant === 'terms';

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {seoPath && (
        <SeoHead
          title={heroTitle}
          description={seoDesc}
          path={seoPath}
          noindex={false}
        />
      )}
      <Header activeLink={activeLink} />

      <main id="main-content" className="flex-grow pt-24">
        <PageHeroEnhanced
          photoProps={{
            src: HERO_MEDIA_SPECS.about.src,
            objectPosition: '70% center',
            overlayVariant: 'left',
            overlayIntensity: 'strong',
          }}
          eyebrow={heroEyebrow}
          title={heroTitle}
          description={heroSubtitle}
          align="center"
          contentClassName="max-w-[900px] px-4 py-8 md:px-10 md:py-10 rounded-3xl bg-[#020d1a]/45 backdrop-blur-md border border-white/10 shadow-2xl"
        />

        <section className="py-16 px-6 relative overflow-hidden">
          <div className="max-w-[900px] mx-auto relative z-[1]">
            {isTerms ? (
              <Reveal preset="fadeUp">
                <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 space-y-8 border border-outline-variant/30 hover-card-premium">
                  {(data.blocks || []).map((block, idx) => (
                    <section key={idx} className="cms-block">
                      <h2 className="text-2xl md:text-3xl font-black text-on-surface mb-4 section-underline">{block.title}</h2>
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
              </Reveal>
            ) : (
              <Reveal preset="fadeUp" childSelector=".cms-block-card" stagger={0.08}>
                <div className="space-y-8">
                  {(data.blocks || []).map((block, idx) => (
                    <div
                      key={idx}
                      className="cms-block-card hover-card-premium interactive hover-glow bg-white p-8 rounded-[2rem] shadow-md border border-outline-variant/20 motion-reduce:hover:translate-y-0"
                    >
                      <h2 className="text-2xl font-black text-on-surface mb-4">{block.title}</h2>
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
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
