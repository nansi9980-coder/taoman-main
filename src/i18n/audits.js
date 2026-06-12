/**
 * Traductions page AuditsDevisPage — 7 langues (FR/EN complets, autres → repli FR).
 */

const FR = {
  intro: {
    eyebrow: 'Le service en quelques mots',
    title: 'Audits, reporting et conformité : la transparence au service de vos décisions.',
    paragraphs: [
      "TAOMAN GROUP INVESTMENTS accompagne PME, investisseurs et institutions togolaises qui ont besoin de visibilité financière, de contrôle opérationnel et de dossiers conformes aux standards SYSCOA et CEDEAO.",
      "Nos missions débouchent sur des plans d'action concrets, des tableaux de bord investisseur et des rapports PDF structurés — avec un délai de réponse sous 7 à 21 jours selon le périmètre.",
    ],
  },
  offers: {
    eyebrow: 'Nos prestations',
    title: "Trois domaines, un même niveau d'exigence",
    description:
      'Choisissez le type d\'audit ou de reporting adapté à votre situation. Chaque mission est cadrée par un cahier des charges et un livrable documenté.',
    items: [
      {
        id: 'financial',
        title: 'Audit financier',
        desc: 'Analyse des comptes, flux de trésorerie, risques cachés et recommandations chiffrées avec plan de remédiation à 90 jours.',
        pts: ['Revue des états financiers', 'Contrôle des flux', 'Cartographie des risques', 'Plan d\'action chiffré'],
      },
      {
        id: 'operational',
        title: 'Audit opérationnel',
        desc: 'Revue des processus métier, contrôle qualité terrain, audit RH et conformité interne.',
        pts: ['Processus & procédures', 'Contrôle qualité', 'Audit RH', 'Risques opérationnels'],
      },
      {
        id: 'compliance',
        title: 'Conformité & KYC',
        desc: 'Vérifications d\'identité, AML, SYSCOA, CEDEAO et préparation des dossiers investisseur institutionnel.',
        pts: ['KYC / AML', 'Reporting investisseur', 'Gouvernance & conseils', 'Portail sécurisé'],
      },
    ],
  },
  method: {
    eyebrow: 'Notre méthode',
    title: 'Du brief au livrable, étape par étape',
    steps: [
      { num: '01', title: 'Brief & périmètre', desc: 'Échange sur vos objectifs, documents disponibles et délais souhaités.' },
      { num: '02', title: 'Proposition', desc: 'Devis détaillé sous 48 h avec périmètre, livrables et planning.' },
      { num: '03', title: 'Exécution', desc: 'Collecte documentaire, entretiens, analyse sur site si nécessaire.' },
      { num: '04', title: 'Livrable', desc: 'Rapport PDF, synthèse exécutive et recommandations priorisées.' },
    ],
  },
  form: {
    eyebrow: 'Demander un devis',
    title: 'Décrivez votre besoin d\'audit ou de reporting',
    description:
      'Indiquez le type de mission, votre profil et la périodicité souhaitée. Notre équipe revient vers vous sous 48 h avec une proposition adaptée.',
    success: 'Votre demande a été envoyée avec succès. Nous vous recontactons sous 48 h.',
    sending: 'Envoi en cours...',
    submit: 'Envoyer ma demande de devis',
    errorGeneric: "Impossible d'envoyer votre demande.",
    errorNetwork: 'Erreur réseau. Réessayez plus tard.',
    fields: {
      auditType: {
        label: 'Type de mission',
        options: [
          'Audit financier',
          'Audit opérationnel',
          'Conformité KYC / AML',
          'Reporting investisseur',
          'Audit complet (financier + opérationnel)',
        ],
      },
      organizationType: {
        label: 'Votre profil',
        options: ['PME / Entreprise', 'Investisseur particulier', 'Family Office', 'Institution', 'ONG', 'Autre'],
      },
      reportingFrequency: {
        label: 'Périodicité souhaitée',
        options: ['Mission ponctuelle', 'Mensuel', 'Trimestriel', 'Annuel'],
      },
      desiredDate: { label: 'Date souhaitée de démarrage' },
      organization: { label: 'Organisation', placeholder: 'Raison sociale ou structure' },
      name: { label: 'Votre nom', placeholder: 'Nom complet' },
      email: { label: 'Email', placeholder: 'votre@email.com' },
      phone: { label: 'Téléphone', placeholder: '+228 ...' },
      message: {
        label: 'Contexte & documents disponibles',
        placeholder: 'Décrivez votre situation, les documents que vous pouvez fournir et vos objectifs.',
      },
      attachmentLabel: 'Documents complémentaires (PDF)',
      attachmentHint: 'États financiers, procédures internes ou dossier existant (PDF, 10 Mo max).',
    },
  },
  faq: {
    eyebrow: 'FAQ Audits',
    title: 'Questions fréquentes',
    items: [
      {
        question: 'Quels délais pour un audit complet ?',
        answer: 'Comptez 7 à 21 jours ouvrés selon la taille de l\'organisation et la disponibilité des documents. Un planning précis est communiqué dans le devis.',
      },
      {
        question: 'Travaillez-vous avec des investisseurs institutionnels ?',
        answer: 'Oui. Nous préparons des dossiers KYC, des reportings structurés et des tableaux de bord conformes aux attentes des comités d\'investissement.',
      },
      {
        question: 'Les rapports sont-ils accessibles en ligne ?',
        answer: 'Oui. Un portail sécurisé permet de consulter et télécharger vos rapports, avec alertes en cas de déviation des KPI.',
      },
    ],
  },
  finalCta: {
    title: 'Structurez votre gouvernance avec des audits professionnels',
    description: 'Devis gratuit, périmètre clair, livrables documentés. Parlons de votre besoin.',
    btnQuote: 'Demander un devis',
    btnServices: 'Voir tous les services',
  },
};

const EN = {
  intro: {
    eyebrow: 'The service in brief',
    title: 'Audits, reporting and compliance: transparency for better decisions.',
    paragraphs: [
      'TAOMAN GROUP INVESTMENTS supports Togolese SMEs, investors and institutions that need financial visibility, operational control and files aligned with SYSCOA and ECOWAS standards.',
      'Our assignments lead to concrete action plans, investor dashboards and structured PDF reports — with a response within 7 to 21 days depending on scope.',
    ],
  },
  offers: {
    eyebrow: 'Our services',
    title: 'Three domains, one standard of excellence',
    description:
      'Choose the audit or reporting type suited to your situation. Each assignment is scoped with clear deliverables.',
    items: [
      {
        id: 'financial',
        title: 'Financial audit',
        desc: 'Account analysis, cash flow review, hidden risks and quantified recommendations with a 90-day remediation plan.',
        pts: ['Financial statements review', 'Cash flow control', 'Risk mapping', 'Quantified action plan'],
      },
      {
        id: 'operational',
        title: 'Operational audit',
        desc: 'Business process review, field quality control, HR audit and internal compliance.',
        pts: ['Processes & procedures', 'Quality control', 'HR audit', 'Operational risks'],
      },
      {
        id: 'compliance',
        title: 'Compliance & KYC',
        desc: 'Identity checks, AML, SYSCOA, ECOWAS and institutional investor file preparation.',
        pts: ['KYC / AML', 'Investor reporting', 'Governance support', 'Secure portal'],
      },
    ],
  },
  method: {
    eyebrow: 'Our method',
    title: 'From brief to deliverable, step by step',
    steps: [
      { num: '01', title: 'Brief & scope', desc: 'Discussion of your goals, available documents and desired timeline.' },
      { num: '02', title: 'Proposal', desc: 'Detailed quote within 48 h with scope, deliverables and schedule.' },
      { num: '03', title: 'Execution', desc: 'Document collection, interviews, on-site analysis if needed.' },
      { num: '04', title: 'Deliverable', desc: 'PDF report, executive summary and prioritised recommendations.' },
    ],
  },
  form: {
    eyebrow: 'Request a quote',
    title: 'Describe your audit or reporting need',
    description:
      'Indicate mission type, profile and desired frequency. Our team responds within 48 h with a tailored proposal.',
    success: 'Your request was sent successfully. We will contact you within 48 hours.',
    sending: 'Sending...',
    submit: 'Send my quote request',
    errorGeneric: 'Unable to send your request.',
    errorNetwork: 'Network error. Please try again later.',
    fields: {
      auditType: {
        label: 'Mission type',
        options: [
          'Financial audit',
          'Operational audit',
          'KYC / AML compliance',
          'Investor reporting',
          'Full audit (financial + operational)',
        ],
      },
      organizationType: {
        label: 'Your profile',
        options: ['SME / Company', 'Individual investor', 'Family Office', 'Institution', 'NGO', 'Other'],
      },
      reportingFrequency: {
        label: 'Desired frequency',
        options: ['One-off assignment', 'Monthly', 'Quarterly', 'Annual'],
      },
      desiredDate: { label: 'Desired start date' },
      organization: { label: 'Organization', placeholder: 'Company or entity name' },
      name: { label: 'Your name', placeholder: 'Full name' },
      email: { label: 'Email', placeholder: 'your@email.com' },
      phone: { label: 'Phone', placeholder: '+228 ...' },
      message: {
        label: 'Context & available documents',
        placeholder: 'Describe your situation, documents you can provide and your objectives.',
      },
      attachmentLabel: 'Additional documents (PDF)',
      attachmentHint: 'Financial statements, internal procedures or existing file (PDF, 10 MB max).',
    },
  },
  faq: {
    eyebrow: 'Audits FAQ',
    title: 'Frequently asked questions',
    items: [
      {
        question: 'What is the timeline for a full audit?',
        answer: 'Allow 7 to 21 business days depending on organisation size and document availability. A precise schedule is provided in the quote.',
      },
      {
        question: 'Do you work with institutional investors?',
        answer: 'Yes. We prepare KYC files, structured reporting and dashboards aligned with investment committee expectations.',
      },
      {
        question: 'Are reports available online?',
        answer: 'Yes. A secure portal lets you view and download reports, with alerts when KPIs deviate.',
      },
    ],
  },
  finalCta: {
    title: 'Strengthen your governance with professional audits',
    description: 'Free quote, clear scope, documented deliverables. Let\'s discuss your needs.',
    btnQuote: 'Request a quote',
    btnServices: 'View all services',
  },
};

const PACK = { FR, EN, ES: FR, PT: FR, DE: FR, AR: FR, ZH: FR };

export function getAuditsTranslations(language) {
  return PACK[language] || PACK.FR;
}
