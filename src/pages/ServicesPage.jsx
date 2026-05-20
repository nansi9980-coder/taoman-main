import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { API_URL, mediaUrl } from '../config';

const Icons = {
  car: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </svg>
  ),
  truck: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 18.5a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5M3 6h12v6H3zm-2 10h2a3 3 0 013 3v2h1v-2a2 2 0 00-2-2H1m0-4h16V5H3v7z"/>
    </svg>
  ),
  building: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
    </svg>
  ),
  ac: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
    </svg>
  )
};

const defaultServices = [
  { icon: Icons.car, title: "Lavage automobile & moto", description: "Nettoyage intérieur, extérieur, vitres, roues, pneus et finition premium.", href: '/lavage-auto/devis', sla: '45-90 min', badge: 'Populaire' },
  { icon: Icons.truck, title: "Déménagement & Aménagement", description: "Transport sécurisé, manutention, emballage, planification et installation.", href: '/demenagement/devis', sla: 'Sur rendez-vous', badge: 'Équipe dédiée' },
  { icon: Icons.building, title: "Entretien des bureaux", description: "Nettoyage régulier, hygiène, consommables, contrôle qualité et reporting.", href: '/entretien/bureaux', sla: 'Journalier / hebdo', badge: 'Contrat pro' },
  { icon: Icons.ac, title: "Entretien climatisation", description: "Installation, maintenance, diagnostic, nettoyage et réparation de climatiseurs.", href: '/entretien/climatisation', sla: '24-48h', badge: 'Technique' }
];

const hrefByTitle = {
  lavage: '/lavage-auto/devis',
  déménagement: '/demenagement/devis',
  bureaux: '/entretien/bureaux',
  climatisation: '/entretien/climatisation',
};

function resolveHref(title = '') {
  const lower = title.toLowerCase();
  const key = Object.keys(hrefByTitle).find((k) => lower.includes(k));
  return key ? hrefByTitle[key] : `/services/${encodeURIComponent(title)}`;
}

export const ServicesPage = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState(defaultServices);

  useEffect(() => {
    fetch(`${API_URL}/content/services`)
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) return;
        const icons = [Icons.car, Icons.truck, Icons.building, Icons.ac];
        setServices(
          data.filter((s) => s.published !== false).map((s, i) => ({
            id: s.id,
            icon: icons[i % icons.length],
            imageUrl: s.imageUrl ? mediaUrl(s.imageUrl) : null,
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
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#07111f] py-24 px-6 text-white">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">Services opérationnels</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] text-white mb-6">
              Des services terrain clairs, rapides et suivis.
            </h1>
            <p className="text-xl text-white/75 mb-8 max-w-3xl">
              TAOMAN Groupe Investissement combine équipes terrain, devis structurés, qualité contrôlée et suivi client pour les particuliers, entreprises et investisseurs.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => navigate('/contact')}
                className="rounded-2xl bg-white px-8 py-4 font-bold text-[#07111f] shadow-xl hover:scale-105"
              >
                Demander un devis
              </button>
              <button
                onClick={() => navigate('/investissement')}
                className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur hover:bg-white hover:text-[#07111f]"
              >
                Voir l'investissement
              </button>
            </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">Engagement qualité</p>
              <div className="mt-6 grid gap-4">
                {['Devis clair', 'Équipe identifiée', 'Délai annoncé', 'Suivi après service'].map((item, idx) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 font-black text-[#07111f]">{idx + 1}</span>
                    <p className="font-bold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-xxl max-w-[1400px] mx-auto px-lg w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className="bg-white rounded-[2rem] shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col animate-fade-in-up border border-outline-variant/30" style={{animationDelay: `${index * 50}ms`}}>
                <div className="p-7 flex flex-col h-full">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="text-primary text-4xl group-hover:scale-110 transition-transform duration-300 w-14 h-14 flex items-center justify-center overflow-hidden rounded-2xl">
                      {service.imageUrl ? (
                        <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
                      ) : (
                        service.icon
                      )}
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{service.badge}</span>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface mb-2">{service.title}</h3>
                  <p className="text-sm text-on-surface-variant mb-5 flex-grow">{service.description}</p>
                  <div className="mb-6 rounded-2xl bg-surface-container-low p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">Délai indicatif</p>
                    <p className="font-black text-primary">{service.sla}</p>
                  </div>
                  <button
                    onClick={() => navigate(service.href)}
                    className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-3 rounded-2xl font-bold text-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Demander un devis →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Portfolio */}
        <section className="bg-surface-container-low py-xxl">
          <div className="max-w-[1200px] mx-auto px-lg">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">Méthode</p>
              <h2 className="text-4xl font-black text-on-surface">Un service plus clair du devis au suivi</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              {[
                { title: 'Diagnostic du besoin', desc: 'Nous clarifions le lieu, le volume, les contraintes, les délais et le résultat attendu.' },
                { title: 'Devis structuré', desc: 'Prix, périmètre, planning, équipe et conditions sont présentés de façon lisible.' },
                { title: 'Exécution terrain', desc: 'L’équipe intervient avec une checklist, du matériel adapté et un responsable identifié.' },
                { title: 'Contrôle qualité', desc: 'Retour client, photos, suivi et corrections éventuelles après prestation.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-outline-variant/30">
                  <h3 className="text-2xl text-on-surface font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant mb-5">
                    {item.desc}
                  </p>
                  <button
                    onClick={() => navigate('/contact')}
                    className="text-primary font-bold text-body-md hover:underline"
                  >
                    Parler à l'équipe →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-xxl max-w-[1200px] mx-auto px-lg">
          <h2 className="text-headline-lg text-on-surface font-bold mb-xl text-center">
            Pourquoi nous choisir?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
            {[
              { num: '24/7', title: 'Disponibilité', desc: 'Service disponible jour et nuit, 7 jours sur 7' },
              { num: '100%', title: 'Professionnel', desc: 'Équipe certifiée et expérimentée' },
              { num: 'Qualité', title: 'Suivi client', desc: 'Contrôle après intervention et retours documentés' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-primary mb-md">{item.num}</div>
                <h3 className="text-headline-md text-on-surface font-bold mb-md">
                  {item.title}
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-xxl">
          <div className="max-w-[1200px] mx-auto px-lg text-center">
            <h2 className="text-headline-lg text-on-primary font-bold mb-md">
              Prêt à transformer vos espaces?
            </h2>
            <p className="text-body-lg text-on-primary/90 mb-xl">
              Contactez-nous dès aujourd'hui pour un devis gratuit et sans engagement.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-on-primary text-primary px-xl py-md rounded-lg font-label-md font-bold hover:opacity-90 transition-all"
            >
              Demander un devis
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};