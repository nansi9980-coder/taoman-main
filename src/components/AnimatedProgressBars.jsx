import { useRef, useEffect, useState } from 'react';

/** Jauges animées au scroll (critères investissement, etc.). */
export const AnimatedProgressBars = ({ items = [], className = '' }) => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`grid gap-5 md:grid-cols-2 ${className}`.trim()}>
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="rounded-2xl border border-outline-variant/40 bg-white p-5 hover-card-premium interactive hover-glow motion-reduce:hover:translate-y-0"
        >
          <div className="flex items-center justify-between gap-3 mb-2">
            <p className="font-bold text-on-surface">{item.title}</p>
            {item.percent != null && (
              <span className="text-sm font-black text-primary tabular-nums">{item.percent}%</span>
            )}
          </div>
          <p className="text-sm text-on-surface-variant mb-3">{item.desc}</p>
          <div className="h-2 overflow-hidden rounded-full bg-surface-container-low">
            <div
              className="progress-bar-fill h-full rounded-full bg-gradient-to-r from-primary to-cyan-400"
              style={{
                width: animate ? `${item.percent ?? 85 - idx * 5}%` : '0%',
                transitionDelay: `${idx * 80}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
