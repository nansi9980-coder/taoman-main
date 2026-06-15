/**
 * Traductions pour ServicesPage — cartes, accordéons, méthode, engagements, CTA.
 */

const makeItems = (items) => items;

const FR_ITEMS = makeItems([
  {
    id: 'lavage',
    title: 'Lavage automobile & moto',
    description:
      'Lavage intérieur, extérieur, général, tricycle et moquette — en centre ou à domicile, contrats flotte disponibles.',
    sla: '45 – 90 min',
    badge: 'Populaire',
    bullets: [
      'Lavage extérieur + intérieur complet',
      'Polish, lustrage et protection carrosserie',
      'Contrats flotte avec planning hebdomadaire',
    ],
    priceFrom: 'Dès 3 500 FCFA',
  },
  {
    id: 'demenagement',
    title: 'Déménagement & aménagement',
    description:
      "Déménagement particuliers et entreprises : emballage, transport sécurisé Lomé – CEDEAO, visite technique gratuite.",
    sla: 'Sur rendez-vous',
    badge: 'Équipe dédiée',
    bullets: [
      'Visite technique gratuite et devis détaillé',
      'Cartons, papier bulle et couvertures fournis',
      'Trajet Lomé – Kara – Cotonou – Accra disponible',
    ],
    priceFrom: 'Dès 45 000 FCFA',
  },
  {
    id: 'entretien-bureaux',
    title: 'Entretien des bureaux',
    description:
      'Entretien régulier de bureaux, commerces et cliniques — contrats journaliers, hebdo ou mensuels avec reporting.',
    sla: 'Journalier / hebdo',
    badge: 'Contrat pro',
    bullets: [
      'Équipe identifiée en uniforme TAOMAN GROUP INVESTMENTS',
      'Produits écologiques et matériel professionnel',
      'Reporting mensuel et contrôle qualité',
    ],
    priceFrom: 'Sur devis',
  },
  {
    id: 'transport',
    title: 'Transport & livraison',
    description:
      'Flotte camions, fourgons et VTC : livraison dernier kilomètre, transport B2B et navettes inter-villes Togo / CEDEAO.',
    sla: 'Lomé & sous-région',
    badge: 'Flotte propre',
    bullets: [
      'Livraison du dernier kilomètre à Lomé',
      'Transport B2B vers Cotonou, Accra, Ouaga',
      'Suivi GPS et confirmation de livraison',
    ],
    priceFrom: 'Tarifs km',
  },
  {
    id: 'climatisation',
    title: 'Climatisation & froid',
    description:
      'Installation, entretien et dépannage split / VRV — bureaux, commerces, résidences et chambres froides.',
    sla: 'Intervention 48h',
    badge: 'Maintenance',
    bullets: [
      'Installation split et VRV résidentiel / pro',
      'Recharge gaz et nettoyage filtres',
      'Contrats maintenance préventive',
    ],
    priceFrom: 'Dès 15 000 FCFA',
  },
  {
    id: 'conciergerie',
    title: 'Conciergerie & gardiennage',
    description:
      'Gardiennage, accueil visiteurs, gestion courrier et entretien des parties communes — 24/7.',
    sla: '24/7 disponible',
    badge: 'Nouveau',
    bullets: [
      'Gardiennage jour / nuit',
      'Accueil visiteurs et gestion accès',
      "Conciergerie d'immeuble clés en main",
    ],
    priceFrom: 'Sur devis',
  },
  {
    id: 'audits',
    title: 'Audits & Reporting',
    description:
      'Audits financiers et opérationnels, reporting investisseur conforme SYSCOA et CEDEAO.',
    sla: '7 – 21 jours',
    badge: 'Conformité',
    bullets: [
      'Audit financier et opérationnel des PME',
      'Reporting investisseur structuré (PDF + tableaux de bord)',
      'Conformité KYC, AML, SYSCOA et CEDEAO',
    ],
    priceFrom: 'Sur devis',
  },
]);

const FR_DETAILED_ITEMS = [
  {
    id: 'lavage',
    title: 'Lavage automobile & moto',
    intro:
      'Centre de lavage TAOMAN : équipements pro, produits adaptés et personnel formé.',
    points: [
      'Formules Intérieur, Extérieur, Général, Tricycle et Moquette.',
      'Service mobile à domicile sur rendez-vous.',
      'Contrats flotte : tarif dégressif et planning fixe.',
      'Produits biodégradables et eau recyclée.',
    ],
  },
  {
    id: 'demenagement',
    title: 'Déménagement & aménagement',
    intro:
      'Protocole strict de la visite technique au remontage final.',
    points: [
      'Visite technique gratuite et devis détaillé.',
      'Cartons, papier bulle et couvertures fournis.',
      'Démontage, transport bâché et remontage.',
      'Trajets Lomé – Kara – Cotonou – Accra assurés.',
    ],
  },
  {
    id: 'entretien-bureaux',
    title: 'Entretien de bureaux',
    intro:
      "Contrats d'entretien adaptés à vos locaux, sans perturber votre activité.",
    points: [
      'Passage journalier, hebdomadaire ou bi-hebdomadaire.',
      'Sols, sanitaires, vitres et désinfection des points de contact.',
      'Équipes en uniforme et superviseur joignable 24/7.',
      'Reporting mensuel avec photos avant/après.',
    ],
  },
  {
    id: 'transport',
    title: 'Transport & livraison',
    intro:
      'Flotte couvrant le dernier kilomètre et le transport régional CEDEAO.',
    points: [
      'Livraison dernier kilomètre à Lomé (moto, fourgon, VTC).',
      'Transport B2B vers Cotonou, Accra, Ouagadougou, Abidjan.',
      'Suivi GPS et confirmation de livraison signée.',
      'Tarification kilométrique transparente.',
    ],
  },
  {
    id: 'climatisation',
    title: 'Climatisation & froid',
    intro:
      'Installations et entretien adaptés au climat togolais.',
    points: [
      'Installation split, multi-split et VRV certifiée.',
      'Maintenance préventive : filtres, gaz et sécurités.',
      'Dépannage rapide avec pièces disponibles à Lomé.',
      'Contrats annuels bureaux, commerces et chambres froides.',
    ],
  },
  {
    id: 'conciergerie',
    title: 'Conciergerie & gardiennage',
    intro:
      'Sécurité, accueil et entretien des espaces communs en un seul service.',
    points: [
      "Gardiennage 24/7 avec rondes et registre d'accès.",
      'Accueil visiteurs, courrier et signalement des incidents.',
      'Manutention légère, jardinage et parties communes.',
      'Coordination avec le syndic via application dédiée.',
    ],
  },
  {
    id: 'audits',
    title: 'Audits & Reporting',
    intro:
      'Audits et reporting pour PME, investisseurs et institutions — conformité SYSCOA et CEDEAO.',
    points: [
      'Audit financier : comptes, trésorerie et plan de remédiation.',
      'Audit opérationnel : processus, qualité terrain et risques.',
      'Reporting investisseur : tableaux de bord et rapports PDF.',
      'Conformité KYC / AML et dossiers institutionnels.',
    ],
  },
];

const FR = {
  items: FR_ITEMS,
  labels: {
    timeLabel: 'Délai',
    priceLabel: 'Tarif',
    priceFromFallback: 'Sur devis',
    requestQuoteCta: 'Demander un devis',
    badgeAvailable: 'Disponible',
    badgeSoon: 'Bientôt',
    audienceConsumer: 'Particuliers',
    audienceBusiness: 'Entreprises',
    audienceBoth: 'Particuliers & Entreprises',
  },
  detailed: {
    eyebrow: 'Au-delà du devis',
    description:
      'Transparence sur notre méthode, nos prestations et nos engagements.',
    items: FR_DETAILED_ITEMS,
  },
  method: {
    eyebrow: 'Méthode',
    title: 'Du devis au suivi, un parcours clair',
    description: 'Nous appliquons la même méthode à chaque prestation pour garantir une qualité constante.',
    steps: [
      { title: 'Diagnostic', desc: 'Lieu, volume, contraintes, délais et résultat attendu — analysé sur place ou à distance.' },
      { title: 'Devis', desc: 'Prix, périmètre, planning, équipe et conditions lisibles, sans frais cachés.' },
      { title: 'Exécution', desc: 'Checklist, matériel adapté et responsable identifié sur le terrain.' },
      { title: 'Contrôle', desc: 'Retour client, photos avant/après, suivi et corrections post-prestation.' },
    ],
  },
  whyUs: {
    eyebrow: 'Pourquoi TAOMAN GROUP INVESTMENTS',
    title: 'Trois engagements simples',
    description: 'Disponibilité, professionnalisme et suivi : nos trois piliers de qualité.',
    items: [
      { title: 'Disponibilité', desc: 'Service disponible jour et nuit, 7 jours sur 7, support WhatsApp et téléphone.' },
      { title: 'Professionnel', desc: 'Équipe formée et identifiée, équipements adaptés, procédures qualité claires.' },
      { title: 'Suivi client', desc: 'Contrôle après intervention, photos documentées et retours intégrés au plan de progrès.' },
    ],
  },
  finalCta: {
    title: 'Besoin d’un service opérationnel ?',
    description:
      "Contactez-nous aujourd'hui pour un devis gratuit et sans engagement. Notre équipe vous rappelle dans la journée.",
    btnQuote: 'Demander un devis',
    btnCall: 'Nous appeler',
    btnInvest: "Voir l'investissement",
  },
};

const EN_ITEMS = makeItems([
  {
    id: 'lavage',
    title: 'Car & motorcycle wash',
    description:
      'Premium interior and exterior cleaning, windows, rims, tyres, body polishing. At TAOMAN GROUP INVESTMENTS centre or mobile at home for individuals, and multi-vehicle fleet contracts for businesses and institutions.',
    sla: '45 – 90 min',
    badge: 'Popular',
    bullets: [
      'Full exterior + interior wash',
      'Polish, buffing and body protection',
      'Fleet contracts with weekly scheduling',
    ],
    priceFrom: 'From 3,500 FCFA',
  },
  {
    id: 'demenagement',
    title: 'Moving & fit-out',
    description:
      'Residential, corporate and institutional moves. Packing, furniture disassembly/reassembly, secure transport Lomé – inland cities – ECOWAS sub-region. Free on-site technical visit.',
    sla: 'By appointment',
    badge: 'Dedicated team',
    bullets: [
      'Free technical visit and detailed quote',
      'Boxes, bubble wrap and blankets supplied',
      'Lomé – Kara – Cotonou – Accra routes available',
    ],
    priceFrom: 'From 45,000 FCFA',
  },
  {
    id: 'entretien-bureaux',
    title: 'Office cleaning',
    description:
      'Regular professional cleaning for offices, shops, clinics and schools. Daily, weekly or monthly contracts with photo reporting, on-site quality control and dedicated supervisor.',
    sla: 'Daily / weekly',
    badge: 'Pro contract',
    bullets: [
      'Identified team in TAOMAN GROUP INVESTMENTS uniform',
      'Eco-friendly products and professional equipment',
      'Monthly reporting and quality control',
    ],
    priceFrom: 'On quote',
  },
  {
    id: 'transport',
    title: 'Transport & delivery',
    description:
      'Fleet of trucks, vans, utilities and VTC. B2B freight, last-mile delivery, business travel and inter-city shuttles in Togo and the ECOWAS sub-region.',
    sla: 'Lomé & sub-region',
    badge: 'Own fleet',
    bullets: [
      'Last-mile delivery in Lomé',
      'B2B transport to Cotonou, Accra, Ouaga',
      'GPS tracking and delivery confirmation',
    ],
    priceFrom: 'Per-km rates',
  },
  {
    id: 'climatisation',
    title: 'Air conditioning & refrigeration',
    description:
      'Installation, maintenance and repair of split and VRV units for offices, shops and homes. Maintenance of refrigerated display cases and cold rooms for restaurants and distributors.',
    sla: '48h response',
    badge: 'Maintenance',
    bullets: [
      'Split and VRV installation residential / commercial',
      'Gas recharge and filter cleaning',
      'Preventive maintenance contracts',
    ],
    priceFrom: 'From 15,000 FCFA',
  },
  {
    id: 'conciergerie',
    title: 'Concierge & security',
    description:
      'Concierge services for residences, buildings and businesses: security, visitor reception, mail handling, light handling, gardening and common-area upkeep.',
    sla: '24/7 available',
    badge: 'New',
    bullets: [
      'Day / night security',
      'Visitor reception and access control',
      'Turnkey building concierge',
    ],
    priceFrom: 'On quote',
  },
  {
    id: 'audits',
    title: 'Audits & Reporting',
    description:
      'Financial, operational and KYC compliance audits for SMEs, investors and institutions. Structured reporting (monthly, quarterly, annual) aligned with SYSCOA and ECOWAS standards. Investor dashboards, performance alerts and governance support.',
    sla: '7 – 21 days',
    badge: 'Compliance',
    bullets: [
      'Financial and operational SME audits',
      'Structured investor reporting (PDF + dashboards)',
      'KYC, AML, SYSCOA and ECOWAS compliance',
    ],
    priceFrom: 'On quote',
  },
]);

const EN_DETAILED_ITEMS = [
  {
    id: 'lavage',
    title: 'Car & motorcycle wash',
    intro:
      'Our TAOMAN GROUP INVESTMENTS wash centre combines professional equipment, products suited to each body type and trained staff.',
    points: [
      'Three packages: Express (15 min), Premium (45 min, interior + exterior), Full (90 min with polish and protection).',
      'Mobile at-home service by appointment, with water and equipment brought by the team.',
      'Monthly fleet contracts for businesses: tiered pricing, fixed schedule, photo reporting.',
      'Certified biodegradable products and recycled water — a genuine eco approach.',
    ],
  },
  {
    id: 'demenagement',
    title: 'Moving & fit-out',
    intro:
      'A well-prepared move accounts for 80% of success. We follow a strict protocol from the technical visit to final reassembly.',
    points: [
      'Free on-site technical visit: volume measurement, fragile items identified, access mapped.',
      'Supplies included: standard and large boxes, bubble wrap, blankets, straps, hand trucks.',
      'Furniture disassembly, secure transport in covered truck, reassembly and setup at destination.',
      'Long-distance routes Lomé – Kara – Atakpamé – Cotonou – Accra with goods insurance included.',
    ],
  },
  {
    id: 'entretien-bureaux',
    title: 'Office cleaning',
    intro:
      'A clean workplace boosts productivity. Our contracts are designed to integrate without disrupting your operations.',
    points: [
      'Daily (before opening), weekly or bi-weekly visits depending on your needs.',
      'Services included: floors, surfaces, restrooms, windows, bin emptying, contact-point disinfection.',
      'Teams in identifiable TAOMAN GROUP INVESTMENTS uniforms and dedicated supervisor reachable 24/7.',
      'Monthly reporting with before/after photos, quality tracking and quarterly improvement plan.',
    ],
  },
  {
    id: 'transport',
    title: 'Transport & delivery',
    intro:
      'Our fleet covers the full logistics chain from last mile to international transport across the ECOWAS sub-region.',
    points: [
      'Last-mile delivery in Lomé: motorcycles, vans and VTC depending on volume.',
      'B2B transport to Cotonou, Accra, Ouagadougou, Niamey, Abidjan with coordinated customs clearance.',
      'Real-time GPS tracking, signed delivery confirmation and photo proof on request.',
      'Transparent per-kilometre pricing with no hidden fees.',
    ],
  },
  {
    id: 'climatisation',
    title: 'Air conditioning & refrigeration',
    intro:
      'Togo’s climate requires adapted installations and regular maintenance to ensure performance and longevity.',
    points: [
      'New installation: thermal study, model selection (split, multi-split, VRV), certified fitting.',
      'Preventive maintenance: filter cleaning, gas check, electrical safety inspection.',
      'Fast repairs with stock of major brand parts available in Lomé.',
      'Annual contracts for offices, shops, restaurants and cold rooms with scheduled visits.',
    ],
  },
  {
    id: 'conciergerie',
    title: 'Concierge & security',
    intro:
      'Physical security, reception and common-area upkeep: a single service for your buildings and residences.',
    points: [
      '24/7 security with team rotation, entry/exit log and signed patrol rounds.',
      'Visitor reception, access management, mail distribution and incident reporting.',
      'Light handling, gardening, common-area maintenance (stairs, lobby, parking).',
      'Direct coordination with building manager or owner via dedicated mobile app.',
    ],
  },
  {
    id: 'audits',
    title: 'Audits & Reporting',
    intro:
      'TAOMAN GROUP INVESTMENTS brings operational and financial expertise to Togolese SMEs, investors and institutions that need transparency and structure. Our audits lead to concrete action plans and reports aligned with SYSCOA and ECOWAS standards.',
    points: [
      'Full financial audit: account analysis, cash flow review, hidden risk identification and quantified recommendations with 90-day remediation plan.',
      'Operational audit: business process review, field quality control, HR audit, internal compliance and operational risk mapping.',
      'Structured investor reporting: monthly dashboards, quarterly PDF reports, KPIs, automatic deviation alerts and annual consolidated reporting.',
      'Regulatory and KYC compliance: identity checks, anti-money laundering (AML), SYSCOA compliance, ECOWAS standards and institutional investor file preparation.',
      'Governance support: board preparation, minutes drafting, audit committee structuring and executive training in financial literacy.',
      'Digital tools: secure web portal with report downloads, real-time KPI tracking and WhatsApp alerts on critical thresholds.',
    ],
  },
];

const EN = {
  items: EN_ITEMS,
  labels: {
    timeLabel: 'Lead time',
    priceLabel: 'Rate',
    priceFromFallback: 'On quote',
    requestQuoteCta: 'Request a quote',
    badgeAvailable: 'Available',
    audienceConsumer: 'Individuals',
    audienceBusiness: 'Businesses',
    audienceBoth: 'Individuals & Businesses',
  },
  detailed: {
    eyebrow: 'Beyond the quote',
    description:
      'Beyond the quote, we believe in transparency: here is how we work, what we include, and why our clients renew their contracts with TAOMAN GROUP INVESTMENTS.',
    items: EN_DETAILED_ITEMS,
  },
  method: {
    eyebrow: 'Method',
    title: 'From quote to follow-up, a clear journey',
    description: 'We apply the same method to every service to ensure consistent quality.',
    steps: [
      { title: 'Assessment', desc: 'Site, volume, constraints, deadlines and expected outcome — analysed on site or remotely.' },
      { title: 'Quote', desc: 'Price, scope, schedule, team and clear terms with no hidden fees.' },
      { title: 'Delivery', desc: 'Checklist, suitable equipment and identified lead on the ground.' },
      { title: 'Review', desc: 'Client feedback, before/after photos, follow-up and post-service corrections.' },
    ],
  },
  whyUs: {
    eyebrow: 'Why TAOMAN GROUP INVESTMENTS',
    title: 'Three simple commitments',
    description: 'Availability, professionalism and follow-up: our three quality pillars.',
    items: [
      { title: 'Availability', desc: 'Service available day and night, 7 days a week, WhatsApp and phone support.' },
      { title: 'Professional', desc: 'Trained, identifiable team, suitable equipment, clear quality procedures.' },
      { title: 'Client follow-up', desc: 'Post-service check, documented photos and feedback integrated into improvement plan.' },
    ],
  },
  finalCta: {
    title: 'Need a field service?',
    description:
      'Contact us today for a free, no-obligation quote. Our team will call you back the same day.',
    btnQuote: 'Request a quote',
    btnCall: 'Call us',
    btnInvest: 'View investment',
  },
};

const ES_ITEMS = makeItems([
  { id: 'lavage', title: 'Lavado de coches y motos', description: 'Limpieza premium interior y exterior, cristales, llantas, neumáticos, pulido de carrocería. En centro TAOMAN GROUP INVESTMENTS o a domicilio para particulares, y contratos de flota para empresas e instituciones.', sla: '45 – 90 min', badge: 'Popular', bullets: ['Lavado exterior + interior completo', 'Pulido, abrillantado y protección de carrocería', 'Contratos de flota con planificación semanal'], priceFrom: 'Desde 3 500 FCFA' },
  { id: 'demenagement', title: 'Mudanzas y acondicionamiento', description: 'Mudanzas de particulares, empresas e instituciones. Embalaje, desmontaje/remontaje de mobiliario, transporte seguro Lomé – ciudades interiores – subregión CEDEAO. Visita técnica gratuita a domicilio.', sla: 'Con cita previa', badge: 'Equipo dedicado', bullets: ['Visita técnica gratuita y presupuesto detallado', 'Cajas, papel de burbujas y mantas incluidos', 'Ruta Lomé – Kara – Cotonú – Accra disponible'], priceFrom: 'Desde 45 000 FCFA' },
  { id: 'entretien-bureaux', title: 'Limpieza de oficinas', description: 'Limpieza profesional regular de oficinas, comercios, clínicas y escuelas. Contratos diarios, semanales o mensuales con informes fotográficos, control de calidad en terreno y supervisor dedicado.', sla: 'Diario / semanal', badge: 'Contrato pro', bullets: ['Equipo identificado con uniforme TAOMAN GROUP INVESTMENTS', 'Productos ecológicos y material profesional', 'Informe mensual y control de calidad'], priceFrom: 'Bajo presupuesto' },
  { id: 'transport', title: 'Transporte y entrega', description: 'Flota de camiones, furgonetas, utilitarios y VTC. Transporte B2B, última milla, desplazamientos profesionales y lanzaderas interurbanas en Togo y subregión CEDEAO.', sla: 'Lomé y subregión', badge: 'Flota propia', bullets: ['Entrega última milla en Lomé', 'Transporte B2B a Cotonú, Accra, Ouaga', 'Seguimiento GPS y confirmación de entrega'], priceFrom: 'Tarifas por km' },
  { id: 'climatisation', title: 'Climatización y frío', description: 'Instalación, mantenimiento y reparación de splits y VRV para oficinas, comercios y viviendas. Mantenimiento de vitrinas frigoríficas y cámaras frías para restauración y distribución.', sla: 'Intervención 48h', badge: 'Mantenimiento', bullets: ['Instalación split y VRV residencial/pro', 'Recarga de gas y limpieza de filtros', 'Contratos de mantenimiento preventivo'], priceFrom: 'Desde 15 000 FCFA' },
  { id: 'conciergerie', title: 'Conserjería y vigilancia', description: 'Servicios de conserjería para residencias, edificios y empresas: vigilancia, recepción de visitas, gestión de correo, pequeña manutención, jardinería y zonas comunes.', sla: '24/7 disponible', badge: 'Nuevo', bullets: ['Vigilancia día / noche', 'Recepción de visitas y control de accesos', 'Conserjería integral de edificio'], priceFrom: 'Bajo presupuesto' },
  { id: 'audits', title: 'Auditorías e informes', description: 'Auditorías financieras, operativas y conformidad KYC para PYMES, inversores e instituciones. Informes estructurados (mensual, trimestral, anual) conformes a SYSCOA y CEDEAO. Cuadros de mando, alertas de rendimiento y apoyo a la gobernanza.', sla: '7 – 21 días', badge: 'Conformidad', bullets: ['Auditoría financiera y operativa de PYMES', 'Informes estructurados para inversores (PDF + dashboards)', 'Conformidad KYC, AML, SYSCOA y CEDEAO'], priceFrom: 'Bajo presupuesto' },
]);

const ES_DETAILED_ITEMS = [
  { id: 'lavage', title: 'Lavado de coches y motos', intro: 'Nuestro centro de lavado TAOMAN GROUP INVESTMENTS combina equipos profesionales, productos adaptados a cada carrocería y personal formado.', points: ['Tres fórmulas: Express (15 min), Premium (45 min, interior + exterior), Completo (90 min con pulido y protección).', 'Servicio móvil a domicilio con cita, agua y material aportados por el equipo.', 'Contratos de flota mensuales: tarifa decreciente, planificación fija, informe fotográfico.', 'Productos biodegradables certificados y agua reciclada — compromiso ecológico real.'] },
  { id: 'demenagement', title: 'Mudanzas y acondicionamiento', intro: 'Una mudanza bien preparada representa el 80 % del éxito. Aplicamos un protocolo estricto desde la visita técnica hasta el montaje final.', points: ['Visita técnica gratuita: medición de volumen, objetos frágiles, accesos.', 'Suministro incluido: cajas estándar y grandes, papel de burbujas, mantas, correas, carretillas.', 'Desmontaje de muebles, transporte seguro en camión cubierto, montaje e instalación en destino.', 'Rutas de larga distancia Lomé – Kara – Atakpamé – Cotonú – Accra con seguro de mercancía incluido.'] },
  { id: 'entretien-bureaux', title: 'Limpieza de oficinas', intro: 'Un entorno de trabajo limpio impulsa la productividad. Nuestros contratos se integran sin perturbar su actividad.', points: ['Paso diario (antes de apertura), semanal o quincenal según necesidad.', 'Prestaciones: suelos, superficies, sanitarios, cristales, papeleras, desinfección de puntos de contacto.', 'Equipos con uniforme TAOMAN GROUP INVESTMENTS identificable y supervisor dedicado 24/7.', 'Informe mensual con fotos antes/después, seguimiento de calidad y plan trimestral de mejora.'] },
  { id: 'transport', title: 'Transporte y entrega', intro: 'Nuestra flota cubre toda la cadena logística desde la última milla hasta el transporte internacional en la subregión CEDEAO.', points: ['Última milla en Lomé: motos, furgonetas y VTC según volumen.', 'Transporte B2B a Cotonú, Accra, Ouagadougou, Niamey, Abiyán con despacho coordinado.', 'GPS en tiempo real, confirmación firmada y prueba fotográfica si se solicita.', 'Tarificación por kilómetro transparente, sin costes ocultos.'] },
  { id: 'climatisation', title: 'Climatización y frío', intro: 'El clima togolés exige instalaciones adaptadas y mantenimiento regular para garantizar rendimiento y durabilidad.', points: ['Instalación nueva: estudio térmico, elección del modelo (split, multi-split, VRV), montaje certificado.', 'Mantenimiento preventivo: limpieza de filtros, verificación de gas, controles eléctricos.', 'Reparación rápida con stock de piezas de las principales marcas en Lomé.', 'Contratos anuales para oficinas, comercios, restaurantes y cámaras frías con visitas programadas.'] },
  { id: 'conciergerie', title: 'Conserjería y vigilancia', intro: 'Seguridad física, recepción y mantenimiento de zonas comunes: un servicio único para sus edificios y residencias.', points: ['Vigilancia 24/7 con relevo de equipo, registro de entradas/salidas y rondas firmadas.', 'Recepción de visitas, gestión de accesos, reparto de correo e informe de incidentes.', 'Pequeña manutención, jardinería, mantenimiento de zonas comunes (escaleras, hall, parking).', 'Coordinación directa con síndico o propietario mediante aplicación móvil dedicada.'] },
  { id: 'audits', title: 'Auditorías e informes', intro: 'TAOMAN GROUP INVESTMENTS pone su experiencia operativa y financiera al servicio de PYMES, inversores e instituciones togolesas que necesitan transparencia y estructuración. Nuestras auditorías concluyen en planes de acción concretos y nuestros informes cumplen SYSCOA y CEDEAO.', points: ['Auditoría financiera completa: análisis de cuentas, flujos de caja, riesgos ocultos y recomendaciones con plan de remediación a 90 días.', 'Auditoría operativa: procesos, control de calidad en terreno, RR. HH., conformidad interna y mapa de riesgos.', 'Informes para inversores: dashboards mensuales, informes trimestrales PDF, KPI, alertas automáticas y consolidado anual.', 'Conformidad KYC: verificación de identidad, AML, SYSCOA, normas CEDEAO y preparación de expedientes institucionales.', 'Apoyo a la gobernanza: preparación de consejos, actas, comités de auditoría y formación financiera de directivos.', 'Herramientas digitales: portal web seguro, descarga de informes, KPI en tiempo real y alertas WhatsApp en umbrales críticos.'] },
];

const ES = {
  items: ES_ITEMS,
  labels: { timeLabel: 'Plazo', priceLabel: 'Tarifa', priceFromFallback: 'Bajo presupuesto', requestQuoteCta: 'Solicitar presupuesto', badgeAvailable: 'Disponible', badgeSoon: 'Próximamente' },
  detailed: { eyebrow: 'Más allá del presupuesto', description: 'Más allá del presupuesto, creemos en la transparencia: así trabajamos, qué incluimos y por qué nuestros clientes renuevan sus contratos con TAOMAN GROUP INVESTMENTS.', items: ES_DETAILED_ITEMS },
  method: { eyebrow: 'Método', title: 'Del presupuesto al seguimiento, un recorrido claro', description: 'Aplicamos el mismo método en cada prestación para garantizar una calidad constante.', steps: [{ title: 'Diagnóstico', desc: 'Lugar, volumen, restricciones, plazos y resultado esperado — analizado in situ o a distancia.' }, { title: 'Presupuesto', desc: 'Precio, alcance, planificación, equipo y condiciones claras, sin costes ocultos.' }, { title: 'Ejecución', desc: 'Lista de control, material adaptado y responsable identificado en terreno.' }, { title: 'Control', desc: 'Feedback del cliente, fotos antes/después, seguimiento y correcciones post-servicio.' }] },
  whyUs: { eyebrow: 'Por qué TAOMAN GROUP INVESTMENTS', title: 'Tres compromisos simples', description: 'Disponibilidad, profesionalismo y seguimiento: nuestros tres pilares de calidad.', items: [{ title: 'Disponibilidad', desc: 'Servicio día y noche, 7 días a la semana, soporte WhatsApp y teléfono.' }, { title: 'Profesional', desc: 'Equipo formado e identificado, equipos adaptados, procedimientos de calidad claros.' }, { title: 'Seguimiento cliente', desc: 'Control tras la intervención, fotos documentadas y feedback integrado al plan de mejora.' }] },
  finalCta: { title: '¿Necesita un servicio operativo?', description: 'Contáctenos hoy para un presupuesto gratuito y sin compromiso. Nuestro equipo le devolverá la llamada en el día.', btnQuote: 'Solicitar presupuesto', btnCall: 'Llamarnos', btnInvest: 'Ver inversión' },
};

const PT_ITEMS = makeItems([
  { id: 'lavage', title: 'Lavagem automóvel e moto', description: 'Limpeza premium interior e exterior, vidros, jantes, pneus, polimento de carroçaria. No centro TAOMAN GROUP INVESTMENTS ou ao domicílio para particulares, e contratos de frota para empresas e instituições.', sla: '45 – 90 min', badge: 'Popular', bullets: ['Lavagem exterior + interior completa', 'Polimento, brilho e proteção da carroçaria', 'Contratos de frota com planeamento semanal'], priceFrom: 'A partir de 3 500 FCFA' },
  { id: 'demenagement', title: 'Mudanças e instalação', description: 'Mudanças de particulares, empresas e instituições. Embalagem, desmontagem/remontagem de mobiliário, transporte seguro Lomé – cidades interiores – sub-região CEDEAO. Visita técnica gratuita ao domicílio.', sla: 'Mediante marcação', badge: 'Equipa dedicada', bullets: ['Visita técnica gratuita e orçamento detalhado', 'Caixas, plástico bolha e mantas incluídos', 'Rota Lomé – Kara – Cotonou – Accra disponível'], priceFrom: 'A partir de 45 000 FCFA' },
  { id: 'entretien-bureaux', title: 'Limpeza de escritórios', description: 'Limpeza profissional regular de escritórios, comércios, clínicas e escolas. Contratos diários, semanais ou mensais com reporting fotográfico, controlo de qualidade em terreno e supervisor dedicado.', sla: 'Diário / semanal', badge: 'Contrato pro', bullets: ['Equipa identificada com uniforme TAOMAN GROUP INVESTMENTS', 'Produtos ecológicos e material profissional', 'Reporting mensal e controlo de qualidade'], priceFrom: 'Sob orçamento' },
  { id: 'transport', title: 'Transporte e entrega', description: 'Frota de camiões, carrinhas, utilitários e VTC. Transporte B2B, última milha, deslocações profissionais e shuttles interurbanos no Togo e sub-região CEDEAO.', sla: 'Lomé e sub-região', badge: 'Frota própria', bullets: ['Entrega última milha em Lomé', 'Transporte B2B para Cotonou, Accra, Ouaga', 'Rastreio GPS e confirmação de entrega'], priceFrom: 'Tarifas por km' },
  { id: 'climatisation', title: 'Climatização e frio', description: 'Instalação, manutenção e reparação de splits e VRV para escritórios, comércios e residências. Manutenção de vitrinas frigoríficas e câmaras frias para restauração e distribuição.', sla: 'Intervenção 48h', badge: 'Manutenção', bullets: ['Instalação split e VRV residencial/pro', 'Recarga de gás e limpeza de filtros', 'Contratos de manutenção preventiva'], priceFrom: 'A partir de 15 000 FCFA' },
  { id: 'conciergerie', title: 'Conciergeria e vigilância', description: 'Serviços de conciergeria para residências, edifícios e empresas: vigilância, receção de visitas, gestão de correio, pequena manutenção, jardinagem e zonas comuns.', sla: '24/7 disponível', badge: 'Novo', bullets: ['Vigilância dia / noite', 'Receção de visitas e controlo de acessos', 'Conciergeria de edifício chave na mão'], priceFrom: 'Sob orçamento' },
  { id: 'audits', title: 'Auditorias e reporting', description: 'Auditorias financeiras, operacionais e conformidade KYC para PME, investidores e instituições. Reporting estruturado (mensal, trimestral, anual) conforme SYSCOA e CEDEAO. Dashboards investidor, alertas de desempenho e apoio à governação.', sla: '7 – 21 dias', badge: 'Conformidade', bullets: ['Auditoria financeira e operacional de PME', 'Reporting investidor estruturado (PDF + dashboards)', 'Conformidade KYC, AML, SYSCOA e CEDEAO'], priceFrom: 'Sob orçamento' },
]);

const PT_DETAILED_ITEMS = [
  { id: 'lavage', title: 'Lavagem automóvel e moto', intro: 'O nosso centro de lavagem TAOMAN GROUP INVESTMENTS combina equipamentos profissionais, produtos adaptados a cada carroçaria e pessoal formado.', points: ['Três fórmulas: Express (15 min), Premium (45 min, interior + exterior), Completo (90 min com polimento e proteção).', 'Serviço móvel ao domicílio com marcação, água e material trazidos pela equipa.', 'Contratos de frota mensais: tarifa decrescente, planeamento fixo, reporting fotográfico.', 'Produtos biodegradáveis certificados e água reciclada — compromisso ecológico real.'] },
  { id: 'demenagement', title: 'Mudanças e instalação', intro: 'Uma mudança bem preparada representa 80 % do sucesso. Aplicamos um protocolo rigoroso da visita técnica à montagem final.', points: ['Visita técnica gratuita: medição de volume, objetos frágeis, acessos.', 'Fornecimento incluído: caixas standard e grandes, plástico bolha, mantas, correias, carrinhos.', 'Desmontagem de mobiliário, transporte seguro em camião coberto, montagem e instalação no destino.', 'Rotas de longa distância Lomé – Kara – Atakpamé – Cotonou – Accra com seguro de mercadoria incluído.'] },
  { id: 'entretien-bureaux', title: 'Limpeza de escritórios', intro: 'Um ambiente de trabalho limpo aumenta a produtividade. Os nossos contratos integram-se sem perturbar a sua atividade.', points: ['Passagem diária (antes da abertura), semanal ou quinzenal conforme necessidade.', 'Prestações: chãos, superfícies, sanitários, vidros, caixotes do lixo, desinfeção de pontos de contacto.', 'Equipas com uniforme TAOMAN GROUP INVESTMENTS identificável e supervisor dedicado 24/7.', 'Reporting mensal com fotos antes/depois, acompanhamento de qualidade e plano trimestral de melhoria.'] },
  { id: 'transport', title: 'Transporte e entrega', intro: 'A nossa frota cobre toda a cadeia logística da última milha ao transporte internacional na sub-região CEDEAO.', points: ['Última milha em Lomé: motas, carrinhas e VTC conforme volume.', 'Transporte B2B para Cotonou, Accra, Ouagadougou, Niamey, Abidjan com desalfandegamento coordenado.', 'GPS em tempo real, confirmação assinada e prova fotográfica se solicitado.', 'Tarificação por quilómetro transparente, sem custos ocultos.'] },
  { id: 'climatisation', title: 'Climatização e frio', intro: 'O clima togolês exige instalações adaptadas e manutenção regular para garantir desempenho e longevidade.', points: ['Instalação nova: estudo térmico, escolha do modelo (split, multi-split, VRV), montagem certificada.', 'Manutenção preventiva: limpeza de filtros, verificação de gás, controlos elétricos.', 'Reparação rápida com stock de peças das principais marcas em Lomé.', 'Contratos anuais para escritórios, comércios, restaurantes e câmaras frias com visitas programadas.'] },
  { id: 'conciergerie', title: 'Conciergeria e vigilância', intro: 'Segurança física, receção e manutenção de zonas comuns: um serviço único para os seus edifícios e residências.', points: ['Vigilância 24/7 com relevo de equipa, registo de entradas/saídas e rondas assinadas.', 'Receção de visitas, gestão de acessos, distribuição de correio e reporte de incidentes.', 'Pequena manutenção, jardinagem, manutenção de zonas comuns (escadas, hall, estacionamento).', 'Coordenação direta com síndico ou proprietário via aplicação móvel dedicada.'] },
  { id: 'audits', title: 'Auditorias e reporting', intro: 'A TAOMAN GROUP INVESTMENTS coloca a sua experiência operacional e financeira ao serviço de PME, investidores e instituições togolesas que precisam de transparência e estruturação. As nossas auditorias resultam em planos de ação concretos e os nossos relatórios cumprem SYSCOA e CEDEAO.', points: ['Auditoria financeira completa: análise de contas, fluxos de caixa, riscos ocultos e recomendações com plano de remediação a 90 dias.', 'Auditoria operacional: processos, controlo de qualidade em terreno, RH, conformidade interna e mapa de riscos.', 'Reporting investidor: dashboards mensais, relatórios trimestrais PDF, KPI, alertas automáticas e consolidado anual.', 'Conformidade KYC: verificação de identidade, AML, SYSCOA, normas CEDEAO e preparação de dossiers institucionais.', 'Apoio à governação: preparação de conselhos, atas, comités de auditoria e formação financeira de dirigentes.', 'Ferramentas digitais: portal web seguro, download de relatórios, KPI em tempo real e alertas WhatsApp em limiares críticos.'] },
];

const PT = {
  items: PT_ITEMS,
  labels: { timeLabel: 'Prazo', priceLabel: 'Tarifa', priceFromFallback: 'Sob orçamento', requestQuoteCta: 'Pedir orçamento', badgeAvailable: 'Disponível', badgeSoon: 'Em breve' },
  detailed: { eyebrow: 'Para além do orçamento', description: 'Para além do orçamento, acreditamos na transparência: eis como trabalhamos, o que incluímos e por que os nossos clientes renovam os contratos com a TAOMAN GROUP INVESTMENTS.', items: PT_DETAILED_ITEMS },
  method: { eyebrow: 'Método', title: 'Do orçamento ao acompanhamento, um percurso claro', description: 'Aplicamos o mesmo método a cada prestação para garantir uma qualidade constante.', steps: [{ title: 'Diagnóstico', desc: 'Local, volume, restrições, prazos e resultado esperado — analisado no local ou à distância.' }, { title: 'Orçamento', desc: 'Preço, âmbito, planeamento, equipa e condições claras, sem custos ocultos.' }, { title: 'Execução', desc: 'Checklist, material adaptado e responsável identificado em terreno.' }, { title: 'Controlo', desc: 'Feedback do cliente, fotos antes/depois, acompanhamento e correções pós-prestação.' }] },
  whyUs: { eyebrow: 'Porquê TAOMAN GROUP INVESTMENTS', title: 'Três compromissos simples', description: 'Disponibilidade, profissionalismo e acompanhamento: os nossos três pilares de qualidade.', items: [{ title: 'Disponibilidade', desc: 'Serviço dia e noite, 7 dias por semana, suporte WhatsApp e telefone.' }, { title: 'Profissional', desc: 'Equipa formada e identificada, equipamentos adaptados, procedimentos de qualidade claros.' }, { title: 'Acompanhamento cliente', desc: 'Controlo após intervenção, fotos documentadas e feedback integrado no plano de melhoria.' }] },
  finalCta: { title: 'Precisa de um serviço operacional?', description: 'Contacte-nos hoje para um orçamento gratuito e sem compromisso. A nossa equipa liga-lhe no mesmo dia.', btnQuote: 'Pedir orçamento', btnCall: 'Ligar-nos', btnInvest: 'Ver investimento' },
};

const DE_ITEMS = makeItems([
  { id: 'lavage', title: 'Auto- & Motorradwäsche', description: 'Premium-Innen- und Außenreinigung, Scheiben, Felgen, Reifen, Lackpolitur. Im TAOMAN GROUP INVESTMENTS-Zentrum oder mobil zu Hause für Privatkunden, Flottenverträge für Unternehmen und Institutionen.', sla: '45 – 90 Min.', badge: 'Beliebt', bullets: ['Vollständige Außen- und Innenreinigung', 'Polieren, Glanz und Lackschutz', 'Flottenverträge mit wöchentlicher Planung'], priceFrom: 'Ab 3.500 FCFA' },
  { id: 'demenagement', title: 'Umzug & Einrichtung', description: 'Umzüge für Privatpersonen, Unternehmen und Institutionen. Verpackung, Möbelmontage/-demontage, sicherer Transport Lomé – Binnenstädte – ECOWAS-Region. Kostenloser technischer Vor-Ort-Besuch.', sla: 'Nach Termin', badge: 'Dediziertes Team', bullets: ['Kostenloser technischer Besuch und detailliertes Angebot', 'Kartons, Luftpolsterfolie und Decken inklusive', 'Route Lomé – Kara – Cotonou – Accra verfügbar'], priceFrom: 'Ab 45.000 FCFA' },
  { id: 'entretien-bureaux', title: 'Büroreinigung', description: 'Regelmäßige professionelle Reinigung von Büros, Geschäften, Kliniken und Schulen. Tägliche, wöchentliche oder monatliche Verträge mit Fotoreporting, Qualitätskontrolle vor Ort und dediziertem Supervisor.', sla: 'Täglich / wöchentlich', badge: 'Pro-Vertrag', bullets: ['Identifiziertes Team in TAOMAN GROUP INVESTMENTS-Uniform', 'Umweltfreundliche Produkte und Profi-Ausrüstung', 'Monatliches Reporting und Qualitätskontrolle'], priceFrom: 'Auf Anfrage' },
  { id: 'transport', title: 'Transport & Lieferung', description: 'Flotte aus Lkw, Transportern, Nutzfahrzeugen und VTC. B2B-Fracht, Last-Mile-Lieferung, Geschäftsreisen und Intercity-Shuttles in Togo und der ECOWAS-Region.', sla: 'Lomé & Region', badge: 'Eigene Flotte', bullets: ['Last-Mile-Lieferung in Lomé', 'B2B-Transport nach Cotonou, Accra, Ouaga', 'GPS-Tracking und Lieferbestätigung'], priceFrom: 'Km-Tarife' },
  { id: 'climatisation', title: 'Klima & Kälte', description: 'Installation, Wartung und Reparatur von Split- und VRV-Anlagen für Büros, Geschäfte und Wohnungen. Wartung von Kühlvitrinen und Kühlräumen für Gastronomie und Handel.', sla: 'Eingriff 48h', badge: 'Wartung', bullets: ['Split- und VRV-Installation privat/gewerblich', 'Gasnachfüllung und Filterreinigung', 'Präventive Wartungsverträge'], priceFrom: 'Ab 15.000 FCFA' },
  { id: 'conciergerie', title: 'Concierge & Sicherheit', description: 'Concierge-Dienste für Wohnanlagen, Gebäude und Unternehmen: Sicherheit, Besucherempfang, Postverwaltung, leichte Handhabung, Gartenpflege und Gemeinschaftsbereiche.', sla: '24/7 verfügbar', badge: 'Neu', bullets: ['Tag-/Nachtsicherheit', 'Besucherempfang und Zugangskontrolle', 'Schlüsselfertige Gebäude-Concierge'], priceFrom: 'Auf Anfrage' },
  { id: 'audits', title: 'Audits & Reporting', description: 'Finanz-, Betriebs- und KYC-Compliance-Audits für KMU, Investoren und Institutionen. Strukturiertes Reporting (monatlich, quartalsweise, jährlich) nach SYSCOA und ECOWAS. Investoren-Dashboards, Leistungsalarme und Governance-Begleitung.', sla: '7 – 21 Tage', badge: 'Compliance', bullets: ['Finanz- und Betriebsaudit für KMU', 'Strukturiertes Investoren-Reporting (PDF + Dashboards)', 'KYC-, AML-, SYSCOA- und ECOWAS-Compliance'], priceFrom: 'Auf Anfrage' },
]);

const DE_DETAILED_ITEMS = [
  { id: 'lavage', title: 'Auto- & Motorradwäsche', intro: 'Unser TAOMAN GROUP INVESTMENTS-Waschzentrum vereint professionelle Ausrüstung, produkte für jeden Lacktyp und geschultes Personal.', points: ['Drei Pakete: Express (15 Min.), Premium (45 Min., innen + außen), Komplett (90 Min. mit Politur und Schutz).', 'Mobiler Vor-Ort-Service nach Termin, Wasser und Material vom Team mitgebracht.', 'Monatliche Flottenverträge: Staffelpreise, fester Plan, Fotoreporting.', 'Zertifizierte biologisch abbaubare Produkte und recyceltes Wasser — echtes Umweltengagement.'] },
  { id: 'demenagement', title: 'Umzug & Einrichtung', intro: 'Eine gut vorbereitete Umzug macht 80 % des Erfolgs aus. Striktes Protokoll vom technischen Besuch bis zum finalen Aufbau.', points: ['Kostenloser technischer Besuch: Volumenmessung, fragile Gegenstände, Zugänge.', 'Lieferung inklusive: Standard- und große Kartons, Luftpolsterfolie, Decken, Gurte, Sackkarren.', 'Möbeldemontage, sicherer Transport im Planen-Lkw, Montage und Einrichtung am Zielort.', 'Fernstrecken Lomé – Kara – Atakpamé – Cotonou – Accra mit Warenversicherung inklusive.'] },
  { id: 'entretien-bureaux', title: 'Büroreinigung', intro: 'Eine saubere Arbeitsumgebung steigert die Produktivität. Unsere Verträge integrieren sich ohne Störung Ihres Betriebs.', points: ['Täglicher (vor Öffnung), wöchentlicher oder zweiwöchentlicher Einsatz nach Bedarf.', 'Leistungen: Böden, Oberflächen, Sanitäranlagen, Fenster, Abfalleimer, Kontaktflächendesinfektion.', 'Teams in erkennbarer TAOMAN GROUP INVESTMENTS-Uniform und dedizierter Supervisor 24/7 erreichbar.', 'Monatliches Reporting mit Vorher/Nachher-Fotos, Qualitätsverfolgung und vierteljährlichem Verbesserungsplan.'] },
  { id: 'transport', title: 'Transport & Lieferung', intro: 'Unsere Flotte deckt die gesamte Logistikkette von der Last Mile bis zum internationalen Transport in der ECOWAS-Region ab.', points: ['Last-Mile in Lomé: Motorräder, Transporter und VTC je nach Volumen.', 'B2B-Transport nach Cotonou, Accra, Ouagadougou, Niamey, Abidjan mit koordinierter Zollabfertigung.', 'Echtzeit-GPS, signierte Lieferbestätigung und Fotobeweis auf Wunsch.', 'Transparente Kilometerpreise ohne versteckte Gebühren.'] },
  { id: 'climatisation', title: 'Klima & Kälte', intro: 'Das togolesische Klima erfordert angepasste Anlagen und regelmäßige Wartung für Leistung und Langlebigkeit.', points: ['Neuinstallation: Wärmestudie, Modellwahl (Split, Multi-Split, VRV), zertifizierte Montage.', 'Präventive Wartung: Filterreinigung, Gasprüfung, elektrische Sicherheitskontrollen.', 'Schnelle Reparatur mit Lagerbestand führender Marken in Lomé.', 'Jahresverträge für Büros, Geschäfte, Restaurants und Kühlräume mit geplanten Einsätzen.'] },
  { id: 'conciergerie', title: 'Concierge & Sicherheit', intro: 'Physische Sicherheit, Empfang und Pflege der Gemeinschaftsbereiche: ein Service für Ihre Gebäude und Wohnanlagen.', points: ['24/7-Sicherheit mit Teamwechsel, Ein-/Ausgangsregister und signierten Rundgängen.', 'Besucherempfang, Zugangsverwaltung, Postverteilung und Vorfallmeldung.', 'Leichte Handhabung, Gartenpflege, Pflege der Gemeinschaftsbereiche (Treppen, Halle, Parkplatz).', 'Direkte Koordination mit Verwalter oder Eigentümer über dedizierte Mobile App.'] },
  { id: 'audits', title: 'Audits & Reporting', intro: 'TAOMAN GROUP INVESTMENTS stellt operative und finanzielle Expertise für togolesische KMU, Investoren und Institutionen bereit, die Transparenz und Strukturierung benötigen. Unsere Audits führen zu konkreten Aktionsplänen; Berichte entsprechen SYSCOA und ECOWAS.', points: ['Vollständiges Finanzaudit: Kontenanalyse, Cashflow, versteckte Risiken und quantifizierte Empfehlungen mit 90-Tage-Remediation.', 'Betriebsaudit: Prozessprüfung, Qualitätskontrolle vor Ort, HR-Audit, interne Compliance und Risikokartierung.', 'Strukturiertes Investoren-Reporting: monatliche Dashboards, quartalsweise PDF-Berichte, KPIs, Abweichungsalarme und jährliches Konsolidat.', 'KYC-Compliance: Identitätsprüfung, AML, SYSCOA, ECOWAS-Normen und Vorbereitung institutioneller Investorendossiers.', 'Governance-Begleitung: Vorstandsvorbereitung, Protokolle, Audit-Ausschüsse und Finanzschulung für Führungskräfte.', 'Digitale Tools: sicheres Webportal, Berichtsdownload, Echtzeit-KPI und WhatsApp-Alarme bei kritischen Schwellen.'] },
];

const DE = {
  items: DE_ITEMS,
  labels: { timeLabel: 'Frist', priceLabel: 'Tarif', priceFromFallback: 'Auf Anfrage', requestQuoteCta: 'Angebot anfordern', badgeAvailable: 'Verfügbar', badgeSoon: 'Demnächst' },
  detailed: { eyebrow: 'Über das Angebot hinaus', description: 'Über das Angebot hinaus setzen wir auf Transparenz: So arbeiten wir, was wir einschließen und warum unsere Kunden ihre Verträge mit TAOMAN GROUP INVESTMENTS verlängern.', items: DE_DETAILED_ITEMS },
  method: { eyebrow: 'Methode', title: 'Vom Angebot zur Nachverfolgung — ein klarer Weg', description: 'Wir wenden dieselbe Methode bei jeder Leistung an, um konstante Qualität zu gewährleisten.', steps: [{ title: 'Diagnose', desc: 'Ort, Umfang, Einschränkungen, Fristen und erwartetes Ergebnis — vor Ort oder remote analysiert.' }, { title: 'Angebot', desc: 'Preis, Umfang, Planung, Team und klare Bedingungen ohne versteckte Kosten.' }, { title: 'Ausführung', desc: 'Checkliste, passendes Material und identifizierter Verantwortlicher vor Ort.' }, { title: 'Kontrolle', desc: 'Kundenfeedback, Vorher/Nachher-Fotos, Nachverfolgung und Korrekturen nach der Leistung.' }] },
  whyUs: { eyebrow: 'Warum TAOMAN GROUP INVESTMENTS', title: 'Drei einfache Verpflichtungen', description: 'Verfügbarkeit, Professionalität und Nachverfolgung: unsere drei Qualitätssäulen.', items: [{ title: 'Verfügbarkeit', desc: 'Service Tag und Nacht, 7 Tage die Woche, WhatsApp- und Telefon-Support.' }, { title: 'Professionell', desc: 'Geschultes, identifizierbares Team, passende Ausrüstung, klare Qualitätsverfahren.' }, { title: 'Kundenbetreuung', desc: 'Kontrolle nach dem Eingriff, dokumentierte Fotos und Feedback im Verbesserungsplan.' }] },
  finalCta: { title: 'Benötigen Sie einen operativen Service?', description: 'Kontaktieren Sie uns heute für ein kostenloses, unverbindliches Angebot. Unser Team ruft Sie noch am selben Tag zurück.', btnQuote: 'Angebot anfordern', btnCall: 'Uns anrufen', btnInvest: 'Investition ansehen' },
};

const AR_ITEMS = makeItems([
  { id: 'lavage', title: 'غسيل السيارات والدراجات النارية', description: 'تنظيف داخلي وخارجي متميز، زجاج، جنوط، إطارات، تلميع الهيكل. في مركز TAOMAN GROUP INVESTMENTS أو خدمة متنقلة للأفراد، وعقود أساطيل للشركات والمؤسسات.', sla: '45 – 90 دقيقة', badge: 'شائع', bullets: ['غسيل خارجي + داخلي كامل', 'تلميع وحماية الهيكل', 'عقود أساطيل بجدولة أسبوعية'], priceFrom: 'ابتداءً من 3 500 FCFA' },
  { id: 'demenagement', title: 'النقل والتأثيث', description: 'نقل الأفراد والشركات والمؤسسات. التعبئة، تفكيك/تركيب الأثاث، نقل آمن لومي – المدن الداخلية – منطقة CEDEAO. زيارة فنية مجانية في المنزل.', sla: 'بموعد مسبق', badge: 'فريق مخصص', bullets: ['زيارة فنية مجانية وعرض سعر مفصل', 'صناديق، فقاعات هوائية وأغطية مقدمة', 'مسار لومي – كارا – كوتونو – أكرا متاح'], priceFrom: 'ابتداءً من 45 000 FCFA' },
  { id: 'entretien-bureaux', title: 'تنظيف المكاتب', description: 'تنظيف مهني منتظم للمكاتب والمحلات والعيادات والمدارس. عقود يومية أو أسبوعية أو شهرية مع تقارير مصورة ومراقبة جودة ميدانية ومشرف مخصص.', sla: 'يومي / أسبوعي', badge: 'عقد احترافي', bullets: ['فريق معرّف بزي TAOMAN GROUP INVESTMENTS', 'منتجات صديقة للبيئة ومعدات مهنية', 'تقرير شهري ومراقبة جودة'], priceFrom: 'حسب العرض' },
  { id: 'transport', title: 'النقل والتوصيل', description: 'أسطول شاحنات وفانات ومركبات utilitaires وVTC. نقل B2B، التوصيل للميل الأخير، تنقلات مهنية ونقل بين المدن في توغو ومنطقة CEDEAO.', sla: 'لومي والمنطقة', badge: 'أسطول خاص', bullets: ['توصيل الميل الأخير في لومي', 'نقل B2B إلى كوتونو وأكرا وواغادوغو', 'تتبع GPS وتأكيد التسليم'], priceFrom: 'أسعار بالكم' },
  { id: 'climatisation', title: 'التكييف والتبريد', description: 'تركيب وصيانة وإصلاح وحدات split وVRV للمكاتب والمحلات والمساكن. صيانة واجهات عرض مبردة وغرف تبريد للمطاعم والموزعين.', sla: 'تدخل خلال 48 ساعة', badge: 'صيانة', bullets: ['تركيب split وVRV سكني/مهني', 'إعادة شحن الغاز وتنظيف الفلاتر', 'عقود صيانة وقائية'], priceFrom: 'ابتداءً من 15 000 FCFA' },
  { id: 'conciergerie', title: 'الكونسيرج والحراسة', description: 'خدمات كونسيرج للمساكن والمباني والشركات: حراسة، استقبال الزوار، إدارة البريد، مناولة خفيفة، بستنة وصيانة المناطق المشتركة.', sla: 'متاح 24/7', badge: 'جديد', bullets: ['حراسة نهار/ليل', 'استقبال الزوار وإدارة الدخول', 'كونسيرج مبنى متكامل'], priceFrom: 'حسب العرض' },
  { id: 'audits', title: 'التدقيق والتقارير', description: 'تدقيق مالي وتشغيلي وامتثال KYC للشركات الصغيرة والمستثمرين والمؤسسات. تقارير منظمة (شهرية، ربع سنوية، سنوية) وفق SYSCOA وCEDEAO. لوحات مستثمر وتنبيهات أداء ودعم حوكمة.', sla: '7 – 21 يوماً', badge: 'امتثال', bullets: ['تدقيق مالي وتشغيلي للشركات الصغيرة', 'تقارير مستثمر منظمة (PDF + لوحات)', 'امتثال KYC وAML وSYSCOA وCEDEAO'], priceFrom: 'حسب العرض' },
]);

const AR_DETAILED_ITEMS = [
  { id: 'lavage', title: 'غسيل السيارات والدراجات النارية', intro: 'يجمع مركز غسيل TAOMAN GROUP INVESTMENTS لدينا معدات مهنية ومنتجات مناسبة لكل نوع هيكل وطاقماً مدرباً.', points: ['ثلاث صيغ: Express (15 دقيقة)، Premium (45 دقيقة داخل+خارج)، Complet (90 دقيقة مع تلميع وحماية).', 'خدمة متنقلة في المنزل بموعد، الماء والمعدات يحضرها الفريق.', 'عقود أساطيل شهرية للشركات: أسعار متدرجة، جدول ثابت، تقارير مصورة.', 'منتجات قابلة للتحلل الحيوي ومياه معاد تدويرها — التزام بيئي حقيقي.'] },
  { id: 'demenagement', title: 'النقل والتأثيث', intro: 'التحضير الجيد يمثل 80% من نجاح النقل. نطبق بروتوكولاً صارماً من الزيارة الفنية حتى التركيب النهائي.', points: ['زيارة فنية مجانية: قياس الحجم، تحديد القطع الهشة، مسح المداخل.', 'توفير مشمول: صناديق قياسية وكبيرة، فقاعات، أغطية، أحزمة، عربات يدوية.', 'تفكيك الأثاث، نقل آمن بشاحنة مغطاة، تركيب وإعادة التثبيت عندكم.', 'مسارات بعيدة لومي – كارا – أتاكبامي – كوتونو – أكرا مع تأمين البضائع.'] },
  { id: 'entretien-bureaux', title: 'تنظيف المكاتب', intro: 'بيئة عمل نظيفة تعزز الإنتاجية. عقودنا مصممة للاندماج دون تعطيل نشاطكم.', points: ['زيارة يومية (قبل الافتتاح) أو أسبوعية أو كل أسبوعين حسب الحاجة.', 'خدمات: أرضيات، أسطح، دورات مياه، زجاج، إفراغ سلال، تعقيم نقاط اللمس.', 'فرق بزي TAOMAN GROUP INVESTMENTS معرّف ومشرف مخصص متاح 24/7.', 'تقرير شهري بصور قبل/بعد، متابعة جودة وخطة تحسين ربع سنوية.'] },
  { id: 'transport', title: 'النقل والتوصيل', intro: 'يغطي أسطولنا سلسلة اللوجستيات كاملة من الميل الأخير إلى النقل الدولي في منطقة CEDEAO.', points: ['الميل الأخير في لومي: دراجات نارية وفانات وVTC حسب الحجم.', 'نقل B2B إلى كوتونو وأكرا وواغادوغو ونيامي وأبيدجان مع تنسيق الجمارك.', 'GPS فوري، تأكيد تسليم موقع وإثبات صورة عند الطلب.', 'تسعير بالكيلومتر شفاف دون رسوم خفية.'] },
  { id: 'climatisation', title: 'التكييف والتبريد', intro: 'مناخ توغو يتطلب تركيبات مناسبة وصيانة منتظمة لضمان الأداء والعمر الافتراضي.', points: ['تركيب جديد: دراسة حرارية، اختيار النموذج (split، multi-split، VRV)، تركيب معتمد.', 'صيانة وقائية: تنظيف فلاتر، فحص الغاز، ضوابط كهربائية.', 'إصلاح سريع بمخزون قطع العلامات الرئيسية في لومي.', 'عقود سنوية للمكاتب والمحلات والمطاعم وغرف التبريد بزيارات مجدولة.'] },
  { id: 'conciergerie', title: 'الكونسيرج والحراسة', intro: 'أمن مادي واستقبال وصيانة المناطق المشتركة: خدمة واحدة لمبانيكم ومساكنكم.', points: ['حراسة 24/7 مع تناوب الفرق، سجل دخول/خروج وجولات موقعة.', 'استقبال زوار، إدارة دخول، توزيع بريد والإبلاغ عن الحوادث.', 'مناولة خفيفة، بستنة، صيانة مناطق مشتركة (سلالم، بهو، موقف).', 'تنسيق مباشر مع مدير العقار عبر تطبيق جوال مخصص.'] },
  { id: 'audits', title: 'التدقيق والتقارير', intro: 'تضع TAOMAN GROUP INVESTMENTS خبرتها التشغيلية والمالية في خدمة الشركات الصغيرة والمستثمرين والمؤسسات التوغولية التي تحتاج شفافية وهيكلة. تدقيقاتنا تؤدي إلى خطط عمل ملموسة وتقاريرنا متوافقة مع SYSCOA وCEDEAO.', points: ['تدقيق مالي كامل: تحليل حسابات، تدفقات نقدية، مخاطر خفية وتوصيات بخطة معالجة 90 يوماً.', 'تدقيق تشغيلي: مراجعة عمليات، جودة ميدانية، موارد بشرية، امتثال داخلي وخريطة مخاطر.', 'تقارير مستثمر: لوحات شهرية، تقارير PDF ربع سنوية، KPI، تنبيهات انحراف وتقرير سنوي موحد.', 'امتثال KYC: تحقق هوية، AML، SYSCOA، معايير CEDEAO وإعداد ملفات مستثمر مؤسسي.', 'دعم حوكمة: إعداد مجالس، محاضر، لجان تدقيق وتدريب مالي للمديرين.', 'أدوات رقمية: بوابة آمنة، تحميل تقارير، KPI فوري وتنبيهات WhatsApp عند عتبات حرجة.'] },
];

const AR = {
  items: AR_ITEMS,
  labels: { timeLabel: 'المدة', priceLabel: 'السعر', priceFromFallback: 'حسب العرض', requestQuoteCta: 'طلب عرض سعر', badgeAvailable: 'متاح', badgeSoon: 'قريباً' },
  detailed: { eyebrow: 'ما بعد عرض السعر', description: 'ما بعد عرض السعر، نؤمن بالشفافية: هكذا نعمل، ما نقدمه، ولماذا يجدد عملاؤنا عقودهم مع TAOMAN GROUP INVESTMENTS.', items: AR_DETAILED_ITEMS },
  method: { eyebrow: 'المنهجية', title: 'من العرض إلى المتابعة، مسار واضح', description: 'نطبق نفس المنهجية في كل خدمة لضمان جودة ثابتة.', steps: [{ title: 'التشخيص', desc: 'المكان، الحجم، القيود، المواعيد والنتيجة المتوقعة — تحليل ميداني أو عن بُعد.' }, { title: 'العرض', desc: 'السعر، النطاق، التخطيط، الفريق والشروط الواضحة دون رسوم خفية.' }, { title: 'التنفيذ', desc: 'قائمة تحقق، معدات مناسبة ومسؤول معرّف في الميدان.' }, { title: 'المراقبة', desc: 'ملاحظات العميل، صور قبل/بعد، متابعة وتصحيحات بعد الخدمة.' }] },
  whyUs: { eyebrow: 'لماذا TAOMAN GROUP INVESTMENTS', title: 'ثلاث التزامات بسيطة', description: 'التوفر، الاحترافية والمتابعة: ركائزنا الثلاث للجودة.', items: [{ title: 'التوفر', desc: 'خدمة ليلاً ونهاراً، 7 أيام في الأسبوع، دعم WhatsApp والهاتف.' }, { title: 'احترافي', desc: 'فريق مدرب ومعرّف، معدات مناسبة، إجراءات جودة واضحة.' }, { title: 'متابعة العميل', desc: 'مراقبة بعد التدخل، صور موثقة وملاحظات مدمجة في خطة التحسين.' }] },
  finalCta: { title: 'هل تحتاجون إلى خدمة تشغيلية؟', description: 'تواصلوا معنا اليوم للحصول على عرض مجاني دون التزام. سيتصل بكم فريقنا في نفس اليوم.', btnQuote: 'طلب عرض سعر', btnCall: 'اتصل بنا', btnInvest: 'عرض الاستثمار' },
};

const ZH_ITEMS = makeItems([
  { id: 'lavage', title: '汽车与摩托车清洗', description: '优质内外清洁、玻璃、轮毂、轮胎、车身抛光。TAOMAN GROUP INVESTMENTS 中心或上门移动服务面向个人，企业及机构多车车队合同。', sla: '45 – 90 分钟', badge: '热门', bullets: ['全面外部+内部清洗', '抛光、上光与车身保护', '车队合同含每周排程'], priceFrom: '起价 3 500 FCFA' },
  { id: 'demenagement', title: '搬迁与布置', description: '个人、企业及机构搬迁。包装、家具拆装、安全运输洛美—内陆城市—西非经共体次区域。免费上门技术勘察。', sla: '预约制', badge: '专属团队', bullets: ['免费技术勘察与详细报价', '提供纸箱、气泡膜与保护毯', '洛美—卡拉—科托努—阿克拉线路'], priceFrom: '起价 45 000 FCFA' },
  { id: 'entretien-bureaux', title: '办公室保洁', description: '办公室、商铺、诊所及学校定期专业清洁。日/周/月合同，含照片报告、现场质量管控及专属督导。', sla: '每日/每周', badge: '专业合同', bullets: ['着 TAOMAN GROUP INVESTMENTS 制服的可识别团队', '环保产品与专业设备', '月度报告与质量检查'], priceFrom: '询价' },
  { id: 'transport', title: '运输与配送', description: '卡车、厢式车、工具车及 VTC 车队。B2B 货运、最后一公里配送、商务出行及多哥与西非经共体城际班车。', sla: '洛美及次区域', badge: '自有车队', bullets: ['洛美最后一公里配送', 'B2B 至科托努、阿克拉、瓦加杜古', 'GPS 跟踪与签收确认'], priceFrom: '按公里计费' },
  { id: 'climatisation', title: '空调与制冷', description: '办公室、商铺及住宅分体式与 VRV 安装、保养与维修。冷藏展示柜及冷库维护，服务餐饮与分销商。', sla: '48 小时响应', badge: '维护', bullets: ['分体/VRV 住宅/商业安装', '加氟与滤网清洁', '预防性维护合同'], priceFrom: '起价 15 000 FCFA' },
  { id: 'conciergerie', title: '礼宾与安保', description: '住宅、楼宇及企业礼宾服务：安保、访客接待、邮件管理、轻搬运、园艺及公共区域维护。', sla: '全天候', badge: '新服务', bullets: ['日夜安保', '访客接待与门禁管理', '楼宇一站式礼宾'], priceFrom: '询价' },
  { id: 'audits', title: '审计与报告', description: '面向中小企业、投资者及机构的财务、运营及 KYC 合规审计。结构化报告（月/季/年）符合 SYSCOA 与 CEDEAO。投资者仪表盘、绩效预警及治理支持。', sla: '7 – 21 天', badge: '合规', bullets: ['中小企业财务与运营审计', '结构化投资者报告（PDF+仪表盘）', 'KYC、AML、SYSCOA 与 CEDEAO 合规'], priceFrom: '询价' },
]);

const ZH_DETAILED_ITEMS = [
  { id: 'lavage', title: '汽车与摩托车清洗', intro: 'TAOMAN GROUP INVESTMENTS 洗车中心配备专业设备、适配各车身类型的产品及培训人员。', points: ['三种套餐：快捷（15 分钟）、高级（45 分钟内外）、全套（90 分钟含抛光与保护）。', '预约上门移动服务，团队自带水与设备。', '企业月度车队合同：递减价格、固定排程、照片报告。', '认证可降解产品与循环用水——真正的环保实践。'] },
  { id: 'demenagement', title: '搬迁与布置', intro: '充分准备决定 80% 搬迁成功率。我们从技术勘察到最终组装执行严格流程。', points: ['免费上门技术勘察：测量体积、识别易碎品、勘察通道。', '含耗材：标准及大号纸箱、气泡膜、保护毯、绑带、手推车。', '家具拆装、篷车安全运输、目的地组装与安装。', '洛美—卡拉—阿塔帕梅—科托努—阿克拉长途线路含货物保险。'] },
  { id: 'entretien-bureaux', title: '办公室保洁', intro: '洁净工作环境提升生产力。我们的合同设计为不打断您的日常运营。', points: ['每日（开业前）、每周或每两周上门，按需定制。', '服务含：地面、台面、卫生间、玻璃、倒垃圾、接触点消毒。', '着可识别 TAOMAN GROUP INVESTMENTS 制服团队，专属督导 24/7 可联系。', '月度报告含前后照片、质量跟踪及季度改进计划。'] },
  { id: 'transport', title: '运输与配送', intro: '车队覆盖从最后一公里到西非经共体次区域国际运输的全物流链。', points: ['洛美最后一公里：摩托车、厢式车及 VTC 按体量配置。', 'B2B 至科托努、阿克拉、瓦加杜古、尼亚美、阿比让，协调报关。', '实时 GPS、签收确认及按需拍照证明。', '透明公里计费，无隐藏费用。'] },
  { id: 'climatisation', title: '空调与制冷', intro: '多哥气候需要适配安装与定期维护以确保性能与寿命。', points: ['新装：热工测算、机型选择（分体、多联、VRV）、认证安装。', '预防维护：滤网清洁、冷媒检测、电气安全检查。', '洛美备有主流品牌配件，快速维修。', '办公室、商铺、餐厅及冷库年度合同含定期上门。'] },
  { id: 'conciergerie', title: '礼宾与安保', intro: '物理安全、接待与公共区域维护：楼宇与住宅的一站式服务。', points: ['24/7 安保含班组轮换、进出登记及签字巡逻。', '访客接待、门禁、邮件分发及事件报告。', '轻搬运、园艺、公共区域维护（楼梯、门厅、停车场）。', '通过专用移动应用与物业或业主直接协调。'] },
  { id: 'audits', title: '审计与报告', intro: 'TAOMAN GROUP INVESTMENTS 将运营与财务专长服务于需要透明与结构化的多哥中小企业、投资者及机构。审计产出具体行动计划，报告符合 SYSCOA 与 CEDEAO。', points: ['全面财务审计：账目分析、现金流、隐性风险及 90 天整改建议。', '运营审计：流程审查、现场质量、人力、内部合规及风险图谱。', '投资者报告：月度仪表盘、季度 PDF、KPI、偏差预警及年度合并报告。', 'KYC 合规：身份核验、反洗钱、SYSCOA、CEDEAO 及机构投资者材料准备。', '治理支持：董事会筹备、纪要、审计委员会及高管财务阅读培训。', '数字工具：安全门户下载报告、实时 KPI 及临界阈值 WhatsApp 通知。'] },
];

const ZH = {
  items: ZH_ITEMS,
  labels: { timeLabel: '工期', priceLabel: '价格', priceFromFallback: '询价', requestQuoteCta: '索取报价', badgeAvailable: '可预约', badgeSoon: '即将推出' },
  detailed: { eyebrow: '超越报价', description: '超越报价，我们坚持透明：我们的工作方式、包含内容，以及客户为何与 TAOMAN GROUP INVESTMENTS 续约。', items: ZH_DETAILED_ITEMS },
  method: { eyebrow: '方法', title: '从报价到跟进，路径清晰', description: '每项服务采用相同方法，确保持续稳定的质量。', steps: [{ title: '诊断', desc: '地点、规模、约束、期限与预期结果——现场或远程分析。' }, { title: '报价', desc: '价格、范围、计划、团队及清晰条款，无隐藏费用。' }, { title: '执行', desc: '检查清单、适配设备及现场明确负责人。' }, { title: '质控', desc: '客户反馈、前后照片、跟进及服务后修正。' }] },
  whyUs: { eyebrow: '为何选择 TAOMAN GROUP INVESTMENTS', title: '三项简单承诺', description: '可用性、专业性与跟进：我们的三大质量支柱。', items: [{ title: '可用性', desc: '日夜服务，每周 7 天，WhatsApp 与电话支持。' }, { title: '专业', desc: '培训可识别团队、适配设备、清晰质量流程。' }, { title: '客户跟进', desc: '服务后检查、存档照片及反馈纳入改进计划。' }] },
  finalCta: { title: '需要运营服务？', description: '立即联系我们获取免费无约束报价。团队将在当天回电。', btnQuote: '索取报价', btnCall: '致电我们', btnInvest: '查看投资' },
};

const SERVICES = { FR, EN, ES, PT, DE, AR, ZH };

export const getServicesTranslations = (language) => SERVICES[language] || SERVICES.FR;
export default SERVICES;
