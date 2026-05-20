import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { mediaUrl } from '../config';
import { useSiteContent } from '../context/SiteContentContext';

const DEFAULT_ABOUT = {
  title: 'TAOMAN Groupe Investissement construit une plateforme de confiance.',
  description:
    'Notre ambition est de relier services terrain, investissement structuré, reporting et accompagnement client dans une expérience claire.',
  mission:
    "Offrir des services professionnels de qualité supérieure et créer des opportunités d'investissement transparentes qui transforment les vies de nos clients.",
  vision:
    "Être le leader régional dans la gestion d'investissements et les services professionnels, reconnu pour notre intégrité et notre excellence.",
  heroHighlights: [
    'Services opérationnels',
    'Investissement structuré',
    'Reporting investisseur',
    'Support humain',
  ],
  valuesTitle: 'Nos Valeurs Fondamentales',
  values: [
    { icon: '01', title: 'Excellence', description: 'Qualité irréprochable dans chaque service et investissement' },
    { icon: '02', title: 'Transparence', description: 'Communication claire et honnête avec tous nos partenaires' },
    { icon: '03', title: 'Innovation', description: 'Solutions modernes, mesurables et orientées données' },
    { icon: '04', title: 'Professionnalisme', description: 'Équipe expérimentée et certifiée' },
  ],
  timelineTitle: 'Notre Parcours',
  timeline: [
    { year: '2018', event: "Fondation de TAOMAN Groupe Investissement" },
    { year: '2020', event: "Lancement du programme d'investissement" },
    { year: '2022', event: '500K+ FCFA investis' },
    { year: '2024', event: 'Expansion régionale' },
  ],
  leadersTitle: 'Notre Équipe Dirigeante',
  leaders: [
    { name: 'Kofi Mensah', role: 'Directeur Général', bio: "Expert avec plus de 15 ans d'expérience dans le secteur financier.", photoUrl: '' },
    { name: 'Ama Osei', role: 'Directrice Financière', bio: "Expert avec plus de 15 ans d'expérience dans le secteur financier.", photoUrl: '' },
    { name: 'Benjamin Tano', role: 'Chef Opérations', bio: "Expert avec plus de 15 ans d'expérience dans le secteur financier.", photoUrl: '' },
  ],
  stats: [
    { number: '4', label: 'Pôles de services' },
    { number: '10', label: 'Mois de projection' },
    { number: '24h', label: 'Délai de réponse cible' },
    { number: 'PDF', label: 'Reporting investisseur' },
  ],
  cta: {
    title: "Rejoignez l'écosystème TAOMAN Groupe Investissement",
    description: 'Découvrez comment nous pouvons contribuer à votre succès.',
    buttonText: 'Commencer maintenant',
  },
};

function pick(api, key, fallback) {
  const v = api?.[key];
  return v !== undefined && v !== null && v !== '' ? v : fallback;
}

export const AboutPage = () => {
  const navigate = useNavigate();
  const { section } = useSiteContent();
  const raw = section('about') || {};
  const d = DEFAULT_ABOUT;

  const title = pick(raw, 'title', d.title);
  const description = raw.description || raw.subtitle || d.description;
  const mission = pick(raw, 'mission', d.mission);
  const vision = pick(raw, 'vision', d.vision);
  const heroHighlights = raw.heroHighlights?.length ? raw.heroHighlights : d.heroHighlights;
  const valuesTitle = pick(raw, 'valuesTitle', d.valuesTitle);
  const values = raw.values?.length ? raw.values : d.values;
  const timelineTitle = pick(raw, 'timelineTitle', d.timelineTitle);
  const timeline = raw.timeline?.length ? raw.timeline : d.timeline;
  const leadersTitle = pick(raw, 'leadersTitle', d.leadersTitle);
  const leaders = raw.leaders?.length ? raw.leaders : d.leaders;
  const stats = raw.stats?.length ? raw.stats : d.stats;
  const cta = { ...d.cta, ...(raw.cta || {}) };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="about" />

      <main className="flex-grow pt-24">
        <section className="relative overflow-hidden bg-[#07111f] py-24 px-6 text-white">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">À propos</p>
              <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] mb-6 animate-fade-in-up">{title}</h1>
              <p className="text-xl text-white/75 max-w-3xl animate-fade-in">{description}</p>
              {raw.imageUrl && (
                <img src={mediaUrl(raw.imageUrl)} alt="" className="mt-6 max-h-48 rounded-2xl object-cover" />
              )}
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <div className="grid gap-4">
                {heroHighlights.map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 p-5">
                    <p className="font-bold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group animate-fade-in-up">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white font-black">M</div>
              <h2 className="text-4xl font-bold text-on-surface mb-6">Notre Mission</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">{mission}</p>
            </div>
            <div className="group animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white font-black">V</div>
              <h2 className="text-4xl font-bold text-on-surface mb-6">Notre Vision</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">{vision}</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-5xl font-bold text-center text-on-surface mb-16 animate-fade-in">{valuesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-outline-variant/20 text-center group hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary font-black group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-on-surface mb-3">{value.title}</h3>
                  <p className="text-on-surface-variant">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-5xl font-bold text-center text-on-surface mb-16 animate-fade-in">{timelineTitle}</h2>
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-8 items-center animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className="flex-shrink-0 w-32 text-right">
                    <p className="text-4xl font-bold text-primary">{item.year}</p>
                  </div>
                  <div className="flex-shrink-0 w-1 h-16 bg-primary rounded-full"></div>
                  <div className="flex-grow">
                    <p className="text-xl text-on-surface font-semibold">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-5xl font-bold text-center text-on-surface mb-16 animate-fade-in">{leadersTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {leaders.map((member, idx) => (
                <div key={idx} className="text-center group animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-primary to-primary-container rounded-[2rem] overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {member.photoUrl ? (
                      <img src={mediaUrl(member.photoUrl)} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white">
                        <p className="text-6xl font-black">
                          {member.name.split(' ').map((part) => part[0]).join('')}
                        </p>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-on-surface mb-2">{member.name}</h3>
                  <p className="text-primary font-bold mb-4">{member.role}</p>
                  <p className="text-on-surface-variant">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-r from-primary to-primary-container">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-on-primary">
            {stats.map((stat, idx) => (
              <div key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <p className="text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-on-primary/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="text-4xl font-bold text-on-surface mb-6">{cta.title}</h2>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">{cta.description}</p>
            <button
              onClick={() => navigate('/inscription')}
              className="px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {cta.buttonText}
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
