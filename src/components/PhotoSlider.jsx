import { useEffect, useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useMediaSettings } from '../hooks/useMediaSettings';

/**
 * Composant de diaporama photo élégant et réutilisable.
 *
 * - Fondu croisé entre les images
 * - Effet Ken Burns (zoom doux) optionnel
 * - Autoplay configurable depuis le dashboard (intervalle, on/off, pause au survol)
 * - Indicateurs et flèches paramétrables
 * - Légende optionnelle (label, category) sur chaque slide
 *
 * Props :
 *   - slides : Array<{ src, alt, label?, category?, href? }>
 *   - aspectRatio : 'video' | 'square' | 'photo' | 'wide' | className tailwind libre
 *   - height : classe de hauteur tailwind (ex: 'h-[480px]')
 *   - rounded : classe arrondie (ex: 'rounded-[2rem]')
 *   - showLabel : bool — afficher la légende au survol/bottom
 *   - showCategory : bool — afficher la catégorie en haut
 *   - className : classes additionnelles
 *   - onSlideChange(index) : callback
 */
export const PhotoSlider = ({
  slides = [],
  aspectRatio = 'video',
  height = 'h-[420px] md:h-[520px]',
  rounded = 'rounded-[2rem]',
  showLabel = true,
  showCategory = true,
  className = '',
  onSlideChange,
}) => {
  const {
    autoplayInterval,
    autoplayEnabled,
    pauseOnHover,
    transitionMs,
    showIndicators,
    showArrows,
    kenBurns,
  } = useMediaSettings();

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const containerRef = useRef(null);

  const total = slides.length;

  const goTo = useCallback(
    (index) => {
      if (total === 0) return;
      const next = ((index % total) + total) % total;
      setActive(next);
      if (onSlideChange) onSlideChange(next);
    },
    [total, onSlideChange]
  );

  const prev = useCallback(() => goTo(active - 1), [active, goTo]);
  const next = useCallback(() => goTo(active + 1), [active, goTo]);

  useEffect(() => {
    if (!autoplayEnabled || userPaused || (pauseOnHover && paused) || total <= 1) return undefined;
    const timer = setInterval(() => {
      setActive((c) => (c + 1) % total);
    }, autoplayInterval);
    return () => clearInterval(timer);
  }, [autoplayEnabled, autoplayInterval, paused, userPaused, pauseOnHover, total]);

  // Réinitialise l'index si la liste change
  useEffect(() => {
    if (active >= total) setActive(0);
  }, [total, active]);

  if (total === 0) return null;

  const aspectClass =
    aspectRatio === 'square'
      ? 'aspect-square'
      : aspectRatio === 'photo'
      ? 'aspect-[4/3]'
      : aspectRatio === 'wide'
      ? 'aspect-[21/9]'
      : aspectRatio === 'video'
      ? 'aspect-video'
      : aspectRatio;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${rounded} ${height || aspectClass} bg-surface-container-low shadow-2xl ring-1 ring-black/5 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="Carrousel"
    >
      {slides.map((slide, idx) => {
        const isActive = idx === active;
        return (
          <div
            key={`${slide.src}-${idx}`}
            className={`absolute inset-0 transition-opacity ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ transitionDuration: `${transitionMs}ms` }}
            aria-hidden={!isActive}
          >
            <img
              src={slide.src}
              alt={slide.alt || ''}
              className={`absolute inset-0 h-full w-full object-cover ${
                kenBurns && isActive ? 'animate-ken-burns' : ''
              }`}
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

            {(showCategory && slide.category) && (
              <span className="absolute top-5 left-5 rounded-full bg-white/95 backdrop-blur px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-primary shadow-md">
                {slide.category}
              </span>
            )}

            {showLabel && (slide.label || slide.alt) && (
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-cyan-200/95 mb-1.5">
                  Réalisation {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </p>
                <h3 className="text-xl md:text-3xl font-black text-white leading-tight drop-shadow-lg">
                  {slide.label || slide.alt}
                </h3>
              </div>
            )}
          </div>
        );
      })}

      {/* Indicateur de progression auto */}
      {autoplayEnabled && !userPaused && !(pauseOnHover && paused) && total > 1 && (
        <div className="absolute top-0 left-0 right-0 z-20 h-1 bg-white/10">
          <div
            key={`${active}-${autoplayInterval}`}
            className="h-full bg-gradient-to-r from-cyan-300 to-primary animate-slider-progress"
            style={{ animationDuration: `${autoplayInterval}ms` }}
          />
        </div>
      )}

      {/* Flèches navigation */}
      {showArrows && total > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Précédent"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 backdrop-blur text-on-surface shadow-lg hover:bg-white hover:scale-110 transition-all"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Suivant"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 backdrop-blur text-on-surface shadow-lg hover:bg-white hover:scale-110 transition-all"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
          </button>
        </>
      )}

      {/* Bouton Play / Pause */}
      {autoplayEnabled && total > 1 && (
        <button
          type="button"
          onClick={() => setUserPaused((p) => !p)}
          aria-label={userPaused ? 'Reprendre le défilement' : 'Mettre en pause'}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur text-on-surface shadow-md hover:bg-white transition-all"
        >
          {userPaused ? <Play className="h-4 w-4" strokeWidth={2.5} /> : <Pause className="h-4 w-4" strokeWidth={2.5} />}
        </button>
      )}

      {/* Indicateurs (points) */}
      {showIndicators && total > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx)}
              aria-label={`Afficher la diapositive ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                idx === active
                  ? 'w-8 bg-white shadow-md'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
