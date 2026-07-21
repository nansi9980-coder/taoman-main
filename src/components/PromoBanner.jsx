import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Megaphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useSiteContent } from '../context/SiteContentContext';
import { normalizeItemsSection } from '../utils/siteContent';

const DEFAULT_MESSAGES = {
  FR: [
    { text: "Ouverture des inscriptions bientôt — préparez votre dossier dès maintenant", href: '/investissement/soumettre' },
    { text: 'Programme TGI ouvert — ticket d’investissement dès 500 000 FCFA', href: '/investissement/tgi' },
    { text: 'Rejoignez le réseau Taoman avant la clôture des places', href: '/inscription' },
  ],
  EN: [
    { text: 'Registration opens soon — get your file ready now', href: '/investissement/soumettre' },
    { text: 'TGI program open — investment ticket from 500,000 CFA', href: '/investissement/tgi' },
    { text: 'Join the Taoman network before spots close', href: '/inscription' },
  ],
};

/** Bandeau d'annonces défilant (carousel/marquee), fixé sous le haut de page. Éditable depuis le dashboard admin (section CMS "promo"). */
export const PromoBanner = () => {
  const { language } = useLanguage();
  const { section } = useSiteContent();
  const [reducedMotion, setReducedMotion] = useState(false);
  const isFr = String(language || 'FR').toUpperCase() === 'FR';
  const fallback = isFr ? DEFAULT_MESSAGES.FR : DEFAULT_MESSAGES.EN;
  const messages = normalizeItemsSection(section('promo'), fallback)
    .filter((item) => item && item.text)
    .map((item) => ({ text: item.text, href: item.href || '/' }));
  const looped = [...messages, ...messages];

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  if (messages.length === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[55] h-9 overflow-hidden bg-gradient-to-r from-primary via-primary-container to-primary text-white shadow-md"
      role="status"
    >
      <div className="marquee-mask h-full">
        <div
          className="marquee-track h-full items-center gap-12"
          style={{ animationDuration: '30s', animationPlayState: reducedMotion ? 'paused' : 'running' }}
        >
          {looped.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="interactive flex shrink-0 items-center gap-2 whitespace-nowrap px-3 text-[11px] font-bold uppercase tracking-wider sm:text-xs hover:text-cyan-200 transition-colors"
            >
              <Megaphone className="h-3.5 w-3.5 shrink-0 text-cyan-200" aria-hidden="true" />
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
