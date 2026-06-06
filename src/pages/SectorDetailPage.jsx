import { Link, Navigate, useParams } from 'react-router-dom';
import {
  ChevronRight,
  Target,
  Compass,
  Briefcase,
  Coins,
  Handshake,
  FileText,
  Users,
  Wallet,
  MapPin,
  ArrowRight,
  ClipboardCheck,
  Send,
  MessageCircle,
  Building2,
  ShieldCheck,
  TrendingUp,
  Layers3,
  CalendarClock,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useSiteContent } from '../context/SiteContentContext';
import { useLanguage } from '../context/LanguageContext';
import { DEFAULT_SECTORS, getSectorBySlug, normalizeSectors, resolveSectorImage } from '../data/sectors-defaults';
import { pickLocale } from '../utils/pickLocale';
import { localizeSector } from '../utils/localizedSector';
import { getSectorUi, formatSectorSeo } from '../i18n/sector-ui';
import { SeoHead, buildBreadcrumb } from '../components/SeoHead';

export const SectorDetailPage = ({ slugOverride, pageContext = 'secteurs' }) => {
  const { slug: paramSlug } = useParams();
  const slug = slugOverride || paramSlug;
  const isServicePage = pageContext === 'services';
  const detailPath = isServicePage ? `/services/${slug}` : `/secteurs/${slug}`;
  const { section } = useSiteContent();
  const { content: tc, nav: tNav, language } = useLanguage();
  const tSec = tc.sectors;
  const td = tSec.detail || {};
  const sectors = normalizeSectors(section('sectors'));
  const baseSector = getSectorBySlug(slug, sectors) || getSectorBySlug(slug, DEFAULT_SECTORS);

  if (!baseSector) {
    return <Navigate to="/secteurs" replace />;
  }

  const sectorUi = getSectorUi(language);
  const sectorBase = localizeSector(baseSector, language);
  const sector = { ...sectorBase, image: resolveSectorImage(sectorBase) };

  const others = sectors
    .filter((item) => item.slug !== sector.slug)
    .slice(0, 3)
    .map((s) => {
      const t = tSec?.items?.[s.slug];
      return {
        ...s,
        title: pickLocale(language, s.title, t?.title),
        tag: pickLocale(language, s.tag, t?.tag),
        short: pickLocale(language, s.short, t?.short),
      };
    });

  const aspectIcons = [TrendingUp, BarChart3, ShieldCheck, Users];
  const aspects = (sector.aspects || sectorUi.aspects).map((a, i) => ({
    ...a,
    icon: aspectIcons[i % aspectIcons.length],
  }));

  const phases = sector.phases || sectorUi.phases;

  const indicators = [
    {
      icon: TrendingUp,
      label: td.targetReturn || 'Rendement cible',
      value: sector.range || '—',
      color: 'text-primary',
    },
    {
      icon: Compass,
      label: td.riskProfile || 'Profil de risque',
      value: sector.risk || '—',
    },
    {
      icon: Wallet,
      label: td.entryTicket || "Ticket d'entrée",
      value: td.ticketValue || '500K FCFA',
    },
    {
      icon: CalendarClock,
      label: td.horizon || 'Horizon',
      value: td.horizonValue || '10 mois',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <SeoHead
        title={
          isServicePage
            ? `${sector.title} — ${td.seoServiceSuffix || 'Service Taoman Group Investissement'}`
            : `${sector.title} — ${td.seoSector || "Secteur d'investissement"}`
        }
        description={
          sector.short ||
          sector.intro ||
          (isServicePage
            ? formatSectorSeo(sectorUi.seoDiscoverService, sector.title)
            : formatSectorSeo(sectorUi.seoDiscoverSector, sector.title))
        }
        path={detailPath}
        image={sector.image}
        type="article"
        jsonLd={buildBreadcrumb([
          { name: tNav.home, path: '/' },
          { name: isServicePage ? tNav.services : tNav.projects, path: isServicePage ? '/services' : '/secteurs' },
          { name: sector.title, path: detailPath },
        ])}
        keywords={`${sector.title}, ${isServicePage ? 'service' : 'secteur'} Togo, Taoman Group Investissement, ${sector.title}`}
      />
      <Header activeLink={isServicePage ? 'services' : 'projets'} />

      <main id="main-content" className="flex-grow pt-24">
        {/* BREADCRUMB */}
        <nav className="bg-surface-container-low border-b border-outline-variant/30 px-6 py-3">
          <div className="max-w-[1200px] mx-auto flex items-center gap-2 text-sm text-on-surface-variant flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">{tNav.home}</Link>
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.4} />
            <Link
              to={isServicePage ? '/services' : '/secteurs'}
              className="hover:text-primary transition-colors"
            >
              {isServicePage ? tNav.services : tNav.projects}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.4} />
            <span className="text-on-surface font-bold">{sector.title}</span>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#08111d] via-[#0c1830] to-[#08111d] py-20 px-6 text-white">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none" />

          <div className="relative max-w-[1200px] mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-200 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={2.4} />{' '}
                {sector.tag || (isServicePage ? sectorUi.serviceTag : td.sectorLabel || 'Secteur')} · {td.operatedBy || 'Opéré par Taoman Group Investissement'}
              </span>
              <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-[-0.03em] leading-[1.05]" style={{ color: '#ffffff' }}>
                {sector.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed">
                {sector.short || sector.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {isServicePage ? (
                  <>
                    <Link
                      to="/contact?topic=info&service=marketing-international"
                      className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-[#07111f] shadow-lg hover:scale-105 transition"
                    >
                      <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                      {tNav.quote}
                    </Link>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur hover:bg-white hover:text-[#07111f] transition"
                    >
                      <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                      {tNav.allServices}
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/contact?topic=invest"
                      className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-[#07111f] shadow-lg hover:scale-105 transition"
                    >
                      <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                      {td.contactUs || 'Nous contacter'}
                    </Link>
                    <Link
                      to="/contact?topic=project"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur hover:bg-white hover:text-[#07111f] transition"
                    >
                      <Send className="h-4 w-4" strokeWidth={2.5} />
                      {td.submitProject || 'Soumettre un projet'}
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/30 to-cyan-400/20 rounded-[2rem] blur-2xl" aria-hidden="true" />
              <img
                src={sector.image}
                alt={sector.title}
                className="relative rounded-[2rem] shadow-2xl w-full aspect-[4/3] object-cover ring-1 ring-white/15"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* BANDEAU METRIQUES */}
        <section className="relative -mt-12 px-6 pb-4">
          <div className="max-w-[1200px] mx-auto rounded-3xl bg-white shadow-2xl border border-outline-variant/40 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {indicators.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.label}>
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    <Icon className="h-3.5 w-3.5 text-primary" strokeWidth={2.4} /> {ind.label}
                  </p>
                  <p className={`mt-2 text-2xl md:text-3xl font-black ${ind.color || 'text-on-surface'}`}>{ind.value}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* OPÉRÉ PAR Taoman Group Investissement */}
        <section className="py-12 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto rounded-3xl bg-gradient-to-br from-primary/8 to-cyan-50/40 border border-primary/15 p-7 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white shadow-lg shrink-0">
              <Building2 className="h-8 w-8" strokeWidth={2.2} />
            </span>
            <div className="flex-1">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-primary">{td.operatedByEyebrow || 'Opéré et financé par'}</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-black text-on-surface">Taoman Group Investissement</h2>
              <p className="mt-3 text-on-surface-variant leading-relaxed">
                {td.groupOperatedBody || td.groupOperated}
              </p>
            </div>
            <Link
              to="/contact?topic=info"
              className="inline-flex items-center gap-2 rounded-2xl bg-white border border-primary/30 text-primary px-5 py-3 font-bold hover:bg-primary hover:text-white transition shrink-0"
            >
              {tc.common?.learnMore || 'En savoir plus'} <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
        </section>

        {/* FICHE PROJET */}
        <section className="py-12 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.55fr_0.85fr] gap-10">
            {/* COLONNE PRINCIPALE */}
            <article className="space-y-12">
              {/* CONTEXTE ET OBJECTIFS */}
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                  <Compass className="h-4 w-4" strokeWidth={2.4} /> {td.contextEyebrow || 'Contexte et objectifs'}
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-5 tracking-tight">
                  {td.whyInvest || 'Pourquoi Taoman Group Investissement investit dans ce secteur'}
                </h2>
                <p className="text-lg leading-relaxed text-on-surface-variant whitespace-pre-line">
                  {sector.context || sector.intro}
                </p>
              </div>

              {/* BUT */}
              {sector.goal && (
                <div className="rounded-3xl bg-gradient-to-br from-primary/8 to-cyan-50/40 border border-primary/15 p-7">
                  <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                    <Target className="h-4 w-4" strokeWidth={2.4} /> {td.goalEyebrow || 'But du programme'}
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-on-surface leading-snug">
                    {sector.goal}
                  </p>
                </div>
              )}

              {/* PERIMETRE */}
              {sector.perimetre && (
                <div>
                  <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                    <MapPin className="h-4 w-4" strokeWidth={2.4} /> {td.scopeEyebrow || 'Périmètre opérationnel'}
                  </p>
                  <h2 className="text-3xl font-black text-on-surface mb-5 tracking-tight">
                    {td.scopeTitle || 'Où et comment Taoman Group Investissement opère'}
                  </h2>
                  <p className="text-lg leading-relaxed text-on-surface-variant mb-6">
                    {sector.perimetre}
                  </p>
                  {Array.isArray(sector.documents) && sector.documents.length > 0 && (
                    <div className="rounded-2xl bg-surface-container-low border border-outline-variant/30 p-6">
                      <p className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4 flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" strokeWidth={2.4} /> {td.documentsTitle || 'Documents disponibles sur demande'}
                      </p>
                      <ul className="space-y-2.5">
                        {sector.documents.map((doc) => (
                          <li key={doc} className="flex items-start gap-3 text-on-surface">
                            <FileText className="h-4 w-4 mt-1 text-primary shrink-0" strokeWidth={2.2} />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* ASPECTS OPÉRATIONNELS – nouveau */}
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                  <Layers3 className="h-4 w-4" strokeWidth={2.4} /> {td.aspectsEyebrow || 'Aspects opérationnels'}
                </p>
                <h2 className="text-3xl font-black text-on-surface mb-6 tracking-tight">
                  {td.aspectsTitle || 'Comment Taoman Group Investissement sécurise chaque projet'}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {aspects.map((a) => {
                    const Icon = a.icon || ShieldCheck;
                    return (
                      <div key={a.title} className="rounded-2xl border border-outline-variant/40 p-5 bg-white hover:shadow-md transition-all">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" strokeWidth={2.2} />
                        </span>
                        <h3 className="mt-3 font-black text-on-surface">{a.title}</h3>
                        <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">{a.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* AXES D'INTERVENTION */}
              {Array.isArray(sector.highlights) && sector.highlights.length > 0 && (
                <div>
                  <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                    <ClipboardCheck className="h-4 w-4" strokeWidth={2.4} /> {td.highlightsEyebrow || "Axes d'intervention"}
                  </p>
                  <h2 className="text-3xl font-black text-on-surface mb-6 tracking-tight">
                    {td.highlightsTitle || 'Ce que nous finançons concrètement'}
                  </h2>
                  <ul className="space-y-3">
                    {sector.highlights.map((item, idx) => (
                      <li key={item} className="flex gap-4 rounded-2xl bg-white border border-outline-variant/40 p-5 hover:shadow-sm transition-all">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-container text-white font-black text-sm shadow">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <p className="text-on-surface leading-relaxed pt-1.5 font-medium">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* OPPORTUNITES */}
              {Array.isArray(sector.opportunities) && sector.opportunities.length > 0 && (
                <div>
                  <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                    <Briefcase className="h-4 w-4" strokeWidth={2.4} /> {td.opportunitiesEyebrow || 'Opportunités identifiées'}
                  </p>
                  <h2 className="text-3xl font-black text-on-surface mb-6 tracking-tight">
                    {td.opportunitiesTitle || 'Les projets que Taoman Group Investissement vise'}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {sector.opportunities.map((opportunity) => {
                      const label = typeof opportunity === 'string' ? opportunity : opportunity.title;
                      const desc = typeof opportunity === 'string' ? null : opportunity.description;
                      return (
                        <div key={label} className="rounded-2xl border border-outline-variant/40 p-5 bg-white hover:shadow-md hover:border-primary/30 transition-all">
                          <p className="font-bold text-on-surface">{label}</p>
                          {desc && <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">{desc}</p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* PHASES DE DEPLOIEMENT */}
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                  <CalendarClock className="h-4 w-4" strokeWidth={2.4} /> {td.phasesEyebrow || 'Calendrier projet'}
                </p>
                <h2 className="text-3xl font-black text-on-surface mb-6 tracking-tight">
                  {td.phasesTitle || 'Les 4 phases de chaque projet Taoman Group Investissement'}
                </h2>
                <ol className="space-y-4">
                  {phases.map((phase) => (
                    <li key={phase.num} className="flex gap-5 rounded-2xl border border-outline-variant/40 p-5 bg-white hover:shadow-sm transition-all">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-container text-white font-black shadow">
                        {phase.num}
                      </span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <p className="font-black text-on-surface text-lg">{phase.title}</p>
                          <p className="text-xs font-bold uppercase tracking-widest text-primary">{phase.duration}</p>
                        </div>
                        <p className="mt-1 text-sm text-on-surface-variant leading-relaxed">{phase.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* AVANTAGES + RISQUES (deux colonnes) */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="rounded-3xl border border-green-500/20 bg-green-50/40 p-6">
                  <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-green-700">
                    <CheckCircle2 className="h-4 w-4" strokeWidth={2.4} /> {tSec.keyAdvantages}
                  </p>
                  <h3 className="mt-3 text-xl font-black text-on-surface">{tSec.whySector}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-on-surface">
                    {(td.advantageBullets || []).map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600 shrink-0" strokeWidth={2.4} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-amber-500/20 bg-amber-50/40 p-6">
                  <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-amber-700">
                    <AlertTriangle className="h-4 w-4" strokeWidth={2.4} /> {tSec.vigilancePoints}
                  </p>
                  <h3 className="mt-3 text-xl font-black text-on-surface">{tSec.risksAndMitigation}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-on-surface">
                    {(td.riskBullets || []).map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <AlertTriangle className="h-4 w-4 mt-0.5 text-amber-600 shrink-0" strokeWidth={2.4} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            {/* SIDEBAR FICHE PROJET */}
            <aside className="space-y-5 lg:sticky lg:top-28 self-start">
              <div className="rounded-3xl bg-white border border-outline-variant/40 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-primary to-primary-container px-6 py-4">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-white/85">{td.sidebarProjectSheet || 'Fiche projet'}</p>
                  <h3 className="mt-1 text-xl font-black text-white">{td.sidebarOperationalSummary || 'Synthèse opérationnelle'}</h3>
                </div>
                <div className="p-6 space-y-5">
                  <div className="flex gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                      <Briefcase className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{td.projectLeadLabel || 'Porteur du projet'}</p>
                      <p className="mt-0.5 font-black text-on-surface">{sector.porteur || 'Taoman Group Investissement'}</p>
                    </div>
                  </div>

                  {sector.cout && (
                    <div className="flex gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                        <Coins className="h-5 w-5" strokeWidth={2.2} />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{td.indicativeCostLabel || 'Coût indicatif du programme'}</p>
                        <p className="mt-0.5 font-black text-on-surface text-lg">{sector.cout}</p>
                      </div>
                    </div>
                  )}

                  {sector.financement && (
                    <div className="flex gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                        <Handshake className="h-5 w-5" strokeWidth={2.2} />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{td.financingModeLabel || 'Mode de financement'}</p>
                        <p className="mt-0.5 font-black text-on-surface">{sector.financement}</p>
                      </div>
                    </div>
                  )}

                  {Array.isArray(sector.partenaires) && sector.partenaires.length > 0 && (
                    <div className="flex gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                        <Users className="h-5 w-5" strokeWidth={2.2} />
                      </span>
                      <div className="flex-1">
                        <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">{td.stakeholdersLabel || 'Parties prenantes'}</p>
                        <ul className="space-y-1">
                          {sector.partenaires.map((p) => (
                            <li key={p} className="text-sm text-on-surface font-medium flex items-start gap-2">
                              <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="px-6 pb-6 space-y-2.5">
                  <Link
                    to="/contact?topic=invest"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-white px-5 py-3 font-bold shadow-md hover:shadow-xl hover:scale-[1.01] transition-all"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                    {td.contactInvest || 'Nous contacter pour investir'}
                  </Link>
                  <Link
                    to="/contact?topic=project"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-outline bg-white text-on-surface px-5 py-3 font-bold hover:border-primary hover:text-primary transition-all"
                  >
                    <Send className="h-4 w-4" strokeWidth={2.5} />
                    {td.submitProject || 'Soumettre un projet'}
                  </Link>
                  <Link
                    to="/contact?topic=partner"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-outline bg-white text-on-surface px-5 py-3 font-bold hover:border-primary hover:text-primary transition-all"
                  >
                    <Handshake className="h-4 w-4" strokeWidth={2.5} />
                    {td.becomePartner || 'Devenir partenaire'}
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-[#08111d] via-[#0d1a30] to-[#08111d] text-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-200">{td.contactDetails || 'Coordonnées'}</p>
                <p className="mt-3 text-base leading-relaxed text-white/85">
                  {td.headquarters || 'Siège social : Lomé, Togo'}
                </p>
                <p className="mt-1 text-sm text-white/65">contact@taoman.group</p>
                <Link
                  to="/contact?topic=info"
                  className="mt-4 inline-flex items-center gap-1.5 text-cyan-200 font-bold text-sm hover:underline"
                >
                  {td.writeUs || 'Nous écrire'} <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* CTA BANDEAU – emphase Groupe Taoman Group Investissement */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary-container">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1.4fr_1fr] gap-8 items-center text-white">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-white/85">Taoman Group Investissement</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-black leading-tight" style={{ color: '#ffffff' }}>
                {td.ctaGroupTitle || 'Un groupe, plusieurs métiers, une seule exigence.'}
              </h2>
              <p className="mt-4 text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                {td.ctaGroupDesc}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/contact?topic=invest"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-bold text-primary shadow-lg hover:scale-[1.02] transition"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                {td.talkAdvisor || 'Discuter avec un conseiller'}
              </Link>
              <Link
                to="/contact?topic=project"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3.5 font-bold backdrop-blur hover:bg-white hover:text-primary transition"
                style={{ color: '#ffffff' }}
              >
                <Send className="h-4 w-4" strokeWidth={2.5} />
                {td.submitYourProject || 'Soumettre votre projet'}
              </Link>
            </div>
          </div>
        </section>

        {/* AUTRES SECTEURS */}
        {others.length > 0 && (
          <section className="py-16 px-6 bg-surface-container-low">
            <div className="max-w-[1200px] mx-auto">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-2">
                    {isServicePage ? sectorUi.otherServicesTitle : td.otherSectors || 'Autres secteurs du Groupe'}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-black text-on-surface">
                    {isServicePage
                      ? sectorUi.otherServicesSubtitle
                      : td.exploreDiversification || 'Explorez la diversification'}
                  </h2>
                </div>
                <Link
                  to={isServicePage ? '/services' : '/secteurs'}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                >
                  {isServicePage ? tNav.allServices : td.seeAllSectors || 'Voir tous les secteurs'}{' '}
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {others.map((other) => (
                  <Link
                    key={other.slug}
                    to={`/secteurs/${other.slug}`}
                    className="group block rounded-3xl bg-white p-6 border border-outline-variant/40 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all"
                  >
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary">
                      {other.tag || td.tagFallback || tSec.tagFallback || 'Secteur'}
                    </span>
                    <h3 className="mt-4 text-xl font-black text-on-surface group-hover:text-primary transition-colors">
                      {other.title}
                    </h3>
                    <p className="mt-2 text-sm text-on-surface-variant line-clamp-3 leading-relaxed">{other.short || ''}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2.5 transition-all">
                      {td.discover || 'Découvrir'} <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};
