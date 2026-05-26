/**
 * Dictionnaire de contenu i18n (hors navigation).
 * Organisé par sections de page pour faciliter l'extension.
 * Langues : FR, EN, ES, PT, DE, AR, ZH.
 */

const CONTENT = {
  FR: {
    common: {
      learnMore: 'En savoir plus',
      readMore: 'Lire la suite',
      requestQuote: 'Demander un devis',
      contactUs: 'Nous contacter',
      contactInvest: 'Nous contacter pour investir',
      mySpace: 'Mon espace',
      registerFree: "S'inscrire gratuitement",
      previous: 'Précédent',
      next: 'Suivant',
      pause: 'Pause',
      resume: 'Reprendre',
      live: 'En direct',
      filterAll: 'Tous',
      loading: 'Chargement…',
      seeAll: 'Voir tout',
      menu: 'Menu',
      backHome: "Retour à l'accueil",
      send: 'Envoyer',
      submit: 'Soumettre',
      search: 'Rechercher',
      cancel: 'Annuler',
      save: 'Enregistrer',
      yes: 'Oui',
      no: 'Non',
    },
    about: {
      seoDescription:
        "Découvrez TAOMAN Group Investment : mission, vision, valeurs, gouvernance et leaders. Partenaire stratégique pour l'investissement et les services au Togo.",
      hero: {
        eyebrow: 'À propos',
        commitmentsLabel: 'Nos engagements',
      },
      mission: {
        eyebrow: 'Notre Mission',
        title: 'Ce que nous faisons, chaque jour.',
      },
      vision: {
        eyebrow: 'Notre Vision',
        title: 'Où nous voulons aller.',
      },
      values: {
        eyebrow: 'Nos piliers',
        title: 'Nos valeurs fondamentales',
      },
      governance: {
        eyebrow: 'Gouvernance',
        title: 'Une structure rigoureuse au service des investisseurs',
        description:
          "TAOMAN Group Investment opère sous une gouvernance institutionnelle stricte alignée sur les standards SYSCOA et CEDEAO : organes décisionnels indépendants, contrôles internes et reporting structuré.",
        pillars: [
          {
            title: "Conseil d'administration",
            description:
              "Organe stratégique qui valide les investissements, valide les comptes annuels et arbitre les orientations long terme. Composition mixte (fondateurs, indépendants, expertise sectorielle).",
          },
          {
            title: "Comité d'audit & conformité",
            description:
              "KYC, lutte anti-blanchiment (AML), conformité SYSCOA, suivi des risques opérationnels et financiers. Réunions trimestrielles avec rapport au Conseil.",
          },
          {
            title: 'Reporting investisseur',
            description:
              'Tableaux de bord mensuels, rapports trimestriels PDF, accès au portail web sécurisé, alertes WhatsApp en cas de seuil critique. Transparence 100 %.',
          },
          {
            title: 'Politique de risque',
            description:
              "Cartographie des risques (marché, opérationnel, crédit, image), plan de mitigation documenté, audits indépendants annuels et provisions ajustées au profil de chaque secteur.",
          },
        ],
      },
      timeline: {
        eyebrow: 'Étapes clés',
        title: 'Notre parcours',
      },
      leaders: {
        eyebrow: 'Comité de direction',
        title: 'Notre équipe dirigeante',
      },
      stats: {
        eyebrow: 'En chiffres',
        title: "TAOMAN Group Investment en un coup d'œil",
      },
      cta: {
        title: "Rejoignez l'écosystème TAOMAN",
        description: 'Découvrez comment nous pouvons contribuer à votre succès.',
        button: 'Commencer maintenant',
      },
    },
    contact: {
      seoDescription:
        'Contactez TAOMAN Group Investment : siège à Lomé, équipe terrain, partenariats public-privé et formulaires dédiés.',
      hero: {
        eyebrow: 'Contact',
        title: 'Parlons de votre projet',
        description:
          "Une équipe dédiée vous répond sous 24 h. Choisissez le canal le plus adapté à votre demande.",
      },
      forms: {
        investTitle: 'Investir avec TAOMAN',
        quoteTitle: 'Demander un devis',
        infoTitle: 'Demande d’information',
        partnershipTitle: 'Partenariat institutionnel',
      },
    },
    faq: {
      seoDescription:
        "Foire aux questions TAOMAN Group Investment : investissement, services opérationnels, KYC, reporting, parcours client.",
      hero: {
        eyebrow: 'Centre d’aide',
        title: 'Questions fréquentes',
        description:
          'Trouvez des réponses claires sur nos investissements, nos services et notre fonctionnement.',
      },
      searchPlaceholder: 'Rechercher une question…',
      noResults: 'Aucune question ne correspond à votre recherche.',
    },
    services: {
      hero: {
        eyebrow: 'Services opérationnels',
        title: 'Nos services',
        description:
          "Une offre complète de prestations terrain encadrées par des équipes dédiées, des SLA clairs et un reporting structuré.",
      },
      sectionTitle: 'Huit services, une seule promesse',
      detailedTitle: 'Comprendre nos métiers',
      detailedDescription:
        "Explorez en profondeur chaque service : périmètre, étapes, équipe, délais et engagement qualité.",
    },
    sectors: {
      hero: {
        eyebrow: "Secteurs d'investissement",
        title: "Nos secteurs d'activité",
        description:
          "Une diversification équilibrée portée par des équipes terrain et des projets concrets : logistique, agro, commerce, BTP, numérique.",
      },
      keyAdvantages: 'Avantages clés',
      whySector: 'Pourquoi ce secteur',
      vigilancePoints: 'Points de vigilance',
      risksAndMitigation: 'Risques & mitigation',
    },
    home: {
      seoDescription:
        "TAOMAN Group Investment — Investissement structuré, partenariats public-privé et services opérationnels (lavage, déménagement, mécanique, transport) au Togo et dans la sous-région CEDEAO.",
      hero: {
        liveLabel: 'Live',
        livePill: 'Suivi temps réel',
        kpiLabel: 'satisfaction client',
        mosaic: {
          logistics: { tag: 'Logistique', title: 'Flotte multi-utilitaires' },
          services: { tag: 'Services', title: 'Lavage premium' },
          teams: { tag: 'Équipes', title: 'Conducteurs certifiés' },
        },
      },
      stats: {
        eyebrow: 'Notre impact',
        title: 'Des chiffres concrets, mesurés sur le terrain',
        description:
          'Données opérationnelles consolidées issues du programme TGI et des activités services du groupe.',
        items: {
          projects: { label: 'Projets livrés', hint: 'Logistique, services, BTP' },
          sectors: { label: 'Secteurs couverts', hint: 'TGI + services opérationnels' },
          cities: { label: 'Présence Togo', suffix: ' villes', hint: 'Lomé, Kara, Sokodé, Atakpamé…' },
          satisfaction: { label: 'Satisfaction client', hint: 'Sondage trimestriel 2025' },
        },
      },
      services: {
        eyebrow: 'Nos prestations',
        title: 'Services professionnels',
        description:
          "Une offre complète de services de qualité conçus pour particuliers, entreprises et investisseurs.",
      },
      realisations: {
        eyebrow: 'Réalisations terrain',
        title: 'Nos projets en images',
        description: 'Une galerie vivante, alimentée par les équipes sur le terrain.',
        ctaAuth: 'Voir le suivi complet des projets',
        ctaGuest: "Se connecter à mon espace investisseur",
      },
      sectors: {
        eyebrow: "Domaines d'activité",
        title: "Secteurs d'investissement",
        description:
          'Une diversification équilibrée portée par des équipes terrain et des projets concrets.',
      },
      testimonials: {
        title: 'Ce que disent nos clients',
      },
      partners: {
        eyebrow: 'Écosystème',
        title: 'Avec qui nous travaillons',
        items: [
          { name: 'Banques partenaires', eyebrow: 'Financement' },
          { name: 'Investisseurs institutionnels', eyebrow: 'Capital' },
          { name: 'PME togolaises', eyebrow: 'Réseau' },
          { name: 'Coopératives agricoles', eyebrow: 'Production' },
          { name: 'Collectivités territoriales', eyebrow: 'Partenariat PPP' },
          { name: 'Diaspora togolaise', eyebrow: 'Investissement' },
          { name: 'Bailleurs CEDEAO', eyebrow: 'Régional' },
          { name: 'Chambres de commerce', eyebrow: 'Conformité' },
        ],
      },
      cta: {
        title: 'Prêt à transformer votre avenir ?',
        subtitle:
          "Rejoignez des milliers de clients satisfaits et commencez votre parcours vers la liberté financière.",
        button: 'Nous contacter',
      },
    },
  },

  EN: {
    common: {
      learnMore: 'Learn more',
      readMore: 'Read more',
      requestQuote: 'Request a quote',
      contactUs: 'Contact us',
      contactInvest: 'Contact us to invest',
      mySpace: 'My space',
      registerFree: 'Sign up for free',
      previous: 'Previous',
      next: 'Next',
      pause: 'Pause',
      resume: 'Resume',
      live: 'Live',
      filterAll: 'All',
      loading: 'Loading…',
      seeAll: 'See all',
      menu: 'Menu',
      backHome: 'Back to home',
      send: 'Send',
      submit: 'Submit',
      search: 'Search',
      cancel: 'Cancel',
      save: 'Save',
      yes: 'Yes',
      no: 'No',
    },
    about: {
      seoDescription:
        'Discover TAOMAN Group Investment: mission, vision, values, governance and leadership. Strategic partner for investment and services in Togo.',
      hero: { eyebrow: 'About', commitmentsLabel: 'Our commitments' },
      mission: { eyebrow: 'Our Mission', title: 'What we do, every day.' },
      vision: { eyebrow: 'Our Vision', title: 'Where we want to go.' },
      values: { eyebrow: 'Our pillars', title: 'Our core values' },
      governance: {
        eyebrow: 'Governance',
        title: 'A rigorous structure serving investors',
        description:
          'TAOMAN Group Investment operates under strict institutional governance aligned with SYSCOA and ECOWAS standards: independent decision-making bodies, internal controls and structured reporting.',
        pillars: [
          { title: 'Board of Directors', description: 'Strategic body validating investments, annual accounts and long-term direction. Mixed composition (founders, independents, sector expertise).' },
          { title: 'Audit & Compliance Committee', description: 'KYC, anti-money laundering (AML), SYSCOA compliance, operational and financial risk monitoring. Quarterly meetings with Board reporting.' },
          { title: 'Investor Reporting', description: 'Monthly dashboards, quarterly PDF reports, secure web portal access, WhatsApp alerts at critical thresholds. 100% transparency.' },
          { title: 'Risk Policy', description: 'Risk mapping (market, operational, credit, reputation), documented mitigation plan, annual independent audits and provisions tailored to each sector.' },
        ],
      },
      timeline: { eyebrow: 'Key milestones', title: 'Our journey' },
      leaders: { eyebrow: 'Executive committee', title: 'Our leadership team' },
      stats: { eyebrow: 'In numbers', title: 'TAOMAN Group Investment at a glance' },
      cta: { title: 'Join the TAOMAN ecosystem', description: 'Discover how we can contribute to your success.', button: 'Get started' },
    },
    contact: {
      seoDescription: 'Contact TAOMAN Group Investment: Lomé headquarters, field teams, public-private partnerships and dedicated forms.',
      hero: { eyebrow: 'Contact', title: "Let's talk about your project", description: 'A dedicated team responds within 24 hours. Choose the channel that best matches your request.' },
      forms: { investTitle: 'Invest with TAOMAN', quoteTitle: 'Request a quote', infoTitle: 'Information request', partnershipTitle: 'Institutional partnership' },
    },
    faq: {
      seoDescription: 'TAOMAN Group Investment frequently asked questions: investment, operational services, KYC, reporting, customer journey.',
      hero: { eyebrow: 'Help center', title: 'Frequently Asked Questions', description: 'Find clear answers about our investments, our services and how we operate.' },
      searchPlaceholder: 'Search a question…',
      noResults: 'No questions match your search.',
    },
    services: {
      hero: { eyebrow: 'Operational services', title: 'Our services', description: 'A complete range of field services led by dedicated teams, clear SLAs and structured reporting.' },
      sectionTitle: 'Eight services, one promise',
      detailedTitle: 'Understand our trades',
      detailedDescription: 'Explore each service in depth: scope, steps, team, deadlines and quality commitment.',
    },
    sectors: {
      hero: { eyebrow: 'Investment sectors', title: 'Our business sectors', description: 'A balanced diversification driven by field teams and concrete projects: logistics, agro, trade, construction, digital.' },
      keyAdvantages: 'Key advantages',
      whySector: 'Why this sector',
      vigilancePoints: 'Points of vigilance',
      risksAndMitigation: 'Risks & mitigation',
    },
    home: {
      seoDescription:
        'TAOMAN Group Investment — Structured investment, public-private partnerships and operational services (car wash, moving, mechanics, transport) in Togo and the ECOWAS region.',
      hero: {
        liveLabel: 'Live',
        livePill: 'Real-time monitoring',
        kpiLabel: 'customer satisfaction',
        mosaic: {
          logistics: { tag: 'Logistics', title: 'Multi-utility fleet' },
          services: { tag: 'Services', title: 'Premium car wash' },
          teams: { tag: 'Teams', title: 'Certified drivers' },
        },
      },
      stats: {
        eyebrow: 'Our impact',
        title: 'Real numbers, measured on the ground',
        description:
          'Consolidated operational data from the TGI program and the group’s service activities.',
        items: {
          projects: { label: 'Projects delivered', hint: 'Logistics, services, construction' },
          sectors: { label: 'Sectors covered', hint: 'TGI + operational services' },
          cities: { label: 'Togo presence', suffix: ' cities', hint: 'Lomé, Kara, Sokodé, Atakpamé…' },
          satisfaction: { label: 'Customer satisfaction', hint: '2025 quarterly survey' },
        },
      },
      services: {
        eyebrow: 'Our offering',
        title: 'Professional services',
        description:
          'A complete range of quality services designed for individuals, companies and investors.',
      },
      realisations: {
        eyebrow: 'Field deliveries',
        title: 'Our projects in pictures',
        description: 'A living gallery, fed by the teams on the ground.',
        ctaAuth: 'See full project tracking',
        ctaGuest: 'Sign in to my investor space',
      },
      sectors: {
        eyebrow: 'Business areas',
        title: 'Investment sectors',
        description:
          'A balanced diversification driven by field teams and concrete projects.',
      },
      testimonials: {
        title: 'What our clients say',
      },
      partners: {
        eyebrow: 'Ecosystem',
        title: 'Who we work with',
        items: [
          { name: 'Partner banks', eyebrow: 'Financing' },
          { name: 'Institutional investors', eyebrow: 'Capital' },
          { name: 'Togolese SMEs', eyebrow: 'Network' },
          { name: 'Agricultural co-ops', eyebrow: 'Production' },
          { name: 'Local authorities', eyebrow: 'PPP' },
          { name: 'Togolese diaspora', eyebrow: 'Investment' },
          { name: 'ECOWAS funders', eyebrow: 'Regional' },
          { name: 'Chambers of commerce', eyebrow: 'Compliance' },
        ],
      },
      cta: {
        title: 'Ready to transform your future?',
        subtitle:
          'Join thousands of satisfied clients and start your journey toward financial freedom.',
        button: 'Contact us',
      },
    },
  },

  ES: {
    common: {
      learnMore: 'Saber más',
      readMore: 'Leer más',
      requestQuote: 'Solicitar presupuesto',
      contactUs: 'Contáctenos',
      contactInvest: 'Contáctenos para invertir',
      mySpace: 'Mi espacio',
      registerFree: 'Registrarse gratis',
      previous: 'Anterior',
      next: 'Siguiente',
      pause: 'Pausa',
      resume: 'Reanudar',
      live: 'En vivo',
      filterAll: 'Todos',
      loading: 'Cargando…',
      seeAll: 'Ver todo',
      menu: 'Menú',
      backHome: 'Volver al inicio',
      send: 'Enviar',
      submit: 'Enviar',
      search: 'Buscar',
      cancel: 'Cancelar',
      save: 'Guardar',
      yes: 'Sí',
      no: 'No',
    },
    about: {
      seoDescription: 'Descubra TAOMAN Group Investment: misión, visión, valores, gobernanza y liderazgo. Socio estratégico para la inversión y los servicios en Togo.',
      hero: { eyebrow: 'Acerca de', commitmentsLabel: 'Nuestros compromisos' },
      mission: { eyebrow: 'Nuestra misión', title: 'Lo que hacemos, cada día.' },
      vision: { eyebrow: 'Nuestra visión', title: 'A dónde queremos ir.' },
      values: { eyebrow: 'Nuestros pilares', title: 'Nuestros valores fundamentales' },
      governance: {
        eyebrow: 'Gobernanza',
        title: 'Una estructura rigurosa al servicio de los inversores',
        description: 'TAOMAN Group Investment opera bajo una gobernanza institucional estricta alineada con los estándares UEMOA/CEDEAO: órganos independientes, controles internos y reporting estructurado.',
        pillars: [
          { title: 'Consejo de Administración', description: 'Órgano estratégico que valida las inversiones, las cuentas anuales y la dirección a largo plazo. Composición mixta (fundadores, independientes, expertos sectoriales).' },
          { title: 'Comité de Auditoría y Cumplimiento', description: 'KYC, lucha contra el blanqueo (AML), cumplimiento UEMOA, seguimiento de riesgos operativos y financieros. Reuniones trimestrales con reporte al Consejo.' },
          { title: 'Reporting al inversor', description: 'Cuadros de mando mensuales, informes trimestrales PDF, acceso al portal web seguro, alertas WhatsApp en umbrales críticos. Transparencia 100%.' },
          { title: 'Política de riesgos', description: 'Cartografía de riesgos (mercado, operacional, crédito, imagen), plan de mitigación documentado, auditorías independientes anuales y provisiones por sector.' },
        ],
      },
      timeline: { eyebrow: 'Hitos clave', title: 'Nuestra trayectoria' },
      leaders: { eyebrow: 'Comité ejecutivo', title: 'Nuestro equipo directivo' },
      stats: { eyebrow: 'En cifras', title: 'TAOMAN Group Investment de un vistazo' },
      cta: { title: 'Únase al ecosistema TAOMAN', description: 'Descubra cómo podemos contribuir a su éxito.', button: 'Comenzar ahora' },
    },
    contact: {
      seoDescription: 'Contacte TAOMAN Group Investment: sede en Lomé, equipo de campo, alianzas público-privadas y formularios dedicados.',
      hero: { eyebrow: 'Contacto', title: 'Hablemos de su proyecto', description: 'Un equipo dedicado responde en 24 h. Elija el canal más adecuado a su consulta.' },
      forms: { investTitle: 'Invertir con TAOMAN', quoteTitle: 'Solicitar presupuesto', infoTitle: 'Solicitud de información', partnershipTitle: 'Alianza institucional' },
    },
    faq: {
      seoDescription: 'Preguntas frecuentes de TAOMAN Group Investment: inversión, servicios operativos, KYC, reporting, recorrido del cliente.',
      hero: { eyebrow: 'Centro de ayuda', title: 'Preguntas frecuentes', description: 'Encuentre respuestas claras sobre nuestras inversiones, servicios y funcionamiento.' },
      searchPlaceholder: 'Buscar una pregunta…',
      noResults: 'Ninguna pregunta coincide con su búsqueda.',
    },
    services: {
      hero: { eyebrow: 'Servicios operativos', title: 'Nuestros servicios', description: 'Una oferta completa de servicios de campo dirigida por equipos dedicados, SLA claros y reporting estructurado.' },
      sectionTitle: 'Ocho servicios, una promesa',
      detailedTitle: 'Conozca nuestros oficios',
      detailedDescription: 'Explore cada servicio en profundidad: alcance, etapas, equipo, plazos y compromiso de calidad.',
    },
    sectors: {
      hero: { eyebrow: 'Sectores de inversión', title: 'Nuestros sectores de actividad', description: 'Una diversificación equilibrada impulsada por equipos sobre el terreno y proyectos concretos: logística, agro, comercio, construcción, digital.' },
      keyAdvantages: 'Ventajas clave',
      whySector: 'Por qué este sector',
      vigilancePoints: 'Puntos de vigilancia',
      risksAndMitigation: 'Riesgos y mitigación',
    },
    home: {
      seoDescription:
        'TAOMAN Group Investment — Inversión estructurada, alianzas público-privadas y servicios operativos (lavado, mudanzas, mecánica, transporte) en Togo y la subregión CEDEAO.',
      hero: {
        liveLabel: 'En vivo',
        livePill: 'Seguimiento en tiempo real',
        kpiLabel: 'satisfacción del cliente',
        mosaic: {
          logistics: { tag: 'Logística', title: 'Flota multiuso' },
          services: { tag: 'Servicios', title: 'Lavado premium' },
          teams: { tag: 'Equipos', title: 'Conductores certificados' },
        },
      },
      stats: {
        eyebrow: 'Nuestro impacto',
        title: 'Cifras concretas, medidas sobre el terreno',
        description:
          'Datos operativos consolidados del programa TGI y de los servicios del grupo.',
        items: {
          projects: { label: 'Proyectos entregados', hint: 'Logística, servicios, construcción' },
          sectors: { label: 'Sectores cubiertos', hint: 'TGI + servicios operativos' },
          cities: { label: 'Presencia en Togo', suffix: ' ciudades', hint: 'Lomé, Kara, Sokodé, Atakpamé…' },
          satisfaction: { label: 'Satisfacción del cliente', hint: 'Encuesta trimestral 2025' },
        },
      },
      services: {
        eyebrow: 'Nuestras prestaciones',
        title: 'Servicios profesionales',
        description:
          'Una oferta completa de servicios de calidad para particulares, empresas e inversores.',
      },
      realisations: {
        eyebrow: 'Realizaciones',
        title: 'Nuestros proyectos en imágenes',
        description: 'Una galería viva, alimentada por los equipos sobre el terreno.',
        ctaAuth: 'Ver seguimiento completo de los proyectos',
        ctaGuest: 'Acceder a mi espacio de inversor',
      },
      sectors: {
        eyebrow: 'Áreas de actividad',
        title: 'Sectores de inversión',
        description:
          'Una diversificación equilibrada impulsada por equipos sobre el terreno y proyectos concretos.',
      },
      testimonials: {
        title: 'Lo que dicen nuestros clientes',
      },
      partners: {
        eyebrow: 'Ecosistema',
        title: 'Con quién trabajamos',
        items: [
          { name: 'Bancos asociados', eyebrow: 'Financiación' },
          { name: 'Inversores institucionales', eyebrow: 'Capital' },
          { name: 'Pymes togolesas', eyebrow: 'Red' },
          { name: 'Cooperativas agrícolas', eyebrow: 'Producción' },
          { name: 'Entidades locales', eyebrow: 'APP' },
          { name: 'Diáspora togolesa', eyebrow: 'Inversión' },
          { name: 'Financiadores CEDEAO', eyebrow: 'Regional' },
          { name: 'Cámaras de comercio', eyebrow: 'Cumplimiento' },
        ],
      },
      cta: {
        title: '¿Listo para transformar su futuro?',
        subtitle:
          'Únase a miles de clientes satisfechos y comience su camino hacia la libertad financiera.',
        button: 'Contáctenos',
      },
    },
  },

  PT: {
    common: {
      learnMore: 'Saber mais',
      readMore: 'Ler mais',
      requestQuote: 'Pedir orçamento',
      contactUs: 'Contactar-nos',
      contactInvest: 'Contactar-nos para investir',
      mySpace: 'O meu espaço',
      registerFree: 'Registar gratuitamente',
      previous: 'Anterior',
      next: 'Seguinte',
      pause: 'Pausa',
      resume: 'Retomar',
      live: 'Em direto',
      filterAll: 'Todos',
      loading: 'A carregar…',
      seeAll: 'Ver tudo',
      menu: 'Menu',
      backHome: 'Voltar ao início',
      send: 'Enviar',
      submit: 'Submeter',
      search: 'Pesquisar',
      cancel: 'Cancelar',
      save: 'Guardar',
      yes: 'Sim',
      no: 'Não',
    },
    about: {
      seoDescription: 'Descubra TAOMAN Group Investment: missão, visão, valores, governança e liderança. Parceiro estratégico para o investimento e serviços no Togo.',
      hero: { eyebrow: 'Sobre', commitmentsLabel: 'Os nossos compromissos' },
      mission: { eyebrow: 'A nossa missão', title: 'O que fazemos, todos os dias.' },
      vision: { eyebrow: 'A nossa visão', title: 'Onde queremos ir.' },
      values: { eyebrow: 'Os nossos pilares', title: 'Os nossos valores fundamentais' },
      governance: {
        eyebrow: 'Governança',
        title: 'Uma estrutura rigorosa ao serviço dos investidores',
        description: 'A TAOMAN opera sob governança institucional rigorosa alinhada com os padrões UEMOA/CEDEAO: órgãos independentes, controlos internos e reporting estruturado.',
        pillars: [
          { title: 'Conselho de Administração', description: 'Órgão estratégico que valida investimentos, contas anuais e a direção a longo prazo. Composição mista (fundadores, independentes, expertise setorial).' },
          { title: 'Comité de Auditoria e Conformidade', description: 'KYC, anti-branqueamento (AML), conformidade UEMOA, monitorização de riscos operacionais e financeiros. Reuniões trimestrais com reporte ao Conselho.' },
          { title: 'Reporting ao investidor', description: 'Painéis mensais, relatórios trimestrais PDF, acesso ao portal web seguro, alertas WhatsApp em limites críticos. Transparência 100%.' },
          { title: 'Política de risco', description: 'Cartografia de riscos (mercado, operacional, crédito, imagem), plano de mitigação documentado, auditorias independentes anuais e provisões setoriais.' },
        ],
      },
      timeline: { eyebrow: 'Marcos-chave', title: 'O nosso percurso' },
      leaders: { eyebrow: 'Comité executivo', title: 'A nossa equipa de liderança' },
      stats: { eyebrow: 'Em números', title: 'TAOMAN Group Investment num relance' },
      cta: { title: 'Junte-se ao ecossistema TAOMAN', description: 'Descubra como podemos contribuir para o seu sucesso.', button: 'Começar agora' },
    },
    contact: {
      seoDescription: 'Contacte TAOMAN Group Investment: sede em Lomé, equipa no terreno, parcerias público-privadas e formulários dedicados.',
      hero: { eyebrow: 'Contacto', title: 'Vamos falar do seu projeto', description: 'Uma equipa dedicada responde em 24 h. Escolha o canal mais adequado ao seu pedido.' },
      forms: { investTitle: 'Investir com a TAOMAN', quoteTitle: 'Pedir orçamento', infoTitle: 'Pedido de informação', partnershipTitle: 'Parceria institucional' },
    },
    faq: {
      seoDescription: 'Perguntas frequentes da TAOMAN: investimento, serviços operacionais, KYC, reporting, percurso do cliente.',
      hero: { eyebrow: 'Centro de ajuda', title: 'Perguntas frequentes', description: 'Encontre respostas claras sobre os nossos investimentos, serviços e funcionamento.' },
      searchPlaceholder: 'Pesquisar uma pergunta…',
      noResults: 'Nenhuma pergunta corresponde à sua pesquisa.',
    },
    services: {
      hero: { eyebrow: 'Serviços operacionais', title: 'Os nossos serviços', description: 'Uma oferta completa de serviços de terreno conduzida por equipas dedicadas, SLAs claros e reporting estruturado.' },
      sectionTitle: 'Oito serviços, uma só promessa',
      detailedTitle: 'Conheça as nossas profissões',
      detailedDescription: 'Explore cada serviço em profundidade: âmbito, etapas, equipa, prazos e compromisso de qualidade.',
    },
    sectors: {
      hero: { eyebrow: 'Setores de investimento', title: 'Os nossos setores de atividade', description: 'Uma diversificação equilibrada impulsionada por equipas no terreno e projetos concretos: logística, agro, comércio, construção, digital.' },
      keyAdvantages: 'Vantagens-chave',
      whySector: 'Porquê este setor',
      vigilancePoints: 'Pontos de vigilância',
      risksAndMitigation: 'Riscos e mitigação',
    },
    home: {
      seoDescription:
        'TAOMAN Group Investment — Investimento estruturado, parcerias público-privadas e serviços operacionais (lavagem, mudanças, mecânica, transporte) no Togo e na sub-região CEDEAO.',
      hero: {
        liveLabel: 'Em direto',
        livePill: 'Monitorização em tempo real',
        kpiLabel: 'satisfação do cliente',
        mosaic: {
          logistics: { tag: 'Logística', title: 'Frota multifuncional' },
          services: { tag: 'Serviços', title: 'Lavagem premium' },
          teams: { tag: 'Equipas', title: 'Condutores certificados' },
        },
      },
      stats: {
        eyebrow: 'O nosso impacto',
        title: 'Números concretos, medidos no terreno',
        description:
          'Dados operacionais consolidados do programa TGI e dos serviços do grupo.',
        items: {
          projects: { label: 'Projetos entregues', hint: 'Logística, serviços, construção' },
          sectors: { label: 'Setores cobertos', hint: 'TGI + serviços operacionais' },
          cities: { label: 'Presença no Togo', suffix: ' cidades', hint: 'Lomé, Kara, Sokodé, Atakpamé…' },
          satisfaction: { label: 'Satisfação do cliente', hint: 'Inquérito trimestral 2025' },
        },
      },
      services: {
        eyebrow: 'As nossas prestações',
        title: 'Serviços profissionais',
        description:
          'Uma oferta completa de serviços de qualidade para particulares, empresas e investidores.',
      },
      realisations: {
        eyebrow: 'Realizações no terreno',
        title: 'Os nossos projetos em imagens',
        description: 'Uma galeria viva, alimentada pelas equipas no terreno.',
        ctaAuth: 'Ver acompanhamento completo dos projetos',
        ctaGuest: 'Entrar no meu espaço de investidor',
      },
      sectors: {
        eyebrow: 'Áreas de atividade',
        title: 'Setores de investimento',
        description:
          'Uma diversificação equilibrada impulsionada por equipas no terreno e projetos concretos.',
      },
      testimonials: {
        title: 'O que dizem os nossos clientes',
      },
      partners: {
        eyebrow: 'Ecossistema',
        title: 'Com quem trabalhamos',
        items: [
          { name: 'Bancos parceiros', eyebrow: 'Financiamento' },
          { name: 'Investidores institucionais', eyebrow: 'Capital' },
          { name: 'PMEs togolesas', eyebrow: 'Rede' },
          { name: 'Cooperativas agrícolas', eyebrow: 'Produção' },
          { name: 'Autoridades locais', eyebrow: 'PPP' },
          { name: 'Diáspora togolesa', eyebrow: 'Investimento' },
          { name: 'Financiadores CEDEAO', eyebrow: 'Regional' },
          { name: 'Câmaras de comércio', eyebrow: 'Conformidade' },
        ],
      },
      cta: {
        title: 'Pronto para transformar o seu futuro?',
        subtitle:
          'Junte-se a milhares de clientes satisfeitos e comece o seu caminho rumo à liberdade financeira.',
        button: 'Contactar-nos',
      },
    },
  },

  DE: {
    common: {
      learnMore: 'Mehr erfahren',
      readMore: 'Weiterlesen',
      requestQuote: 'Angebot anfordern',
      contactUs: 'Kontakt',
      contactInvest: 'Kontakt zur Investition',
      mySpace: 'Mein Bereich',
      registerFree: 'Kostenlos registrieren',
      previous: 'Zurück',
      next: 'Weiter',
      pause: 'Pause',
      resume: 'Fortsetzen',
      live: 'Live',
      filterAll: 'Alle',
      loading: 'Lädt…',
      seeAll: 'Alles ansehen',
      menu: 'Menü',
      backHome: 'Zur Startseite',
      send: 'Senden',
      submit: 'Einreichen',
      search: 'Suchen',
      cancel: 'Abbrechen',
      save: 'Speichern',
      yes: 'Ja',
      no: 'Nein',
    },
    about: {
      seoDescription: 'Entdecken Sie TAOMAN Group Investment: Mission, Vision, Werte, Governance und Führung. Strategischer Partner für Investitionen und Dienstleistungen in Togo.',
      hero: { eyebrow: 'Über uns', commitmentsLabel: 'Unsere Verpflichtungen' },
      mission: { eyebrow: 'Unsere Mission', title: 'Was wir täglich tun.' },
      vision: { eyebrow: 'Unsere Vision', title: 'Wohin wir gehen wollen.' },
      values: { eyebrow: 'Unsere Säulen', title: 'Unsere Grundwerte' },
      governance: {
        eyebrow: 'Governance',
        title: 'Eine strenge Struktur im Dienst der Investoren',
        description: 'TAOMAN Group Investment arbeitet nach strengen institutionellen Governance-Grundsätzen, ausgerichtet an UEMOA- und ECOWAS-Standards: unabhängige Entscheidungsgremien, interne Kontrollen und strukturiertes Reporting.',
        pillars: [
          { title: 'Verwaltungsrat', description: 'Strategisches Gremium, das Investitionen, Jahresabschlüsse und langfristige Ausrichtung validiert. Gemischte Zusammensetzung (Gründer, Unabhängige, Branchenexpertise).' },
          { title: 'Audit- und Compliance-Komitee', description: 'KYC, Anti-Geldwäsche (AML), UEMOA-Compliance, Überwachung operativer und finanzieller Risiken. Quartalsweise Sitzungen mit Berichterstattung an den Rat.' },
          { title: 'Investor Reporting', description: 'Monatliche Dashboards, vierteljährliche PDF-Berichte, Zugang zum sicheren Webportal, WhatsApp-Alarme bei kritischen Schwellen. 100% Transparenz.' },
          { title: 'Risikopolitik', description: 'Risikolandkarte (Markt, Betrieb, Kredit, Image), dokumentierter Mitigationsplan, jährliche unabhängige Audits und sektorspezifische Rückstellungen.' },
        ],
      },
      timeline: { eyebrow: 'Meilensteine', title: 'Unser Werdegang' },
      leaders: { eyebrow: 'Führungskomitee', title: 'Unser Führungsteam' },
      stats: { eyebrow: 'In Zahlen', title: 'TAOMAN Group Investment auf einen Blick' },
      cta: { title: 'Treten Sie dem TAOMAN-Ökosystem bei', description: 'Erfahren Sie, wie wir zu Ihrem Erfolg beitragen können.', button: 'Jetzt starten' },
    },
    contact: {
      seoDescription: 'Kontaktieren Sie TAOMAN Group Investment: Hauptsitz Lomé, Vor-Ort-Team, öffentlich-private Partnerschaften und dedizierte Formulare.',
      hero: { eyebrow: 'Kontakt', title: 'Sprechen wir über Ihr Projekt', description: 'Ein engagiertes Team antwortet innerhalb von 24 Std. Wählen Sie den passenden Kanal für Ihre Anfrage.' },
      forms: { investTitle: 'Mit TAOMAN investieren', quoteTitle: 'Angebot anfordern', infoTitle: 'Informationsanfrage', partnershipTitle: 'Institutionelle Partnerschaft' },
    },
    faq: {
      seoDescription: 'Häufig gestellte Fragen zu TAOMAN: Investitionen, operative Dienste, KYC, Reporting, Kundenreise.',
      hero: { eyebrow: 'Hilfezentrum', title: 'Häufig gestellte Fragen', description: 'Finden Sie klare Antworten zu unseren Investitionen, Dienstleistungen und Abläufen.' },
      searchPlaceholder: 'Frage suchen…',
      noResults: 'Keine Frage entspricht Ihrer Suche.',
    },
    services: {
      hero: { eyebrow: 'Operative Dienste', title: 'Unsere Dienstleistungen', description: 'Ein umfassendes Angebot an Vor-Ort-Diensten mit dedizierten Teams, klaren SLAs und strukturiertem Reporting.' },
      sectionTitle: 'Acht Dienste, ein Versprechen',
      detailedTitle: 'Unsere Berufe verstehen',
      detailedDescription: 'Erkunden Sie jeden Dienst im Detail: Umfang, Schritte, Team, Fristen und Qualitätsversprechen.',
    },
    sectors: {
      hero: { eyebrow: 'Investitionssektoren', title: 'Unsere Tätigkeitsbereiche', description: 'Eine ausgewogene Diversifizierung, getragen von Vor-Ort-Teams und konkreten Projekten: Logistik, Agro, Handel, Bau, Digital.' },
      keyAdvantages: 'Wesentliche Vorteile',
      whySector: 'Warum dieser Sektor',
      vigilancePoints: 'Aufmerksamkeitspunkte',
      risksAndMitigation: 'Risiken & Mitigation',
    },
    home: {
      seoDescription:
        'TAOMAN Group Investment — Strukturierte Investitionen, öffentlich-private Partnerschaften und operative Dienste (Autowäsche, Umzüge, Mechanik, Transport) in Togo und der ECOWAS-Region.',
      hero: {
        liveLabel: 'Live',
        livePill: 'Echtzeit-Überwachung',
        kpiLabel: 'Kundenzufriedenheit',
        mosaic: {
          logistics: { tag: 'Logistik', title: 'Multifunktions-Flotte' },
          services: { tag: 'Services', title: 'Premium-Autowäsche' },
          teams: { tag: 'Teams', title: 'Zertifizierte Fahrer' },
        },
      },
      stats: {
        eyebrow: 'Unsere Wirkung',
        title: 'Konkrete Zahlen, vor Ort gemessen',
        description:
          'Konsolidierte Betriebsdaten aus dem TGI-Programm und den Dienstleistungen der Gruppe.',
        items: {
          projects: { label: 'Gelieferte Projekte', hint: 'Logistik, Dienste, Bau' },
          sectors: { label: 'Abgedeckte Sektoren', hint: 'TGI + operative Dienste' },
          cities: { label: 'Präsenz in Togo', suffix: ' Städte', hint: 'Lomé, Kara, Sokodé, Atakpamé…' },
          satisfaction: { label: 'Kundenzufriedenheit', hint: 'Quartalsumfrage 2025' },
        },
      },
      services: {
        eyebrow: 'Unser Angebot',
        title: 'Professionelle Dienstleistungen',
        description:
          'Ein umfassendes Angebot an Qualitätsdiensten für Privatpersonen, Unternehmen und Investoren.',
      },
      realisations: {
        eyebrow: 'Vor-Ort-Lieferungen',
        title: 'Unsere Projekte in Bildern',
        description: 'Eine lebendige Galerie, gespeist von den Teams vor Ort.',
        ctaAuth: 'Vollständiges Projekt-Tracking ansehen',
        ctaGuest: 'In meinen Investorenbereich einloggen',
      },
      sectors: {
        eyebrow: 'Geschäftsfelder',
        title: 'Investitionssektoren',
        description:
          'Eine ausgewogene Diversifizierung, getragen von Vor-Ort-Teams und konkreten Projekten.',
      },
      testimonials: {
        title: 'Was unsere Kunden sagen',
      },
      partners: {
        eyebrow: 'Ökosystem',
        title: 'Mit wem wir arbeiten',
        items: [
          { name: 'Partnerbanken', eyebrow: 'Finanzierung' },
          { name: 'Institutionelle Anleger', eyebrow: 'Kapital' },
          { name: 'Togoische KMU', eyebrow: 'Netzwerk' },
          { name: 'Landwirtschaftliche Genossenschaften', eyebrow: 'Produktion' },
          { name: 'Kommunen', eyebrow: 'PPP' },
          { name: 'Togoische Diaspora', eyebrow: 'Investition' },
          { name: 'ECOWAS-Finanziers', eyebrow: 'Regional' },
          { name: 'Handelskammern', eyebrow: 'Compliance' },
        ],
      },
      cta: {
        title: 'Bereit, Ihre Zukunft zu gestalten?',
        subtitle:
          'Schließen Sie sich Tausenden zufriedener Kunden an und starten Sie Ihren Weg zur finanziellen Freiheit.',
        button: 'Kontakt',
      },
    },
  },

  AR: {
    common: {
      learnMore: 'اعرف المزيد',
      readMore: 'اقرأ المزيد',
      requestQuote: 'اطلب عرض سعر',
      contactUs: 'اتصل بنا',
      contactInvest: 'اتصل بنا للاستثمار',
      mySpace: 'مساحتي',
      registerFree: 'سجل مجانًا',
      previous: 'السابق',
      next: 'التالي',
      pause: 'إيقاف',
      resume: 'استئناف',
      live: 'مباشر',
      filterAll: 'الكل',
      loading: 'جارٍ التحميل…',
      seeAll: 'عرض الكل',
      menu: 'القائمة',
      backHome: 'العودة إلى الصفحة الرئيسية',
      send: 'إرسال',
      submit: 'تقديم',
      search: 'بحث',
      cancel: 'إلغاء',
      save: 'حفظ',
      yes: 'نعم',
      no: 'لا',
    },
    about: {
      seoDescription: 'اكتشف تاومان للاستثمار: المهمة والرؤية والقيم والحوكمة والقيادة. شريك استراتيجي للاستثمار والخدمات في توغو.',
      hero: { eyebrow: 'من نحن', commitmentsLabel: 'التزاماتنا' },
      mission: { eyebrow: 'مهمتنا', title: 'ما نقوم به كل يوم.' },
      vision: { eyebrow: 'رؤيتنا', title: 'إلى أين نريد أن نصل.' },
      values: { eyebrow: 'ركائزنا', title: 'قيمنا الأساسية' },
      governance: {
        eyebrow: 'الحوكمة',
        title: 'هيكل صارم يخدم المستثمرين',
        description: 'تعمل تاومان وفق حوكمة مؤسسية صارمة متوافقة مع معايير UEMOA والإيكواس: هيئات قرار مستقلة، رقابة داخلية وتقارير منظمة.',
        pillars: [
          { title: 'مجلس الإدارة', description: 'هيئة استراتيجية تصادق على الاستثمارات والحسابات السنوية والتوجهات بعيدة المدى. تركيبة مختلطة (مؤسسون، مستقلون، خبرة قطاعية).' },
          { title: 'لجنة التدقيق والامتثال', description: 'KYC ومكافحة غسل الأموال (AML) والامتثال لـ UEMOA ومتابعة المخاطر التشغيلية والمالية. اجتماعات ربع سنوية مع رفع تقرير للمجلس.' },
          { title: 'تقارير المستثمرين', description: 'لوحات تحكم شهرية، تقارير ربع سنوية PDF، الوصول إلى البوابة الآمنة، تنبيهات WhatsApp عند العتبات الحرجة. شفافية 100%.' },
          { title: 'سياسة المخاطر', description: 'خريطة المخاطر (سوقية، تشغيلية، ائتمانية، السمعة)، خطة تخفيف موثقة، مراجعات سنوية مستقلة ومخصصات حسب القطاع.' },
        ],
      },
      timeline: { eyebrow: 'محطات رئيسية', title: 'مسيرتنا' },
      leaders: { eyebrow: 'لجنة الإدارة', title: 'فريق القيادة' },
      stats: { eyebrow: 'بالأرقام', title: 'تاومان للاستثمار في لمحة' },
      cta: { title: 'انضم إلى منظومة تاومان', description: 'اكتشف كيف يمكننا الإسهام في نجاحك.', button: 'ابدأ الآن' },
    },
    contact: {
      seoDescription: 'تواصل مع تاومان للاستثمار: المقر في لومي، فريق ميداني، شراكات بين القطاعين العام والخاص ونماذج مخصصة.',
      hero: { eyebrow: 'تواصل', title: 'لنتحدث عن مشروعك', description: 'فريق مخصص يرد خلال 24 ساعة. اختر القناة الأنسب لطلبك.' },
      forms: { investTitle: 'استثمر مع تاومان', quoteTitle: 'اطلب عرض سعر', infoTitle: 'طلب معلومات', partnershipTitle: 'شراكة مؤسسية' },
    },
    faq: {
      seoDescription: 'الأسئلة الشائعة لتاومان: الاستثمار، الخدمات التشغيلية، KYC، التقارير، رحلة العميل.',
      hero: { eyebrow: 'مركز المساعدة', title: 'الأسئلة الشائعة', description: 'اعثر على إجابات واضحة حول استثماراتنا وخدماتنا وأسلوب عملنا.' },
      searchPlaceholder: 'ابحث عن سؤال…',
      noResults: 'لا توجد أسئلة تطابق بحثك.',
    },
    services: {
      hero: { eyebrow: 'الخدمات التشغيلية', title: 'خدماتنا', description: 'باقة شاملة من الخدمات الميدانية تقودها فرق مخصصة، مع SLA واضحة وتقارير منظمة.' },
      sectionTitle: 'ثماني خدمات ووعد واحد',
      detailedTitle: 'تعرف على مهننا',
      detailedDescription: 'استكشف كل خدمة بعمق: النطاق، المراحل، الفريق، المهل والالتزام بالجودة.',
    },
    sectors: {
      hero: { eyebrow: 'قطاعات الاستثمار', title: 'قطاعات نشاطنا', description: 'تنويع متوازن تقوده فرق ميدانية ومشاريع ملموسة: الخدمات اللوجستية، الزراعة، التجارة، البناء، الرقمية.' },
      keyAdvantages: 'المزايا الرئيسية',
      whySector: 'لماذا هذا القطاع',
      vigilancePoints: 'نقاط اليقظة',
      risksAndMitigation: 'المخاطر والتخفيف',
    },
    home: {
      seoDescription:
        'تاومان للاستثمار — استثمار منظم وشراكات بين القطاعين العام والخاص وخدمات تشغيلية (غسيل سيارات، نقل أثاث، ميكانيكا، نقل) في توغو ومنطقة الإيكواس.',
      hero: {
        liveLabel: 'مباشر',
        livePill: 'مراقبة فورية',
        kpiLabel: 'رضا العملاء',
        mosaic: {
          logistics: { tag: 'الخدمات اللوجستية', title: 'أسطول متعدد الاستخدامات' },
          services: { tag: 'الخدمات', title: 'غسيل سيارات فاخر' },
          teams: { tag: 'الفِرق', title: 'سائقون معتمدون' },
        },
      },
      stats: {
        eyebrow: 'أثرنا',
        title: 'أرقام ملموسة من الميدان',
        description:
          'بيانات تشغيلية موحدة من برنامج TGI وخدمات المجموعة.',
        items: {
          projects: { label: 'المشاريع المنجزة', hint: 'لوجستيات، خدمات، بناء' },
          sectors: { label: 'القطاعات المغطاة', hint: 'TGI + خدمات تشغيلية' },
          cities: { label: 'الحضور في توغو', suffix: ' مدن', hint: 'لومي، كارا، سوكودي، أتاكبامي…' },
          satisfaction: { label: 'رضا العملاء', hint: 'استبيان ربعي 2025' },
        },
      },
      services: {
        eyebrow: 'خدماتنا',
        title: 'خدمات احترافية',
        description:
          'عرض شامل من الخدمات عالية الجودة للأفراد والشركات والمستثمرين.',
      },
      realisations: {
        eyebrow: 'الإنجازات الميدانية',
        title: 'مشاريعنا في صور',
        description: 'معرض حيّ تغذيه الفِرق في الميدان.',
        ctaAuth: 'عرض المتابعة الكاملة للمشاريع',
        ctaGuest: 'الدخول إلى مساحتي كمستثمر',
      },
      sectors: {
        eyebrow: 'مجالات النشاط',
        title: 'قطاعات الاستثمار',
        description:
          'تنويع متوازن تقوده فرق ميدانية ومشاريع ملموسة.',
      },
      testimonials: {
        title: 'ما يقوله عملاؤنا',
      },
      partners: {
        eyebrow: 'النظام البيئي',
        title: 'مع من نعمل',
        items: [
          { name: 'بنوك شريكة', eyebrow: 'التمويل' },
          { name: 'مستثمرون مؤسسيون', eyebrow: 'رأس المال' },
          { name: 'الشركات التوغولية الصغيرة', eyebrow: 'الشبكة' },
          { name: 'تعاونيات زراعية', eyebrow: 'الإنتاج' },
          { name: 'السلطات المحلية', eyebrow: 'الشراكات' },
          { name: 'المغتربون التوغوليون', eyebrow: 'الاستثمار' },
          { name: 'ممولو الإيكواس', eyebrow: 'إقليمي' },
          { name: 'غرف التجارة', eyebrow: 'الامتثال' },
        ],
      },
      cta: {
        title: 'هل أنت مستعد لتغيير مستقبلك؟',
        subtitle:
          'انضم إلى آلاف العملاء الراضين وابدأ رحلتك نحو الحرية المالية.',
        button: 'اتصل بنا',
      },
    },
  },

  ZH: {
    common: {
      learnMore: '了解更多',
      readMore: '阅读更多',
      requestQuote: '获取报价',
      contactUs: '联系我们',
      contactInvest: '联系我们进行投资',
      mySpace: '我的空间',
      registerFree: '免费注册',
      previous: '上一个',
      next: '下一个',
      pause: '暂停',
      resume: '继续',
      live: '直播',
      filterAll: '全部',
      loading: '加载中…',
      seeAll: '查看全部',
      menu: '菜单',
      backHome: '返回首页',
      send: '发送',
      submit: '提交',
      search: '搜索',
      cancel: '取消',
      save: '保存',
      yes: '是',
      no: '否',
    },
    about: {
      seoDescription: '了解 TAOMAN Group Investment：使命、愿景、价值观、治理与领导力。多哥投资与服务的战略合作伙伴。',
      hero: { eyebrow: '关于我们', commitmentsLabel: '我们的承诺' },
      mission: { eyebrow: '我们的使命', title: '我们每天所做的事。' },
      vision: { eyebrow: '我们的愿景', title: '我们的目标。' },
      values: { eyebrow: '我们的支柱', title: '我们的核心价值' },
      governance: {
        eyebrow: '治理',
        title: '为投资者服务的严谨架构',
        description: 'TAOMAN 在 UEMOA/西非经共体标准下严格的机构治理下运作：独立决策机构、内部控制和结构化报告。',
        pillars: [
          { title: '董事会', description: '负责审批投资、年报与长期方向的战略机构。由创始人、独立董事和行业专家共同组成。' },
          { title: '审计与合规委员会', description: 'KYC、反洗钱（AML）、UEMOA 合规、运营与财务风险跟踪。季度会议并向董事会汇报。' },
          { title: '投资者报告', description: '月度仪表盘、季度 PDF 报告、安全网页门户、关键阈值的 WhatsApp 提醒。100% 透明。' },
          { title: '风险政策', description: '风险图谱（市场、运营、信用、形象）、文档化的缓解计划、每年独立审计和按行业准备金。' },
        ],
      },
      timeline: { eyebrow: '里程碑', title: '我们的历程' },
      leaders: { eyebrow: '执行委员会', title: '我们的领导团队' },
      stats: { eyebrow: '数据一览', title: 'TAOMAN Group Investment 概览' },
      cta: { title: '加入 TAOMAN 生态', description: '了解我们如何助力您的成功。', button: '立即开始' },
    },
    contact: {
      seoDescription: '联系 TAOMAN：洛美总部、现场团队、公私合作伙伴关系和专属表单。',
      hero: { eyebrow: '联系', title: '与我们谈谈您的项目', description: '专属团队 24 小时内回复。请选择最适合您的渠道。' },
      forms: { investTitle: '与 TAOMAN 投资', quoteTitle: '获取报价', infoTitle: '咨询信息', partnershipTitle: '机构合作伙伴' },
    },
    faq: {
      seoDescription: 'TAOMAN 常见问题：投资、运营服务、KYC、报告、客户旅程。',
      hero: { eyebrow: '帮助中心', title: '常见问题', description: '获得关于我们投资、服务和运作方式的明确解答。' },
      searchPlaceholder: '搜索问题…',
      noResults: '没有问题与您的搜索匹配。',
    },
    services: {
      hero: { eyebrow: '运营服务', title: '我们的服务', description: '由专属团队领导的现场服务全套，明确的 SLA 和结构化报告。' },
      sectionTitle: '八项服务，一个承诺',
      detailedTitle: '了解我们的业务',
      detailedDescription: '深入了解每项服务：范围、流程、团队、期限与品质承诺。',
    },
    sectors: {
      hero: { eyebrow: '投资领域', title: '我们的业务领域', description: '由现场团队推动的多元化布局：物流、农业、贸易、建筑、数字。' },
      keyAdvantages: '主要优势',
      whySector: '为何选择此领域',
      vigilancePoints: '关注要点',
      risksAndMitigation: '风险与缓解',
    },
    home: {
      seoDescription:
        'TAOMAN Group Investment——多哥与西非经共体地区的结构化投资、公私合作伙伴关系及运营服务（洗车、搬家、机修、运输）。',
      hero: {
        liveLabel: '直播',
        livePill: '实时监控',
        kpiLabel: '客户满意度',
        mosaic: {
          logistics: { tag: '物流', title: '多功能车队' },
          services: { tag: '服务', title: '高端洗车' },
          teams: { tag: '团队', title: '认证司机' },
        },
      },
      stats: {
        eyebrow: '我们的影响',
        title: '现场实测的真实数据',
        description: '来自 TGI 项目与集团服务业务的综合运营数据。',
        items: {
          projects: { label: '已交付项目', hint: '物流、服务、建筑' },
          sectors: { label: '覆盖领域', hint: 'TGI + 运营服务' },
          cities: { label: '多哥布局', suffix: ' 个城市', hint: '洛美、卡拉、索科代、阿塔克帕梅…' },
          satisfaction: { label: '客户满意度', hint: '2025 年季度调查' },
        },
      },
      services: {
        eyebrow: '我们的服务',
        title: '专业服务',
        description: '为个人、企业和投资者提供全方位的高品质服务。',
      },
      realisations: {
        eyebrow: '现场实绩',
        title: '项目实拍',
        description: '现场团队持续更新的鲜活图库。',
        ctaAuth: '查看完整项目跟踪',
        ctaGuest: '登录我的投资者空间',
      },
      sectors: {
        eyebrow: '业务领域',
        title: '投资领域',
        description: '由现场团队推动的多元化布局与具体项目。',
      },
      testimonials: {
        title: '客户怎么说',
      },
      partners: {
        eyebrow: '生态系统',
        title: '与我们合作的伙伴',
        items: [
          { name: '合作银行', eyebrow: '融资' },
          { name: '机构投资者', eyebrow: '资本' },
          { name: '多哥中小企业', eyebrow: '网络' },
          { name: '农业合作社', eyebrow: '生产' },
          { name: '地方政府', eyebrow: '公私合作' },
          { name: '多哥侨民', eyebrow: '投资' },
          { name: '西非经共体出资方', eyebrow: '区域' },
          { name: '商会', eyebrow: '合规' },
        ],
      },
      cta: {
        title: '准备好改变未来了吗？',
        subtitle: '加入数千位满意客户的行列，开启您的财富自由之路。',
        button: '联系我们',
      },
    },
  },
};

export function getContentTranslations(languageCode = 'FR') {
  return CONTENT[languageCode] || CONTENT.FR;
}
