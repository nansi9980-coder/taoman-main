import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Download, Mail } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PageHeroEnhanced } from '../components/PageHeroEnhanced';
import { Reveal } from '../components/Reveal';
import { PremiumGlowCard } from '../components/PremiumGlowCard';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { SeoHead, buildBreadcrumb } from '../components/SeoHead';
import { HERO_MEDIA_SPECS } from '../constants/heroMedia';
import { BRAND_NAME } from '../constants/branding';
import { API_URL } from '../config';
import { getApiErrorMessage } from '../utils/apiError';
import { DEFAULT_SECTORS } from '../data/sectors-defaults';
import { useLanguage } from '../context/LanguageContext';
import { getSubmitProjectTranslations } from '../i18n/submitProject';

const PROJECT_PDF_PATH = '/documents/soumission-projet-tgi.pdf';
const SUBMIT_EMAIL = 'taomancontact@gmail.com';

export const SubmitProjectPage = () => {
  const { translations: tc, language, nav: tNav } = useLanguage();
  const [searchParams] = useSearchParams();
  const tS = tc?.submitProject?.hero || {};
  const t = getSubmitProjectTranslations(language);
  const tAlt = t.altSubmission || {};
  const tSectorItems = tc?.sectors?.items || {};
  const [formData, setFormData] = useState({
    projectName: '',
    sector: '',
    location: '',
    amount: '',
    horizon: '',
    description: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    website: '',
  });
  const [attachment, setAttachment] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const sectorSlug = searchParams.get('sector');
    if (!sectorSlug) return;
    const match = DEFAULT_SECTORS.find((s) => s.slug === sectorSlug);
    if (!match) return;
    const title = tSectorItems?.[match.slug]?.title || match.title;
    setFormData((prev) => (prev.sector ? prev : { ...prev, sector: title }));
  }, [searchParams, tSectorItems]);

  const mailtoHref = `mailto:${SUBMIT_EMAIL}?subject=${encodeURIComponent(tAlt.mailSubject || 'Soumission de projet TGI')}`;

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
      payload.append('projectName', formData.projectName);
      payload.append('sector', formData.sector);
      payload.append('location', formData.location);
      payload.append('amount', formData.amount);
      payload.append('horizon', formData.horizon);
      payload.append('website', formData.website);
      payload.append('description', formData.description);
      payload.append('contactName', formData.contactName);
      payload.append('contactEmail', formData.contactEmail);
      payload.append('contactPhone', formData.contactPhone);
      if (attachment) payload.append('attachment', attachment);

      const response = await fetch(`${API_URL}/project-submissions/submit`, {
        method: 'POST',
        body: payload,
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          projectName: '',
          sector: '',
          location: '',
          amount: '',
          horizon: '',
          description: '',
          contactName: '',
          contactEmail: '',
          contactPhone: '',
          website: '',
        });
        setAttachment(null);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setSubmitError(await getApiErrorMessage(response, t.errorGeneric));
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitError(error.message || t.errorNetwork);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <SeoHead
        title={tS.title || 'Soumettre un projet'}
        description={tS.description || t.metaDescription}
        path="/investissement/soumettre"
        jsonLd={buildBreadcrumb([
          { name: tNav.home, path: '/' },
          { name: tNav.invest, path: '/investissement' },
          { name: tS.title || t.pageTitle, path: '/investissement/soumettre' },
        ])}
        keywords="soumettre projet Togo, investissement TAOMAN GROUP INVESTMENTS, financement projet Lomé"
      />
      <Header activeLink="investissement" />

      <main id="main-content" className="flex-grow pt-24">
        <PageHeroEnhanced
          photoProps={{
            src: HERO_MEDIA_SPECS.investment.src,
            objectPosition: HERO_MEDIA_SPECS.investment.objectPosition,
            overlayVariant: HERO_MEDIA_SPECS.investment.overlayVariant,
            overlayIntensity: 'strong',
          }}
          eyebrow={tS.eyebrow}
          title={tS.title}
          description={tS.description}
          align="center"
          contentClassName="max-w-[900px] px-4 py-8 md:px-10 md:py-10 rounded-3xl bg-[#020d1a]/45 backdrop-blur-md border border-white/10 shadow-2xl"
        >
          <Link to="/investissement" className="inline-flex text-sm text-cyan-200 font-bold hover:underline hover:text-white transition-colors">
            {t.backLink}
          </Link>
        </PageHeroEnhanced>

        <MarqueeTicker
          items={[BRAND_NAME, tS.eyebrow || 'Projet', 'Investissement structuré', 'Lomé · Togo'].filter(Boolean)}
          speed={28}
        />

        <section className="py-16 px-6">
          <div className="max-w-[1200px] mx-auto">
            {t.intro && (
              <Reveal preset="fadeUp">
                <div className="rounded-3xl border border-outline-variant/40 bg-white p-8 md:p-10 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">{t.intro.eyebrow}</p>
                  <h2 className="mt-3 text-3xl md:text-4xl font-black text-on-surface section-underline">{t.intro.title}</h2>
                  <p className="mt-5 max-w-4xl text-lg text-on-surface-variant leading-relaxed">{t.intro.lead}</p>
                  <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                    {t.intro.points.map((point) => (
                      <li key={point} className="flex gap-3 rounded-2xl bg-surface-container-low p-4">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-black text-sm">✓</span>
                        <span className="text-sm text-on-surface leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 rounded-2xl border border-primary/15 bg-primary/5 px-5 py-4 text-sm font-semibold text-on-surface leading-relaxed">
                    {t.intro.closing}
                  </p>
                </div>
              </Reveal>
            )}

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-10">
            <Reveal preset="fadeUp">
            <PremiumGlowCard className="rounded-3xl">
            <div className="p-8">
              <div className="mb-8 rounded-2xl border border-primary/20 bg-surface-container-low p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">{tAlt.eyebrow}</p>
                <h3 className="mt-2 text-lg font-black text-on-surface">{tAlt.title}</h3>
                <p className="mt-2 text-sm text-on-surface-variant">{tAlt.description}</p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={PROJECT_PDF_PATH}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white px-5 py-3 font-bold text-sm hover:opacity-90 transition"
                  >
                    <Download className="h-4 w-4" /> {tAlt.downloadLabel}
                  </a>
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary text-primary px-5 py-3 font-bold text-sm hover:bg-primary hover:text-white transition"
                  >
                    <Mail className="h-4 w-4" /> {tAlt.mailLabel}
                  </a>
                </div>
              </div>

              <h2 className="text-2xl font-black text-on-surface mb-2">{t.formTitle}</h2>
              <p className="text-sm text-on-surface-variant mb-6">
                {t.requiredHint.split('*')[0]}
                <span className="text-red-500">*</span>
                {t.requiredHint.split('*')[1] || ''}
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-500 rounded-lg text-green-700">
                  {t.successText}
                </div>
              )}
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-500 rounded-lg text-red-700">{submitError}</div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      {t.fields.projectName.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleChange}
                      required
                      placeholder={t.fields.projectName.placeholder}
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      {t.fields.sector.label} <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">{t.selectPlaceholder}</option>
                      {DEFAULT_SECTORS.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {tSectorItems?.[s.slug]?.title || s.title}
                        </option>
                      ))}
                      <option value="Autre">{t.otherSector}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      {t.fields.location.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder={t.fields.location.placeholder}
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      {t.fields.amount.label}
                    </label>
                    <select
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">{t.selectPlaceholder}</option>
                      {(t.fields.amount.options || []).map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      {t.fields.horizon.label}
                    </label>
                    <select
                      name="horizon"
                      value={formData.horizon}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">{t.selectPlaceholder}</option>
                      {t.fields.horizon.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      {t.fields.website.label}
                    </label>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder={t.fields.website.placeholder}
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">
                    {t.fields.description.label} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={6}
                    required
                    placeholder={t.fields.description.placeholder}
                    className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">{tAlt.attachmentLabel}</label>
                  <input
                    type="file"
                    accept=".pdf,application/pdf"
                    onChange={(e) => setAttachment(e.target.files?.[0] || null)}
                    className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary/10 file:text-primary file:font-bold"
                  />
                  <p className="mt-2 text-xs text-on-surface-variant">{tAlt.attachmentHint}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      {t.fields.contactName.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      {t.fields.contactEmail.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      {t.fields.contactPhone.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      required
                      placeholder={t.fields.contactPhone.placeholder}
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.01] disabled:opacity-50"
                >
                  {loading ? t.sending : t.submit}
                </button>
              </form>
            </div>
            </PremiumGlowCard>
            </Reveal>

            <Reveal preset="fadeLeft">
            <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
              <div className="rounded-3xl bg-[#07111f] text-white p-7 hover-card-premium interactive hover-glow motion-reduce:hover:translate-y-0">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-200">{t.process.eyebrow}</p>
                <h3 className="mt-3 text-xl font-black">{t.process.title}</h3>
                <ol className="mt-5 space-y-4">
                  {t.process.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-[#07111f] font-black">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="font-black">{step.title}</p>
                        <p className="text-sm text-white/70">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-3xl bg-white border border-outline-variant/40 p-7 hover-card-premium interactive hover-glow motion-reduce:hover:translate-y-0">
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t.help.eyebrow}</p>
                <h3 className="mt-3 text-xl font-black text-on-surface">{t.help.title}</h3>
                <p className="mt-3 text-sm text-on-surface-variant leading-relaxed">{t.help.description}</p>
                <Link
                  to="/contact?topic=invest"
                  className="mt-5 inline-flex items-center justify-center w-full rounded-2xl border border-primary px-4 py-3 font-bold text-primary hover:bg-primary hover:text-white transition"
                >
                  {t.help.cta}
                </Link>
              </div>
            </aside>
            </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
