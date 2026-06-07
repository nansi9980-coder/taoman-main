import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/** Bandeau discret « opportunité » en bas à droite. */
export const LiveBadge = () => {
  const [visible, setVisible] = useState(() => {
    try {
      return sessionStorage.getItem('taoman_live_badge') !== '1';
    } catch {
      return true;
    }
  });
  const { language } = useLanguage();
  const isFr = String(language || 'FR').toUpperCase() === 'FR';

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem('taoman_live_badge', '1');
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="live-badge fixed bottom-6 right-6 z-[90] max-w-[320px] animate-fade-in-up" role="status">
      <div className="relative overflow-hidden rounded-2xl border border-cyan-300/30 bg-[#07111f]/95 p-4 shadow-2xl backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-primary/10 pointer-events-none" />
        <button
          type="button"
          onClick={dismiss}
          className="absolute top-2 right-2 rounded-lg p-1 text-white/50 hover:text-white transition-colors"
          aria-label={isFr ? 'Fermer' : 'Close'}
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-start gap-3 pr-6">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-300">
            <Sparkles className="h-4 w-4 animate-glow-pulse" />
          </span>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-300">
              {isFr ? 'Opportunité TGI' : 'TGI opportunity'}
            </p>
            <p className="mt-1 text-sm font-bold text-white leading-snug">
              {isFr
                ? 'Programme investissement ouvert — ticket dès 500 000 FCFA'
                : 'Investment program open — from 500,000 CFA'}
            </p>
            <Link
              to="/investissement/tgi"
              className="mt-2 inline-flex text-xs font-bold text-cyan-200 hover:text-white transition-colors hover-underline"
            >
              {isFr ? 'Découvrir le TGI →' : 'Discover TGI →'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
