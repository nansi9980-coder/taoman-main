import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SeoHead } from '../components/SeoHead';
import { Reveal } from '../components/Reveal';
import { PremiumBackdrop } from '../components/PremiumBackdrop';
import { PremiumImageFrame } from '../components/PremiumImageFrame';
import { StatsBand } from '../components/StatsBand';
import { PartnersBand } from '../components/PartnersBand';
import { MagneticButton } from '../components/MagneticButton';
import { TextReveal } from '../components/TextReveal';
import { TiltCard } from '../components/TiltCard';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, Layers, MapPin, Sparkles as SparklesIcon, ArrowRight } from 'lucide-react';
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

  const HOME_FALLBACKS = {
    FR: {
      services: [
        { icon: '01', title: 'Investissement structuré', description: 'Programmes suivis par secteur avec reporting, calendrier et projection de rendement.', price: 'À partir de 500 000 FCFA', features: ['KYC', 'Contrats', 'Suivi portefeuille'] },
        { icon: '02', title: 'Services terrain', description: 'Déploiement opérationnel sur la logistique, l’entretien, l’agro et les services aux entreprises.', price: 'Devis personnalisé', features: ['Équipe terrain', 'SLA', 'Qualité contrôlée'] },
        { icon: '03', title: 'Monitoring financier', description: 'Tableaux de bord, alertes, documents et visibilité sur les flux financiers.', price: 'Espace investisseur inclus', features: ['ROI', 'Wallet', 'Documents'] },
        { icon: '04', title: 'Simulation intelligente', description: 'Calculs dynamiques avec intérêts composés, versements, inflation et fiscalité.', price: 'Gratuit', features: ['Simple', 'Avancé', 'Professionnel'] }
      ],
      testimonials: [
        { name: 'Jean Tchakondo', role: 'Investisseur Privé', comment: `${BRAND_NAME} offre une transparence exceptionnelle. J'ai augmenté mes revenus mensuels de manière constante.` },
        { name: 'Marie Sefako', role: 'PDG - Groupe Import', comment: `Service d'entretien impeccable et équipe professionnelle. Je recommande vivement ${BRAND_NAME} !` }
      ],
      categories: ['Logistique', 'Transport', 'Lavage Auto', 'Équipe terrain', 'Agro & Commerce'],
      labels: ['Conducteur TAOMAN', 'Équipe de transport', 'Centre de lavage', 'Intervention terrain', 'Flotte opérationnelle', 'Commerce agro']
    },
    EN: {
      services: [
        { icon: '01', title: 'Structured Investment', description: 'Monitored programs per sector with reporting, schedule and yield projection.', price: 'From 500,000 FCFA', features: ['KYC', 'Contracts', 'Portfolio tracking'] },
        { icon: '02', title: 'Field Services', description: 'Operational deployment in logistics, cleaning, agro and business services.', price: 'Custom quote', features: ['Field team', 'SLA', 'Quality control'] },
        { icon: '03', title: 'Financial Monitoring', description: 'Dashboards, alerts, documents and visibility on financial flows.', price: 'Investor space included', features: ['ROI', 'Wallet', 'Documents'] },
        { icon: '04', title: 'Smart Simulation', description: 'Dynamic calculations with compound interest, installments, inflation and tax.', price: 'Free', features: ['Simple', 'Advanced', 'Professional'] }
      ],
      testimonials: [
        { name: 'Jean Tchakondo', role: 'Private Investor', comment: `${BRAND_NAME} offers exceptional transparency. I have steadily increased my monthly income.` },
        { name: 'Marie Sefako', role: 'CEO - Import Group', comment: `Impeccable cleaning service and professional team. I highly recommend ${BRAND_NAME}!` }
      ],
      categories: ['Logistics', 'Transport', 'Car Wash', 'Field Team', 'Agro & Trade'],
      labels: ['TAOMAN Driver', 'Transport Team', 'Wash Center', 'Field Intervention', 'Operational Fleet', 'Agro Trade']
    },
    ES: {
      services: [
        { icon: '01', title: 'Inversión Estructurada', description: 'Programas monitoreados por sector con informes, calendario y proyección de rendimientos.', price: 'Desde 500.000 FCFA', features: ['KYC', 'Contratos', 'Seguimiento de cartera'] },
        { icon: '02', title: 'Servicios de Terreno', description: 'Despliegue operativo en logística, limpieza, agro y servicios empresariales.', price: 'Presupuesto personalizado', features: ['Equipo en terreno', 'SLA', 'Control de calidad'] },
        { icon: '03', title: 'Monitoreo Financiero', description: 'Paneles de control, alertas, documentos y visibilidad de los flujos financieros.', price: 'Espacio de inversor incluido', features: ['ROI', 'Billetera', 'Documentos'] },
        { icon: '04', title: 'Simulación Inteligente', description: 'Cálculos dinámicos con interés compuesto, pagos, inflación y fiscalidad.', price: 'Gratis', features: ['Simple', 'Avanzado', 'Profesional'] }
      ],
      testimonials: [
        { name: 'Jean Tchakondo', role: 'Inversor Privado', comment: `${BRAND_NAME} ofrece una transparencia excepcional. He aumentado constantemente mis ingresos mensuales.` },
        { name: 'Marie Sefako', role: 'CEO - Grupo Importación', comment: `Servicio de limpieza impecable y equipo profesional. ¡Recomiendo encarecidamente ${BRAND_NAME}!` }
      ],
      categories: ['Logística', 'Transporte', 'Lavado de Autos', 'Equipo de Terreno', 'Agro y Comercio'],
      labels: ['Conductor TAOMAN', 'Equipo de Transporte', 'Centro de Lavado', 'Intervención en Terreno', 'Flota Operativa', 'Comercio Agro']
    },
    PT: {
      services: [
        { icon: '01', title: 'Investimento Estruturado', description: 'Programas monitorados por setor com relatórios, cronograma e projeção de rendimentos.', price: 'A partir de 500.000 FCFA', features: ['KYC', 'Contratos', 'Acompanhamento de portfólio'] },
        { icon: '02', title: 'Serviços de Campo', description: 'Implantação operacional em logística, limpeza, agronegócio e serviços corporativos.', price: 'Orçamento personalizado', features: ['Equipe de campo', 'SLA', 'Controle de qualidade'] },
        { icon: '03', title: 'Monitoramento Financeiro', description: 'Painéis, alertas, documentos e visibilidade dos fluxos financeiros.', price: 'Espaço do investidor incluído', features: ['ROI', 'Carteira', 'Documentos'] },
        { icon: '04', title: 'Simulação Inteligente', description: 'Cálculos dinâmicos com juros compostos, parcelas, inflação e tributação.', price: 'Grátis', features: ['Simples', 'Avançado', 'Profissional'] }
      ],
      testimonials: [
        { name: 'Jean Tchakondo', role: 'Investidor Privado', comment: `${BRAND_NAME} oferece uma transparência excepcional. Tenho aumentado constantemente minha renda mensal.` },
        { name: 'Marie Sefako', role: 'CEO - Grupo de Importação', comment: `Serviço de limpeza impecável e equipe profissional. Recomendo fortemente a ${BRAND_NAME}!` }
      ],
      categories: ['Logística', 'Transporte', 'Lava Rápido', 'Equipe de Campo', 'Agronegócio'],
      labels: ['Motorista TAOMAN', 'Equipe de Transporte', 'Centro de Lavagem', 'Intervenção em Campo', 'Frota Operacional', 'Comércio Agro']
    },
    DE: {
      services: [
        { icon: '01', title: 'Strukturierte Investition', description: 'Überwachte Programme pro Sektor mit Berichten, Zeitplan und Ertragsprognose.', price: 'Ab 500.000 FCFA', features: ['KYC', 'Verträge', 'Portfolio-Tracking'] },
        { icon: '02', title: 'Außendienst', description: 'Operativer Einsatz in Logistik, Reinigung, Agrar- und Unternehmensdiensten.', price: 'Individuelles Angebot', features: ['Außendienstteam', 'SLA', 'Qualitätskontrolle'] },
        { icon: '03', title: 'Finanzmonitoring', description: 'Dashboards, Warnungen, Dokumente und Sichtbarkeit der Finanzströme.', price: 'Investorenbereich inklusive', features: ['ROI', 'Wallet', 'Dokumente'] },
        { icon: '04', title: 'Intelligente Simulation', description: 'Dynamische Berechnungen mit Zinseszins, Raten, Inflation und Steuern.', price: 'Kostenlos', features: ['Einfach', 'Erweitert', 'Professionell'] }
      ],
      testimonials: [
        { name: 'Jean Tchakondo', role: 'Privatinvestor', comment: `${BRAND_NAME} bietet außergewöhnliche Transparenz. Ich habe mein monatliches Einkommen stetig gesteigert.` },
        { name: 'Marie Sefako', role: 'CEO - Import Group', comment: `Tadelloser Reinigungsservice und professionelles Team. Ich kann ${BRAND_NAME} wärmstens empfehlen!` }
      ],
      categories: ['Logistik', 'Transport', 'Autowäsche', 'Außendienst', 'Agrar & Handel'],
      labels: ['TAOMAN Fahrer', 'Transportteam', 'Waschzentrum', 'Außendienst', 'Flotte', 'Agrarhandel']
    },
    AR: {
      services: [
        { icon: '01', title: 'استثمار منظم', description: 'برامج مراقبة لكل قطاع مع تقارير، وجدول زمني، وتوقعات العوائد.', price: 'بدءاً من 500,000 فرنك سيفا', features: ['اعرف عميلك (KYC)', 'عقود', 'تتبع المحفظة'] },
        { icon: '02', title: 'خدمات ميدانية', description: 'نشر تشغيلي في اللوجستيات، التنظيف، الزراعة، وخدمات الأعمال.', price: 'عرض مخصص', features: ['فريق ميداني', 'اتفاقية مستوى الخدمة', 'مراقبة الجودة'] },
        { icon: '03', title: 'مراقبة مالية', description: 'لوحات قياس، تنبيهات، مستندات، ورؤية واضحة للتدفقات المالية.', price: 'مساحة المستثمر مشمولة', features: ['عائد الاستثمار', 'محفظة', 'مستندات'] },
        { icon: '04', title: 'محاكاة ذكية', description: 'حسابات ديناميكية تشمل الفائدة المركبة، الأقساط، التضخم، والضرائب.', price: 'مجاني', features: ['بسيط', 'متقدم', 'احترافي'] }
      ],
      testimonials: [
        { name: 'جان تشاكوندو', role: 'مستثمر خاص', comment: `${BRAND_NAME} تقدم شفافية استثنائية. لقد زاد دخلي الشهري بشكل مستمر.` },
        { name: 'ماري سيفاكو', role: 'مديرة تنفيذية - مجموعة استيراد', comment: `خدمة تنظيف لا تشوبها شائبة وفريق محترف. أوصي بشدة بـ ${BRAND_NAME}!` }
      ],
      categories: ['اللوجستيات', 'النقل', 'غسيل السيارات', 'الفريق الميداني', 'الزراعة والتجارة'],
      labels: ['سائق TAOMAN', 'فريق النقل', 'مركز غسيل', 'التدخل الميداني', 'أسطول العمليات', 'التجارة الزراعية']
    },
    ZH: {
      services: [
        { icon: '01', title: '结构化投资', description: '按行业监控的项目，提供报告、时间表和收益预测。', price: '500,000 FCFA 起', features: ['KYC', '合同', '投资组合跟踪'] },
        { icon: '02', title: '现场服务', description: '在物流、清洁、农业和商业服务方面的运营部署。', price: '定制报价', features: ['现场团队', 'SLA', '质量控制'] },
        { icon: '03', title: '财务监控', description: '财务流向的仪表板、警报、文件和透明度。', price: '包含投资者空间', features: ['投资回报率', '钱包', '文件'] },
        { icon: '04', title: '智能模拟', description: '包含复利、分期付款、通货膨胀和税务的动态计算。', price: '免费', features: ['简单', '高级', '专业'] }
      ],
      testimonials: [
        { name: 'Jean Tchakondo', role: '私人投资者', comment: `${BRAND_NAME} 提供了非凡的透明度。我的月收入在稳步增长。` },
        { name: 'Marie Sefako', role: '首席执行官 - 进口集团', comment: `无可挑剔的清洁服务和专业的团队。我强烈推荐 ${BRAND_NAME}！` }
      ],
      categories: ['物流', '运输', '洗车', '现场团队', '农业与贸易'],
      labels: ['TAOMAN 司机', '运输团队', '洗车中心', '现场干预', '运营车队', '农业贸易']
    }
  };

  const activeFallback = HOME_FALLBACKS[language] || HOME_FALLBACKS.FR;

  const services = apiServices.length > 0 ? apiServices : activeFallback.services;

  const sectors = normalizeSectors(section('sectors')).map((s) => {
    const tSector = t.sectors?.items?.[s.slug];
    return {
      ...s,
      title: tSector?.title || s.title,
      description: tSector?.short || s.short || s.description || '',
      image: s.imageUrl ? mediaUrl(s.imageUrl) : s.image,
    };
  });

  const testimonialItems = normalizeItemsSection(apiSiteContent.testimonials, []);
  const testimonials = testimonialItems.length ? testimonialItems : activeFallback.testimonials;

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
    const categories = activeFallback.categories;
    const labels = activeFallback.labels;

    return {
      src: `/realisations/taoman-realisation-${number}.png`,
      alt: `Réalisation ${BRAND_NAME} ${number}`,
      category: categories[index % categories.length],
      label: `${labels[index % labels.length]} ${number}`,
      progress: 60 + ((index * 7) % 38),
    };
  });

  const fallbackRealisations = [
    { src: lavage1,    alt: 'Centre de lavage auto - file de véhicules',       category: activeFallback.categories[2] || 'Services',  label: activeFallback.labels[2] || 'Centre opérationnel', progress: 88 },
    { src: lavage2,    alt: `Parking du centre de lavage ${BRAND_NAME}`,              category: activeFallback.categories[2] || 'Services',  label: 'Parking client', progress: 76 },
    { src: mecanique1, alt: `Équipe ${BRAND_NAME} devant le camion de transport`,     category: activeFallback.categories[0] || 'Logistique',    label: activeFallback.labels[1] || 'Équipe transport', progress: 64 },
    { src: mecanique2, alt: `Techniciens ${BRAND_NAME} en intervention mécanique`,    category: 'Maintenance',    label: 'Atelier technique', progress: 81 },
    { src: transport1, alt: `Camion Mazda ${BRAND_NAME} - service de déménagement`,   category: activeFallback.categories[0] || 'Logistique',    label: activeFallback.labels[4] || 'Flotte de transport', progress: 92 },
    { src: transport2, alt: 'Camion déménagement national et international',    category: activeFallback.categories[0] || 'Logistique',    label: 'Déménagement national', progress: 70 },
  ];

  const realisations = apiRealisations.length > 0 ? apiRealisations : uploadedRealisations.concat(fallbackRealisations);

  const filters = [ALL_FILTER, ...new Set(realisations.map(r => r.category))];

  const filtered = activeFilter === ALL_FILTER
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
      <SeoHead
        title={tNav.home}
        description={t.home.seoDescription}
        path="/"
        keywords="TAOMAN Group Investment, investissement Togo, déménagement Lomé, lavage auto Togo, services opérationnels, partenariats public-privé"
      />
      <Header activeLink="accueil" />

      <main id="main-content" className="flex-grow pt-24">

        {/* ============ HERO PREMIUM — split cinématique ============ */}
        <section className="relative overflow-hidden pt-20 pb-24 text-white md:pt-28 md:pb-32">
          <PremiumBackdrop variant="dark" intensity="strong" particles={18} />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Colonne texte */}
            <div className="lg:col-span-7 animate-fade-in-up">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-2 text-xs md:text-sm font-black uppercase tracking-[0.25em] text-cyan-100 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(125,211,252,0.9)]" />
                  {heroData.badgeMain}
                </span>
              </div>

              <h1 className="mb-6 leading-[0.95] tracking-[-0.045em]">
                <TextReveal 
                  elementType="span" 
                  className="block text-5xl md:text-7xl xl:text-[5.5rem] font-black bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-transparent" 
                  text={heroData.title || ''} 
                />
                <span className="mt-5 block text-xl md:text-3xl font-bold text-white/90">
                  <TextReveal elementType="span" text={heroData.subtitle || ''} delay={0.5} />
                </span>
              </h1>

              <p className="max-w-xl text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
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
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs md:text-sm font-semibold text-white/80 backdrop-blur"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Colonne mosaïque cinématique */}
            <div className="lg:col-span-5 relative h-[460px] md:h-[560px] hidden lg:block">
              <div className="absolute top-0 right-0 w-[68%] h-[58%] animate-fade-in" style={{ animationDelay: '180ms' }}>
                <PremiumImageFrame
                  src={transport1}
                  alt={t.home.hero.mosaic.logistics.title}
                  ratio="aspect-auto h-full"
                  rounded="rounded-[2rem]"
                  tone="cool"
                  eager
                  priority
                  imageClassName="animate-ken-burns"
                >
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-cyan-200 border border-cyan-200/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
                    {t.home.hero.liveLabel}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-200">{t.home.hero.mosaic.logistics.tag}</p>
                    <p className="text-lg font-black tracking-tight">{t.home.hero.mosaic.logistics.title}</p>
                  </div>
                </PremiumImageFrame>
              </div>

              <div className="absolute top-[18%] left-0 w-[55%] h-[42%] animate-fade-in" style={{ animationDelay: '380ms' }}>
                <PremiumImageFrame
                  src={lavage1}
                  alt={t.home.hero.mosaic.services.title}
                  ratio="aspect-auto h-full"
                  rounded="rounded-[1.5rem]"
                  tone="warm"
                >
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-200">{t.home.hero.mosaic.services.tag}</p>
                    <p className="text-base font-black tracking-tight">{t.home.hero.mosaic.services.title}</p>
                  </div>
                </PremiumImageFrame>
              </div>

              <div className="absolute bottom-0 right-[8%] w-[55%] h-[42%] animate-fade-in" style={{ animationDelay: '580ms' }}>
                <PremiumImageFrame
                  src={mecanique1}
                  alt={t.home.hero.mosaic.teams.title}
                  ratio="aspect-auto h-full"
                  rounded="rounded-[1.5rem]"
                  tone="neutral"
                >
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-200">{t.home.hero.mosaic.teams.tag}</p>
                    <p className="text-base font-black tracking-tight">{t.home.hero.mosaic.teams.title}</p>
                  </div>
                </PremiumImageFrame>
              </div>

              <div className="absolute -bottom-2 left-[5%] z-20 rounded-2xl glass-premium p-4 animate-fade-in-up" style={{ animationDelay: '780ms' }}>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-200/90 mb-1">{t.home.hero.livePill}</p>
                <p className="text-2xl font-black text-white stat-number">96<span className="text-cyan-300">%</span></p>
                <p className="text-xs text-white/65">{t.home.hero.kpiLabel}</p>
              </div>
            </div>

            {/* Mobile : mini-mosaïque horizontale */}
            <div className="lg:hidden grid grid-cols-3 gap-2 mt-4">
              {[transport1, lavage1, mecanique1].map((src, i) => (
                <PremiumImageFrame
                  key={i}
                  src={src}
                  alt=""
                  ratio="aspect-square"
                  rounded="rounded-2xl"
                  tone={i === 1 ? 'warm' : 'cool'}
                  eager={i === 0}
                  priority={i === 0}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ============ STATS PREMIUM ============ */}
        <StatsBand
          eyebrow={t.home.stats.eyebrow}
          title={t.home.stats.title}
          description={t.home.stats.description}
          items={[
            { value: 30, suffix: '+', label: t.home.stats.items.projects.label, hint: t.home.stats.items.projects.hint, icon: Briefcase },
            { value: 8, label: t.home.stats.items.sectors.label, hint: t.home.stats.items.sectors.hint, icon: Layers },
            { value: 8, suffix: t.home.stats.items.cities.suffix, label: t.home.stats.items.cities.label, hint: t.home.stats.items.cities.hint, icon: MapPin },
            { value: 96, suffix: '%', label: t.home.stats.items.satisfaction.label, hint: t.home.stats.items.satisfaction.hint, icon: SparklesIcon },
          ]}
          className="bg-[#07111f] text-white"
          backdrop={<PremiumBackdrop variant="dark" intensity="soft" particles={10} showGrid={false} />}
        />

        {/* ============ SERVICES ============ */}
        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <Reveal preset="fadeUp">
              <div className="text-center mb-16">
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">{t.home.services.eyebrow}</p>
                <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-5">{t.home.services.title}</h2>
                <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
                  {t.home.services.description}
                </p>
              </div>
            </Reveal>
            <Reveal preset="fadeUp" childSelector=".service-card" stagger={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service) => (
                  <div key={service.title} className="service-card group rounded-3xl border border-outline-variant/40 bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary font-black overflow-hidden group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      {service.imageUrl ? (
                        <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                      ) : (
                        service.icon
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-on-surface">{service.title}</h3>
                    <p className="mt-3 text-on-surface-variant leading-relaxed">{service.description}</p>
                    <p className="mt-5 font-bold text-primary">{service.price}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span key={feature} className="rounded-full bg-surface-container-low px-3 py-1 text-xs font-semibold text-on-surface-variant">{feature}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ RÉALISATIONS — galerie dynamique ============ */}
        <section className="py-24 px-6 bg-[#07111f] text-white relative overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto relative">
            <div className="text-center mb-14 animate-fade-in">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-200 mb-4">{t.home.realisations.eyebrow}</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                {t.home.realisations.title}
              </h2>
              <p className="text-lg text-white/65 max-w-2xl mx-auto">
                {t.home.realisations.description}
              </p>
            </div>

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
                  {f === ALL_FILTER ? t.common.filterAll : f}
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
                {isAuthenticated ? t.home.realisations.ctaAuth : t.home.realisations.ctaGuest}
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
            <Reveal preset="fadeUp">
              <div className="text-center mb-14">
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">{t.home.sectors.eyebrow}</p>
                <h2 className="text-4xl md:text-5xl font-black text-on-surface">{t.home.sectors.title}</h2>
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
                  </Link>
                </TiltCard>
              ))}
            </div>
            </Reveal>
          </div>
        </section>

        {/* ============ TÉMOIGNAGES ============ */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-5xl font-bold text-center text-on-surface mb-16 animate-fade-in">
              {t.home.testimonials.title}
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

        <PartnersBand
          eyebrow={t.home.partners.eyebrow}
          title={t.home.partners.title}
          items={t.home.partners.items}
        />

        <section className="py-20 px-6 bg-gradient-to-r from-primary via-primary-container to-primary">
          <div className="max-w-[1400px] mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-bold text-on-primary mb-6">
              {ctaSection.title || t.home.cta.title}
            </h2>
            <p className="text-xl text-on-primary/90 mb-10 max-w-2xl mx-auto">
              {ctaSection.subtitle || t.home.cta.subtitle}
            </p>
            <div className="flex gap-4 flex-col sm:flex-row justify-center">
              {!localStorage.getItem('user') && (
                <button
                  onClick={() => navigate('/inscription')}
                  className="px-10 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {t.common.registerFree}
                </button>
              )}
              <button
                onClick={() => navigate('/contact')}
                className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
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