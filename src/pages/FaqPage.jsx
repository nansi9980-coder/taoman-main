import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  ChevronDown,
  Sparkles,
  Truck,
  Brush,
  Wrench,
  Building2,
  TrendingUp,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useSiteContent } from '../context/SiteContentContext';
import { useLanguage } from '../context/LanguageContext';
import { PremiumBackdrop } from '../components/PremiumBackdrop';
import { Reveal } from '../components/Reveal';
import { TextReveal } from '../components/TextReveal';
import { FloatingDecor } from '../components/FloatingDecor';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { BRAND_NAME } from '../constants/branding';
import { normalizeItemsSection } from '../utils/siteContent';
import { SeoHead, buildFaqLd } from '../components/SeoHead';
import { getFaqTranslations } from '../i18n/faq';

const CATEGORY_ICONS = {
  all: HelpCircle,
  lavage: Sparkles,
  demenagement: Truck,
  entretien: Brush,
  mecanique: Wrench,
  transport: Truck,
  groupe: Building2,
  investissement: TrendingUp,
};

// eslint-disable-next-line no-unused-vars
const DEFAULT_FAQ = [
  // ---- LAVAGE AUTO ----
  {
    category: 'lavage',
    question: 'Quelle est la différence entre vos formules de lavage ?',
    answer:
      "Le Lavage Intérieur traite uniquement l'habitacle (sièges, moquettes, plastiques, vitres intérieures). Le Lavage Extérieur traite uniquement la carrosserie (haute pression, shampooing, jantes, séchage, brillance). Le Lavage Général combine les deux et ajoute des soins complémentaires (polissage des plastiques, traitement déperlant des vitres, cire express).",
  },
  {
    category: 'lavage',
    question: 'Combien de temps prend un lavage Taoman Group Investissement ?',
    answer:
      'Un Lavage Extérieur prend 30 à 60 minutes selon le type de véhicule. Un Lavage Intérieur prend 45 à 75 minutes. Un Lavage Général prend 90 à 150 minutes. Pour une moto, comptez 45 à 60 minutes. Pour les SUV et 4x4, ajoutez 20 minutes au temps de base.',
  },
  {
    category: 'lavage',
    question: 'Pouvez-vous laver mon véhicule à domicile ?',
    answer:
      "Oui. Nos équipes mobiles se déplacent avec leur propre matériel autonome (réserve d'eau, aspirateur, produits). Les frais de déplacement varient selon la zone (Lomé, périphérie, autres villes). Idéal pour les familles qui ont plusieurs véhicules à laver en même temps.",
  },
  {
    category: 'lavage',
    question: 'Proposez-vous des contrats pour les flottes d\'entreprise ?',
    answer:
      "Oui. À partir de 5 véhicules nous proposons des contrats préférentiels avec planning d'intervention sur site, factures mensuelles consolidées et reporting d'entretien. Nous travaillons déjà avec plusieurs PME, cabinets et institutions togolaises.",
  },
  // ---- DÉMÉNAGEMENT ----
  {
    category: 'demenagement',
    question: "Combien de temps à l'avance dois-je réserver mon déménagement ?",
    answer:
      "Pour un déménagement à Lomé, 7 à 10 jours suffisent. Pour un déménagement inter-villes (Lomé–Kara, Lomé–Sokodé), prévoir 2 à 3 semaines. Pour un déménagement sous-régional (Bénin, Ghana, Burkina, Côte d'Ivoire), prévoir 3 à 4 semaines. En haute saison (juillet–septembre, fins de mois), anticipez davantage.",
  },
  {
    category: 'demenagement',
    question: 'Mes biens sont-ils assurés pendant le transport ?',
    answer:
      "Oui. Une assurance de base couvre l'ensemble des biens transportés. Pour les biens de grande valeur (œuvres d'art, équipements industriels, coffres-forts, mobilier de luxe), une assurance complémentaire optionnelle est disponible avec déclaration de valeur.",
  },
  {
    category: 'demenagement',
    question: 'Vous occupez-vous du démontage et du remontage du mobilier ?',
    answer:
      "Oui, c'est inclus dans nos prestations standards. Lits, armoires, bureaux, étagères, bibliothèques : nos équipes démontent à l'enlèvement et remontent à l'identique à l'arrivée. Comptez 20 à 40 minutes par meuble complexe.",
  },
  {
    category: 'demenagement',
    question: 'Pouvez-vous gérer un déménagement international ?',
    answer:
      "Oui, nous opérons dans toute la sous-région (Bénin, Ghana, Burkina Faso, Côte d'Ivoire, Niger, Mali). Pour les destinations hors-CEDEAO, nous travaillons avec un réseau de partenaires logistiques sélectionnés et nous gérons la coordination de bout en bout.",
  },
  {
    category: 'demenagement',
    question: "Que se passe-t-il s'il pleut le jour J ?",
    answer:
      "Nous décidons d'un commun accord avec vous. Si la météo rend le transport dangereux pour vos biens, nous reportons sans frais. Sinon, nous appliquons des bâches étanches, des couvertures supplémentaires et nous adaptons l'ordre de chargement pour protéger les éléments les plus fragiles.",
  },
  // ---- ENTRETIEN BUREAUX ----
  {
    category: 'entretien',
    question: "Quelle est la durée d'engagement minimum pour un contrat d'entretien ?",
    answer:
      "Nos contrats réguliers sont signés pour 3 mois minimum, renouvelables. Cette durée permet d'amortir la formation des équipes sur votre site et de stabiliser la qualité. Pour un essai, nous proposons d'abord une intervention ponctuelle ou un nettoyage approfondi unique.",
  },
  {
    category: 'entretien',
    question: 'À quels horaires intervenez-vous ?',
    answer:
      "Nous intervenons à toute heure selon vos contraintes : tôt le matin (5h-8h) avant l'ouverture, en soirée (18h-22h) après la fermeture, la nuit (22h-5h), ou les week-ends. Le choix dépend de l'occupation de vos locaux et des accès disponibles.",
  },
  {
    category: 'entretien',
    question: 'Vos agents sont-ils déclarés et formés ?',
    answer:
      "Oui. Tous nos agents sont en contrat de travail formel, déclarés à la CNSS, formés aux techniques de propreté professionnelle, équipés d'EPI (chaussures, gants, vêtements de travail) et couverts par notre responsabilité civile professionnelle. Nous opérons en règle.",
  },
  {
    category: 'entretien',
    question: 'Effectuez-vous le nettoyage des sanitaires et cuisines pro ?',
    answer:
      "Oui. Ces zones suivent un protocole spécifique (désinfectants norme EN 14476, microfibres dédiées, fréquence renforcée). Pour une cuisine professionnelle, nous appliquons un protocole HACCP. Pour un cabinet médical, nous appliquons un protocole de désinfection clinique adapté.",
  },
  {
    category: 'entretien',
    question: 'Recevez-vous un reporting régulier ?',
    answer:
      "Oui. Pour les contrats réguliers, vous recevez chaque mois un mini-rapport synthétique : interventions effectuées, taux de présence, anomalies signalées, photos avant/après pour les opérations spéciales, recommandations d'amélioration.",
  },
  // ---- MÉCANIQUE ----
  {
    category: 'mecanique',
    question: 'Quels types de véhicules votre atelier mécanique prend-il en charge ?',
    answer:
      "Notre atelier traite les voitures particulières, les utilitaires légers, les pick-ups, les SUV/4x4 ainsi que les motos. Nous travaillons sur la majorité des marques diffusées au Togo (Toyota, Hyundai, Kia, Renault, Peugeot, Mercedes, Ford, Nissan, Mitsubishi, Suzuki, etc.).",
  },
  {
    category: 'mecanique',
    question: 'Faites-vous des entretiens préventifs pour les flottes ?',
    answer:
      "Oui. Nous proposons des contrats d'entretien préventif pour les flottes d'entreprise (vidange, freins, pneus, suspension, climatisation, diagnostic électronique). Vous bénéficiez d'un suivi par véhicule, d'un planning d'intervention et de tarifs préférentiels.",
  },
  {
    category: 'mecanique',
    question: 'Diagnostiquez-vous les pannes électroniques ?',
    answer:
      "Oui. Nous disposons de valises de diagnostic multimarques permettant d'identifier les codes défauts moteur, ABS, airbag, transmission. Le diagnostic est rapide et permet de proposer une réparation ciblée plutôt qu'un changement à l'aveugle.",
  },
  // ---- TRANSPORT ----
  {
    category: 'transport',
    question: 'Quelles sont les destinations couvertes par votre service transport ?',
    answer:
      "Notre service transport opère sur l'ensemble du territoire togolais (Lomé, Kpalimé, Atakpamé, Sokodé, Kara, Dapaong) et dans la sous-région CEDEAO (Bénin, Ghana, Burkina Faso, Côte d'Ivoire, Niger, Mali, Nigeria). Pour les destinations plus lointaines, nous travaillons avec un réseau de partenaires.",
  },
  {
    category: 'transport',
    question: 'Pouvez-vous transporter des marchandises commerciales (containers, palettes) ?',
    answer:
      "Oui. Nous opérons une flotte de camions, semi-remorques et utilitaires adaptés aux marchandises commerciales : containers 20'/40', palettes Europe, marchandises en vrac, produits réfrigérés (sur demande). Tarification au voyage ou au contrat de fréquence.",
  },
  {
    category: 'transport',
    question: 'Vos véhicules sont-ils équipés d\'un suivi GPS ?',
    answer:
      "Oui, les véhicules dédiés aux transports longue distance sont équipés de balises GPS qui permettent de vous communiquer la position du chargement en temps réel et de réagir en cas d'imprévu sur le trajet.",
  },
  // ---- LE GROUPE ----
  {
    category: 'groupe',
    question: 'Qu\'est-ce que Taoman Group Investissement ?',
    answer:
      "Taoman Group Investissement est un groupe togolais multi-activités, spécialisé dans le BTP & l'immobilier, l'agro-business, le commerce général, la logistique & le transport ainsi que les services numériques. Le groupe opère également un programme d'investissement (TGI) ouvert aux particuliers pour financer des projets concrets et générer un rendement régulier.",
  },
  {
    category: 'groupe',
    question: 'Où sont basés vos bureaux ?',
    answer:
      "Le siège social du groupe se trouve à Lomé. Nos équipes opérationnelles interviennent sur l'ensemble du territoire togolais et nos correspondants couvrent la sous-région CEDEAO pour les missions transfrontalières.",
  },
  {
    category: 'groupe',
    question: 'Comment puis-je rejoindre Taoman Group Investissement ?',
    answer:
      "Nous recrutons régulièrement dans nos différents métiers : opérateurs (lavage, déménagement, entretien, mécanique, transport), techniciens, encadrants, fonctions support. Consultez la page « Carrières » du site ou envoyez votre CV via le formulaire de contact.",
  },
  {
    category: 'groupe',
    question: 'Êtes-vous une entreprise déclarée et formelle ?',
    answer:
      "Oui. Taoman Group Investissement est une société togolaise régulièrement enregistrée, fiscalement à jour, employeur déclaré à la CNSS, couverte en responsabilité civile professionnelle. Toutes nos prestations donnent lieu à une facture conforme.",
  },
  // ---- INVESTISSEMENT (TGI) ----
  {
    category: 'investissement',
    question: 'Quel est le montant minimum pour investir avec Taoman Group Investissement ?',
    answer:
      'Le ticket de départ recommandé est de 500 000 FCFA. Cela permet une diversification efficace sur plusieurs projets et un suivi optimal via votre espace investisseur.',
  },
  {
    category: 'investissement',
    question: 'Comment fonctionne le simulateur TGI ?',
    answer:
      "Le simulateur projette le rendement potentiel d'un investissement sur 10 mois maximum, en fonction du montant, du secteur choisi et du profil de risque. Les chiffres affichés sont indicatifs et reflètent les fourchettes observées sur nos projets opérés.",
  },
  {
    category: 'investissement',
    question: 'Les rendements affichés sont-ils garantis ?',
    answer:
      'Non. Les rendements affichés sont des projections fondées sur la performance opérationnelle attendue des projets. Le rendement réel dépend du projet, du secteur, du contexte et de la performance terrain. Tout investissement comporte un risque de perte partielle ou totale du capital.',
  },
  {
    category: 'investissement',
    question: 'Quels secteurs puis-je financer via TGI ?',
    answer:
      "Cinq secteurs sont actuellement ouverts à l'investissement : Logistique & Transports, Agro Business, Commerce général, BTP & Immobilier, et Numérique & Services. Vous pouvez répartir votre investissement sur plusieurs secteurs pour diversifier.",
  },
  {
    category: 'investissement',
    question: 'Comment soumettre un projet à financer ?',
    answer:
      "Utilisez le formulaire dédié sur la page « Soumettre un projet ». Décrivez votre projet, le secteur, le montant recherché, l'horizon et joignez vos justificatifs. Notre comité revient vers vous sous 5 jours ouvrés avec une décision (étude approfondie, demande de compléments, ou refus motivé).",
  },
  {
    category: 'investissement',
    question: 'Comment suis-je informé de l\'avancement de mes investissements ?',
    answer:
      'Votre espace investisseur centralise tout : portefeuille en temps réel, wallet (dépôts, retraits, commissions), reporting projet (photos, indicateurs, commentaires terrain), documents PDF (contrats, justificatifs). Accessible 24/7 après connexion.',
  },
];

export const FaqPage = () => {
  const { section, loading } = useSiteContent();
  const { content: tc, nav: tNav, language } = useLanguage();
  const tFaq = tc.faq;
  const tFaqExt = getFaqTranslations(language);
  const faq = section('faq');
  const overridden = normalizeItemsSection(faq, []);
  const items = overridden.length > 0 ? overridden : tFaqExt.items || [];
  const categories = tFaqExt.categories.map((c) => ({
    ...c,
    icon: CATEGORY_ICONS[c.id] || HelpCircle,
  }));

  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const cat = item.category || 'groupe';
      const inCategory = activeCategory === 'all' || cat === activeCategory;
      if (!inCategory) return false;
      if (!q) return true;
      return (
        (item.question || '').toLowerCase().includes(q) ||
        (item.answer || '').toLowerCase().includes(q)
      );
    });
  }, [items, activeCategory, query]);

  const faqLd = buildFaqLd(
    items.slice(0, 25).map((it) => ({ q: it.question, a: it.answer }))
  );

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <SeoHead
        title={tNav.faq}
        description={tFaq.seoDescription}
        path="/faq"
        jsonLd={faqLd}
        keywords="FAQ Taoman Group Investissement, questions fréquentes Togo, investissement Togo FAQ, services Togo"
      />
      <Header activeLink="faq" />

      <main id="main-content" className="flex-grow pt-24">
        <section className="relative overflow-hidden py-20 px-6 text-white hero-scan-line">
          <PremiumBackdrop variant="dark" intensity="normal" particles={12} />
          <FloatingDecor className="z-[1]" />
          <div className="relative z-10 max-w-[1100px] mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-cyan-200 backdrop-blur">
              <HelpCircle className="h-3.5 w-3.5" strokeWidth={2.4} /> {tFaq.hero.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-tight">
              <TextReveal
                elementType="span"
                immediate
                className="block bg-gradient-to-r from-cyan-100 via-white to-cyan-100 bg-clip-text text-transparent text-shimmer-light"
                text={tFaq.hero.title}
              />
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-lg text-white/75 leading-relaxed">
              {tFaq.hero.description}
            </p>
            <div className="relative mt-8 max-w-xl mx-auto">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                <Search className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={tFaq.searchPlaceholder}
                aria-label={tc.common.search}
                className="w-full rounded-2xl bg-white/95 pl-12 pr-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/70 shadow-2xl ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
            </div>
          </div>
        </section>

        <MarqueeTicker
          items={[BRAND_NAME, 'FAQ', 'Services · Investissement', 'Lomé · Togo']}
          speed={32}
        />

        {/* CATEGORIES */}
        <section className="sticky top-20 z-30 bg-surface/95 backdrop-blur border-b border-outline-variant/30 px-6 py-4">
          <div className="max-w-[1200px] mx-auto flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={
                    isActive
                      ? 'inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-container text-white px-4 py-2 text-sm font-bold shadow-md ring-1 ring-primary/40'
                      : 'inline-flex items-center gap-2 rounded-full bg-surface-container-low text-on-surface px-4 py-2 text-sm font-bold border border-outline-variant/40 hover:border-primary/40 hover:bg-primary/5 transition-all'
                  }
                >
                  <Icon className="h-4 w-4" strokeWidth={2.3} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* LISTE FAQ */}
        <section className="py-16 px-6 bg-surface">
          <div className="max-w-[900px] mx-auto">
            {loading ? (
              <p className="text-center text-on-surface-variant">{tc.common.loading}</p>
            ) : filtered.length === 0 ? (
              <div className="rounded-3xl border border-outline-variant/40 bg-surface-container-low p-10 text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto">
                  <Search className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-4 text-xl font-black text-on-surface">{tFaq.noResults}</h3>
                <p className="mt-2 text-on-surface-variant">{tFaqExt.noResultsHelp}</p>
              </div>
            ) : (
              <Reveal preset="fadeUp" childSelector=".faq-item-premium" stagger={0.05}>
              <div className="space-y-3">
                {filtered.map((item, index) => {
                  const cat = categories.find((c) => c.id === item.category) || categories[0];
                  const Icon = cat.icon;
                  return (
                    <details
                      key={`${item.question}-${index}`}
                      className="faq-item-premium group rounded-2xl border border-outline-variant/40 bg-white p-5 shadow-sm hover-card-premium interactive hover-glow motion-reduce:hover:translate-y-0"
                    >
                      <summary className="cursor-pointer flex items-start justify-between gap-4 list-none">
                        <div className="flex items-start gap-3 flex-1">
                          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Icon className="h-4 w-4" strokeWidth={2.3} />
                          </span>
                          <div className="flex-1">
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                              {cat.label}
                            </p>
                            <h3 className="text-base md:text-lg font-bold text-on-surface leading-snug">
                              {item.question}
                            </h3>
                          </div>
                        </div>
                        <ChevronDown
                          className="h-5 w-5 text-on-surface-variant mt-2 shrink-0 group-open:rotate-180 group-open:text-primary transition-all"
                          strokeWidth={2.4}
                        />
                      </summary>
                      <p className="mt-4 pl-12 text-on-surface-variant leading-relaxed">
                        {item.answer}
                      </p>
                    </details>
                  );
                })}
              </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* BLOC CONTACT */}
        <section className="py-20 px-6 bg-gradient-to-b from-surface-container-low to-surface">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-10">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-primary">
                <MessageCircle className="h-4 w-4" strokeWidth={2.4} /> {tFaqExt.contact.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-black text-on-surface">
                {tFaqExt.contact.title}
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-on-surface-variant text-lg">
                {tFaqExt.contact.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Link
                to="/contact"
                className="group rounded-3xl border border-outline-variant/40 bg-white p-7 hover:shadow-xl hover:border-primary/40 transition-all"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-4 text-xl font-black text-on-surface">{tFaqExt.contact.writeTitle}</h3>
                <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
                  {tFaqExt.contact.writeDesc}
                </p>
              </Link>
              <a
                href="tel:+22800000000"
                className="group rounded-3xl border border-outline-variant/40 bg-white p-7 hover:shadow-xl hover:border-primary/40 transition-all"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-4 text-xl font-black text-on-surface">{tFaqExt.contact.callTitle}</h3>
                <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
                  {tFaqExt.contact.callDesc}
                </p>
              </a>
              <a
                href="mailto:contact@taoman.group"
                className="group rounded-3xl border border-outline-variant/40 bg-white p-7 hover:shadow-xl hover:border-primary/40 transition-all"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-4 text-xl font-black text-on-surface">{tFaqExt.contact.emailTitle}</h3>
                <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
                  {tFaqExt.contact.emailDesc}
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
