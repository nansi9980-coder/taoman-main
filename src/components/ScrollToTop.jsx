import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Composant utilitaire : remonte la fenêtre tout en haut à chaque changement
 * de route. Si le chemin contient un hash (ex: /investissement#opportunites),
 * on laisse le comportement natif d'ancrage opérer.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const scrollToHash = (attempt = 0) => {
        const el = document.getElementById(id);
        if (el) {
          // Délai pour laisser le header sticky se mettre en place
          requestAnimationFrame(() => {
            const offsetTop = el.getBoundingClientRect().top + window.scrollY - 96;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          });
          return true;
        }
        if (attempt < 20) {
          // Page lazy-loaded : on retente jusqu'à ce qu'elle soit montée
          setTimeout(() => scrollToHash(attempt + 1), 100);
        }
        return false;
      };
      scrollToHash();
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};
