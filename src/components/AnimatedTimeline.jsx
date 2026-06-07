import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Frise chronologique animée au scroll. */
export const AnimatedTimeline = ({ items = [], className = '' }) => {
  const rootRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const line = lineRef.current;
    if (!root || !line) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cards = root.querySelectorAll('.timeline-card');

    if (reduced) {
      gsap.set(line, { scaleY: 1 });
      gsap.set(cards, { opacity: 1, x: 0 });
      return undefined;
    }

    gsap.set(line, { scaleY: 0, transformOrigin: 'top center' });
    gsap.set(cards, { opacity: 0, x: -24 });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: root, start: 'top 80%', once: true },
    });

    tl.to(line, { scaleY: 1, duration: 1.2, ease: 'power2.out' });
    tl.to(
      cards,
      { opacity: 1, x: 0, duration: 0.55, stagger: 0.15, ease: 'power2.out' },
      '-=0.6'
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [items]);

  return (
    <div ref={rootRef} className={`relative pl-8 md:pl-10 ${className}`.trim()}>
      <div
        ref={lineRef}
        className="absolute left-[11px] md:left-[15px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cyan-400 to-primary/30 rounded-full"
        aria-hidden="true"
      />
      <ol className="space-y-8">
        {items.map((item, idx) => (
          <li key={`${item.year}-${idx}`} className="relative timeline-item">
            <span className="timeline-dot absolute -left-[42px] md:-left-[50px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 text-white text-xs font-black shadow-lg ring-4 ring-surface animate-glow-pulse">
              {idx + 1}
            </span>
            <div className="timeline-card rounded-2xl border border-outline-variant/40 bg-white p-5 hover-card-premium interactive hover-glow motion-reduce:hover:translate-y-0">
              <p className="text-sm font-black text-primary">{item.year}</p>
              <p className="mt-1 text-lg text-on-surface font-semibold leading-snug">{item.event}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
