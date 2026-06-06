import { useEffect, useRef } from 'react';

/** Particules flottantes + traînée lumineuse au curseur (desktop, sections hero / CTA). */
export const AmbientEffects = ({ variant = 'default', className = '' }) => {
  const layerRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (reduced) return undefined;

    const count = variant === 'hero' ? 28 : 16;
    const particles = [];

    for (let i = 0; i < count; i += 1) {
      const dot = document.createElement('span');
      dot.className = 'ambient-particle';
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.animationDelay = `${Math.random() * 6}s`;
      dot.style.animationDuration = `${5 + Math.random() * 8}s`;
      dot.style.opacity = `${0.15 + Math.random() * 0.45}`;
      dot.style.width = `${2 + Math.random() * 3}px`;
      dot.style.height = dot.style.width;
      layer.appendChild(dot);
      particles.push(dot);
    }

    let glow = null;
    if (fine) {
      glow = document.createElement('div');
      glow.className = 'ambient-cursor-glow';
      layer.appendChild(glow);

      const onMove = (e) => {
        const rect = layer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glow.style.transform = `translate(${x}px, ${y}px)`;
      };
      layer.addEventListener('mousemove', onMove, { passive: true });
      return () => {
        layer.removeEventListener('mousemove', onMove);
        particles.forEach((p) => p.remove());
        glow?.remove();
      };
    }

    return () => particles.forEach((p) => p.remove());
  }, [variant]);

  return (
    <div
      ref={layerRef}
      className={`ambient-effects pointer-events-none ${className}`.trim()}
      aria-hidden="true"
    />
  );
};
