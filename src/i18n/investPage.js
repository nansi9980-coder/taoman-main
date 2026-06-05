/**
 * Textes complets page Investissement (hors FAQ déjà dans investment-faq.js).
 */
import { BRAND_NAME } from '../constants/branding';
import { buildLangPacks, pickLangPack } from './localePack';
import { ES, PT, DE, AR, ZH } from './locales/investPage-extra';

const FR = {
  default: {
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
  },
  quickNav: [
    { id: 'programmes', label: 'TAOMAN TGI' },
    { id: 'opportunites', label: "Opportunités d'investissement" },
    { id: 'criteres', label: "Critères d'investissement" },
    { id: 'soumettre', label: 'Soumettre un projet' },
  ],
  tgiLink: 'TAOMAN TGI →',
  navAria: 'Investir avec TAOMAN - sections',
  programs: {
    intro: 'Choisissez le programme TAOMAN qui vous correspond, ou commencez par simuler votre rendement.',
    premium: 'Premium',
    tgiTitle: 'TAOMAN TGI',
    tgiDesc: "Programme d'investissement structuré avec diversification sectorielle, suivi projet et reporting.",
    tgiCta: 'Découvrir le TGI',
    contactBadge: 'Contact',
    advisorTitle: 'Conseiller TAOMAN',
    advisorDesc:
      'Parlez directement à un conseiller du Groupe pour valider votre profil investisseur, choisir le bon secteur et formaliser votre engagement.',
    advisorCta: 'Demander un rendez-vous',
  },
  submit: {
    intro:
      "Vous avez un projet à financer ? Notre comité d'investissement examine chaque dossier et revient vers vous sous 5 jours ouvrés.",
    bullets: [
      'Étude rigoureuse du dossier par notre comité',
      'Retour structuré sous 5 jours ouvrés',
      'Accompagnement à la structuration si nécessaire',
      'Mobilisation rapide si validation',
    ],
    formCta: 'Remplir le formulaire',
    advisorCta: 'Parler à un conseiller',
    processTitle: 'Processus en 4 étapes',
    steps: [
      { n: '1', title: 'Réception', desc: 'Accusé de réception sous 24 h.' },
      { n: '2', title: 'Analyse', desc: 'Étude par notre comité (5 jours ouvrés).' },
      { n: '3', title: 'Échange', desc: 'Appel ou rendez-vous pour clarifier.' },
      { n: '4', title: 'Décision', desc: "Termes d'engagement et calendrier." },
    ],
  },
  opportunities: {
    intro:
      'TAOMAN structure ses investissements autour de cinq filières prioritaires. Chacune dispose d\'une page dédiée.',
    targetReturn: 'Rendement cible',
    profile: 'Profil',
    discoverSector: 'Découvrir le secteur',
    sectorTag: 'Secteur',
    apiTitle: "Projets ouverts à l'investissement",
    activeProject: 'Projet actif',
    targetRoi: 'ROI cible',
  },
  criteria: {
    intro:
      'Nous appliquons une grille structurée : viabilité économique, équipe, gouvernance et reporting.',
    items: [
      { title: 'Modèle économique clair', desc: 'Sources de revenus identifiées, marges réalistes.' },
      { title: 'Équipe expérimentée', desc: 'Porteur engagé, équipe complémentaire, présence terrain.' },
      { title: 'Ticket adapté', desc: 'Capital structuré entre 500K FCFA et plusieurs millions.' },
      { title: 'Horizon défini', desc: "Cycle maîtrisé, idéalement aligné sur 10 mois." },
      { title: 'Gouvernance', desc: 'Comptabilité OHADA, contrats clairs, gouvernance documentée.' },
      { title: 'Reporting régulier', desc: 'Rapports trimestriels avec preuves terrain.' },
    ],
    cta: 'Soumettre votre projet',
  },
  guarantee: {
    intro:
      "Un investisseur doit comprendre le rendement, le risque, les documents et les flux avant de s'engager.",
    items: [
      { title: 'KYC & conformité', desc: 'Identité, téléphone, documents et validation du profil.' },
      { title: 'Contrats & justificatifs', desc: 'Documents PDF dans votre espace investisseur.' },
      { title: 'Reporting projet', desc: 'Photos, progression, indicateurs et commentaires terrain.' },
      { title: 'Wallet & retraits', desc: 'Historique des dépôts, retraits et commissions.' },
    ],
  },
  finalCta: {
    title: 'Prêt à investir ou à présenter un projet ?',
    desc: 'Échangez avec un conseiller TAOMAN — réponse sous 48 heures.',
    contact: 'Nous contacter pour investir',
    submit: 'Soumettre un projet',
  },
  faq: {
    full: 'FAQ complète',
    notFoundTitle: "Vous n'avez pas trouvé votre réponse ?",
    notFoundDesc: 'Notre équipe investissement est disponible pour répondre à vos questions.',
    contact: 'Nous contacter',
    faqPage: 'Voir toute la FAQ',
  },
  seoTitle: 'Investir avec nous au Togo',
  seoDescription:
    'Investir avec TAOMAN Group Investment : secteurs, programmes TGI, opportunités et reporting transparent au Togo et CEDEAO.',
};

const EN = {
  default: {
    badge: 'Invest with TAOMAN',
    title: BRAND_NAME,
    description:
      'Investing with TAOMAN Group Investment means joining a structured player with rigorous sector selection, field support and transparent reporting.',
    stats: [
      { value: '500K CFA', label: 'Minimum ticket' },
      { value: '10 months', label: 'Maximum horizon' },
      { value: '5', label: 'Investment sectors' },
      { value: '24/7', label: 'Tracking after login' },
    ],
  },
  quickNav: [
    { id: 'programmes', label: 'TAOMAN TGI' },
    { id: 'opportunites', label: 'Investment opportunities' },
    { id: 'criteres', label: 'Investment criteria' },
    { id: 'soumettre', label: 'Submit a project' },
  ],
  tgiLink: 'TAOMAN TGI →',
  navAria: 'Invest with TAOMAN - sections',
  programs: {
    intro: 'Choose the TAOMAN program that fits you, or start by simulating your return.',
    premium: 'Premium',
    tgiTitle: 'TAOMAN TGI',
    tgiDesc: 'Structured investment program with sector diversification, project monitoring and reporting.',
    tgiCta: 'Discover TGI',
    contactBadge: 'Contact',
    advisorTitle: 'TAOMAN advisor',
    advisorDesc:
      'Speak directly with a Group advisor to validate your investor profile, choose the right sector and formalize your commitment.',
    advisorCta: 'Request a meeting',
  },
  submit: {
    intro:
      'Have a project to fund? Our investment committee reviews each file and responds within five business days.',
    bullets: [
      'Rigorous review by our committee',
      'Structured feedback within five business days',
      'Structuring support if needed',
      'Fast mobilization if approved',
    ],
    formCta: 'Fill in the form',
    advisorCta: 'Talk to an advisor',
    processTitle: '4-step process',
    steps: [
      { n: '1', title: 'Receipt', desc: 'Acknowledgment within 24 h.' },
      { n: '2', title: 'Analysis', desc: 'Committee review (5 business days).' },
      { n: '3', title: 'Discussion', desc: 'Call or meeting to clarify.' },
      { n: '4', title: 'Decision', desc: 'Terms and schedule.' },
    ],
  },
  opportunities: {
    intro:
      'TAOMAN structures investments around five priority sectors, each with a dedicated page.',
    targetReturn: 'Target return',
    profile: 'Profile',
    discoverSector: 'Discover sector',
    sectorTag: 'Sector',
    apiTitle: 'Open investment projects',
    activeProject: 'Active project',
    targetRoi: 'Target ROI',
  },
  criteria: {
    intro:
      'We apply a structured grid: economic viability, team, governance and reporting.',
    items: [
      { title: 'Clear economic model', desc: 'Identified revenue sources, realistic margins.' },
      { title: 'Experienced team', desc: 'Committed sponsor, complementary team, field presence.' },
      { title: 'Adapted ticket', desc: 'Capital structured from 500K CFA to several million.' },
      { title: 'Defined horizon', desc: 'Controlled cycle, ideally aligned to 10 months.' },
      { title: 'Governance', desc: 'OHADA accounting, clear contracts, documented governance.' },
      { title: 'Regular reporting', desc: 'Quarterly reports with field evidence.' },
    ],
    cta: 'Submit your project',
  },
  guarantee: {
    intro:
      'Investors must understand return, risk, documents and flows before committing.',
    items: [
      { title: 'KYC & compliance', desc: 'Identity, phone, documents and profile validation.' },
      { title: 'Contracts & records', desc: 'PDF documents in your investor space.' },
      { title: 'Project reporting', desc: 'Photos, progress, KPIs and field comments.' },
      { title: 'Wallet & withdrawals', desc: 'Deposit, withdrawal and commission history.' },
    ],
  },
  finalCta: {
    title: 'Ready to invest or submit a project?',
    desc: 'Talk to a TAOMAN advisor — response within 48 hours.',
    contact: 'Contact us to invest',
    submit: 'Submit a project',
  },
  faq: {
    full: 'Full FAQ',
    notFoundTitle: "Didn't find your answer?",
    notFoundDesc: 'Our investment team is available for your questions.',
    contact: 'Contact us',
    faqPage: 'View full FAQ',
  },
  seoTitle: 'Invest with us in Togo',
  seoDescription:
    'Invest with TAOMAN Group Investment: sectors, TGI programs, opportunities and transparent reporting in Togo and ECOWAS.',
};

const PACKS = buildLangPacks({ FR, EN, ES, PT, DE, AR, ZH });

export function getInvestPageCopy(language) {
  return pickLangPack(PACKS, language);
}
