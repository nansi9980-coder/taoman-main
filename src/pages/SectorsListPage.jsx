import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useSiteContent } from '../context/SiteContentContext';
import { useLanguage } from '../context/LanguageContext';
import { PhotoHeroBackground } from '../components/PhotoHeroBackground';
import { HERO_MEDIA_SPECS } from '../constants/heroMedia';
import { normalizeSectors, resolveSectorImage } from '../data/sectors-defaults';
import { pickLocale, pickLocaleList } from '../utils/pickLocale';
import { SeoHead, buildBreadcrumb } from '../components/SeoHead';
import { Reveal } from '../components/Reveal';

export const SectorsListPage = () => {
  const { section } = useSiteContent();
  const { content: tc, nav: tNav, language } = useLanguage();
  const tSec = tc.sectors;
  const rawSectors = normalizeSectors(section('sectors'));
  const sectors = rawSectors.map((s) => {
    const tr = tSec.items?.[s.slug];
    const base = {
      ...s,
      title: pickLocale(language, s.title, tr?.title),
      tag: pickLocale(language, s.tag, tr?.tag),
      short: pickLocale(language, s.short, tr?.short),
      highlights: pickLocaleList(language, s.highlights, tr?.highlights),
    };
    return { ...base, image: resolveSectorImage(base) };
  });
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <SeoHead
        title={tNav.projects}
        description={tSec.hero.description}
        path="/secteurs"
        jsonLd={buildBreadcrumb([
          { name: tNav.home, path: '/' },
          { name: tNav.projects, path: '/secteurs' },
        ])}
        keywords="secteurs investissement Togo, logistique, agro business, BTP, numérique, commerce, opportunités sectorielles"
      />
      <Header activeLink="projets" />

      <main id="main-content" className="flex-grow pt-24">
        <section className="relative overflow-hidden min-h-[42vh] md:min-h-[48vh] flex items-center py-20 px-6 text-white">
          <PhotoHeroBackground
            src={HERO_MEDIA_SPECS.projects.src}
            objectPosition={HERO_MEDIA_SPECS.projects.objectPosition}
            overlayVariant={HERO_MEDIA_SPECS.projects.overlayVariant}
            overlayIntensity="max"
          />
          <div className="relative z-10 max-w-[1100px] mx-auto text-center animate-fade-in-up px-4 py-6 md:px-8 md:py-10 rounded-3xl bg-[#020d1a]/45 backdrop-blur-md border border-white/10 shadow-2xl [text-shadow:0_2px_20px_rgba(0,0,0,0.85)]">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-100 mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{tSec.hero.eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-[-0.04em] mb-6 text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              {tSec.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              {tSec.hero.description}
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto">
            <Reveal preset="fadeUp">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-4">{tSec.hero.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-black text-on-surface section-underline">{tSec.hero.title}</h2>
            </div>
            </Reveal>
            <Reveal preset="fadeUp" childSelector=".sector-list-card" stagger={0.08}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector, idx) => (
                <Link
                  key={sector.slug || idx}
                  to={`/secteurs/${sector.slug || idx}`}
                  className="sector-list-card group relative flex flex-col overflow-hidden rounded-3xl border border-outline-variant/40 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 interactive interactive-lift hover-glow motion-reduce:hover:translate-y-0"
                >
                  {/* Photo */}
                  {sector.image && (
                    <div className="relative h-52 overflow-hidden bg-surface-container-low">
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" aria-hidden="true" />
                      <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                        <span className="rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
                          {sector.tag || tSec.tagFallback}
                        </span>
                        <span className="text-2xl font-black text-white/90 drop-shadow">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h2 className="text-xl md:text-2xl font-black text-white leading-tight drop-shadow-lg">
                          {sector.title}
                        </h2>
                      </div>
                    </div>
                  )}

                  {/* Contenu */}
                  <div className="flex-1 flex flex-col p-7">
                    {!sector.image && (
                      <>
                        <div className="flex items-start justify-between mb-5">
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-primary">
                            {sector.tag || tSec.tagFallback}
                          </span>
                          <span className="text-2xl font-black text-primary/30">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-on-surface mb-3 leading-tight">
                          {sector.title}
                        </h2>
                      </>
                    )}

                    <p className="text-on-surface-variant leading-relaxed mb-5 line-clamp-3">
                      {sector.short || sector.description || ''}
                    </p>

                    {Array.isArray(sector.highlights) && sector.highlights.length > 0 && (
                      <ul className="space-y-2 mb-5">
                        {sector.highlights.slice(0, 3).map((item) => (
                          <li key={item} className="flex gap-3 text-sm text-on-surface">
                            <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-auto flex items-center gap-2 pt-4 border-t border-outline-variant/40 text-primary font-bold transition-transform duration-300 group-hover:translate-x-1">
                      {tSec.discover}
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            </Reveal>

            {sectors.length === 0 && (
              <p className="text-center text-on-surface-variant">{tSec.empty}</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
