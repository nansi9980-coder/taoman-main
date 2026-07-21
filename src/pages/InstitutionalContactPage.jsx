import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Landmark,
  TrendingUp,
  Lightbulb,
  Briefcase,
  FileText,
  HelpCircle,
  Wrench,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  Check,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Globe2,
} from 'lucide-react';
import { Header } from '../components/Header';
import { SeoHead } from '../components/SeoHead';
import { Footer } from '../components/Footer';
import { PhotoHeroBackground } from '../components/PhotoHeroBackground';
import { Reveal } from '../components/Reveal';
import { FloatingDecor } from '../components/FloatingDecor';
import { TextReveal } from '../components/TextReveal';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { BRAND_NAME } from '../constants/branding';
import { HERO_MEDIA_SPECS } from '../constants/heroMedia';
import { API_URL } from '../config';
import { useSiteContent } from '../context/SiteContentContext';
import { useLanguage } from '../context/LanguageContext';
import { getApiErrorMessage } from '../utils/apiError';
import { getContactTranslations } from '../i18n/contact';

const QUICK_LINKS = [
  { id: 'about', href: '/about', icon: Building2 },
  { id: 'sectors', href: '/secteurs', icon: Briefcase },
  { id: 'invest', href: '/investissement', icon: TrendingUp },
  { id: 'tgi', href: '/investissement/tgi', icon: Landmark },
  { id: 'submit', href: '/investissement/soumettre', icon: Lightbulb },
  { id: 'services', href: '/services', icon: Wrench },
  { id: 'devis', href: '/devis', icon: FileText },
  { id: 'faq', href: '/faq', icon: HelpCircle },
];

const FORM_FIELDS = [
  'organization',
  'institutionType',
  'name',
  'role',
  'email',
  'phone',
  'country',
  'interestArea',
  'message',
];

const InstitutionalContactForm = ({ tInst, contactInfo, tForm, tSidebar }) => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const fields = tInst.fields || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const lines = [
        `${fields.institutionType?.label}: ${formData.institutionType || '—'}`,
        `${fields.country?.label}: ${formData.country || '—'}`,
        `${fields.interestArea?.label}: ${formData.interestArea || '—'}`,
        `${fields.role?.label}: ${formData.role || '—'}`,
      ];
      const description = `${tInst.form.headline}\n${lines.join('\n')}\n\n${formData.message || ''}`.trim();

      const payload = new FormData();
      payload.append('name', formData.name || formData.organization || 'Contact institutionnel');
      payload.append('email', formData.email);
      payload.append('phone', formData.phone || '');
      payload.append(
        'subject',
        `${tInst.form.serviceTag} – ${formData.organization || tInst.form.badge}`,
      );
      payload.append('message', description);
      payload.append('topic', 'institutional');

      const response = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        body: payload,
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({});
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setError(await getApiErrorMessage(response, tForm.errorGeneric));
      }
    } catch (err) {
      console.error('Erreur:', err);
      setError(err.message || tForm.errorNetwork);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-[1.5fr_0.85fr] gap-8">
      <div className="rounded-3xl bg-white border border-outline-variant/40 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-br from-primary to-primary-container px-7 py-5 flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
            <Globe2 className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/85">{tInst.form.badge}</p>
            <h3 className="text-xl font-black text-white">{tInst.form.headline}</h3>
          </div>
        </div>

        <div className="p-7">
          <p className="text-on-surface-variant leading-relaxed">{tInst.form.desc}</p>

          {submitted && (
            <div className="mt-5 p-4 bg-green-50 border border-green-500 rounded-2xl text-green-700 flex items-start gap-3">
              <Check className="h-5 w-5 mt-0.5 shrink-0" strokeWidth={2.5} />
              <div>
                <p className="font-bold">{tForm.sentTitle}</p>
                <p className="text-sm mt-1">{tInst.form.successText}</p>
              </div>
            </div>
          )}
          {error && (
            <div className="mt-5 p-4 bg-red-50 border border-red-500 rounded-2xl text-red-700">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {FORM_FIELDS.map((field) => {
              const config = fields[field];
              if (!config) return null;
              const isTextarea = field === 'message';
              const isSelect = Array.isArray(config.options);
              const span = isTextarea ? 'md:col-span-2' : '';
              const required = field !== 'country';

              return (
                <div key={field} className={span}>
                  <label className="block text-sm font-bold text-on-surface mb-2">
                    {config.label} {required && <span className="text-red-500">*</span>}
                  </label>
                  {isTextarea ? (
                    <textarea
                      name={field}
                      value={formData[field] || ''}
                      onChange={handleChange}
                      placeholder={config.placeholder}
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface placeholder:text-on-surface-variant/60"
                    />
                  ) : isSelect ? (
                    <select
                      name={field}
                      value={formData[field] || ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface"
                    >
                      <option value="">{tForm.selectPlaceholder}</option>
                      {config.options.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      name={field}
                      value={formData[field] || ''}
                      onChange={handleChange}
                      placeholder={config.placeholder}
                      required={required}
                      className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface placeholder:text-on-surface-variant/60"
                    />
                  )}
                </div>
              );
            })}
            <div className="md:col-span-2 mt-1">
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-white font-bold py-3.5 px-6 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all disabled:opacity-50"
              >
                {loading ? (
                  tForm.sending
                ) : (
                  <>
                    <Send className="h-4 w-4" strokeWidth={2.5} />
                    {tInst.form.submitLabel}
                  </>
                )}
              </button>
              <p className="mt-3 text-xs text-on-surface-variant text-center">{tForm.disclaimer}</p>
            </div>
          </form>
        </div>
      </div>

      <aside className="space-y-5 lg:sticky lg:top-28 self-start">
        <div className="rounded-3xl bg-white border border-outline-variant/40 p-6">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-primary">{tSidebar.eyebrow}</p>
          <div className="mt-5 space-y-4">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Phone className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  {tSidebar.phoneLabel}
                </p>
                <p className="mt-0.5 font-bold text-on-surface">{contactInfo.phone || '+228 90 42 13 77'}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Mail className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  {tSidebar.emailLabel}
                </p>
                <p className="mt-0.5 font-bold text-on-surface break-all">
                  {contactInfo.email || 'contact@taoman.group'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <MapPin className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  {tSidebar.addressLabel}
                </p>
                <p className="mt-0.5 font-bold text-on-surface">
                  {contactInfo.address || tSidebar.addressFallback}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Clock className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  {tSidebar.hoursLabel}
                </p>
                <p className="mt-0.5 font-bold text-on-surface">
                  {contactInfo.hours || tSidebar.hoursFallback}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white border border-outline-variant/40 p-6">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-primary">
            {tInst.sidebar.quickLinksTitle}
          </p>
          <ul className="mt-4 space-y-2">
            {QUICK_LINKS.map(({ id, href, icon: Icon }) => {
              const link = tInst.quickLinks?.[id];
              if (!link) return null;
              return (
                <li key={id}>
                  <Link
                    to={href}
                    className="group flex items-start gap-3 rounded-2xl p-3 transition hover:bg-surface-container-low"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                      <Icon className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-on-surface group-hover:text-primary transition">
                        {link.title}
                      </span>
                      <span className="block text-xs text-on-surface-variant mt-0.5">{link.desc}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <Link
          to="/contact"
          className="block rounded-3xl border border-outline-variant/40 bg-surface-container-low p-6 transition hover:border-primary/30 hover:shadow-md"
        >
          <p className="text-xs font-black uppercase tracking-[0.3em] text-primary">
            {tInst.sidebar.generalContact}
          </p>
          <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
            {tInst.sidebar.generalContactDesc}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
            /contact <ArrowRight className="h-4 w-4" />
          </span>
        </Link>

        <div className="rounded-3xl bg-gradient-to-br from-[#08111d] via-[#0d1a30] to-[#08111d] text-white p-6">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-200">
            <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-cyan-200">
            {tSidebar.engagementEyebrow}
          </p>
          <h4 className="mt-2 text-lg font-black text-white">{tSidebar.engagementTitle}</h4>
          <p className="mt-3 text-sm text-white/75 leading-relaxed">{tSidebar.engagementDesc}</p>
        </div>
      </aside>
    </div>
  );
};

export const InstitutionalContactPage = () => {
  const { section } = useSiteContent();
  const { nav: tNav, language } = useLanguage();
  const tContactExt = getContactTranslations(language);
  const tInst = tContactExt.institutional || getContactTranslations('FR').institutional;
  const contactInfo = section('contact') || {};
  const tForm = tContactExt.form || {};
  const tSidebar = tContactExt.sidebar || {};
  const cta = tContactExt.cta || {};

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <SeoHead
        title={tNav.institutionalContact || tInst.hero.title}
        description={tInst.seoDescription}
        path="/contact-institutionnel"
        keywords="contact institutionnel Togo, partenariat public-privé, TAOMAN GROUP INVESTMENTS, investissement institutionnel Lomé"
      />
      <Header activeLink="about" />

      <main id="main-content" className="flex-grow pt-[132px]">
        <section className="relative overflow-hidden min-h-[42vh] md:min-h-[48vh] flex items-center py-16 px-6 text-white hero-scan-line">
          <PhotoHeroBackground
            src={HERO_MEDIA_SPECS.contact.src}
            objectPosition={HERO_MEDIA_SPECS.contact.objectPosition}
            overlayVariant={HERO_MEDIA_SPECS.contact.overlayVariant}
            overlayIntensity="max"
          />
          <FloatingDecor className="z-[2]" />
          <div className="relative z-10 max-w-[1200px] mx-auto text-center px-4 py-6 md:px-8 md:py-10 rounded-3xl bg-[#020d1a]/45 backdrop-blur-md border border-white/10 shadow-2xl [text-shadow:0_2px_20px_rgba(0,0,0,0.85)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/50 bg-[#020d1a]/70 px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-cyan-100 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2.4} /> {tInst.hero.eyebrow}
            </span>
            <h1 className="mt-5 text-5xl md:text-6xl font-black tracking-[-0.04em] leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              <TextReveal elementType="span" immediate center className="block text-white" text={tInst.hero.title} />
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              {tInst.hero.description}
            </p>
          </div>
        </section>

        <MarqueeTicker
          items={[BRAND_NAME, tInst.hero.eyebrow, 'PPP · Investissement', 'Lomé · Togo']}
          speed={30}
        />

        <section className="py-16 px-6 bg-surface">
          <div className="max-w-[1400px] mx-auto">
            <Reveal preset="fadeUp">
              <div className="text-center mb-10">
                <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-primary">
                  <Landmark className="h-4 w-4" strokeWidth={2.4} /> {tInst.quickAccess.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-black text-on-surface tracking-tight section-underline">
                  {tInst.quickAccess.title}
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-on-surface-variant text-lg">
                  {tInst.quickAccess.description}
                </p>
              </div>
            </Reveal>
            <Reveal preset="fadeUp" childSelector=".inst-quick-link" stagger={0.06}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {QUICK_LINKS.map(({ id, href, icon: Icon }) => {
                  const link = tInst.quickLinks?.[id];
                  if (!link) return null;
                  return (
                    <Link
                      key={id}
                      to={href}
                      className="inst-quick-link group rounded-3xl border border-outline-variant/50 bg-surface-container-lowest p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                    >
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                        <Icon className="h-6 w-6" strokeWidth={2.2} />
                      </div>
                      <h3 className="text-lg font-black text-on-surface group-hover:text-primary transition">
                        {link.title}
                      </h3>
                      <p className="mt-2 text-sm text-on-surface-variant line-clamp-2">{link.desc}</p>
                    </Link>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        <Reveal preset="fadeUp">
          <section id="institutional-form" className="py-16 px-6 bg-gradient-to-b from-surface-container-low to-surface scroll-mt-24">
            <div className="max-w-[1400px] mx-auto">
              <div className="mb-8 flex items-center gap-2 text-sm text-on-surface-variant flex-wrap">
                <span>{tNav.institutionalContact || 'Contact institutionnel'}</span>
                <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.4} />
                <span className="text-on-surface font-bold">{tInst.form.headline}</span>
              </div>
              <InstitutionalContactForm
                tInst={tInst}
                contactInfo={contactInfo}
                tForm={tForm}
                tSidebar={tSidebar}
              />
            </div>
          </section>
        </Reveal>

        <Reveal preset="fadeUp">
          <section className="py-16 px-6 bg-gradient-to-br from-primary to-primary-container">
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1.4fr_0.8fr] gap-8 items-center text-white">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-white/85">{cta.eyebrow}</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-black leading-tight">{cta.title}</h2>
                <p className="mt-4 text-lg text-white/85 max-w-2xl leading-relaxed">{cta.description}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-primary px-6 py-3.5 font-bold shadow-md hover:scale-[1.02] transition"
                >
                  {cta.btnServices} <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
                <Link
                  to="/investissement"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur hover:bg-white hover:text-primary transition"
                >
                  {cta.btnTgi} <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
};

export default InstitutionalContactPage;
