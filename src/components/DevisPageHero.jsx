import { useSiteContent } from '../context/SiteContentContext';
import { useLanguage } from '../context/LanguageContext';
import { mergeCmsSection } from '../utils/cmsSectionDefaults';
import { pickLocale } from '../utils/pickLocale';
import { FloatingDecor } from './FloatingDecor';
import { AmbientEffects } from './AmbientEffects';
import { TextReveal } from './TextReveal';
import { PremiumBackdrop } from './PremiumBackdrop';
import { HERO_MEDIA_SPECS } from '../constants/heroMedia';
import { PhotoHeroBackground } from './PhotoHeroBackground';
import { VideoHeroBackground } from './VideoHeroBackground';

/**
 * Hero premium pour pages devis — vidéo (ou photo en repli), particules, titre animé.
 */
export function DevisPageHero({ sectionKey, i18nNamespace, photoSrc, useVideo = true, highContrast = false }) {
  const { section } = useSiteContent();
  const { translations: tc, language } = useLanguage();
  const hero = mergeCmsSection(sectionKey, section(sectionKey), language);
  const i18nHero = (i18nNamespace && tc?.[i18nNamespace]?.hero) || {};
  const media = HERO_MEDIA_SPECS.serviceHeroes?.[sectionKey];

  const title = pickLocale(language, hero.title, i18nHero.title);
  const subtitle = pickLocale(language, hero.subtitle, i18nHero.description);
  const eyebrow = i18nHero.eyebrow;
  const playLabel = tc?.common?.playVideo || 'Lancer la vidéo';
  const bgSrc = photoSrc || media?.poster || HERO_MEDIA_SPECS.services.src;
  const showVideo = useVideo && media?.video;

  return (
    <section className="relative overflow-hidden min-h-[42vh] md:min-h-[48vh] flex items-center py-20 px-6 text-white">
      {showVideo ? (
        <VideoHeroBackground
          src={media.video}
          poster={media.poster || bgSrc}
          objectPosition={media.objectPosition || 'center center'}
          overlayIntensity={highContrast ? 'max' : 'strong'}
          overlayVariant={media.overlayVariant || 'center'}
          fallbackSources={media.fallbackSources}
          playLabel={playLabel}
        />
      ) : (
        <PhotoHeroBackground
          src={bgSrc}
          objectPosition={media?.objectPosition || '75% center'}
          overlayVariant={media?.overlayVariant || 'left'}
          overlayIntensity={highContrast ? 'max' : 'strong'}
        />
      )}
      <PremiumBackdrop variant="dark" intensity="soft" particles={highContrast ? 8 : 16} showGrid={false} />
      <FloatingDecor className={`z-[2] ${highContrast ? 'opacity-40' : ''}`} />
      <AmbientEffects variant="hero" className={`z-[2] ${highContrast ? 'opacity-35' : 'opacity-60'}`} />

      <div
        className={`relative z-10 max-w-[1200px] mx-auto text-center w-full animate-fade-in-up ${
          highContrast
            ? 'max-w-4xl rounded-[2rem] border border-white/15 bg-[#020d1a]/55 px-6 py-10 shadow-2xl backdrop-blur-md md:px-12 md:py-12 [text-shadow:0_2px_16px_rgba(0,0,0,0.85)]'
            : '[text-shadow:0_2px_24px_rgba(0,0,0,0.5)]'
        }`}
      >
        {eyebrow && (
          <p className={`mb-4 text-xs md:text-sm font-bold uppercase tracking-[0.35em] ${highContrast ? 'text-cyan-100' : 'text-cyan-200'}`}>
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-[-0.04em]">
          <TextReveal
            elementType="span"
            immediate
            className={
              highContrast
                ? 'block text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]'
                : 'block bg-gradient-to-r from-cyan-100 via-white to-cyan-100 bg-clip-text text-transparent text-shimmer-light'
            }
            text={title}
          />
        </h1>
        {subtitle && (
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${highContrast ? 'text-white' : 'text-white/90'}`}>{subtitle}</p>
        )}
        <div className="mt-8 flex justify-center">
          <span className="inline-flex h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
}
