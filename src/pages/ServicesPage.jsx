import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Truck, Brush, Wrench, Bus } from 'lucide-react';
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
};

const defaultServices = [
  {
    icon: Icons.car,
    image: lavageCard,
    title: 'Lavage automobile & moto',
    description:
      "Nettoyage intérieur et extérieur premium, vitres, jantes, pneus, polissage. En centre ou en mobile à domicile pour les particuliers, et contrats flotte pour les entreprises.",
    href: '/lavage-auto/devis',
    sla: '45 – 90 min',
    badge: 'Populaire',
  },
  {
    icon: Icons.truck,
    image: demenagementCard,
    title: 'Déménagement & Aménagement',
    description:
      "Déménagement de particuliers, d'entreprises et institutionnels. Emballage, démontage / remontage, transport sécurisé Lomé – villes – sous-région CEDEAO.",
    href: '/demenagement/devis',
    sla: 'Sur rendez-vous',
    badge: 'Équipe dédiée',
  },
  {
    icon: Icons.building,
    image: bureauxCard,
    title: 'Entretien des bureaux',
    description:
      "Nettoyage professionnel régulier des bureaux, commerces, cliniques et écoles. Contrats journaliers / hebdomadaires avec reporting mensuel et contrôle qualité.",
    href: '/entretien/bureaux',
    sla: 'Journalier / hebdo',
    badge: 'Contrat pro',
  },
  {
    icon: Icons.wrench,
    image: mecaniqueCard,
    title: 'Mécanique automobile',
    description:
      "Atelier multimarques : entretien préventif, vidange, freins, suspension, climatisation, diagnostic électronique. Contrats flotte avec suivi par véhicule.",
    href: '/contact?topic=info&service=mecanique',
    sla: 'Devis 24h',
    badge: 'Atelier pro',
  },
  {
    icon: Icons.bus,
    image: transportCard,
    title: 'Transport & livraison',
    description:
      "Flotte de camions, utilitaires et VTC. Transport de marchandises, livraison du dernier kilomètre et déplacements professionnels au Togo et CEDEAO.",
    href: '/contact?topic=info&service=transport',
    sla: 'Lomé & sous-région',
    badge: 'Flotte propre',
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
        const icons = [Icons.car, Icons.truck, Icons.building, Icons.wrench, Icons.bus];
        const fallbackImages = [lavageCard, demenagementCard, bureauxCard, mecaniqueCard, transportCard];
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
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">Nos prestations</p>
            <h2 className="mt-3 text-4xl font-black text-on-surface">Cinq services, une seule promesse</h2>
            <p className="mt-3 max-w-2xl mx-auto text-on-surface-variant">
              Lavage, déménagement, entretien, mécanique et transport — un groupe multi-activités avec devis clair, équipe identifiée, délai annoncé et suivi après service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="interactive interactive-lift bg-white rounded-[2rem] shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col animate-fade-in-up border border-outline-variant/30 motion-reduce:hover:translate-y-0"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {service.image && (
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
                    <span className="absolute top-4 right-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-primary shadow">
                      {service.badge}
                    </span>
                    <span className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary shadow-lg ring-1 ring-black/5">
                      {service.icon}
                    </span>
                  </div>
                )}
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-on-surface mb-2">{service.title}</h3>
                  <p className="text-sm text-on-surface-variant mb-5 flex-grow">{service.description}</p>
                  <div className="mb-5 rounded-2xl bg-surface-container-low p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">Délai indicatif</p>
                    <p className="font-black text-primary">{service.sla}</p>
                  </div>
                  <button
                    onClick={() => navigate(service.href)}
                    className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-3 rounded-2xl font-bold text-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95"
                  >
                    Demander un devis →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engagement qualité - timeline horizontale propre */}
        <section className="bg-surface-container-low py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">Méthode</p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Du devis au suivi, un parcours clair</h2>
              <p className="mt-3 max-w-2xl mx-auto text-on-surface-variant">
                Nous appliquons la même méthode à chaque prestation pour garantir une qualité constante.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                ['01', 'Diagnostic', 'Lieu, volume, contraintes, délais et résultat attendu.'],
                ['02', 'Devis', 'Prix, périmètre, planning, équipe et conditions lisibles.'],
                ['03', 'Exécution', 'Checklist, matériel adapté et responsable identifié.'],
                ['04', 'Contrôle', 'Retour client, photos, suivi et corrections après prestation.'],
              ].map(([num, title, desc]) => (
                <div key={num} className="bg-white rounded-3xl border border-outline-variant/40 p-6 hover:shadow-md transition-all">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-black">{num}</span>
                  <h3 className="mt-4 text-lg font-black text-on-surface">{title}</h3>
                  <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi nous - simplifié */}
        <section className="py-20 max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { num: '24/7', title: 'Disponibilité', desc: 'Service disponible jour et nuit, 7 jours sur 7.' },
              { num: '100%', title: 'Professionnel', desc: 'Équipe certifiée, équipements adaptés et procédures claires.' },
              { num: 'Qualité', title: 'Suivi client', desc: 'Contrôle après intervention et retours documentés.' },
            ].map((item) => (
              <div key={item.title} className="text-center rounded-3xl border border-outline-variant/30 p-8">
                <div className="text-5xl font-black text-primary mb-3">{item.num}</div>
                <h3 className="text-xl font-black text-on-surface mb-2">{item.title}</h3>
                <p className="text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary to-primary-container py-20">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-on-primary mb-3">
              Prêt à transformer vos espaces ?
            </h2>
            <p className="text-lg text-on-primary/90 mb-8">
              Contactez-nous aujourd'hui pour un devis gratuit et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-2xl bg-on-primary text-primary px-8 py-4 font-bold hover:opacity-90 transition"
              >
                Demander un devis
              </Link>
              <Link
                to="/investissement"
                className="rounded-2xl border border-on-primary text-on-primary px-8 py-4 font-bold hover:bg-on-primary hover:text-primary transition inline-flex justify-center items-center"
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
