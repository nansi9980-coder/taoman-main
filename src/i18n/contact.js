/**
 * Traductions complètes de la page Contact pour les 7 langues du site.
 * Utilisé par src/pages/ContactPage.jsx via getContactTranslations(language).
 */

const CONTACT = {
  FR: {
    intro: {
      eyebrow: '4 formulaires dédiés',
      title: "Quel est l'objet de votre demande ?",
      description:
        "Chaque formulaire est conçu pour aller à l'essentiel et orienter votre demande vers la bonne équipe TAOMAN GROUP INVESTMENTS.",
    },
    breadcrumb: { home: 'Contact' },
    cardSelected: 'Sélectionné',
    cardSelect: 'Choisir ce formulaire',
    topics: {
      info: {
        badge: 'Information',
        title: "Demande d'information générale",
        headline: 'Une question sur TAOMAN GROUP INVESTMENTS ?',
        desc:
          "Vous voulez en savoir plus sur le groupe, ses activités, ses services opérationnels (lavage, déménagement, entretien, transport) ou son programme d'investissement TGI ? Posez-nous votre question, notre équipe vous répond sous 24 heures.",
        submitLabel: 'Envoyer ma question',
        successText: 'Votre demande a bien été reçue. Notre équipe vous répond sous 24 heures.',
        serviceTag: 'Contact – Information',
      },
      invest: {
        badge: 'Investissement',
        title: 'Investir avec TAOMAN GROUP INVESTMENTS',
        headline: "Manifester un intérêt d'investissement",
        desc:
          "Vous souhaitez allouer un capital à des projets opérés par TAOMAN GROUP INVESTMENTS ? Indiquez votre profil, votre ticket envisagé et le ou les secteurs qui vous intéressent. Notre équipe vous rappelle pour une présentation détaillée des opportunités en cours.",
        submitLabel: "Envoyer ma manifestation d'intérêt",
        successText:
          "Votre manifestation d'intérêt a bien été enregistrée. Un conseiller vous contacte sous 48 heures.",
        serviceTag: 'Contact – Investissement',
      },
      partner: {
        badge: 'Partenariat',
        title: 'Devenir partenaire opérationnel',
        headline: 'Construire un partenariat avec TAOMAN GROUP INVESTMENTS',
        desc:
          "Vous représentez une entreprise, une coopérative ou une institution qui souhaite collaborer avec TAOMAN GROUP INVESTMENTS (sous-traitance, distribution, fourniture, services support, projet conjoint) ? Présentez-nous votre proposition — notre responsable partenariats B2B (Flavien) étudie chaque dossier et revient vers vous sous 5 jours ouvrés.",
        submitLabel: 'Envoyer ma proposition',
        successText:
          'Votre proposition de partenariat a bien été reçue. Notre direction étudie chaque dossier et revient vers vous sous 5 jours ouvrés.',
        serviceTag: 'Contact – Partenariat',
      },
      project: {
        badge: 'Projet à financer',
        title: 'Soumettre un projet à financer',
        headline: 'Présentez votre projet à notre comité',
        desc:
          "Vous portez un projet entrepreneurial à fort potentiel et vous cherchez un financement structuré ? Décrivez votre projet, son secteur, son ticket et son horizon. Notre comité d'investissement examine chaque dossier et revient vers vous avec une décision motivée sous 5 jours ouvrés.",
        submitLabel: 'Soumettre mon projet',
        successText:
          "Votre projet a bien été reçu. Le comité d'investissement revient vers vous sous 5 jours ouvrés.",
        serviceTag: 'Contact – Soumission projet',
      },
    },
    fields: {
      name: { label: 'Votre nom complet', placeholder: 'Ex : Komla Mensah' },
      email: { label: 'Adresse email', placeholder: 'votre@email.com' },
      phone: { label: 'Téléphone', placeholder: '+228 90 00 00 00' },
      organization: { label: 'Nom de votre organisation', placeholder: 'Ex : SARL Mensah & Fils' },
      role: { label: 'Votre fonction', placeholder: 'Ex : Directeur Général' },
      sectorOrg: {
        label: "Secteur d'activité de votre organisation",
        placeholder: 'Ex : Distribution, BTP, Logistique...',
      },
      proposalType: {
        label: 'Type de partenariat envisagé',
        options: [
          'Fournisseur / Sous-traitant',
          'Distribution / Revente',
          'Co-investissement sur projet',
          'Partenariat institutionnel',
          'Échange de compétences',
          'Autre',
        ],
      },
      profile: {
        label: 'Votre profil',
        options: ['Particulier', 'Diaspora togolaise', 'Entreprise / PME', 'Family Office', 'Institutionnel'],
      },
      ticket: {
        label: 'Ticket envisagé',
        options: [
          'Moins de 500 000 FCFA',
          '500 000 – 2 000 000 FCFA',
          '2 000 000 – 10 000 000 FCFA',
          '10 000 000 – 50 000 000 FCFA',
          'Plus de 50 000 000 FCFA',
        ],
      },
      sector: { label: 'Secteur concerné', otherOption: 'Autre / Tous secteurs' },
      horizon: {
        label: 'Horizon maximum envisagé',
        options: ['3 mois', '6 mois', '12 mois', '24 mois', 'Horizon maximum (à préciser)', 'Pas encore décidé'],
      },
      projectName: { label: 'Nom du projet', placeholder: "Ex : Mini-usine d'huile de palme" },
      location: { label: 'Localisation du projet', placeholder: 'Ex : Lomé, Kara, Atakpamé' },
      stage: {
        label: "État d'avancement",
        options: [
          'Idée / Concept',
          'Étude de faisabilité réalisée',
          'Prototype / MVP',
          'Activité lancée, en croissance',
          'Activité existante à développer',
        ],
      },
      question: {
        label: 'Sujet de votre question',
        placeholder: 'Ex : Renseignement sur le service Lavage Auto',
      },
      message: {
        label: 'Votre message',
        placeholder:
          'Décrivez votre demande, votre projet ou votre question avec autant de détails que possible.',
      },
    },
    form: {
      selectPlaceholder: 'Sélectionner',
      sending: 'Envoi en cours...',
      sentTitle: 'Message envoyé.',
      errorGeneric: "Impossible d'envoyer votre message.",
      errorNetwork: 'Erreur réseau. Réessayez plus tard.',
      disclaimer: "En envoyant ce formulaire, vous acceptez d'être recontacté par TAOMAN GROUP INVESTMENTS.",
      requiredHint: 'Les champs marqués * sont obligatoires.',
      attachmentLabel: 'Documents supplémentaires (PDF)',
      attachmentHint: 'Business plan, étude de faisabilité ou dossier complémentaire (PDF, 10 Mo max).',
    },
    sidebar: {
      eyebrow: 'Nous joindre directement',
      phoneLabel: 'Téléphone',
      emailLabel: 'Email',
      addressLabel: 'Adresse',
      hoursLabel: 'Horaires',
      addressFallback: 'Agoè Cacaveli, en face de Toganim — Lomé, Togo',
      hoursFallback: 'Lun – Dim : 08h – 20h',
      engagementEyebrow: 'Notre engagement',
      engagementTitle: 'Confidentialité et suivi personnalisé',
      engagementDesc:
        "Chaque demande est traitée par un interlocuteur unique. Vos données ne sont jamais transmises à des tiers et sont utilisées uniquement pour répondre à votre demande.",
    },
    cta: {
      eyebrow: 'TAOMAN GROUP INVESTMENTS',
      title:
        'Un groupe togolais multi-activités, des services concrets, des investissements suivis.',
      description:
        "Services opérationnels (Lavage, Déménagement, Entretien, Transport) + Programme d'investissement TGI sur sept domaines (Logistique, Agro, Commerce, BTP, Numérique, Marketing, Éducation financière).",
      btnServices: 'Voir nos services',
      btnTgi: 'Découvrir TGI',
    },
    location: {
      eyebrow: 'Localisation',
      title: 'Où nous trouver',
      hint: 'Agoè Cacaveli, en face de Toganim',
      openMaps: 'Ouvrir dans Google Maps',
      mapTitle: 'Carte — TAOMAN GROUP INVESTMENTS',
    },
    quotePage: {
      title: 'Demander un devis',
      subtitle: 'Service gratuit et sans engagement',
      hubEyebrow: 'Services opérationnels',
      hubTitle: 'Choisissez votre service',
      hubDescription:
        'Accédez au formulaire détaillé du service qui vous intéresse, ou remplissez le formulaire général ci-dessous pour contacter notre équipe.',
      cardsIntro:
        'Chaque service dispose d’un formulaire dédié pour un devis précis. Cliquez sur la carte correspondante.',
      cardsCta: 'Formulaire détaillé',
      formDivider: 'Ou demandez un devis en ligne',
      formDividerDesc:
        'Un formulaire unique pour tous nos services. Notre équipe vous rappelle sous 24 h avec un devis indicatif.',
      successTitle: 'Demande envoyée !',
      successText:
        'Votre demande de devis a bien été soumise. Vous recevrez une réponse par email dans les plus brefs délais.',
      anotherRequest: 'Faire une autre demande',
      submitLabel: 'Envoyer ma demande de devis',
      errorQuote: "Impossible d'envoyer votre demande de devis.",
      services: [
        'Lavage automobile & moto',
        'Déménagement & aménagement',
        'Entretien des bureaux',
        'Transport & livraison',
        'Climatisation & froid',
        'Conciergerie & gardiennage',
        'Audits & Reporting',
        'Autre',
      ],
      form: {
        title: 'Remplissez le formulaire',
        service: { label: 'Service demandé *', placeholder: 'Sélectionnez un service...' },
        name: { label: 'Nom complet *', placeholder: 'Votre nom' },
        email: { label: 'Email *', placeholder: 'votre@email.com' },
        phone: { label: 'Téléphone *', placeholder: '+228 XX XX XX XX' },
        date: { label: 'Date souhaitée' },
        description: { label: 'Description de votre besoin', placeholder: 'Décrivez votre besoin en détail...' },
      },
    },
  },

  EN: {
    intro: {
      eyebrow: '4 dedicated forms',
      title: 'What is your request about?',
      description:
        'Each form is designed to be straightforward and route your request to the right TAOMAN GROUP INVESTMENTS team.',
    },
    breadcrumb: { home: 'Contact' },
    cardSelected: 'Selected',
    cardSelect: 'Choose this form',
    topics: {
      info: {
        badge: 'Information',
        title: 'General information request',
        headline: 'A question about TAOMAN GROUP INVESTMENTS?',
        desc:
          "Want to learn more about the group, its activities, its operational services (car wash, moving, cleaning, transport) or its TGI investment program? Ask us your question and our team will reply within 24 hours.",
        submitLabel: 'Send my question',
        successText: 'Your request has been received. Our team will reply within 24 hours.',
        serviceTag: 'Contact – Information',
      },
      invest: {
        badge: 'Investment',
        title: 'Invest with TAOMAN GROUP INVESTMENTS',
        headline: 'Express an investment interest',
        desc:
          'Looking to allocate capital to projects operated by TAOMAN GROUP INVESTMENTS? Tell us your investor profile, target ticket and the sectors you are interested in. Our team will call you back for a detailed presentation of current opportunities.',
        submitLabel: 'Send my interest',
        successText:
          'Your interest has been recorded. An advisor will contact you within 48 hours.',
        serviceTag: 'Contact – Investment',
      },
      partner: {
        badge: 'Partnership',
        title: 'Become an operational partner',
        headline: 'Build a partnership with TAOMAN GROUP INVESTMENTS',
        desc:
          'Are you a company, cooperative or institution that wants to work with TAOMAN GROUP INVESTMENTS (subcontracting, distribution, supply, support services, joint project)? Send us your proposal and we will explore the possible synergies together.',
        submitLabel: 'Send my proposal',
        successText:
          'Your partnership proposal has been received. Our management studies each file and gets back to you within 5 business days.',
        serviceTag: 'Contact – Partnership',
      },
      project: {
        badge: 'Project to finance',
        title: 'Submit a project for financing',
        headline: 'Present your project to our committee',
        desc:
          'Are you developing a high-potential entrepreneurial project and looking for structured financing? Describe your project, its sector, ticket and horizon. Our investment committee reviews each file and replies with a motivated decision within 5 business days.',
        submitLabel: 'Submit my project',
        successText:
          'Your project has been received. The investment committee will get back to you within 5 business days.',
        serviceTag: 'Contact – Project submission',
      },
    },
    fields: {
      name: { label: 'Your full name', placeholder: 'e.g. Komla Mensah' },
      email: { label: 'Email address', placeholder: 'your@email.com' },
      phone: { label: 'Phone', placeholder: '+228 90 00 00 00' },
      organization: { label: 'Your organization name', placeholder: 'e.g. Mensah & Sons LLC' },
      role: { label: 'Your role', placeholder: 'e.g. Managing Director' },
      sectorOrg: {
        label: "Your organization's business sector",
        placeholder: 'e.g. Distribution, Construction, Logistics...',
      },
      proposalType: {
        label: 'Type of partnership considered',
        options: [
          'Supplier / Subcontractor',
          'Distribution / Reseller',
          'Co-investment in a project',
          'Institutional partnership',
          'Skills exchange',
          'Other',
        ],
      },
      profile: {
        label: 'Your profile',
        options: ['Individual', 'Togolese diaspora', 'Company / SME', 'Family Office', 'Institutional'],
      },
      ticket: {
        label: 'Target ticket',
        options: [
          'Less than 500,000 FCFA',
          '500,000 – 2,000,000 FCFA',
          '2,000,000 – 10,000,000 FCFA',
          '10,000,000 – 50,000,000 FCFA',
          'More than 50,000,000 FCFA',
        ],
      },
      sector: { label: 'Sector of interest', otherOption: 'Other / All sectors' },
      horizon: {
        label: 'Maximum target horizon',
        options: ['3 months', '6 months', '12 months', '24 months', 'Maximum horizon (to specify)', 'Not yet decided'],
      },
      projectName: { label: 'Project name', placeholder: 'e.g. Mini palm oil factory' },
      location: { label: 'Project location', placeholder: 'e.g. Lomé, Kara, Atakpamé' },
      stage: {
        label: 'Project stage',
        options: [
          'Idea / Concept',
          'Feasibility study completed',
          'Prototype / MVP',
          'Activity launched, growing',
          'Existing activity to scale',
        ],
      },
      question: {
        label: 'Subject of your question',
        placeholder: 'e.g. Information about the Car Wash service',
      },
      message: {
        label: 'Your message',
        placeholder: 'Describe your request, project or question in as much detail as possible.',
      },
    },
    form: {
      selectPlaceholder: 'Select',
      sending: 'Sending...',
      sentTitle: 'Message sent.',
      errorGeneric: 'Unable to send your message.',
      errorNetwork: 'Network error. Please try again later.',
      disclaimer: 'By sending this form, you agree to be contacted by TAOMAN GROUP INVESTMENTS.',
      requiredHint: 'Fields marked * are required.',
      attachmentLabel: 'Additional documents (PDF)',
      attachmentHint: 'Business plan, feasibility study or supporting file (PDF, 10 MB max).',
    },
    sidebar: {
      eyebrow: 'Reach us directly',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      addressLabel: 'Address',
      hoursLabel: 'Opening hours',
      addressFallback: 'Agoè Cacaveli, en face de Toganim — Lomé, Togo',
      hoursFallback: 'Mon – Sun: 8 am – 8 pm',
      engagementEyebrow: 'Our commitment',
      engagementTitle: 'Confidentiality and personalised follow-up',
      engagementDesc:
        'Each request is handled by a single contact person. Your data is never shared with third parties and is used only to answer your request.',
    },
    cta: {
      eyebrow: 'TAOMAN GROUP INVESTMENTS',
      title: 'A Togolese multi-business group: real services, monitored investments.',
      description:
        'Operational services (Car wash, Moving, Cleaning, Transport) + TGI investment program covering seven sectors (Logistics, Agribusiness, Trade, Construction, Digital, Marketing, Financial Education).',
      btnServices: 'See our services',
      btnTgi: 'Discover TGI',
    },
    location: {
      eyebrow: 'Location',
      title: 'Find us',
      hint: 'Agoè Cacaveli, en face de Toganim',
      openMaps: 'Open in Google Maps',
      mapTitle: 'Map — TAOMAN GROUP INVESTMENTS',
    },
    quotePage: {
      title: 'Request a quote',
      subtitle: 'Free service with no obligation',
      hubEyebrow: 'Operational services',
      hubTitle: 'Choose your service',
      hubDescription:
        'Open the detailed form for the service you need, or fill in the general form below to contact our team.',
      cardsIntro:
        'Each service has a dedicated form for an accurate quote. Click the matching card.',
      cardsCta: 'Detailed form',
      formDivider: 'Or request a quote online',
      formDividerDesc:
        'One form for all our services. Our team will call you back within 24 hours with an indicative quote.',
      successTitle: 'Request sent!',
      successText:
        'Your quote request has been submitted. You will receive a reply by email as soon as possible.',
      anotherRequest: 'Submit another request',
      submitLabel: 'Send my quote request',
      errorQuote: 'Unable to send your quote request.',
      services: [
        'Car & motorcycle wash',
        'Moving & fit-out',
        'Office cleaning',
        'Transport & delivery',
        'Air conditioning & refrigeration',
        'Concierge & security',
        'Audits & Reporting',
        'Other',
      ],
      form: {
        title: 'Fill in the form',
        service: { label: 'Requested service *', placeholder: 'Select a service...' },
        name: { label: 'Full name *', placeholder: 'Your name' },
        email: { label: 'Email *', placeholder: 'you@email.com' },
        phone: { label: 'Phone *', placeholder: '+228 XX XX XX XX' },
        date: { label: 'Preferred date' },
        description: { label: 'Description of your need', placeholder: 'Describe your need in detail...' },
      },
    },
  },

  ES: {
    intro: {
      eyebrow: '4 formularios dedicados',
      title: '¿Cuál es el objeto de su consulta?',
      description:
        'Cada formulario está diseñado para ir al grano y dirigir su solicitud al equipo TAOMAN GROUP INVESTMENTS adecuado.',
    },
    breadcrumb: { home: 'Contacto' },
    cardSelected: 'Seleccionado',
    cardSelect: 'Elegir este formulario',
    topics: {
      info: {
        badge: 'Información',
        title: 'Solicitud de información general',
        headline: '¿Una pregunta sobre TAOMAN GROUP INVESTMENTS?',
        desc:
          '¿Desea saber más sobre el grupo, sus actividades, sus servicios operativos (lavado, mudanza, mantenimiento, transporte) o su programa de inversión TGI? Háganos su pregunta, nuestro equipo responde en menos de 24 horas.',
        submitLabel: 'Enviar mi pregunta',
        successText: 'Su solicitud ha sido recibida. Nuestro equipo responde en menos de 24 horas.',
        serviceTag: 'Contacto – Información',
      },
      invest: {
        badge: 'Inversión',
        title: 'Invertir con TAOMAN GROUP INVESTMENTS',
        headline: 'Manifestar un interés de inversión',
        desc:
          '¿Desea destinar capital a proyectos operados por TAOMAN GROUP INVESTMENTS? Indique su perfil, el ticket previsto y los sectores que le interesan. Nuestro equipo le llama para una presentación detallada de las oportunidades en curso.',
        submitLabel: 'Enviar mi manifestación',
        successText: 'Su interés ha sido registrado. Un asesor le contactará en menos de 48 horas.',
        serviceTag: 'Contacto – Inversión',
      },
      partner: {
        badge: 'Asociación',
        title: 'Convertirse en socio operativo',
        headline: 'Construir una asociación con TAOMAN GROUP INVESTMENTS',
        desc:
          '¿Representa a una empresa, cooperativa o institución que desea colaborar con TAOMAN GROUP INVESTMENTS (subcontratación, distribución, suministro, servicios de apoyo, proyecto conjunto)? Preséntenos su propuesta y estudiaremos juntos las sinergias posibles.',
        submitLabel: 'Enviar mi propuesta',
        successText:
          'Su propuesta de asociación ha sido recibida. Nuestra dirección estudia cada expediente y responde en 5 días hábiles.',
        serviceTag: 'Contacto – Asociación',
      },
      project: {
        badge: 'Proyecto a financiar',
        title: 'Presentar un proyecto para financiación',
        headline: 'Presente su proyecto a nuestro comité',
        desc:
          '¿Lidera un proyecto empresarial de alto potencial y busca financiación estructurada? Describa su proyecto, sector, ticket y horizonte. Nuestro comité de inversión examina cada expediente y responde con una decisión motivada en 5 días hábiles.',
        submitLabel: 'Presentar mi proyecto',
        successText:
          'Su proyecto ha sido recibido. El comité de inversión le responderá en 5 días hábiles.',
        serviceTag: 'Contacto – Presentación de proyecto',
      },
    },
    fields: {
      name: { label: 'Su nombre completo', placeholder: 'Ej: Komla Mensah' },
      email: { label: 'Correo electrónico', placeholder: 'usted@email.com' },
      phone: { label: 'Teléfono', placeholder: '+228 90 00 00 00' },
      organization: { label: 'Nombre de su organización', placeholder: 'Ej: SARL Mensah & Fils' },
      role: { label: 'Su función', placeholder: 'Ej: Director General' },
      sectorOrg: {
        label: 'Sector de actividad de su organización',
        placeholder: 'Ej: Distribución, Construcción, Logística...',
      },
      proposalType: {
        label: 'Tipo de asociación considerada',
        options: [
          'Proveedor / Subcontratista',
          'Distribución / Reventa',
          'Coinversión en proyecto',
          'Asociación institucional',
          'Intercambio de competencias',
          'Otro',
        ],
      },
      profile: {
        label: 'Su perfil',
        options: ['Particular', 'Diáspora togolesa', 'Empresa / PYME', 'Family Office', 'Institucional'],
      },
      ticket: {
        label: 'Ticket previsto',
        options: [
          'Menos de 500 000 FCFA',
          '500 000 – 2 000 000 FCFA',
          '2 000 000 – 10 000 000 FCFA',
          '10 000 000 – 50 000 000 FCFA',
          'Más de 50 000 000 FCFA',
        ],
      },
      sector: { label: 'Sector de interés', otherOption: 'Otro / Todos los sectores' },
      horizon: {
        label: 'Horizonte previsto',
        options: ['3 meses', '6 meses', '10 meses', 'Más de 10 meses', 'Aún por decidir'],
      },
      projectName: { label: 'Nombre del proyecto', placeholder: 'Ej: Mini fábrica de aceite de palma' },
      location: { label: 'Ubicación del proyecto', placeholder: 'Ej: Lomé, Kara, Atakpamé' },
      stage: {
        label: 'Estado de avance',
        options: [
          'Idea / Concepto',
          'Estudio de viabilidad realizado',
          'Prototipo / MVP',
          'Actividad lanzada, en crecimiento',
          'Actividad existente a desarrollar',
        ],
      },
      question: {
        label: 'Asunto de su pregunta',
        placeholder: 'Ej: Información sobre el servicio de Lavado Auto',
      },
      message: {
        label: 'Su mensaje',
        placeholder: 'Describa su solicitud, proyecto o pregunta con el mayor detalle posible.',
      },
    },
    form: {
      selectPlaceholder: 'Seleccionar',
      sending: 'Enviando...',
      sentTitle: 'Mensaje enviado.',
      errorGeneric: 'No se pudo enviar su mensaje.',
      errorNetwork: 'Error de red. Inténtelo de nuevo más tarde.',
      disclaimer: 'Al enviar este formulario, acepta ser contactado por TAOMAN GROUP INVESTMENTS.',
      requiredHint: 'Los campos marcados con * son obligatorios.',
    },
    sidebar: {
      eyebrow: 'Contáctenos directamente',
      phoneLabel: 'Teléfono',
      emailLabel: 'Correo electrónico',
      addressLabel: 'Dirección',
      hoursLabel: 'Horario',
      addressFallback: 'Agoè Cacaveli, en face de Toganim — Lomé, Togo',
      hoursFallback: 'Lun – Dom: 08:00 – 20:00',
      engagementEyebrow: 'Nuestro compromiso',
      engagementTitle: 'Confidencialidad y seguimiento personalizado',
      engagementDesc:
        'Cada solicitud es tratada por un interlocutor único. Sus datos nunca se transmiten a terceros y se utilizan exclusivamente para responder a su solicitud.',
    },
    cta: {
      eyebrow: 'TAOMAN GROUP INVESTMENTS',
      title:
        'Un grupo togolés multiactividad: servicios concretos, inversiones supervisadas.',
      description:
        'Servicios operativos (Lavado, Mudanza, Mantenimiento, Transporte) + Programa de inversión TGI en siete sectores (Logística, Agronegocio, Comercio, Construcción, Digital, Marketing, Educación financiera).',
      btnServices: 'Ver nuestros servicios',
      btnTgi: 'Descubrir TGI',
    },
  },

  PT: {
    intro: {
      eyebrow: '4 formulários dedicados',
      title: 'Qual é o objeto do seu pedido?',
      description:
        'Cada formulário foi pensado para ser direto e encaminhar o seu pedido para a equipa TAOMAN GROUP INVESTMENTS adequada.',
    },
    breadcrumb: { home: 'Contacto' },
    cardSelected: 'Selecionado',
    cardSelect: 'Escolher este formulário',
    topics: {
      info: {
        badge: 'Informação',
        title: 'Pedido de informação geral',
        headline: 'Uma pergunta sobre o TAOMAN GROUP INVESTMENTS?',
        desc:
          'Quer saber mais sobre o grupo, as suas atividades, os seus serviços operacionais (lavagem, mudanças, manutenção, transporte) ou o programa de investimento TGI? Coloque-nos a sua pergunta, a nossa equipa responde em 24 horas.',
        submitLabel: 'Enviar a minha pergunta',
        successText: 'O seu pedido foi recebido. A nossa equipa responde em 24 horas.',
        serviceTag: 'Contacto – Informação',
      },
      invest: {
        badge: 'Investimento',
        title: 'Investir com a TAOMAN GROUP INVESTMENTS',
        headline: 'Manifestar interesse de investimento',
        desc:
          'Deseja alocar capital a projetos operados pela TAOMAN GROUP INVESTMENTS? Indique o seu perfil, o ticket previsto e o(s) setor(es) que o interessam. A nossa equipa entrará em contacto para uma apresentação detalhada das oportunidades em curso.',
        submitLabel: 'Enviar a minha manifestação',
        successText: 'O seu interesse foi registado. Um consultor irá contactá-lo em 48 horas.',
        serviceTag: 'Contacto – Investimento',
      },
      partner: {
        badge: 'Parceria',
        title: 'Tornar-se parceiro operacional',
        headline: 'Construir uma parceria com a TAOMAN GROUP INVESTMENTS',
        desc:
          'Representa uma empresa, cooperativa ou instituição que pretende colaborar com a TAOMAN GROUP INVESTMENTS (subcontratação, distribuição, fornecimento, serviços de apoio, projeto conjunto)? Apresente-nos a sua proposta e analisaremos juntos as sinergias possíveis.',
        submitLabel: 'Enviar a minha proposta',
        successText:
          'A sua proposta de parceria foi recebida. A nossa direção estuda cada dossier e responde em 5 dias úteis.',
        serviceTag: 'Contacto – Parceria',
      },
      project: {
        badge: 'Projeto a financiar',
        title: 'Submeter um projeto para financiamento',
        headline: 'Apresente o seu projeto ao nosso comité',
        desc:
          'Tem um projeto empresarial de elevado potencial e procura financiamento estruturado? Descreva o seu projeto, setor, ticket e horizonte. O nosso comité de investimento analisa cada dossier e responde com uma decisão fundamentada em 5 dias úteis.',
        submitLabel: 'Submeter o meu projeto',
        successText:
          'O seu projeto foi recebido. O comité de investimento responde em 5 dias úteis.',
        serviceTag: 'Contacto – Submissão de projeto',
      },
    },
    fields: {
      name: { label: 'O seu nome completo', placeholder: 'Ex: Komla Mensah' },
      email: { label: 'Email', placeholder: 'seu@email.com' },
      phone: { label: 'Telefone', placeholder: '+228 90 00 00 00' },
      organization: { label: 'Nome da sua organização', placeholder: 'Ex: SARL Mensah & Fils' },
      role: { label: 'A sua função', placeholder: 'Ex: Diretor Geral' },
      sectorOrg: {
        label: 'Setor de atividade da sua organização',
        placeholder: 'Ex: Distribuição, Construção, Logística...',
      },
      proposalType: {
        label: 'Tipo de parceria considerada',
        options: [
          'Fornecedor / Subcontratado',
          'Distribuição / Revenda',
          'Coinvestimento em projeto',
          'Parceria institucional',
          'Troca de competências',
          'Outro',
        ],
      },
      profile: {
        label: 'O seu perfil',
        options: ['Particular', 'Diáspora togolesa', 'Empresa / PME', 'Family Office', 'Institucional'],
      },
      ticket: {
        label: 'Ticket previsto',
        options: [
          'Menos de 500 000 FCFA',
          '500 000 – 2 000 000 FCFA',
          '2 000 000 – 10 000 000 FCFA',
          '10 000 000 – 50 000 000 FCFA',
          'Mais de 50 000 000 FCFA',
        ],
      },
      sector: { label: 'Setor de interesse', otherOption: 'Outro / Todos os setores' },
      horizon: {
        label: 'Horizonte previsto',
        options: ['3 meses', '6 meses', '10 meses', 'Mais de 10 meses', 'Ainda por decidir'],
      },
      projectName: { label: 'Nome do projeto', placeholder: 'Ex: Mini fábrica de óleo de palma' },
      location: { label: 'Localização do projeto', placeholder: 'Ex: Lomé, Kara, Atakpamé' },
      stage: {
        label: 'Estado de avanço',
        options: [
          'Ideia / Conceito',
          'Estudo de viabilidade realizado',
          'Protótipo / MVP',
          'Atividade lançada, em crescimento',
          'Atividade existente a desenvolver',
        ],
      },
      question: {
        label: 'Assunto da sua pergunta',
        placeholder: 'Ex: Informação sobre o serviço de Lavagem Auto',
      },
      message: {
        label: 'A sua mensagem',
        placeholder: 'Descreva o seu pedido, projeto ou pergunta com o máximo de detalhe possível.',
      },
    },
    form: {
      selectPlaceholder: 'Selecionar',
      sending: 'A enviar...',
      sentTitle: 'Mensagem enviada.',
      errorGeneric: 'Não foi possível enviar a sua mensagem.',
      errorNetwork: 'Erro de rede. Tente novamente mais tarde.',
      disclaimer: 'Ao enviar este formulário, aceita ser contactado pela TAOMAN GROUP INVESTMENTS.',
      requiredHint: 'Os campos marcados com * são obrigatórios.',
    },
    sidebar: {
      eyebrow: 'Contacte-nos diretamente',
      phoneLabel: 'Telefone',
      emailLabel: 'Email',
      addressLabel: 'Endereço',
      hoursLabel: 'Horário',
      addressFallback: 'Agoè Cacaveli, en face de Toganim — Lomé, Togo',
      hoursFallback: 'Seg – Dom: 08h – 20h',
      engagementEyebrow: 'O nosso compromisso',
      engagementTitle: 'Confidencialidade e acompanhamento personalizado',
      engagementDesc:
        'Cada pedido é tratado por um único interlocutor. Os seus dados nunca são transmitidos a terceiros e são utilizados exclusivamente para responder ao seu pedido.',
    },
    cta: {
      eyebrow: 'TAOMAN GROUP INVESTMENTS',
      title:
        'Um grupo togolês multiatividades: serviços concretos, investimentos acompanhados.',
      description:
        'Serviços operacionais (Lavagem, Mudanças, Manutenção, Transporte) + Programa de investimento TGI em sete setores (Logística, Agronegócio, Comércio, Construção, Digital, Marketing, Educação financeira).',
      btnServices: 'Ver os nossos serviços',
      btnTgi: 'Descobrir o TGI',
    },
  },

  DE: {
    intro: {
      eyebrow: '4 dedizierte Formulare',
      title: 'Worum geht es bei Ihrer Anfrage?',
      description:
        'Jedes Formular leitet Ihre Anfrage gezielt an das richtige TAOMAN GROUP INVESTMENTS-Team weiter.',
    },
    breadcrumb: { home: 'Kontakt' },
    cardSelected: 'Ausgewählt',
    cardSelect: 'Dieses Formular wählen',
    topics: {
      info: {
        badge: 'Information',
        title: 'Allgemeine Informationsanfrage',
        headline: 'Eine Frage zu TAOMAN GROUP INVESTMENTS?',
        desc:
          'Sie möchten mehr über die Gruppe, ihre Aktivitäten, ihre operativen Dienstleistungen (Autowäsche, Umzüge, Reinigung, Transport) oder ihr TGI-Investitionsprogramm erfahren? Stellen Sie uns Ihre Frage – unser Team antwortet innerhalb von 24 Stunden.',
        submitLabel: 'Frage senden',
        successText: 'Ihre Anfrage wurde empfangen. Unser Team antwortet innerhalb von 24 Stunden.',
        serviceTag: 'Kontakt – Information',
      },
      invest: {
        badge: 'Investition',
        title: 'Mit TAOMAN GROUP INVESTMENTS investieren',
        headline: 'Investitionsinteresse bekunden',
        desc:
          'Möchten Sie Kapital in Projekte von TAOMAN GROUP INVESTMENTS investieren? Teilen Sie uns Ihr Profil, das vorgesehene Ticket und die Sektoren mit, die Sie interessieren. Unser Team meldet sich für eine detaillierte Vorstellung der aktuellen Chancen.',
        submitLabel: 'Interesse senden',
        successText: 'Ihr Interesse wurde registriert. Ein Berater kontaktiert Sie innerhalb von 48 Stunden.',
        serviceTag: 'Kontakt – Investition',
      },
      partner: {
        badge: 'Partnerschaft',
        title: 'Operativer Partner werden',
        headline: 'Partnerschaft mit TAOMAN GROUP INVESTMENTS aufbauen',
        desc:
          'Sie vertreten ein Unternehmen, eine Genossenschaft oder eine Institution, die mit TAOMAN GROUP INVESTMENTS zusammenarbeiten möchte (Unterauftrag, Vertrieb, Lieferung, Support-Services, gemeinsames Projekt)? Stellen Sie uns Ihren Vorschlag vor – wir prüfen gemeinsam mögliche Synergien.',
        submitLabel: 'Vorschlag senden',
        successText:
          'Ihr Partnerschaftsvorschlag wurde empfangen. Unsere Geschäftsleitung prüft jede Akte und antwortet innerhalb von 5 Werktagen.',
        serviceTag: 'Kontakt – Partnerschaft',
      },
      project: {
        badge: 'Zu finanzierendes Projekt',
        title: 'Projekt zur Finanzierung einreichen',
        headline: 'Präsentieren Sie Ihr Projekt unserem Komitee',
        desc:
          'Sie tragen ein unternehmerisches Projekt mit hohem Potenzial und suchen strukturierte Finanzierung? Beschreiben Sie Ihr Projekt, den Sektor, das Ticket und den Horizont. Unser Investitionskomitee prüft jede Akte und antwortet mit einer begründeten Entscheidung innerhalb von 5 Werktagen.',
        submitLabel: 'Projekt einreichen',
        successText:
          'Ihr Projekt wurde empfangen. Das Investitionskomitee antwortet innerhalb von 5 Werktagen.',
        serviceTag: 'Kontakt – Projekteinreichung',
      },
    },
    fields: {
      name: { label: 'Ihr vollständiger Name', placeholder: 'z. B. Komla Mensah' },
      email: { label: 'E-Mail-Adresse', placeholder: 'sie@email.com' },
      phone: { label: 'Telefon', placeholder: '+228 90 00 00 00' },
      organization: { label: 'Name Ihrer Organisation', placeholder: 'z. B. SARL Mensah & Fils' },
      role: { label: 'Ihre Funktion', placeholder: 'z. B. Geschäftsführer' },
      sectorOrg: {
        label: 'Tätigkeitsbereich Ihrer Organisation',
        placeholder: 'z. B. Vertrieb, Bau, Logistik...',
      },
      proposalType: {
        label: 'Geplante Partnerschaftsart',
        options: [
          'Lieferant / Subunternehmer',
          'Vertrieb / Wiederverkauf',
          'Co-Investment in ein Projekt',
          'Institutionelle Partnerschaft',
          'Kompetenzaustausch',
          'Sonstiges',
        ],
      },
      profile: {
        label: 'Ihr Profil',
        options: ['Privatperson', 'Togoische Diaspora', 'Unternehmen / KMU', 'Family Office', 'Institutionell'],
      },
      ticket: {
        label: 'Geplantes Ticket',
        options: [
          'Weniger als 500 000 FCFA',
          '500 000 – 2 000 000 FCFA',
          '2 000 000 – 10 000 000 FCFA',
          '10 000 000 – 50 000 000 FCFA',
          'Mehr als 50 000 000 FCFA',
        ],
      },
      sector: { label: 'Sektor von Interesse', otherOption: 'Sonstiges / Alle Sektoren' },
      horizon: {
        label: 'Geplanter Horizont',
        options: ['3 Monate', '6 Monate', '10 Monate', 'Mehr als 10 Monate', 'Noch nicht entschieden'],
      },
      projectName: { label: 'Projektname', placeholder: 'z. B. Mini-Palmölfabrik' },
      location: { label: 'Projektstandort', placeholder: 'z. B. Lomé, Kara, Atakpamé' },
      stage: {
        label: 'Projektstatus',
        options: [
          'Idee / Konzept',
          'Machbarkeitsstudie abgeschlossen',
          'Prototyp / MVP',
          'Aktivität gestartet, im Wachstum',
          'Bestehende Aktivität, ausbaubar',
        ],
      },
      question: {
        label: 'Betreff Ihrer Frage',
        placeholder: 'z. B. Information zum Autowasch-Service',
      },
      message: {
        label: 'Ihre Nachricht',
        placeholder: 'Beschreiben Sie Ihre Anfrage, Ihr Projekt oder Ihre Frage so detailliert wie möglich.',
      },
    },
    form: {
      selectPlaceholder: 'Auswählen',
      sending: 'Wird gesendet...',
      sentTitle: 'Nachricht gesendet.',
      errorGeneric: 'Ihre Nachricht konnte nicht gesendet werden.',
      errorNetwork: 'Netzwerkfehler. Bitte später erneut versuchen.',
      disclaimer: 'Mit dem Absenden dieses Formulars erklären Sie sich damit einverstanden, von TAOMAN GROUP INVESTMENTS kontaktiert zu werden.',
      requiredHint: 'Mit * gekennzeichnete Felder sind Pflichtfelder.',
    },
    sidebar: {
      eyebrow: 'Direkt kontaktieren',
      phoneLabel: 'Telefon',
      emailLabel: 'E-Mail',
      addressLabel: 'Adresse',
      hoursLabel: 'Öffnungszeiten',
      addressFallback: 'Agoè Cacaveli, en face de Toganim — Lomé, Togo',
      hoursFallback: 'Mo – So: 08:00 – 20:00 Uhr',
      engagementEyebrow: 'Unser Engagement',
      engagementTitle: 'Vertraulichkeit und persönliche Betreuung',
      engagementDesc:
        'Jede Anfrage wird von einem festen Ansprechpartner bearbeitet. Ihre Daten werden niemals an Dritte weitergegeben und ausschließlich zur Beantwortung Ihrer Anfrage verwendet.',
    },
    cta: {
      eyebrow: 'TAOMAN GROUP INVESTMENTS',
      title:
        'Eine togoische Multi-Business-Gruppe: konkrete Dienstleistungen, überwachte Investitionen.',
      description:
        'Operative Services (Autowäsche, Umzüge, Reinigung, Transport) + TGI-Investitionsprogramm in sieben Sektoren (Logistik, Agrobusiness, Handel, Bau, Digital, Marketing, Finanzbildung).',
      btnServices: 'Unsere Services',
      btnTgi: 'TGI entdecken',
    },
  },

  AR: {
    intro: {
      eyebrow: '٤ نماذج مخصصة',
      title: 'ما هو موضوع طلبك؟',
      description: 'كل نموذج مصمم ليكون مباشراً وموجهاً طلبك إلى الفريق المختص في TAOMAN GROUP INVESTMENTS.',
    },
    breadcrumb: { home: 'اتصال' },
    cardSelected: 'تم الاختيار',
    cardSelect: 'اختر هذا النموذج',
    topics: {
      info: {
        badge: 'معلومات',
        title: 'طلب معلومات عامة',
        headline: 'سؤال حول TAOMAN GROUP INVESTMENTS؟',
        desc:
          'هل ترغب في معرفة المزيد عن المجموعة وأنشطتها وخدماتها التشغيلية (غسيل السيارات، النقل، الصيانة، النقل) أو برنامج الاستثمار TGI؟ اطرح سؤالك وسيرد فريقنا خلال 24 ساعة.',
        submitLabel: 'إرسال سؤالي',
        successText: 'تم استلام طلبك. سيرد فريقنا خلال 24 ساعة.',
        serviceTag: 'اتصال – معلومات',
      },
      invest: {
        badge: 'استثمار',
        title: 'استثمر مع TAOMAN GROUP INVESTMENTS',
        headline: 'الإعراب عن اهتمام بالاستثمار',
        desc:
          'هل ترغب في تخصيص رأس مال لمشاريع تديرها TAOMAN GROUP INVESTMENTS؟ أخبرنا بملفك الشخصي والمبلغ المتوقع والقطاعات التي تهمك. سيتصل بك فريقنا لتقديم مفصل للفرص الجارية.',
        submitLabel: 'إرسال اهتمامي',
        successText: 'تم تسجيل اهتمامك. سيتواصل معك مستشار خلال 48 ساعة.',
        serviceTag: 'اتصال – استثمار',
      },
      partner: {
        badge: 'شراكة',
        title: 'أصبح شريكاً تشغيلياً',
        headline: 'بناء شراكة مع TAOMAN GROUP INVESTMENTS',
        desc:
          'هل تمثل شركة أو تعاونية أو مؤسسة ترغب في التعاون مع TAOMAN GROUP INVESTMENTS (التعاقد من الباطن، التوزيع، التوريد، خدمات الدعم، مشروع مشترك)؟ قدّم لنا اقتراحك وسندرس معاً التآزرات الممكنة.',
        submitLabel: 'إرسال اقتراحي',
        successText: 'تم استلام اقتراح الشراكة. تدرس إدارتنا كل ملف وترد خلال 5 أيام عمل.',
        serviceTag: 'اتصال – شراكة',
      },
      project: {
        badge: 'مشروع للتمويل',
        title: 'تقديم مشروع للتمويل',
        headline: 'قدّم مشروعك إلى لجنتنا',
        desc:
          'هل تقود مشروعاً ريادياً واعداً وتبحث عن تمويل منظم؟ صف مشروعك وقطاعه ومبلغه وأفقه. تدرس لجنة الاستثمار لدينا كل ملف وترد بقرار مدعّم خلال 5 أيام عمل.',
        submitLabel: 'تقديم مشروعي',
        successText: 'تم استلام مشروعك. سترد لجنة الاستثمار خلال 5 أيام عمل.',
        serviceTag: 'اتصال – تقديم مشروع',
      },
    },
    fields: {
      name: { label: 'اسمك الكامل', placeholder: 'مثال: كوملا منساه' },
      email: { label: 'البريد الإلكتروني', placeholder: 'your@email.com' },
      phone: { label: 'الهاتف', placeholder: '+228 90 00 00 00' },
      organization: { label: 'اسم مؤسستك', placeholder: 'مثال: SARL Mensah & Fils' },
      role: { label: 'وظيفتك', placeholder: 'مثال: المدير العام' },
      sectorOrg: {
        label: 'قطاع نشاط مؤسستك',
        placeholder: 'مثال: التوزيع، البناء، اللوجستيات...',
      },
      proposalType: {
        label: 'نوع الشراكة المقترحة',
        options: [
          'مورّد / مقاول من الباطن',
          'توزيع / إعادة بيع',
          'استثمار مشترك في مشروع',
          'شراكة مؤسسية',
          'تبادل كفاءات',
          'أخرى',
        ],
      },
      profile: {
        label: 'ملفك الشخصي',
        options: ['فرد', 'جالية توغولية', 'شركة / مؤسسة صغيرة', 'مكتب عائلي', 'مؤسساتي'],
      },
      ticket: {
        label: 'المبلغ المتوقع',
        options: [
          'أقل من 500 000 فرنك',
          '500 000 – 2 000 000 فرنك',
          '2 000 000 – 10 000 000 فرنك',
          '10 000 000 – 50 000 000 فرنك',
          'أكثر من 50 000 000 فرنك',
        ],
      },
      sector: { label: 'القطاع المعني', otherOption: 'أخرى / جميع القطاعات' },
      horizon: {
        label: 'الأفق المتوقع',
        options: ['3 أشهر', '6 أشهر', '10 أشهر', 'أكثر من 10 أشهر', 'لم أقرر بعد'],
      },
      projectName: { label: 'اسم المشروع', placeholder: 'مثال: مصنع صغير لزيت النخيل' },
      location: { label: 'موقع المشروع', placeholder: 'مثال: لومي، كارا، أتاكبامي' },
      stage: {
        label: 'مرحلة التقدم',
        options: [
          'فكرة / مفهوم',
          'دراسة جدوى منجزة',
          'نموذج أولي / MVP',
          'نشاط منطلق، في نمو',
          'نشاط قائم للتطوير',
        ],
      },
      question: {
        label: 'موضوع سؤالك',
        placeholder: 'مثال: معلومات حول خدمة غسيل السيارات',
      },
      message: {
        label: 'رسالتك',
        placeholder: 'صف طلبك أو مشروعك أو سؤالك بأكبر قدر من التفاصيل.',
      },
    },
    form: {
      selectPlaceholder: 'اختر',
      sending: 'جارٍ الإرسال...',
      sentTitle: 'تم إرسال الرسالة.',
      errorGeneric: 'تعذّر إرسال رسالتك.',
      errorNetwork: 'خطأ في الشبكة. حاول مرة أخرى لاحقاً.',
      disclaimer: 'بإرسال هذا النموذج، فإنك توافق على أن تتصل بك TAOMAN GROUP INVESTMENTS.',
      requiredHint: 'الحقول المعلّمة بـ * إلزامية.',
    },
    sidebar: {
      eyebrow: 'تواصل معنا مباشرة',
      phoneLabel: 'الهاتف',
      emailLabel: 'البريد الإلكتروني',
      addressLabel: 'العنوان',
      hoursLabel: 'ساعات العمل',
      addressFallback: 'Agoè Cacaveli، أمام Toganim — لومي، توغو',
      hoursFallback: 'الإثنين – الأحد: 08:00 – 20:00',
      engagementEyebrow: 'التزامنا',
      engagementTitle: 'سرية ومتابعة شخصية',
      engagementDesc:
        'يعالَج كل طلب من قبل محاور وحيد. لا تُنقل بياناتك إلى أطراف ثالثة وتُستخدم فقط للرد على طلبك.',
    },
    cta: {
      eyebrow: 'TAOMAN GROUP INVESTMENTS',
      title: 'مجموعة توغولية متعددة الأنشطة: خدمات ملموسة، استثمارات متابعة.',
      description:
        'خدمات تشغيلية (غسيل السيارات، النقل، الصيانة، النقل) + برنامج استثمار TGI في سبعة قطاعات (لوجستيات، أعمال زراعية، تجارة، بناء، رقمي، تسويق، تعليم مالي).',
      btnServices: 'مشاهدة خدماتنا',
      btnTgi: 'اكتشف TGI',
    },
  },

  ZH: {
    intro: {
      eyebrow: '4 个专属表单',
      title: '您的咨询主题是什么？',
      description: '每个表单都旨在直击要点，将您的请求转发至 TAOMAN GROUP INVESTMENTS 相应的团队。',
    },
    breadcrumb: { home: '联系' },
    cardSelected: '已选择',
    cardSelect: '选择此表单',
    topics: {
      info: {
        badge: '信息',
        title: '一般信息咨询',
        headline: '关于 TAOMAN GROUP INVESTMENTS 的问题？',
        desc:
          '您想了解集团及其业务、运营服务（洗车、搬家、维护、运输）或 TGI 投资计划吗？提出您的问题，我们的团队将在 24 小时内回复。',
        submitLabel: '发送我的问题',
        successText: '您的请求已收到。我们的团队将在 24 小时内回复。',
        serviceTag: '联系 – 信息',
      },
      invest: {
        badge: '投资',
        title: '与 TAOMAN GROUP INVESTMENTS 一起投资',
        headline: '表达投资意向',
        desc:
          '您希望将资金配置到 TAOMAN GROUP INVESTMENTS 运营的项目吗？请告诉我们您的投资者类型、计划金额和感兴趣的行业。我们的团队将与您联系，详细介绍当前的机会。',
        submitLabel: '发送我的意向',
        successText: '您的意向已登记。顾问将在 48 小时内与您联系。',
        serviceTag: '联系 – 投资',
      },
      partner: {
        badge: '合作',
        title: '成为运营合作伙伴',
        headline: '与 TAOMAN GROUP INVESTMENTS 建立合作关系',
        desc:
          '您代表的公司、合作社或机构希望与 TAOMAN GROUP INVESTMENTS 合作（分包、分销、供应、支持服务、联合项目）吗？请向我们提交您的方案，我们将共同探索可能的协同效应。',
        submitLabel: '发送我的提案',
        successText: '您的合作提案已收到。我们的管理层将逐一研究每份文件并在 5 个工作日内回复。',
        serviceTag: '联系 – 合作',
      },
      project: {
        badge: '待融资项目',
        title: '提交融资项目',
        headline: '向我们的委员会展示您的项目',
        desc:
          '您正推进一个高潜力创业项目并寻求结构化融资？请描述您的项目、行业、金额和时间范围。我们的投资委员会将审查每份文件并在 5 个工作日内给出有理有据的决定。',
        submitLabel: '提交我的项目',
        successText: '您的项目已收到。投资委员会将在 5 个工作日内回复您。',
        serviceTag: '联系 – 项目提交',
      },
    },
    fields: {
      name: { label: '您的全名', placeholder: '例：Komla Mensah' },
      email: { label: '电子邮箱', placeholder: 'you@email.com' },
      phone: { label: '电话', placeholder: '+228 90 00 00 00' },
      organization: { label: '您的机构名称', placeholder: '例：SARL Mensah & Fils' },
      role: { label: '您的职位', placeholder: '例：总经理' },
      sectorOrg: {
        label: '您机构的业务领域',
        placeholder: '例：分销、建筑、物流……',
      },
      proposalType: {
        label: '考虑的合作类型',
        options: ['供应商 / 分包商', '分销 / 经销', '项目联合投资', '机构合作', '技能交换', '其他'],
      },
      profile: {
        label: '您的类型',
        options: ['个人', '多哥侨民', '公司 / 中小企业', '家族办公室', '机构投资者'],
      },
      ticket: {
        label: '计划金额',
        options: [
          '少于 500,000 FCFA',
          '500,000 – 2,000,000 FCFA',
          '2,000,000 – 10,000,000 FCFA',
          '10,000,000 – 50,000,000 FCFA',
          '超过 50,000,000 FCFA',
        ],
      },
      sector: { label: '感兴趣的行业', otherOption: '其他 / 所有行业' },
      horizon: {
        label: '计划时间范围',
        options: ['3 个月', '6 个月', '10 个月', '超过 10 个月', '尚未决定'],
      },
      projectName: { label: '项目名称', placeholder: '例：小型棕榈油工厂' },
      location: { label: '项目地点', placeholder: '例：洛美、卡拉、阿塔克帕梅' },
      stage: {
        label: '项目阶段',
        options: ['创意 / 概念', '可行性研究已完成', '原型 / MVP', '已启动并增长中', '现有业务待扩展'],
      },
      question: {
        label: '问题主题',
        placeholder: '例：关于洗车服务的咨询',
      },
      message: {
        label: '您的留言',
        placeholder: '请尽可能详细地描述您的请求、项目或问题。',
      },
    },
    form: {
      selectPlaceholder: '选择',
      sending: '发送中…',
      sentTitle: '消息已发送。',
      errorGeneric: '无法发送您的消息。',
      errorNetwork: '网络错误。请稍后再试。',
      disclaimer: '提交此表单即表示您同意 TAOMAN GROUP INVESTMENTS 与您联系。',
      requiredHint: '标有 * 的字段为必填项。',
    },
    sidebar: {
      eyebrow: '直接联系我们',
      phoneLabel: '电话',
      emailLabel: '电子邮箱',
      addressLabel: '地址',
      hoursLabel: '营业时间',
      addressFallback: '阿戈埃卡扎韦利，Toganim对面 — 洛美，多哥',
      hoursFallback: '周一至周日：08:00 – 20:00',
      engagementEyebrow: '我们的承诺',
      engagementTitle: '保密性和个性化跟进',
      engagementDesc:
        '每个请求都由专属联系人处理。您的数据绝不会传递给第三方，仅用于回应您的请求。',
    },
    cta: {
      eyebrow: 'TAOMAN GROUP INVESTMENTS',
      title: '一家多业务的多哥集团：实在的服务、可追踪的投资。',
      description:
        '运营服务（洗车、搬家、维护、运输）+ 覆盖 7 个行业的 TGI 投资计划（物流、农业、商业、建筑、数字化、营销、金融教育）。',
      btnServices: '查看我们的服务',
      btnTgi: '了解 TGI',
    },
  },
};

export const getContactTranslations = (language) => {
  const pack = CONTACT[language] || CONTACT.FR;
  const en = CONTACT.EN || {};
  return {
    ...pack,
    location: pack.location || en.location || CONTACT.FR.location,
    form: pack.form || en.form || CONTACT.FR.form,
    quotePage: pack.quotePage || en.quotePage || CONTACT.FR.quotePage,
  };
};

export default CONTACT;
