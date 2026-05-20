import { useSiteContent } from '../context/SiteContentContext';
import { mergeCmsSection } from '../utils/cmsSectionDefaults';

export function DevisPageHero({ sectionKey }) {
  const { section } = useSiteContent();
  const hero = mergeCmsSection(sectionKey, section(sectionKey));

  return (
    <section className="bg-gradient-to-r from-primary to-primary-container py-20 px-6 text-white">
      <div className="max-w-[1200px] mx-auto text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{hero.title}</h1>
        {hero.subtitle && (
          <p className="text-xl text-white/90 max-w-3xl mx-auto">{hero.subtitle}</p>
        )}
      </div>
    </section>
  );
}
