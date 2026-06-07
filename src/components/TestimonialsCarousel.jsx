import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/** Carousel témoignages avec effet 3D léger. */
export const TestimonialsCarousel = ({ items = [], autoplayMs = 6000 }) => {
  const [active, setActive] = useState(0);
  const count = items.length;

  useEffect(() => {
    if (count <= 1) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % count);
    }, autoplayMs);
    return () => window.clearInterval(id);
  }, [count, autoplayMs]);

  if (!count) return null;

  const prev = () => setActive((i) => (i - 1 + count) % count);
  const next = () => setActive((i) => (i + 1) % count);

  return (
    <div className="testimonials-carousel relative">
      <div className="testimonials-carousel__stage mx-auto max-w-3xl min-h-[280px] flex items-center justify-center perspective-[1200px]">
        {items.map((item, idx) => {
          const offset = idx - active;
          const abs = Math.abs(offset);
          const visible = abs <= 1 || (active === 0 && idx === count - 1) || (active === count - 1 && idx === 0);
          if (!visible && abs > 1) return null;

          let transform = 'translateX(0) scale(1) rotateY(0deg)';
          let opacity = 1;
          let zIndex = 10;

          if (offset === 0) {
            transform = 'translateX(0) scale(1) rotateY(0deg)';
            zIndex = 20;
          } else if (offset === 1 || (active === count - 1 && idx === 0)) {
            transform = 'translateX(55%) scale(0.88) rotateY(-12deg)';
            opacity = 0.45;
            zIndex = 5;
          } else if (offset === -1 || (active === 0 && idx === count - 1)) {
            transform = 'translateX(-55%) scale(0.88) rotateY(12deg)';
            opacity = 0.45;
            zIndex = 5;
          } else {
            opacity = 0;
            zIndex = 0;
          }

          return (
            <article
              key={idx}
              className="testimonials-carousel__card absolute w-full max-w-xl rounded-[2rem] border border-outline-variant/30 bg-white p-8 shadow-xl transition-all duration-500 hover-card-premium"
              style={{ transform, opacity, zIndex }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {item.name?.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-on-surface">{item.name}</p>
                  <p className="text-sm text-on-surface-variant">{item.role}</p>
                </div>
              </div>
              <p className="text-on-surface-variant italic text-lg leading-relaxed">&ldquo;{item.comment}&rdquo;</p>
              <div className="text-yellow-400 mt-4" aria-hidden="true">
                ★★★★★
              </div>
            </article>
          );
        })}
      </div>

      {count > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button type="button" onClick={prev} className="testimonials-carousel__btn" aria-label="Précédent">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${i === active ? 'w-8 bg-primary' : 'w-2 bg-outline-variant/50'}`}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
          <button type="button" onClick={next} className="testimonials-carousel__btn" aria-label="Suivant">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};
