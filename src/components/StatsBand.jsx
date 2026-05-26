import { useEffect, useRef, useState } from 'react';

/**
 * Bandeau de statistiques premium avec compteurs animés.
 * Props : items = [{ value: number, suffix?: string, prefix?: string, label, icon? }]
 */
const useCountUp = (target, { duration = 1600, decimals = 0, start = false } = {}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;
    let raf;
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start, decimals]);

  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString('fr-FR');
};

const StatItem = ({ item, inView }) => {
  const display = useCountUp(item.value, {
    duration: 1800,
    decimals: item.decimals || 0,
    start: inView,
  });
  const Icon = item.icon;
  return (
    <div className="relative flex flex-col items-start gap-3 rounded-3xl glass-premium p-7 md:p-8 premium-halo">
      {Icon && (
        <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-200 ring-1 ring-cyan-200/30">
          <Icon className="h-6 w-6" strokeWidth={2.2} aria-hidden="true" />
        </div>
      )}
      <div className="flex items-baseline gap-1">
        {item.prefix && <span className="text-2xl md:text-3xl font-black text-white/70">{item.prefix}</span>}
        <span className="stat-number text-5xl md:text-6xl font-black tracking-tight text-white">
          {display}
        </span>
        {item.suffix && (
          <span className="text-2xl md:text-3xl font-black text-cyan-200">{item.suffix}</span>
        )}
      </div>
      <p className="text-sm md:text-base font-semibold text-white/75 leading-snug">
        {item.label}
      </p>
      {item.hint && (
        <p className="text-xs text-white/50">{item.hint}</p>
      )}
    </div>
  );
};

export const StatsBand = ({ items, eyebrow, title, description, className = '', backdrop }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {backdrop}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 md:py-24">
        {(eyebrow || title || description) && (
          <div className="text-center mb-12">
            {eyebrow && (
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-200 mb-3">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 max-w-2xl mx-auto text-lg text-white/65">{description}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((it, idx) => (
            <StatItem key={idx} item={it} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};
