import { useLanguage } from '../context/LanguageContext';

/**
 * Bande de "partenaires" en marquee infini — i18n-ready.
 * Les textes eyebrow/title passent maintenant par le contexte langue.
 * Props : items = [{ name, eyebrow? }]
 */
export const PartnersBand = ({
  items,
  eyebrow,
  title,
  className = '',
}) => {
  const { translations: t } = useLanguage();

  const defaultEyebrow = t?.partners?.eyebrow || 'Ils nous font confiance';
  const defaultTitle   = t?.partners?.title   || 'Un écosystème institutionnel et privé';

  const looped = [...items, ...items];

  return (
    <section className={`relative overflow-hidden bg-[#07111f] py-16 md:py-20 ${className}`}>
      <div className="absolute inset-0 opacity-50">
        <div className="absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-cyan-200 mb-3">
            {eyebrow || defaultEyebrow}
          </p>
          <h2 className="text-2xl md:text-4xl font-black text-white">
            {title || defaultTitle}
          </h2>
        </div>

        <div className="marquee-mask">
          <div className="marquee-track gap-3 md:gap-5">
            {looped.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="flex h-20 min-w-[220px] md:min-w-[260px] items-center justify-center rounded-2xl glass-premium px-6"
              >
                <div className="text-center">
                  {item.eyebrow && (
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-200/80">
                      {item.eyebrow}
                    </p>
                  )}
                  <p className="text-base md:text-lg font-black text-white tracking-tight">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};