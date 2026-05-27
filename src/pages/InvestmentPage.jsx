import { useEffect, useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Search,
  ChevronDown,
  HelpCircle,
  Building2,
  TrendingUp,
  Wallet,
  Shield,
  ScrollText,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { API_URL } from '../config';
import { useSiteContent } from '../context/SiteContentContext';
import { useLanguage } from '../context/LanguageContext';
import { BRAND_NAME } from '../constants/branding';
import { normalizeSectors } from '../data/sectors-defaults';
import { SeoHead, buildBreadcrumb } from '../components/SeoHead';
import programmeImg from '../assets/programme.jpeg';

/* ============================================================
   FAQ Investissement & Groupe — composant local
   ============================================================ */

const FAQ_CATEGORIES = [
  { id: 'all', label: 'Toutes', icon: HelpCircle },
  { id: 'groupe', label: 'Le Groupe', icon: Building2 },
  { id: 'investissement', label: 'Investissement TGI', icon: TrendingUp },
  { id: 'rendement', label: 'Rendement & risque', icon: Wallet },
  { id: 'securite', label: 'Sécurité & juridique', icon: Shield },
  { id: 'process', label: 'Process & projet', icon: ScrollText },
];

const FAQ_ITEMS = [
  // GROUPE
  {
    category: 'groupe',
    question: "Qu'est-ce que TAOMAN Group Investment ?",
    answer:
      "TAOMAN Group Investment est un groupe togolais multi-activités. Il combine 5 services opérationnels (Lavage automobile, Déménagement, Entretien de bureaux, Mécanique, Transport) et un programme d'investissement participatif baptisé TGI ouvert sur 5 secteurs stratégiques (Logistique & Transports, Agro Business, Commerce général, BTP & Immobilier, Numérique & Services).",
  },
  {
    category: 'groupe',
    question: "Pourquoi un groupe qui fait à la fois des services et de l'investissement ?",
    answer:
      "Cette double identité crée un cercle vertueux : les services opérationnels (terrain, flotte, équipes encadrées) servent de laboratoire d'apprentissage et de preuve de modèle économique. Ce que nous opérons et maîtrisons, nous savons aussi le financer. Vous investissez donc dans des modèles déjà éprouvés sur le terrain togolais, pas dans des promesses.",
  },
  {
    category: 'groupe',
    question: 'Où le groupe est-il implanté ?',
    answer:
      "Le siège social du groupe est à Lomé, Togo. Nos équipes opérationnelles interviennent sur l'ensemble du territoire togolais (Lomé, Kpalimé, Atakpamé, Sokodé, Kara, Dapaong) et sur les couloirs CEDEAO (Bénin, Ghana, Burkina Faso, Côte d'Ivoire, Niger, Mali).",
  },
  // INVESTISSEMENT TGI
  {
    category: 'investissement',
    question: 'Quel est le montant minimum pour investir avec TAOMAN ?',
    answer:
      "Le ticket de départ recommandé est de 500 000 FCFA. Ce montant permet une diversification efficace sur plusieurs projets et donne accès à l'espace investisseur avec reporting complet.",
  },
  {
    category: 'investissement',
    question: 'Quels secteurs sont accessibles via TGI ?',
    answer:
      "Cinq secteurs sont actuellement ouverts à l'investissement : Logistique & Transports, Agro Business, Commerce général, BTP & Immobilier, et Numérique & Services. Vous pouvez répartir votre engagement sur un ou plusieurs secteurs pour diversifier votre exposition.",
  },
  {
    category: 'investissement',
    question: "Quelle est la durée d'un investissement TAOMAN ?",
    answer:
      "L'horizon de référence est de 10 mois maximum pour un cycle TGI. Certains projets peuvent proposer des horizons plus courts (3, 6 mois) selon le secteur et la nature du projet. La durée est toujours indiquée au moment de l'engagement.",
  },
  {
    category: 'investissement',
    question: 'Puis-je investir depuis la diaspora ou hors du Togo ?',
    answer:
      "Oui. Le programme TGI accepte les investisseurs de la diaspora togolaise et internationale. Les flux financiers transitent par des canaux conformes (virement bancaire, Mobile Money, partenaires de transfert) et la signature des contrats peut se faire à distance.",
  },
  // RENDEMENT & RISQUE
  {
    category: 'rendement',
    question: 'Quels rendements puis-je attendre ?',
    answer:
      "Les fourchettes indicatives par secteur sont publiées sur chaque fiche projet (de l'ordre de 10 % à 22 % selon le secteur et le profil de risque). Les rendements affichés sont des projections fondées sur la performance opérationnelle attendue. Le rendement réel dépend du projet, du contexte et de l'exécution.",
  },
  {
    category: 'rendement',
    question: 'Les rendements affichés sont-ils garantis ?',
    answer:
      "Non. Aucun rendement n'est garanti. Tout investissement comporte un risque, y compris de perte partielle ou totale du capital. Nous publions des fourchettes réalistes, calibrées sur la performance terrain, et nous communiquons sur les risques avant chaque engagement.",
  },
  {
    category: 'rendement',
    question: 'Comment réduire mon risque global ?',
    answer:
      "Trois leviers : (1) diversifier votre engagement sur plusieurs secteurs et plusieurs projets, (2) ne pas allouer plus que ce que votre situation patrimoniale supporte, (3) lire attentivement chaque fiche projet (cout, financement, partenaires) avant de vous engager.",
  },
  {
    category: 'rendement',
    question: 'Comment et quand suis-je rémunéré ?',
    answer:
      "Selon le projet, les revenus peuvent être versés mensuellement, trimestriellement ou en clôture de cycle. Le calendrier est précisé dans le contrat de chaque projet. Vous suivez l'ensemble des flux (capital, intérêts, retraits) depuis votre espace investisseur en temps réel.",
  },
  // SÉCURITÉ
  {
    category: 'securite',
    question: 'Êtes-vous une entreprise déclarée et formelle ?',
    answer:
      "Oui. TAOMAN Group Investment est une société togolaise régulièrement enregistrée, fiscalement à jour, employeur déclaré, couverte en responsabilité civile professionnelle. Toutes nos opérations sont contractualisées et toutes nos prestations donnent lieu à une facture conforme.",
  },
  {
    category: 'securite',
    question: 'Mes données personnelles sont-elles protégées ?',
    answer:
      "Oui. Vos données KYC (identité, téléphone, justificatifs) sont stockées de manière sécurisée et ne sont jamais transmises à des tiers. Elles servent uniquement à valider votre profil investisseur et à respecter nos obligations légales (lutte contre le blanchiment, traçabilité des flux).",
  },
  {
    category: 'securite',
    question: 'Que se passe-t-il si un projet sous-performe ?',
    answer:
      "Vous êtes informé en temps réel via votre espace investisseur. Notre équipe terrain documente les écarts (photos, indicateurs, commentaires) et propose un plan de correction. Selon le contrat, nous pouvons aussi proposer une réallocation vers d'autres projets ou un retrait anticipé.",
  },
  // PROCESS
  {
    category: 'process',
    question: 'Comment soumettre un projet à financer ?',
    answer:
      "Utilisez le formulaire dédié dans la page Contact (option « Soumettre un projet à financer »). Présentez votre projet, son secteur, le ticket recherché, l'horizon et l'état d'avancement. Notre comité d'investissement examine chaque dossier et revient vers vous sous 5 jours ouvrés avec une décision motivée.",
  },
  {
    category: 'process',
    question: 'Comment se déroule mon premier investissement ?',
    answer:
      "(1) Création du compte et validation KYC sous 24h. (2) Choix du ou des projets dans l'espace investisseur. (3) Signature électronique du contrat. (4) Versement du capital par virement ou Mobile Money. (5) Suivi en temps réel via votre dashboard, avec rapports périodiques.",
  },
  {
    category: 'process',
    question: 'Où voir mes chiffres après connexion ?',
    answer:
      "Votre espace investisseur centralise : portefeuille consolidé en temps réel, wallet (dépôts, retraits, commissions), reporting projet (photos, KPI, commentaires terrain), documents PDF (contrats, justificatifs), notifications. Accessible 24/7 après connexion.",
  },
  {
    category: 'process',
    question: 'Comment retirer mes fonds ?',
    answer:
      "Les retraits se demandent directement depuis votre wallet. Selon le projet, les fonds sont disponibles soit à l'échéance contractuelle, soit lors de fenêtres de retrait définies. Les versements se font par virement bancaire ou par Mobile Money, en FCFA ou en devise selon votre demande.",
  },
];

const FaqInvestissement = () => {
  const { translations: tc } = useLanguage();
  const tInv = tc?.invest || {};
  const [active, setActive] = useState('all');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQ_ITEMS.filter((item) => {
      const inCat = active === 'all' || item.category === active;
      if (!inCat) return false;
      if (!q) return true;
      return (
        (item.question || '').toLowerCase().includes(q) ||
        (item.answer || '').toLowerCase().includes(q)
      );
    });
  }, [active, query]);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-surface to-surface-container-low">
      <div className="mx-auto max-w-[1100px]">
        {/* En-tête */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-primary">
            <HelpCircle className="h-3.5 w-3.5" strokeWidth={2.4} /> {tInv.help?.eyebrow || "Centre d'aide"}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-on-surface">
            Questions fréquentes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-on-surface-variant leading-relaxed">
            Tout ce qu'il faut savoir sur le <strong className="text-on-surface">Groupe TAOMAN</strong> et sur notre programme d'investissement <strong className="text-on-surface">TGI</strong> : rendement, risque, sécurité, processus.
          </p>

          {/* Barre de recherche */}
          <div className="relative mt-8 max-w-xl mx-auto">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
              <Search className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher dans la FAQ (ex : ticket, rendement, retrait...)"
              className="w-full rounded-2xl bg-white pl-12 pr-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/70 shadow-lg border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Catégories */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {FAQ_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={
                  isActive
                    ? 'inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-container text-white px-4 py-2 text-sm font-bold shadow-md'
                    : 'inline-flex items-center gap-2 rounded-full bg-white text-on-surface px-4 py-2 text-sm font-bold border border-outline-variant/40 hover:border-primary/40 hover:bg-primary/5 transition-all'
                }
              >
                <Icon className="h-4 w-4" strokeWidth={2.3} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Liste FAQ */}
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-outline-variant/40 bg-white p-10 text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto">
              <Search className="h-6 w-6" strokeWidth={2.2} />
            </span>
            <h3 className="mt-4 text-xl font-black text-on-surface">Aucune réponse pour cette recherche</h3>
            <p className="mt-2 text-on-surface-variant">Essayez un autre mot-clé ou changez de catégorie.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((item, idx) => {
              const cat = FAQ_CATEGORIES.find((c) => c.id === item.category) || FAQ_CATEGORIES[0];
              const Icon = cat.icon;
              const isOpen = open === idx;
              return (
                <div
                  key={`${item.question}-${idx}`}
                  className={`group rounded-2xl border bg-white shadow-sm transition-all ${
                    isOpen ? 'border-primary/40 shadow-lg' : 'border-outline-variant/40 hover:border-primary/30 hover:shadow-md'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="w-full flex items-start gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                    <div className="flex-1">
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-1">
                        {cat.label}
                      </p>
                      <h3 className="text-base md:text-lg font-bold text-on-surface leading-snug">
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 mt-2 transition-all ${
                        isOpen ? 'rotate-180 text-primary' : 'text-on-surface-variant'
                      }`}
                      strokeWidth={2.4}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="ml-14 text-on-surface-variant leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* CTA contact */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#08111d] via-[#0d1a30] to-[#08111d] p-7 md:p-10 text-white text-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/20 text-cyan-200">
            <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
          </span>
          <h3 className="mt-4 text-2xl md:text-3xl font-black">Vous n'avez pas trouvé votre réponse ?</h3>
          <p className="mt-3 max-w-xl mx-auto text-white/75">
            Notre équipe vous répond directement par e-mail, téléphone ou via les formulaires dédiés (information, investissement, partenariat, projet).
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact?topic=invest"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-[#08111d] hover:scale-[1.03] transition"
            >
              <TrendingUp className="h-4 w-4" strokeWidth={2.5} /> Discuter d'investissement
            </Link>
            <Link
              to="/contact?topic=info"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-bold backdrop-blur hover:bg-white hover:text-[#08111d] transition"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.5} /> Poser une question
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-bold backdrop-blur hover:bg-white hover:text-[#08111d] transition"
            >
              FAQ complète <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const DEFAULT_INVESTMENT = {
  badge: 'Investir avec TAOMAN',
  title: BRAND_NAME,
  description:
    "Investir avec TAOMAN Group Investment, c'est rejoindre un acteur structuré qui combine sélection sectorielle rigoureuse, accompagnement terrain et reporting transparent.",
  stats: [
    { value: '500K FCFA', label: 'Ticket minimum' },
    { value: '10 mois', label: 'Horizon maximum demandé' },
    { value: '5', label: "Secteurs d'investissement" },
    { value: '24/7', label: 'Suivi après connexion' },
  ],
};

const QUICK_NAV = [
  { id: 'programmes', label: 'TAOMAN TGI & Simulateur' },
  { id: 'soumettre', label: 'Soumettre un projet' },
  { id: 'opportunites', label: "Opportunités d'investissement" },
  { id: 'criteres', label: "Critères d'investissement" },
];

export const InvestmentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { section } = useSiteContent();
  const { translations: tc } = useLanguage();
  const tInv = tc?.invest || {};
  const tCommon = tc?.common || {};
  const inv = section('investment');
  const badge = inv.badge || tInv.hero?.eyebrow || DEFAULT_INVESTMENT.badge;
  const title = inv.title || tInv.hero?.title || DEFAULT_INVESTMENT.title;
  const description = inv.description || tInv.hero?.description || DEFAULT_INVESTMENT.description;
  const statRows = (inv.stats?.length ? inv.stats : DEFAULT_INVESTMENT.stats).map((s) => [s.value, s.label]);
  const [apiInvestments, setApiInvestments] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/investments/public`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setApiInvestments(data);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const target = document.getElementById(id);
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
      }
    }
  }, [location.hash]);

  const sectors = normalizeSectors(section('sectors'));

  return (
    <div className="flex flex-col min-h-screen bg-surface pt-[80px]">
      <SeoHead
        title={tInv.hero?.title || 'Investir avec nous au Togo'}
        description={tInv.seoDescription || `Pourquoi investir avec ${BRAND_NAME} : secteurs, programmes, opportunités et reporting transparent au Togo et CEDEAO.`}
        path="/investissement"
        jsonLd={buildBreadcrumb([
          { name: 'Accueil', path: '/' },
          { name: 'Investissement', path: '/investissement' },
        ])}
        keywords="investir Togo, opportunités investissement Lomé, TGI, secteurs porteurs Togo, partenariat investisseur"
      />
      <Header activeLink="investissement" />

      <main id="main-content" className="flex-grow">
        <section className="relative overflow-hidden bg-[#07111f] py-24 px-6 text-white">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"></div>
          <div className="relative z-10 mx-auto max-w-[1100px] text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">{badge}</p>
            <h1 className="mb-6 text-5xl font-black tracking-[-0.05em] md:text-7xl">{title}</h1>
            <p className="mb-10 mx-auto max-w-2xl text-xl text-white/75">{description}</p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link to="/contact?topic=invest" className="rounded-2xl bg-white px-8 py-4 font-bold text-[#07111f] shadow-xl hover:scale-105 transition">
                {tCommon.contactInvest || 'Nous contacter pour investir'}
              </Link>
              <Link to="/contact?topic=project" className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur hover:bg-white hover:text-[#07111f] transition">
                {tInv.submit?.cta || 'Soumettre un projet'}
              </Link>
            </div>
          </div>
        </section>

        {/* Quick nav anchors */}
        <nav aria-label="Investir avec TAOMAN - sections" className="sticky top-20 z-30 bg-white/90 backdrop-blur border-b border-outline-variant/40">
          <div className="mx-auto max-w-[1400px] px-4 overflow-x-auto">
            <ul className="flex items-center gap-2 py-3 whitespace-nowrap">
              {QUICK_NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex rounded-full border border-outline-variant/50 bg-surface-container-low px-4 py-2 text-sm font-bold text-on-surface hover:border-primary hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/investissement/tgi"
                  className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90 transition"
                >
                  TAOMAN TGI →
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <section className="bg-white py-12 px-6">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {statRows.map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-outline-variant/40 bg-surface-container-low p-6 text-center shadow-sm">
                  <p className="text-3xl md:text-4xl font-black text-primary">{value}</p>
                  <p className="mt-2 text-xs md:text-sm font-semibold text-on-surface-variant">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TAOMAN Programmes : TGI + Simulateur */}
        <section id="programmes" className="scroll-mt-32 bg-surface-container-low py-20 px-6">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-12 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">{tInv.programs?.eyebrow || 'Programmes TAOMAN'}</p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">{tInv.programs?.title || "Deux portes d'entrée simples"}</h2>
              <p className="mt-3 max-w-2xl mx-auto text-on-surface-variant">
                Choisissez le programme TAOMAN qui vous correspond, ou commencez par simuler votre rendement.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="group relative overflow-hidden bg-gradient-to-br from-[#0047AB] to-[#002366] p-10 rounded-[2.5rem] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,71,171,0.3)] transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/10 transition-colors"></div>

                <div className="flex items-start justify-between mb-8">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <img src={programmeImg} alt="TGI" className="w-full h-full object-cover rounded-lg" loading="lazy" decoding="async" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
                    <span className="text-xs font-bold text-white tracking-widest uppercase">Premium</span>
                  </div>
                </div>

                <h3 className="text-4xl text-white font-bold mb-4 tracking-tight">TAOMAN TGI</h3>
                <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">
                  Programme d'investissement structuré avec diversification sectorielle, suivi projet et reporting.
                </p>

                <button
                  onClick={() => navigate('/investissement/tgi')}
                  className="group/btn relative w-full overflow-hidden bg-white text-[#0047AB] py-5 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 hover:shadow-white/20 active:scale-95"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Découvrir le TGI
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                </button>
              </div>

              <div className="group relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#333333] p-10 rounded-[2.5rem] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 blur-2xl group-hover:bg-white/10 transition-colors"></div>

                <div className="flex items-start justify-between mb-8">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-inner group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                    <svg className="w-12 h-12 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 21l1.3-3.9A8.96 8.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
                    <span className="text-xs font-bold text-white tracking-widest uppercase">Contact</span>
                  </div>
                </div>

                <h3 className="text-4xl text-white font-bold mb-4 tracking-tight">Conseiller TAOMAN</h3>
                <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">
                  Parlez directement à un conseiller du Groupe pour valider votre profil investisseur, choisir le bon secteur et formaliser votre engagement.
                </p>

                <Link
                  to="/contact?topic=invest"
                  className="group/btn relative block w-full overflow-hidden bg-white text-[#1A1A1A] py-5 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 hover:shadow-white/20 active:scale-95 text-center"
                >
                  <span className="relative z-10 inline-flex items-center justify-center gap-2">
                    Demander un rendez-vous
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Soumettre un projet */}
        <section id="soumettre" className="scroll-mt-32 py-20 px-6">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">{tInv.submit?.eyebrow || 'Soumettre un projet'}</p>
                <h2 className="mt-3 text-4xl font-black text-on-surface">{tInv.submit?.title || 'Présentez votre projet à TAOMAN'}</h2>
                <p className="mt-4 text-on-surface-variant leading-relaxed text-lg">
                  Vous avez un projet à financer ? Un porteur de projet à structurer ? Notre comité d'investissement examine chaque dossier et revient vers vous sous 5 jours ouvrés.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Étude rigoureuse du dossier par notre comité',
                    'Retour structuré sous 5 jours ouvrés',
                    'Accompagnement à la structuration si nécessaire',
                    'Mobilisation rapide si validation',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-primary font-black">✓</span>
                      <span className="text-on-surface">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/investissement/soumettre"
                    className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 font-bold text-white hover:opacity-90"
                  >
                    Remplir le formulaire
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-2xl border border-primary px-6 py-3 font-bold text-primary hover:bg-primary hover:text-white transition"
                  >
                    Parler à un conseiller
                  </Link>
                </div>
              </div>
              <div className="rounded-3xl bg-[#07111f] text-white p-7 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-200">Processus en 4 étapes</p>
                {[
                  ['1', 'Réception', 'Accusé de réception sous 24 h.'],
                  ['2', 'Analyse', 'Étude par notre comité (5 jours ouvrés).'],
                  ['3', 'Échange', 'Appel ou rendez-vous pour clarifier.'],
                  ['4', 'Décision', 'Termes d\'engagement et calendrier.'],
                ].map(([n, t, d]) => (
                  <div key={n} className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-[#07111f] font-black">{n}</span>
                    <div>
                      <p className="font-black">{t}</p>
                      <p className="text-sm text-white/70">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Opportunités d'investissement */}
        <section id="opportunites" className="scroll-mt-32 py-20 px-6 bg-surface-container-low">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">{tInv.opportunities?.eyebrow || "Opportunités d'investissement"}</p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">{tInv.opportunities?.title || 'Cinq secteurs porteurs, des projets concrets'}</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                TAOMAN structure ses investissements autour de cinq filières prioritaires. Chacune dispose d'une page dédiée détaillant les axes, les opportunités et le profil de rendement.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sectors.map((sector, idx) => (
                <Link
                  key={sector.slug || idx}
                  to={sector.slug ? `/secteurs/${sector.slug}` : '/secteurs'}
                  className="group flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm border border-outline-variant/40 transition-all hover:-translate-y-1 hover:shadow-2xl animate-fade-in-up"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  {sector.image && (
                    <div className="relative h-44 overflow-hidden bg-surface-container-low">
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" aria-hidden="true" />
                      <span className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
                        {sector.tag || 'Secteur'}
                      </span>
                    </div>
                  )}
                  <div className="flex-1 flex flex-col p-7">
                    {!sector.image && (
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary self-start">
                        {sector.tag || 'Secteur'}
                      </span>
                    )}
                    <h3 className={`${sector.image ? '' : 'mt-4'} text-2xl font-black text-on-surface group-hover:text-primary transition-colors`}>
                      {sector.title}
                    </h3>
                    <p className="mt-3 text-on-surface-variant line-clamp-3">
                      {sector.short || sector.description || ''}
                    </p>
                    <div className="my-6 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-surface-container-low p-3">
                        <p className="text-xs text-on-surface-variant">Rendement cible</p>
                        <p className="font-black text-primary">{sector.range || '—'}</p>
                      </div>
                      <div className="rounded-2xl bg-surface-container-low p-3">
                        <p className="text-xs text-on-surface-variant">Profil</p>
                        <p className="font-black text-on-surface">{sector.risk || '—'}</p>
                      </div>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-2 font-bold text-primary group-hover:translate-x-1 transition-transform">
                      Découvrir le secteur
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {apiInvestments.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-black text-on-surface text-center mb-8">Projets ouverts à l'investissement</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  {apiInvestments.map((opportunity) => (
                    <div key={opportunity.id} className="rounded-2xl bg-white p-6 shadow-md border border-outline-variant/40">
                      <h4 className="text-xl font-bold">{opportunity.name}</h4>
                      <p className="text-sm text-on-surface-variant mt-2">{opportunity.description || 'Projet actif'}</p>
                      <p className="mt-4 font-black text-primary">{opportunity.amount?.toLocaleString('fr-FR')} FCFA</p>
                      {opportunity.roi != null && <p className="text-sm text-on-surface-variant">ROI cible : {opportunity.roi}%</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Critères d'investissement TAOMAN */}
        <section id="criteres" className="scroll-mt-32 py-20 px-6">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">{tInv.criteria?.eyebrow || "Critères d'investissement"}</p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">{tInv.criteria?.title || 'Comment TAOMAN sélectionne les projets'}</h2>
              <p className="mt-4 max-w-3xl mx-auto text-on-surface-variant text-lg">
                Nous appliquons une grille structurée pour évaluer chaque projet : viabilité économique, équipe, gouvernance et capacité de reporting.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ['Modèle économique clair', 'Sources de revenus identifiées, marges réalistes et hypothèses prudentes.'],
                ['Équipe expérimentée', 'Porteur de projet engagé, équipe complémentaire et présence terrain.'],
                ['Ticket adapté', 'Capital structuré entre 500K FCFA et plusieurs millions selon le projet.'],
                ['Horizon défini', 'Cycle d\'investissement maîtrisé, idéalement aligné sur 10 mois.'],
                ['Gouvernance', 'Comptabilité OHADA, contrats clairs, gouvernance documentée.'],
                ['Reporting régulier', 'Engagement à fournir des rapports trimestriels avec preuves terrain.'],
              ].map(([t, d]) => (
                <div key={t} className="rounded-3xl bg-white p-7 border border-outline-variant/40 hover:shadow-lg transition-all">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-black">✓</div>
                  <h3 className="text-lg font-black text-on-surface">{t}</h3>
                  <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                to="/investissement/soumettre"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 font-bold text-white hover:opacity-90 transition"
              >
                Soumettre votre projet
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Engagement TAOMAN */}
        <section className="bg-[#07111f] py-20 px-6 text-white">
          <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">{tInv.guarantee?.eyebrow || 'Engagement TAOMAN'}</p>
              <h2 className="mt-3 text-4xl font-black">{tInv.guarantee?.title || 'Ce que nous garantissons aux investisseurs'}</h2>
              <p className="mt-4 text-white/70">
                Un investisseur doit comprendre le rendement, le risque, les documents, les flux et le statut de chaque projet avant de s'engager.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ['KYC & conformité', 'Identité, téléphone, documents et validation du profil.'],
                ['Contrats & justificatifs', 'Documents PDF disponibles dans votre espace investisseur.'],
                ['Reporting projet', 'Photos, progression, indicateurs et commentaires terrain.'],
                ['Wallet & retraits', 'Historique des dépôts, retraits et commissions.'],
              ].map(([t, d]) => (
                <div key={t} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <h3 className="text-xl font-bold text-white">{t}</h3>
                  <p className="mt-2 text-sm text-white/65">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — Groupe + Investissement */}
        <FaqInvestissement />

        {/* CTA final */}
        <section className="bg-primary py-20 px-6">
          <div className="mx-auto max-w-[1200px] text-center">
            <h2 className="text-4xl font-black text-white">
              Prêt à investir ou à présenter un projet ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
              Échangez avec un conseiller TAOMAN ou soumettez votre projet — nos équipes reviennent vers vous sous 48 heures.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact?topic=invest"
                className="rounded-2xl bg-white px-8 py-4 font-bold text-primary shadow-lg hover:scale-105 inline-flex justify-center items-center"
              >
                Nous contacter pour investir
              </Link>
              <Link
                to="/contact?topic=project"
                className="rounded-2xl border border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-primary inline-flex justify-center items-center"
              >
                Soumettre un projet
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
