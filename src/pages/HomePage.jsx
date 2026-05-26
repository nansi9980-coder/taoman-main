import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import lavage1    from '../assets/realisations/lavage1.jpg';
import lavage2    from '../assets/realisations/lavage2.jpg';
import mecanique1 from '../assets/realisations/mecanique1.png';
import mecanique2 from '../assets/realisations/mecanique2.jpg';
import transport1 from '../assets/realisations/transport1.jpg';
import transport2 from '../assets/realisations/transport2.jpg';
import { API_URL, mediaUrl } from "../config";
import { normalizeItemsSection } from "../utils/siteContent";
import { useSiteContent } from "../context/SiteContentContext";
import { BRAND_NAME } from '../constants/branding';
import { DEFAULT_HERO } from '../data/home-defaults';
import { normalizeSectors } from '../data/sectors-defaults';
import { useMediaSettings } from '../hooks/useMediaSettings';

export const HomePage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [activeProject, setActiveProject] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const isAuthenticated = Boolean(localStorage.getItem('token') && localStorage.getItem('user'));

  const { content: apiSiteContent, services: apiServicesRaw, section } = useSiteContent();
  const mediaSettings = useMediaSettings();
  const [apiRealisations, setApiRealisations] = useState([]);

  const apiServices = apiServicesRaw.length > 0
    ? apiServicesRaw.map((s) => ({
        icon: s.icon || 'star',
        imageUrl: s.imageUrl ? mediaUrl(s.imageUrl) : null,
        title: s.title,
        description: s.description,
        price: s.actionText || 'En savoir plus',
        features: s.actionLink ? [s.actionLink] : [],
        href: s.actionLink || null,
      }))
    : [];

  useEffect(() => {
    setIsLoaded(true);

    // Fetch Realisations
    fetch(`${API_URL}/media`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          const allImages = data.filter(m => m.type && m.type.startsWith('image/'));
          const realisationImages = allImages.filter(m => m.category === 'realisation');
          const source = realisationImages.length > 0 ? realisationImages : allImages;
          const images = source.map(m => ({
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

  const services = apiServices.length > 0 ? apiServices : [
    {
      icon: '01',
      title: 'Investissement structuré',
      description: 'Programmes suivis par secteur avec reporting, calendrier et projection de rendement.',
      price: 'À partir de 500 000 FCFA',
      features: ['KYC', 'Contrats', 'Suivi portefeuille']
    },
    {
      icon: '02',
      title: 'Services terrain',
      description: 'Déploiement opérationnel sur la logistique, l’entretien, l’agro et les services aux entreprises.',
      price: 'Devis personnalisé',
      features: ['Équipe terrain', 'SLA', 'Qualité contrôlée']
    },
    {
      icon: '03',
      title: 'Monitoring financier',
      description: 'Tableaux de bord, alertes, documents et visibilité sur les flux financiers.',
      price: 'Espace investisseur inclus',
      features: ['ROI', 'Wallet', 'Documents']
    },
    {
      icon: '04',
      title: 'Simulation intelligente',
      description: 'Calculs dynamiques avec intérêts composés, versements, inflation et fiscalité.',
      price: 'Gratuit',
      features: ['Simple', 'Avancé', 'Professionnel']
    }
  ];

  const sectors = normalizeSectors(section('sectors')).map((s) => ({
    ...s,
    image: s.imageUrl ? mediaUrl(s.imageUrl) : s.image,
    description: s.short || s.description || '',
  }));

  const testimonialItems = normalizeItemsSection(apiSiteContent.testimonials, []);
  const testimonials = testimonialItems.length ? testimonialItems : [
    {
      name: 'Jean Tchakondo',
      role: 'Investisseur Privé',
      comment: `${BRAND_NAME} offre une transparence exceptionnelle. J'ai augmenté mes revenus mensuels de manière constante.`,
    },
    {
      name: 'Marie Sefako',
      role: 'PDG - Groupe Import',
      comment: `Service d'entretien impeccable et équipe professionnelle. Je recommande vivement ${BRAND_NAME} !`,
    }
  ];

  const heroSection = section('hero') || section('heroBanner') || apiSiteContent.hero || apiSiteContent.heroBanner || {};
  const ctaSection = apiSiteContent.cta || {};
  const heroBadges = Array.isArray(heroSection.badges)
    ? heroSection.badges
    : DEFAULT_HERO.badges;
  const heroData = {
    badgeMain: heroSection.badgeMain || heroSection.badge || DEFAULT_HERO.badgeMain,
    badges: heroBadges,
    title: heroSection.title || heroSection.titleFr || DEFAULT_HERO.title,
    subtitle: heroSection.subtitle || heroSection.titleEn || DEFAULT_HERO.subtitle,
    description: heroSection.description || DEFAULT_HERO.description,
    btn1: heroSection.btn1 || heroSection.primaryButton || DEFAULT_HERO.btn1,
    btn2: heroSection.btn2 || heroSection.secondaryButton || (isAuthenticated ? 'Mon espace' : DEFAULT_HERO.btn2),
    imageCaption: heroSection.imageCaption || DEFAULT_HERO.imageCaption,
    heroImage: (heroSection.heroImage || heroSection.backgroundImage)
      ? mediaUrl(heroSection.heroImage || heroSection.backgroundImage)
      : null,
  };

  // ── Réalisations ──────────────────────────────────────────────────────────
  const uploadedRealisations = Array.from({ length: 30 }, (_, index) => {
    const number = String(index + 1).padStart(2, '0');
    const categories = ['Logistique', 'Transport', 'Lavage Auto', 'Équipe terrain', 'Agro & Commerce'];
    const labels = [
      'Conducteur TAOMAN',
      'Équipe de transport',
      'Centre de lavage',
      'Intervention terrain',
      'Flotte opérationnelle',
      'Commerce agro',
    ];

    return {
      src: `/realisations/taoman-realisation-${number}.png`,
      alt: `Réalisation ${BRAND_NAME} ${number}`,
      category: categories[index % categories.length],
      label: `${labels[index % labels.length]} ${number}`,
      progress: 60 + ((index * 7) % 38),
    };
  });

  const fallbackRealisations = [
    { src: lavage1,    alt: 'Centre de lavage auto - file de véhicules',       category: 'Services',  label: 'Centre opérationnel', progress: 88 },
    { src: lavage2,    alt: `Parking du centre de lavage ${BRAND_NAME}`,              category: 'Services',  label: 'Parking client', progress: 76 },
    { src: mecanique1, alt: `Équipe ${BRAND_NAME} devant le camion de transport`,     category: 'Logistique',    label: 'Équipe transport', progress: 64 },
    { src: mecanique2, alt: `Techniciens ${BRAND_NAME} en intervention mécanique`,    category: 'Maintenance',    label: 'Atelier technique', progress: 81 },
    { src: transport1, alt: `Camion Mazda ${BRAND_NAME} - service de déménagement`,   category: 'Logistique',    label: 'Flotte de transport', progress: 92 },
    { src: transport2, alt: 'Camion déménagement national et international',    category: 'Logistique',    label: 'Déménagement national', progress: 70 },
  ];

  const realisations = apiRealisations.length > 0 ? apiRealisations : uploadedRealisations.concat(fallbackRealisations);

  // Extract unique filters from the current realisations list, including 'Tous'
  const filters = ['Tous', ...new Set(realisations.map(r => r.category))];
  
  const filtered = activeFilter === 'Tous'
    ? realisations
    : realisations.filter(r => r.category === activeFilter);

  const carouselItems = filtered.length > 0 ? filtered : realisations;
  const featuredProject = carouselItems[activeProject % carouselItems.length] || carouselItems[0];

  useEffect(() => {
    setActiveProject(0);
  }, [activeFilter]);

  useEffect(() => {
    if (!mediaSettings.autoplayEnabled) return undefined;
    if (carouselItems.length <= 1 || carouselPaused) return undefined;

    const timer = setInterval(() => {
      setActiveProject((current) => (current + 1) % carouselItems.length);
    }, mediaSettings.autoplayInterval);

    return () => clearInterval(timer);
  }, [carouselItems.length, carouselPaused, mediaSettings.autoplayEnabled, mediaSettings.autoplayInterval]);

  const showPreviousProject = () => {
    setActiveProject((current) => (current - 1 + carouselItems.length) % carouselItems.length);
  };

  const showNextProject = () => {
    setActiveProject((current) => (current + 1) % carouselItems.length);
  };

  const trustBadges = heroData.badges;

  return (
    <div className={`flex flex-col min-h-screen bg-surface transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header activeLink="accueil" />

      <main className="flex-grow pt-24">

        {/* ============ HERO — sobre & dynamique, sans image ============ */}
        <section className="relative overflow-hidden bg-[#07111f] pt-20 pb-24 text-white md:pt-28 md:pb-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,82,204,0.45),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.25),transparent_45%),linear-gradient(120deg,#07111f_0%,#0b1a30_55%,#07111f_100%)]"></div>
            <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-blob-delay"></div>
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:48px_48px]"></div>
          </div>

          <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center animate-fade-in-up">
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-2 text-xs md:text-sm font-black uppercase tracking-[0.25em] text-cyan-100 backdrop-blur">
                {heroData.badgeMain}
              </span>
            </div>

            <h1 className="mb-6 leading-tight tracking-[-0.04em]">
              <span className="block text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-transparent">
                {heroData.title}
              </span>
              <span className="mt-4 block text-xl md:text-3xl font-bold text-white/90">
                {heroData.subtitle}
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              {heroData.description}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button
                onClick={() => navigate('/contact?topic=invest')}
                className="interactive interactive-lift px-8 py-4 bg-white text-[#07111f] font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                {heroData.btn1}
              </button>
              <button
                onClick={() => navigate(isAuthenticated ? '/dashboard' : '/connexion')}
                className="px-8 py-4 border border-white/25 bg-white/10 text-white font-bold rounded-2xl backdrop-blur hover:bg-white hover:text-[#07111f] transition-all duration-300 hover:scale-105"
              >
                {heroData.btn2}
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs md:text-sm font-semibold text-white/80 backdrop-blur"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SERVICES ============ */}
        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold text-on-surface mb-6">Nos Services Professionnels</h2>
              <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
                Découvrez notre offre complète de services de haute qualité conçus pour répondre à tous vos besoins.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <div key={service.title} className="group rounded-3xl border border-outline-variant/40 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary font-black overflow-hidden">
                    {service.imageUrl ? (
                      <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
                    ) : (
                      service.icon
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-on-surface">{service.title}</h3>
                  <p className="mt-3 text-on-surface-variant">{service.description}</p>
                  <p className="mt-5 font-bold text-primary">{service.price}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span key={feature} className="rounded-full bg-surface-container-low px-3 py-1 text-xs font-semibold text-on-surface-variant">{feature}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ RÉALISATIONS — galerie dynamique ============ */}
        <section className="py-24 px-6 bg-[#07111f] text-white relative overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto relative">
            <div className="text-center mb-14 animate-fade-in">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-200 mb-4">Réalisations terrain</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Nos projets en images
              </h2>
              <p className="text-lg text-white/65 max-w-2xl mx-auto">
                Une galerie vivante, alimentée par les équipes sur le terrain.
              </p>
            </div>

            {/* Filtres */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                    activeFilter === f
                      ? 'bg-cyan-300 text-[#07111f] shadow-lg scale-105'
                      : 'bg-white/5 text-white/80 border border-white/15 hover:border-cyan-300 hover:text-white'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Image vedette plein cadre */}
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl mb-8">
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
                    {((activeProject % carouselItems.length) + 1).toString().padStart(2, '0')} / {carouselItems.length.toString().padStart(2, '0')}
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
                aria-label="Réalisation précédente"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={showNextProject}
                className="absolute right-4 md:right-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-black text-[#07111f] shadow-xl transition hover:scale-110"
                aria-label="Réalisation suivante"
              >
                ›
              </button>

              <button
                type="button"
                onClick={() => setCarouselPaused((p) => !p)}
                className="absolute right-6 bottom-6 z-10 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-bold text-white backdrop-blur hover:bg-black/70"
                aria-label={carouselPaused ? 'Reprendre' : 'Pause'}
              >
                {carouselPaused ? '▶ Reprendre' : '⏸ Pause'}
              </button>
            </div>

            {/* Grille miniatures uniformisées */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {carouselItems.slice(0, 8).map((item, idx) => {
                const realIdx = idx;
                const isActive = realIdx === activeProject % carouselItems.length;
                return (
                  <button
                    key={`${item.label}-${idx}`}
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

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => navigate(isAuthenticated ? '/dashboard' : '/connexion')}
                className="rounded-2xl bg-white px-8 py-4 font-bold text-[#07111f] shadow-xl hover:scale-105 transition-transform"
              >
                {isAuthenticated ? 'Voir le suivi complet des projets' : 'Se connecter à mon espace investisseur'}
              </button>
            </div>
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
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-14 animate-fade-in">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">Domaines d'activité</p>
              <h2 className="text-5xl font-bold text-on-surface">Secteurs d'Investissement</h2>
              <p className="mt-4 text-lg text-on-surface-variant max-w-2xl mx-auto">
                Une diversification équilibrée portée par des équipes terrain et des projets concrets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sectors.map((sector, idx) => (
                <Link
                  key={`${sector.title}-${idx}`}
                  to={sector.slug ? `/secteurs/${sector.slug}` : '/secteurs'}
                  className="group relative h-[420px] rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up motion-reduce:hover:translate-y-0"
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/50 to-transparent"></div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-500"></div>

                  {sector.tag && (
                    <span className="absolute top-5 left-5 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-widest text-primary backdrop-blur">
                      {sector.tag}
                    </span>
                  )}

                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3 leading-tight">
                      {sector.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed mb-5 line-clamp-3">{sector.description}</p>
                    <span className="inline-flex items-center gap-2 text-cyan-200 font-bold transition-transform duration-300 group-hover:translate-x-1">
                      En savoir plus
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TÉMOIGNAGES ============ */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-5xl font-bold text-center text-on-surface mb-16 animate-fade-in">
              Ce que disent nos clients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-outline-variant/20 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-container rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">{t.name}</p>
                      <p className="text-sm text-on-surface-variant">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant italic text-lg">"{t.comment}"</p>
                  <div className="text-yellow-400 mt-4">★★★★★</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary via-primary-container to-primary">
          <div className="max-w-[1400px] mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-bold text-on-primary mb-6">
              {ctaSection.title || 'Prêt à transformer votre avenir?'}
            </h2>
            <p className="text-xl text-on-primary/90 mb-10 max-w-2xl mx-auto">
              {ctaSection.subtitle || 'Rejoignez des milliers de clients satisfaits et commencez votre parcours vers la liberté financière.'}
            </p>
            <div className="flex gap-4 flex-col sm:flex-row justify-center">
              {!localStorage.getItem('user') && (
                <button
                  onClick={() => navigate('/inscription')}
                  className="px-10 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  S'inscrire gratuitement
                </button>
              )}
              <button
                onClick={() => navigate('/contact')}
                className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                {ctaSection.buttonText || 'Nous contacter'}
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};