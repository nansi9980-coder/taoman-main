import { useEffect, useRef, useState } from 'react';

const HOVER_SELECTOR =
  'a[href], button:not(:disabled), [role="button"]:not([aria-disabled="true"]), .interactive, .hover-card-premium, input, textarea, select, label';

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return;

    setEnabled(true);
    document.documentElement.classList.add('has-custom-cursor');

    let ringX = 0;
    let ringY = 0;
    let targetX = 0;
    let targetY = 0;
    let rafId = 0;

    const moveDot = (x, y) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const animateRing = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      moveDot(targetX, targetY);
    };

    const setHover = (active) => {
      ringRef.current?.classList.toggle('is-hover', active);
    };

    const setClick = (active) => {
      ringRef.current?.classList.toggle('is-click', active);
    };

    const onOver = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      setHover(Boolean(target.closest(HOVER_SELECTOR)));
    };

    const onDown = () => setClick(true);
    const onUp = () => setClick(false);

    rafId = requestAnimationFrame(animateRing);
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
    </>
  );
};
