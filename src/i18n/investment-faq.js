/**
 * FAQ page Investissement (InvestmentPage) — toutes les langues UI.
 */

const FAQ_FR = {
  ui: {
    title: 'Questions fréquentes',
    intro:
      "Tout ce qu'il faut savoir sur le Groupe Taoman Group Investissement et sur notre programme d'investissement TGI : rendement, risque, sécurité, processus.",
    searchPlaceholder: 'Rechercher dans la FAQ (ex : ticket, rendement, retrait...)',
    emptyTitle: 'Aucune réponse pour cette recherche',
    emptyHint: 'Essayez un autre mot-clé ou changez de catégorie.',
    ctaTitle: "Vous n'avez pas trouvé votre réponse ?",
    ctaDesc:
      'Notre équipe vous répond par e-mail, téléphone ou via les formulaires dédiés (information, investissement, partenariat, projet).',
    ctaDiscuss: "Discuter d'investissement",
    ctaAsk: 'Poser une question',
    ctaFullFaq: 'FAQ complète',
  },
  categories: [
    { id: 'all', label: 'Toutes' },
    { id: 'groupe', label: 'Le Groupe' },
    { id: 'investissement', label: 'Investissement TGI' },
    { id: 'rendement', label: 'Rendement & risque' },
    { id: 'securite', label: 'Sécurité & juridique' },
    { id: 'process', label: 'Process & projet' },
  ],
  items: [
    {
      category: 'groupe',
      question: "Qu'est-ce que Taoman Group Investissement ?",
      answer:
        "Taoman Group Investissement est un groupe togolais multi-activités. Il combine 5 services opérationnels (Lavage automobile, Déménagement, Entretien de bureaux, Mécanique, Transport) et un programme d'investissement participatif baptisé TGI ouvert sur 5 secteurs stratégiques (Logistique & Transports, Agro Business, Commerce général, BTP & Immobilier, Numérique & Services).",
    },
    {
      category: 'groupe',
      question: "Pourquoi un groupe qui fait à la fois des services et de l'investissement ?",
      answer:
        "Cette double identité crée un cercle vertueux : les services opérationnels servent de laboratoire d'apprentissage et de preuve de modèle économique. Ce que nous opérons et maîtrisons, nous savons aussi le financer. Vous investissez dans des modèles déjà éprouvés sur le terrain togolais.",
    },
    {
      category: 'groupe',
      question: 'Où le groupe est-il implanté ?',
      answer:
        "Le siège social est à Lomé, Togo. Nos équipes interviennent sur tout le territoire togolais et sur les couloirs CEDEAO (Bénin, Ghana, Burkina Faso, Côte d'Ivoire, Niger, Mali).",
    },
    {
      category: 'investissement',
      question: 'Quel est le montant minimum pour investir avec Taoman Group Investissement ?',
      answer:
        "Le ticket de départ recommandé est de 500 000 FCFA. Ce montant permet une diversification efficace et donne accès à l'espace investisseur avec reporting complet.",
    },
    {
      category: 'investissement',
      question: 'Quels secteurs sont accessibles via TGI ?',
      answer:
        "Cinq secteurs sont ouverts : Logistique & Transports, Agro Business, Commerce général, BTP & Immobilier, et Numérique & Services. Vous pouvez répartir votre engagement sur un ou plusieurs secteurs.",
    },
    {
      category: 'investissement',
      question: "Quelle est la durée d'un investissement Taoman Group Investissement ?",
      answer:
        "L'horizon de référence est de 10 mois maximum pour un cycle TGI. Certains projets peuvent proposer des horizons plus courts (3, 6 mois) selon le secteur.",
    },
    {
      category: 'investissement',
      question: 'Puis-je investir depuis la diaspora ou hors du Togo ?',
      answer:
        "Oui. Le programme TGI accepte les investisseurs de la diaspora et internationaux. Les flux transitent par des canaux conformes et la signature des contrats peut se faire à distance.",
    },
    {
      category: 'rendement',
      question: 'Quels rendements puis-je attendre ?',
      answer:
        "Les fourchettes indicatives par secteur sont publiées sur chaque fiche projet (environ 10 % à 22 % selon le secteur). Les rendements affichés sont des projections ; le rendement réel dépend du projet et de l'exécution.",
    },
    {
      category: 'rendement',
      question: 'Les rendements affichés sont-ils garantis ?',
      answer:
        "Non. Aucun rendement n'est garanti. Tout investissement comporte un risque, y compris de perte partielle ou totale du capital.",
    },
    {
      category: 'rendement',
      question: 'Comment réduire mon risque global ?',
      answer:
        "Diversifiez sur plusieurs secteurs et projets, n'allouez que ce que votre situation supporte, et lisez chaque fiche projet avant engagement.",
    },
    {
      category: 'rendement',
      question: 'Comment et quand suis-je rémunéré ?',
      answer:
        "Selon le projet, les revenus peuvent être versés mensuellement, trimestriellement ou en clôture de cycle. Le calendrier est précisé dans le contrat.",
    },
    {
      category: 'securite',
      question: 'Êtes-vous une entreprise déclarée et formelle ?',
      answer:
        "Oui. Taoman Group Investissement est une société togolaise régulièrement enregistrée, fiscalement à jour, avec opérations contractualisées et facturation conforme.",
    },
    {
      category: 'securite',
      question: 'Mes données personnelles sont-elles protégées ?',
      answer:
        "Oui. Vos données KYC sont stockées de manière sécurisée et ne sont jamais transmises à des tiers sans base légale.",
    },
    {
      category: 'securite',
      question: 'Que se passe-t-il si un projet sous-performe ?',
      answer:
        "Vous êtes informé via votre espace investisseur. Notre équipe documente les écarts et propose un plan de correction ou une réallocation selon le contrat.",
    },
    {
      category: 'process',
      question: 'Comment soumettre un projet à financer ?',
      answer:
        "Utilisez le formulaire Contact (option « Soumettre un projet »). Notre comité examine chaque dossier et revient sous 5 jours ouvrés.",
    },
    {
      category: 'process',
      question: 'Comment se déroule mon premier investissement ?',
      answer:
        "(1) Compte et KYC. (2) Choix des projets. (3) Signature du contrat. (4) Versement. (5) Suivi via le dashboard.",
    },
    {
      category: 'process',
      question: 'Où voir mes chiffres après connexion ?',
      answer:
        "Votre espace investisseur centralise portefeuille, wallet, reporting projet, documents PDF et notifications, accessible 24/7.",
    },
    {
      category: 'process',
      question: 'Comment retirer mes fonds ?',
      answer:
        "Les retraits se demandent depuis votre wallet, selon l'échéance ou les fenêtres définies au contrat, par virement ou Mobile Money.",
    },
  ],
};

const FAQ_EN = {
  ui: {
    title: 'Frequently asked questions',
    intro:
      'Everything you need to know about Taoman Group Investissement and our TGI investment program: returns, risk, security and process.',
    searchPlaceholder: 'Search the FAQ (e.g. ticket, return, withdrawal…)',
    emptyTitle: 'No results for this search',
    emptyHint: 'Try another keyword or change category.',
    ctaTitle: "Didn't find your answer?",
    ctaDesc:
      'Our team responds by email, phone or via dedicated forms (information, investment, partnership, project).',
    ctaDiscuss: 'Discuss investment',
    ctaAsk: 'Ask a question',
    ctaFullFaq: 'Full FAQ',
  },
  categories: [
    { id: 'all', label: 'All' },
    { id: 'groupe', label: 'The Group' },
    { id: 'investissement', label: 'TGI Investment' },
    { id: 'rendement', label: 'Returns & risk' },
    { id: 'securite', label: 'Security & legal' },
    { id: 'process', label: 'Process & projects' },
  ],
  items: [
    {
      category: 'groupe',
      question: 'What is Taoman Group Investissement?',
      answer:
        'Taoman Group Investissement is a multi-activity Togolese group combining five operational services (car wash, moving, office cleaning, mechanics, transport) and a participatory investment program called TGI across five strategic sectors.',
    },
    {
      category: 'groupe',
      question: 'Why both services and investment?',
      answer:
        'Operational services validate economic models on the ground. What we operate, we know how to finance. You invest in models already proven in Togo.',
    },
    {
      category: 'groupe',
      question: 'Where is the group based?',
      answer:
        'Head office in Lomé, Togo. Operations across Togo and ECOWAS corridors (Benin, Ghana, Burkina Faso, Côte d’Ivoire, Niger, Mali).',
    },
    {
      category: 'investissement',
      question: 'What is the minimum investment amount?',
      answer:
        'The recommended entry ticket is 500,000 CFA. It enables diversification and full access to the investor space with reporting.',
    },
    {
      category: 'investissement',
      question: 'Which sectors are available via TGI?',
      answer:
        'Five sectors: Logistics & Transport, Agribusiness, General Trade, Construction & Real Estate, and Digital & Services. You may spread across one or several.',
    },
    {
      category: 'investissement',
      question: 'How long is a Taoman Group Investissement investment?',
      answer:
        'Reference horizon is up to 10 months per TGI cycle. Some projects may offer shorter horizons (3 or 6 months) depending on the sector.',
    },
    {
      category: 'investissement',
      question: 'Can I invest from the diaspora or abroad?',
      answer:
        'Yes. TGI accepts diaspora and international investors. Payments use compliant channels and contracts can be signed remotely.',
    },
    {
      category: 'rendement',
      question: 'What returns can I expect?',
      answer:
        'Indicative ranges are published per project (roughly 10% to 22% by sector). Figures are projections; actual returns depend on execution.',
    },
    {
      category: 'rendement',
      question: 'Are displayed returns guaranteed?',
      answer:
        'No. No return is guaranteed. Every investment carries risk, including partial or total loss of capital.',
    },
    {
      category: 'rendement',
      question: 'How can I reduce overall risk?',
      answer:
        'Diversify across sectors and projects, only allocate what you can afford, and read each project sheet before committing.',
    },
    {
      category: 'rendement',
      question: 'How and when am I paid?',
      answer:
        'Depending on the project, income may be paid monthly, quarterly or at cycle end, as stated in the contract.',
    },
    {
      category: 'securite',
      question: 'Are you a registered formal company?',
      answer:
        'Yes. Taoman Group Investissement is duly registered in Togo, tax compliant, with contracted operations and proper invoicing.',
    },
    {
      category: 'securite',
      question: 'Is my personal data protected?',
      answer:
        'Yes. KYC data is stored securely and never shared with third parties without legal basis.',
    },
    {
      category: 'securite',
      question: 'What if a project underperforms?',
      answer:
        'You are notified in your investor space. Our team documents gaps and proposes corrective action or reallocation per contract.',
    },
    {
      category: 'process',
      question: 'How do I submit a project for funding?',
      answer:
        'Use the Contact form (“Submit a project”). Our committee reviews each file and responds within five business days.',
    },
    {
      category: 'process',
      question: 'How does my first investment work?',
      answer:
        '(1) Account and KYC. (2) Project selection. (3) Contract signature. (4) Payment. (5) Dashboard tracking.',
    },
    {
      category: 'process',
      question: 'Where do I see my figures after login?',
      answer:
        'Your investor space consolidates portfolio, wallet, project reporting, PDF documents and notifications, 24/7.',
    },
    {
      category: 'process',
      question: 'How do I withdraw funds?',
      answer:
        'Withdrawals are requested from your wallet per contract maturity or defined windows, via bank transfer or Mobile Money.',
    },
  ],
};

const FAQ_ES = {
  ui: {
    title: 'Preguntas frecuentes',
    intro: 'Todo sobre el Grupo Taoman Group Investissement y el programa TGI: rendimiento, riesgo, seguridad y proceso.',
    searchPlaceholder: 'Buscar en la FAQ…',
    emptyTitle: 'Sin resultados',
    emptyHint: 'Pruebe otra palabra clave o categoría.',
    ctaTitle: '¿No encontró su respuesta?',
    ctaDesc: 'Nuestro equipo responde por correo, teléfono o formularios dedicados.',
    ctaDiscuss: 'Hablar de inversión',
    ctaAsk: 'Hacer una pregunta',
    ctaFullFaq: 'FAQ completa',
  },
  categories: [
    { id: 'all', label: 'Todas' },
    { id: 'groupe', label: 'El Grupo' },
    { id: 'investissement', label: 'Inversión TGI' },
    { id: 'rendement', label: 'Rendimiento y riesgo' },
    { id: 'securite', label: 'Seguridad y legal' },
    { id: 'process', label: 'Proceso y proyectos' },
  ],
  items: FAQ_EN.items.map((item, i) => ({
    ...item,
    question: [
      '¿Qué es Taoman Group Investissement?',
      '¿Por qué servicios e inversión?',
      '¿Dónde está implantado el grupo?',
      '¿Cuál es el importe mínimo de inversión?',
      '¿Qué sectores están disponibles vía TGI?',
      '¿Cuál es la duración de una inversión?',
      '¿Puedo invertir desde la diáspora?',
      '¿Qué rendimientos puedo esperar?',
      '¿Están garantizados los rendimientos?',
      '¿Cómo reducir el riesgo global?',
      '¿Cómo y cuándo me pagan?',
      '¿Son una empresa formal registrada?',
      '¿Están protegidos mis datos?',
      '¿Qué pasa si un proyecto rinde poco?',
      '¿Cómo presentar un proyecto?',
      '¿Cómo es mi primera inversión?',
      '¿Dónde veo mis cifras tras iniciar sesión?',
      '¿Cómo retirar fondos?',
    ][i],
    answer: item.answer,
  })),
};

const FAQ_PT = {
  ...FAQ_EN,
  ui: {
    ...FAQ_EN.ui,
    title: 'Perguntas frequentes',
    intro: 'Tudo sobre o Grupo Taoman Group Investissement e o programa TGI: rendimento, risco, segurança e processo.',
    searchPlaceholder: 'Pesquisar na FAQ…',
    emptyTitle: 'Sem resultados',
    emptyHint: 'Tente outra palavra-chave ou categoria.',
    ctaTitle: 'Não encontrou a resposta?',
    ctaDesc: 'A nossa equipa responde por e-mail, telefone ou formulários dedicados.',
    ctaDiscuss: 'Falar sobre investimento',
    ctaAsk: 'Fazer uma pergunta',
    ctaFullFaq: 'FAQ completa',
  },
};

const FAQ_DE = {
  ...FAQ_EN,
  ui: {
    ...FAQ_EN.ui,
    title: 'Häufig gestellte Fragen',
    intro: 'Alles über Taoman Group Investissement und das TGI-Programm: Rendite, Risiko, Sicherheit und Ablauf.',
    searchPlaceholder: 'FAQ durchsuchen…',
    emptyTitle: 'Keine Ergebnisse',
    emptyHint: 'Anderes Stichwort oder Kategorie wählen.',
    ctaTitle: 'Keine Antwort gefunden?',
    ctaDesc: 'Unser Team antwortet per E-Mail, Telefon oder über die Formulare.',
    ctaDiscuss: 'Über Investition sprechen',
    ctaAsk: 'Frage stellen',
    ctaFullFaq: 'Vollständige FAQ',
  },
};

const FAQ_AR = {
  ...FAQ_EN,
  ui: {
    ...FAQ_EN.ui,
    title: 'الأسئلة الشائعة',
    intro: 'كل ما يجب معرفته عن مجموعة Taoman Group Investissement وبرنامج TGI: العائد والمخاطر والأمان والعملية.',
    searchPlaceholder: 'البحث في الأسئلة الشائعة…',
    emptyTitle: 'لا توجد نتائج',
    emptyHint: 'جرّب كلمة أخرى أو فئة مختلفة.',
    ctaTitle: 'لم تجد إجابتك؟',
    ctaDesc: 'فريقنا يرد عبر البريد أو الهاتف أو النماذج المخصصة.',
    ctaDiscuss: 'مناقشة الاستثمار',
    ctaAsk: 'طرح سؤال',
    ctaFullFaq: 'الأسئلة الشائعة كاملة',
  },
};

const FAQ_ZH = {
  ...FAQ_EN,
  ui: {
    ...FAQ_EN.ui,
    title: '常见问题',
    intro: '关于 Taoman Group Investissement 集团与 TGI 投资计划：收益、风险、安全与流程。',
    searchPlaceholder: '搜索常见问题…',
    emptyTitle: '无匹配结果',
    emptyHint: '请尝试其他关键词或分类。',
    ctaTitle: '没有找到答案？',
    ctaDesc: '我们的团队通过电子邮件、电话或专用表单回复。',
    ctaDiscuss: '讨论投资',
    ctaAsk: '提问',
    ctaFullFaq: '查看完整常见问题',
  },
};

const PACKS = {
  FR: FAQ_FR,
  EN: FAQ_EN,
  ES: FAQ_ES,
  PT: FAQ_PT,
  DE: FAQ_DE,
  AR: FAQ_AR,
  ZH: FAQ_ZH,
};

export function getInvestmentFaq(language) {
  return PACKS[language] || FAQ_EN;
}
