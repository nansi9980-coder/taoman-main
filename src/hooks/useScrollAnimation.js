import { useEffect, useRef } from 'react';

/**
 * Hook pour déclencher des animations au scroll
 * @param {Object} options - Options de configuration
 * @param {number} options.threshold - Seuil de visibilité (0-1)
 * @param {string} options.rootMargin - Marge supplémentaire
 * @returns {React.RefObject} Référence à attacher à l'élément
 */
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const { threshold = 0.1, rootMargin = '0px' } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Optionnel: arrêter l'observation après animation
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold, 
        rootMargin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return ref;
};

/**
 * Hook pour parallaxe au scroll
 * @param {number} offset - Facteur de décalage (plus haut = plus lent)
 * @returns {React.RefObject} Référence à attacher à l'élément
 */
export const useParallax = (offset = 50) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const scrollY = window.scrollY;
      const elementPosition = ref.current.offsetTop;
      const windowHeight = window.innerHeight;

      // Seulement appliquer la parallaxe si l'élément est visible
      if (
        elementPosition - windowHeight < scrollY &&
        scrollY < elementPosition + windowHeight
      ) {
        const distance = (scrollY - elementPosition) / offset;
        ref.current.style.transform = `translateY(${distance}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return ref;
};

/**
 * Hook pour compter le scroll pour animations
 * @returns {number} Position du scroll en pixels
 */
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useEffect(() => {
    const [position, setPosition] = React.useState(0);

    const handleScroll = () => {
      setPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};
