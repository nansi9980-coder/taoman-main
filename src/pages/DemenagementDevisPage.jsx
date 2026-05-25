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
import transport1 from '../assets/realisations/transport1.jpg';
import transport2 from '../assets/realisations/transport2.jpg';

export const DemenagementDevisPage = () => {
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
        setSubmitError(await getApiErrorMessage(response, "Impossible d'envoyer votre demande de devis."));
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitError(error.message || 'Erreur réseau. Réessayez plus tard.');
    } finally {
      setLoading(false);
    }
  };

  const types = [
    {
      icon: <HomeIcon className="h-6 w-6" strokeWidth={2.2} />,
      title: 'Déménagement de particuliers',
      desc: "Studios, F2, F3, F4, villas : nous prenons en charge l'emballage, le démontage du mobilier, le chargement, le transport, le déchargement, le remontage et le rangement dans le nouveau logement.",
      pts: [
        'Visite technique gratuite à domicile',
        'Cartons, papier bulle, couvertures fournis',
        'Démontage et remontage des meubles',
        "Aide à l'aménagement à l'arrivée",
      ],
    },
    {
      icon: <Building2 className="h-6 w-6" strokeWidth={2.2} />,
      title: "Déménagement d'entreprises",
      desc: "Bureaux, salles de réunion, archives, serveurs informatiques : nous planifions en dehors des heures ouvrées pour minimiser l'interruption de votre activité. Coordination directe avec votre responsable moyens généraux.",
      pts: [
        'Planning détaillé livré une semaine avant',
        'Étiquetage et numérotation systématique',
        'Manipulation sécurisée du matériel IT',
        "Reporting d'avancement à chaque étape",
      ],
    },
    {
      icon: <Landmark className="h-6 w-6" strokeWidth={2.2} />,
      title: 'Transferts spécialisés',
      desc: "Administrations publiques, ambassades, ONG, projets industriels : nous avons l'expérience des règles spécifiques (inventaires, signatures, scellés, autorisations douanières, sécurité renforcée).",
      pts: [
        "Procédures d'inventaire conformes",
        'Équipes habilitées et briefées',
        'Documentation photo et signature',
        'Coordination avec votre logisticien interne',
      ],
    },
    {
      icon: <Package className="h-6 w-6" strokeWidth={2.2} />,
      title: 'Manutention spécialisée',
      desc: "Coffres-forts, équipements industriels, pianos, œuvres d'art, mobilier de luxe : la manutention d'objets lourds, fragiles ou de grande valeur demande un matériel spécifique (transpalettes, sangles, monte-meubles) et des opérateurs expérimentés.",
      pts: [
        'Études de cas et plans de levage',
        'Matériel adapté (transpalette, monte-charge)',
        'Assurance complémentaire pour objets de valeur',
        'Couvertures et caissons sur mesure',
      ],
    },
  ];

  const emballages = [
    { icon: <Package className="h-5 w-5" strokeWidth={2.2} />, title: 'Cartons standards', desc: 'Pour livres, vêtements, vaisselle légère. Fond renforcé.' },
    { icon: <Layers className="h-5 w-5" strokeWidth={2.2} />, title: 'Papier bulle', desc: 'Pour vaisselle fragile, miroirs, cadres, écrans plats.' },
    { icon: <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />, title: 'Couvertures', desc: 'Pour gros mobilier (canapé, armoire, table).' },
    { icon: <Boxes className="h-5 w-5" strokeWidth={2.2} />, title: 'Caisses sur mesure', desc: "Pour œuvres d'art, instruments, objets de valeur." },
    { icon: <Wrench className="h-5 w-5" strokeWidth={2.2} />, title: 'Sangles', desc: 'Pour fixation et levage de mobilier lourd ou massif.' },
    { icon: <Layers className="h-5 w-5" strokeWidth={2.2} />, title: 'Film étirable', desc: 'Pour mobilier de bureau et palettisation.' },
    { icon: <BookMarked className="h-5 w-5" strokeWidth={2.2} />, title: 'Cartons livres', desc: 'Petit format pour ne pas devenir trop lourds.' },
    { icon: <Shirt className="h-5 w-5" strokeWidth={2.2} />, title: 'Penderie portable', desc: 'Pour vêtements suspendus, sans froisser.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="services" />

      <main className="flex-grow pt-24">
        <DevisPageHero sectionKey="devisDemenagement" />

        {/* INTRO */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                <Truck className="h-4 w-4" strokeWidth={2.4} /> Le service en quelques mots
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-6 tracking-tight">
                Déménager au Togo, sereinement : une logistique cadrée, des équipes formées, des biens protégés.
              </h2>
              <div className="space-y-5 text-on-surface-variant text-lg leading-relaxed">
                <p>
                  Le déménagement est l'un des moments les plus stressants de la vie d'un foyer ou d'une entreprise. Cartons mal protégés, équipes improvisées, camions inadaptés, devis flous, retards : les mauvaises surprises sont fréquentes. TAOMAN Group Investment a structuré son service de déménagement pour éliminer ces risques.
                </p>
                <p>
                  Nous opérons des déménagements <strong className="text-on-surface">de particuliers</strong>, <strong className="text-on-surface">d'entreprises</strong>, <strong className="text-on-surface">de transferts spécialisés</strong> (administrations, industriels, commerciaux) et de la <strong className="text-on-surface">manutention</strong> de volumes ou de poids hors normes. Chaque mission est précédée d'une visite technique gratuite et d'un devis détaillé.
                </p>
                <p>
                  Notre flotte couvre les déménagements urbains, inter-villes (Lomé, Kara, Atakpamé, Sokodé, Dapaong) et sous-régionaux (UEMOA, CEDEAO). Nous travaillons avec des emballages adaptés à chaque type de bien et nos équipes sont formées à la manutention sécurisée des objets fragiles, encombrants ou lourds.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/25 to-cyan-400/15 rounded-[2rem] blur-2xl" aria-hidden="true" />
              <img
                src={transport2}
                alt="Camion TAOMAN de déménagement"
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
                <ClipboardCheck className="h-4 w-4" strokeWidth={2.4} /> Nos prestations
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Quatre types de déménagement, une seule exigence : zéro casse</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                Que vous soyez un particulier qui change d'appartement, un cadre expatrié, une PME qui transfère ses bureaux ou une administration qui réorganise ses locaux, nous adaptons l'équipe, le matériel et la méthode.
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

        {/* PROCESSUS DETAILLE */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary">
                <Wrench className="h-4 w-4" strokeWidth={2.4} /> Notre processus
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Sept étapes claires, du devis au verre du salon remis à sa place</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                Notre méthode est éprouvée. Elle évite les mauvaises surprises, les retards et les casses. Vous savez à tout moment ce qui se passe et qui fait quoi.
              </p>
            </div>
            <div className="space-y-4">
              {[
                ['01', 'Demande et devis indicatif', "Vous remplissez le formulaire ou nous appelez. Nous fixons un rendez-vous d'évaluation. Pour les petits déménagements, un devis indicatif peut être émis par téléphone."],
                ['02', 'Visite technique et devis ferme', "Notre chef d'équipe vient sur place, mesure les volumes, identifie les contraintes (escaliers, ascenseur, parking, objets spéciaux) et émet un devis ferme et détaillé."],
                ['03', 'Validation et préparation', "Vous validez le devis. Nous vous livrons les cartons, le papier bulle et les couvertures. Un planning précis (heure de départ, équipes mobilisées, ordre de chargement) vous est communiqué."],
                ['04', 'Emballage', "L'équipe emballe et étiquette les biens fragiles, démonte les meubles complexes et protège le mobilier avec des couvertures spécialisées. Chaque carton est numéroté."],
                ['05', 'Chargement et transport', "Chargement méthodique du camion par catégorie (cartons puis meubles puis fragiles). Transport sécurisé avec arrimage. Suivi GPS sur les longs trajets."],
                ['06', 'Déchargement et remontage', "Déchargement piloté par notre responsable. Remontage des meubles et installation dans les pièces selon votre plan. Évacuation des emballages."],
                ['07', 'Contrôle final et signature', "Visite finale ensemble pour valider que tout est en place. Signature du procès-verbal de réception. Reporting photo si demandé."],
              ].map(([num, title, desc]) => (
                <div key={num} className="flex gap-5 rounded-2xl border border-outline-variant/40 bg-white p-6 hover:shadow-md transition-all">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-container text-white font-black shadow-md">{num}</span>
                  <div>
                    <h3 className="text-lg font-black text-on-surface">{title}</h3>
                    <p className="mt-1 text-on-surface-variant leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FLOTTE */}
        <section className="py-20 px-6 bg-gradient-to-b from-surface-container-low to-surface">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
            <div className="relative order-2 lg:order-1">
              <img src={transport1} alt="Flotte TAOMAN" className="rounded-3xl shadow-xl w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">
                <Truck className="h-4 w-4" strokeWidth={2.4} /> Notre flotte
              </p>
              <h2 className="text-4xl font-black text-on-surface mb-5">Des véhicules adaptés à chaque volume, à chaque type de bien</h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Notre flotte est entretenue par notre service mécanique en interne. Tous les véhicules sont contrôlés avant chaque déménagement (freins, pneus, attaches, propreté). Aucun bien n'est transporté dans un véhicule non préparé.
              </p>
              <div className="space-y-3">
                {[
                  ['Petits utilitaires (3-6 m³)', "Studios, déménagements partiels, livraisons rapides en ville."],
                  ['Fourgons (12-20 m³)', "Appartements F1, F2, transferts d'archives et de mobilier de bureau."],
                  ['Camions 20-30 m³', "Appartements F3, F4, premières maisons familiales."],
                  ['Camions 40-50 m³', "Villas, bureaux complets, déménagements inter-villes longue distance."],
                  ['Camions semi-remorques', "Gros transferts industriels, mobilier lourd, conteneurs."],
                ].map(([title, desc]) => (
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

        {/* EMBALLAGE & PROTECTION */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-primary">
                <Package className="h-4 w-4" strokeWidth={2.4} /> Emballage & protection
              </p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Vos biens méritent plus qu'un simple drap</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                L'emballage est le secret d'un déménagement sans casse. Nous fournissons et appliquons les emballages adaptés à chaque catégorie de bien.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {emballages.map((e) => (
                <div key={e.title} className="rounded-2xl bg-surface-container-low p-5 border border-outline-variant/30 hover:shadow-sm hover:border-primary/30 transition-all">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">{e.icon}</span>
                  <p className="mt-3 font-black text-on-surface">{e.title}</p>
                  <p className="mt-1 text-sm text-on-surface-variant leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="py-20 px-6 bg-gradient-to-br from-[#0a1830] via-[#07111f] to-[#0a1830] text-white">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-10">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">
                <ClipboardCheck className="h-4 w-4" strokeWidth={2.4} /> Demander un devis
              </p>
              <h2 className="mt-3 text-4xl font-black">Précisez votre déménagement</h2>
              <p className="mt-4 max-w-2xl mx-auto text-white/75 text-lg">
                Vous nous donnez l'origine, la destination, la date et un ordre d'idée du volume. Nous revenons sous 24 heures avec un devis indicatif et une proposition de visite technique.
              </p>
            </div>
            <div className="bg-white text-on-surface rounded-3xl shadow-2xl p-8">
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-500 rounded-lg text-green-700 flex items-center gap-2">
                  <Check className="h-5 w-5" strokeWidth={2.5} /> Votre demande a été envoyée avec succès ! Nous vous recontacterons sous peu.
                </div>
              )}
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-500 rounded-lg text-red-700">{submitError}</div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Ville de départ <span className="text-red-500">*</span></label>
                    <input type="text" name="departCity" value={formData.departCity} onChange={handleChange} placeholder="Ex: Lomé" required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Ville d'arrivée <span className="text-red-500">*</span></label>
                    <input type="text" name="arrivalCity" value={formData.arrivalCity} onChange={handleChange} placeholder="Ex: Accra" required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Quartier de départ <span className="text-red-500">*</span></label>
                    <input type="text" name="departQuarter" value={formData.departQuarter} onChange={handleChange} placeholder="Ex: Adewi" required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Quartier d'arrivée <span className="text-red-500">*</span></label>
                    <input type="text" name="arrivalQuarter" value={formData.arrivalQuarter} onChange={handleChange} placeholder="Ex: Jamestown" required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Date du déménagement <span className="text-red-500">*</span></label>
                    <input type="date" name="moveDate" value={formData.moveDate} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Heure du déménagement <span className="text-red-500">*</span></label>
                    <input type="time" name="moveTime" value={formData.moveTime} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-3">Connaissez-vous le volume approximatif ? <span className="text-red-500">*</span></label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="knownVolume" value="Oui" checked={formData.knownVolume === 'Oui'} onChange={handleChange} required className="w-4 h-4" />
                        <span>Oui</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="knownVolume" value="Non" checked={formData.knownVolume === 'Non'} onChange={handleChange} required className="w-4 h-4" />
                        <span>Non</span>
                      </label>
                    </div>
                  </div>
                  {formData.knownVolume === 'Oui' && (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold mb-2">Volume estimé</label>
                      <input type="text" name="volumeValue" value={formData.volumeValue} onChange={handleChange} placeholder="Ex: 50 m³" className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-bold mb-2">Votre nom <span className="text-red-500">*</span></label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Votre prénom <span className="text-red-500">*</span></label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Téléphone <span className="text-red-500">*</span></label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+228 ..." required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-2">Votre adresse <span className="text-red-500">*</span></label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Votre adresse complète" required className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
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
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">FAQ Déménagement</p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Les questions qu'on nous pose le plus souvent</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "Combien de temps à l'avance dois-je réserver mon déménagement ?", a: "Pour un déménagement à Lomé, 7 à 10 jours suffisent en général. Pour un déménagement inter-villes, prévoir 2 à 3 semaines. En haute saison (juillet-septembre, fins de mois), réservez 3 à 4 semaines à l'avance." },
                { q: 'Faut-il que je sois présent(e) le jour du déménagement ?', a: "Idéalement oui, surtout au moment du déchargement pour indiquer l'emplacement des meubles. Si vous êtes absent(e), nous pouvons travailler sur la base d'un plan annoté ou avec un tiers de confiance." },
                { q: 'Mes biens sont-ils assurés pendant le transport ?', a: "Oui. Une assurance de base est incluse. Pour les biens de grande valeur (œuvres d'art, équipements industriels, coffres-forts), nous proposons une assurance complémentaire optionnelle avec déclaration de valeur." },
                { q: 'Vous occupez-vous du démontage et du remontage ?', a: "Oui, et c'est inclus dans nos prestations standards. Lits, armoires, bureaux, étagères : nos équipes démontent, transportent et remontent à l'identique. Comptez 20-40 minutes par meuble complexe." },
                { q: 'Pouvez-vous gérer un déménagement international ?', a: "Oui, nous opérons dans toute la sous-région (Bénin, Ghana, Burkina, Côte d'Ivoire, Niger, Mali). Pour les destinations hors-CEDEAO, nous travaillons avec des partenaires logistiques sélectionnés." },
                { q: "Que se passe-t-il s'il pleut le jour du déménagement ?", a: "Nous décidons d'un commun accord. Si la météo rend le transport dangereux pour vos biens, nous reportons sans frais. Sinon, nous appliquons des bâches étanches et des couvertures supplémentaires." },
                { q: 'Quel est le mode de paiement ?', a: "30% à la signature du devis pour bloquer le créneau, 70% à la fin de la prestation après votre validation du PV de réception. Paiement par virement, Mobile Money ou espèces." },
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
              Préparons votre déménagement ensemble
            </h2>
            <p className="text-lg text-on-primary/90 mb-8 max-w-2xl mx-auto">
              Visite technique gratuite et devis détaillé sans engagement. Notre équipe revient vers vous sous 24 heures pour fixer un créneau.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="rounded-2xl bg-on-primary text-primary px-8 py-4 font-bold hover:opacity-90 transition">
                Parler à un conseiller
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
