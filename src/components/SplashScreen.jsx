import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { BRAND_NAME } from '../constants/branding';

/**
 * Splash screen affiché au chargement initial du site.
 * - Logo TAOMAN animé (scale + glow)
 * - Barre de progression fluide
 * - Fade-out doux après la fin du chargement
 * - Respect de prefers-reduced-motion
 * - Bloque l'écran ~1.4 s puis disparaît (~ + 600 ms de fade)
 */
const SESSION_KEY = 'taoman_splash_shown';

export const SplashScreen = ({ minDuration = 1400, once = false }) => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (once && sessionStorage.getItem(SESSION_KEY) === '1') return false;
    return true;
  });
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (!visible) return undefined;

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const duration = reduced ? 350 : minDuration;
    const fadeDuration = reduced ? 200 : 600;

    document.body.style.overflow = 'hidden';

    const startFade = window.setTimeout(() => {
      setFadingOut(true);
    }, duration);

    const remove = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = '';
      try {
        if (once) sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        /* ignore */
      }
    }, duration + fadeDuration);

    return () => {
      window.clearTimeout(startFade);
      window.clearTimeout(remove);
      document.body.style.overflow = '';
    };
  }, [visible, minDuration, once]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={`${BRAND_NAME} — chargement`}
      className={`splash-screen ${fadingOut ? 'is-leaving' : ''}`}
    >
      <div className="splash-backdrop" aria-hidden="true">
        <div className="splash-grid" />
        <div className="splash-glow splash-glow--1" />
        <div className="splash-glow splash-glow--2" />
        <div className="splash-glow splash-glow--3" />
      </div>

      <div className="splash-content">
        <div className="splash-logo-wrap">
          <span className="splash-halo" aria-hidden="true" />
          <span className="splash-ring splash-ring--a" aria-hidden="true" />
          <span className="splash-ring splash-ring--b" aria-hidden="true" />
          <div className="splash-logo-card">
            <img
              src={logo}
              alt={BRAND_NAME}
              className="splash-logo-img"
              width="120"
              height="120"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </div>

        <h1 className="splash-brand">
          <span className="splash-brand-main">TAOMAN</span>
          <span className="splash-brand-sub">Group Investment</span>
        </h1>

        <div className="splash-progress" aria-hidden="true">
          <span className="splash-progress-bar" />
        </div>

        <p className="splash-tagline">Investissement structuré · Services opérationnels · Togo</p>
      </div>
    </div>
  );
};

export default SplashScreen;
