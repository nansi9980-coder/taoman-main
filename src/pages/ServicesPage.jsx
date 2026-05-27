import { useEffect, useMemo, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Truck,
  Brush,
  Wrench,
  Bus,
  Snowflake,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Phone,
  Clock,
  Users,
  ClipboardCheck,
  Award,
  BarChart3,
} from 'lucide-react';
import { API_URL, mediaUrl } from '../config';
import { useSiteContent } from '../context/SiteContentContext';
import { PhotoSlider } from '../components/PhotoSlider';
import { SeoHead, buildServiceLd } from '../components/SeoHead';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';
import { getServicesTranslations } from '../i18n/services';
import lavageCard from '../assets/realisations/lavage1.jpg';
import lavageCard2 from '../assets/realisations/lavage2.jpg';
import demenagementCard from '../assets/realisations/transport2.jpg';
import bureauxCard from '../assets/realisations/mecanique1.png';
import mecaniqueCard from '../assets/realisations/mecanique2.jpg';
import transportCard from '../assets/realisations/transport1.jpg';

const Icons = {
  car: <Sparkles className="w-6 h-6" strokeWidth={2.2} />,
  truck: <Truck className="w-6 h-6" strokeWidth={2.2} />,
  building: <Brush className="w-6 h-6" strokeWidth={2.2} />,
  wrench: <Wrench className="w-6 h-6" strokeWidth={2.2} />,
  bus: <Bus className="w-6 h-6" strokeWidth={2.2} />,
  snow: <Snowflake className="w-6 h-6" strokeWidth={2.2} />,
  shield: <ShieldCheck className="w-6 h-6" strokeWidth={2.2} />,
  audit: <BarChart3 className="w-6 h-6" strokeWidth={2.2} />,
};

const SERVICE_ID_TO_ICON = {
  lavage: Icons.car,
  demenagement: Icons.truck,
  'entretien-bureaux': Icons.building,
  mecanique: Icons.wrench,
  transport: Icons.bus,
  climatisation: Icons.snow,
  conciergerie: Icons.shield,
  audits: Icons.audit,
};
const DETAILED_ICONS = {
  lavage: Sparkles,
  demenagement: Truck,
  'entretien-bureaux': Brush,
  mecanique: Wrench,
  transport: Bus,
  climatisation: Snowflake,
  conciergerie: ShieldCheck,
  audits: BarChart3,
};
const SERVICE_ID_TO_HREF = {
  lavage: '/lavage-auto/devis',
  demenagement: '/demenagement/devis',
  'entretien-bureaux': '/entretien/bureaux',
  mecanique: '/contact?topic=info&service=mecanique',
  transport: '/contact?topic=info&service=transport',
  climatisation: '/contact?topic=info&service=climatisation',
  conciergerie: '/contact?topic=info&service=conciergerie',
  audits: '/contact?topic=info&service=audit',
};
const SERVICE_ID_TO_IMAGE = {};

SERVICE_ID_TO_IMAGE.lavage = lavageCard;
SERVICE_ID_TO_IMAGE.demenagement = demenagementCard;
SERVICE_ID_TO_IMAGE['entretien-bureaux'] = bureauxCard;
SERVICE_ID_TO_IMAGE.mecanique = mecaniqueCard;
SERVICE_ID_TO_IMAGE.transport = transportCard;
SERVICE_ID_TO_IMAGE.climatisation = lavageCard2;
SERVICE_ID_TO_IMAGE.conciergerie = mecaniqueCard;
SERVICE_ID_TO_IMAGE.audits = bureauxCard;

// eslint-disable-next-line no-unused-vars
const defaultServices = [
  {
    icon: Icons.car,
    image: lavageCard,
    title: 'Lavage automobile & moto',
    description:
      "Nettoyage intérieur et extérieur premium, vitres, jantes, pneus, polissage carrosserie. En centre TAOMAN ou en mobile à domicile pour les particuliers, et contrats flotte multi-véhicules pour les entreprises et institutions.",
    href: '/lavage-auto/devis',
    sla: '45 – 90 min',
    badge: 'Populaire',
    bullets: [
      'Lavage extérieur + intérieur complet',
      'Polish, lustrage et protection carrosserie',
      'Contrats flotte avec planning hebdomadaire',
    ],
    priceFrom: 'Dès 3 500 FCFA',
  },
  {
    icon: Icons.truck,
    image: demenagementCard,
    title: 'Déménagement & aménagement',
    description:
      "Déménagement de particuliers, d'entreprises et institutionnels. Emballage, démontage / remontage du mobilier, transport sécurisé Lomé – villes intérieures – sous-région CEDEAO. Visite technique gratuite à domicile.",
    href: '/demenagement/devis',
    sla: 'Sur rendez-vous',
    badge: 'Équipe dédiée',
    bullets: [
      'Visite technique gratuite et devis détaillé',
      'Cartons, papier bulle et couvertures fournis',
      "Trajet Lomé – Kara – Cotonou – Accra disponible",
    ],
    priceFrom: 'Dès 45 000 FCFA',
  },
  {
    icon: Icons.building,
    image: bureauxCard,
    title: 'Entretien des bureaux',
    description:
      "Nettoyage professionnel régulier de bureaux, commerces, cliniques et écoles. Contrats journaliers, hebdomadaires ou mensuels avec reporting photo, contrôle qualité terrain et superviseur dédié.",
    href: '/entretien/bureaux',
    sla: 'Journalier / hebdo',
    badge: 'Contrat pro',
    bullets: [
      'Équipe identifiée en uniforme TAOMAN',
      'Produits écologiques et matériel professionnel',
      'Reporting mensuel et contrôle qualité',
    ],
    priceFrom: 'Sur devis',
  },
  {
    icon: Icons.wrench,
    image: mecaniqueCard,
    title: 'Mécanique automobile',
    description:
      "Atelier multimarques TAOMAN : entretien préventif, vidange, freins, suspension, embrayage, climatisation auto, diagnostic électronique OBD. Contrats flotte avec carnet de suivi par véhicule.",
    href: '/contact?topic=info&service=mecanique',
    sla: 'Devis 24h',
    badge: 'Atelier pro',
    bullets: [
      'Diagnostic électronique multimarques',
      'Pièces neuves ou reconditionnées',
      'Suivi flotte avec carnet d’entretien digital',
    ],
    priceFrom: 'Devis transparent',
  },
  {
    icon: Icons.bus,
    image: transportCard,
    title: 'Transport & livraison',
    description:
      "Flotte de camions, fourgons, utilitaires et VTC. Transport de marchandises B2B, livraison du dernier kilomètre, déplacements professionnels et navettes inter-villes au Togo et dans la sous-région CEDEAO.",
    href: '/contact?topic=info&service=transport',
    sla: 'Lomé & sous-région',
    badge: 'Flotte propre',
    bullets: [
      'Livraison du dernier kilomètre à Lomé',
      'Transport B2B vers Cotonou, Accra, Ouaga',
      'Suivi GPS et confirmation de livraison',
    ],
    priceFrom: 'Tarifs km',
  },
  {
    icon: Icons.snow,
    image: lavageCard2,
    title: 'Climatisation & froid',
    description:
      "Installation, entretien et dépannage de climatiseurs split et VRV pour bureaux, commerces et résidences. Maintenance de vitrines réfrigérées et chambres froides pour restaurateurs et distributeurs.",
    href: '/contact?topic=info&service=climatisation',
    sla: 'Intervention 48h',
    badge: 'Maintenance',
    bullets: [
      'Installation split et VRV résidentiel / pro',
      'Recharge gaz et nettoyage filtres',
      'Contrats maintenance préventive',
    ],
    priceFrom: 'Dès 15 000 FCFA',
  },
  {
    icon: Icons.shield,
    image: mecaniqueCard,
    title: 'Conciergerie & gardiennage',
    description:
      "Services de conciergerie pour résidences, immeubles et entreprises : gardiennage, accueil visiteurs, gestion courrier, petite manutention, jardinage et entretien des parties communes.",
    href: '/contact?topic=info&service=conciergerie',
    sla: '24/7 disponible',
    badge: 'Nouveau',
    bullets: [
      'Gardiennage jour / nuit',
      'Accueil visiteurs et gestion accès',
      'Conciergerie d’immeuble clés en main',
    ],
    priceFrom: 'Sur devis',
  },
  {
    icon: Icons.audit,
    image: bureauxCard,
    title: 'Audits & Reporting',
    description:
      "Audits financiers, opérationnels et conformité KYC pour PME, investisseurs et institutions. Reporting structuré (mensuel, trimestriel, annuel) conforme aux standards SYSCOA et CEDEAO. Tableaux de bord investisseur, alertes de performance et accompagnement à la gouvernance.",
    href: '/contact?topic=info&service=audit',
    sla: '7 – 21 jours',
    badge: 'Conformité',
    bullets: [
      'Audit financier et opérationnel des PME',
      'Reporting investisseur structuré (PDF + tableaux de bord)',
      'Conformité KYC, AML, SYSCOA et CEDEAO',
    ],
    priceFrom: 'Sur devis',
  },
];

const HERO_SLIDES = [
  { src: lavageCard, alt: 'Centre de lavage TAOMAN', label: 'Centre de lavage auto & moto', category: 'Lavage' },
  { src: lavageCard2, alt: 'Parking client TAOMAN', label: 'Parking client – activité commerciale', category: 'Lavage' },
  { src: demenagementCard, alt: 'Camion de déménagement TAOMAN', label: 'Camion de déménagement TAOMAN', category: 'Déménagement' },
  { src: transportCard, alt: 'Conducteur TAOMAN', label: 'Conducteur TAOMAN sur le terrain', category: 'Transport' },
  { src: mecaniqueCard, alt: 'Atelier mécanique TAOMAN', label: 'Atelier mécanique multimarques', category: 'Mécanique' },
  { src: bureauxCard, alt: 'Équipe terrain TAOMAN', label: 'Équipe terrain TAOMAN', category: 'Équipe' },
];

const hrefByTitle = {
  lavage: '/lavage-auto/devis',
  déménagement: '/demenagement/devis',
  bureaux: '/entretien/bureaux',
  mécanique: '/contact?topic=info&service=mecanique',
  transport: '/contact?topic=info&service=transport',
};

function resolveHref(title = '') {
  const lower = title.toLowerCase();
  const key = Object.keys(hrefByTitle).find((k) => lower.includes(k));
  return key ? hrefByTitle[key] : `/services/${encodeURIComponent(title)}`;
}

const DEFAULT_SERVICES_PAGE = {
  badge: 'Services opérationnels',
  title: 'Des services terrain clairs, rapides et suivis.',
  description:
    'TAOMAN Group Investment combine équipes terrain, devis structurés, qualité contrôlée et suivi client pour les particuliers, entreprises et investisseurs.',
  btn1: 'Demander un devis',
  btn2: "Voir l'investissement",
};

export const ServicesPage = () => {
  const navigate = useNavigate();
  const { section } = useSiteContent();
  const { content: tc, language } = useLanguage();
  const tServ = tc.services;
  const tServExt = useMemo(() => getServicesTranslations(language), [language]);
  const sp = section('servicesPage');
  const heroBadge = sp.badge || DEFAULT_SERVICES_PAGE.badge;
  const heroTitle = sp.title || DEFAULT_SERVICES_PAGE.title;
  const heroDesc = sp.description || DEFAULT_SERVICES_PAGE.description;
  const btn1 = sp.btn1 || tServExt.finalCta.btnQuote;
  const btn2 = sp.btn2 || tServExt.finalCta.btnInvest;

  const translatedDefaults = useMemo(
    () =>
      tServExt.items.map((it) => ({
        id: it.id,
        icon: SERVICE_ID_TO_ICON[it.id] || Icons.car,
        image: SERVICE_ID_TO_IMAGE[it.id] || lavageCard,
        title: it.title,
        description: it.description,
        href: SERVICE_ID_TO_HREF[it.id] || `/services/${it.id}`,
        sla: it.sla,
        badge: it.badge,
        bullets: it.bullets,
        priceFrom: it.priceFrom,
      })),
    [tServExt]
  );

  const [services, setServices] = useState(translatedDefaults);

  useEffect(() => {
    setServices(translatedDefaults);
  }, [translatedDefaults]);

  useEffect(() => {
    fetch(`${API_URL}/content/services`)
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) return;
        const icons = [Icons.car, Icons.truck, Icons.building, Icons.wrench, Icons.bus, Icons.snow, Icons.shield, Icons.audit];
        const fallbackImages = [lavageCard, demenagementCard, bureauxCard, mecaniqueCard, transportCard, lavageCard2, mecaniqueCard, bureauxCard];
        setServices(
          data
            .filter((s) => s.published !== false)
            .map((s, i) => ({
              id: s.id,
              icon: icons[i % icons.length],
              image: s.imageUrl ? mediaUrl(s.imageUrl) : fallbackImages[i % fallbackImages.length],
              title: s.title,
              description: s.description,
              href: s.actionLink || (s.id ? `/services/${s.id}` : resolveHref(s.title)),
              sla: s.actionText || tServExt.labels.priceFromFallback,
              badge: s.published ? tServExt.labels.badgeAvailable : tServExt.labels.badgeSoon,
            }))
        );
      })
      .catch(() => {});
  }, [tServExt]);

  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Services TAOMAN Group Investment',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: buildServiceLd({ name: s.title, description: s.description, image: s.image }),
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pt-[80px]">
      <SeoHead
        title={tServ.hero.title}
        description="Lavage auto, déménagement, entretien de bureaux, mécanique automobile, transport, climatisation, conciergerie — 7 services TAOMAN Group Investment au Togo et CEDEAO."
        path="/services"
        jsonLd={servicesJsonLd}
        keywords="services Togo, lavage auto Lomé, déménagement Lomé, entretien bureaux, mécanique auto, transport Togo, climatisation, conciergerie"
      />
      <Header activeLink="services" />

      <main id="main-content" className="flex-grow">
        <section className="relative overflow-hidden bg-[#07111f] py-20 px-6 text-white">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">{heroBadge}</p>
              <h1 className="text-4xl md:text-6xl font-black tracking-[-0.04em] text-white mb-6">{heroTitle}</h1>
              <p className="text-lg text-white/75 mb-8 max-w-2xl">{heroDesc}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => navigate('/contact')}
                  className="rounded-2xl bg-white px-7 py-3.5 font-bold text-[#07111f] shadow-xl hover:scale-105 transition"
                >
                  {btn1}
                </button>
                <button
                  onClick={() => navigate('/investissement')}
                  className="rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur hover:bg-white hover:text-[#07111f] transition"
                >
                  {btn2}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-cyan-300/20 blur-2xl" aria-hidden="true"></div>
              <PhotoSlider
                slides={HERO_SLIDES}
                aspectRatio="photo"
                height=""
                rounded="rounded-[2rem]"
                className="ring-1 ring-white/20"
              />
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 max-w-[1400px] mx-auto px-6 w-full">
          <Reveal preset="fadeUp">
            <div className="mb-12 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">{tServ.hero.eyebrow}</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-black text-on-surface">{tServ.sectionTitle}</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg leading-relaxed">
                {tServ.hero.description}
              </p>
            </div>
          </Reveal>
          <Reveal preset="fadeUp" childSelector=".service-grid-card" stagger={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service) => (
              <div
                key={service.title}
                className="service-grid-card interactive interactive-lift bg-white rounded-[2rem] shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full flex flex-col border border-outline-variant/30 motion-reduce:hover:translate-y-0"
              >
                {service.image && (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <span className="absolute top-4 right-4 rounded-full bg-cyan-300 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#07111f] shadow">
                      {service.badge}
                    </span>
                    <span className="absolute bottom-4 left-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary shadow-lg ring-1 ring-black/5">
                      {service.icon}
                    </span>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-black text-on-surface mb-2">{service.title}</h3>
                  <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">{service.description}</p>
                  {service.bullets && (
                    <ul className="space-y-1.5 mb-5">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-on-surface">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.2} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-auto">
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="rounded-2xl bg-surface-container-low p-3 border border-outline-variant/30">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-on-surface-variant font-bold">{tServExt.labels.timeLabel}</p>
                        <p className="font-black text-primary text-sm mt-1">{service.sla}</p>
                      </div>
                      <div className="rounded-2xl bg-surface-container-low p-3 border border-outline-variant/30">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-on-surface-variant font-bold">{tServExt.labels.priceLabel}</p>
                        <p className="font-black text-on-surface text-sm mt-1">{service.priceFrom || tServExt.labels.priceFromFallback}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate(service.href)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-container text-white py-3 rounded-2xl font-bold text-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
                    >
                      {tServExt.labels.requestQuoteCta} <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </Reveal>
        </section>

        {/* ============ EXPLICATIONS DÉTAILLÉES ============ */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black text-on-surface">{tServ.detailedTitle}</h2>
              <p className="mt-4 text-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
                {tServExt.detailed.description}
              </p>
            </div>

            <div className="space-y-6">
              {tServExt.detailed.items.map((cat, idx) => {
                const Icon = DETAILED_ICONS[cat.id] || Sparkles;
                const { title, intro, points } = cat;
                return (
                  <details
                    key={title}
                    className="group bg-white rounded-3xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-lg transition-shadow animate-fade-in-up"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    <summary className="flex items-center gap-4 p-5 cursor-pointer list-none hover:bg-surface-container-low transition-colors">
                      <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-open:bg-primary group-open:text-white transition-colors">
                        <Icon className="h-6 w-6" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-black text-on-surface">{title}</h3>
                        <p className="text-sm text-on-surface-variant line-clamp-1 group-open:line-clamp-none">{intro}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-on-surface-variant transition-transform group-open:rotate-90 flex-shrink-0" />
                    </summary>
                    <div className="px-5 pb-6 pt-2 border-t border-outline-variant/30 bg-gradient-to-br from-surface to-surface-container-low">
                      <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                        {points.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-on-surface leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.2} />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
        </section>

        {/* Méthode - timeline horizontale */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-14 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">{tServExt.method.eyebrow}</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-black text-on-surface">{tServExt.method.title}</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-on-surface-variant">
                {tServExt.method.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {tServExt.method.steps.map((step, idx) => {
                const stepIcons = [ClipboardCheck, Award, Users, CheckCircle2];
                const Icon = stepIcons[idx] || ClipboardCheck;
                const num = String(idx + 1).padStart(2, '0');
                const { title, desc } = step;
                return (
                  <div
                    key={num}
                    className="bg-white rounded-3xl border border-outline-variant/40 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white shadow">
                        <Icon className="h-5 w-5" strokeWidth={2.2} />
                      </span>
                      <span className="text-3xl font-black text-primary/40">{num}</span>
                    </div>
                    <h3 className="text-lg font-black text-on-surface mb-2">{title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pourquoi nous */}
        <section className="py-20 px-6 bg-[#07111f] text-white relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
          <div className="max-w-[1200px] mx-auto relative">
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">{tServExt.whyUs.eyebrow}</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-black">{tServExt.whyUs.title}</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
                {tServExt.whyUs.description}
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {tServExt.whyUs.items.map((item, idx) => {
                const whyIcons = [Clock, Award, CheckCircle2];
                const whyNums = ['24/7', '100%', '★'];
                const Icon = whyIcons[idx] || Clock;
                const num = whyNums[idx] || '';
                const { title, desc } = item;
                return (
                  <div
                    key={title}
                    className="text-center rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-8 hover:bg-white/10 hover:scale-105 transition-all duration-500 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 120}ms` }}
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/20 text-cyan-200 mb-5">
                      <Icon className="h-7 w-7" strokeWidth={2.2} />
                    </div>
                    <div className="text-4xl font-black text-cyan-200 mb-2">{num}</div>
                    <h3 className="text-xl font-black mb-2">{title}</h3>
                    <p className="text-white/70 leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary to-primary-container py-20 px-6">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-on-primary mb-4">
              {tServExt.finalCta.title}
            </h2>
            <p className="text-lg md:text-xl text-on-primary/90 mb-10 max-w-2xl mx-auto">
              {tServExt.finalCta.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-on-primary text-primary px-8 py-4 font-bold hover:scale-105 hover:shadow-xl transition"
              >
                {tServExt.finalCta.btnQuote} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact?topic=info"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-on-primary text-on-primary px-8 py-4 font-bold hover:bg-on-primary hover:text-primary transition"
              >
                <Phone className="h-4 w-4" /> {tServExt.finalCta.btnCall}
              </Link>
              <Link
                to="/investissement"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/15 backdrop-blur text-on-primary px-8 py-4 font-bold hover:bg-white/25 transition border border-on-primary/30"
              >
                {tServExt.finalCta.btnInvest}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
