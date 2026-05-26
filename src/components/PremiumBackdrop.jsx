import { useMemo } from 'react';

/**
 * Fond cinématique premium réutilisable.
 * - Mesh gradients animés (3 orbes)
 * - Grille perspective
 * - Particules flottantes
 * - Bruit film subtil
 *
 * Variantes : "dark" (par défaut) ou "light".
 */
export const PremiumBackdrop = ({
  variant = 'dark',
  intensity = 'normal',
  particles = 14,
  showGrid = true,
  className = '',
}) => {
  const palette = variant === 'light'
    ? {
        base: 'bg-[#f4f7ff]',
        orb1: 'bg-[#0052cc]/25',
        orb2: 'bg-[#7dd3fc]/30',
        orb3: 'bg-[#1e6fff]/15',
      }
    : {
        base: 'bg-[#07111f]',
        orb1: 'bg-[#0052cc]/45',
        orb2: 'bg-cyan-400/30',
        orb3: 'bg-indigo-500/25',
      };

  const intensityScale = intensity === 'soft' ? 0.6 : intensity === 'strong' ? 1.4 : 1;

  const particleNodes = useMemo(
    () =>
      Array.from({ length: particles }, (_, i) => {
        const left = Math.round((i * 97 + 13) % 100);
        const delay = (i * 1.7) % 18;
        const duration = 12 + ((i * 3) % 14);
        const size = 2 + ((i * 5) % 4);
        return { left, delay, duration, size };
      }),
    [particles]
  );

  return (
    <div className={`absolute inset-0 overflow-hidden ${palette.base} premium-noise ${className}`} aria-hidden="true">
      <div
        className={`premium-orb ${palette.orb1}`}
        style={{
          top: '-10%',
          left: '5%',
          width: `${520 * intensityScale}px`,
          height: `${520 * intensityScale}px`,
        }}
      />
      <div
        className={`premium-orb premium-orb--delay-1 ${palette.orb2}`}
        style={{
          bottom: '-12%',
          right: '5%',
          width: `${600 * intensityScale}px`,
          height: `${600 * intensityScale}px`,
        }}
      />
      <div
        className={`premium-orb premium-orb--delay-2 ${palette.orb3}`}
        style={{
          top: '30%',
          left: '50%',
          width: `${480 * intensityScale}px`,
          height: `${480 * intensityScale}px`,
        }}
      />

      {showGrid && <div className="premium-grid" />}

      {particleNodes.map((p, i) => (
        <span
          key={i}
          className="premium-particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `-${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
