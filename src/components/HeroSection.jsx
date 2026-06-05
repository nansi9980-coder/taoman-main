/**
 * HeroSection
 * -----------
 * Composant hero réutilisable pour toutes les pages secondaires.
 * Remplace le duo PremiumBackdrop + section brute dans chaque page.
 *
 * Features (inspirées de numeriquepourtous.fr & gdc-sense.com) :
 *  - Image SVG thématique à droite (PageHeroImage)
 *  - Gradient de fond riche unique par page
 *  - Animations d'entrée staggerées
 *  - Badge eyebrow + titre + description + bouton optionnel
 *  - Support RTL
 *
 * Usage :
 *   <HeroSection
 *     page="services"
 *     eyebrow="Nos Services"
 *     title="Des solutions pour chaque besoin"
 *     description="..."
 *     badge="Découvrir"
 *     cta={{ label: 'Demander un devis', href: '/contact' }}
 *   >
 *     {children optionnels à droite}
 *   </HeroSection>
 */

import { useLanguage } from '../context/LanguageContext';
import { PageHeroImage } from './PageHeroImage';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/** Dégradés uniques par page, inspirés des identités sectorielles */
const PAGE_GRADIENTS = {
  services:   'from-[#0a2540] via-[#07111f] to-[#062030]',
  investment: 'from-[#052e16] via-[#07111f] to-[#0a1628]',
  sectors:    'from-[#1e1b4b] via-[#0c1a2e] to-[#07111f]',
  about:      'from-[#0f2044] via-[#07111f] to-[#0a1628]',
  contact:    'from-[#0c4a6e] via-[#07111f] to-[#0a1628]',
  jobs:       'from-[#1c1917] via-[#07111f] to-[#0a1628]',
  faq:        'from-[#312e81] via-[#0c1a2e] to-[#07111f]',
  simulator:  'from-[#052e16] via-[#07111f] to-[#0a1628]',
  submit:     'from-[#1e1b4b] via-[#07111f] to-[#0a1628]',
  home:       'from-[#0e4a7a] via-[#020d1a] to-[#0a1628]',
};

/** Accents colorés par page (pour les badges / bordures) */
const PAGE_ACCENTS = {
  services:   'text-cyan-200 border-cyan-200/30 bg-cyan-200/10',
  investment: 'text-green-200 border-green-200/30 bg-green-200/10',
  sectors:    'text-violet-200 border-violet-200/30 bg-violet-200/10',
  about:      'text-sky-200 border-sky-200/30 bg-sky-200/10',
  contact:    'text-blue-200 border-blue-200/30 bg-blue-200/10',
  jobs:       'text-amber-200 border-amber-200/30 bg-amber-200/10',
  faq:        'text-purple-200 border-purple-200/30 bg-purple-200/10',
  simulator:  'text-emerald-200 border-emerald-200/30 bg-emerald-200/10',
  submit:     'text-indigo-200 border-indigo-200/30 bg-indigo-200/10',
  home:       'text-cyan-200 border-cyan-200/30 bg-cyan-200/10',
};

export const HeroSection = ({
  page = 'home',
  eyebrow,
  title,
  description,
  badge,
  cta,
  ctaSecondary,
  showImage = true,
  minHeight = 'min-h-[55vh]',
  children,
  className = '',
  id,
}) => {
  const { isRTL } = useLanguage();

  const gradient = PAGE_GRADIENTS[page] || PAGE_GRADIENTS.home;
  const accent   = PAGE_ACCENTS[page]   || PAGE_ACCENTS.home;

  return (
    <section
      id={id}
      className={`
        relative overflow-hidden
        bg-gradient-to-br ${gradient}
        py-24 px-6 text-white
        ${minHeight}
        flex items-center
        ${className}
      `}
    >
      {/* Glow ambiant de fond */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[80px] opacity-50" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-400/15 blur-[80px] opacity-40" />
        {/* Grille tech légère */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
          {[...Array(12)].map((_, i) => (
            <line key={`v${i}`} x1={i * 130} y1="0" x2={i * 130} y2="600" stroke="#67e8f9" strokeWidth="0.8" />
          ))}
          {[...Array(6)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 100} x2="1440" y2={i * 100} stroke="#67e8f9" strokeWidth="0.8" />
          ))}
        </svg>
      </div>

      <div
        className={`
          relative z-10 max-w-[1400px] mx-auto w-full
          grid gap-12 lg:items-center
          ${showImage ? 'lg:grid-cols-[1fr_0.8fr]' : 'max-w-[900px]'}
          ${isRTL ? 'direction-rtl' : ''}
        `}
      >
        {/* Colonne texte */}
        <div className="animate-fade-in-up">
          {/* Badge eyebrow */}
          {(badge || eyebrow) && (
            <span
              className={`
                inline-flex items-center gap-2 rounded-full border
                px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em]
                backdrop-blur mb-5
                ${accent}
              `}
            >
              <span className="h-2 w-2 rounded-full bg-current animate-pulse" />
              {badge || eyebrow}
            </span>
          )}

          {/* Titre */}
          {title && (
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-[-0.04em] leading-[1.05] bg-gradient-to-r from-cyan-100 via-white to-cyan-100 bg-clip-text text-transparent mb-6 section-underline">
              {title}
            </h1>
          )}

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed mb-8">
              {description}
            </p>
          )}

          {/* CTA */}
          {(cta || ctaSecondary) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {cta && (
                <Link
                  to={cta.href || '/contact'}
                  className="inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-4 text-base font-bold text-white hover:opacity-90 transition-opacity shadow-lg shadow-primary/30 group"
                >
                  {cta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  to={ctaSecondary.href || '/'}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors backdrop-blur"
                >
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          )}

          {/* Slot enfants gauche */}
          {children}
        </div>

        {/* Colonne image SVG */}
        {showImage && (
          <div className="hidden lg:block animate-hero-img">
            <PageHeroImage
              page={page}
              className="w-full max-h-[380px] drop-shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;