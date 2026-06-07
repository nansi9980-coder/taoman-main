import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/** Bouton flottant « retour en haut » après scroll. */
export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const { translations: tc } = useLanguage();
  const label = tc?.common?.backToTop || 'Retour en haut';

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="back-to-top fixed bottom-6 left-6 z-[85] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-2xl ring-2 ring-white/20 transition hover:scale-110 hover:bg-primary-container focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/50 motion-reduce:hover:scale-100"
      aria-label={label}
      title={label}
    >
      <ChevronUp className="h-6 w-6" strokeWidth={2.5} />
    </button>
  );
};
