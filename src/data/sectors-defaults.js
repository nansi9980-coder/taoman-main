import btpIcon from '../assets/btp_sector.jpeg';
import agroIcon from '../assets/agro_sector.jpeg';
import transportIcon from '../assets/transport_sector.jpeg';
import logistiqueHero from '../assets/sectors/logistique-transports-hero.jpg';
import commercePhoto from '../assets/realisations/lavage1.jpg';
import numeriqueImg from '../assets/simulateur.jpeg';
import { mediaUrl } from '../config';

function normalizeTitleKey(title = '') {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function titlesMatch(a, b) {
  const na = normalizeTitleKey(a);
  const nb = normalizeTitleKey(b);
  if (!na || !nb) return false;
  return na === nb || na.includes(nb) || nb.includes(na);
}

const SLUG_RULES = [
  { slug: 'marketing-international', match: (k) => k.includes('marketing') },
  { slug: 'btp-immobilier', match: (k) => k.includes('btp') || k.includes('immobilier') },
  { slug: 'agro-business', match: (k) => k.includes('agro') || k.includes('energie') },
  { slug: 'commerce-general', match: (k) => k.includes('commerce') || k.includes('negoce') },
  {
    slug: 'numerique-services',
    match: (k) => k.includes('numerique') || k.includes('digital') || k.includes('innovation'),
  },
  {
    slug: 'logistique-transports',
    match: (k) => k.includes('logistique') || k.includes('transport') || k.includes('mobilite'),
  },
  {
    slug: 'education-financiere',
    match: (k) =>
      k.includes('formation') ||
      k.includes('education') ||
      k.includes('financier') ||
      k.includes('literacy'),
  },
];

function inferSectorSlug(item) {
  if (!item) return null;
  const raw = item.slug?.trim();
  if (raw && DEFAULT_SECTORS.some((s) => s.slug === raw)) return raw;
  const key = normalizeTitleKey(item.title);
  if (!key) return null;
  for (const rule of SLUG_RULES) {
    if (rule.match(key)) return rule.slug;
  }
  if (item.title) {
    const byTitle = DEFAULT_SECTORS.find((s) => titlesMatch(item.title, s.title));
    if (byTitle) return byTitle.slug;
  }
  return null;
}

/** Image affichable pour une carte secteur (CMS imageUrl ou fichier par défaut). */
export function resolveSectorImage(sector) {
  if (!sector) return null;
  if (sector.imageUrl) return mediaUrl(sector.imageUrl);
  return sector.image || null;
}

export const DEFAULT_SECTORS = [
  {
    slug: 'logistique-transports',
    title: 'Logistique & Transports',
    tag: 'Mobilité',
    image: logistiqueHero,
    short:
      "Flottes, déménagement, distribution urbaine et chaînes d'approvisionnement intégrées.",
    intro:
      "La logistique est l'épine dorsale d'une économie qui s'industrialise. TAOMAN GROUP INVESTMENTS investit dans les flottes, les services aux entreprises et la distribution urbaine pour générer un revenu opérationnel régulier.",
    context:
      "Le Togo, par sa position côtière et son Port autonome de Lomé (premier port en eau profonde de la sous-région), constitue une plaque tournante naturelle pour le commerce CEDEAO et le transit vers les pays de l'hinterland (Burkina Faso, Niger, Mali). La demande en logistique de proximité, en transport inter-villes et en distribution urbaine reste largement non satisfaite. TAOMAN GROUP INVESTMENTS se positionne sur ce marché en finançant et en opérant des flottes de véhicules, des services de déménagement professionnels et des solutions de livraison du dernier kilomètre, en partenariat avec des opérateurs sélectionnés et des PME locales.",
    goal:
      "Bâtir un opérateur logistique privé de référence au Togo, capable de servir aussi bien les particuliers (déménagement, lavage, transport) que les entreprises (livraison, distribution, transferts spécialisés) et de générer un revenu opérationnel régulier pour les investisseurs.",
    porteur: 'TAOMAN GROUP INVESTMENTS',
    perimetre:
      "Le programme couvre Lomé, les principales villes du Togo (Kara, Atakpamé, Sokodé, Dapaong) et les couloirs CEDEAO (Bénin, Ghana, Burkina, Côte d'Ivoire, Niger, Mali). Les actifs ciblés incluent des camions, fourgons, utilitaires, motos, ateliers de maintenance et hubs urbains de stockage.",
    documents: [
      "Étude de marché logistique Togo & couloir CEDEAO",
      "Plan d'acquisition et de financement de la flotte",
      "Modèle économique unitaire par véhicule",
      "Plan de maintenance et reporting opérationnel",
    ],
    cout: '€ 1 – 5 millions',
    financement: 'TGI – Investissement participatif',
    partenaires: [
      'TAOMAN GROUP INVESTMENTS',
      'Partenaires logistiques sous-régionaux',
      'Opérateurs Mobile Money',
      'PME togolaises affiliées',
    ],
    highlights: [
      'Flottes de camions, utilitaires et VTC',
      'Déménagement de particuliers et d’entreprises',
      'Distribution urbaine du dernier kilomètre',
    ],
    opportunities: [
      'Acquisition et exploitation de véhicules',
      'Contrats logistiques B2B récurrents',
      'Hubs urbains et entrepôts de proximité',
    ],
    range: '13 % – 20 %',
    risk: 'Dynamique',
  },
  {
    slug: 'agro-business',
    title: 'Agro Business',
    tag: 'Production',
    image: agroIcon,
    short:
      "Filières agricoles modernisées : production, transformation et mise en marché de produits togolais à forte valeur.",
    intro:
      "L'agro-business est un levier clé de souveraineté alimentaire et d'export. TAOMAN GROUP INVESTMENTS finance des exploitations productives, des unités de transformation et des chaînes de distribution pour structurer des filières rentables.",
    context:
      "L'agriculture représente près de 30 % du PIB togolais et occupe plus de 60 % de la population active, mais la valeur ajoutée reste concentrée sur la production brute. La transformation locale, le conditionnement, la mise en marque et l'export demeurent des chaînons critiques sous-développés. TAOMAN GROUP INVESTMENTS intervient sur l'ensemble de la filière : exploitations productives encadrées, unités de transformation agro-alimentaires, conditionnement et plateformes de mise en marché. L'objectif est de capter la valeur ajoutée localement, de créer de l'emploi rural et de structurer des filières exportables vers la sous-région et au-delà.",
    goal:
      "Structurer des filières agricoles intégrées (production → transformation → distribution → export) capables de générer un revenu stable, de créer de l'emploi rural et de réduire la dépendance aux importations alimentaires.",
    porteur: 'TAOMAN GROUP INVESTMENTS',
    perimetre:
      "Le programme couvre les régions Maritime, Plateaux, Centrale et Kara. Les filières prioritaires sont : maraîchage, céréales, élevage avicole, soja, noix de cajou, transformation alimentaire et conditionnement.",
    documents: [
      'Études de filière par culture cible (cajou, soja, maraîchage)',
      'Modèles économiques par exploitation type',
      'Plan de transformation et étude HACCP',
      'Plan de mise en marché et stratégie de marque',
    ],
    cout: '€ 500 K – 3 M',
    financement: 'TGI + Partenariat agricole',
    partenaires: [
      'TAOMAN GROUP INVESTMENTS',
      "Coopératives agricoles locales",
      'Ministère de l’Agriculture (programmes de soutien)',
      'Acheteurs sous-régionaux',
    ],
    highlights: [
      'Production maraîchère, céréalière et avicole',
      'Transformation : farine, huile, conserverie',
      'Conditionnement, marque, export régional',
    ],
    opportunities: [
      'Fermes intégrées et coopératives encadrées',
      'Mini-usines agroalimentaires',
      'Plateformes logistiques de collecte et de tri',
    ],
    range: '10 % – 16 %',
    risk: 'Équilibré',
  },
  {
    slug: 'commerce-general',
    title: 'Commerce général',
    tag: 'Distribution',
    image: commercePhoto,
    short:
      "Import, distribution, négoce et points de vente : capter la consommation togolaise et sous-régionale.",
    intro:
      "Le commerce général est la voie d'entrée la plus rapide vers le cash-flow. TAOMAN GROUP INVESTMENTS sélectionne des opérations de négoce, de gros, de demi-gros et de retail avec rotation rapide, marges contrôlées et reporting clair.",
    context:
      "Le commerce général représente le pilier le plus visible de l'économie togolaise : marchés de gros et demi-gros, boutiques de quartier, points de vente urbains, marketplaces digitales. Le Port autonome de Lomé alimente non seulement la consommation togolaise mais également celle des pays enclavés voisins, créant un volume d'import-négoce considérable. TAOMAN GROUP INVESTMENTS finance des opérations de négoce structurées : containers achetés à l'import, magasins de gros encadrés par des contrats clairs, points de vente en marque propre et plateformes e-commerce. Chaque opération suit une méthode rigoureuse de pilotage et de reporting pour limiter le risque de stock dormant et garantir une rotation rapide.",
    goal:
      "Capter la consommation togolaise et sous-régionale via des opérations commerciales à rotation rapide, à marges contrôlées et à reporting transparent, tout en générant le cash-flow le plus rapide des cinq programmes.",
    porteur: 'TAOMAN GROUP INVESTMENTS',
    perimetre:
      "Couverture commerciale principale : Grand Lomé, Aného, Kpalimé, Atakpamé, Sokodé, Kara. Catégories ciblées : produits alimentaires de grande consommation, produits ménagers, hygiène, fournitures bureau, équipements électroniques abordables, textiles.",
    documents: [
      'Étude de marché des produits à forte rotation au Togo',
      "Modèles d'opération containers et négoce",
      'Plan de pilotage stock et trésorerie',
      'Plan de digitalisation et de revente en ligne',
    ],
    cout: '€ 300 K – 1,5 M',
    financement: 'TGI – Tickets courts',
    partenaires: [
      'TAOMAN GROUP INVESTMENTS',
      "Importateurs partenaires (Asie, Europe)",
      "Réseaux de boutiques et grossistes locaux",
      "Plateformes e-commerce affiliées",
    ],
    highlights: [
      'Import et négoce de biens à forte rotation',
      'Distribution B2B vers boutiques et restaurateurs',
      'Points de vente urbains et e-commerce local',
    ],
    opportunities: [
      'Containers et lots achetés à l’import',
      'Magasins de gros et demi-gros',
      'Plateformes de revente en ligne',
    ],
    range: '14 % – 22 %',
    risk: 'Dynamique',
  },
  {
    slug: 'btp-immobilier',
    title: 'BTP & Immobilier',
    tag: 'Infrastructures',
    image: btpIcon,
    short: 'Construction durable, immobilier locatif et infrastructures à haute valeur ajoutée.',
    intro:
      "Le secteur du bâtiment et de l'immobilier reste l'un des moteurs économiques les plus visibles du Togo. TAOMAN GROUP INVESTMENTS finance, structure et accompagne des projets de construction, de rénovation et d'exploitation locative à fort impact patrimonial.",
    context:
      "Le Togo connaît une urbanisation rapide, en particulier à Lomé et dans les villes secondaires (Kara, Atakpamé, Sokodé), qui crée une demande forte en logements, en bureaux, en commerces et en infrastructures d'accueil. Le déficit en logements abordables est estimé à plusieurs dizaines de milliers d'unités. Parallèlement, la classe moyenne émergente recherche des produits immobiliers locatifs sécurisés et structurés. TAOMAN GROUP INVESTMENTS intervient en finançant des opérations de promotion, de rénovation et de construction patrimoniale, ainsi que des immeubles de rapport gérés sur la durée. Chaque projet est précédé d'une étude de marché locale, d'un plan financier et d'une étude technique pour garantir la valeur de revente et la rentabilité locative.",
    goal:
      "Constituer un portefeuille immobilier diversifié (résidentiel, commercial, mixte) qui combine plus-value patrimoniale et rentes locatives stables, en partenariat avec les acteurs sérieux du marché togolais.",
    porteur: 'TAOMAN GROUP INVESTMENTS',
    perimetre:
      "Lomé (Adidogomé, Agoè, Bè-Kpota, Avédji), Kara, Atakpamé et zones industrielles ciblées. Opérations envisagées : immeubles de rapport, programmes résidentiels intermédiaires, bureaux et locaux commerciaux, entrepôts et résidences gérées.",
    documents: [
      'Études de marché immobilier par quartier ciblé',
      'Plans architecturaux et études techniques',
      'Modèles économiques par typologie de bien',
      'Plan de mise en location et gestion locative',
    ],
    cout: '€ 800 K – 5 M',
    financement: 'TGI + Co-investissement immobilier',
    partenaires: [
      'TAOMAN GROUP INVESTMENTS',
      "Notaires et géomètres partenaires",
      "Entreprises de construction agréées",
      "Banques locales (financement complémentaire)",
    ],
    highlights: [
      'Programmes immobiliers résidentiels et commerciaux',
      'Rénovation, équipement et mise en exploitation',
      'Revenus locatifs récurrents et valorisation du foncier',
    ],
    opportunities: [
      'Immeubles de rapport et logements collectifs',
      'Bureaux, locaux commerciaux et entrepôts',
      'Programmes mixtes et résidences gérées',
    ],
    range: '12 % – 18 %',
    risk: 'Modéré',
  },
  {
    slug: 'numerique-services',
    title: 'Numérique & Services',
    tag: 'Innovation',
    image: numeriqueImg,
    short:
      "Solutions digitales, services financiers de proximité et plateformes locales à forte croissance.",
    intro:
      "Le numérique transforme la manière dont les Togolais consomment, paient et travaillent. TAOMAN GROUP INVESTMENTS cible des plateformes locales, des services Mobile Money de proximité et des outils SaaS pour PME.",
    context:
      "Le Togo connaît une accélération forte de l'adoption des services numériques : Mobile Money (Tmoney, Flooz), e-commerce, réseaux d'agents financiers de proximité, plateformes de mise en relation. La pénétration mobile dépasse 80 % de la population et la classe d'âge 18-35 ans, ultra-connectée, demande des services digitaux locaux adaptés. TAOMAN GROUP INVESTMENTS se positionne sur ce marché émergent en finançant des réseaux d'agents Mobile Money, des plateformes e-commerce locales, des marketplaces et des solutions SaaS destinées aux PME togolaises. L'objectif est de capter la croissance digitale tout en créant des effets de réseau durables et un revenu récurrent.",
    goal:
      "Capter la croissance digitale du Togo et de la sous-région en finançant des plateformes, des réseaux d'agents et des outils SaaS qui répondent à une vraie demande locale et qui génèrent des effets de réseau durables.",
    porteur: 'TAOMAN GROUP INVESTMENTS',
    perimetre:
      "Couverture : Grand Lomé pour l'amorçage, extension progressive vers les villes secondaires (Kara, Atakpamé). Cibles : agents Mobile Money, marketplaces produits/services, SaaS gestion-facturation-logistique pour PME, plateformes de formation et services digitaux.",
    documents: [
      'Études de marché digital Togo & sous-région',
      'Roadmap produit et plan d’acquisition utilisateur',
      "Modèle économique récurrent (abonnement, commissions)",
      'Plan de pilotage des KPI digitaux',
    ],
    cout: '€ 200 K – 1 M',
    financement: 'TGI – Tickets innovation',
    partenaires: [
      'TAOMAN GROUP INVESTMENTS',
      "Opérateurs Mobile Money (Tmoney, Flooz)",
      "Réseaux d'agents et de boutiques",
      "Startups locales partenaires",
    ],
    highlights: [
      'Mobile Money et services financiers de proximité',
      'Plateformes e-commerce et marketplaces locales',
      'Logiciels métiers pour PME togolaises',
    ],
    opportunities: [
      'Réseaux d’agents Mobile Money',
      'Marketplaces produits et services',
      'SaaS gestion, facturation et logistique',
    ],
    range: '15 % – 25 %',
    risk: 'Dynamique',
  },
  {
    slug: 'marketing-international',
    title: 'Marketing International',
    tag: 'Croissance',
    image: commercePhoto,
    short:
      "Positionnement international, acquisition clients et déploiement de marque sur les marchés régionaux et globaux.",
    intro:
      "TAOMAN GROUP INVESTMENTS développe des stratégies marketing internationales pour accélérer la visibilité des offres et la génération d'opportunités commerciales.",
    context:
      "Les entreprises africaines qui veulent exporter ou attirer des investisseurs doivent professionnaliser leur présence internationale : branding, contenus, campagnes multicanales, tunnels d'acquisition et partenariats média. TAOMAN GROUP INVESTMENTS accompagne cette montée en gamme avec une approche pilotée par les KPI et la performance.",
    goal:
      "Construire une machine de croissance internationale mesurable pour les activités du groupe et ses partenaires : notoriété, leads qualifiés, conversion commerciale et fidélisation.",
    porteur: 'TAOMAN GROUP INVESTMENTS',
    perimetre:
      "Afrique de l'Ouest, Europe et marchés ciblés selon secteur. Leviers : SEO/SEA, social media, branding, contenus multilingues, relations B2B et partenariats stratégiques.",
    documents: [
      "Audit de positionnement international",
      "Plan marketing 12 mois avec KPI",
      "Stratégie d'acquisition multi-canal",
      "Reporting mensuel de performance",
    ],
    cout: '€ 150 K – 800 K',
    financement: 'TGI + partenaires business',
    partenaires: [
      'TAOMAN GROUP INVESTMENTS',
      'Agences médias internationales',
      'Partenaires digitaux et data',
      'Réseau de distribution B2B',
    ],
    highlights: [
      'Stratégie de marque internationale',
      'Campagnes digitales de performance',
      'Lead generation B2B/B2C',
    ],
    opportunities: [
      'Expansion export et nouveaux marchés',
      'Acquisition clients à forte valeur',
      'Partenariats commerciaux structurés',
    ],
    range: '14 % – 24 %',
    risk: 'Dynamique',
  },
  {
    slug: 'education-financiere',
    title: 'Formation & Éducation financière',
    tag: 'Finance',
    image: '/images/education-financiere-hero.png',
    short:
      "Programmes de literacy financière, formation investisseurs et ateliers pour particuliers, PME et diaspora.",
    intro:
      "TAOMAN GROUP INVESTMENTS développe des parcours de formation en éducation financière pour aider les particuliers, les entrepreneurs et les investisseurs à mieux comprendre, planifier et sécuriser leurs décisions patrimoniales.",
    context:
      "Au Togo et en Afrique de l'Ouest, l'accès au crédit, à l'épargne structurée et aux produits d'investissement progresse plus vite que la culture financière. Budget familial, gestion de trésorerie PME, prévention des arnaques, lecture d'un contrat ou compréhension d'un programme d'investissement comme le TGI restent des besoins massifs. TAOMAN GROUP INVESTMENTS répond à cet enjeu avec des modules pédagogiques concrets, animés par des formateurs certifiés, en présentiel à Lomé et en ligne pour la diaspora. Les contenus couvrent les bases (budget, épargne, crédit responsable), la montée en compétence investisseur et l'accompagnement des dirigeants de PME sur la gouvernance financière.",
    goal:
      "Renforcer la culture financière des publics cibles du groupe — clients, investisseurs TGI, entrepreneurs et jeunes actifs — pour des décisions plus éclairées, une meilleure inclusion financière et une adoption responsable des produits d'investissement.",
    porteur: 'TAOMAN GROUP INVESTMENTS',
    perimetre:
      "Grand Lomé, villes secondaires, entreprises partenaires et diaspora togolaise. Formats : ateliers collectifs, séminaires entreprise, parcours investisseur TGI, modules e-learning et sessions de sensibilisation communautaire.",
    documents: [
      'Programme pédagogique par niveau (débutant, intermédiaire, investisseur)',
      'Supports de formation et évaluations',
      'Charte éthique et conformité des contenus',
      'Reporting de participation et satisfaction',
    ],
    cout: 'Sur devis',
    financement: 'Programmes TGI + offres de formation',
    partenaires: [
      'TAOMAN GROUP INVESTMENTS',
      'Institutions financières partenaires',
      'Chambres de commerce et réseaux PME',
      'Associations de diaspora togolaise',
    ],
    highlights: [
      'Literacy financière : budget, épargne, crédit et prévention des arnaques',
      'Formation investisseurs et lecture des projets TGI',
      'Ateliers entreprises et dirigeants PME',
    ],
    opportunities: [
      'Parcours certifiants pour investisseurs débutants',
      'Formations intra-entreprise sur mesure',
      'Modules digitaux pour diaspora et jeunes actifs',
    ],
    range: '10 % – 18 %',
    risk: 'Modéré',
  },
];

// Conserver la référence aux icônes pour usage interne éventuel
export { transportIcon };

export function getSectorBySlug(slug, sectors = DEFAULT_SECTORS) {
  return sectors.find((sector) => sector.slug === slug) || null;
}

export function normalizeSectors(input) {
  const list = Array.isArray(input?.items)
    ? input.items
    : Array.isArray(input)
      ? input
      : [];

  // Si l'API ne retourne rien → tous les secteurs par défaut
  if (!list.length) return DEFAULT_SECTORS;

  const bySlug = new Map();
  list.forEach((item) => {
    const slug = inferSectorSlug(item);
    if (!slug) return;
    const prev = bySlug.get(slug);
    bySlug.set(slug, prev ? { ...prev, ...item, slug } : { ...item, slug });
  });

  return DEFAULT_SECTORS.map((defaultSector) => {
    const apiItem = bySlug.get(defaultSector.slug);
    if (!apiItem) return defaultSector;
    return { ...defaultSector, ...apiItem, slug: defaultSector.slug };
  });
}
