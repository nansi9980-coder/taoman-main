import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Car,
  Droplets,
  Home as HomeIcon,
  Building2,
  Check,
  ChevronDown,
  Shield,
  Clock,
  Wrench,
  ClipboardCheck,
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
import { getCarwashTranslations } from '../i18n/carwash';

const LAVAGE_HERO_IMAGE = '/images/lavage-auto-hero.png';

const FORMULA_ICONS = {
  integral: <Droplets className="h-6 w-6" strokeWidth={2.2} />,
  extreme: <Sparkles className="h-6 w-6" strokeWidth={2.2} />,
  standard: <Car className="h-6 w-6" strokeWidth={2.2} />,
};

export const LavageAutoDevisPage = () => {
  const { language, translations: tc } = useLanguage();
  const tSeo = tc?.carwash || {};
  const t = getCarwashTranslations(language);
  const isFr = String(language || 'FR').toUpperCase() === 'FR';
  const [formData, setFormData] = useState({
    typeService: '',
    location: '',
    vehicleType: '',
    vehicleModel: '',
    desiredDate: '',
    desiredTime: '',
    name: '',
    phone: '',
    address: '',
    remarks: '',
  });

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
      const response = await fetch(`${API_URL}/quotes/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          title: `Devis Lavage Auto - ${formData.vehicleModel}`,
          description: `Type: ${formData.typeService} | Lieu: ${formData.location} | Date: ${formData.desiredDate} | Heure: ${formData.desiredTime} | Remarques: ${formData.remarks}`,
          service: 'Lavage Auto',
          service_type: formData.typeService,
          vehicle_type: formData.vehicleType,
          vehicle_model: formData.vehicleModel,
          service_location: formData.location,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          typeService: '',
          location: '',
          vehicleType: '',
          vehicleModel: '',
          desiredDate: '',
          desiredTime: '',
          name: '',
          phone: '',
          address: '',
          remarks: '',
        });
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

  const formules = t.formulas.items.map((item) => ({
    ...item,
    icon: FORMULA_ICONS[item.id] || <Droplets className="h-6 w-6" strokeWidth={2.2} />,
    highlight: item.id === 'extreme',
  }));

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <SeoHead
        title={tSeo.hero?.title || 'Devis lavage auto'}
        description={tSeo.seoDescription}
        path="/lavage-auto/devis"
        keywords="devis lavage auto Lomé, lavage moto Togo, lavage à domicile, TAOMAN GROUP INVESTMENTS"
      />
      <Header activeLink="services" />

      <main className="flex-grow pt-24">
        <DevisPageHero
          sectionKey="devisLavage"
          i18nNamespace="carwash"
          useVideo={false}
          photoSrc={LAVAGE_HERO_IMAGE}
          highContrast
        />

        {/* INTRO – image gauche, texte droite */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/25 to-cyan-400/15 rounded-[2rem] blur-2xl" aria-hidden="true" />
              <img
                src={LAVAGE_HERO_IMAGE}
                alt={t.intro.title}
                className="relative rounded-[2rem] shadow-xl w-full aspect-[4/3] object-cover object-[center_35%] ring-1 ring-black/5 bg-white"
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

        {/* 3 FORMULES */}
        <section className="py-20 px-6 bg-gradient-to-b from-surface-container-low to-surface">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary">
                <ClipboardCheck className="h-4 w-4" strokeWidth={2.4} /> {t.formulas.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">{t.formulas.title}</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                {t.formulas.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {formules.map((f) => (
                <div
                  key={f.title}
                  className={
                    f.highlight
                      ? 'rounded-3xl bg-gradient-to-br from-primary to-primary-container text-white p-7 shadow-2xl ring-1 ring-white/10 lg:scale-[1.03]'
                      : 'rounded-3xl bg-white border border-outline-variant/40 p-7 hover:shadow-xl transition-all'
                  }
                >
                  <span
                    className={
                      f.highlight
                        ? 'inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white'
                        : 'inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary'
                    }
                  >
                    {f.icon}
                  </span>
                  <h3 className={f.highlight ? 'mt-5 text-2xl font-black' : 'mt-5 text-2xl font-black text-on-surface'}>{f.title}</h3>
                  <p className={f.highlight ? 'mt-3 text-white/90 leading-relaxed' : 'mt-3 text-on-surface-variant leading-relaxed'}>{f.desc}</p>
                  <ul className={f.highlight ? 'mt-5 space-y-2 text-sm' : 'mt-5 space-y-2 text-sm text-on-surface'}>
                    {f.points.map((it) => (
                      <li key={it} className="flex gap-2 items-start">
                        <Check className={f.highlight ? 'h-4 w-4 mt-0.5 text-cyan-200 shrink-0' : 'h-4 w-4 mt-0.5 text-primary shrink-0'} strokeWidth={2.5} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={f.highlight ? 'mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-200' : 'mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant'}>
                    <Clock className="h-3.5 w-3.5" strokeWidth={2.5} />
                    {f.duration}
                    {f.highlight && <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-[10px]">{t.formulas.recommendedBadge}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESSUS DETAILLE */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary">
                <Wrench className="h-4 w-4" strokeWidth={2.4} /> {t.process.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">{t.process.title}</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                {t.process.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.process.steps.map(({ num, title, desc }) => (
                <div key={num} className="rounded-3xl border border-outline-variant/40 bg-white p-6 hover:shadow-md transition-all">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-container text-white font-black text-sm shadow-md">{num}</span>
                  <h3 className="mt-4 text-lg font-black text-on-surface">{title}</h3>
                  <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TYPES DE VEHICULES */}
        <section className="py-20 px-6 bg-gradient-to-b from-surface-container-low to-surface">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary">
                <Car className="h-4 w-4" strokeWidth={2.4} /> {t.vehicles.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">{t.vehicles.title}</h2>
              {t.vehicles.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? 'mt-4 text-on-surface-variant leading-relaxed text-lg' : 'mt-3 text-on-surface-variant leading-relaxed'}>
                  {p}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {t.vehicles.items.map(({ title, desc }) => (
                <div key={title} className="rounded-2xl border border-outline-variant/40 bg-white p-4 hover:shadow-sm transition-all">
                  <p className="font-black text-on-surface">{title}</p>
                  <p className="mt-1 text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOMICILE VS CENTRE */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary">
                <HomeIcon className="h-4 w-4" strokeWidth={2.4} /> {t.location.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">{t.location.title}</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                {t.location.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-outline-variant/40 bg-gradient-to-br from-surface-container-low to-white p-7 hover:shadow-lg transition-all">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <HomeIcon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-4 text-2xl font-black text-on-surface mb-3">{t.location.home.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {t.location.home.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-on-surface">
                  {t.location.home.bullets.map((it) => (
                    <li key={it} className="flex gap-2 items-start">
                      <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" strokeWidth={2.5} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-outline-variant/40 bg-gradient-to-br from-surface-container-low to-white p-7 hover:shadow-lg transition-all">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Building2 className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-4 text-2xl font-black text-on-surface mb-3">{t.location.center.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {t.location.center.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-on-surface">
                  {t.location.center.bullets.map((it) => (
                    <li key={it} className="flex gap-2 items-start">
                      <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" strokeWidth={2.5} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="py-20 px-6 bg-gradient-to-br from-[#0a1830] via-[#07111f] to-[#0a1830] text-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">
                <ClipboardCheck className="h-4 w-4" strokeWidth={2.4} /> {t.form.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-black">{t.form.title}</h2>
              <p className="mt-4 max-w-2xl mx-auto text-white/75 text-lg">
                {t.form.description}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
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
                          {t.form.fields.washType.label} <span className="text-red-500">*</span>
                        </label>
                        <select name="typeService" value={formData.typeService} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                          <option value="">{t.form.selectPlaceholder}</option>
                          {t.form.fields.washType.options.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">
                          {t.form.fields.wish.label} <span className="text-red-500">*</span>
                        </label>
                        <select name="location" value={formData.location} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                          <option value="">{t.form.selectPlaceholder}</option>
                          {t.form.fields.wish.options.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">
                          {t.form.fields.vehicleType.label} <span className="text-red-500">*</span>
                        </label>
                        <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                          <option value="">{t.form.selectPlaceholder}</option>
                          {t.form.fields.vehicleType.options.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">
                          {t.form.fields.brand.label} <span className="text-red-500">*</span>
                        </label>
                        <input type="text" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} placeholder={t.form.fields.brand.placeholder} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">
                          {t.form.fields.date.label} <span className="text-red-500">*</span>
                        </label>
                        <input type="date" name="desiredDate" value={formData.desiredDate} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">
                          {t.form.fields.time.label} <span className="text-red-500">*</span>
                        </label>
                        <input type="time" name="desiredTime" value={formData.desiredTime} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">
                          {t.form.fields.name.label} <span className="text-red-500">*</span>
                        </label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t.form.fields.name.placeholder} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">
                          {t.form.fields.phone.label} <span className="text-red-500">*</span>
                        </label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t.form.fields.phone.placeholder} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">
                        {t.form.fields.address.label} <span className="text-red-500">*</span>
                      </label>
                      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder={t.form.fields.address.placeholder} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">{t.form.fields.notes.label}</label>
                      <textarea name="remarks" value={formData.remarks} onChange={handleChange} placeholder={t.form.fields.notes.placeholder} rows="4" className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>

                    <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-bold py-3.5 rounded-xl hover:shadow-xl hover:scale-[1.01] transition-all duration-300 disabled:opacity-50">
                      {loading ? t.form.sending : t.form.submit}
                    </button>
                  </form>
                </div>
              </div>

              <aside className="space-y-6">
                <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-200">
                    <Shield className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <p className="mt-3 text-xs font-bold uppercase tracking-widest text-cyan-200">{t.sidebar.eyebrow}</p>
                  <h3 className="mt-2 text-xl font-black">{t.sidebar.title}</h3>
                  <p className="mt-3 text-white/75 leading-relaxed text-sm">
                    {t.sidebar.description}
                  </p>
                </div>
                <div className="rounded-3xl bg-white text-on-surface p-6 shadow-xl">
                  <img src={LAVAGE_HERO_IMAGE} alt="Travail TAOMAN GROUP INVESTMENTS" className="rounded-2xl w-full aspect-[4/3] object-cover object-[center_35%] mb-4 bg-white" loading="lazy" />
                  <h4 className="font-black text-on-surface">{t.sidebar.equipmentTitle}</h4>
                  <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
                    {t.sidebar.equipmentDesc}
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <MarqueeTicker
          items={[
            BRAND_NAME,
            isFr ? 'Devis sous 24h' : 'Quote within 24h',
            isFr ? 'Intervention rapide · Lomé' : 'Fast service · Lomé',
            isFr ? 'Lavage à domicile ou en centre' : 'Home or centre wash',
          ]}
          speed={26}
        />

        {/* FAQ LAVAGE */}
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

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary to-primary-container py-16 px-6">
          <div className="max-w-[1100px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-on-primary mb-3">
              {t.finalCta.title}
            </h2>
            <p className="text-lg text-on-primary/90 mb-8 max-w-2xl mx-auto">
              {t.finalCta.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/services" className="rounded-2xl bg-on-primary text-primary px-8 py-4 font-bold hover:opacity-90 transition inline-flex justify-center items-center">
                {t.finalCta.btnServices}
              </Link>
              <Link to="/contact" className="rounded-2xl border border-on-primary text-on-primary px-8 py-4 font-bold hover:bg-on-primary hover:text-primary transition inline-flex justify-center items-center">
                {t.finalCta.btnAdvisor}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
