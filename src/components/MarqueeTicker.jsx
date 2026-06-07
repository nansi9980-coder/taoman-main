/**
 * Bandeau défilant infini — confiance, valeurs, mots-clés marque.
 */
export const MarqueeTicker = ({
  items = [],
  className = '',
  speed = 35,
  variant = 'dark',
}) => {
  if (!items.length) return null;

  const doubled = [...items, ...items];
  const isLight = variant === 'light';

  return (
    <div
      className={`marquee-ticker overflow-hidden border-y ${
        isLight
          ? 'border-primary/10 bg-surface-container-low'
          : 'border-white/10 bg-[#07111f]'
      } py-4 ${className}`.trim()}
      aria-hidden="true"
    >
      <div
        className="marquee-ticker__track flex items-center gap-10 whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className={`inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.25em] ${
              isLight ? 'text-primary/70' : 'text-white/55'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isLight ? 'bg-primary/40' : 'bg-cyan-400/60'
              }`}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
