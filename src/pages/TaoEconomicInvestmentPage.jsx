import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import {
  Wallet,
  TrendingUp,
  Clock,
  Target,
  Handshake,
  ShieldCheck,
  Users,
  HeadphonesIcon,
  RefreshCw,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  LineChart,
  Lock,
  BarChart3,
} from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';
import { BRAND_NAME } from '../constants/branding';
import { normalizeSectors } from '../data/sectors-defaults';

const STAT_ICONS = [Wallet, TrendingUp, Clock, Target];

const DEFAULT_TGI = {
  title: BRAND_NAME,
  subtitle: 'Bâtissez votre indépendance financière',
  description:
    "Une opportunité transformative pour les investisseurs qui recherchent des rendements durables et un impact communautaire significatif à Lomé et au-delà.",
  stats: [
    { label: 'Investissement Minimum', value: '500K FCFA' },
    { label: 'Rendement Moyen', value: '150K FCFA/mois' },
    { label: 'Délai Retour', value: '10 mois' },
    { label: 'Retour Total Moyen', value: '2M FCFA' },
  ],
};

const PILLARS = [
  {
    icon: LineChart,
    title: 'Rentabilité économique',
    desc: "Des rendements attractifs basés sur des projets économiques viables, testés sur le marché togolais et suivis trimestriellement.",
    tone: 'from-blue-500/15 to-cyan-400/10',
  },
  {
    icon: HeartHandshake,
    title: 'Impact social',
    desc: "Création d'emplois locaux durables, soutien aux PME togolaises et développement de l'économie réelle dans nos régions.",
    tone: 'from-amber-500/15 to-orange-400/10',
  },
  {
    icon: Target,
    title: 'Indépendance financière',
    desc: "Atteignez votre liberté financière grâce à des revenus passifs réguliers, croissants et adossés à des actifs tangibles.",
    tone: 'from-emerald-500/15 to-teal-400/10',
  },
];

const BENEFITS = [
  { icon: ShieldCheck, title: 'Transparence totale', desc: "Accès complet aux rapports d'activité, documents contractuels et données d'investissement." },
  { icon: RefreshCw, title: 'Rendements réguliers', desc: 'Paiements mensuels structurés selon le contrat de votre programme.' },
  { icon: Users, title: 'Équipe expérimentée', desc: "Gestion professionnelle par des experts opérationnels du secteur." },
  { icon: HeadphonesIcon, title: 'Support dédié', desc: "Conseiller dédié, disponible pour répondre à vos questions et vous accompagner." },
  { icon: Handshake, title: 'Flexibilité', desc: "Options de retrait et de réinvestissement selon votre stratégie patrimoniale." },
  { icon: Sparkles, title: 'Impact social', desc: "Contribution au développement économique local et à la création d'emplois." },
];

export const TaoEconomicInvestmentPage = () => {
  const navigate = useNavigate();
  const { section } = useSiteContent();
  const tgi = section('investmentTgi') || section('investmentTie');

  const investmentStats = (tgi.stats?.length ? tgi.stats : DEFAULT_TGI.stats).map((s, i) => ({
    ...s,
    Icon: STAT_ICONS[i % STAT_ICONS.length],
  }));
  const heroTitle = tgi.title || DEFAULT_TGI.title;
  const heroSubtitle = tgi.subtitle || DEFAULT_TGI.subtitle;
  const heroDescription = tgi.description || DEFAULT_TGI.description;

  const sectors = normalizeSectors(section('sectors'));

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="investissement" />

      <main className="flex-grow pt-24">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden bg-[#07111f] py-24 px-6 text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,82,204,0.45),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(34,211,238,0.28),transparent_45%)]" />
            <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-blob-delay" />
            <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:48px_48px]" />
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto text-center animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-2 text-xs md:text-sm font-black uppercase tracking-[0.25em] text-cyan-100 backdrop-blur mb-6">
              <Sparkles className="h-4 w-4" /> Programme d'investissement TGI
            </span>
            <h1 className="text-5xl md:text-6xl font-black tracking-[-0.04em] mb-5 bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-transparent">
              {heroTitle}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-6">{heroSubtitle}</h2>
            <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto mb-10 leading-relaxed">
              {heroDescription}
            </p>
            <div className="flex gap-4 flex-col sm:flex-row justify-center">
              <button
                onClick={() => navigate('/contact?topic=invest')}
                className="rounded-2xl bg-white px-8 py-4 font-bold text-[#07111f] shadow-xl hover:scale-105 transition"
              >
                Nous contacter pour investir
              </button>
              <button
                onClick={() => navigate('/inscription')}
                className="rounded-2xl border border-white/25 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur hover:bg-white hover:text-[#07111f] transition"
              >
                Commencer à investir
              </button>
            </div>
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">Performance</p>
              <h2 className="text-4xl md:text-5xl font-black text-on-surface">Nos chiffres clés</h2>
              <p className="mt-4 text-lg text-on-surface-variant max-w-2xl mx-auto">
                Des indicateurs simples et transparents pour comprendre en un coup d'œil notre proposition.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {investmentStats.map((stat, idx) => {
                const { Icon } = stat;
                return (
                  <div
                    key={idx}
                    className="group relative overflow-hidden bg-white rounded-3xl p-8 border border-outline-variant/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/15 transition-colors duration-500" />
                    <div className="relative">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white shadow-lg mb-5">
                        <Icon className="h-7 w-7" strokeWidth={2.2} />
                      </div>
                      <p className="text-3xl md:text-4xl font-black text-on-surface mb-2 tracking-tight">{stat.value}</p>
                      <p className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ THREE PILLARS ============ */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">Notre philosophie</p>
              <h2 className="text-4xl md:text-5xl font-black text-on-surface">Les trois piliers de TGI</h2>
              <p className="mt-4 text-lg text-on-surface-variant max-w-2xl mx-auto">
                Rentabilité, impact et autonomie : nos décisions d'investissement reposent sur cet équilibre.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PILLARS.map((pillar, idx) => {
                const { icon: Icon, title, desc, tone } = pillar;
                return (
                  <div
                    key={title}
                    className={`group relative rounded-3xl border border-outline-variant/40 p-8 bg-gradient-to-br ${tone} bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 animate-fade-in-up`}
                    style={{ animationDelay: `${idx * 120}ms` }}
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-md ring-1 ring-black/5 mb-5">
                      <Icon className="h-7 w-7" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-2xl font-black text-on-surface mb-3">{title}</h3>
                    <p className="text-on-surface-variant leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ SECTORS ============ */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1300px] mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">Diversification</p>
              <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-4">Secteurs d'investissement</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
                Cinq secteurs stratégiques portés par TGI — chaque domaine dispose d'une page dédiée avec son contexte, son périmètre et ses opportunités.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {sectors.map((sector, idx) => (
                <Link
                  key={sector.slug || idx}
                  to={sector.slug ? `/secteurs/${sector.slug}` : '/secteurs'}
                  className="group relative overflow-hidden rounded-3xl border border-outline-variant/40 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up flex flex-col"
                  style={{ animationDelay: `${idx * 90}ms` }}
                >
                  {sector.image && (
                    <div className="relative h-56 overflow-hidden bg-surface-container-low">
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" aria-hidden="true" />
                      <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary shadow">
                        {sector.tag || 'Secteur'}
                      </span>
                      <span className="absolute top-4 right-4 text-2xl font-black text-white/90 drop-shadow">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="absolute bottom-4 left-4 right-4 text-xl md:text-2xl font-black text-white leading-tight drop-shadow-lg">
                        {sector.title}
                      </h3>
                    </div>
                  )}
                  <div className="flex-1 flex flex-col p-6">
                    <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-4 flex-grow">
                      {sector.short || sector.description || ''}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-outline-variant/30 pt-4">
                      <span className="text-xs font-black uppercase tracking-wider text-on-surface-variant">
                        Rendement {sector.range || '—'}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                        Découvrir <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                to="/secteurs"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-primary border border-primary/20 hover:bg-primary hover:text-white shadow-sm hover:shadow-lg transition-all"
              >
                Voir tous les secteurs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============ BENEFITS ============ */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">Pourquoi investir avec nous</p>
              <h2 className="text-4xl md:text-5xl font-black text-on-surface">Nos engagements</h2>
              <p className="mt-4 text-lg text-on-surface-variant max-w-2xl mx-auto">
                Une promesse simple : transparence, professionnalisme et accompagnement de bout en bout.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BENEFITS.map((benefit, idx) => {
                const { icon: Icon, title, desc } = benefit;
                return (
                  <div
                    key={title}
                    className="group bg-white rounded-3xl p-6 border border-outline-variant/40 hover:shadow-xl hover:border-primary/40 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 70}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="h-6 w-6" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-black text-on-surface mb-2">{title}</h4>
                        <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ TRUST STRIP ============ */}
        <section className="py-12 px-6 bg-surface-container-low border-y border-outline-variant/30">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { Icon: Lock, label: 'KYC & conformité' },
              { Icon: BarChart3, label: 'Reporting trimestriel' },
              { Icon: ShieldCheck, label: 'Contrats notariés' },
              { Icon: CheckCircle2, label: 'Suivi investisseur' },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <span className="text-sm font-bold text-on-surface">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary via-primary-container to-primary text-white">
          <div className="max-w-[1200px] mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-5">Prêt à commencer ?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {`Rejoignez les investisseurs qui construisent leur avenir financier avec ${BRAND_NAME}.`}
            </p>
            <div className="flex gap-4 flex-col sm:flex-row justify-center">
              <button
                onClick={() => navigate('/inscription')}
                className="rounded-2xl bg-white text-primary px-10 py-4 font-bold shadow-xl hover:scale-105 transition"
              >
                S'inscrire maintenant
              </button>
              <button
                onClick={() => navigate('/contact?topic=invest')}
                className="rounded-2xl border-2 border-white text-white px-10 py-4 font-bold hover:bg-white hover:text-primary transition"
              >
                Parler à un conseiller
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
