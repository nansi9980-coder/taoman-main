import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SeoHead } from '../components/SeoHead';
import { Reveal, Parallax } from '../components/Reveal';
import { ClipReveal } from '../components/ClipReveal';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { PremiumBackdrop } from '../components/PremiumBackdrop';
import { VideoHeroBackground } from '../components/VideoHeroBackground';
import { SectionWave } from '../components/SectionWave';
import { SectionMesh } from '../components/SectionMesh';
import { FloatingDecor } from '../components/FloatingDecor';
import { HERO_MEDIA_SPECS } from '../constants/heroMedia';
import { PremiumImageFrame } from '../components/PremiumImageFrame';
import { StatsBand } from '../components/StatsBand';
import { PartnersBand } from '../components/PartnersBand';
import { MagneticButton } from '../components/MagneticButton';
import { TextReveal } from '../components/TextReveal';
import { TiltCard } from '../components/TiltCard';
import { AmbientEffects } from '../components/AmbientEffects';
import { HoverSpotlight } from '../components/HoverSpotlight';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, Layers, MapPin, Sparkles as SparklesIcon, ArrowRight, ShieldCheck, Scale, FileText, PieChart, Target, Globe } from 'lucide-react';
import lavage2    from '../assets/realisations/lavage2.jpg';
import mecanique2 from '../assets/realisations/mecanique2.jpg';
import agroIcon from '../assets/agro_sector.jpeg';
import transportSector from '../assets/transport_sector.jpeg';
import numeriqueImg from '../assets/simulateur.jpeg';
import { API_URL, mediaUrl } from "../config";
import { normalizeItemsSection } from "../utils/siteContent";
import { pickLocale, pickLocaleList, isFrenchLocale } from "../utils/pickLocale";
import { useSiteContent } from "../context/SiteContentContext";
import { useSiteFeatures } from '../hooks/useSiteFeatures';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { BRAND_NAME } from '../constants/branding';
import { DEFAULT_HERO } from '../data/home-defaults';
import { normalizeSectors, resolveSectorImage } from '../data/sectors-defaults';
import { mergeRealisationSlides, resolveRealisationImage } from '../data/realisations-defaults';
import { getRealisationSlideCopy } from '../i18n/realisations-slides';
import { resolveCmsForLanguage } from '../utils/cmsLocale';
import { useMediaSettings } from '../hooks/useMediaSettings';
import { HOME_SERVICE_FALLBACKS } from '../data/home-service-fallbacks';

const ALL_FILTER = '__all__';

export const HomePage = () => {
  const navigate = useNavigate();
  const { content: t, nav: tNav, language } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);
  const [activeProject, setActiveProject] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const isAuthenticated = Boolean(localStorage.getItem('token') && localStorage.getItem('user'));

  const { content: apiSiteContent, services: apiServicesRaw, section, cmsReady } = useSiteContent();
  const { leadersSectionVisible } = useSiteFeatures();
  const mediaSettings = useMediaSettings();
  const [apiRealisations, setApiRealisations] = useState([]);

  const apiServices = apiServicesRaw.length > 0
    ? [...apiServicesRaw]
        .sort((a, b) =>
          String(a.icon || '99').localeCompare(String(b.icon || '99'), undefined, { numeric: true }),
        )
        .map((s) => {
          const linkRaw = s.actionLink || '';
          const linkIsRoute = String(linkRaw).startsWith('/');
          const isMarketing = /marketing/i.test(s.title || '');
          return {
            icon: s.icon || 'star',
            imageUrl: s.imageUrl ? mediaUrl(s.imageUrl) : null,
            title: s.title,
            description: s.description,
            price: s.actionText || 'En savoir plus',
            features: linkIsRoute
              ? isMarketing
                ? ['Branding', 'Export', 'Croissance']
                : []
              : String(linkRaw)
                  .split(',')
                  .map((f) => f.trim())
                  .filter(Boolean),
            href: linkIsRoute
              ? linkRaw
              : isMarketing
                ? '/secteurs/marketing-international'
                : null,
          };
        })
    : [];

  useEffect(() => {
    setIsLoaded(true);

    // Fetch Realisations with proper cache-busting headers
    fetch(`${API_URL}/media`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          const allImages = data.filter(m => m.type && m.type.startsWith('image/'));
          const realisationImages = allImages.filter(m => m.category === 'realisation');
          if (realisationImages.length === 0) return;
          const images = realisationImages.map(m => ({
            src: mediaUrl(m.url || m.path || m.src),
            alt: m.name,
            category: m.category === 'realisation' ? 'Réalisation' : (m.category || 'Terrain'),
            label: m.name?.split('.')[0] || 'Réalisation',
            progress: m.progress || 72,
          })).filter(m => m.src);
          if (images.length > 0) {
            setApiRealisations(images);
          }
        }
      })
      .catch(err => console.error("Error fetching media:", err));
  }, []);

  const activeFallback = HOME_SERVICE_FALLBACKS[language] || HOME_SERVICE_FALLBACKS.FR;

  const mapServiceForLocale = (s, index) => {
    if (isFrenchLocale(language)) return s;
    const fb =
      activeFallback.services.find((x) => x.icon === s.icon) || activeFallback.services[index];
    if (!fb) return s;
    return {
      ...s,
      title: fb.title,
      description: fb.description,
      price: fb.price,
      features: fb.features,
      href: s.href || fb.href,
    };
  };
  const services =
    apiServices.length > 0 ? apiServices.map(mapServiceForLocale) : activeFallback.services;
  const homeServices = services.slice(0, 6);
  const homeStatsItems = [
    { value: 30, suffix: '+', label: t.home.stats.items.projects.label, hint: t.home.stats.items.projects.hint, icon: Briefcase },
    { value: 8, label: t.home.stats.items.sectors.label, hint: t.home.stats.items.sectors.hint, icon: Layers },
    { value: 8, suffix: t.home.stats.items.cities.suffix, label: t.home.stats.items.cities.label, hint: t.home.stats.items.cities.hint, icon: MapPin },
    { value: 96, suffix: '%', label: t.home.stats.items.satisfaction.label, hint: t.home.stats.items.satisfaction.hint, icon: SparklesIcon },
  ];

  const sectors = normalizeSectors(section('sectors')).map((s) => {
    const tSector = t.sectors?.items?.[s.slug];
    return {
      ...s,
      title: pickLocale(language, s.title, tSector?.title),
      description: pickLocale(language, s.short || s.description, tSector?.short),
      image: resolveSectorImage(s),
    };
  });

  const testimonialItems = normalizeItemsSection(apiSiteContent.testimonials, []);
  const testimonials =
    !isFrenchLocale(language) && activeFallback.testimonials?.length
      ? activeFallback.testimonials
      : testimonialItems.length
        ? testimonialItems
        : activeFallback.testimonials;

  const heroSection = section('hero') || section('heroBanner') || apiSiteContent.hero || apiSiteContent.heroBanner || {};
  const realisationsSection = section('realisations') || {};
  const ctaSection = apiSiteContent.cta || {};

  // Traductions i18n du hero — PRIORITÉ sur les données API (fixes en FR)
  const tHero = t.home?.hero || {};
  const tCommon = t.common || {};

  // Les badges traduits : i18n d'abord, sinon API, sinon DEFAULT_HERO
  const heroBadges = Array.isArray(tHero.badges) && tHero.badges.length > 0
    ? tHero.badges
    : Array.isArray(heroSection.badges)
      ? heroSection.badges
      : DEFAULT_HERO.badges;

  const heroData = {
    badgeMain: pickLocale(
      language,
      heroSection.badgeMain || heroSection.badge,
      tHero.badgeMain || DEFAULT_HERO.badgeMain
    ),
    badges: heroBadges,
    title: pickLocale(
      language,
      heroSection.title || heroSection.titleFr,
      tHero.title || DEFAULT_HERO.title
    ),
    subtitle: pickLocale(
      language,
      heroSection.subtitle || heroSection.titleEn,
      tHero.subtitle || DEFAULT_HERO.subtitle
    ),
    description: pickLocale(language, heroSection.description, tHero.description || DEFAULT_HERO.description),
    btn1: pickLocale(
      language,
      heroSection.btn1 || heroSection.primaryButton,
      tHero.btn1 || tCommon.contactInvest || DEFAULT_HERO.btn1
    ),
    btn2: pickLocale(
      language,
      heroSection.btn2 || heroSection.secondaryButton,
      tHero.btn2 ||
        (isAuthenticated ? tCommon.mySpace || 'Mon espace' : tCommon.registerFree || DEFAULT_HERO.btn2)
    ),
    imageCaption: pickLocale(language, heroSection.imageCaption, tHero.livePill || DEFAULT_HERO.imageCaption),
  };

  // ── Réalisations : 10 slides (images FR héritées, textes i18n) ───
  const frSlidesById = useMemo(() => {
    const frSection = resolveCmsForLanguage(apiSiteContent.realisations || {}, 'FR', 'realisations');
    const frItems = Array.isArray(frSection?.items) ? frSection.items : normalizeItemsSection(frSection, []);
    return Object.fromEntries(mergeRealisationSlides(frItems).map((slide) => [slide.id, slide]));
  }, [apiSiteContent.realisations]);

  const realisationItems = Array.isArray(realisationsSection?.items)
    ? realisationsSection.items
    : normalizeItemsSection(realisationsSection, []);
  const mergedSlides = mergeRealisationSlides(realisationItems);

  const cmsCarousel = mergedSlides
    .map((item) => {
      const slideCopy = getRealisationSlideCopy(language, item.id) ?? { title: '', category: '' };
      const frSlide = frSlidesById[item.id];
      const imageUrl = resolveRealisationImage(item, frSlide);
      const label = pickLocale(language, item.title, slideCopy.title);
      const category = pickLocale(language, item.category, slideCopy.category);
      return {
        id: item.id,
        src: imageUrl ? mediaUrl(imageUrl) : null,
        alt: label || 'Réalisation Taoman Group Investissement',
        category: category || 'Terrain',
        label: label || 'Réalisation',
        progress: item.progress ?? 70,
      };
    })
    .filter((item) => item.src);

  const realisations =
    cmsCarousel.length > 0 ? cmsCarousel : apiRealisations.length > 0 ? apiRealisations : cmsCarousel;
  const realisationsFooterText = pickLocale(
    language,
    realisationsSection.footerText,
    t.home?.realisations?.footerText ||
      "Taoman Group Investissement transforme chaque réalisation terrain en valeur durable : pilotage, exécution et reporting professionnel."
  );

  const filters = [ALL_FILTER, ...new Set(realisations.map(r => r.category))];

  const filtered = activeFilter === ALL_FILTER
    ? realisations
    : realisations.filter(r => r.category === activeFilter);

  const carouselItems = filtered.length > 0 ? filtered : realisations;
  const carouselCount = carouselItems.length;
  const featuredProject = carouselCount
    ? carouselItems[activeProject % carouselCount] || carouselItems[0]
    : null;
  const activeCarouselIndex = carouselCount ? activeProject % carouselCount : 0;

  useEffect(() => {
    setActiveProject(0);
  }, [activeFilter]);

  useEffect(() => {
    if (!mediaSettings.autoplayEnabled) return undefined;
    if (carouselCount <= 1 || carouselPaused) return undefined;

    const timer = setInterval(() => {
      setActiveProject((current) => (current + 1) % carouselCount);
    }, mediaSettings.autoplayInterval);

    return () => clearInterval(timer);
  }, [carouselCount, carouselPaused, mediaSettings.autoplayEnabled, mediaSettings.autoplayInterval]);

  const showPreviousProject = () => {
    if (!carouselCount) return;
    setActiveProject((current) => (current - 1 + carouselCount) % carouselCount);
  };

  const showNextProject = () => {
    if (!carouselCount) return;
    setActiveProject((current) => (current + 1) % carouselCount);
  };

  const trustBadges = heroData.badges;

  return (
    <div className={`flex flex-col min-h-screen bg-surface transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <SeoHead
        title={tNav.home}
        description={t.home.seoDescription}
        path="/"
        keywords="Taoman Group Investissement, investissement Togo, déménagement Lomé, lavage auto Togo, services opérationnels, partenariats public-privé"
      />
      <Header activeLink="accueil" />

      <main id="main-content" className="flex-grow pt-24">

        {/* ============ HERO PREMIUM — vidéo cinématique ============ */}
        <section className="relative overflow-hidden min-h-[60vh] flex items-center pt-20 pb-24 text-white md:pt-28 md:pb-32">
          <VideoHeroBackground
            src={HERO_MEDIA_SPECS.homeVideo.src}
            poster={HERO_MEDIA_SPECS.homeVideo.poster}
            objectPosition={HERO_MEDIA_SPECS.homeVideo.objectPosition}
            overlayIntensity="strong"
            overlayVariant="left"
            playLabel={tCommon.playVideo || 'Lancer la vidéo'}
          />
          <AmbientEffects variant="hero" className="absolute inset-0 z-[5] pointer-events-none" />
          <FloatingDecor className="z-[6]" />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
            <div className="max-w-3xl [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/40 bg-[#020d1a]/55 px-4 py-2 text-xs md:text-sm font-black uppercase tracking-[0.25em] text-cyan-100 backdrop-blur-md shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(125,211,252,0.9)] animate-glow-pulse" />
                  {heroData.badgeMain}
                </span>
              </div>

              <h1 className="mb-6 leading-[0.95] tracking-[-0.045em] relative">
                <span className="block text-lg md:text-2xl font-black text-cyan-300 mb-3 uppercase tracking-[0.2em]">
                  {BRAND_NAME}
                </span>
                <TextReveal 
                  elementType="span" 
                  immediate
                  className="block text-5xl md:text-7xl xl:text-[5.5rem] font-black bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-transparent" 
                  text={heroData.title || ''} 
                />
                <span className="mt-5 block text-xl md:text-3xl font-bold text-white drop-shadow-md">
                  <TextReveal elementType="span" immediate text={heroData.subtitle || ''} delay={0.5} />
                </span>
              </h1>

              <p className="max-w-xl text-lg md:text-xl text-white/90 mb-10 leading-relaxed drop-shadow-sm">
                {heroData.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <MagneticButton
                  onClick={() => navigate('/contact?topic=invest')}
                  variant="glow"
                  className="px-8 py-4 text-lg"
                >
                  {heroData.btn1}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </MagneticButton>
                <MagneticButton
                  onClick={() => navigate(isAuthenticated ? '/dashboard' : '/connexion')}
                  variant="outline"
                  className="px-8 py-4 text-lg"
                >
                  {heroData.btn2}
                </MagneticButton>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/20 bg-[#020d1a]/45 px-4 py-2 text-xs md:text-sm font-semibold text-white/90 backdrop-blur-md shadow-md"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <MarqueeTicker
          items={[
            BRAND_NAME,
            ...(trustBadges || []),
            t.home?.stats?.title || 'Excellence opérationnelle',
            'TGI · Investissement structuré',
            'Lomé · Togo · Afrique de l\'Ouest',
          ].filter(Boolean)}
        />

        {/* ============ NOTRE ADN / VISION ============ */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
            <Reveal preset="fadeRight">
              <Parallax speed={0.12} className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <ClipReveal variant="circle" className="rounded-[2rem]">
                <PremiumImageFrame
                  src={HERO_MEDIA_SPECS.about.src}
                  alt={t.about.vision.title}
                  ratio="aspect-[4/3]"
                  rounded="rounded-[2rem]"
                  tone="neutral"
                  className="shadow-2xl relative z-10"
                  imageClassName="animate-ken-burns"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-flex items-center gap-2 rounded-full bg-cyan-300/20 px-3 py-1 backdrop-blur border border-cyan-300/30 mb-3">
                      <Globe className="w-4 h-4 text-cyan-300" />
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-100">{t.home.aboutTeaser.hubBadge}</span>
                    </div>
                    <p className="text-3xl font-black mb-2 leading-tight text-white drop-shadow-md uppercase tracking-wide">{BRAND_NAME}</p>
                    <p className="text-xl font-bold">{t.about.title}</p>
                  </div>
                </PremiumImageFrame>
                </ClipReveal>
              </Parallax>
            </Reveal>
            <Reveal preset="fadeLeft">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                  {t.about.vision.eyebrow} & {t.about.mission.eyebrow}
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-6 leading-tight">
                  {t.about.vision.title}
                </h2>
                <div className="space-y-6 text-lg text-on-surface-variant">
                  <p className="leading-relaxed border-l-4 border-primary pl-6 py-2 bg-surface-container-low/50 italic">
                    "{t.about.vision.body}"
                  </p>
                  <p className="leading-relaxed font-medium">
                    {t.about.description}
                  </p>
                  <div className="flex items-start gap-4 mt-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface text-xl mb-2">{t.about.mission.title}</h4>
                      <p className="text-base text-on-surface-variant">{t.about.mission.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ STATS PREMIUM ============ */}
        <StatsBand
          eyebrow={t.home.stats.eyebrow}
          title={t.home.stats.title}
          description={t.home.stats.description}
          items={homeStatsItems}
          className="bg-[#07111f] text-white"
          backdrop={<PremiumBackdrop variant="dark" intensity="soft" particles={10} showGrid={false} />}
        />

        <SectionWave color="#eef2f7" />

        {/* ============ GOUVERNANCE & SECURITE ============ */}
        <section className="py-24 px-6 bg-surface-container-low relative overflow-hidden">
          <SectionMesh />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-[1400px] mx-auto">
            <Reveal preset="fadeUp">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                  {t.about.governance.eyebrow}
                </p>
                <h2 className="text-4xl md:text-5xl font-black mb-5 section-underline text-shimmer">
                  {t.about.governance.title}
                </h2>
                <p className="text-lg text-on-surface-variant">
                  {t.about.governance.description}
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, color: "text-blue-600", bg: "bg-blue-600/10" },
                { icon: Scale, color: "text-emerald-600", bg: "bg-emerald-600/10" },
                { icon: FileText, color: "text-amber-600", bg: "bg-amber-600/10" },
                { icon: PieChart, color: "text-purple-600", bg: "bg-purple-600/10" }
              ].map((style, idx) => {
                const pillar = t.about.governance.pillars[idx];
                if (!pillar) return null;
                const Icon = style.icon;
                return (
                  <Reveal key={idx} preset="fadeUp" delay={idx * 0.15}>
                    <HoverSpotlight className="h-full rounded-3xl">
                    <div className="bg-white rounded-3xl p-8 border border-outline-variant/30 shadow-sm h-full hover-card-premium interactive hover-glow motion-reduce:hover:translate-y-0">
                      <div className={`w-16 h-16 rounded-2xl ${style.bg} flex items-center justify-center mb-6 hover-icon-pop`}>
                        <Icon className={`w-8 h-8 ${style.color}`} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold text-on-surface mb-4">{pillar.title}</h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                    </HoverSpotlight>
                  </Reveal>
                );
              })}
            </div>
            
            <Reveal preset="fadeUp" delay={0.6}>
               <div className="mt-12 flex justify-center">
                  <div className="inline-flex items-center gap-3 bg-white border border-outline-variant/50 rounded-full px-6 py-3 shadow-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="flex h-3 w-3 relative z-10">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm font-bold text-on-surface-variant relative z-10 group-hover:text-emerald-700 transition-colors">{t.about.governance.complianceBadge}</span>
                  </div>
               </div>
            </Reveal>
          </div>
        </section>

        {/* ============ SERVICES ============ */}
        <section className="py-20 px-6 relative overflow-hidden">
          <SectionMesh />
          <div className="max-w-[1400px] mx-auto relative z-[1]">
            <Reveal preset="fadeUp">
              <div className="text-center mb-16">
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">{t.home.services.eyebrow}</p>
                <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-5 section-underline text-shimmer">{t.home.services.title}</h2>
                <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
                  {t.home.services.description}
                </p>
              </div>
            </Reveal>
            <Reveal preset="fadeUp" childSelector=".service-card" stagger={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {homeServices.map((service) => {
                  const cardClass =
                    'service-card group rounded-3xl border border-outline-variant/40 bg-white p-8 shadow-md hover-card-premium interactive hover-glow motion-reduce:hover:translate-y-0';
                  const body = (
                    <>
                      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary font-black overflow-hidden hover-icon-pop group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                        {service.imageUrl ? (
                          <img
                            src={service.imageUrl}
                            alt={service.title}
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                            decoding="async"
                            sizes="56px"
                          />
                        ) : (
                          service.icon
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-on-surface">{service.title}</h3>
                      <p className="mt-3 text-on-surface-variant leading-relaxed">{service.description}</p>
                      <p className="mt-5 font-bold text-primary">{service.price}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span key={feature} className="rounded-full bg-surface-container-low px-3 py-1 text-xs font-semibold text-on-surface-variant">
                            {feature}
                          </span>
                        ))}
                      </div>
                      {service.href && (
                        <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2.5 transition-all">
                          {tCommon.learnMore || 'En savoir plus'} <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                        </p>
                      )}
                    </>
                  );
                  return service.href ? (
                    <Link key={service.title} to={service.href} className={`${cardClass} block`}>
                      {body}
                    </Link>
                  ) : (
                    <div key={service.title} className={cardClass}>
                      {body}
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ RÉALISATIONS — galerie dynamique ============ */}
        <SectionWave color="#07111f" flip />
        <section className="py-24 px-6 bg-[#07111f] text-white relative overflow-hidden">
          <PremiumBackdrop variant="dark" intensity="soft" particles={12} showGrid />
          <FloatingDecor />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto relative z-[1]">
            <div className="text-center mb-14 animate-fade-in">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-200 mb-4">{t.home.realisations.eyebrow}</p>
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-shimmer-light">
                {t.home.realisations.title}
              </h2>
              <p className="text-lg text-white/65 max-w-2xl mx-auto">
                {t.home.realisations.description}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
              {carouselCount > 0 && filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`filter-pill px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                    activeFilter === f
                      ? 'filter-pill--active bg-cyan-300 text-[#07111f] shadow-lg scale-105'
                      : 'bg-white/5 text-white/80 border border-white/15 hover:border-cyan-300 hover:text-white hover-ripple'
                  }`}
                >
                  {f === ALL_FILTER ? t.common.filterAll : f}
                </button>
              ))}
            </div>

            {!cmsReady && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div key={`realisation-skeleton-${idx}`} className="aspect-square rounded-2xl bg-white/5 animate-pulse" />
                ))}
              </div>
            )}

            {cmsReady && !featuredProject && (
              <p className="text-center text-white/60 mb-8">{t.common?.loading || 'Chargement…'}</p>
            )}

            {featuredProject && (
            <>
            {/* Image vedette plein cadre */}
            <ClipReveal variant="wipe" className="rounded-[2.5rem] mb-8">
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <button
                type="button"
                onClick={() => setLightbox(featuredProject)}
                className="block w-full text-left"
                aria-label={`Agrandir ${featuredProject.label}`}
              >
                <img
                  src={featuredProject.src}
                  alt={featuredProject.alt}
                  className="h-[460px] md:h-[560px] w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-300 px-4 py-2 text-xs md:text-sm font-black uppercase tracking-widest text-[#07111f]">
                    {featuredProject.category}
                  </span>
                  <span className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs md:text-sm font-bold text-white backdrop-blur">
                    {(activeCarouselIndex + 1).toString().padStart(2, '0')} / {carouselCount.toString().padStart(2, '0')}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 max-w-3xl">
                    {featuredProject.label}
                  </h3>
                  <div className="flex items-center gap-4 max-w-xl">
                    <div className="flex-1 h-2 overflow-hidden rounded-full bg-white/15">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-primary transition-all duration-700"
                        style={{ width: `${featuredProject.progress || 70}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-black text-cyan-200 whitespace-nowrap">
                      {featuredProject.progress || 70}%
                    </span>
                  </div>
                </div>
              </button>

              {/* Navigation overlay */}
              <button
                type="button"
                onClick={showPreviousProject}
                className="absolute left-4 md:left-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-black text-[#07111f] shadow-xl transition hover:scale-110"
                aria-label={t.common.previous}
              >
                ‹
              </button>
              <button
                type="button"
                onClick={showNextProject}
                className="absolute right-4 md:right-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-black text-[#07111f] shadow-xl transition hover:scale-110"
                aria-label={t.common.next}
              >
                ›
              </button>

              <button
                type="button"
                onClick={() => setCarouselPaused((p) => !p)}
                className="absolute right-6 bottom-6 z-10 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-bold text-white backdrop-blur hover:bg-black/70"
                aria-label={carouselPaused ? t.common.resume : t.common.pause}
              >
                {carouselPaused ? `▶ ${t.common.resume}` : `⏸ ${t.common.pause}`}
              </button>
            </div>
            </ClipReveal>

            {/* Grille miniatures uniformisées */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {carouselItems.slice(0, 8).map((item, idx) => {
                const realIdx = idx;
                const isActive = realIdx === activeCarouselIndex;
                return (
                  <button
                    key={`${item.id || item.label}-${idx}`}
                    type="button"
                    onClick={() => setActiveProject(realIdx)}
                    onDoubleClick={() => setLightbox(item)}
                    className={`group relative aspect-square overflow-hidden rounded-2xl border-2 text-left transition-all duration-500 ${
                      isActive
                        ? 'border-cyan-300 ring-4 ring-cyan-300/30 scale-[1.02]'
                        : 'border-white/10 hover:border-cyan-300/60 hover:scale-[1.02]'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                      <span className="inline-block rounded-full bg-cyan-300/90 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#07111f] mb-2">
                        {item.category}
                      </span>
                      <p className="text-sm md:text-base font-black text-white line-clamp-2">{item.label}</p>
                    </div>
                  </button>
                );
              })}
            </div>
            </>
            )}

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => navigate(isAuthenticated ? '/dashboard' : '/connexion')}
                className="rounded-2xl bg-white px-8 py-4 font-bold text-[#07111f] shadow-xl hover:scale-105 transition-transform"
              >
                {isAuthenticated ? t.home.realisations.ctaAuth : t.home.realisations.ctaGuest}
              </button>
            </div>
            <p className="mt-5 max-w-3xl mx-auto text-center text-sm md:text-base text-white/75">
              {realisationsFooterText}
            </p>
          </div>
        </section>

        {/* ── Lightbox ── */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-primary transition-colors"
              >
                ✕
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <p className="text-white text-center mt-4 font-semibold">{lightbox.label}</p>
            </div>
          </div>
        )}

        {/* ============ SECTEURS D'INVESTISSEMENT ============ */}
        <SectionWave color="var(--color-surface, #ffffff)" />
        <section className="py-24 px-6 bg-surface relative overflow-hidden">
          <SectionMesh />
          <div className="max-w-[1400px] mx-auto relative z-[1]">
            <Reveal preset="fadeUp">
              <div className="text-center mb-14">
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">{t.home.sectors.eyebrow}</p>
                <h2 className="text-4xl md:text-5xl font-black section-underline text-shimmer">{t.home.sectors.title}</h2>
                <p className="mt-4 text-lg text-on-surface-variant max-w-2xl mx-auto">
                  {t.home.sectors.description}
                </p>
              </div>
            </Reveal>

            <Reveal preset="fadeUp" childSelector=".sector-card" stagger={0.12}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sectors.map((sector, idx) => (
                <TiltCard key={`${sector.title}-${idx}`}>
                  <Link
                    to={sector.slug ? `/secteurs/${sector.slug}` : '/secteurs'}
                    className="sector-card block rounded-[2rem] h-full"
                  >
                    <ClipReveal variant={idx % 2 === 0 ? 'wipe' : 'up'} className="rounded-[2rem] h-full">
                    <PremiumImageFrame
                      src={sector.image}
                      alt={sector.title}
                      ratio="aspect-auto h-[420px]"
                      rounded="rounded-[2rem]"
                      tone={idx % 2 === 0 ? 'cool' : 'warm'}
                      className="shadow-xl"
                    >
                      {sector.tag && (
                        <span className="absolute top-5 left-5 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-widest text-primary backdrop-blur">
                          {sector.tag}
                        </span>
                      )}
                      <div className="absolute inset-x-0 bottom-0 p-7 text-white z-10">
                        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3 leading-tight">
                          {sector.title}
                        </h3>
                        <p className="text-white/85 leading-relaxed mb-5 line-clamp-3">{sector.description}</p>
                        <span className="inline-flex items-center gap-2 text-cyan-200 font-bold transition-transform duration-300 group-hover:translate-x-1">
                          {t.common.learnMore}
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </span>
                      </div>
                    </PremiumImageFrame>
                    </ClipReveal>
                  </Link>
                </TiltCard>
              ))}
            </div>
            </Reveal>
          </div>
        </section>

        {/* ============ COMITÉ DE DIRECTION ============ */}
        {leadersSectionVisible && (apiSiteContent.about?.leaders || t.about?.leaders) && (
          <section className="py-24 px-6 bg-surface">
            <div className="max-w-[1400px] mx-auto">
              <Reveal preset="fadeUp">
                <div className="text-center mb-16">
                  <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                    {(apiSiteContent.about?.leaders || t.about?.leaders).eyebrow}
                  </p>
                  <h2 className="text-4xl md:text-5xl font-black text-on-surface">
                    {(apiSiteContent.about?.leaders || t.about?.leaders).title}
                  </h2>
                </div>
              </Reveal>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {(apiSiteContent.about?.leaders || t.about?.leaders).items?.map((leader, idx) => {
                  const imageSrc = leader.imageUrl || leader.image || leader.photo;
                  return (
                    <Reveal key={idx} preset="fadeUp" delay={idx * 0.15}>
                      <div className="group bg-white rounded-[2rem] p-8 border border-outline-variant/30 shadow-lg text-center hover-card-premium interactive hover-glow motion-reduce:hover:translate-y-0">
                        <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl font-black text-white mb-6 shadow-inner ring-4 ring-primary/10 group-hover:scale-110 transition-transform duration-500 overflow-hidden relative">
                          {imageSrc ? (
                            <img src={imageSrc.startsWith('http') ? imageSrc : mediaUrl(imageSrc)} alt={leader.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                              {leader.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-on-surface mb-2">{leader.name}</h3>
                        <p className="text-primary font-bold uppercase text-xs tracking-widest mb-4">{leader.role}</p>
                        <p className="text-on-surface-variant text-sm leading-relaxed">
                          {leader.bio}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ============ TÉMOIGNAGES ============ */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-5xl font-bold text-center text-on-surface mb-16 animate-fade-in section-underline text-shimmer mx-auto max-w-fit">
              {t.home.testimonials.title}
            </h2>
            <TestimonialsCarousel items={testimonials} />
          </div>
        </section>

        <PartnersBand
          eyebrow={t.home.partners.eyebrow}
          title={t.home.partners.title}
          items={t.home.partners.items}
        />

        <section className="py-20 px-6 bg-gradient-to-r from-primary via-primary-container to-primary relative overflow-hidden">
          <AmbientEffects variant="hero" className="opacity-60" />
          <div className="max-w-[1400px] mx-auto text-center animate-fade-in relative z-10">
            <h2 className="text-5xl font-bold text-white mb-6 text-shimmer-light">
              {ctaSection.title || t.home.cta.title}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {ctaSection.subtitle || t.home.cta.subtitle}
            </p>
            <div className="flex gap-4 flex-col sm:flex-row justify-center">
              {!localStorage.getItem('user') && (
                <button
                  onClick={() => navigate('/inscription')}
                  className="px-10 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover-card-premium hover-ripple hover-btn-glow interactive"
                >
                  {t.common.registerFree}
                </button>
              )}
              <button
                onClick={() => navigate('/contact')}
                className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover-border-flow hover-ripple hover-btn-glow interactive"
              >
                {ctaSection.buttonText || t.home.cta.button}
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};