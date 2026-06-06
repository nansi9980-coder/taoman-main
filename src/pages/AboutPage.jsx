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
  ClipboardCheck,
  BarChart3,
  Lock,
  Scale,
} from 'lucide-react';
import { mediaUrl } from '../config';
import { useSiteContent } from '../context/SiteContentContext';
import { useSiteFeatures } from '../hooks/useSiteFeatures';
import { useLanguage } from '../context/LanguageContext';
import { BRAND_NAME } from '../constants/branding';
import { SeoHead, buildBreadcrumb } from '../components/SeoHead';
import { Reveal } from '../components/Reveal';
import { PremiumBackdrop } from '../components/PremiumBackdrop';
import { PhotoHeroBackground } from '../components/PhotoHeroBackground';
import { HERO_MEDIA_SPECS } from '../constants/heroMedia';
import { pickLocale } from '../utils/pickLocale';

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
  values: [
    { icon: '01', title: 'Excellence', description: 'Qualité irréprochable dans chaque service et investissement.' },
    { icon: '02', title: 'Transparence', description: 'Communication claire et honnête avec tous nos partenaires.' },
    { icon: '03', title: 'Innovation', description: 'Solutions modernes, mesurables et orientées données.' },
    { icon: '04', title: 'Professionnalisme', description: 'Équipe expérimentée et certifiée.' },
  ],
  timeline: [
    { year: '2018', event: `Fondation de ${BRAND_NAME}` },
    { year: '2020', event: "Lancement du programme d'investissement" },
    { year: '2022', event: '500K+ FCFA investis' },
    { year: '2024', event: 'Expansion régionale' },
  ],
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
};

const VALUE_ICONS = [Award, ShieldCheck, Lightbulb, Users];
const STAT_ICONS = [Layers3, Clock, ArrowRight, FileText];
const GOVERNANCE_ICONS = [Scale, ClipboardCheck, BarChart3, Lock];

function pick(api, key, fallback) {
  const v = api?.[key];
  return v !== undefined && v !== null && v !== '' ? v : fallback;
}

export const AboutPage = () => {
  const navigate = useNavigate();
  const { content: tc, nav: tNav, language } = useLanguage();
  const tAbout = tc.about;
  const { section } = useSiteContent();
  const { leadersSectionVisible } = useSiteFeatures();
  const raw = section('about') || {};
  const d = DEFAULT_ABOUT;

  const title = pickLocale(language, raw.title, tAbout.title || d.title);
  const description = pickLocale(language, raw.description || raw.subtitle, tAbout.description || d.description);
  const mission = pickLocale(language, raw.mission, tAbout.mission?.body || d.mission);
  const vision = pickLocale(language, raw.vision, tAbout.vision?.body || d.vision);
  const heroHighlights = pickLocale(language, raw.heroHighlights, tAbout.hero?.highlights) || d.heroHighlights;
  const values =
    pickLocale(language, raw.values, tAbout.values?.items) || d.values;
  const timeline = pickLocale(language, raw.timeline, tAbout.timeline?.items) || d.timeline;
  const leaders =
    (pickLocale(language, raw.leaders, tAbout.leaders?.items) || d.leaders).map((leader, idx) => ({
      ...leader,
      photoUrl: leader.photoUrl || d.leaders[idx]?.photoUrl || '',
    }));
  const stats = pickLocale(language, raw.stats, tAbout.stats?.items) || d.stats;

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <SeoHead
        title={tNav.about}
        description={tAbout.seoDescription}
        path="/about"
        jsonLd={buildBreadcrumb([
          { name: tNav.home, path: '/' },
          { name: tNav.about, path: '/about' },
        ])}
      />
      <Header activeLink="about" />

      <main id="main-content" className="flex-grow pt-24">
        {/* ============ HERO PREMIUM ============ */}
        <section id="profile" className="relative overflow-hidden min-h-[45vh] md:min-h-[50vh] flex items-center py-20 px-6 text-white">
          <PhotoHeroBackground
            src={HERO_MEDIA_SPECS.about.src}
            objectPosition={HERO_MEDIA_SPECS.about.objectPosition}
            overlayVariant={HERO_MEDIA_SPECS.about.overlayVariant}
            overlayIntensity="strong"
          />

          <div className="relative z-10 max-w-[1400px] mx-auto grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/40 bg-[#020d1a]/55 px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-cyan-100 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={2.4} /> {tAbout.hero.eyebrow}
              </span>
              <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-[-0.04em] leading-[1.05] bg-gradient-to-r from-cyan-100 via-white to-cyan-100 bg-clip-text text-transparent">
                {title}
              </h1>
              <p className="mt-6 text-xl text-white/90 max-w-3xl leading-relaxed">{description}</p>
              {raw.imageUrl && (
                <img src={mediaUrl(raw.imageUrl)} alt="" className="mt-6 max-h-48 rounded-2xl object-cover" loading="lazy" decoding="async" />
              )}
            </div>
            <div className="rounded-[2rem] glass-premium p-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200 mb-4">{tAbout.hero.commitmentsLabel}</p>
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

        {/* ============ MISSION & VISION ============ */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal preset="fadeUp">
              <div className="rounded-[2rem] border border-outline-variant/40 bg-white p-8 hover:shadow-xl transition-all h-full">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white shadow-md">
                  <Target className="h-7 w-7" strokeWidth={2.2} />
                </span>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-primary">{tAbout.mission.eyebrow}</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-black text-on-surface">{tAbout.mission.title}</h2>
                <p className="mt-5 text-lg text-on-surface-variant leading-relaxed">{mission}</p>
              </div>
            </Reveal>
            <Reveal preset="fadeUp">
              <div className="rounded-[2rem] border border-outline-variant/40 bg-white p-8 hover:shadow-xl transition-all h-full">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white shadow-md">
                  <Eye className="h-7 w-7" strokeWidth={2.2} />
                </span>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-primary">{tAbout.vision.eyebrow}</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-black text-on-surface">{tAbout.vision.title}</h2>
                <p className="mt-5 text-lg text-on-surface-variant leading-relaxed">{vision}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ VALEURS ============ */}
        <section id="values" className="py-20 px-6 bg-gradient-to-b from-surface-container-low to-surface">
          <div className="max-w-[1400px] mx-auto">
            <Reveal preset="fadeUp">
              <div className="text-center mb-12">
                <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-primary">
                  <Award className="h-4 w-4" strokeWidth={2.4} /> {tAbout.values.eyebrow}
                </p>
                <h2 className="mt-3 text-4xl md:text-5xl font-black text-on-surface tracking-tight">
                  {tAbout.values.title}
                </h2>
              </div>
            </Reveal>
            <Reveal preset="fadeUp" childSelector=".value-card" stagger={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, idx) => {
                  const Icon = VALUE_ICONS[idx % VALUE_ICONS.length];
                  return (
                    <div
                      key={idx}
                      className="value-card group bg-white p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/40 hover:border-primary/30 hover:-translate-y-1"
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
            </Reveal>
          </div>
        </section>

        {/* ============ GOUVERNANCE — NOUVELLE SECTION ============ */}
        <section id="governance" className="relative overflow-hidden py-24 px-6 text-white">
          <PremiumBackdrop variant="dark" intensity="soft" particles={10} showGrid={false} />

          <div className="relative z-10 max-w-[1400px] mx-auto">
            <Reveal preset="fadeUp">
              <div className="text-center mb-14">
                <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
                  <Scale className="h-4 w-4" strokeWidth={2.4} /> {tAbout.governance.eyebrow}
                </p>
                <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-cyan-100 via-white to-cyan-100 bg-clip-text text-transparent">
                  {tAbout.governance.title}
                </h2>
                <p className="mt-5 max-w-3xl mx-auto text-lg text-white/75 leading-relaxed">
                  {tAbout.governance.description}
                </p>
              </div>
            </Reveal>

            <Reveal preset="fadeUp" childSelector=".gov-card" stagger={0.12}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {tAbout.governance.pillars.map((pillar, idx) => {
                  const Icon = GOVERNANCE_ICONS[idx % GOVERNANCE_ICONS.length];
                  return (
                    <div
                      key={idx}
                      className="gov-card group rounded-3xl glass-premium p-6 hover:bg-white/10 transition-all duration-500 premium-halo"
                    >
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-200 ring-1 ring-cyan-200/30 mb-5">
                        <Icon className="h-6 w-6" strokeWidth={2.2} />
                      </span>
                      <h3 className="text-xl font-black tracking-tight text-white mb-3">{pillar.title}</h3>
                      <p className="text-sm leading-relaxed text-white/75">{pillar.description}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ TIMELINE ============ */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1100px] mx-auto">
            <Reveal preset="fadeUp">
              <div className="text-center mb-12">
                <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-primary">
                  <Calendar className="h-4 w-4" strokeWidth={2.4} /> {tAbout.timeline.eyebrow}
                </p>
                <h2 className="mt-3 text-4xl md:text-5xl font-black text-on-surface tracking-tight">
                  {tAbout.timeline.title}
                </h2>
              </div>
            </Reveal>
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

        {/* ============ DIRIGEANTS ============ */}
        {leadersSectionVisible && (
        <section id="leaders" className="py-20 px-6 bg-gradient-to-b from-surface-container-low to-surface">
          <div className="max-w-[1400px] mx-auto">
            <Reveal preset="fadeUp">
              <div className="text-center mb-12">
                <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-primary">
                  <Briefcase className="h-4 w-4" strokeWidth={2.4} /> {tAbout.leaders.eyebrow}
                </p>
                <h2 className="mt-3 text-4xl md:text-5xl font-black text-on-surface tracking-tight">
                  {tAbout.leaders.title}
                </h2>
              </div>
            </Reveal>
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
                          <img src={mediaUrl(member.photoUrl)} alt={member.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
        )}

        {/* ============ STATS PREMIUM ============ */}
        <section className="relative overflow-hidden py-20 px-6 text-white">
          <PremiumBackdrop variant="dark" intensity="normal" particles={12} />

          <div className="relative z-10 max-w-[1400px] mx-auto">
            <Reveal preset="fadeUp">
              <div className="text-center mb-12">
                <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
                  <TrendingUp className="h-4 w-4" strokeWidth={2.4} /> {tAbout.stats.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-cyan-100 via-white to-cyan-100 bg-clip-text text-transparent">
                  {tAbout.stats.title}
                </h2>
              </div>
            </Reveal>
            <Reveal preset="fadeUp" childSelector=".stat-card" stagger={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {stats.map((stat, idx) => {
                  const Icon = STAT_ICONS[idx % STAT_ICONS.length];
                  return (
                    <div
                      key={idx}
                      className="stat-card rounded-3xl glass-premium p-6 text-center premium-halo"
                    >
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-200 ring-1 ring-cyan-200/30 mb-4">
                        <Icon className="h-6 w-6" strokeWidth={2.2} />
                      </span>
                      <p className="text-5xl md:text-6xl font-black tracking-tight stat-number" style={{ color: '#ffffff' }}>
                        {stat.number}
                      </p>
                      <p className="mt-2 text-sm md:text-base font-medium text-white/80">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto text-center rounded-[2rem] border border-outline-variant/40 bg-gradient-to-br from-surface-container-low to-white p-12 shadow-sm">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white shadow-md mx-auto">
              <Sparkles className="h-7 w-7" strokeWidth={2.2} />
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-black text-on-surface">{tAbout.cta.title}</h2>
            <p className="mt-4 text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">{tAbout.cta.description}</p>
            <button
              onClick={() => navigate('/inscription')}
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {tAbout.cta.button} <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
