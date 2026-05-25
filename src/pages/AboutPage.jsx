import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import {
  Target,
  Eye,
  Award,
  ShieldCheck,
  Lightbulb,
  Users,
  Briefcase,
  Calendar,
  Layers3,
  Clock,
  FileText,
  ArrowRight,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { mediaUrl } from '../config';
import { useSiteContent } from '../context/SiteContentContext';
import { BRAND_NAME } from '../constants/branding';

const DEFAULT_ABOUT = {
  title: `${BRAND_NAME} : votre partenaire stratégique au Togo.`,
  description:
    'Nous pilotons et finançons des projets structurants — infrastructures, énergie, agro, mines, logistique, numérique et tourisme — en mobilisant capitaux, partenariats public-privé et exécution terrain.',
  mission:
    "Attirer les investissements, structurer des partenariats public-privé et accompagner des projets à fort impact économique pour le Togo et la sous-région.",
  vision:
    "Faire du Togo une plateforme économique et logistique majeure en Afrique de l'Ouest, avec transparence, gouvernance et reporting investisseur.",
  heroHighlights: [
    'Services opérationnels',
    'Investissement structuré',
    'Reporting investisseur',
    'Support humain',
  ],
  valuesTitle: 'Nos Valeurs Fondamentales',
  values: [
    { icon: '01', title: 'Excellence', description: 'Qualité irréprochable dans chaque service et investissement.' },
    { icon: '02', title: 'Transparence', description: 'Communication claire et honnête avec tous nos partenaires.' },
    { icon: '03', title: 'Innovation', description: 'Solutions modernes, mesurables et orientées données.' },
    { icon: '04', title: 'Professionnalisme', description: 'Équipe expérimentée et certifiée.' },
  ],
  timelineTitle: 'Notre Parcours',
  timeline: [
    { year: '2018', event: `Fondation de ${BRAND_NAME}` },
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
    title: `Rejoignez l'écosystème ${BRAND_NAME}`,
    description: 'Découvrez comment nous pouvons contribuer à votre succès.',
    buttonText: 'Commencer maintenant',
  },
};

const VALUE_ICONS = [Award, ShieldCheck, Lightbulb, Users];
const STAT_ICONS = [Layers3, Clock, ArrowRight, FileText];

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
        {/* HERO – fonctionne en clair & sombre */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#08111d] via-[#0d1a30] to-[#08111d] py-24 px-6 text-white">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/40 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-[1400px] mx-auto grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-cyan-200 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={2.4} /> À propos
              </span>
              <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-[-0.04em] leading-[1.05] text-white">
                {title}
              </h1>
              <p className="mt-6 text-xl text-white/80 max-w-3xl leading-relaxed">{description}</p>
              {raw.imageUrl && (
                <img src={mediaUrl(raw.imageUrl)} alt="" className="mt-6 max-h-48 rounded-2xl object-cover" />
              )}
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200 mb-4">Nos engagements</p>
              <div className="grid gap-3">
                {heroHighlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/8 border border-white/10 p-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shrink-0">
                      <ShieldCheck className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                    <p className="font-bold text-white text-sm md:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[2rem] border border-outline-variant/40 bg-white p-8 hover:shadow-xl transition-all">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white shadow-md">
                <Target className="h-7 w-7" strokeWidth={2.2} />
              </span>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-primary">Notre Mission</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-black text-on-surface">
                Ce que nous faisons, chaque jour.
              </h2>
              <p className="mt-5 text-lg text-on-surface-variant leading-relaxed">{mission}</p>
            </div>
            <div className="rounded-[2rem] border border-outline-variant/40 bg-white p-8 hover:shadow-xl transition-all">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white shadow-md">
                <Eye className="h-7 w-7" strokeWidth={2.2} />
              </span>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-primary">Notre Vision</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-black text-on-surface">
                Où nous voulons aller.
              </h2>
              <p className="mt-5 text-lg text-on-surface-variant leading-relaxed">{vision}</p>
            </div>
          </div>
        </section>

        {/* VALEURS */}
        <section className="py-20 px-6 bg-gradient-to-b from-surface-container-low to-surface">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-primary">
                <Award className="h-4 w-4" strokeWidth={2.4} /> Nos piliers
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl font-black text-on-surface tracking-tight">
                {valuesTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => {
                const Icon = VALUE_ICONS[idx % VALUE_ICONS.length];
                return (
                  <div
                    key={idx}
                    className="group bg-white p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/40 hover:border-primary/30 hover:-translate-y-1"
                  >
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-container group-hover:text-white transition-all">
                      <Icon className="h-6 w-6" strokeWidth={2.2} />
                    </span>
                    <h3 className="mt-5 text-xl font-black text-on-surface">{value.title}</h3>
                    <p className="mt-2 text-on-surface-variant leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-12">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-primary">
                <Calendar className="h-4 w-4" strokeWidth={2.4} /> Étapes clés
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl font-black text-on-surface tracking-tight">
                {timelineTitle}
              </h2>
            </div>
            <ol className="relative border-l-2 border-primary/30 pl-8 space-y-8">
              {timeline.map((item, idx) => (
                <li key={idx} className="relative">
                  <span className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-container text-white text-xs font-black shadow-md ring-4 ring-surface">
                    {idx + 1}
                  </span>
                  <div className="rounded-2xl border border-outline-variant/40 bg-white p-5 hover:shadow-md transition-all">
                    <p className="text-sm font-black text-primary">{item.year}</p>
                    <p className="mt-1 text-lg text-on-surface font-semibold leading-snug">{item.event}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* DIRIGEANTS */}
        <section className="py-20 px-6 bg-gradient-to-b from-surface-container-low to-surface">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-primary">
                <Briefcase className="h-4 w-4" strokeWidth={2.4} /> Comité de direction
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl font-black text-on-surface tracking-tight">
                {leadersTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leaders.map((member, idx) => {
                const initials = member.name
                  .split(' ')
                  .map((part) => part[0])
                  .filter(Boolean)
                  .slice(0, 2)
                  .join('');
                return (
                  <div
                    key={idx}
                    className="rounded-3xl border border-outline-variant/40 bg-white p-7 text-center hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    <div className="relative mx-auto mb-6 w-40 h-40">
                      <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-primary/30 to-cyan-400/20 blur-xl" aria-hidden="true" />
                      <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary to-primary-container shadow-lg ring-1 ring-black/5">
                        {member.photoUrl ? (
                          <img src={mediaUrl(member.photoUrl)} alt={member.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-5xl font-black tracking-tight" style={{ color: '#ffffff' }}>
                              {initials}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-on-surface">{member.name}</h3>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-primary font-bold text-sm">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" /> {member.role}
                    </p>
                    <p className="mt-4 text-on-surface-variant leading-relaxed">{member.bio}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* STATS – contraste corrigé, fonctionne en clair et sombre */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary via-primary-container to-primary text-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-white/85">
                <TrendingUp className="h-4 w-4" strokeWidth={2.4} /> En chiffres
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight" style={{ color: '#ffffff' }}>
                TAOMAN Group Investment en un coup d'œil
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {stats.map((stat, idx) => {
                const Icon = STAT_ICONS[idx % STAT_ICONS.length];
                return (
                  <div
                    key={idx}
                    className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur p-6 text-center hover:bg-white/15 transition-all"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white mb-4">
                      <Icon className="h-6 w-6" strokeWidth={2.2} />
                    </span>
                    <p className="text-5xl md:text-6xl font-black tracking-tight" style={{ color: '#ffffff' }}>
                      {stat.number}
                    </p>
                    <p className="mt-2 text-sm md:text-base font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto text-center rounded-[2rem] border border-outline-variant/40 bg-gradient-to-br from-surface-container-low to-white p-12 shadow-sm">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white shadow-md mx-auto">
              <Sparkles className="h-7 w-7" strokeWidth={2.2} />
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-black text-on-surface">{cta.title}</h2>
            <p className="mt-4 text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">{cta.description}</p>
            <button
              onClick={() => navigate('/inscription')}
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {cta.buttonText} <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
