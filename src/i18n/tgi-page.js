/**
 * Contenu page TGI (TaoEconomicInvestmentPage) — hors CMS hero/stats.
 */
import { buildLangPacks, pickLangPack } from './localePack';
import { ES, PT, DE, AR, ZH } from './locales/tgi-extra';

const FR = {
  defaultHero: {
    subtitle: 'Bâtissez votre indépendance financière',
    description:
      "Une opportunité transformative pour les investisseurs qui recherchent des rendements durables et un impact communautaire significatif à Lomé et au-delà.",
  },
  stats: [
    { label: 'Investissement Minimum', value: '500K FCFA' },
    { label: 'Rendement Moyen', value: '150K FCFA/mois' },
    { label: 'Délai Retour', value: '10 mois' },
    { label: 'Retour Total Moyen', value: '1,5M FCFA' },
  ],
  statsIntro:
    "Des indicateurs simples et transparents pour comprendre en un coup d'œil notre proposition.",
  whyInvest: {
    eyebrow: 'Pourquoi investir dans TGI',
    title: 'Pourquoi investir dans le programme TGI ?',
    paragraphs: [
      "TGI structure des opportunités d'investissement adossées à des projets opérationnels réels au Togo : logistique, agro, commerce, BTP, numérique, marketing et éducation financière.",
      "Vous bénéficiez d'un cadre clair, d'un interlocuteur dédié et d'un reporting régulier — avec un délai de réponse sous 48h pour toute manifestation d'intérêt.",
    ],
  },
  whyPlace: {
    eyebrow: 'Pourquoi placer vos investissements chez TAOMAN',
    title: 'Pourquoi placer vos investissements chez TAOMAN GROUP INVESTMENTS ?',
    paragraphs: [
      "Une gouvernance institutionnelle, des contrôles internes et une conformité KYC / SYSCOA / CEDEAO intégrés à chaque dossier.",
      "Des rendements ciblés, des actifs tangibles et un impact local mesurable — au service des particuliers, de la diaspora et des investisseurs institutionnels.",
    ],
  },
  pillarsIntro:
    "Rentabilité, impact et autonomie : nos décisions d'investissement reposent sur cet équilibre.",
  pillars: [
    {
      title: 'Rentabilité économique',
      desc: 'Des rendements attractifs basés sur des projets viables, testés au Togo et suivis trimestriellement.',
      tone: 'from-blue-500/15 to-cyan-400/10',
    },
    {
      title: 'Impact social',
      desc: "Création d'emplois locaux, soutien aux PME togolaises et développement de l'économie réelle.",
      tone: 'from-amber-500/15 to-orange-400/10',
    },
    {
      title: 'Indépendance financière',
      desc: 'Revenus passifs réguliers, croissants et adossés à des actifs tangibles.',
      tone: 'from-emerald-500/15 to-teal-400/10',
    },
  ],
  benefits: [
    { title: 'Transparence totale', desc: "Accès aux rapports, contrats et données d'investissement." },
    { title: 'Rendements réguliers', desc: 'Paiements mensuels structurés selon votre contrat.' },
    { title: 'Équipe expérimentée', desc: 'Gestion par des experts opérationnels du secteur.' },
    { title: 'Support dédié', desc: 'Conseiller disponible pour vos questions.' },
    { title: 'Flexibilité', desc: 'Options de retrait et de réinvestissement.' },
    { title: 'Impact social', desc: "Contribution au développement économique local." },
  ],
};

const EN = {
  defaultHero: {
    subtitle: 'Build your financial independence',
    description:
      'A transformative opportunity for investors seeking sustainable returns and meaningful community impact in Lomé and beyond.',
  },
  stats: [
    { label: 'Minimum investment', value: '500K CFA' },
    { label: 'Average return', value: '150K CFA/month' },
    { label: 'Payback period', value: '10 months' },
    { label: 'Average total return', value: '1.5M CFA' },
  ],
  statsIntro: 'Simple, transparent indicators to understand our offer at a glance.',
  whyInvest: {
    eyebrow: 'Why invest in TGI',
    title: 'Why invest in the TGI programme?',
    paragraphs: [
      'TGI structures investment opportunities backed by real operational projects in Togo: logistics, agro, trade, construction, digital, marketing and financial education.',
      'You benefit from a clear framework, a dedicated advisor and regular reporting — with a response within 48 hours for any expression of interest.',
    ],
  },
  whyPlace: {
    eyebrow: 'Why invest with TAOMAN',
    title: 'Why place your investments with TAOMAN GROUP INVESTMENTS?',
    paragraphs: [
      'Institutional governance, internal controls and KYC / SYSCOA / ECOWAS compliance integrated into every file.',
      'Targeted returns, tangible assets and measurable local impact — for individuals, diaspora and institutional investors.',
    ],
  },
  pillarsIntro: 'Profitability, impact and autonomy: our investment decisions balance these three pillars.',
  pillars: [
    { title: 'Economic profitability', desc: 'Attractive returns based on viable projects tested in Togo with quarterly monitoring.', tone: 'from-blue-500/15 to-cyan-400/10' },
    { title: 'Social impact', desc: 'Local jobs, support for Togolese SMEs and real-economy development.', tone: 'from-amber-500/15 to-orange-400/10' },
    { title: 'Financial independence', desc: 'Regular growing passive income backed by tangible assets.', tone: 'from-emerald-500/15 to-teal-400/10' },
  ],
  benefits: [
    { title: 'Full transparency', desc: 'Access to reports, contracts and investment data.' },
    { title: 'Regular returns', desc: 'Structured monthly payments per your contract.' },
    { title: 'Experienced team', desc: 'Managed by sector operational experts.' },
    { title: 'Dedicated support', desc: 'Advisor available for your questions.' },
    { title: 'Flexibility', desc: 'Withdrawal and reinvestment options.' },
    { title: 'Social impact', desc: 'Contribution to local economic development.' },
  ],
};

const PACKS = buildLangPacks({ FR, EN, ES, PT, DE, AR, ZH });

export function getTgiPageContent(language) {
  return pickLangPack(PACKS, language);
}
