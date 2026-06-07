import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CLIP_FROM = {
  wipe: 'inset(0 100% 0 0)',
  circle: 'circle(0% at 50% 50%)',
  up: 'inset(100% 0 0 0)',
};

const CLIP_TO = {
  wipe: 'inset(0 0% 0 0)',
  circle: 'circle(150% at 50% 50%)',
  up: 'inset(0% 0 0 0)',
};

/** Révélation d'image/bloc au scroll via clip-path. */
export function ClipReveal({
  children,
  className = '',
  variant = 'wipe',
  as: Tag = 'div',
  duration = 1.1,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      el.style.clipPath = CLIP_TO[variant] || CLIP_TO.wipe;
      return undefined;
    }

    const tween = gsap.fromTo(
      el,
      { clipPath: CLIP_FROM[variant] || CLIP_FROM.wipe },
      {
        clipPath: CLIP_TO[variant] || CLIP_TO.wipe,
        duration,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [variant, duration]);

  return (
    <Tag ref={ref} className={`clip-reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
