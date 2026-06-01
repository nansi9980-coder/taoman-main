import { useEffect, useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Search,
  ChevronDown,
  HelpCircle,
  Building2,
  TrendingUp,
  Wallet,
  Shield,
  ScrollText,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { API_URL } from '../config';
import { useSiteContent } from '../context/SiteContentContext';
import { useLanguage } from '../context/LanguageContext';
import { normalizeSectors, resolveSectorImage } from '../data/sectors-defaults';
import { SeoHead, buildBreadcrumb } from '../components/SeoHead';
import { getInvestmentFaq } from '../i18n/investment-faq';
import { getInvestPageCopy } from '../i18n/investPage';
import { pickLocale } from '../utils/pickLocale';
import { localizeSector } from '../utils/localizedSector';
import { BRAND_NAME } from '../constants/branding';
import programmeImg from '../assets/programme.jpeg';

const FAQ_CATEGORY_ICONS = {
  all: HelpCircle,
  groupe: Building2,
  investissement: TrendingUp,
  rendement: Wallet,
  securite: Shield,
  process: ScrollText,
};

const FaqInvestissement = () => {
  const { translations: tc, language } = useLanguage();
  const tInv = tc?.invest || {};
  const faqPack = getInvestmentFaq(language);
  const faqUi = faqPack.ui || getInvestmentFaq('FR').ui;
  const faqCategories = (faqPack.categories || []).map((cat) => ({
    ...cat,
    icon: FAQ_CATEGORY_ICONS[cat.id] || HelpCircle,
  }));
  const faqItems = faqPack.items || [];
  const [active, setActive] = useState('all');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqItems.filter((item) => {
      const inCat = active === 'all' || item.category === active;
      if (!inCat) return false;
      if (!q) return true;
      return (
        (item.question || '').toLowerCase().includes(q) ||
        (item.answer || '').toLowerCase().includes(q)
      );
    });
  }, [active, query, faqItems]);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-surface to-surface-container-low">
      <div className="mx-auto max-w-[1100px]">
        {/* En-tête */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-primary">
            <HelpCircle className="h-3.5 w-3.5" strokeWidth={2.4} /> {tInv.help?.eyebrow || "Centre d'aide"}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-on-surface">
            {faqUi.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-on-surface-variant leading-relaxed">
            {faqUi.intro}
          </p>

          {/* Barre de recherche */}
          <div className="relative mt-8 max-w-xl mx-auto">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
              <Search className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={faqUi.searchPlaceholder}
              className="w-full rounded-2xl bg-white pl-12 pr-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/70 shadow-lg border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Catégories */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {faqCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={
                  isActive
                    ? 'inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-container text-white px-4 py-2 text-sm font-bold shadow-md'
                    : 'inline-flex items-center gap-2 rounded-full bg-white text-on-surface px-4 py-2 text-sm font-bold border border-outline-variant/40 hover:border-primary/40 hover:bg-primary/5 transition-all'
                }
              >
                <Icon className="h-4 w-4" strokeWidth={2.3} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Liste FAQ */}
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-outline-variant/40 bg-white p-10 text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto">
              <Search className="h-6 w-6" strokeWidth={2.2} />
            </span>
            <h3 className="mt-4 text-xl font-black text-on-surface">{faqUi.emptyTitle}</h3>
            <p className="mt-2 text-on-surface-variant">{faqUi.emptyHint}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((item, idx) => {
              const cat = faqCategories.find((c) => c.id === item.category) || faqCategories[0];
              const Icon = cat.icon;
              const isOpen = open === idx;
              return (
                <div
                  key={`${item.question}-${idx}`}
                  className={`group rounded-2xl border bg-white shadow-sm transition-all ${
                    isOpen ? 'border-primary/40 shadow-lg' : 'border-outline-variant/40 hover:border-primary/30 hover:shadow-md'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="w-full flex items-start gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                    <div className="flex-1">
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-1">
                        {cat.label}
                      </p>
                      <h3 className="text-base md:text-lg font-bold text-on-surface leading-snug">
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 mt-2 transition-all ${
                        isOpen ? 'rotate-180 text-primary' : 'text-on-surface-variant'
                      }`}
                      strokeWidth={2.4}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="ml-14 text-on-surface-variant leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* CTA contact */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#08111d] via-[#0d1a30] to-[#08111d] p-7 md:p-10 text-white text-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/20 text-cyan-200">
            <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
          </span>
          <h3 className="mt-4 text-2xl md:text-3xl font-black">{faqUi.ctaTitle}</h3>
          <p className="mt-3 max-w-xl mx-auto text-white/75">{faqUi.ctaDesc}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact?topic=invest"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-[#08111d] hover:scale-[1.03] transition"
            >
              <TrendingUp className="h-4 w-4" strokeWidth={2.5} /> {faqUi.ctaDiscuss}
            </Link>
            <Link
              to="/contact?topic=info"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-bold backdrop-blur hover:bg-white hover:text-[#08111d] transition"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.5} /> {faqUi.ctaAsk}
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-bold backdrop-blur hover:bg-white hover:text-[#08111d] transition"
            >
              {faqUi.ctaFullFaq} <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const InvestmentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { section } = useSiteContent();
  const { translations: tc, language, nav: tNav } = useLanguage();
  const tInv = tc?.invest || {};
  const tCommon = tc?.common || {};
  const ip = getInvestPageCopy(language);
  const inv = section('investment');
  const badge = pickLocale(language, inv.badge, tInv.hero?.eyebrow || ip.default.badge);
  const title = pickLocale(language, inv.title, tInv.hero?.title || ip.default.title);
  const description = pickLocale(language, inv.description, tInv.hero?.description || ip.default.description);
  const statSource =
    !language || language === 'FR'
      ? inv.stats?.length
        ? inv.stats
        : ip.default.stats
      : ip.default.stats;
  const statRows = statSource.map((s) => [s.value, s.label]);
  const [apiInvestments, setApiInvestments] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/investments/public`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setApiInvestments(data);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const target = document.getElementById(id);
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
      }
    }
  }, [location.hash]);

  const sectors = normalizeSectors(section('sectors'))
    .map((s) => localizeSector(s, language))
    .filter(Boolean)
    .map((s) => ({
      ...s,
      image: resolveSectorImage(s),
    }));

  return (
    <div className="flex flex-col min-h-screen bg-surface pt-[80px]">
      <SeoHead
        title={pickLocale(language, inv.seoTitle, tInv.seoTitle || ip.seoTitle)}
        description={tInv.seoDescription || `Pourquoi investir avec ${BRAND_NAME} : secteurs, programmes, opportunités et reporting transparent au Togo et CEDEAO.`}
        path="/investissement"
        jsonLd={buildBreadcrumb([
          { name: tNav.home || 'Accueil', path: '/' },
          { name: tNav.investment || 'Investissement', path: '/investissement' },
        ])}
        keywords="investir Togo, opportunités investissement Lomé, TGI, secteurs porteurs Togo, partenariat investisseur"
      />
      <Header activeLink="investissement" />

      <main id="main-content" className="flex-grow">
        <section className="relative overflow-hidden bg-[#07111f] py-24 px-6 text-white">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"></div>
          <div className="relative z-10 mx-auto max-w-[1100px] text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">{badge}</p>
            <h1 className="mb-6 text-5xl font-black tracking-[-0.05em] md:text-7xl">{title}</h1>
            <p className="mb-10 mx-auto max-w-2xl text-xl text-white/75">{description}</p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link to="/contact?topic=invest" className="rounded-2xl bg-white px-8 py-4 font-bold text-[#07111f] shadow-xl hover:scale-105 transition">
                {tCommon.contactInvest || 'Nous contacter pour investir'}
              </Link>
              <Link to="/contact?topic=project" className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur hover:bg-white hover:text-[#07111f] transition">
                {tInv.submit?.cta || 'Soumettre un projet'}
              </Link>
            </div>
          </div>
        </section>

        {/* Quick nav anchors */}
        <nav aria-label={ip.navAria} className="sticky top-20 z-30 bg-white/90 backdrop-blur border-b border-outline-variant/40">
          <div className="mx-auto max-w-[1400px] px-4 overflow-x-auto">
            <ul className="flex items-center gap-2 py-3 whitespace-nowrap">
              {ip.quickNav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex rounded-full border border-outline-variant/50 bg-surface-container-low px-4 py-2 text-sm font-bold text-on-surface hover:border-primary hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/investissement/tgi"
                  className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90 transition"
                >
                  {ip.tgiLink}
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <section className="bg-white py-12 px-6">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {statRows.map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-outline-variant/40 bg-surface-container-low p-6 text-center shadow-sm">
                  <p className="text-3xl md:text-4xl font-black text-primary">{value}</p>
                  <p className="mt-2 text-xs md:text-sm font-semibold text-on-surface-variant">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TAOMAN Programmes : TGI + Simulateur */}
        <section id="programmes" className="scroll-mt-32 bg-surface-container-low py-20 px-6">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-12 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">{tInv.programs?.eyebrow || 'Programmes TAOMAN'}</p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">{tInv.programs?.title || "Deux portes d'entrée simples"}</h2>
              <p className="mt-3 max-w-2xl mx-auto text-on-surface-variant">{ip.programs.intro}</p>
            </div>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="group relative overflow-hidden bg-gradient-to-br from-[#0047AB] to-[#002366] p-10 rounded-[2.5rem] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,71,171,0.3)] transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/10 transition-colors"></div>

                <div className="flex items-start justify-between mb-8">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <img src={programmeImg} alt="TGI" className="w-full h-full object-cover rounded-lg" loading="lazy" decoding="async" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
                    <span className="text-xs font-bold text-white tracking-widest uppercase">{ip.programs.premium}</span>
                  </div>
                </div>

                <h3 className="text-4xl text-white font-bold mb-4 tracking-tight">{ip.programs.tgiTitle}</h3>
                <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">{ip.programs.tgiDesc}</p>

                <button
                  onClick={() => navigate('/investissement/tgi')}
                  className="group/btn relative w-full overflow-hidden bg-white text-[#0047AB] py-5 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 hover:shadow-white/20 active:scale-95"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {ip.programs.tgiCta}
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                </button>
              </div>

              <div className="group relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#333333] p-10 rounded-[2.5rem] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 blur-2xl group-hover:bg-white/10 transition-colors"></div>

                <div className="flex items-start justify-between mb-8">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-inner group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                    <svg className="w-12 h-12 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 21l1.3-3.9A8.96 8.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
                    <span className="text-xs font-bold text-white tracking-widest uppercase">{ip.programs.contactBadge}</span>
                  </div>
                </div>

                <h3 className="text-4xl text-white font-bold mb-4 tracking-tight">{ip.programs.advisorTitle}</h3>
                <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">{ip.programs.advisorDesc}</p>

                <Link
                  to="/contact?topic=invest"
                  className="group/btn relative block w-full overflow-hidden bg-white text-[#1A1A1A] py-5 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 hover:shadow-white/20 active:scale-95 text-center"
                >
                  <span className="relative z-10 inline-flex items-center justify-center gap-2">
                    {ip.programs.advisorCta}
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Soumettre un projet */}
        <section id="soumettre" className="scroll-mt-32 py-20 px-6">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">{tInv.submit?.eyebrow || 'Soumettre un projet'}</p>
                <h2 className="mt-3 text-4xl font-black text-on-surface">{tInv.submit?.title || 'Présentez votre projet à TAOMAN'}</h2>
                <p className="mt-4 text-on-surface-variant leading-relaxed text-lg">{ip.submit.intro}</p>
                <ul className="mt-6 space-y-3">
                  {ip.submit.bullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-primary font-black">✓</span>
                      <span className="text-on-surface">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/investissement/soumettre"
                    className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 font-bold text-white hover:opacity-90"
                  >
                    {ip.submit.formCta}
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-2xl border border-primary px-6 py-3 font-bold text-primary hover:bg-primary hover:text-white transition"
                  >
                    {ip.submit.advisorCta}
                  </Link>
                </div>
              </div>
              <div className="rounded-3xl bg-[#07111f] text-white p-7 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-200">{ip.submit.processTitle}</p>
                {ip.submit.steps.map((step) => (
                  <div key={step.n} className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-[#07111f] font-black">{step.n}</span>
                    <div>
                      <p className="font-black">{step.title}</p>
                      <p className="text-sm text-white/70">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Opportunités d'investissement */}
        <section id="opportunites" className="scroll-mt-32 py-20 px-6 bg-surface-container-low">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">{tInv.opportunities?.eyebrow || "Opportunités d'investissement"}</p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">{tInv.opportunities?.title || 'Cinq secteurs porteurs, des projets concrets'}</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">{ip.opportunities.intro}</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sectors.map((sector, idx) => (
                <Link
                  key={sector.slug || idx}
                  to={sector.slug ? `/secteurs/${sector.slug}` : '/secteurs'}
                  className="group flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm border border-outline-variant/40 transition-all hover:-translate-y-1 hover:shadow-2xl animate-fade-in-up"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  {sector.image && (
                    <div className="relative h-44 overflow-hidden bg-surface-container-low">
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" aria-hidden="true" />
                      <span className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
                        {sector.tag || ip.opportunities.sectorTag}
                      </span>
                    </div>
                  )}
                  <div className="flex-1 flex flex-col p-7">
                    {!sector.image && (
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary self-start">
                        {sector.tag || ip.opportunities.sectorTag}
                      </span>
                    )}
                    <h3 className={`${sector.image ? '' : 'mt-4'} text-2xl font-black text-on-surface group-hover:text-primary transition-colors`}>
                      {sector.title}
                    </h3>
                    <p className="mt-3 text-on-surface-variant line-clamp-3">
                      {sector.short || sector.description || ''}
                    </p>
                    <div className="my-6 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-surface-container-low p-3">
                        <p className="text-xs text-on-surface-variant">{ip.opportunities.targetReturn}</p>
                        <p className="font-black text-primary">{sector.range || '—'}</p>
                      </div>
                      <div className="rounded-2xl bg-surface-container-low p-3">
                        <p className="text-xs text-on-surface-variant">{ip.opportunities.profile}</p>
                        <p className="font-black text-on-surface">{sector.risk || '—'}</p>
                      </div>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-2 font-bold text-primary group-hover:translate-x-1 transition-transform">
                      {ip.opportunities.discoverSector}
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {apiInvestments.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-black text-on-surface text-center mb-8">{ip.opportunities.apiTitle}</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  {apiInvestments.map((opportunity) => (
                    <div key={opportunity.id} className="rounded-2xl bg-white p-6 shadow-md border border-outline-variant/40">
                      <h4 className="text-xl font-bold">{opportunity.name}</h4>
                      <p className="text-sm text-on-surface-variant mt-2">{opportunity.description || ip.opportunities.activeProject}</p>
                      <p className="mt-4 font-black text-primary">{opportunity.amount?.toLocaleString('fr-FR')} FCFA</p>
                      {opportunity.roi != null && (
                        <p className="text-sm text-on-surface-variant">
                          {ip.opportunities.targetRoi} : {opportunity.roi}%
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Critères d'investissement TAOMAN */}
        <section id="criteres" className="scroll-mt-32 py-20 px-6">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">{tInv.criteria?.eyebrow || "Critères d'investissement"}</p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">{tInv.criteria?.title || 'Comment TAOMAN sélectionne les projets'}</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">{ip.criteria.intro}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ip.criteria.items.map((item) => (
                <div key={item.title} className="rounded-3xl bg-white p-7 border border-outline-variant/40 hover:shadow-lg transition-all">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-black">✓</div>
                  <h3 className="text-lg font-black text-on-surface">{item.title}</h3>
                  <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                to="/investissement/soumettre"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 font-bold text-white hover:opacity-90 transition"
              >
                {ip.criteria.cta}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Engagement TAOMAN */}
        <section className="bg-[#07111f] py-20 px-6 text-white">
          <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">{tInv.guarantee?.eyebrow || 'Engagement TAOMAN'}</p>
              <h2 className="mt-3 text-4xl font-black">{tInv.guarantee?.title || 'Ce que nous garantissons aux investisseurs'}</h2>
              <p className="mt-4 text-white/70">{ip.guarantee.intro}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {ip.guarantee.items.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — Groupe + Investissement */}
        <FaqInvestissement />

        {/* CTA final */}
        <section className="bg-primary py-20 px-6">
          <div className="mx-auto max-w-[1200px] text-center">
            <h2 className="text-4xl font-black text-white">{ip.finalCta.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">{ip.finalCta.desc}</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact?topic=invest"
                className="rounded-2xl bg-white px-8 py-4 font-bold text-primary shadow-lg hover:scale-105 inline-flex justify-center items-center"
              >
                {ip.finalCta.contact}
              </Link>
              <Link
                to="/contact?topic=project"
                className="rounded-2xl border border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-primary inline-flex justify-center items-center"
              >
                {ip.finalCta.submit}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
