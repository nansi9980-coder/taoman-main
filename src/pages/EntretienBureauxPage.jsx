import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CalendarDays,
  Sun,
  Brush,
  Calendar,
  Check,
  ChevronDown,
  ClipboardCheck,
  Building2,
  Scale,
  Landmark,
  Stethoscope,
  GraduationCap,
  Store,
  UtensilsCrossed,
  Hotel,
  Wind,
  ShieldCheck,
  Bot,
  ClipboardList,
  Wrench,
  TestTubes,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { API_URL } from '../config';
import { getApiErrorMessage } from '../utils/apiError';
import { DevisPageHero } from '../components/DevisPageHero';
import { useLanguage } from '../context/LanguageContext';
import { getOfficeTranslations } from '../i18n/office';
import mecanique1 from '../assets/realisations/mecanique1.png';
import mecanique2 from '../assets/realisations/mecanique2.jpg';

const PRESTATION_ICONS = {
  hebdomadaire: <CalendarDays className="h-6 w-6" strokeWidth={2.2} />,
  quotidien: <Sun className="h-6 w-6" strokeWidth={2.2} />,
  ponctuel: <Brush className="h-6 w-6" strokeWidth={2.2} />,
  'bihebdo-mensuel': <Calendar className="h-6 w-6" strokeWidth={2.2} />,
};

const TARGET_ICONS = [
  <Building2 className="h-6 w-6" strokeWidth={2} />,
  <Scale className="h-6 w-6" strokeWidth={2} />,
  <Landmark className="h-6 w-6" strokeWidth={2} />,
  <Stethoscope className="h-6 w-6" strokeWidth={2} />,
  <GraduationCap className="h-6 w-6" strokeWidth={2} />,
  <Store className="h-6 w-6" strokeWidth={2} />,
  <UtensilsCrossed className="h-6 w-6" strokeWidth={2} />,
  <Hotel className="h-6 w-6" strokeWidth={2} />,
];

const EQUIPMENT_ICONS = [
  <TestTubes className="h-5 w-5" strokeWidth={2.2} />,
  <Wind className="h-5 w-5" strokeWidth={2.2} />,
  <Sparkles className="h-5 w-5" strokeWidth={2.2} />,
  <ClipboardList className="h-5 w-5" strokeWidth={2.2} />,
  <Bot className="h-5 w-5" strokeWidth={2.2} />,
  <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />,
];

export const EntretienBureauxPage = () => {
  const { language } = useLanguage();
  const t = getOfficeTranslations(language);
  const [formData, setFormData] = useState({
    serviceType: '',
    surfaceArea: '',
    roomCount: '',
    desiredDate: '',
    name: '',
    phone: '',
    address: '',
    specificNeeds: '',
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
          title: `Devis Entretien Bureaux - ${formData.surfaceArea}m²`,
          description: `Type: ${formData.serviceType} | Surface: ${formData.surfaceArea}m² | Pièces: ${formData.roomCount} | Date: ${formData.desiredDate} | Besoins spécifiques: ${formData.specificNeeds}`,
          service: 'Entretien Bureaux',
          service_type: formData.serviceType,
          surface_area: formData.surfaceArea,
          room_count: formData.roomCount,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          serviceType: '',
          surfaceArea: '',
          roomCount: '',
          desiredDate: '',
          name: '',
          phone: '',
          address: '',
          specificNeeds: '',
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

  const prestations = t.prestations.items.map((it) => ({
    ...it,
    icon: PRESTATION_ICONS[it.id] || <Brush className="h-6 w-6" strokeWidth={2.2} />,
  }));

  const cibles = t.targets.items.map((it, i) => ({
    ...it,
    icon: TARGET_ICONS[i % TARGET_ICONS.length],
  }));

  const equipements = t.equipment.items.map((it, i) => ({
    ...it,
    icon: EQUIPMENT_ICONS[i % EQUIPMENT_ICONS.length],
  }));

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="services" />

      <main className="flex-grow pt-24">
        <DevisPageHero sectionKey="devisBureaux" i18nNamespace="office" />

        {/* INTRO */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
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
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/25 to-cyan-400/15 rounded-[2rem] blur-2xl" aria-hidden="true" />
              <img
                src={mecanique1}
                alt="Équipe d'entretien Taoman Group Investissement"
                className="relative rounded-[2rem] shadow-xl w-full aspect-[4/3] object-cover ring-1 ring-black/5"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* TYPES DE PRESTATION */}
        <section className="py-20 px-6 bg-gradient-to-b from-surface-container-low to-surface">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary">
                <ClipboardCheck className="h-4 w-4" strokeWidth={2.4} /> {t.prestations.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">{t.prestations.title}</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                {t.prestations.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prestations.map((p) => (
                <div key={p.title} className="rounded-3xl bg-white border border-outline-variant/40 p-7 hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">{p.icon}</span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-primary">{p.badge}</span>
                  </div>
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

        {/* METHODE */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary">
                <Wrench className="h-4 w-4" strokeWidth={2.4} /> {t.method.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">{t.method.title}</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                {t.method.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.method.steps.map(({ num, title, desc }) => (
                <div key={num} className="rounded-2xl bg-white border border-outline-variant/40 p-5 hover:shadow-md transition-all">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-container text-white font-black text-sm shadow">{num}</span>
                  <h3 className="mt-3 text-base font-black text-on-surface">{title}</h3>
                  <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUITS & EQUIPEMENTS */}
        <section className="py-20 px-6 bg-gradient-to-b from-surface-container-low to-surface">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                <TestTubes className="h-4 w-4" strokeWidth={2.4} /> {t.equipment.eyebrow}
              </p>
              <h2 className="text-4xl font-black text-on-surface mb-5">{t.equipment.title}</h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                {t.equipment.description}
              </p>
              <div className="space-y-3">
                {equipements.map((eq) => (
                  <div key={eq.title} className="flex gap-3 rounded-xl bg-white p-4 border border-outline-variant/40 hover:shadow-sm transition-all">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      {eq.icon}
                    </span>
                    <div>
                      <p className="font-bold text-on-surface">{eq.title}</p>
                      <p className="text-sm text-on-surface-variant">{eq.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={mecanique2} alt="Matériel professionnel" className="rounded-3xl shadow-xl w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
          </div>
        </section>

        {/* QUI EST CONCERNÉ */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary">
                <Building2 className="h-4 w-4" strokeWidth={2.4} /> {t.targets.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">{t.targets.title}</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                {t.targets.description}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cibles.map((c) => (
                <div key={c.name} className="rounded-2xl bg-surface-container-low p-5 text-center border border-outline-variant/30 hover:shadow-sm hover:border-primary/30 transition-all">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">{c.icon}</span>
                  <p className="mt-3 font-black text-on-surface text-sm">{c.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULAIRE */}
        <section className="py-20 px-6 bg-gradient-to-br from-[#0a1830] via-[#07111f] to-[#0a1830] text-white">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-10">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">
                <ClipboardCheck className="h-4 w-4" strokeWidth={2.4} /> Demander un devis
              </p>
              <h2 className="mt-3 text-4xl font-black">Décrivez vos locaux et vos besoins</h2>
              <p className="mt-4 max-w-2xl mx-auto text-white/75 text-lg">
                Renseignez la surface, la fréquence souhaitée et les points particuliers à traiter. Notre équipe revient vers vous sous 24 heures avec un devis indicatif et une proposition de visite technique gratuite.
              </p>
            </div>
            <div className="bg-white text-on-surface rounded-3xl shadow-2xl p-8">
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-500 rounded-lg text-green-700 flex items-center gap-2">
                  <Check className="h-5 w-5" strokeWidth={2.5} /> Votre devis a été envoyé avec succès ! Nous vous recontacterons sous peu.
                </div>
              )}
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-500 rounded-lg text-red-700">{submitError}</div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Type d'entretien souhaité <span className="text-red-500">*</span></label>
                    <select name="serviceType" value={formData.serviceType} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Sélectionner</option>
                      <option value="Nettoyage ponctuel">Nettoyage ponctuel</option>
                      <option value="Entretien régulier hebdomadaire">Hebdomadaire</option>
                      <option value="Entretien régulier bihebdomadaire">Bihebdomadaire</option>
                      <option value="Entretien régulier mensuel">Mensuel</option>
                      <option value="Entretien quotidien">Quotidien</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Surface (m²) <span className="text-red-500">*</span></label>
                    <input type="number" name="surfaceArea" value={formData.surfaceArea} onChange={handleChange} placeholder="Ex: 250" required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Nombre de pièces <span className="text-red-500">*</span></label>
                    <input type="number" name="roomCount" value={formData.roomCount} onChange={handleChange} placeholder="Ex: 10" required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Date souhaitée <span className="text-red-500">*</span></label>
                    <input type="date" name="desiredDate" value={formData.desiredDate} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Votre nom <span className="text-red-500">*</span></label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom complet" required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Téléphone <span className="text-red-500">*</span></label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+228 ..." required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-2">Votre adresse <span className="text-red-500">*</span></label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Adresse complète de vos locaux" required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-2">Vos besoins spécifiques</label>
                    <textarea name="specificNeeds" value={formData.specificNeeds} onChange={handleChange} placeholder="Ex: nettoyage vitres, sols spéciaux, salle informatique, restauration, etc." rows="4" className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-bold py-3.5 rounded-xl hover:shadow-xl hover:scale-[1.01] transition-all duration-300 disabled:opacity-50">
                  {loading ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">FAQ Entretien</p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Tout ce que vous devez savoir avant de contracter</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "Quelle est la durée d'engagement minimum pour un contrat régulier ?", a: "Nos contrats réguliers sont signés pour 3 mois minimum, renouvelables. Cela nous permet d'amortir la formation des équipes à votre site et de stabiliser la qualité. Pour un essai, nous proposons d'abord une intervention ponctuelle." },
                { q: "Quels sont les horaires possibles d'intervention ?", a: "Nous intervenons à toute heure : matin tôt avant l'ouverture (5h-8h), soir après la fermeture (18h-22h), nuit (22h-5h), week-ends. Le choix dépend de vos contraintes d'accès et de l'occupation de vos locaux." },
                { q: "Qui fournit les produits et le matériel ?", a: "Par défaut, Taoman Group Investissement fournit tous les produits et tout le matériel professionnel. Le coût est inclus dans le forfait. Si vous préférez fournir vos propres produits, nous pouvons l'organiser et déduire la part correspondante." },
                { q: "Que se passe-t-il en cas d'absence d'un agent ?", a: "Notre équipe inclut un système de remplacement. En cas d'absence d'un agent, un binôme connaît le site et prend le relais. Vous ne voyez pas la rupture, c'est notre responsabilité." },
                { q: "Mes équipements sensibles (ordinateurs, serveurs) sont-ils en sécurité ?", a: "Nos agents sont formés à respecter le mobilier et les équipements informatiques. Nous n'ouvrons pas les tiroirs, nous ne touchons pas aux papiers personnels et nous évitons les claviers et écrans lors du nettoyage des bureaux occupés." },
                { q: "Effectuez-vous le nettoyage des sanitaires et des cuisines pro ?", a: "Oui. Ce sont des zones spécifiques avec leur propre protocole (désinfectants norme EN 14476, microfibres dédiées, fréquence renforcée). Si vous avez une cuisine professionnelle, nous adaptons le protocole HACCP." },
                { q: "Recevez-vous un reporting régulier ?", a: "Oui. Pour les contrats réguliers, nous remettons chaque mois un mini-rapport (interventions effectuées, anomalies signalées, photos avant/après, recommandations)." },
                { q: "Vos agents sont-ils déclarés et assurés ?", a: "Oui. Tous nos agents sont en contrat de travail formel, déclarés à la CNSS, formés, équipés d'EPI (chaussures, gants, vêtements de travail) et couverts par notre responsabilité civile professionnelle." },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl bg-white border border-outline-variant/40 p-5 hover:shadow-sm transition-all">
                  <summary className="cursor-pointer flex justify-between items-center font-bold text-on-surface gap-4">
                    <span>{item.q}</span>
                    <ChevronDown className="h-5 w-5 text-primary group-open:rotate-180 transition-transform shrink-0" strokeWidth={2.4} />
                  </summary>
                  <p className="mt-3 text-on-surface-variant leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary to-primary-container py-16 px-6">
          <div className="max-w-[1100px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-on-primary mb-3">
              Confiez l'entretien de vos bureaux à des professionnels
            </h2>
            <p className="text-lg text-on-primary/90 mb-8 max-w-2xl mx-auto">
              Visite technique gratuite, devis détaillé, contrat clair. Vos équipes méritent un environnement de travail sain et nous savons le maintenir dans la durée.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="rounded-2xl bg-on-primary text-primary px-8 py-4 font-bold hover:opacity-90 transition">
                Demander une visite
              </Link>
              <Link to="/services" className="rounded-2xl border border-on-primary text-on-primary px-8 py-4 font-bold hover:bg-on-primary hover:text-primary transition inline-flex justify-center items-center">
                Voir tous les services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
