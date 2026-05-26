import { useEffect, useState } from 'react';
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
} from 'lucide-react';
import { API_URL, mediaUrl } from '../config';
import { useSiteContent } from '../context/SiteContentContext';
import { PhotoSlider } from '../components/PhotoSlider';
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
};

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
  const sp = section('servicesPage');
  const heroBadge = sp.badge || DEFAULT_SERVICES_PAGE.badge;
  const heroTitle = sp.title || DEFAULT_SERVICES_PAGE.title;
  const heroDesc = sp.description || DEFAULT_SERVICES_PAGE.description;
  const btn1 = sp.btn1 || DEFAULT_SERVICES_PAGE.btn1;
  const btn2 = sp.btn2 || DEFAULT_SERVICES_PAGE.btn2;
  const [services, setServices] = useState(defaultServices);

  useEffect(() => {
    fetch(`${API_URL}/content/services`)
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) return;
        const icons = [Icons.car, Icons.truck, Icons.building, Icons.wrench, Icons.bus, Icons.snow, Icons.shield];
        const fallbackImages = [lavageCard, demenagementCard, bureauxCard, mecaniqueCard, transportCard, lavageCard2, mecaniqueCard];
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
              sla: s.actionText || 'Sur devis',
              badge: s.published ? 'Disponible' : 'Bientôt',
            }))
        );
      })
      .catch(() => {});
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background pt-[80px]">
      <Header activeLink="services" />

      <main className="flex-grow">
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
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">Nos prestations</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-on-surface">Sept services, une seule promesse</h2>
            <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg leading-relaxed">
              Lavage auto, déménagement, entretien de bureaux, mécanique automobile, transport, climatisation et conciergerie : un groupe multi-activités avec devis clair, équipe identifiée, délai annoncé et suivi après service. Chaque prestation est encadrée par un chef de chantier et un responsable client dédié.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="interactive interactive-lift bg-white rounded-[2rem] shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full flex flex-col animate-fade-in-up border border-outline-variant/30 motion-reduce:hover:translate-y-0"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {service.image && (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
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
                        <p className="text-[10px] uppercase tracking-[0.18em] text-on-surface-variant font-bold">Délai</p>
                        <p className="font-black text-primary text-sm mt-1">{service.sla}</p>
                      </div>
                      <div className="rounded-2xl bg-surface-container-low p-3 border border-outline-variant/30">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-on-surface-variant font-bold">Tarif</p>
                        <p className="font-black text-on-surface text-sm mt-1">{service.priceFrom || 'Sur devis'}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate(service.href)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-container text-white py-3 rounded-2xl font-bold text-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
                    >
                      Demander un devis <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ EXPLICATIONS DÉTAILLÉES ============ */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">En profondeur</p>
              <h2 className="text-4xl md:text-5xl font-black text-on-surface">Comprendre nos métiers</h2>
              <p className="mt-4 text-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
                Au-delà du devis, nous croyons à la transparence : voici comment nous travaillons, ce que nous incluons,
                et pourquoi nos clients renouvellent leurs contrats avec TAOMAN Group Investment.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  Icon: Sparkles,
                  title: 'Lavage automobile & moto',
                  intro: "Notre centre de lavage TAOMAN combine équipements professionnels, produits adaptés à chaque type de carrosserie et personnel formé.",
                  points: [
                    "Trois formules : Express (15 min), Premium (45 min, intérieur + extérieur), Complet (90 min avec polish et protection).",
                    "Service mobile à domicile sur rendez-vous, avec eau et matériel apportés par l'équipe.",
                    "Contrats flotte mensuels pour entreprises : tarif dégressif, planning fixe, reporting photographique.",
                    "Produits biodégradables certifiés et eau recyclée — démarche écologique réelle.",
                  ],
                },
                {
                  Icon: Truck,
                  title: 'Déménagement & aménagement',
                  intro: "Un déménagement bien préparé représente 80 % de la réussite. Nous appliquons un protocole strict de la visite technique au remontage final.",
                  points: [
                    "Visite technique gratuite à domicile : mesure du volume, identification des objets fragiles, repérage des accès.",
                    "Fourniture incluse : cartons standards et grands modèles, papier bulle, couvertures, sangles, diables.",
                    "Démontage des meubles, transport sécurisé en camion bâché, remontage et réinstallation chez vous.",
                    "Trajets longue distance Lomé – Kara – Atakpamé – Cotonou – Accra avec assurance marchandise incluse.",
                  ],
                },
                {
                  Icon: Brush,
                  title: 'Entretien de bureaux',
                  intro: "Un environnement de travail propre booste la productivité. Nos contrats sont conçus pour s'intégrer sans perturber votre activité.",
                  points: [
                    "Passage journalier (matin avant ouverture), hebdomadaire ou bi-hebdomadaire selon votre besoin.",
                    "Prestations incluses : sols, surfaces, sanitaires, vitres, vidage corbeilles, désinfection des points de contact.",
                    "Équipes en uniforme TAOMAN, identifiables, et superviseur dédié joignable 24/7.",
                    "Reporting mensuel avec photos avant/après, suivi qualité et plan d'amélioration trimestriel.",
                  ],
                },
                {
                  Icon: Wrench,
                  title: 'Mécanique automobile',
                  intro: "Notre atelier multimarques traite véhicules thermiques et hybrides avec outils de diagnostic récents et techniciens certifiés.",
                  points: [
                    "Entretien préventif : vidange, filtres, courroie, freins, suspension, climatisation, distribution.",
                    "Diagnostic électronique OBD pour identifier les pannes complexes (moteur, ABS, ESP, airbag).",
                    "Devis transparent avant intervention, pièces neuves ou reconditionnées au choix.",
                    "Contrats flotte avec carnet d'entretien digital par véhicule et rappels automatiques.",
                  ],
                },
                {
                  Icon: Bus,
                  title: 'Transport & livraison',
                  intro: "Notre flotte couvre toute la chaîne logistique du dernier kilomètre au transport international vers la sous-région CEDEAO.",
                  points: [
                    "Livraison du dernier kilomètre à Lomé : utilisation de motos, fourgons et VTC selon le volume.",
                    "Transport B2B vers Cotonou, Accra, Ouagadougou, Niamey, Abidjan avec dédouanement coordonné.",
                    "Suivi GPS en temps réel, confirmation de livraison signée et preuve photo si demandé.",
                    "Tarification kilométrique transparente, sans frais cachés.",
                  ],
                },
                {
                  Icon: Snowflake,
                  title: 'Climatisation & froid',
                  intro: "Le climat togolais exige des installations adaptées et un entretien régulier pour garantir performance et longévité.",
                  points: [
                    "Installation neuve : étude thermique, choix du modèle (split, multi-split, VRV), pose certifiée.",
                    "Maintenance préventive : nettoyage filtres, vérification gaz, contrôle des sécurités électriques.",
                    "Dépannage rapide avec stock de pièces des principales marques disponibles à Lomé.",
                    "Contrats annuels pour bureaux, commerces, restaurants et chambres froides avec passages programmés.",
                  ],
                },
                {
                  Icon: ShieldCheck,
                  title: 'Conciergerie & gardiennage',
                  intro: "Sécurité physique, accueil et entretien des espaces communs : un service unique pour vos immeubles et résidences.",
                  points: [
                    "Gardiennage 24/7 avec relève d'équipe, registre d'entrée/sortie et rondes signées.",
                    "Accueil visiteurs, gestion des accès, distribution du courrier et signalement des incidents.",
                    "Petite manutention, jardinage, entretien des parties communes (escaliers, hall, parking).",
                    "Coordination directe avec le syndic ou le propriétaire via une application mobile dédiée.",
                  ],
                },
              ].map((cat, idx) => {
                const { Icon, title, intro, points } = cat;
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
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">Méthode</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-black text-on-surface">Du devis au suivi, un parcours clair</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-on-surface-variant">
                Nous appliquons la même méthode à chaque prestation pour garantir une qualité constante.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { Icon: ClipboardCheck, num: '01', title: 'Diagnostic', desc: 'Lieu, volume, contraintes, délais et résultat attendu — analysé sur place ou à distance.' },
                { Icon: Award, num: '02', title: 'Devis', desc: 'Prix, périmètre, planning, équipe et conditions lisibles, sans frais cachés.' },
                { Icon: Users, num: '03', title: 'Exécution', desc: 'Checklist, matériel adapté et responsable identifié sur le terrain.' },
                { Icon: CheckCircle2, num: '04', title: 'Contrôle', desc: 'Retour client, photos avant/après, suivi et corrections post-prestation.' },
              ].map(({ Icon, num, title, desc }, idx) => (
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
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi nous */}
        <section className="py-20 px-6 bg-[#07111f] text-white relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
          <div className="max-w-[1200px] mx-auto relative">
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">Pourquoi TAOMAN</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-black">Trois engagements simples</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
                Disponibilité, professionnalisme et suivi : nos trois piliers de qualité.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                { Icon: Clock, num: '24/7', title: 'Disponibilité', desc: 'Service disponible jour et nuit, 7 jours sur 7, support WhatsApp et téléphone.' },
                { Icon: Award, num: '100%', title: 'Professionnel', desc: 'Équipe formée et identifiée, équipements adaptés, procédures qualité claires.' },
                { Icon: CheckCircle2, num: 'Qualité', title: 'Suivi client', desc: 'Contrôle après intervention, photos documentées et retours intégrés au plan de progrès.' },
              ].map(({ Icon, num, title, desc }, idx) => (
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
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary to-primary-container py-20 px-6">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-on-primary mb-4">
              Prêt à transformer vos espaces ?
            </h2>
            <p className="text-lg md:text-xl text-on-primary/90 mb-10 max-w-2xl mx-auto">
              Contactez-nous aujourd'hui pour un devis gratuit et sans engagement. Notre équipe vous rappelle dans la journée.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-on-primary text-primary px-8 py-4 font-bold hover:scale-105 hover:shadow-xl transition"
              >
                Demander un devis <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact?topic=info"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-on-primary text-on-primary px-8 py-4 font-bold hover:bg-on-primary hover:text-primary transition"
              >
                <Phone className="h-4 w-4" /> Nous appeler
              </Link>
              <Link
                to="/investissement"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/15 backdrop-blur text-on-primary px-8 py-4 font-bold hover:bg-white/25 transition border border-on-primary/30"
              >
                Voir l'investissement
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
