import { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Car,
  Truck,
  Building2,
  Bus,
  Snowflake,
  Shield,
  ClipboardCheck,
  Check,
  ArrowRight,
  FileText,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SeoHead } from '../components/SeoHead';
import { PhotoHeroBackground } from '../components/PhotoHeroBackground';
import { FloatingDecor } from '../components/FloatingDecor';
import { Reveal } from '../components/Reveal';
import { HERO_MEDIA_SPECS } from '../constants/heroMedia';
import { API_URL } from '../config';
import { getApiErrorMessage } from '../utils/apiError';
import { useLanguage } from '../context/LanguageContext';
import { getContactTranslations } from '../i18n/contact';
import { getNavTranslations } from '../i18n/navigation';
import { mergeOperationalServices } from '../data/operational-services-defaults';
import { useSiteContent } from '../context/SiteContentContext';
import { pickLocale } from '../utils/pickLocale';

const SERVICE_ICONS = {
  lavage: Car,
  demenagement: Truck,
  'entretien-bureaux': Building2,
  transport: Bus,
  climatisation: Snowflake,
  conciergerie: Shield,
  audits: ClipboardCheck,
};

const SERVICE_NAV_KEYS = {
  lavage: { name: 'carWash', desc: 'carWashDesc' },
  demenagement: { name: 'moving', desc: 'movingDesc' },
  'entretien-bureaux': { name: 'officeCare', desc: 'officeCareDesc' },
  transport: { name: 'transport', desc: 'transportDesc' },
  audits: { name: 'audits', desc: 'auditsDesc' },
};

const SERVICE_HREFS = {
  lavage: '/lavage-auto/devis',
  demenagement: '/demenagement/devis',
  'entretien-bureaux': '/entretien/bureaux',
  transport: '/transport/devis',
  climatisation: '/entretien/climatisation',
  conciergerie: '/devis#formulaire-devis',
  audits: '/audits/devis',
};

export const DevisPage = () => {
  const { language } = useLanguage();
  const { section } = useSiteContent();
  const [searchParams] = useSearchParams();
  const tQuote = getContactTranslations(language).quotePage || getContactTranslations('EN').quotePage;
  const tFormErrors = getContactTranslations(language).form || getContactTranslations('EN').form;
  const tNav = getNavTranslations(language);

  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const services = tQuote.services || [];
  const tQuoteForm = tQuote.form || getContactTranslations('FR').quotePage.form;

  const serviceCards = useMemo(() => {
    const opSection = section('operationalServices');
    return mergeOperationalServices(opSection?.items || [])
      .filter((item) => item.published !== false)
      .map((item) => {
        const navKeys = SERVICE_NAV_KEYS[item.id];
        const Icon = SERVICE_ICONS[item.id] || FileText;
        return {
          id: item.id,
          icon: Icon,
          title: navKeys
            ? tNav[navKeys.name]
            : pickLocale(language, item.title, item.title),
          description: navKeys
            ? tNav[navKeys.desc]
            : pickLocale(language, item.description, item.description),
          href: SERVICE_HREFS[item.id] || item.href || '/devis#formulaire-devis',
        };
      });
  }, [section, language, tNav]);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setFormData((prev) => ({
          ...prev,
          name: [user.firstName, user.lastName].filter(Boolean).join(' ') || prev.name,
          email: user.email || prev.email,
          phone: user.phone || prev.phone,
        }));
      } catch (e) {
        console.error('Erreur de parsing user data', e);
      }
    }
  }, []);

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (!serviceParam || !services.length) return;
    const match = services.find((s) => s.toLowerCase().includes(serviceParam.toLowerCase()));
    if (match) setFormData((prev) => ({ ...prev, service: match }));
  }, [searchParams, services]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    try {
      const response = await fetch(`${API_URL}/quotes/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          title: `Devis: ${formData.service}`,
          description: `Date souhaitée: ${formData.date}\n\nDescription: ${formData.description}`,
          service: formData.service,
        }),
      });
      if (response.ok) setSubmitted(true);
      else setSubmitError(await getApiErrorMessage(response, tQuote.errorQuote));
    } catch (error) {
      console.error('Erreur réseau:', error);
      setSubmitError(error.message || tFormErrors.errorNetwork);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pt-[80px]">
      <SeoHead
        title={tQuote.title}
        description={tQuote.hubDescription || tQuote.subtitle}
        path="/devis"
        keywords="devis Togo, lavage auto Lomé, déménagement, entretien bureaux, transport, TAOMAN GROUP INVESTMENTS"
      />
      <Header activeLink="services" />

      <main id="main-content" className="flex-grow">
        <section className="relative overflow-hidden min-h-[40vh] flex items-center py-16 px-6 text-white">
          <PhotoHeroBackground
            src={HERO_MEDIA_SPECS.services.src}
            objectPosition={HERO_MEDIA_SPECS.services.objectPosition}
            overlayVariant={HERO_MEDIA_SPECS.services.overlayVariant}
            overlayIntensity="strong"
          />
          <FloatingDecor className="z-[2]" />
          <div className="relative z-10 max-w-[1200px] mx-auto text-center [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">
              {tQuote.hubEyebrow || tNav.operationalServices}
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-[-0.04em] mb-4">{tQuote.title}</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              {tQuote.hubDescription || tQuote.subtitle}
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto">
            <Reveal>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-3">
                  {tQuote.hubTitle || tQuote.title}
                </h2>
                <p className="text-on-surface-variant max-w-2xl mx-auto">
                  {tQuote.cardsIntro || tQuote.subtitle}
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.id}
                    to={card.href}
                    className="group rounded-3xl border border-outline-variant/50 bg-surface-container-lowest p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-lg font-black text-on-surface mb-2 group-hover:text-primary transition">
                      {card.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">{card.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                      {tQuote.cardsCta || tQuote.submitLabel}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="formulaire-devis" className="py-16 px-6 bg-surface-container-low">
          <div className="max-w-2xl mx-auto">
            <Reveal>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-on-surface mb-3">
                  {tQuote.formDivider || tQuoteForm.title}
                </h2>
                <p className="text-on-surface-variant">
                  {tQuote.formDividerDesc || tQuote.subtitle}
                </p>
              </div>
            </Reveal>
            <form
              onSubmit={handleSubmit}
              className="bg-surface p-8 md:p-10 rounded-3xl shadow-lg border border-outline-variant/40"
            >
              {submitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 mb-6">
                    <Check className="h-8 w-8" strokeWidth={2.5} />
                  </div>
                  <h2 className="text-3xl font-bold text-on-surface mb-4">{tQuote.successTitle}</h2>
                  <p className="text-lg text-on-surface-variant mb-8">{tQuote.successText}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData((prev) => ({ ...prev, service: '', date: '', description: '' }));
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    {tQuote.anotherRequest}
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-on-surface mb-8">{tQuoteForm.title}</h3>
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 font-semibold">
                      {submitError}
                    </div>
                  )}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-on-surface font-bold mb-2">{tQuoteForm.service.label}</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface"
                      >
                        <option value="">{tQuoteForm.service.placeholder}</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-on-surface font-bold mb-2">{tQuoteForm.name.label}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface"
                        placeholder={tQuoteForm.name.placeholder}
                      />
                    </div>
                    <div>
                      <label className="block text-on-surface font-bold mb-2">{tQuoteForm.email.label}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface"
                        placeholder={tQuoteForm.email.placeholder}
                      />
                    </div>
                    <div>
                      <label className="block text-on-surface font-bold mb-2">{tQuoteForm.phone.label}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface"
                        placeholder={tQuoteForm.phone.placeholder}
                      />
                    </div>
                    <div>
                      <label className="block text-on-surface font-bold mb-2">{tQuoteForm.date.label}</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface"
                      />
                    </div>
                    <div>
                      <label className="block text-on-surface font-bold mb-2">{tQuoteForm.description.label}</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface"
                        placeholder={tQuoteForm.description.placeholder}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                      {tQuote.submitLabel}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DevisPage;
