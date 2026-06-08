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
import { useLanguage } from '../context/LanguageContext';
import { BRAND_NAME } from '../constants/branding';
import { normalizeSectors, resolveSectorImage } from '../data/sectors-defaults';
import { resolveInvestmentTgiSection } from '../utils/siteContent';
import { SeoHead, buildBreadcrumb } from '../components/SeoHead';
import { Reveal } from '../components/Reveal';
import { getTgiPageContent } from '../i18n/tgi-page';
import { VideoHeroBackground } from '../components/VideoHeroBackground';
import { HERO_MEDIA_SPECS } from '../constants/heroMedia';

const STAT_ICONS = [Wallet, TrendingUp, Clock, Target];
const PILLAR_ICONS = [LineChart, HeartHandshake, Target];
const BENEFIT_ICONS = [ShieldCheck, RefreshCw, Users, HeadphonesIcon, Handshake, Sparkles];

export const TaoEconomicInvestmentPage = () => {
  const navigate = useNavigate();
  const { section, cmsReady } = useSiteContent();
  const { translations: tc, language, nav: tNav } = useLanguage();
  const tT = tc?.tgi || {};
  const tCommon = tc?.common || {};
  const tgiPage = getTgiPageContent(language);
  const tgi = resolveInvestmentTgiSection(section);

  const statsSource = !cmsReady
    ? []
    : tgi.stats?.length
      ? tgi.stats
      : tgiPage.stats;
  const investmentStats = statsSource.map((s, i) => ({
    ...s,
    Icon: STAT_ICONS[i % STAT_ICONS.length],
  }));
  const pillars = tgiPage.pillars.map((p, i) => ({
    ...p,
    icon: PILLAR_ICONS[i % PILLAR_ICONS.length],
  }));
  const benefits = tgiPage.benefits.map((b, i) => ({
    ...b,
    icon: BENEFIT_ICONS[i % BENEFIT_ICONS.length],
  }));
  const heroTitle = tgi.title || tT.hero?.title || BRAND_NAME;
  const heroSubtitle = tgi.subtitle || tgiPage.defaultHero.subtitle;
  const heroDescription = tgi.description || tgiPage.defaultHero.description;

  const sectors = normalizeSectors(section('sectors')).map((s) => ({
    ...s,
    image: resolveSectorImage(s),
  }));

  const breadcrumbLd = buildBreadcrumb([
    { name: tNav.home || 'Accueil', path: '/' },
    { name: tNav.investment || 'Investissement', path: '/investissement' },
    { name: 'TGI', path: '/investissement/tgi' },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <SeoHead
        title={tT.hero?.title || 'Programme TGI — Investir au Togo'}
        description={tT.seoDescription || "TAOMAN GROUP INVESTMENTS TGI : programme d'investissement structuré au Togo. Rendement moyen 150K FCFA/mois, ticket dès 500K FCFA, retour total moyen 1,5M FCFA sur 10 mois."}
        path="/investissement/tgi"
        jsonLd={breadcrumbLd}
        keywords="TGI Togo, investissement Togo, rendement, TAOMAN GROUP INVESTMENTS, 500K FCFA, programme investissement"
      />
      <Header activeLink="investissement" />

      <main id="main-content" className="flex-grow pt-24">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden min-h-[42vh] md:min-h-[48vh] flex items-center py-24 px-6 text-white">
          <VideoHeroBackground
            src={HERO_MEDIA_SPECS.tgi.video}
            poster={HERO_MEDIA_SPECS.tgi.poster}
            objectPosition={HERO_MEDIA_SPECS.tgi.objectPosition}
            overlayVariant={HERO_MEDIA_SPECS.tgi.overlayVariant}
            fallbackSources={[HERO_MEDIA_SPECS.tgi.video]}
            playLabel={tCommon.playVideo || 'Lancer la vidéo'}
            clearBackground
          />

          <div className="relative z-10 max-w-[1200px] mx-auto text-center animate-fade-in-up [text-shadow:0_2px_20px_rgba(0,0,0,0.85)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-2 text-xs md:text-sm font-black uppercase tracking-[0.25em] text-cyan-100 backdrop-blur mb-6">
              <Sparkles className="h-4 w-4" /> {tT.hero?.badge || "Programme d'investissement TGI"}
            </span>
            <h1 className="text-5xl md:text-6xl font-black tracking-[-0.04em] mb-5 bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
              {heroTitle}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">{heroSubtitle}</h2>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              {heroDescription}
            </p>
            <div className="flex gap-4 flex-col sm:flex-row justify-center">
              <button
                onClick={() => navigate('/contact?topic=invest')}
                className="rounded-2xl bg-white px-8 py-4 font-bold text-[#07111f] shadow-xl hover:scale-105 transition"
              >
                {tCommon.contactInvest || 'Nous contacter pour investir'}
              </button>
              <button
                onClick={() => navigate('/inscription')}
                className="rounded-2xl border border-white/25 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur hover:bg-white hover:text-[#07111f] transition"
              >
                {tCommon.registerFree || 'Commencer à investir'}
              </button>
            </div>
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto">
            <Reveal preset="fadeUp">
              <div className="text-center mb-14">
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">{tT.stats?.eyebrow || 'Performance'}</p>
                <h2 className="text-4xl md:text-5xl font-black text-on-surface">{tT.stats?.title || 'Nos chiffres clés'}</h2>
                <p className="mt-4 text-lg text-on-surface-variant max-w-2xl mx-auto">
                  {tgiPage.statsIntro}
                </p>
              </div>
            </Reveal>
            <Reveal preset="scale" childSelector=".stat-card" stagger={0.12}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {!cmsReady && (
                Array.from({ length: 4 }).map((_, idx) => (
                  <div
                    key={`skeleton-${idx}`}
                    className="h-48 rounded-3xl border border-outline-variant/40 bg-white animate-pulse"
                  />
                ))
              )}
              {cmsReady && investmentStats.map((stat, idx) => {
                const { Icon } = stat;
                return (
                  <div
                    key={idx}
                    className="stat-card group relative overflow-hidden bg-white rounded-3xl p-8 border border-outline-variant/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
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
            </Reveal>
          </div>
        </section>

        {/* ============ THREE PILLARS ============ */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">{tT.pillars?.eyebrow || 'Notre philosophie'}</p>
              <h2 className="text-4xl md:text-5xl font-black text-on-surface">{tT.pillars?.title || 'Les trois piliers de TGI'}</h2>
              <p className="mt-4 text-lg text-on-surface-variant max-w-2xl mx-auto">
                {tgiPage.pillarsIntro}
              </p>
            </div>
            <Reveal preset="fadeUp" childSelector=".pillar-card" stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar) => {
                const { icon: Icon, title, desc, tone } = pillar;
                return (
                  <div
                    key={title}
                    className={`pillar-card group relative rounded-3xl border border-outline-variant/40 p-8 bg-gradient-to-br ${tone} bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500`}
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
            </Reveal>
          </div>
        </section>

        {/* ============ SECTORS ============ */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1300px] mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">{tT.sectors?.eyebrow || 'Diversification'}</p>
              <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-4">{tT.sectors?.title || "Secteurs d'investissement"}</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
                Sept domaines stratégiques portés par TGI — chaque domaine dispose d'une page dédiée avec son contexte, son périmètre et ses opportunités.
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
                        {tT.sectors?.returnLabel || 'Rendement'} {sector.range || '—'}
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
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">{tT.benefits?.eyebrow || 'Pourquoi investir avec nous'}</p>
              <h2 className="text-4xl md:text-5xl font-black text-on-surface">{tT.benefits?.title || 'Nos engagements'}</h2>
              <p className="mt-4 text-lg text-on-surface-variant max-w-2xl mx-auto">
                Une promesse simple : transparence, professionnalisme et accompagnement de bout en bout.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => {
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
            <h2 className="text-4xl md:text-5xl font-black mb-5">{tT.cta?.title || 'Prêt à commencer ?'}</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {tT.cta?.description || `Rejoignez les investisseurs qui construisent leur avenir financier avec ${BRAND_NAME}.`}
            </p>
            <div className="flex gap-4 flex-col sm:flex-row justify-center">
              <button
                onClick={() => navigate('/inscription')}
                className="rounded-2xl bg-white text-primary px-10 py-4 font-bold shadow-xl hover:scale-105 transition"
              >
                {tCommon.registerFree || "S'inscrire maintenant"}
              </button>
              <button
                onClick={() => navigate('/contact?topic=invest')}
                className="rounded-2xl border-2 border-white text-white px-10 py-4 font-bold hover:bg-white hover:text-primary transition"
              >
                {tT.cta?.button || 'Parler à un conseiller'}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
