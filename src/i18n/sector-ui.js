/**
 * Textes UI communs des pages détail secteur (aspects, phases, SEO).
 */
import { buildLangPacks, pickLangPack } from './localePack';
import { ES, PT, DE, AR, ZH } from './locales/sector-extra';

const FR = {
  aspects: [
    {
      title: 'Modèle économique éprouvé',
      desc: "TAOMAN ne finance que des modèles dont l'unit economics a été validée au Togo. Chaque projet est précédé d'une étude de rentabilité détaillée.",
    },
    {
      title: 'Pilotage par les chiffres',
      desc: "KPI mensuels : chiffre d'affaires, marges, taux d'occupation, satisfaction client et trésorerie consolidée.",
    },
    {
      title: 'Cadre juridique sécurisé',
      desc: 'Investissements contractualisés, flux tracés, distributions formalisées et rapports certifiés.',
    },
    {
      title: 'Équipes opérationnelles dédiées',
      desc: 'Projets opérés par nos équipes ou partenaires sous contrat de performance, sans sous-traitance non encadrée.',
    },
  ],
  phases: [
    { num: '01', title: 'Étude & cadrage', duration: 'Semaines 1 – 4', desc: "Validation terrain, entretiens partenaires et business plan pluri-scénario." },
    { num: '02', title: 'Mobilisation du capital', duration: 'Semaines 4 – 8', desc: 'Ouverture TGI, signature des contrats et déblocage des fonds en tranches.' },
    { num: '03', title: 'Déploiement opérationnel', duration: 'Mois 2 – 5', desc: 'Acquisition des actifs, équipe, lancement commercial et premier reporting.' },
    { num: '04', title: 'Exploitation & distribution', duration: 'Mois 5 – 10', desc: 'Pilotage opérationnel, reporting trimestriel et distribution selon l\'échéancier.' },
  ],
  seoDiscoverService: 'Découvrez {title} chez TAOMAN Group Investment.',
  seoDiscoverSector: 'Découvrez le secteur {title} chez TAOMAN Group Investment.',
  serviceTag: 'Service',
  otherServicesTitle: 'Autres offres du Groupe',
  otherServicesSubtitle: 'Découvrir nos services et secteurs',
};

const EN = {
  aspects: [
    { title: 'Proven economic model', desc: 'TAOMAN only funds models validated in Togo, each preceded by a detailed profitability study.' },
    { title: 'Data-driven management', desc: 'Monthly KPIs: revenue, margins, occupancy, customer satisfaction and consolidated cash flow.' },
    { title: 'Secure legal framework', desc: 'Contracted investments, traced flows, formal distributions and certified reporting.' },
    { title: 'Dedicated operational teams', desc: 'Projects run by our teams or performance-contract partners, no uncontrolled subcontracting.' },
  ],
  phases: [
    { num: '01', title: 'Study & scoping', duration: 'Weeks 1 – 4', desc: 'Field validation, partner interviews and multi-scenario business plan.' },
    { num: '02', title: 'Capital mobilization', duration: 'Weeks 4 – 8', desc: 'TGI opening, contract signing and staged fund release.' },
    { num: '03', title: 'Operational deployment', duration: 'Months 2 – 5', desc: 'Asset acquisition, team setup, commercial launch and first reporting.' },
    { num: '04', title: 'Operations & distribution', duration: 'Months 5 – 10', desc: 'Operational steering, quarterly reporting and scheduled distributions.' },
  ],
  seoDiscoverService: 'Discover {title} at TAOMAN Group Investment.',
  seoDiscoverSector: 'Discover the {title} sector at TAOMAN Group Investment.',
  serviceTag: 'Service',
  otherServicesTitle: 'Other group offerings',
  otherServicesSubtitle: 'Explore our services and sectors',
};

const PACKS = buildLangPacks({ FR, EN, ES, PT, DE, AR, ZH });

export function getSectorUi(language) {
  return pickLangPack(PACKS, language);
}

export function formatSectorSeo(template, title) {
  return (template || '').replace('{title}', title || '');
}
