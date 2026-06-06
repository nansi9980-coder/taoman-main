import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PRESETS = {
  fadeUp: { from: { opacity: 0, y: 40 }, to: { opacity: 1, y: 0 } },
  fadeDown: { from: { opacity: 0, y: -40 }, to: { opacity: 1, y: 0 } },
  fadeLeft: { from: { opacity: 0, x: -40 }, to: { opacity: 1, x: 0 } },
  fadeRight: { from: { opacity: 0, x: 40 }, to: { opacity: 1, x: 0 } },
  fade: { from: { opacity: 0 }, to: { opacity: 1 } },
  scale: { from: { opacity: 0, scale: 0.92 }, to: { opacity: 1, scale: 1 } },
  blur: { from: { opacity: 0, filter: 'blur(10px)' }, to: { opacity: 1, filter: 'blur(0px)' } },
};

/**
 * Composant réutilisable qui anime ses enfants au scroll via GSAP + ScrollTrigger.
 * Respecte automatiquement prefers-reduced-motion.
 *
 * @param {object} props
 * @param {keyof typeof PRESETS} [props.preset='fadeUp']
 * @param {number} [props.delay=0]
 * @param {number} [props.duration=0.9]
 * @param {number} [props.stagger=0.1]
 * @param {string} [props.as='div']
 * @param {string} [props.start='top 85%']
 * @param {boolean} [props.once=true]
 * @param {string} [props.childSelector] Sélecteur enfants à staggerer
 */
export function Reveal({
  preset = 'fadeUp',
  delay = 0,
  duration = 0.9,
  stagger = 0,
  start = 'top 85%',
  once = true,
  childSelector,
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      gsap.set(el, { opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' });
      return undefined;
    }

    const conf = PRESETS[preset] || PRESETS.fadeUp;
    const targets = childSelector ? el.querySelectorAll(childSelector) : el;

    gsap.set(targets, conf.from);

    const tween = gsap.to(targets, {
      ...conf.to,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: once ? 'play none none none' : 'play reverse play reverse',
      },
    });

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    const refreshTimer = window.setTimeout(refresh, 400);

    return () => {
      window.clearTimeout(refreshTimer);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [preset, delay, duration, stagger, start, once, childSelector]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}

/**
 * Effet parallax doux sur un élément (image, fond, etc.).
 * Utiliser sur un container avec `overflow-hidden`.
 *
 * @param {object} props
 * @param {number} [props.speed=0.3]  Entre 0 (immobile) et 1 (suit le scroll).
 * @param {string} [props.as='div']
 */
export function Parallax({ speed = 0.3, as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    const tween = gsap.to(el, {
      yPercent: -speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
