import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  ClipboardCheck,
  ShieldCheck,
  FileSearch,
  Scale,
  Check,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { API_URL } from '../config';
import { getApiErrorMessage } from '../utils/apiError';
import { DevisPageHero } from '../components/DevisPageHero';
import { SeoHead } from '../components/SeoHead';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { BRAND_NAME } from '../constants/branding';
import { useLanguage } from '../context/LanguageContext';
import { getAuditsTranslations } from '../i18n/audits';

const AUDITS_HERO_IMAGE = '/images/audit-reporting-hero.png';

const OFFER_ICONS = {
  financial: <BarChart3 className="h-6 w-6" strokeWidth={2.2} />,
  operational: <FileSearch className="h-6 w-6" strokeWidth={2.2} />,
  compliance: <ShieldCheck className="h-6 w-6" strokeWidth={2.2} />,
};

export const AuditsDevisPage = () => {
  const { language, translations: tc } = useLanguage();
  const tSeo = tc?.audits || {};
  const t = getAuditsTranslations(language);
  const isFr = String(language || 'FR').toUpperCase() === 'FR';

  const [formData, setFormData] = useState({
    auditType: '',
    organizationType: '',
    reportingFrequency: '',
    desiredDate: '',
    organization: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [attachment, setAttachment] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError('');

    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('address', formData.organization);
      payload.append('title', `Devis Audits & Reporting - ${formData.auditType}`);
      payload.append(
        'description',
        [
          `Type: ${formData.auditType}`,
          `Profil: ${formData.organizationType}`,
          `Périodicité: ${formData.reportingFrequency}`,
          `Date souhaitée: ${formData.desiredDate}`,
          `Organisation: ${formData.organization}`,
          '',
          formData.message,
        ].join('\n'),
      );
      payload.append('service', 'Audits & Reporting');
      if (attachment) payload.append('attachment', attachment);

      const response = await fetch(`${API_URL}/quotes/submit`, {
        method: 'POST',
        body: payload,
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          auditType: '',
          organizationType: '',
          reportingFrequency: '',
          desiredDate: '',
          organization: '',
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        setAttachment(null);
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setSubmitError(await getApiErrorMessage(response, t.form.errorGeneric));
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitError(error.message || t.form.errorNetwork);
    } finally {
      setLoading(false);
    }
  };

  const offers = t.offers.items.map((item) => ({
    ...item,
    icon: OFFER_ICONS[item.id] || <Scale className="h-6 w-6" strokeWidth={2.2} />,
  }));

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <SeoHead
        title={tSeo.hero?.title || 'Devis Audits & Reporting'}
        description={tSeo.seoDescription}
        path="/audits/devis"
        keywords="audit financier Togo, reporting investisseur, KYC SYSCOA, TAOMAN GROUP INVESTMENTS, conformité CEDEAO"
      />
      <Header activeLink="services" />

      <main className="flex-grow pt-24">
        <DevisPageHero
          sectionKey="devisAudits"
          i18nNamespace="audits"
          useVideo={false}
          photoSrc={AUDITS_HERO_IMAGE}
          highContrast
        />

        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/25 to-cyan-400/15 rounded-[2rem] blur-2xl" aria-hidden="true" />
              <img
                src={AUDITS_HERO_IMAGE}
                alt={t.intro.title}
                className="relative rounded-[2rem] shadow-xl w-full aspect-[4/3] object-cover object-center ring-1 ring-black/5"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                <Sparkles className="h-4 w-4" strokeWidth={2.4} /> {t.intro.eyebrow}
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-6 tracking-tight">
                {t.intro.title}
              </h2>
              <div className="space-y-5 text-on-surface-variant text-lg leading-relaxed">
                {t.intro.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-b from-surface-container-low to-surface">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary">
                <ClipboardCheck className="h-4 w-4" strokeWidth={2.4} /> {t.offers.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">{t.offers.title}</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">{t.offers.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="rounded-3xl bg-white border border-outline-variant/40 p-7 hover:shadow-xl transition-all"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    {offer.icon}
                  </span>
                  <h3 className="mt-4 text-xl font-black text-on-surface">{offer.title}</h3>
                  <p className="mt-3 text-on-surface-variant leading-relaxed text-sm">{offer.desc}</p>
                  <ul className="mt-4 space-y-2 text-sm text-on-surface">
                    {offer.pts.map((pt) => (
                      <li key={pt} className="flex gap-2 items-start">
                        <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" strokeWidth={2.5} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">{t.method.eyebrow}</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-black text-on-surface">{t.method.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.method.steps.map((step) => (
                <div
                  key={step.num}
                  className="rounded-2xl bg-white border border-outline-variant/40 p-5 hover:shadow-lg transition-all"
                >
                  <span className="text-2xl font-black text-primary/40">{step.num}</span>
                  <h3 className="mt-2 font-bold text-on-surface">{step.title}</h3>
                  <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-br from-[#0a1830] via-[#07111f] to-[#0a1830] text-white">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-10">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">
                <ClipboardCheck className="h-4 w-4" strokeWidth={2.4} /> {t.form.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-black">{t.form.title}</h2>
              <p className="mt-4 max-w-2xl mx-auto text-white/75 text-lg">{t.form.description}</p>
            </div>
            <div className="bg-white text-on-surface rounded-3xl shadow-2xl p-8">
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-500 rounded-lg text-green-700 flex items-center gap-2">
                  <Check className="h-5 w-5" strokeWidth={2.5} /> {t.form.success}
                </div>
              )}
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-500 rounded-lg text-red-700">{submitError}</div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      {t.form.fields.auditType.label} <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="auditType"
                      value={formData.auditType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">{isFr ? 'Sélectionner' : 'Select'}</option>
                      {t.form.fields.auditType.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      {t.form.fields.organizationType.label} <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="organizationType"
                      value={formData.organizationType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">{isFr ? 'Sélectionner' : 'Select'}</option>
                      {t.form.fields.organizationType.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">{t.form.fields.reportingFrequency.label}</label>
                    <select
                      name="reportingFrequency"
                      value={formData.reportingFrequency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">{isFr ? 'Sélectionner' : 'Select'}</option>
                      {t.form.fields.reportingFrequency.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">{t.form.fields.desiredDate.label}</label>
                    <input
                      type="date"
                      name="desiredDate"
                      value={formData.desiredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-2">
                      {t.form.fields.organization.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder={t.form.fields.organization.placeholder}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      {t.form.fields.name.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.form.fields.name.placeholder}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      {t.form.fields.email.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.form.fields.email.placeholder}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      {t.form.fields.phone.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.form.fields.phone.placeholder}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-2">{t.form.fields.message.label}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.form.fields.message.placeholder}
                      rows={4}
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-2">{t.form.fields.attachmentLabel}</label>
                    <input
                      type="file"
                      accept=".pdf,application/pdf"
                      onChange={(e) => setAttachment(e.target.files?.[0] || null)}
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary/10 file:text-primary file:font-bold"
                    />
                    <p className="mt-2 text-xs text-on-surface-variant">{t.form.fields.attachmentHint}</p>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-bold py-3.5 rounded-xl hover:shadow-xl hover:scale-[1.01] transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? t.form.sending : t.form.submit}
                </button>
              </form>
            </div>
          </div>
        </section>

        <MarqueeTicker
          items={[
            BRAND_NAME,
            isFr ? 'Audits & Reporting' : 'Audits & Reporting',
            isFr ? 'Devis sous 48h · Conformité SYSCOA' : 'Quote within 48h · SYSCOA compliance',
            'Lomé · Togo',
          ]}
          speed={26}
        />

        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">{t.faq.eyebrow}</p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">{t.faq.title}</h2>
            </div>
            <div className="space-y-4">
              {t.faq.items.map((item) => (
                <details key={item.question} className="group rounded-2xl bg-white border border-outline-variant/40 p-5 hover:shadow-sm transition-all">
                  <summary className="cursor-pointer flex justify-between items-center font-bold text-on-surface gap-4">
                    <span>{item.question}</span>
                    <ChevronDown className="h-5 w-5 text-primary group-open:rotate-180 transition-transform shrink-0" strokeWidth={2.4} />
                  </summary>
                  <p className="mt-3 text-on-surface-variant leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary to-primary-container py-16 px-6">
          <div className="max-w-[1100px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-on-primary mb-3">{t.finalCta.title}</h2>
            <p className="text-lg text-on-primary/90 mb-8 max-w-2xl mx-auto">{t.finalCta.description}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/services" className="rounded-2xl bg-on-primary text-primary px-8 py-4 font-bold hover:opacity-90 transition inline-flex justify-center items-center">
                {t.finalCta.btnServices}
              </Link>
              <Link to="/contact?topic=invest" className="rounded-2xl border border-on-primary text-on-primary px-8 py-4 font-bold hover:bg-on-primary hover:text-primary transition inline-flex justify-center items-center">
                {t.finalCta.btnQuote}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
