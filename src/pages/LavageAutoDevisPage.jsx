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
import lavage1 from '../assets/realisations/lavage1.jpg';
import lavage2 from '../assets/realisations/lavage2.jpg';

export const LavageAutoDevisPage = () => {
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
        setSubmitError(await getApiErrorMessage(response, "Impossible d'envoyer votre demande de devis."));
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitError(error.message || 'Erreur réseau. Réessayez plus tard.');
    } finally {
      setLoading(false);
    }
  };

  const formules = [
    {
      icon: <Droplets className="h-6 w-6" strokeWidth={2.2} />,
      title: 'Lavage Intérieur',
      duration: '45 – 75 min',
      desc: "Idéal pour les véhicules dont l'extérieur reste correct mais dont l'habitacle a besoin d'un vrai rafraîchissement : poussières, miettes, taches, odeurs.",
      points: [
        'Aspirateur professionnel des sièges, tapis, coffre',
        'Nettoyage vapeur des zones sensibles',
        'Shampouinage sièges et moquettes (en option)',
        "Tableau de bord, console et plastiques",
        'Vitres intérieures et miroirs',
        'Désodorisation finale microfibre',
      ],
      highlight: false,
    },
    {
      icon: <Sparkles className="h-6 w-6" strokeWidth={2.2} />,
      title: 'Lavage Général',
      duration: '90 – 150 min',
      desc: "La formule la plus complète : intérieur + extérieur. Recommandée pour préparer un long trajet, une réception client ou simplement remettre un véhicule au niveau d'un véhicule neuf.",
      points: [
        'Tout le Lavage Intérieur inclus',
        'Tout le Lavage Extérieur inclus',
        'Polissage plastiques extérieurs',
        'Traitement déperlant des vitres',
        'Aspiration approfondie du coffre',
        'Brillance finale par cire express',
      ],
      highlight: true,
    },
    {
      icon: <Car className="h-6 w-6" strokeWidth={2.2} />,
      title: 'Lavage Extérieur',
      duration: '30 – 60 min',
      desc: "Conçu pour les véhicules qui roulent beaucoup en environnement poussiéreux ou pluvieux et qui demandent un rafraîchissement régulier de la carrosserie.",
      points: [
        'Pré-lavage haute pression',
        'Shampooing carrosserie microfibre',
        'Nettoyage jantes, pneus et passages de roue',
        'Rinçage haute pression et séchage',
        'Brillant pneus et lustre carrosserie',
        'Vitres et miroirs extérieurs',
      ],
      highlight: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="services" />

      <main className="flex-grow pt-24">
        <DevisPageHero sectionKey="devisLavage" />

        {/* INTRO – Texte de contexte riche */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                <Sparkles className="h-4 w-4" strokeWidth={2.4} /> Le service en quelques mots
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-6 tracking-tight">
                Un lavage automobile pensé pour durer, pas seulement pour briller.
              </h2>
              <div className="space-y-5 text-on-surface-variant text-lg leading-relaxed">
                <p>
                  TAOMAN Group Investment opère un service de lavage automobile haut de gamme destiné aux particuliers, aux flottes d'entreprise et aux investisseurs qui souhaitent maintenir la valeur de leurs véhicules. Chaque prestation est réalisée par des équipes formées, avec un matériel professionnel et des produits sélectionnés pour leur efficacité comme pour leur respect de la carrosserie.
                </p>
                <p>
                  Notre conviction est simple : laver un véhicule n'est pas une dépense, c'est un acte d'entretien qui prolonge la durée de vie de la carrosserie, des sièges, des moquettes et des optiques. Un véhicule régulièrement entretenu se revend mieux, consomme moins en frais d'usure et reflète une image plus professionnelle dans la vie quotidienne ou en clientèle.
                </p>
                <p>
                  Nous proposons trois formules complémentaires – <strong className="text-on-surface">Lavage Intérieur</strong>, <strong className="text-on-surface">Lavage Extérieur</strong> et <strong className="text-on-surface">Lavage Général</strong> – ainsi qu'une option <strong className="text-on-surface">à domicile</strong> pour les clients qui ne peuvent pas se déplacer. Chaque formule est encadrée par une checklist, un délai annoncé et un contrôle qualité avant remise du véhicule.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/25 to-cyan-400/15 rounded-[2rem] blur-2xl" aria-hidden="true" />
              <img
                src={lavage1}
                alt="Prestation de lavage TAOMAN"
                className="relative rounded-[2rem] shadow-xl w-full aspect-[4/3] object-cover ring-1 ring-black/5"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* 3 FORMULES */}
        <section className="py-20 px-6 bg-gradient-to-b from-surface-container-low to-surface">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary">
                <ClipboardCheck className="h-4 w-4" strokeWidth={2.4} /> Nos formules
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Trois formules, un seul niveau d'exigence</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                Choisissez la formule qui correspond à l'état actuel de votre véhicule et au résultat que vous attendez. Toutes les formules incluent un contrôle visuel par notre responsable d'équipe avant la restitution.
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
                    {f.highlight && <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-[10px]">Recommandé</span>}
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
                <Wrench className="h-4 w-4" strokeWidth={2.4} /> Notre processus
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Du devis au véhicule restitué, étape par étape</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                Chaque prestation suit la même méthode rigoureuse. Pas d'improvisation. Pas de surprise. Chaque collaborateur connaît sa checklist et son ordre d'intervention.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ['01', 'Demande de devis', "Vous remplissez le formulaire ou nous contactez par téléphone. Nous notons le type de véhicule, l'état, l'urgence et le lieu d'intervention souhaité (centre TAOMAN ou domicile)."],
                ['02', 'Confirmation et planning', "Nous validons la formule la plus adaptée à votre véhicule, vous communiquons un créneau et un délai indicatif. Vous recevez une confirmation écrite avec le détail du périmètre."],
                ['03', 'Accueil et inspection', "À l'arrivée, le responsable d'équipe inspecte le véhicule avec vous, identifie les zones nécessitant un soin particulier (taches anciennes, plastiques jaunis, jantes très sales) et note les éventuels défauts existants."],
                ['04', 'Exécution par formule', "L'équipe applique la checklist correspondant à la formule choisie. Les produits sont sélectionnés en fonction des matériaux (cuir, alcantara, tissu, plastique souple) pour ne jamais agresser les surfaces."],
                ['05', 'Contrôle qualité', "Avant la restitution, un second collaborateur effectue un contrôle visuel sur l'ensemble des points de la checklist. Si une zone n'est pas conforme, elle est immédiatement reprise."],
                ['06', 'Restitution et satisfaction', "Vous récupérez le véhicule sur le parking ou à domicile, nous parcourons ensemble les points clés du lavage, et vous donnez votre retour. En cas d'insatisfaction, nous corrigeons sans frais supplémentaires."],
              ].map(([num, title, desc]) => (
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
                <Car className="h-4 w-4" strokeWidth={2.4} /> Pour quel véhicule ?
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Citadine, berline, SUV, 4x4, utilitaire ou moto : nous adaptons.</h2>
              <p className="mt-4 text-on-surface-variant leading-relaxed text-lg">
                Le lavage n'est pas un service uniforme. Une citadine en zone urbaine ne subit pas les mêmes agressions qu'un 4x4 qui roule en piste ou qu'un utilitaire de livraison qui sort tous les jours. Nos équipes adaptent la formule, le temps de prestation et les produits selon le type de véhicule, son usage et son état.
              </p>
              <p className="mt-3 text-on-surface-variant leading-relaxed">
                Pour les flottes d'entreprise (10 véhicules et plus), nous proposons des contrats d'entretien périodiques, des tarifs préférentiels, un planning d'intervention sur site et un reporting mensuel à votre service moyens généraux.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Citadine', "Petits volumes, accès facile. Idéal pour un lavage rapide hebdomadaire ou bi-hebdomadaire."],
                ['Berline', "Soins particuliers pour les sièges en tissu/cuir et les optiques. Lavage général recommandé tous les 15 jours."],
                ['Compacte', "Compromise volume/maniabilité. Adaptée à toutes les formules sans contraintes."],
                ['SUV', "Plus de surface vitrée, jantes complexes, marche-pied à nettoyer. Prévoir 20 minutes supplémentaires."],
                ['4x4', "Souvent boueux, dessous très exposés. Pré-lavage haute pression obligatoire pour décoller la terre sèche."],
                ['Utilitaire', "Carrosserie souvent rayée, cargo intérieur à dépoussiérer. Forfaits flotte adaptés."],
                ['Moto', "Lavage manuel uniquement, jamais en automatique. Soin sur les chromes, jantes, échappement."],
                ['Pick-up', "Benne à nettoyer en plus du véhicule. Forfaits avec ou sans benne disponibles."],
              ].map(([title, desc]) => (
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
                <HomeIcon className="h-4 w-4" strokeWidth={2.4} /> Où voulez-vous être lavé(e) ?
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Lavage à domicile ou au centre TAOMAN : à vous de choisir.</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                Les deux options ont leurs avantages. Nous vous proposons le choix selon votre emploi du temps, la disponibilité d'eau et d'espace, et le niveau de service souhaité.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-outline-variant/40 bg-gradient-to-br from-surface-container-low to-white p-7 hover:shadow-lg transition-all">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <HomeIcon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-4 text-2xl font-black text-on-surface mb-3">Lavage à domicile</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Notre équipe se déplace chez vous avec son matériel autonome (réserve d'eau, aspirateur, produits). Vous gagnez du temps : pas de déplacement, pas d'attente. Idéal pour les familles, les chefs d'entreprise et les expatriés.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-on-surface">
                  {[
                    "Aucune file d'attente",
                    'Travail sous votre supervision possible',
                    'Idéal pour 2 véhicules ou plus en même temps',
                    'Frais de déplacement transparents selon la zone',
                  ].map((it) => (
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
                <h3 className="mt-4 text-2xl font-black text-on-surface mb-3">Centre de lavage TAOMAN</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Notre centre dispose d'équipements lourds : haute pression industrielle, bras d'aspiration, zones couvertes et éclairées. Vous patientez dans un espace dédié pendant que votre véhicule est traité.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-on-surface">
                  {[
                    'Matériel professionnel plus puissant',
                    'Tarifs réduits par rapport au domicile',
                    "Espace d'attente confortable",
                    'Disponible sans rendez-vous (selon affluence)',
                  ].map((it) => (
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
                <ClipboardCheck className="h-4 w-4" strokeWidth={2.4} /> Demander un devis
              </p>
              <h2 className="mt-3 text-4xl font-black">Remplissez votre demande en 2 minutes</h2>
              <p className="mt-4 max-w-2xl mx-auto text-white/75 text-lg">
                Renseignez les informations sur votre véhicule et notre équipe vous recontacte sous 24 heures avec un créneau et un tarif ferme.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
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
                        <label className="block text-sm font-bold mb-2">
                          Type de lavage <span className="text-red-500">*</span>
                        </label>
                        <select name="typeService" value={formData.typeService} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                          <option value="">Sélectionner</option>
                          <option value="Lavage Interieur">Lavage Intérieur</option>
                          <option value="Lavage Exterieur">Lavage Extérieur</option>
                          <option value="Lavage Général">Lavage Général</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">
                          Vous souhaitez <span className="text-red-500">*</span>
                        </label>
                        <select name="location" value={formData.location} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                          <option value="">Sélectionner</option>
                          <option value="Un lavage à domicile">Un lavage à domicile</option>
                          <option value="Un lavage au Centre de lavage TAOMAN Group Investment">Au centre de lavage TAOMAN Group Investment</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">
                          Type de véhicule <span className="text-red-500">*</span>
                        </label>
                        <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                          <option value="">Sélectionner</option>
                          <option value="Citadine">Citadine</option>
                          <option value="Berline">Berline</option>
                          <option value="Compacte">Compacte</option>
                          <option value="SUV">SUV</option>
                          <option value="4x4">4x4</option>
                          <option value="Utilitaire">Utilitaire</option>
                          <option value="Moto">Moto</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">
                          Marque et modèle <span className="text-red-500">*</span>
                        </label>
                        <input type="text" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} placeholder="Ex: Toyota Corolla" required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">
                          Date souhaitée <span className="text-red-500">*</span>
                        </label>
                        <input type="date" name="desiredDate" value={formData.desiredDate} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">
                          Heure souhaitée <span className="text-red-500">*</span>
                        </label>
                        <input type="time" name="desiredTime" value={formData.desiredTime} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">
                          Votre nom <span className="text-red-500">*</span>
                        </label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom complet" required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2">
                          Téléphone <span className="text-red-500">*</span>
                        </label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+228 ..." required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">
                        Votre adresse <span className="text-red-500">*</span>
                      </label>
                      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Votre adresse complète" required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">Remarques additionnelles</label>
                      <textarea name="remarks" value={formData.remarks} onChange={handleChange} placeholder="Précisez l'état du véhicule, les zones à traiter en priorité, vos contraintes horaires..." rows="4" className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>

                    <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-bold py-3.5 rounded-xl hover:shadow-xl hover:scale-[1.01] transition-all duration-300 disabled:opacity-50">
                      {loading ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}
                    </button>
                  </form>
                </div>
              </div>

              <aside className="space-y-6">
                <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-200">
                    <Shield className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <p className="mt-3 text-xs font-bold uppercase tracking-widest text-cyan-200">Pourquoi TAOMAN ?</p>
                  <h3 className="mt-2 text-xl font-black">Un service pensé pour la durée de vie de votre véhicule</h3>
                  <p className="mt-3 text-white/75 leading-relaxed text-sm">
                    Nous ne vendons pas seulement un lavage : nous vendons un soin régulier qui protège votre carrosserie, votre habitacle et la valeur de revente de votre véhicule.
                  </p>
                </div>
                <div className="rounded-3xl bg-white text-on-surface p-6 shadow-xl">
                  <img src={lavage2} alt="Travail TAOMAN" className="rounded-2xl w-full aspect-[4/3] object-cover mb-4" loading="lazy" />
                  <h4 className="font-black text-on-surface">Équipement professionnel</h4>
                  <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
                    Haute pression contrôlée, aspirateurs industriels, gants microfibre certifiés, produits adaptés aux matériaux modernes.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* FAQ LAVAGE */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">FAQ Lavage</p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Vos questions, nos réponses claires</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: 'Quelle est la différence entre un lavage classique et un lavage TAOMAN ?', a: "Un lavage classique se limite souvent à un passage d'eau et de mousse. Un lavage TAOMAN repose sur une checklist, des produits adaptés au matériau, un contrôle qualité et une politique de reprise en cas d'insatisfaction. Nous traitons votre véhicule comme s'il s'agissait du nôtre." },
                { q: 'Combien de fois par mois dois-je laver mon véhicule ?', a: "En conditions normales urbaines, un Lavage Général tous les 15 jours suffit, complété par un Lavage Extérieur intermédiaire. En conditions agressives (chantier, piste, météo très poussiéreuse), un passage hebdomadaire est recommandé." },
                { q: 'Le lavage haute pression abîme-t-il la carrosserie ?', a: "Non, à condition d'utiliser une pression contrôlée et la bonne distance d'application. Nos opérateurs sont formés à cela. Une haute pression mal utilisée peut effectivement décoller un vernis ou un mastic ancien : c'est pourquoi nous inspectons toujours le véhicule avant intervention." },
                { q: 'Mes sièges en tissu sont-ils risqués au shampouinage ?', a: "Non. Nous utilisons un shampoing doux, un brossage léger et un aspirateur extracteur qui retire l'humidité résiduelle. Vos sièges sont secs en quelques heures et n'auront ni odeur ni rétrécissement." },
                { q: 'Pouvez-vous laver une moto à domicile ?', a: "Oui. La moto demande un soin particulier (chromes, échappement, jantes complexes) et un lavage à la main est obligatoire. Notre forfait moto inclut tout cela." },
                { q: 'Quels moyens de paiement acceptez-vous ?', a: "Mobile Money (Tmoney, Flooz), espèces, virement bancaire et carte. Une facture vous est remise pour chaque prestation, utile pour les flottes d'entreprise." },
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
              Votre véhicule mérite un soin professionnel
            </h2>
            <p className="text-lg text-on-primary/90 mb-8 max-w-2xl mx-auto">
              Demandez un devis personnalisé en moins de 2 minutes. Notre équipe revient vers vous sous 24 heures avec un tarif clair et un créneau ferme.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/services" className="rounded-2xl bg-on-primary text-primary px-8 py-4 font-bold hover:opacity-90 transition inline-flex justify-center items-center">
                Voir tous les services
              </Link>
              <Link to="/contact" className="rounded-2xl border border-on-primary text-on-primary px-8 py-4 font-bold hover:bg-on-primary hover:text-primary transition inline-flex justify-center items-center">
                Parler à un conseiller
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
