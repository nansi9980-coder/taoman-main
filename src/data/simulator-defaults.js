/** Configuration par défaut du simulateur (vitrine + dashboard client). */
export const DEFAULT_SIMULATOR_CONFIG = {
  investment: '500000',
  duration: '10',
  annualRate: '18',
  monthlyContribution: '50000',
  compoundFrequency: '12',
  inflation: '3',
  taxRate: '5',
  minInvestment: '500000',
  maxDuration: '10',
  defaultMode: 'avance',
  sectorRates: {
    Diversifie: '18',
    'BTP & Immobilier': '16',
    'Agro Business': '14',
    'Commerce général': '15',
    'Logistique & Transports': '17',
    'Numérique & Services': '19',
  },
  features: [
    { icon: '🔒', title: 'Sécurisé', desc: 'Vos données sont protégées et chiffrées' },
    { icon: '📈', title: 'Transparent', desc: 'Suivi en temps réel de vos investissements' },
    { icon: '⚡', title: 'Rapide', desc: 'Investissez en moins de 5 minutes' },
  ],
};

export const PLACEMENT_OPTIONS = [
  'Diversifie',
  'BTP & Immobilier',
  'Agro Business',
  'Commerce général',
  'Logistique & Transports',
  'Numérique & Services',
];
