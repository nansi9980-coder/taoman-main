/**
 * Formulaire devis climatisation (EntretienClimatisationPage).
 */
const FR = {
  formTitle: 'Remplissez votre demande',
  success: '✓ Votre devis a été envoyé avec succès ! Nous vous recontacterons sous peu.',
  submitError: "Impossible d'envoyer votre demande de devis.",
  networkError: 'Erreur réseau. Réessayez plus tard.',
  select: 'Sélectionner',
  serviceType: "Type d'entretien souhaité",
  acType: 'Type de climatiseur',
  unitCount: "Nombre d'unités",
  power: 'Puissance totale (BTU ou kW)',
  desiredDate: 'Date souhaitée',
  name: 'Votre nom',
  phone: 'Téléphone',
  address: 'Votre adresse',
  problem: 'Description du problème ou besoins spécifiques',
  placeholderUnits: 'Ex: 2',
  placeholderPower: 'Ex: 12000 BTU ou 3.5 kW',
  placeholderName: 'Votre nom complet',
  placeholderPhone: '+228 ...',
  placeholderAddress: 'Votre adresse complète',
  placeholderProblem: 'Ex: bruit, manque de froid, odeur, etc.',
  submitting: 'Envoi en cours...',
  submit: 'VALIDER',
  quoteTitlePrefix: 'Devis Climatisation',
  serviceOptions: [
    'Entretien annuel',
    'Entretien semestriel',
    'Réparation',
    'Installation neuve',
    'Dépannage urgent',
  ],
  acOptions: [
    'Monosplit mural',
    'Multisplit',
    'Cassette',
    'Console',
    'Gainable',
    'Système centralisé',
    'Autre (préciser)',
  ],
  sidebar: {
    title: 'Pourquoi TAOMAN Group Investment ?',
    intro:
      'Nous vous proposons une expérience client nouvelle basée sur des services techniques professionnels et de qualité.',
    items: [
      {
        title: '🔧 Entretien préventif',
        desc: "L'entretien régulier de votre climatisation évite les pannes coûteuses et maintient les performances.",
      },
      {
        title: '✅ Techniciens certifiés',
        desc: "Nos techniciens certifiés et expérimentés interviennent sur tous les types d'équipements.",
      },
      {
        title: "⚡ Économie d'énergie",
        desc: "Un entretien régulier peut réduire votre consommation énergétique jusqu'à 30%.",
      },
    ],
  },
};

const EN = {
  formTitle: 'Fill in your request',
  success: '✓ Your quote request was sent successfully! We will contact you shortly.',
  submitError: 'Unable to send your quote request.',
  networkError: 'Network error. Please try again later.',
  select: 'Select',
  serviceType: 'Type of service',
  acType: 'Air conditioner type',
  unitCount: 'Number of units',
  power: 'Total power (BTU or kW)',
  desiredDate: 'Preferred date',
  name: 'Your name',
  phone: 'Phone',
  address: 'Your address',
  problem: 'Problem description or specific needs',
  placeholderUnits: 'E.g. 2',
  placeholderPower: 'E.g. 12000 BTU or 3.5 kW',
  placeholderName: 'Your full name',
  placeholderPhone: '+228 ...',
  placeholderAddress: 'Your full address',
  placeholderProblem: 'E.g. noise, lack of cooling, odor, etc.',
  submitting: 'Sending...',
  submit: 'SUBMIT',
  quoteTitlePrefix: 'Air conditioning quote',
  serviceOptions: [
    'Annual maintenance',
    'Semi-annual maintenance',
    'Repair',
    'New installation',
    'Emergency repair',
  ],
  acOptions: [
    'Wall-mounted split',
    'Multi-split',
    'Cassette',
    'Console',
    'Ducted',
    'Central system',
    'Other (specify)',
  ],
  sidebar: {
    title: 'Why TAOMAN Group Investment?',
    intro:
      'We offer a new customer experience based on professional, high-quality technical services.',
    items: [
      {
        title: '🔧 Preventive maintenance',
        desc: 'Regular maintenance avoids costly breakdowns and keeps performance high.',
      },
      {
        title: '✅ Certified technicians',
        desc: 'Our certified technicians work on all types of equipment.',
      },
      {
        title: '⚡ Energy savings',
        desc: 'Regular maintenance can reduce energy consumption by up to 30%.',
      },
    ],
  },
};

const PACKS = { FR, EN, ES: EN, PT: EN, DE: EN, AR: EN, ZH: EN };

export function getAirconFormTranslations(language) {
  return PACKS[language] || EN;
}
