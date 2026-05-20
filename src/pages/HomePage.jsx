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
import btpIcon from '../assets/btp_sector.jpeg';
import agroIcon from '../assets/agro_sector.jpeg';
import transportIcon from '../assets/transport_sector.jpeg';

export const HomePage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [activeProject, setActiveProject] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const isAuthenticated = Boolean(localStorage.getItem('token') && localStorage.getItem('user'));

  const [apiServices, setApiServices] = useState([]);
  const [apiRealisations, setApiRealisations] = useState([]);
  const [apiSiteContent, setApiSiteContent] = useState({});

  useEffect(() => {
    setIsLoaded(true);

    // Fetch Services
    fetch(`${API_URL}/content/services`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setApiServices(data.filter(s => s.published).map(s => ({
            icon: s.icon || 'star',
            imageUrl: s.imageUrl ? mediaUrl(s.imageUrl) : null,
            title: s.title,
            description: s.description,
            price: s.actionText || 'En savoir plus',
            features: s.actionLink ? [s.actionLink] : [],
            href: s.actionLink || null,
          })));
        }
      })
      .catch(err => console.error("Error fetching services:", err));

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

    // Fetch Site Content
    fetch(`${API_URL}/content/texts`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const contentMap = data.reduce((acc, item) => {
            try {
              acc[item.section] = JSON.parse(item.content);
            } catch (e) {
              acc[item.section] = item.content;
            }
            return acc;
          }, {});
          setApiSiteContent(contentMap);
        }
      })
      .catch(err => console.error("Error fetching site content:", err));
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
      price: 'Dashboard inclus',
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

  const investmentStats = apiSiteContent.investmentStats || [
    { label: 'Ticket minimum',      value: '500K FCFA',     icon: '01' },
    { label: 'Horizon maximum',    value: '10 mois',  icon: '02' },
    { label: 'Suivi portefeuille',       value: '24/7',    icon: '03' },
    { label: 'Reporting investisseur', value: 'PDF + Web',    icon: '04' },
  ];

  const sectors = apiSiteContent.sectors || [
    { title: 'BTP & Immobilier',       icon: btpIcon, description: 'Projets de construction durable' },
    { title: 'Agro & Énergie',         icon: agroIcon, description: 'Agriculture moderne et énergies renouvelables' },
    { title: 'Transport & Logistique', icon: transportIcon, description: 'Solutions logistiques intégrées' },
  ];

  const testimonials = apiSiteContent.testimonials || [
    {
      name: 'Jean Tchakondo',
      role: 'Investisseur Privé',
      comment: "TAOMAN Groupe Investissement offre une transparence exceptionnelle. J'ai augmenté mes revenus mensuels de manière constante.",
    },
    {
      name: 'Marie Sefako',
      role: 'PDG - Groupe Import',
      comment: "Service d'entretien impeccable et équipe professionnelle. Je recommande vivement TAOMAN Groupe Investissement!",
    }
  ];

  const heroSection = apiSiteContent.hero || apiSiteContent.heroBanner || {};
  const heroData = {
    title: heroSection.titleFr || heroSection.title || "TAOMAN Groupe Investissement",
    subtitle: heroSection.titleEn || heroSection.subtitle || "la plateforme qui relie capital, services et exécution terrain",
    description: heroSection.description || heroSection.subtitle || "TAOMAN Groupe Investissement met l'entreprise au centre : projets réels, réalisations visibles, simulation claire, dashboard investisseur et suivi transparent.",
    btn1: heroSection.primaryButton || heroSection.btn1 || "Simuler mon rendement",
    btn2: heroSection.secondaryButton || heroSection.btn2 || (isAuthenticated ? "Ouvrir le dashboard" : "Se connecter"),
    imageCaption: heroSection.imageCaption || heroSection.badge || "Projets suivis sur le terrain",
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
      alt: `Réalisation TAOMAN Groupe Investissement ${number}`,
      category: categories[index % categories.length],
      label: `${labels[index % labels.length]} ${number}`,
      progress: 60 + ((index * 7) % 38),
    };
  });

  const fallbackRealisations = [
    { src: lavage1,    alt: 'Centre de lavage auto - file de véhicules',       category: 'Services',  label: 'Centre opérationnel', progress: 88 },
    { src: lavage2,    alt: 'Parking du centre de lavage TAOMAN Groupe Investissement',              category: 'Services',  label: 'Parking client', progress: 76 },
    { src: mecanique1, alt: "Équipe TAOMAN Groupe Investissement devant le camion de transport",     category: 'Logistique',    label: 'Équipe transport', progress: 64 },
    { src: mecanique2, alt: 'Techniciens TAOMAN Groupe Investissement en intervention mécanique',    category: 'Maintenance',    label: 'Atelier technique', progress: 81 },
    { src: transport1, alt: 'Camion Mazda TAOMAN Groupe Investissement - service de déménagement',   category: 'Logistique',    label: 'Flotte de transport', progress: 92 },
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
    if (carouselItems.length <= 1) return undefined;

    const timer = setInterval(() => {
      setActiveProject((current) => (current + 1) % carouselItems.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [carouselItems.length]);

  const showPreviousProject = () => {
    setActiveProject((current) => (current - 1 + carouselItems.length) % carouselItems.length);
  };

  const showNextProject = () => {
    setActiveProject((current) => (current + 1) % carouselItems.length);
  };

  const trustBadges = ['KYC & conformité', 'Reporting PDF', 'Mobile Money', 'Alertes WhatsApp'];
  const dashboardPreview = [
    { label: 'Capital investi', value: '12,8M', change: '+18%' },
    { label: 'ROI moyen', value: '16,4%', change: '+2,1%' },
    { label: 'Projets actifs', value: '9', change: '3 secteurs' },
  ];

  return (
    <div className={`flex flex-col min-h-screen bg-surface transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header activeLink="accueil" />

      <main className="flex-grow pt-24">

        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden bg-[#07111f] pt-12 pb-20 text-white md:pt-20 md:pb-32">
          <div className="absolute inset-0 z-0">
            <img src={heroData.heroImage || transport2} alt="" className="h-full w-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,82,204,0.45),transparent_35%),linear-gradient(120deg,#07111f_0%,rgba(7,17,31,0.92)_45%,rgba(7,17,31,0.65)_100%)]"></div>
            <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-blob-delay"></div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-2 text-sm font-black uppercase tracking-[0.25em] text-cyan-100 backdrop-blur">
                  Entreprise TAOMAN Groupe Investissement
                </span>
                {trustBadges.map((badge) => (
                  <span key={badge} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur">
                    {badge}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-[-0.05em]">
                <span className="block text-cyan-200">{heroData.title}</span>
                <span className="block text-white">{heroData.subtitle}</span>
              </h1>
              <p className="text-lg md:text-xl text-white/75 mb-8 leading-relaxed max-w-2xl">
                {heroData.description}
              </p>
              <div className="flex gap-4 flex-col sm:flex-row">
                <button
                  onClick={() => navigate('/investissement/simulateur')}
                  className="px-8 py-4 bg-white text-[#07111f] font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
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
            </div>

            <div className="relative animate-fade-in-down">
              <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.5rem] bg-[#091827] p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Live portfolio</p>
                      <h2 className="mt-2 text-2xl font-bold text-white">Dashboard investisseur</h2>
                    </div>
                    <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-bold text-emerald-200">En ligne</span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {dashboardPreview.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs text-white/55">{item.label}</p>
                        <p className="mt-2 text-2xl font-black text-white">{item.value}</p>
                        <p className="text-sm font-semibold text-cyan-200">{item.change}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl bg-white p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="font-bold text-[#07111f]">Projection sur 10 mois</p>
                      <p className="text-sm font-bold text-primary">+42%</p>
                    </div>
                    <div className="flex h-36 items-end gap-2">
                      {[22, 30, 36, 44, 53, 59, 68, 74, 83, 96].map((height, idx) => (
                        <div key={idx} className="flex-1 rounded-t-xl bg-gradient-to-t from-primary to-cyan-300" style={{ height: `${height}%` }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 p-4">
                      <p className="text-sm text-white/60">Projet prioritaire</p>
                      <p className="font-bold text-white">{heroData.imageCaption}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 p-4">
                      <p className="text-sm text-white/60">Retraits</p>
                      <p className="font-bold text-white">Mobile Money, banque, carte</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ STATS INVESTISSEMENT ============ */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-4xl font-bold text-center text-on-surface mb-12">
              Une base plus claire pour convaincre les investisseurs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {investmentStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="group bg-surface-container-low p-8 rounded-3xl border border-outline-variant/40 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white font-black">{stat.icon}</div>
                  <h3 className="text-3xl font-bold text-on-surface mb-2">{stat.value}</h3>
                  <p className="text-on-surface-variant">{stat.label}</p>
                </div>
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

        {/* ============ ACCÈS RAPIDE ============ */}
        <section className="py-16 px-6 bg-surface-container-low">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <p className="text-sm uppercase tracking-[0.35em] text-primary mb-3">Accès rapide</p>
              <h2 className="text-4xl font-bold text-on-surface">Toutes les nouvelles pages en un clic</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Contact', href: '/contact' },
                { label: 'Lavage Auto', href: '/lavage-auto/devis' },
                { label: 'Déménagement', href: '/demenagement/devis' },
                { label: 'Entretien bureaux', href: '/entretien/bureaux' },
                { label: 'Climatisation', href: '/entretien/climatisation' },
                { label: 'Personnel déménagement', href: '/demenagement/personnels' },
                { label: 'Investissement TIE', href: '/investissement/tie' },
                { label: 'Simulateur', href: '/investissement/simulateur' },
                ...(isAuthenticated ? [{ label: 'Dashboard complet', href: '/dashboard' }] : []),
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group rounded-3xl border border-outline-variant bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <p className="text-lg font-semibold text-on-surface mb-2">{item.label}</p>
                  <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors">Ouvrir la page →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============ RÉALISATIONS ============ */}
        <section className="py-20 px-6 bg-[#07111f] text-white">
          <div className="max-w-[1400px] mx-auto">

            <div className="text-center mb-12 animate-fade-in">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200 mb-4">Réalisations terrain</p>
              <h2 className="text-5xl font-bold text-white mb-4">Images, progression et preuves d'exécution</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Une section pensée comme une galerie investisseur : slider premium, filtres, progression, fiche projet et timeline.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] mb-12">
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-left shadow-2xl">
                <button
                  type="button"
                  onClick={() => setLightbox(featuredProject)}
                  className="block w-full text-left"
                  aria-label={`Agrandir ${featuredProject.label}`}
                >
                <img src={featuredProject.src} alt={featuredProject.alt} className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur">{featuredProject.category}</span>
                  <h3 className="mt-4 text-4xl font-black text-white">{featuredProject.label}</h3>
                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-primary" style={{ width: `${featuredProject.progress || 70}%` }}></div>
                  </div>
                  <p className="mt-2 text-white/75">Progression estimée : {featuredProject.progress || 70}%</p>
                </div>
                </button>

                <button
                  type="button"
                  onClick={showPreviousProject}
                  className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-black text-[#07111f] shadow-xl transition hover:scale-110"
                  aria-label="Réalisation précédente"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={showNextProject}
                  className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-black text-[#07111f] shadow-xl transition hover:scale-110"
                  aria-label="Réalisation suivante"
                >
                  ›
                </button>

                <div className="absolute right-6 top-6 z-10 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                  {((activeProject % carouselItems.length) + 1).toString().padStart(2, '0')} / {carouselItems.length.toString().padStart(2, '0')}
                </div>

                <div className="absolute bottom-4 left-8 right-8 z-10 flex gap-2">
                  {carouselItems.map((item, idx) => (
                    <button
                      type="button"
                      key={`${item.label}-${idx}`}
                      onClick={() => setActiveProject(idx)}
                      className={`h-2 flex-1 rounded-full transition-all ${idx === activeProject % carouselItems.length ? 'bg-cyan-300' : 'bg-white/30 hover:bg-white/60'}`}
                      aria-label={`Voir ${item.label}`}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Timeline projet</p>
                <div className="mt-6 space-y-5">
                  {[
                    ['Audit terrain', 'Validation du besoin et cadrage opérationnel'],
                    ['Financement', 'Allocation des capitaux et contractualisation'],
                    ['Déploiement', 'Suivi des équipes, matériel et milestones'],
                    ['Reporting', 'Photos, ROI, rapports PDF et notifications'],
                  ].map(([title, desc], idx) => (
                    <div key={title} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 text-[#07111f] font-black">{idx + 1}</span>
                        {idx < 3 && <span className="h-10 w-px bg-white/20"></span>}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{title}</h4>
                        <p className="text-sm text-white/65">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={() => navigate(isAuthenticated ? '/dashboard' : '/connexion')} className="mt-8 w-full rounded-2xl bg-white py-4 font-bold text-[#07111f] hover:scale-[1.02]">
                  {isAuthenticated ? 'Voir le dashboard des projets' : 'Se connecter pour voir le dashboard'}
                </button>
              </div>
            </div>

            {/* Filtres */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeFilter === f
                      ? 'bg-white text-[#07111f] shadow-lg scale-105'
                      : 'bg-white/10 text-white border border-white/15 hover:border-white hover:bg-white/15'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Carrousel miniatures */}
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4">
              <div
                className="flex gap-4 transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${(activeProject % carouselItems.length) * 12}px)` }}
              >
                {carouselItems.map((item, idx) => {
                  const isActive = idx === activeProject % carouselItems.length;
                  return (
                    <button
                      key={`${item.label}-${idx}`}
                      type="button"
                      onClick={() => setActiveProject(idx)}
                      onDoubleClick={() => setLightbox(item)}
                      className={`group relative h-32 min-w-[220px] overflow-hidden rounded-2xl border text-left transition-all duration-500 ${
                        isActive ? 'border-cyan-300 ring-2 ring-cyan-300/40' : 'border-white/10 hover:border-white/50'
                      }`}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="rounded-full bg-white/15 px-2 py-1 text-[10px] font-bold text-white backdrop-blur">
                          {item.category}
                        </span>
                        <p className="mt-2 text-sm font-black text-white">{item.label}</p>
                      </div>
                      <div className="absolute bottom-0 left-0 h-1 bg-cyan-300 transition-all" style={{ width: isActive ? '100%' : `${item.progress || 70}%` }}></div>
                    </button>
                  );
                })}
              </div>
              <p className="mt-4 text-center text-sm text-white/55">
                Le carrousel défile automatiquement. Cliquez sur une miniature pour afficher la réalisation, double-cliquez pour l'agrandir.
              </p>
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
        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-5xl font-bold text-center text-on-surface mb-16 animate-fade-in">
              Secteurs d'Investissement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sectors.map((sector, idx) => (
                <Link
                  key={idx}
                  to="/investissement"
                  className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary-container/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                    <img src={sector.icon} alt={sector.title} className="w-16 h-16 object-contain mb-3 bg-white/10 rounded-lg p-1" />
                    <h3 className="text-2xl font-bold mb-2">{sector.title}</h3>
                    <p className="text-white/90">{sector.description}</p>
                    <p className="text-primary-fixed mt-2 font-bold">En savoir plus →</p>
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
            <h2 className="text-5xl font-bold text-on-primary mb-6">Prêt à transformer votre avenir?</h2>
            <p className="text-xl text-on-primary/90 mb-10 max-w-2xl mx-auto">
              Rejoignez des milliers de clients satisfaits et commencez votre parcours vers la liberté financière.
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
                Nous contacter
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};