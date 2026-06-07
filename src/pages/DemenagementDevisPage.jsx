import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  Building2,
  Landmark,
  Package,
  Truck,
  Check,
  ChevronDown,
  ClipboardCheck,
  Boxes,
  Wrench,
  ShieldCheck,
  Shirt,
  BookMarked,
  Layers,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { API_URL } from '../config';
import { getApiErrorMessage } from '../utils/apiError';
import { DevisPageHero } from '../components/DevisPageHero';
import { SeoHead } from '../components/SeoHead';
import { useLanguage } from '../context/LanguageContext';
import { getDevisMovingTranslations } from '../i18n/devisMoving';
import transport1 from '../assets/realisations/transport1.jpg';
import transport2 from '../assets/realisations/transport2.jpg';

const TYPE_ICONS = {
  particulier: <HomeIcon className="h-6 w-6" strokeWidth={2.2} />,
  entreprise: <Building2 className="h-6 w-6" strokeWidth={2.2} />,
  transfert: <Landmark className="h-6 w-6" strokeWidth={2.2} />,
  manutention: <Package className="h-6 w-6" strokeWidth={2.2} />,
};

const PACKAGING_ICONS = [
  <Package className="h-5 w-5" strokeWidth={2.2} />,
  <Layers className="h-5 w-5" strokeWidth={2.2} />,
  <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />,
  <Boxes className="h-5 w-5" strokeWidth={2.2} />,
  <Wrench className="h-5 w-5" strokeWidth={2.2} />,
  <Layers className="h-5 w-5" strokeWidth={2.2} />,
  <BookMarked className="h-5 w-5" strokeWidth={2.2} />,
  <Shirt className="h-5 w-5" strokeWidth={2.2} />,
];

export const DemenagementDevisPage = () => {
  const { language, translations: tc } = useLanguage();
  const tSeo = tc?.devisMoving || {};
  const t = getDevisMovingTranslations(language);
  const [formData, setFormData] = useState({
    departCity: '',
    arrivalCity: '',
    departQuarter: '',
    arrivalQuarter: '',
    moveDate: '',
    moveTime: '',
    knownVolume: '',
    volumeValue: '',
    name: '',
    firstName: '',
    phone: '',
    address: '',
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
          name: `${formData.firstName} ${formData.name}`,
          phone: formData.phone,
          address: formData.address,
          title: `Devis Déménagement - De ${formData.departCity} à ${formData.arrivalCity}`,
          description: `Départ: ${formData.departQuarter} (${formData.departCity}) | Arrivée: ${formData.arrivalQuarter} (${formData.arrivalCity}) | Date: ${formData.moveDate} | Heure: ${formData.moveTime} | Volume connu: ${formData.knownVolume} ${formData.volumeValue ? `(${formData.volumeValue})` : ''}`,
          service: 'Déménagement',
          departure_city: formData.departCity,
          arrival_city: formData.arrivalCity,
          departure_quarter: formData.departQuarter,
          arrival_quarter: formData.arrivalQuarter,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          departCity: '',
          arrivalCity: '',
          departQuarter: '',
          arrivalQuarter: '',
          moveDate: '',
          moveTime: '',
          knownVolume: '',
          volumeValue: '',
          name: '',
          firstName: '',
          phone: '',
          address: '',
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

  const types = t.types.items.map((it) => ({
    ...it,
    icon: TYPE_ICONS[it.id] || <Package className="h-6 w-6" strokeWidth={2.2} />,
  }));

  const emballages = t.packaging.items.map((it, i) => ({
    ...it,
    icon: PACKAGING_ICONS[i % PACKAGING_ICONS.length],
  }));

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <SeoHead
        title={tSeo.hero?.title || 'Devis déménagement'}
        description={tSeo.seoDescription}
        path="/demenagement/devis"
        keywords="devis déménagement Lomé, déménagement entreprise Togo, manutention, Taoman Group Investissement"
      />
      <Header activeLink="services" />

      <main className="flex-grow pt-24">
        <DevisPageHero sectionKey="devisDemenagement" i18nNamespace="devisMoving" />

        {/* INTRO */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                <Truck className="h-4 w-4" strokeWidth={2.4} /> {t.intro.eyebrow}
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
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/25 to-cyan-400/15 rounded-[2rem] blur-2xl" aria-hidden="true" />
              <img
                src={transport2}
                alt="Camion Taoman Group Investissement de déménagement"
                className="relative rounded-[2rem] shadow-xl w-full aspect-[4/3] object-cover ring-1 ring-black/5"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* TYPES */}
        <section className="py-20 px-6 bg-gradient-to-b from-surface-container-low to-surface">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary">
                <ClipboardCheck className="h-4 w-4" strokeWidth={2.4} /> {t.types.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">{t.types.title}</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                {t.types.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {types.map((p) => (
                <div key={p.title} className="rounded-3xl bg-white border border-outline-variant/40 p-7 hover:shadow-xl transition-all">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">{p.icon}</span>
                  <h3 className="mt-4 text-2xl font-black text-on-surface">{p.title}</h3>
                  <p className="mt-3 text-on-surface-variant leading-relaxed">{p.desc}</p>
                  <ul className="mt-4 space-y-2 text-sm text-on-surface">
                    {p.pts.map((pt) => (
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

        {/* FLOTTE */}
        <section className="py-20 px-6 bg-gradient-to-b from-surface-container-low to-surface">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
            <div className="relative order-2 lg:order-1">
              <img src={transport1} alt="Flotte Taoman Group Investissement" className="rounded-3xl shadow-xl w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                <Truck className="h-4 w-4" strokeWidth={2.4} /> {t.fleet.eyebrow}
              </p>
              <h2 className="text-4xl font-black text-on-surface mb-5">{t.fleet.title}</h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                {t.fleet.description}
              </p>
              <div className="space-y-3">
                {t.fleet.items.map(({ title, desc }) => (
                  <div key={title} className="flex gap-4 rounded-xl bg-white p-4 border border-outline-variant/40 hover:shadow-sm transition-all">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <Truck className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="font-bold text-on-surface">{title}</p>
                      <p className="text-sm text-on-surface-variant">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="py-20 px-6 bg-gradient-to-br from-[#0a1830] via-[#07111f] to-[#0a1830] text-white">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-10">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">
                <ClipboardCheck className="h-4 w-4" strokeWidth={2.4} /> {t.form.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-black">{t.form.title}</h2>
              <p className="mt-4 max-w-2xl mx-auto text-white/75 text-lg">
                {t.form.description}
              </p>
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
                    <label className="block text-sm font-bold mb-2">{t.form.fields.cityFrom.label} <span className="text-red-500">*</span></label>
                    <input type="text" name="departCity" value={formData.departCity} onChange={handleChange} placeholder={t.form.fields.cityFrom.placeholder} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">{t.form.fields.cityTo.label} <span className="text-red-500">*</span></label>
                    <input type="text" name="arrivalCity" value={formData.arrivalCity} onChange={handleChange} placeholder={t.form.fields.cityTo.placeholder} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">{t.form.fields.quartierFrom.label} <span className="text-red-500">*</span></label>
                    <input type="text" name="departQuarter" value={formData.departQuarter} onChange={handleChange} placeholder={t.form.fields.quartierFrom.placeholder} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">{t.form.fields.quartierTo.label} <span className="text-red-500">*</span></label>
                    <input type="text" name="arrivalQuarter" value={formData.arrivalQuarter} onChange={handleChange} placeholder={t.form.fields.quartierTo.placeholder} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">{t.form.fields.date.label} <span className="text-red-500">*</span></label>
                    <input type="date" name="moveDate" value={formData.moveDate} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">{t.form.fields.time.label} <span className="text-red-500">*</span></label>
                    <input type="time" name="moveTime" value={formData.moveTime} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-3">{t.form.fields.knownVolume.label} <span className="text-red-500">*</span></label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="knownVolume" value="Oui" checked={formData.knownVolume === 'Oui'} onChange={handleChange} required className="w-4 h-4" />
                        <span>{t.form.fields.knownVolume.yes}</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="knownVolume" value="Non" checked={formData.knownVolume === 'Non'} onChange={handleChange} required className="w-4 h-4" />
                        <span>{t.form.fields.knownVolume.no}</span>
                      </label>
                    </div>
                  </div>
                  {formData.knownVolume === 'Oui' && (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold mb-2">{t.form.fields.volume.label}</label>
                      <input type="text" name="volumeValue" value={formData.volumeValue} onChange={handleChange} placeholder={t.form.fields.volume.placeholder} className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-bold mb-2">{t.form.fields.name.label} <span className="text-red-500">*</span></label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">{t.form.fields.firstName.label} <span className="text-red-500">*</span></label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">{t.form.fields.phone.label} <span className="text-red-500">*</span></label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t.form.fields.phone.placeholder} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-2">{t.form.fields.address.label} <span className="text-red-500">*</span></label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder={t.form.fields.address.placeholder} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-bold py-3.5 rounded-xl hover:shadow-xl hover:scale-[1.01] transition-all duration-300 disabled:opacity-50">
                  {loading ? t.form.sending : t.form.submit}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
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
              <Link to="/contact" className="rounded-2xl bg-on-primary text-primary px-8 py-4 font-bold hover:opacity-90 transition">
                {t.finalCta.btnAdvisor}
              </Link>
              <Link to="/services" className="rounded-2xl border border-on-primary text-on-primary px-8 py-4 font-bold hover:bg-on-primary hover:text-primary transition inline-flex justify-center items-center">
                {t.finalCta.btnServices}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
