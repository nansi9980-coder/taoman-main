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
import mecanique1 from '../assets/realisations/mecanique1.png';
import mecanique2 from '../assets/realisations/mecanique2.jpg';

export const EntretienBureauxPage = () => {
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
        setSubmitError(await getApiErrorMessage(response, "Impossible d'envoyer votre demande de devis."));
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitError(error.message || 'Erreur réseau. Réessayez plus tard.');
    } finally {
      setLoading(false);
    }
  };

  const prestations = [
    {
      icon: <CalendarDays className="h-6 w-6" strokeWidth={2.2} />,
      title: 'Entretien régulier hebdomadaire',
      badge: 'Le plus demandé',
      desc: "Idéal pour les PME et cabinets. Une à plusieurs interventions par semaine, planifiées en dehors des heures de travail ou tôt le matin. Une équipe attitrée assure la continuité du service et la connaissance précise de vos locaux.",
      pts: [
        'Nettoyage des sols, plinthes et tapis',
        'Dépoussiérage des bureaux et mobiliers',
        'Désinfection des sanitaires et points de contact',
        'Vidage des poubelles et tri des recyclables',
        'Aération et désodorisation des espaces',
      ],
    },
    {
      icon: <Sun className="h-6 w-6" strokeWidth={2.2} />,
      title: 'Entretien quotidien',
      badge: 'Sites à forte fréquentation',
      desc: "Recommandé pour les commerces, restaurants, cliniques, écoles. Une équipe matinale ou nocturne prend en charge le nettoyage avant l'ouverture, garantissant un accueil irréprochable chaque jour.",
      pts: [
        "Nettoyage complet avant ouverture",
        "Réapprovisionnement consommables (papier, savon)",
        "Reporting d'incidents et casses",
        "Tenue d'un cahier de présence et de tâches",
        "Astreinte téléphonique pour besoins urgents",
      ],
    },
    {
      icon: <Brush className="h-6 w-6" strokeWidth={2.2} />,
      title: 'Nettoyage ponctuel',
      badge: 'Sans engagement',
      desc: "Pour un grand nettoyage exceptionnel après travaux, avant une visite importante, en fin de location, ou pour rattraper une période de négligence. Intervention sur devis ferme, équipe dédiée.",
      pts: [
        'Nettoyage des sols, vitres et stores',
        'Décapage et lustrage des sols durs',
        'Détartrage des sanitaires',
        'Nettoyage des moquettes au shampouinage',
        'Évacuation des déchets encombrants',
      ],
    },
    {
      icon: <Calendar className="h-6 w-6" strokeWidth={2.2} />,
      title: 'Entretien bihebdo / mensuel',
      badge: 'Bureaux à faible passage',
      desc: "Adapté aux bureaux occupés à temps partiel, aux résidences secondaires professionnelles ou aux locaux de stockage. Une intervention complète tous les 15 jours ou tous les mois.",
      pts: [
        'Audit qualité après chaque intervention',
        'Rapport photo des zones traitées',
        'Tarification adaptée à la périodicité',
        'Coordination avec un référent unique',
        "Possibilité d'extensions ponctuelles",
      ],
    },
  ];

  const cibles = [
    { icon: <Building2 className="h-6 w-6" strokeWidth={2} />, name: 'PME & startups' },
    { icon: <Scale className="h-6 w-6" strokeWidth={2} />, name: 'Cabinets professionnels' },
    { icon: <Landmark className="h-6 w-6" strokeWidth={2} />, name: 'Administrations' },
    { icon: <Stethoscope className="h-6 w-6" strokeWidth={2} />, name: 'Cliniques médicales' },
    { icon: <GraduationCap className="h-6 w-6" strokeWidth={2} />, name: 'Écoles & universités' },
    { icon: <Store className="h-6 w-6" strokeWidth={2} />, name: 'Commerces & boutiques' },
    { icon: <UtensilsCrossed className="h-6 w-6" strokeWidth={2} />, name: 'Restaurants & cuisines pro' },
    { icon: <Hotel className="h-6 w-6" strokeWidth={2} />, name: 'Hôtels & résidences' },
  ];

  const equipements = [
    { icon: <TestTubes className="h-5 w-5" strokeWidth={2.2} />, title: 'Produits éco-responsables', desc: 'Nettoyants biodégradables, faible toxicité, sans phosphates ni solvants agressifs.' },
    { icon: <Wind className="h-5 w-5" strokeWidth={2.2} />, title: 'Aspirateurs HEPA', desc: 'Filtration fine qui retient même les particules les plus petites (essentiel pour environnements sensibles).' },
    { icon: <Sparkles className="h-5 w-5" strokeWidth={2.2} />, title: 'Microfibres certifiées', desc: 'Chiffons codifiés par couleur (sanitaire, bureau, vitre, sol) pour éviter toute contamination croisée.' },
    { icon: <ClipboardList className="h-5 w-5" strokeWidth={2.2} />, title: 'Chariots professionnels', desc: 'Organisation rigoureuse du matériel, accès rapide, ergonomie pour les opérateurs.' },
    { icon: <Bot className="h-5 w-5" strokeWidth={2.2} />, title: 'Mono-brosses & auto-laveuses', desc: 'Pour les grandes surfaces de sols durs (open-spaces, hall, parking couvert).' },
    { icon: <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />, title: 'Désinfectants EN 14476', desc: 'Efficacité prouvée contre bactéries et virus (utile pour cabinets médicaux et écoles).' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="services" />

      <main className="flex-grow pt-24">
        <DevisPageHero sectionKey="devisBureaux" />

        {/* INTRO */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                <Sparkles className="h-4 w-4" strokeWidth={2.4} /> Le service en quelques mots
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-6 tracking-tight">
                Des bureaux propres, en permanence : le quotidien de vos équipes commence par un environnement sain.
              </h2>
              <div className="space-y-5 text-on-surface-variant text-lg leading-relaxed">
                <p>
                  Un bureau propre, c'est plus qu'une question d'esthétique. C'est un environnement de travail sain pour vos collaborateurs, une image professionnelle pour vos clients et fournisseurs, et un facteur reconnu de productivité, de bien-être et de fidélisation des équipes.
                </p>
                <p>
                  TAOMAN Group Investment opère des contrats d'entretien professionnel pour <strong className="text-on-surface">PME</strong>, <strong className="text-on-surface">cabinets</strong>, <strong className="text-on-surface">administrations</strong>, <strong className="text-on-surface">commerces</strong>, <strong className="text-on-surface">centres médicaux</strong> et <strong className="text-on-surface">établissements scolaires</strong>. Nos équipes sont formées à la propreté professionnelle, équipées de matériel adapté et engagées par des contrats clairs.
                </p>
                <p>
                  Que vous ayez besoin d'un nettoyage ponctuel après travaux, d'un entretien quotidien avant l'ouverture des bureaux, d'un grand nettoyage trimestriel ou d'un contrat sur mesure pour un site sensible (laboratoire, salle informatique, cuisine professionnelle), nous structurons une prestation à votre exigence.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/25 to-cyan-400/15 rounded-[2rem] blur-2xl" aria-hidden="true" />
              <img
                src={mecanique1}
                alt="Équipe d'entretien TAOMAN"
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
                <ClipboardCheck className="h-4 w-4" strokeWidth={2.4} /> Nos prestations
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Quatre formules d'entretien, une seule constance dans la qualité</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                Chaque entreprise a ses rythmes, ses contraintes et ses exigences. Nous proposons quatre formules complémentaires pour couvrir tous les besoins, du nettoyage de routine à l'intervention exceptionnelle.
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
                <Wrench className="h-4 w-4" strokeWidth={2.4} /> Notre méthode
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Une méthode rigoureuse, du diagnostic à la mesure de la satisfaction</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                Chaque contrat suit le même cycle d'amélioration continue. C'est cette régularité qui permet de garantir un niveau de qualité constant sur la durée.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                ['01', 'Diagnostic', "Visite des locaux, prise des surfaces, recensement des contraintes (horaires, équipements sensibles, badges d'accès), identification des zones critiques."],
                ['02', 'Cahier des charges', "Rédaction d'un cahier des charges détaillé : fréquence, tâches précises par zone, produits utilisés, équipement fourni, horaires, points de contrôle."],
                ['03', 'Mise en place', "Constitution de l'équipe dédiée, formation aux spécificités de votre site, mise à disposition du matériel, validation des accès et consignes de sécurité."],
                ['04', 'Exécution', "Interventions selon le planning défini. Chaque intervention est tracée (heure, tâches, signature du responsable d'équipe, anomalies signalées)."],
                ['05', 'Reporting', "Reporting mensuel synthétique : nombre d'interventions, taux de présence, anomalies signalées, photos avant/après."],
                ['06', 'Contrôle qualité', "Audit mensuel par notre superviseur qualité : contrôle aléatoire des zones, satisfaction du référent interne, plan d'action en cas d'écart."],
                ['07', 'Ajustements', "Ajustement du contrat selon vos retours : ajout de tâches, modification d'horaires, renfort ponctuel, formation continue des équipes."],
                ['08', 'Renouvellement', "Bilan annuel, revue de contrat, ajustement tarifaire si nécessaire, renforcement de la relation de confiance dans la durée."],
              ].map(([num, title, desc]) => (
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
                <TestTubes className="h-4 w-4" strokeWidth={2.4} /> Produits & équipements
              </p>
              <h2 className="text-4xl font-black text-on-surface mb-5">Du matériel professionnel, des produits sans danger</h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Nous investissons dans du matériel professionnel parce qu'il fait la différence entre un nettoyage de surface et un nettoyage en profondeur. Et nous sélectionnons des produits qui nettoient efficacement sans agresser ni vos surfaces, ni vos collaborateurs.
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
                <Building2 className="h-4 w-4" strokeWidth={2.4} /> Pour qui ?
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Tous les espaces professionnels peuvent bénéficier de notre méthode</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                Du cabinet d'avocat de 60 m² au plateau de bureaux de 1 200 m², en passant par les écoles, les cliniques et les administrations : nous adaptons l'équipe, la formation et le matériel.
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
                { q: "Qui fournit les produits et le matériel ?", a: "Par défaut, TAOMAN fournit tous les produits et tout le matériel professionnel. Le coût est inclus dans le forfait. Si vous préférez fournir vos propres produits, nous pouvons l'organiser et déduire la part correspondante." },
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
