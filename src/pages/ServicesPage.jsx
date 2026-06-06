import { useMemo } from 'react';
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
  BarChart3,
} from 'lucide-react';
import { mediaUrl } from '../config';
import { useSiteContent } from '../context/SiteContentContext';
import { PhotoSlider } from '../components/PhotoSlider';
import { PhotoHeroBackground } from '../components/PhotoHeroBackground';
import { HERO_MEDIA_SPECS } from '../constants/heroMedia';
import { SeoHead, buildServiceLd } from '../components/SeoHead';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';
import { getServicesTranslations } from '../i18n/services';
import lavageCard from '../assets/realisations/lavage1.jpg';
import lavageCard2 from '../assets/realisations/lavage2.jpg';
import demenagementCard from '../assets/realisations/transport2.jpg';
import bureauxCard from '../assets/realisations/mecanique1.png';
import mecaniqueCard from '../assets/realisations/mecanique2.jpg';
import transportCard from '../assets/realisations/transport1.jpg';
import { mergeServicesPageHeroSlides } from '../data/services-page-hero-defaults';
import { mergeOperationalServices } from '../data/operational-services-defaults';
import { pickLocale, pickLocaleList } from '../utils/pickLocale';

const Icons = {
  car: <Sparkles className="w-6 h-6" strokeWidth={2.2} />,
  truck: <Truck className="w-6 h-6" strokeWidth={2.2} />,
  building: <Brush className="w-6 h-6" strokeWidth={2.2} />,
  wrench: <Wrench className="w-6 h-6" strokeWidth={2.2} />,
  bus: <Bus className="w-6 h-6" strokeWidth={2.2} />,
  snow: <Snowflake className="w-6 h-6" strokeWidth={2.2} />,
  shield: <ShieldCheck className="w-6 h-6" strokeWidth={2.2} />,
  audit: <BarChart3 className="w-6 h-6" strokeWidth={2.2} />,
};

const SERVICE_ID_TO_ICON = {
  lavage: Icons.car,
  demenagement: Icons.truck,
  'entretien-bureaux': Icons.building,
  mecanique: Icons.wrench,
  transport: Icons.bus,
  climatisation: Icons.snow,
  conciergerie: Icons.shield,
  audits: Icons.audit,
};
const SERVICE_ID_TO_HREF = {
  lavage: '/lavage-auto/devis',
  demenagement: '/demenagement/devis',
  'entretien-bureaux': '/entretien/bureaux',
  mecanique: '/contact?topic=info&service=mecanique',
  transport: '/contact?topic=info&service=transport',
  climatisation: '/contact?topic=info&service=climatisation',
  conciergerie: '/contact?topic=info&service=conciergerie',
  audits: '/contact?topic=info&service=audit',
};
const SERVICE_ID_TO_IMAGE = {};

SERVICE_ID_TO_IMAGE.lavage = lavageCard;
SERVICE_ID_TO_IMAGE.demenagement = demenagementCard;
SERVICE_ID_TO_IMAGE['entretien-bureaux'] = bureauxCard;
SERVICE_ID_TO_IMAGE.mecanique = mecaniqueCard;
SERVICE_ID_TO_IMAGE.transport = transportCard;
SERVICE_ID_TO_IMAGE.climatisation = lavageCard2;
SERVICE_ID_TO_IMAGE.conciergerie = mecaniqueCard;
SERVICE_ID_TO_IMAGE.audits = bureauxCard;

const HERO_SLIDES_FALLBACK = {
  'lavage-1': { src: lavageCard, alt: '' },
  'lavage-2': { src: lavageCard2, alt: '' },
  demenagement: { src: demenagementCard, alt: '' },
  transport: { src: transportCard, alt: '' },
  mecanique: { src: mecaniqueCard, alt: '' },
  equipe: { src: bureauxCard, alt: '' },
};

export const ServicesPage = () => {
  const navigate = useNavigate();
  const { section } = useSiteContent();
  const { content: tc, language } = useLanguage();
  const tServ = tc.services;
  const tServExt = useMemo(() => getServicesTranslations(language), [language]);
  const sp = section('servicesPage');
  const tPage = tc.services?.page || {};
  const heroBadge = pickLocale(language, sp.badge, tPage.badge);
  const heroTitle = pickLocale(language, sp.title, tPage.title);
  const heroDesc = pickLocale(language, sp.description, tPage.description);
  const btn1 = pickLocale(language, sp.btn1, tPage.btn1 || tServExt.finalCta?.btnQuote);
  const btn2 = pickLocale(language, sp.btn2, tPage.btn2 || tServExt.finalCta?.btnInvest);

  const heroSlides = useMemo(() => {
    const merged = mergeServicesPageHeroSlides(sp.heroSlides || []);
    return merged.map((slide) => {
      const fb = HERO_SLIDES_FALLBACK[slide.id] || HERO_SLIDES_FALLBACK['lavage-1'];
      const src = slide.imageUrl ? mediaUrl(slide.imageUrl) : fb.src;
      return {
        src,
        alt: slide.title || fb.alt || heroTitle,
        label: slide.title || fb.alt || heroTitle,
        category: slide.category || heroBadge,
      };
    });
  }, [sp.heroSlides, heroBadge, heroTitle]);

  const opSection = section('operationalServices');
  const services = useMemo(() => {
    const merged = mergeOperationalServices(opSection?.items || []);
    return merged
      .filter((item) => item.published !== false)
      .map((item) => {
        const tr = tServExt.items.find((i) => i.id === item.id);
        return {
          id: item.id,
          icon: SERVICE_ID_TO_ICON[item.id] || Icons.car,
          image: item.imageUrl
            ? mediaUrl(item.imageUrl)
            : SERVICE_ID_TO_IMAGE[item.id] || lavageCard,
          title: pickLocale(language, item.title, tr?.title),
          description: pickLocale(language, item.description, tr?.description),
          href: item.href || SERVICE_ID_TO_HREF[item.id] || `/services/${item.id}`,
          sla: pickLocale(language, item.sla, tr?.sla),
          badge: pickLocale(language, item.badge, tr?.badge),
          bullets: pickLocaleList(language, item.bullets, tr?.bullets),
          priceFrom: pickLocale(language, item.priceFrom, tr?.priceFrom),
        };
      });
  }, [opSection?.items, tServExt, language]);

  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Services TAOMAN Group Investment',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: buildServiceLd({ name: s.title, description: s.description, image: s.image }),
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pt-[80px]">
      <SeoHead
        title={heroTitle || tServ.hero.title}
        description={heroDesc || tServ.hero.description}
        path="/services"
        jsonLd={servicesJsonLd}
        keywords="services Togo, lavage auto Lomé, déménagement Lomé, entretien bureaux, mécanique auto, transport Togo, climatisation, conciergerie"
      />
      <Header activeLink="services" />

      <main id="main-content" className="flex-grow">
        <section className="relative overflow-hidden min-h-[45vh] md:min-h-[50vh] flex items-center py-16 px-6 text-white">
          <PhotoHeroBackground
            src={HERO_MEDIA_SPECS.services.src}
            objectPosition={HERO_MEDIA_SPECS.services.objectPosition}
            overlayVariant={HERO_MEDIA_SPECS.services.overlayVariant}
            overlayIntensity="strong"
          />
          <div className="relative z-10 max-w-[1400px] mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">{heroBadge}</p>
              <h1 className="text-4xl md:text-6xl font-black tracking-[-0.04em] text-white mb-6">{heroTitle}</h1>
              <p className="text-lg text-white/90 mb-8 max-w-2xl">{heroDesc}</p>
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
                slides={heroSlides}
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
          <Reveal preset="fadeUp">
            <div className="mb-12 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">{tServ.hero.eyebrow}</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-black text-on-surface">{tServ.sectionTitle}</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg leading-relaxed">
                {tServ.hero.description}
              </p>
            </div>
          </Reveal>
          <Reveal preset="fadeUp" childSelector=".service-grid-card" stagger={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service) => (
              <div
                key={service.id || service.title}
                className="service-grid-card interactive interactive-lift bg-white rounded-[2rem] shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full flex flex-col border border-outline-variant/30 motion-reduce:hover:translate-y-0"
              >
                {service.image && (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
                        <p className="text-[10px] uppercase tracking-[0.18em] text-on-surface-variant font-bold">{tServExt.labels.timeLabel}</p>
                        <p className="font-black text-primary text-sm mt-1">{service.sla}</p>
                      </div>
                      <div className="rounded-2xl bg-surface-container-low p-3 border border-outline-variant/30">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-on-surface-variant font-bold">{tServExt.labels.priceLabel}</p>
                        <p className="font-black text-on-surface text-sm mt-1">{service.priceFrom || tServExt.labels.priceFromFallback}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate(service.href)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-container text-white py-3 rounded-2xl font-bold text-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
                    >
                      {tServExt.labels.requestQuoteCta} <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </Reveal>
        </section>

        {/* Méthode - timeline horizontale */}
        <section className="py-16 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-on-surface">{tServExt.method.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {tServExt.method.steps.map((step, idx) => {
                const stepIcons = [ClipboardCheck, Award, Users, CheckCircle2];
                const Icon = stepIcons[idx] || ClipboardCheck;
                const num = String(idx + 1).padStart(2, '0');
                const { title } = step;
                return (
                  <div
                    key={num}
                    className="bg-white rounded-2xl border border-outline-variant/40 p-4 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" strokeWidth={2.2} />
                      </span>
                      <span className="text-2xl font-black text-primary/40">{num}</span>
                    </div>
                    <h3 className="text-sm font-bold text-on-surface">{title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pourquoi nous */}
        <section className="py-20 px-6 bg-[#07111f] text-white relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
          <div className="max-w-[1200px] mx-auto relative">
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">{tServExt.whyUs.eyebrow}</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-black">{tServExt.whyUs.title}</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
                {tServExt.whyUs.description}
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {tServExt.whyUs.items.map((item, idx) => {
                const whyIcons = [Clock, Award, CheckCircle2];
                const whyNums = ['24/7', '100%', '★'];
                const Icon = whyIcons[idx] || Clock;
                const num = whyNums[idx] || '';
                const { title, desc } = item;
                return (
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
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary to-primary-container py-20 px-6">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-on-primary mb-4">
              {tServExt.finalCta.title}
            </h2>
            <p className="text-lg md:text-xl text-on-primary/90 mb-10 max-w-2xl mx-auto">
              {tServExt.finalCta.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-on-primary text-primary px-8 py-4 font-bold hover:scale-105 hover:shadow-xl transition"
              >
                {tServExt.finalCta.btnQuote} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact?topic=info"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-on-primary text-on-primary px-8 py-4 font-bold hover:bg-on-primary hover:text-primary transition"
              >
                <Phone className="h-4 w-4" /> {tServExt.finalCta.btnCall}
              </Link>
              <Link
                to="/investissement"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/15 backdrop-blur text-on-primary px-8 py-4 font-bold hover:bg-white/25 transition border border-on-primary/30"
              >
                {tServExt.finalCta.btnInvest}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
