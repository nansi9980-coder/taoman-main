/**
 * Traductions complètes de la page DemenagementDevisPage pour les 7 langues du site.
 * Utilisé via getDevisMovingTranslations(language).
 */

const DEVIS_MOVING = {
  FR: {
    intro: {
      eyebrow: 'Le service en quelques mots',
      title:
        'Déménager au Togo, sereinement : une logistique cadrée, des équipes formées, des biens protégés.',
      paragraphs: [
        "TAOMAN GROUP INVESTMENTS organise vos déménagements particuliers, d'entreprise et transferts spécialisés avec visite technique gratuite et devis détaillé.",
        'Emballage, transport sécurisé et remontage : Lomé, villes intérieures et sous-région CEDEAO.',
      ],
    },
    types: {
      eyebrow: 'Nos prestations',
      title: 'Quatre types de déménagement, une seule exigence : zéro casse',
      description:
        'Particuliers, entreprises ou transferts spécialisés : une équipe et une méthode adaptées.',
      items: [
        {
          id: 'particulier',
          title: 'Déménagement de particuliers',
          desc: "Studios, F2, F3, F4, villas : nous prenons en charge l'emballage, le démontage du mobilier, le chargement, le transport, le déchargement, le remontage et le rangement dans le nouveau logement.",
          pts: [
            'Visite technique gratuite à domicile',
            'Cartons, papier bulle, couvertures fournis',
            'Démontage et remontage des meubles',
            "Aide à l'aménagement à l'arrivée",
          ],
        },
        {
          id: 'entreprise',
          title: "Déménagement d'entreprises",
          desc: "Bureaux, salles de réunion, archives, serveurs informatiques : nous planifions en dehors des heures ouvrées pour minimiser l'interruption de votre activité. Coordination directe avec votre responsable moyens généraux.",
          pts: [
            'Planning détaillé livré une semaine avant',
            'Étiquetage et numérotation systématique',
            'Manipulation sécurisée du matériel IT',
            "Reporting d'avancement à chaque étape",
          ],
        },
        {
          id: 'transfert',
          title: 'Transferts spécialisés',
          desc: "Administrations publiques, ambassades, ONG, projets industriels : nous avons l'expérience des règles spécifiques (inventaires, signatures, scellés, autorisations douanières, sécurité renforcée).",
          pts: [
            "Procédures d'inventaire conformes",
            'Équipes habilitées et briefées',
            'Documentation photo et signature',
            'Coordination avec votre logisticien interne',
          ],
        },
        {
          id: 'manutention',
          title: 'Manutention spécialisée',
          desc: "Coffres-forts, équipements industriels, pianos, œuvres d'art, mobilier de luxe : la manutention d'objets lourds, fragiles ou de grande valeur demande un matériel spécifique (transpalettes, sangles, monte-meubles) et des opérateurs expérimentés.",
          pts: [
            'Études de cas et plans de levage',
            'Matériel adapté (transpalette, monte-charge)',
            'Assurance complémentaire pour objets de valeur',
            'Couvertures et caissons sur mesure',
          ],
        },
      ],
    },
    process: {
      eyebrow: 'Notre processus',
      title: 'Sept étapes claires, du devis au verre du salon remis à sa place',
      description:
        'Sept étapes claires, de la demande au rangement final.',
      steps: [
        {
          num: '01',
          title: 'Demande et devis indicatif',
          desc: "Vous remplissez le formulaire ou nous appelez. Nous fixons un rendez-vous d'évaluation. Pour les petits déménagements, un devis indicatif peut être émis par téléphone.",
        },
        {
          num: '02',
          title: 'Visite technique et devis ferme',
          desc: "Notre chef d'équipe vient sur place, mesure les volumes, identifie les contraintes (escaliers, ascenseur, parking, objets spéciaux) et émet un devis ferme et détaillé.",
        },
        {
          num: '03',
          title: 'Validation et préparation',
          desc: 'Vous validez le devis. Nous vous livrons les cartons, le papier bulle et les couvertures. Un planning précis (heure de départ, équipes mobilisées, ordre de chargement) vous est communiqué.',
        },
        {
          num: '04',
          title: 'Emballage',
          desc: "L'équipe emballe et étiquette les biens fragiles, démonte les meubles complexes et protège le mobilier avec des couvertures spécialisées. Chaque carton est numéroté.",
        },
        {
          num: '05',
          title: 'Chargement et transport',
          desc: 'Chargement méthodique du camion par catégorie (cartons puis meubles puis fragiles). Transport sécurisé avec arrimage. Suivi GPS sur les longs trajets.',
        },
        {
          num: '06',
          title: 'Déchargement et remontage',
          desc: 'Déchargement piloté par notre responsable. Remontage des meubles et installation dans les pièces selon votre plan. Évacuation des emballages.',
        },
        {
          num: '07',
          title: 'Contrôle final et signature',
          desc: 'Visite finale ensemble pour valider que tout est en place. Signature du procès-verbal de réception. Reporting photo si demandé.',
        },
      ],
    },
    fleet: {
      eyebrow: 'Notre flotte',
      title: 'Des véhicules adaptés à chaque volume, à chaque type de bien',
      description:
        'Notre flotte est entretenue régulièrement par nos équipes techniques. Tous les véhicules sont contrôlés avant chaque déménagement (freins, pneus, attaches, propreté). Aucun bien n\'est transporté dans un véhicule non préparé.',
      items: [
        { title: 'Petits utilitaires (3-6 m³)', desc: 'Studios, déménagements partiels, livraisons rapides en ville.' },
        { title: 'Fourgons (12-20 m³)', desc: "Appartements F1, F2, transferts d'archives et de mobilier de bureau." },
        { title: 'Camions 20-30 m³', desc: 'Appartements F3, F4, premières maisons familiales.' },
        { title: 'Camions 40-50 m³', desc: 'Villas, bureaux complets, déménagements inter-villes longue distance.' },
        { title: 'Camions semi-remorques', desc: 'Gros transferts industriels, mobilier lourd, conteneurs.' },
      ],
    },
    packaging: {
      eyebrow: 'Emballage & protection',
      title: "Vos biens méritent plus qu'un simple drap",
      description:
        "L'emballage est le secret d'un déménagement sans casse. Nous fournissons et appliquons les emballages adaptés à chaque catégorie de bien.",
      items: [
        { title: 'Cartons standards', desc: 'Pour livres, vêtements, vaisselle légère. Fond renforcé.' },
        { title: 'Papier bulle', desc: 'Pour vaisselle fragile, miroirs, cadres, écrans plats.' },
        { title: 'Couvertures', desc: 'Pour gros mobilier (canapé, armoire, table).' },
        { title: 'Caisses sur mesure', desc: "Pour œuvres d'art, instruments, objets de valeur." },
        { title: 'Sangles', desc: 'Pour fixation et levage de mobilier lourd ou massif.' },
        { title: 'Film étirable', desc: 'Pour mobilier de bureau et palettisation.' },
        { title: 'Cartons livres', desc: 'Petit format pour ne pas devenir trop lourds.' },
        { title: 'Penderie portable', desc: 'Pour vêtements suspendus, sans froisser.' },
      ],
    },
    form: {
      eyebrow: 'Demander un devis',
      title: 'Précisez votre déménagement',
      description:
        "Vous nous donnez l'origine, la destination, la date et un ordre d'idée du volume. Nous revenons sous 24 heures avec un devis indicatif et une proposition de visite technique.",
      success: 'Votre demande a été envoyée avec succès ! Nous vous recontacterons sous peu.',
      sending: 'Envoi en cours...',
      submit: 'Envoyer ma demande de devis',
      errorGeneric: "Impossible d'envoyer votre demande de devis.",
      errorNetwork: 'Erreur réseau. Réessayez plus tard.',
      fields: {
        cityFrom: { label: 'Ville de départ', placeholder: 'Ex: Lomé' },
        cityTo: { label: "Ville d'arrivée", placeholder: 'Ex: Accra' },
        quartierFrom: { label: 'Quartier de départ', placeholder: 'Ex: Adewi' },
        quartierTo: { label: "Quartier d'arrivée", placeholder: 'Ex: Jamestown' },
        date: { label: 'Date du déménagement' },
        time: { label: 'Heure du déménagement' },
        knownVolume: { label: 'Connaissez-vous le volume approximatif ?', yes: 'Oui', no: 'Non' },
        volume: { label: 'Volume estimé', placeholder: 'Ex: 50 m³' },
        name: { label: 'Votre nom', placeholder: '' },
        firstName: { label: 'Votre prénom' },
        phone: { label: 'Téléphone', placeholder: '+228 ...' },
        address: { label: 'Votre adresse', placeholder: 'Votre adresse complète' },
      },
    },
    faq: {
      eyebrow: 'FAQ Déménagement',
      title: "Les questions qu'on nous pose le plus souvent",
      items: [
        {
          question: "Combien de temps à l'avance dois-je réserver mon déménagement ?",
          answer:
            'Pour un déménagement à Lomé, 7 à 10 jours suffisent en général. Pour un déménagement inter-villes, prévoir 2 à 3 semaines. En haute saison (juillet-septembre, fins de mois), réservez 3 à 4 semaines à l\'avance.',
        },
        {
          question: 'Faut-il que je sois présent(e) le jour du déménagement ?',
          answer:
            "Idéalement oui, surtout au moment du déchargement pour indiquer l'emplacement des meubles. Si vous êtes absent(e), nous pouvons travailler sur la base d'un plan annoté ou avec un tiers de confiance.",
        },
        {
          question: 'Mes biens sont-ils assurés pendant le transport ?',
          answer:
            "Oui. Une assurance de base est incluse. Pour les biens de grande valeur (œuvres d'art, équipements industriels, coffres-forts), nous proposons une assurance complémentaire optionnelle avec déclaration de valeur.",
        },
        {
          question: 'Vous occupez-vous du démontage et du remontage ?',
          answer:
            "Oui, et c'est inclus dans nos prestations standards. Lits, armoires, bureaux, étagères : nos équipes démontent, transportent et remontent à l'identique. Comptez 20-40 minutes par meuble complexe.",
        },
        {
          question: 'Pouvez-vous gérer un déménagement international ?',
          answer:
            "Oui, nous opérons dans toute la sous-région (Bénin, Ghana, Burkina, Côte d'Ivoire, Niger, Mali). Pour les destinations hors-CEDEAO, nous travaillons avec des partenaires logistiques sélectionnés.",
        },
        {
          question: "Que se passe-t-il s'il pleut le jour du déménagement ?",
          answer:
            "Nous décidons d'un commun accord. Si la météo rend le transport dangereux pour vos biens, nous reportons sans frais. Sinon, nous appliquons des bâches étanches et des couvertures supplémentaires.",
        },
        {
          question: 'Quel est le mode de paiement ?',
          answer:
            '30% à la signature du devis pour bloquer le créneau, 70% à la fin de la prestation après votre validation du PV de réception. Paiement par virement, Mobile Money ou espèces.',
        },
      ],
    },
    finalCta: {
      title: 'Préparons votre déménagement ensemble',
      description:
        'Visite technique gratuite et devis détaillé sans engagement. Notre équipe revient vers vous sous 24 heures pour fixer un créneau.',
      btnAdvisor: 'Parler à un conseiller',
      btnServices: 'Voir tous les services',
    },
  },
  EN: {
    intro: {
      eyebrow: 'The service in brief',
      title:
        'Moving in Togo with peace of mind: structured logistics, trained teams, protected belongings.',
      paragraphs: [
        'Moving is one of the most stressful moments in the life of a household or a business. Poorly protected boxes, improvised crews, unsuitable trucks, vague quotes, delays: unpleasant surprises are common. TAOMAN GROUP INVESTMENTS has structured its moving service to eliminate these risks.',
        'We handle residential moves, corporate relocations, specialized transfers (government, industrial, commercial) and the handling of oversized volumes or weights. Every job is preceded by a free technical visit and a detailed quote. Our fleet covers urban moves, inter-city routes (Lomé, Kara, Atakpamé, Sokodé, Dapaong) and sub-regional operations (UEMOA, CEDEAO). We use packaging suited to each type of item and our teams are trained in safe handling of fragile, bulky or heavy goods.',
      ],
    },
    types: {
      eyebrow: 'Our services',
      title: 'Four types of moves, one requirement: zero breakage',
      description:
        'Whether you are an individual changing apartments, an expatriate executive, an SME relocating offices or a public body reorganizing premises, we adapt the team, equipment and method.',
      items: [
        {
          id: 'particulier',
          title: 'Residential moving',
          desc: 'Studios, 2-bed, 3-bed, 4-bed flats, villas: we handle packing, furniture disassembly, loading, transport, unloading, reassembly and placement in your new home.',
          pts: [
            'Free technical visit at your home',
            'Boxes, bubble wrap and blankets supplied',
            'Furniture disassembly and reassembly',
            'Help with layout on arrival',
          ],
        },
        {
          id: 'entreprise',
          title: 'Corporate relocation',
          desc: 'Offices, meeting rooms, archives, IT servers: we plan outside business hours to minimize disruption. Direct coordination with your facilities manager.',
          pts: [
            'Detailed schedule delivered one week ahead',
            'Systematic labeling and numbering',
            'Secure handling of IT equipment',
            'Progress reporting at every stage',
          ],
        },
        {
          id: 'transfert',
          title: 'Specialized transfers',
          desc: 'Public administrations, embassies, NGOs, industrial projects: we know the specific rules (inventories, signatures, seals, customs authorizations, enhanced security).',
          pts: [
            'Compliant inventory procedures',
            'Authorized and briefed teams',
            'Photo documentation and signatures',
            'Coordination with your in-house logistics',
          ],
        },
        {
          id: 'manutention',
          title: 'Specialized handling',
          desc: 'Safes, industrial equipment, pianos, works of art, luxury furniture: moving heavy, fragile or high-value items requires specific equipment (pallet trucks, straps, furniture lifts) and experienced operators.',
          pts: [
            'Case studies and lifting plans',
            'Suitable equipment (pallet truck, freight lift)',
            'Supplementary insurance for valuables',
            'Custom blankets and crates',
          ],
        },
      ],
    },
    process: {
      eyebrow: 'Our process',
      title: 'Seven clear steps, from quote to the living-room glass back in place',
      description:
        'Our method is proven. It avoids unpleasant surprises, delays and breakage. You always know what is happening and who is doing what.',
      steps: [
        {
          num: '01',
          title: 'Request and indicative quote',
          desc: 'You fill in the form or call us. We schedule an assessment visit. For small moves, an indicative quote can be given by phone.',
        },
        {
          num: '02',
          title: 'Technical visit and firm quote',
          desc: 'Our team leader visits on site, measures volumes, identifies constraints (stairs, elevator, parking, special items) and issues a firm, detailed quote.',
        },
        {
          num: '03',
          title: 'Confirmation and preparation',
          desc: 'You approve the quote. We deliver boxes, bubble wrap and blankets. A precise schedule (departure time, crews mobilized, loading order) is shared with you.',
        },
        {
          num: '04',
          title: 'Packing',
          desc: 'The crew packs and labels fragile items, disassembles complex furniture and protects items with specialized blankets. Every box is numbered.',
        },
        {
          num: '05',
          title: 'Loading and transport',
          desc: 'Methodical truck loading by category (boxes then furniture then fragile items). Secure transport with tie-downs. GPS tracking on long routes.',
        },
        {
          num: '06',
          title: 'Unloading and reassembly',
          desc: 'Unloading supervised by our manager. Furniture reassembly and placement per your floor plan. Removal of packaging.',
        },
        {
          num: '07',
          title: 'Final check and sign-off',
          desc: 'Final walkthrough together to confirm everything is in place. Signing of the delivery report. Photo report on request.',
        },
      ],
    },
    fleet: {
      eyebrow: 'Our fleet',
      title: 'Vehicles suited to every volume and every type of goods',
      description:
        'Our fleet is regularly maintained by our technical teams. All vehicles are checked before each move (brakes, tires, tie-downs, cleanliness). No goods are transported in an unprepared vehicle.',
      items: [
        { title: 'Small vans (3-6 m³)', desc: 'Studios, partial moves, fast city deliveries.' },
        { title: 'Box trucks (12-20 m³)', desc: '1-bed, 2-bed flats, archive and office furniture transfers.' },
        { title: 'Trucks 20-30 m³', desc: '3-bed, 4-bed flats, first family homes.' },
        { title: 'Trucks 40-50 m³', desc: 'Villas, full offices, long-distance inter-city moves.' },
        { title: 'Semi-trailer trucks', desc: 'Large industrial transfers, heavy furniture, containers.' },
      ],
    },
    packaging: {
      eyebrow: 'Packing & protection',
      title: 'Your belongings deserve more than a simple sheet',
      description:
        'Packing is the secret to a damage-free move. We supply and apply packaging suited to each category of goods.',
      items: [
        { title: 'Standard boxes', desc: 'For books, clothes, light tableware. Reinforced bottom.' },
        { title: 'Bubble wrap', desc: 'For fragile tableware, mirrors, frames, flat screens.' },
        { title: 'Moving blankets', desc: 'For large furniture (sofa, wardrobe, table).' },
        { title: 'Custom crates', desc: 'For works of art, instruments, valuables.' },
        { title: 'Straps', desc: 'For securing and lifting heavy or bulky furniture.' },
        { title: 'Stretch film', desc: 'For office furniture and palletizing.' },
        { title: 'Book boxes', desc: 'Small format so they do not become too heavy.' },
        { title: 'Portable wardrobe', desc: 'For hanging clothes, without creasing.' },
      ],
    },
    form: {
      eyebrow: 'Request a quote',
      title: 'Tell us about your move',
      description:
        'You provide origin, destination, date and an approximate volume. We get back to you within 24 hours with an indicative quote and a technical visit proposal.',
      success: 'Your request has been sent successfully! We will contact you shortly.',
      sending: 'Sending...',
      submit: 'Send my quote request',
      errorGeneric: 'Unable to send your quote request.',
      errorNetwork: 'Network error. Please try again later.',
      fields: {
        cityFrom: { label: 'Departure city', placeholder: 'Ex: Lomé' },
        cityTo: { label: 'Arrival city', placeholder: 'Ex: Accra' },
        quartierFrom: { label: 'Departure district', placeholder: 'Ex: Adewi' },
        quartierTo: { label: 'Arrival district', placeholder: 'Ex: Jamestown' },
        date: { label: 'Moving date' },
        time: { label: 'Moving time' },
        knownVolume: { label: 'Do you know the approximate volume?', yes: 'Yes', no: 'No' },
        volume: { label: 'Estimated volume', placeholder: 'Ex: 50 m³' },
        name: { label: 'Your last name', placeholder: '' },
        firstName: { label: 'Your first name' },
        phone: { label: 'Phone', placeholder: '+228 ...' },
        address: { label: 'Your address', placeholder: 'Your full address' },
      },
    },
    faq: {
      eyebrow: 'Moving FAQ',
      title: 'Questions we hear most often',
      items: [
        {
          question: 'How far in advance should I book my move?',
          answer:
            'For a move in Lomé, 7 to 10 days is usually enough. For inter-city moves, allow 2 to 3 weeks. In peak season (July–September, month-end), book 3 to 4 weeks ahead.',
        },
        {
          question: 'Do I need to be present on moving day?',
          answer:
            'Ideally yes, especially during unloading to indicate furniture placement. If you are absent, we can work from an annotated floor plan or with a trusted third party.',
        },
        {
          question: 'Are my belongings insured during transport?',
          answer:
            'Yes. Basic insurance is included. For high-value items (works of art, industrial equipment, safes), we offer optional supplementary insurance with declared value.',
        },
        {
          question: 'Do you handle disassembly and reassembly?',
          answer:
            'Yes, and it is included in our standard services. Beds, wardrobes, desks, shelves: our teams disassemble, transport and reassemble identically. Allow 20–40 minutes per complex piece.',
        },
        {
          question: 'Can you handle an international move?',
          answer:
            'Yes, we operate across the sub-region (Benin, Ghana, Burkina, Côte d\'Ivoire, Niger, Mali). For destinations outside CEDEAO, we work with selected logistics partners.',
        },
        {
          question: 'What happens if it rains on moving day?',
          answer:
            'We decide together. If weather makes transport unsafe for your goods, we reschedule at no charge. Otherwise, we use waterproof covers and extra blankets.',
        },
        {
          question: 'What are the payment terms?',
          answer:
            '30% when signing the quote to secure the slot, 70% at the end of the service after you validate the delivery report. Payment by bank transfer, Mobile Money or cash.',
        },
      ],
    },
    finalCta: {
      title: 'Let\'s plan your move together',
      description:
        'Free technical visit and detailed quote with no obligation. Our team gets back to you within 24 hours to schedule a slot.',
      btnAdvisor: 'Speak to an advisor',
      btnServices: 'View all services',
    },
  },
  ES: {
    intro: {
      eyebrow: 'El servicio en pocas palabras',
      title:
        'Mudarse en Togo con tranquilidad: logística estructurada, equipos formados, bienes protegidos.',
      paragraphs: [
        'La mudanza es uno de los momentos más estresantes en la vida de un hogar o de una empresa. Cajas mal protegidas, equipos improvisados, camiones inadecuados, presupuestos poco claros, retrasos: las malas sorpresas son frecuentes. TAOMAN GROUP INVESTMENTS ha estructurado su servicio de mudanzas para eliminar estos riesgos.',
        'Realizamos mudanzas de particulares, de empresas, transferencias especializadas (administraciones, industriales, comerciales) y manipulación de volúmenes o pesos excepcionales. Cada misión va precedida de una visita técnica gratuita y un presupuesto detallado. Nuestra flota cubre mudanzas urbanas, interurbanas (Lomé, Kara, Atakpamé, Sokodé, Dapaong) y subregionales (UEMOA, CEDEAO). Trabajamos con embalajes adaptados a cada tipo de bien y nuestros equipos están formados en la manipulación segura de objetos frágiles, voluminosos o pesados.',
      ],
    },
    types: {
      eyebrow: 'Nuestros servicios',
      title: 'Cuatro tipos de mudanza, un solo requisito: cero roturas',
      description:
        'Ya sea un particular que cambia de piso, un ejecutivo expatriado, una PYME que traslada sus oficinas o una administración que reorganiza sus locales, adaptamos el equipo, el material y el método.',
      items: [
        {
          id: 'particulier',
          title: 'Mudanzas de particulares',
          desc: 'Estudios, pisos de 2, 3 y 4 habitaciones, villas: nos encargamos del embalaje, desmontaje del mobiliario, carga, transporte, descarga, remontaje y colocación en el nuevo hogar.',
          pts: [
            'Visita técnica gratuita a domicilio',
            'Cajas, papel de burbujas y mantas incluidos',
            'Desmontaje y remontaje de muebles',
            'Ayuda con la distribución a la llegada',
          ],
        },
        {
          id: 'entreprise',
          title: 'Mudanzas de empresas',
          desc: 'Oficinas, salas de reuniones, archivos, servidores informáticos: planificamos fuera del horario laboral para minimizar la interrupción. Coordinación directa con su responsable de servicios generales.',
          pts: [
            'Planificación detallada entregada una semana antes',
            'Etiquetado y numeración sistemática',
            'Manipulación segura del material informático',
            'Informes de avance en cada etapa',
          ],
        },
        {
          id: 'transfert',
          title: 'Transferencias especializadas',
          desc: 'Administraciones públicas, embajadas, ONG, proyectos industriales: conocemos las normas específicas (inventarios, firmas, precintos, autorizaciones aduaneras, seguridad reforzada).',
          pts: [
            'Procedimientos de inventario conformes',
            'Equipos autorizados y informados',
            'Documentación fotográfica y firma',
            'Coordinación con su logística interna',
          ],
        },
        {
          id: 'manutention',
          title: 'Manipulación especializada',
          desc: 'Cajas fuertes, equipos industriales, pianos, obras de arte, mobiliario de lujo: mover objetos pesados, frágiles o de alto valor requiere material específico (transpaletas, cinchas, montacargas) y operarios experimentados.',
          pts: [
            'Estudios de caso y planes de elevación',
            'Material adaptado (transpaleta, montacargas)',
            'Seguro complementario para objetos de valor',
            'Mantas y cajones a medida',
          ],
        },
      ],
    },
    process: {
      eyebrow: 'Nuestro proceso',
      title: 'Siete pasos claros, del presupuesto al vaso del salón en su sitio',
      description:
        'Nuestro método está probado. Evita malas sorpresas, retrasos y roturas. Siempre sabe qué ocurre y quién hace qué.',
      steps: [
        { num: '01', title: 'Solicitud y presupuesto indicativo', desc: 'Rellena el formulario o nos llama. Fijamos una cita de evaluación. Para mudanzas pequeñas, el presupuesto indicativo puede darse por teléfono.' },
        { num: '02', title: 'Visita técnica y presupuesto firme', desc: 'Nuestro jefe de equipo visita el lugar, mide los volúmenes, identifica las limitaciones (escaleras, ascensor, aparcamiento, objetos especiales) y emite un presupuesto firme y detallado.' },
        { num: '03', title: 'Validación y preparación', desc: 'Valida el presupuesto. Le entregamos cajas, papel de burbujas y mantas. Se le comunica un planning preciso (hora de salida, equipos movilizados, orden de carga).' },
        { num: '04', title: 'Embalaje', desc: 'El equipo embala y etiqueta los bienes frágiles, desmonta muebles complejos y protege el mobiliario con mantas especializadas. Cada caja está numerada.' },
        { num: '05', title: 'Carga y transporte', desc: 'Carga metódica del camión por categoría (cajas, muebles, frágiles). Transporte seguro con sujeción. Seguimiento GPS en trayectos largos.' },
        { num: '06', title: 'Descarga y remontaje', desc: 'Descarga supervisada por nuestro responsable. Remontaje de muebles e instalación según su plano. Retirada de embalajes.' },
        { num: '07', title: 'Control final y firma', desc: 'Visita final conjunta para validar que todo está en su sitio. Firma del acta de recepción. Informe fotográfico si se solicita.' },
      ],
    },
    fleet: {
      eyebrow: 'Nuestra flota',
      title: 'Vehículos adaptados a cada volumen y tipo de bien',
      description:
        'Nuestra flota es mantenida regularmente por nuestros equipos técnicos. Todos los vehículos se revisan antes de cada mudanza (frenos, neumáticos, sujeciones, limpieza). Ningún bien se transporta en un vehículo no preparado.',
      items: [
        { title: 'Furgonetas pequeñas (3-6 m³)', desc: 'Estudios, mudanzas parciales, entregas rápidas en ciudad.' },
        { title: 'Furgones (12-20 m³)', desc: 'Pisos de 1 y 2 habitaciones, traslado de archivos y mobiliario de oficina.' },
        { title: 'Camiones 20-30 m³', desc: 'Pisos de 3 y 4 habitaciones, primeras viviendas familiares.' },
        { title: 'Camiones 40-50 m³', desc: 'Villas, oficinas completas, mudanzas interurbanas de larga distancia.' },
        { title: 'Camiones semirremolque', desc: 'Grandes transferencias industriales, mobiliario pesado, contenedores.' },
      ],
    },
    packaging: {
      eyebrow: 'Embalaje y protección',
      title: 'Sus bienes merecen más que una simple sábana',
      description:
        'El embalaje es el secreto de una mudanza sin roturas. Suministramos y aplicamos embalajes adaptados a cada categoría de bien.',
      items: [
        { title: 'Cajas estándar', desc: 'Para libros, ropa, vajilla ligera. Fondo reforzado.' },
        { title: 'Papel de burbujas', desc: 'Para vajilla frágil, espejos, marcos, pantallas planas.' },
        { title: 'Mantas', desc: 'Para mobiliario grande (sofá, armario, mesa).' },
        { title: 'Cajones a medida', desc: 'Para obras de arte, instrumentos, objetos de valor.' },
        { title: 'Cinchas', desc: 'Para fijación y elevación de mobiliario pesado o voluminoso.' },
        { title: 'Film estirable', desc: 'Para mobiliario de oficina y paletización.' },
        { title: 'Cajas para libros', desc: 'Formato pequeño para no volverse demasiado pesadas.' },
        { title: 'Armario portátil', desc: 'Para ropa colgada, sin arrugar.' },
      ],
    },
    form: {
      eyebrow: 'Solicitar presupuesto',
      title: 'Detalle su mudanza',
      description:
        'Nos indica origen, destino, fecha y una idea del volumen. Respondemos en 24 horas con un presupuesto indicativo y propuesta de visita técnica.',
      success: '¡Su solicitud se ha enviado correctamente! Nos pondremos en contacto en breve.',
      sending: 'Enviando...',
      submit: 'Enviar mi solicitud de presupuesto',
      errorGeneric: 'No se pudo enviar su solicitud de presupuesto.',
      errorNetwork: 'Error de red. Inténtelo de nuevo más tarde.',
      fields: {
        cityFrom: { label: 'Ciudad de salida', placeholder: 'Ej: Lomé' },
        cityTo: { label: 'Ciudad de llegada', placeholder: 'Ej: Accra' },
        quartierFrom: { label: 'Barrio de salida', placeholder: 'Ej: Adewi' },
        quartierTo: { label: 'Barrio de llegada', placeholder: 'Ej: Jamestown' },
        date: { label: 'Fecha de la mudanza' },
        time: { label: 'Hora de la mudanza' },
        knownVolume: { label: '¿Conoce el volumen aproximado?', yes: 'Sí', no: 'No' },
        volume: { label: 'Volumen estimado', placeholder: 'Ej: 50 m³' },
        name: { label: 'Su apellido', placeholder: '' },
        firstName: { label: 'Su nombre' },
        phone: { label: 'Teléfono', placeholder: '+228 ...' },
        address: { label: 'Su dirección', placeholder: 'Su dirección completa' },
      },
    },
    faq: {
      eyebrow: 'FAQ Mudanzas',
      title: 'Las preguntas más frecuentes',
      items: [
        { question: '¿Con cuánta antelación debo reservar mi mudanza?', answer: 'Para una mudanza en Lomé, suelen bastar 7 a 10 días. Para mudanzas interurbanas, prevea 2 a 3 semanas. En temporada alta (julio-septiembre, fin de mes), reserve con 3 a 4 semanas de antelación.' },
        { question: '¿Debo estar presente el día de la mudanza?', answer: 'Idealmente sí, sobre todo en la descarga para indicar la ubicación de los muebles. Si está ausente, podemos trabajar con un plano anotado o un tercero de confianza.' },
        { question: '¿Están asegurados mis bienes durante el transporte?', answer: 'Sí. Incluye un seguro básico. Para bienes de alto valor (obras de arte, equipos industriales, cajas fuertes), ofrecemos seguro complementario opcional con declaración de valor.' },
        { question: '¿Se encargan del desmontaje y remontaje?', answer: 'Sí, está incluido en nuestras prestaciones estándar. Camas, armarios, escritorios, estanterías: desmontamos, transportamos y remontamos igual. Cuente 20-40 minutos por mueble complejo.' },
        { question: '¿Pueden gestionar una mudanza internacional?', answer: 'Sí, operamos en toda la subregión (Benín, Ghana, Burkina, Côte d\'Ivoire, Níger, Mali). Para destinos fuera de la CEDEAO, trabajamos con socios logísticos seleccionados.' },
        { question: '¿Qué pasa si llueve el día de la mudanza?', answer: 'Decidimos de común acuerdo. Si el tiempo hace peligroso el transporte, reprogramamos sin coste. Si no, aplicamos lonas impermeables y mantas adicionales.' },
        { question: '¿Cuál es la forma de pago?', answer: '30% al firmar el presupuesto para reservar el hueco, 70% al final tras validar el acta de recepción. Pago por transferencia, Mobile Money o efectivo.' },
      ],
    },
    finalCta: {
      title: 'Preparemos su mudanza juntos',
      description:
        'Visita técnica gratuita y presupuesto detallado sin compromiso. Nuestro equipo responde en 24 horas para fijar una cita.',
      btnAdvisor: 'Hablar con un asesor',
      btnServices: 'Ver todos los servicios',
    },
  },
  PT: {
    intro: {
      eyebrow: 'O serviço em poucas palavras',
      title:
        'Mudar-se no Togo com tranquilidade: logística estruturada, equipas formadas, bens protegidos.',
      paragraphs: [
        'A mudança é um dos momentos mais stressantes na vida de um agregado familiar ou de uma empresa. Caixas mal protegidas, equipas improvisadas, camiões inadequados, orçamentos pouco claros, atrasos: as más surpresas são frequentes. A TAOMAN GROUP INVESTMENTS estruturou o seu serviço de mudanças para eliminar estes riscos.',
        'Realizamos mudanças de particulares, de empresas, transferências especializadas (administrações, industriais, comerciais) e manuseamento de volumes ou pesos fora do comum. Cada missão é precedida de uma visita técnica gratuita e de um orçamento detalhado. A nossa frota cobre mudanças urbanas, intercidades (Lomé, Kara, Atakpamé, Sokodé, Dapaong) e sub-regionais (UEMOA, CEDEAO). Trabalhamos com embalagens adaptadas a cada tipo de bem e as nossas equipas estão formadas no manuseamento seguro de objetos frágeis, volumosos ou pesados.',
      ],
    },
    types: {
      eyebrow: 'Os nossos serviços',
      title: 'Quatro tipos de mudança, um único requisito: zero ruturas',
      description:
        'Seja um particular a mudar de apartamento, um executivo expatriado, uma PME a transferir escritórios ou uma administração a reorganizar instalações, adaptamos a equipa, o material e o método.',
      items: [
        {
          id: 'particulier',
          title: 'Mudanças de particulares',
          desc: 'Estúdios, T2, T3, T4, moradias: tratamos da embalagem, desmontagem do mobiliário, carga, transporte, descarga, remontagem e arrumação na nova habitação.',
          pts: ['Visita técnica gratuita ao domicílio', 'Caixas, plástico bolha e mantas fornecidos', 'Desmontagem e remontagem de móveis', 'Ajuda à organização à chegada'],
        },
        {
          id: 'entreprise',
          title: 'Mudanças de empresas',
          desc: 'Escritórios, salas de reunião, arquivos, servidores informáticos: planificamos fora do horário laboral para minimizar a interrupção. Coordenação direta com o responsável de serviços gerais.',
          pts: ['Planeamento detalhado entregue uma semana antes', 'Etiquetagem e numeração sistemática', 'Manuseamento seguro de equipamento informático', 'Relatórios de progresso em cada etapa'],
        },
        {
          id: 'transfert',
          title: 'Transferências especializadas',
          desc: 'Administrações públicas, embaixadas, ONG, projetos industriais: conhecemos as regras específicas (inventários, assinaturas, selos, autorizações aduaneiras, segurança reforçada).',
          pts: ['Procedimentos de inventário conformes', 'Equipas autorizadas e informadas', 'Documentação fotográfica e assinatura', 'Coordenação com a sua logística interna'],
        },
        {
          id: 'manutention',
          title: 'Manuseamento especializado',
          desc: 'Cofres, equipamentos industriais, pianos, obras de arte, mobiliário de luxo: mover objetos pesados, frágeis ou de alto valor exige material específico (transpaletes, cintas, elevadores) e operadores experientes.',
          pts: ['Estudos de caso e planos de elevação', 'Material adaptado (transpalete, elevador de carga)', 'Seguro complementar para objetos de valor', 'Mantas e caixotes sob medida'],
        },
      ],
    },
    process: {
      eyebrow: 'O nosso processo',
      title: 'Sete passos claros, do orçamento ao copo da sala no lugar',
      description:
        'O nosso método é comprovado. Evita más surpresas, atrasos e ruturas. Sabe sempre o que acontece e quem faz o quê.',
      steps: [
        { num: '01', title: 'Pedido e orçamento indicativo', desc: 'Preenche o formulário ou liga-nos. Marcamos uma visita de avaliação. Para mudanças pequenas, o orçamento indicativo pode ser dado por telefone.' },
        { num: '02', title: 'Visita técnica e orçamento firme', desc: 'O nosso chefe de equipa visita o local, mede os volumes, identifica as limitações (escadas, elevador, estacionamento, objetos especiais) e emite um orçamento firme e detalhado.' },
        { num: '03', title: 'Validação e preparação', desc: 'Valida o orçamento. Entregamos caixas, plástico bolha e mantas. É comunicado um planeamento preciso (hora de partida, equipas mobilizadas, ordem de carga).' },
        { num: '04', title: 'Embalagem', desc: 'A equipa embala e etiqueta bens frágeis, desmonta móveis complexos e protege o mobiliário com mantas especializadas. Cada caixa é numerada.' },
        { num: '05', title: 'Carga e transporte', desc: 'Carga metódica do camião por categoria (caixas, móveis, frágeis). Transporte seguro com amarração. Seguimento GPS em trajetos longos.' },
        { num: '06', title: 'Descarga e remontagem', desc: 'Descarga supervisionada pelo nosso responsável. Remontagem de móveis e instalação conforme o seu plano. Remoção de embalagens.' },
        { num: '07', title: 'Controlo final e assinatura', desc: 'Visita final conjunta para validar que tudo está no lugar. Assinatura do auto de receção. Relatório fotográfico se solicitado.' },
      ],
    },
    fleet: {
      eyebrow: 'A nossa frota',
      title: 'Veículos adaptados a cada volume e tipo de bem',
      description:
        'A nossa frota é mantida regularmente pelas nossas equipas técnicas. Todos os veículos são verificados antes de cada mudança (travões, pneus, amarrações, limpeza). Nenhum bem é transportado num veículo não preparado.',
      items: [
        { title: 'Utilitários pequenos (3-6 m³)', desc: 'Estúdios, mudanças parciais, entregas rápidas na cidade.' },
        { title: 'Furgões (12-20 m³)', desc: 'Apartamentos T1, T2, transferência de arquivos e mobiliário de escritório.' },
        { title: 'Camiões 20-30 m³', desc: 'Apartamentos T3, T4, primeiras casas familiares.' },
        { title: 'Camiões 40-50 m³', desc: 'Moradias, escritórios completos, mudanças intercidades de longa distância.' },
        { title: 'Camiões semi-reboque', desc: 'Grandes transferências industriais, mobiliário pesado, contentores.' },
      ],
    },
    packaging: {
      eyebrow: 'Embalagem e proteção',
      title: 'Os seus bens merecem mais do que um simples lençol',
      description:
        'A embalagem é o segredo de uma mudança sem ruturas. Fornecemos e aplicamos embalagens adaptadas a cada categoria de bem.',
      items: [
        { title: 'Caixas standard', desc: 'Para livros, roupa, loiça leve. Fundo reforçado.' },
        { title: 'Plástico bolha', desc: 'Para loiça frágil, espelhos, molduras, ecrãs planos.' },
        { title: 'Mantas', desc: 'Para mobiliário grande (sofá, roupeiro, mesa).' },
        { title: 'Caixotes sob medida', desc: 'Para obras de arte, instrumentos, objetos de valor.' },
        { title: 'Cintas', desc: 'Para fixação e elevação de mobiliário pesado ou volumoso.' },
        { title: 'Filme extensível', desc: 'Para mobiliário de escritório e paletização.' },
        { title: 'Caixas para livros', desc: 'Formato pequeno para não ficarem demasiado pesadas.' },
        { title: 'Armário portátil', desc: 'Para roupa pendurada, sem amassar.' },
      ],
    },
    form: {
      eyebrow: 'Pedir orçamento',
      title: 'Especifique a sua mudança',
      description:
        'Indica-nos origem, destino, data e uma ideia do volume. Respondemos em 24 horas com orçamento indicativo e proposta de visita técnica.',
      success: 'O seu pedido foi enviado com sucesso! Entraremos em contacto em breve.',
      sending: 'A enviar...',
      submit: 'Enviar o meu pedido de orçamento',
      errorGeneric: 'Não foi possível enviar o seu pedido de orçamento.',
      errorNetwork: 'Erro de rede. Tente novamente mais tarde.',
      fields: {
        cityFrom: { label: 'Cidade de partida', placeholder: 'Ex: Lomé' },
        cityTo: { label: 'Cidade de chegada', placeholder: 'Ex: Accra' },
        quartierFrom: { label: 'Bairro de partida', placeholder: 'Ex: Adewi' },
        quartierTo: { label: 'Bairro de chegada', placeholder: 'Ex: Jamestown' },
        date: { label: 'Data da mudança' },
        time: { label: 'Hora da mudança' },
        knownVolume: { label: 'Conhece o volume aproximado?', yes: 'Sim', no: 'Não' },
        volume: { label: 'Volume estimado', placeholder: 'Ex: 50 m³' },
        name: { label: 'O seu apelido', placeholder: '' },
        firstName: { label: 'O seu nome' },
        phone: { label: 'Telefone', placeholder: '+228 ...' },
        address: { label: 'A sua morada', placeholder: 'A sua morada completa' },
      },
    },
    faq: {
      eyebrow: 'FAQ Mudanças',
      title: 'As perguntas mais frequentes',
      items: [
        { question: 'Com quanta antecedência devo reservar a minha mudança?', answer: 'Para uma mudança em Lomé, 7 a 10 dias costumam bastar. Para mudanças intercidades, preveja 2 a 3 semanas. Em época alta (julho-setembro, fim de mês), reserve com 3 a 4 semanas de antecedência.' },
        { question: 'Preciso de estar presente no dia da mudança?', answer: 'Idealmente sim, sobretudo na descarga para indicar a colocação dos móveis. Se estiver ausente, podemos trabalhar com um plano anotado ou um terceiro de confiança.' },
        { question: 'Os meus bens estão segurados durante o transporte?', answer: 'Sim. Inclui um seguro básico. Para bens de alto valor (obras de arte, equipamentos industriais, cofres), oferecemos seguro complementar opcional com declaração de valor.' },
        { question: 'Tratam do desmontagem e remontagem?', answer: 'Sim, está incluído nas nossas prestações standard. Camas, roupeiros, secretárias, estantes: desmontamos, transportamos e remontamos igual. Conte 20-40 minutos por móvel complexo.' },
        { question: 'Podem gerir uma mudança internacional?', answer: 'Sim, operamos em toda a sub-região (Benim, Gana, Burkina, Costa do Marfim, Níger, Mali). Para destinos fora da CEDEAO, trabalhamos com parceiros logísticos selecionados.' },
        { question: 'O que acontece se chover no dia da mudança?', answer: 'Decidimos em conjunto. Se o tempo tornar o transporte perigoso, reagendamos sem custos. Caso contrário, aplicamos lonas impermeáveis e mantas adicionais.' },
        { question: 'Qual é a forma de pagamento?', answer: '30% na assinatura do orçamento para reservar o slot, 70% no final após validar o auto de receção. Pagamento por transferência, Mobile Money ou numerário.' },
      ],
    },
    finalCta: {
      title: 'Preparemos a sua mudança juntos',
      description:
        'Visita técnica gratuita e orçamento detalhado sem compromisso. A nossa equipa responde em 24 horas para marcar um horário.',
      btnAdvisor: 'Falar com um consultor',
      btnServices: 'Ver todos os serviços',
    },
  },
  DE: {
    intro: {
      eyebrow: 'Der Service kurz erklärt',
      title:
        'Umzug im Togo mit Ruhe: strukturierte Logistik, geschulte Teams, geschützte Güter.',
      paragraphs: [
        'Ein Umzug gehört zu den stressigsten Momenten im Leben eines Haushalts oder eines Unternehmens. Schlecht geschützte Kartons, improvisierte Teams, ungeeignete Lkw, unklare Angebote, Verzögerungen: böse Überraschungen sind häufig. TAOMAN GROUP INVESTMENTS hat seinen Umzugsservice strukturiert, um diese Risiken zu beseitigen.',
        'Wir führen Privatumzüge, Firmenumzüge, spezialisierte Transfers (Behörden, Industrie, Handel) und die Handhabung außergewöhnlicher Volumen oder Gewichte durch. Jeder Auftrag wird von einem kostenlosen technischen Vor-Ort-Termin und einem detaillierten Angebot begleitet. Unsere Flotte deckt Stadtumzüge, Überlandtransporte (Lomé, Kara, Atakpamé, Sokodé, Dapaong) und subregionale Einsätze (UEMOA, CEDEAO) ab. Wir verwenden Verpackungen, die auf jeden Gütetyp abgestimmt sind, und unsere Teams sind in der sicheren Handhabung zerbrechlicher, sperriger oder schwerer Gegenstände geschult.',
      ],
    },
    types: {
      eyebrow: 'Unsere Leistungen',
      title: 'Vier Umzugsarten, eine Anforderung: null Bruch',
      description:
        'Ob Privatperson mit Wohnungswechsel, expatriierter Führungskraft, KMU mit Bürotransfer oder Behörde mit Neustrukturierung – wir passen Team, Material und Methode an.',
      items: [
        {
          id: 'particulier',
          title: 'Privatumzüge',
          desc: 'Studios, 2-, 3-, 4-Zimmer-Wohnungen, Villen: Verpackung, Möbeldemontage, Beladung, Transport, Entladung, Montage und Einräumen in der neuen Wohnung.',
          pts: ['Kostenloser technischer Vor-Ort-Termin', 'Kartons, Luftpolsterfolie und Decken inklusive', 'Möbeldemontage und -montage', 'Hilfe bei der Einrichtung nach Ankunft'],
        },
        {
          id: 'entreprise',
          title: 'Firmenumzüge',
          desc: 'Büros, Besprechungsräume, Archive, IT-Server: Planung außerhalb der Geschäftszeiten zur Minimierung von Unterbrechungen. Direkte Abstimmung mit Ihrem Facility Manager.',
          pts: ['Detaillierter Zeitplan eine Woche vorher', 'Systematische Kennzeichnung und Nummerierung', 'Sichere Handhabung der IT-Ausstattung', 'Fortschrittsberichte in jeder Phase'],
        },
        {
          id: 'transfert',
          title: 'Spezialisierte Transfers',
          desc: 'Öffentliche Verwaltungen, Botschaften, NGOs, Industrieprojekte: Erfahrung mit spezifischen Regeln (Inventare, Unterschriften, Siegel, Zollgenehmigungen, erhöhte Sicherheit).',
          pts: ['Konforme Inventarverfahren', 'Autorisierte und eingewiesene Teams', 'Fotodokumentation und Unterschrift', 'Abstimmung mit Ihrer internen Logistik'],
        },
        {
          id: 'manutention',
          title: 'Spezialisierte Handhabung',
          desc: 'Tresore, Industrieanlagen, Klaviere, Kunstwerke, Luxusmöbel: Schwere, zerbrechliche oder wertvolle Gegenstände erfordern spezielles Material (Hubwagen, Gurte, Möbellifte) und erfahrene Operatoren.',
          pts: ['Fallstudien und Hebepläne', 'Geeignetes Material (Hubwagen, Lastenaufzug)', 'Zusatzversicherung für Wertgegenstände', 'Maßgeschneiderte Decken und Kisten'],
        },
      ],
    },
    process: {
      eyebrow: 'Unser Ablauf',
      title: 'Sieben klare Schritte – vom Angebot bis zum Wohnzimmerglas am Platz',
      description:
        'Unsere Methode ist bewährt. Sie vermeidet böse Überraschungen, Verzögerungen und Bruch. Sie wissen jederzeit, was passiert und wer was tut.',
      steps: [
        { num: '01', title: 'Anfrage und Richtangebot', desc: 'Sie füllen das Formular aus oder rufen uns an. Wir vereinbaren einen Bewertungstermin. Bei kleinen Umzügen kann ein Richtangebot telefonisch erstellt werden.' },
        { num: '02', title: 'Technischer Termin und Festangebot', desc: 'Unser Teamleiter kommt vor Ort, misst Volumen, erkennt Einschränkungen (Treppen, Aufzug, Parkplatz, Spezialobjekte) und erstellt ein festes, detailliertes Angebot.' },
        { num: '03', title: 'Bestätigung und Vorbereitung', desc: 'Sie bestätigen das Angebot. Wir liefern Kartons, Luftpolsterfolie und Decken. Ein präziser Zeitplan (Abfahrtszeit, Teams, Beladereihenfolge) wird mitgeteilt.' },
        { num: '04', title: 'Verpackung', desc: 'Das Team verpackt und kennzeichnet Zerbrechliches, demontiert komplexe Möbel und schützt Mobiliar mit Spezialdecken. Jeder Karton wird nummeriert.' },
        { num: '05', title: 'Beladung und Transport', desc: 'Methodische Beladung nach Kategorie (Kartons, Möbel, Zerbrechliches). Sicherer Transport mit Zurrgurten. GPS-Tracking auf langen Strecken.' },
        { num: '06', title: 'Entladung und Montage', desc: 'Entladung unter Leitung unseres Verantwortlichen. Möbelmontage und Platzierung nach Ihrem Plan. Entsorgung der Verpackung.' },
        { num: '07', title: 'Endkontrolle und Unterschrift', desc: 'Gemeinsame Abschlussbegehung zur Bestätigung. Unterzeichnung des Übergabeprotokolls. Fotoreport auf Wunsch.' },
      ],
    },
    fleet: {
      eyebrow: 'Unsere Flotte',
      title: 'Fahrzeuge für jedes Volumen und jeden Gütetyp',
      description:
        'Unsere Flotte wird regelmäßig von unseren technischen Teams gewartet. Alle Fahrzeuge werden vor jedem Umzug geprüft (Bremsen, Reifen, Zurrgurte, Sauberkeit). Keine Güter werden in unvorbereiteten Fahrzeugen transportiert.',
      items: [
        { title: 'Kleine Transporter (3-6 m³)', desc: 'Studios, Teiliumzüge, schnelle Stadtlieferungen.' },
        { title: 'Kastenwagen (12-20 m³)', desc: '1- und 2-Zimmer-Wohnungen, Archiv- und Büromöbeltransport.' },
        { title: 'Lkw 20-30 m³', desc: '3- und 4-Zimmer-Wohnungen, erste Familienhäuser.' },
        { title: 'Lkw 40-50 m³', desc: 'Villen, komplette Büros, langstreckige Überlandumzüge.' },
        { title: 'Sattelzug-Lkw', desc: 'Große Industrietransfers, schweres Mobiliar, Container.' },
      ],
    },
    packaging: {
      eyebrow: 'Verpackung & Schutz',
      title: 'Ihre Güter verdienen mehr als ein einfaches Tuch',
      description:
        'Verpackung ist das Geheimnis eines bruchfreien Umzugs. Wir liefern und wenden Verpackungen an, die auf jede Gütekategorie abgestimmt sind.',
      items: [
        { title: 'Standardkartons', desc: 'Für Bücher, Kleidung, leichtes Geschirr. Verstärkter Boden.' },
        { title: 'Luftpolsterfolie', desc: 'Für zerbrechliches Geschirr, Spiegel, Rahmen, Flachbildschirme.' },
        { title: 'Umzugsdecken', desc: 'Für großes Mobiliar (Sofa, Schrank, Tisch).' },
        { title: 'Maßkisten', desc: 'Für Kunstwerke, Instrumente, Wertgegenstände.' },
        { title: 'Gurte', desc: 'Zur Befestigung und zum Heben schweren oder sperrigen Mobiliars.' },
        { title: 'Stretchfolie', desc: 'Für Büromöbel und Palettierung.' },
        { title: 'Bücherkartons', desc: 'Kleines Format, damit sie nicht zu schwer werden.' },
        { title: 'Tragbarer Kleiderschrank', desc: 'Für hängende Kleidung, ohne zu knittern.' },
      ],
    },
    form: {
      eyebrow: 'Angebot anfordern',
      title: 'Beschreiben Sie Ihren Umzug',
      description:
        'Sie nennen Herkunft, Ziel, Datum und eine grobe Volumenschätzung. Wir melden uns innerhalb von 24 Stunden mit einem Richtangebot und einem Terminvorschlag für die technische Besichtigung.',
      success: 'Ihre Anfrage wurde erfolgreich gesendet! Wir melden uns in Kürze.',
      sending: 'Wird gesendet...',
      submit: 'Meine Angebotsanfrage senden',
      errorGeneric: 'Ihre Angebotsanfrage konnte nicht gesendet werden.',
      errorNetwork: 'Netzwerkfehler. Bitte versuchen Sie es später erneut.',
      fields: {
        cityFrom: { label: 'Abfahrtsstadt', placeholder: 'Bsp: Lomé' },
        cityTo: { label: 'Ankunftsstadt', placeholder: 'Bsp: Accra' },
        quartierFrom: { label: 'Abfahrtsviertel', placeholder: 'Bsp: Adewi' },
        quartierTo: { label: 'Ankunftsviertel', placeholder: 'Bsp: Jamestown' },
        date: { label: 'Umzugsdatum' },
        time: { label: 'Umzugsuhrzeit' },
        knownVolume: { label: 'Kennen Sie das ungefähre Volumen?', yes: 'Ja', no: 'Nein' },
        volume: { label: 'Geschätztes Volumen', placeholder: 'Bsp: 50 m³' },
        name: { label: 'Ihr Nachname', placeholder: '' },
        firstName: { label: 'Ihr Vorname' },
        phone: { label: 'Telefon', placeholder: '+228 ...' },
        address: { label: 'Ihre Adresse', placeholder: 'Ihre vollständige Adresse' },
      },
    },
    faq: {
      eyebrow: 'Umzugs-FAQ',
      title: 'Die häufigsten Fragen',
      items: [
        { question: 'Wie weit im Voraus soll ich meinen Umzug buchen?', answer: 'Für einen Umzug in Lomé reichen in der Regel 7 bis 10 Tage. Für Überlandumzüge 2 bis 3 Wochen einplanen. In der Hochsaison (Juli–September, Monatsende) 3 bis 4 Wochen vorher buchen.' },
        { question: 'Muss ich am Umzugstag anwesend sein?', answer: 'Idealerweise ja, besonders bei der Entladung zur Angabe der Möbelplatzierung. Bei Abwesenheit arbeiten wir mit einem annotierten Plan oder einer Vertrauensperson.' },
        { question: 'Sind meine Güter während des Transports versichert?', answer: 'Ja. Eine Basisversicherung ist inbegriffen. Für hochwertige Güter (Kunstwerke, Industrieanlagen, Tresore) bieten wir optionale Zusatzversicherung mit Wertdeklaration.' },
        { question: 'Übernehmen Sie Demontage und Montage?', answer: 'Ja, in unseren Standardleistungen enthalten. Betten, Schränke, Schreibtische, Regale: wir demontieren, transportieren und montieren identisch. Ca. 20–40 Minuten pro komplexem Möbelstück.' },
        { question: 'Können Sie einen internationalen Umzug durchführen?', answer: 'Ja, in der gesamten Subregion (Benin, Ghana, Burkina, Côte d\'Ivoire, Niger, Mali). Für Ziele außerhalb der CEDEAO arbeiten wir mit ausgewählten Logistikpartnern.' },
        { question: 'Was passiert bei Regen am Umzugstag?', answer: 'Wir entscheiden gemeinsam. Bei gefährlichem Wetter verschieben wir kostenfrei. Andernfalls setzen wir wasserdichte Planen und zusätzliche Decken ein.' },
        { question: 'Wie erfolgt die Zahlung?', answer: '30 % bei Angebotsunterzeichnung zur Slot-Reservierung, 70 % nach Abschluss nach Validierung des Übergabeprotokolls. Zahlung per Überweisung, Mobile Money oder bar.' },
      ],
    },
    finalCta: {
      title: 'Planen wir Ihren Umzug gemeinsam',
      description:
        'Kostenloser technischer Termin und detailliertes unverbindliches Angebot. Unser Team meldet sich innerhalb von 24 Stunden für einen Termin.',
      btnAdvisor: 'Mit einem Berater sprechen',
      btnServices: 'Alle Dienstleistungen ansehen',
    },
  },
  AR: {
    intro: {
      eyebrow: 'الخدمة باختصار',
      title:
        'الانتقال في توغو باطمئنان: لوجستيات منظمة، فرق مدربة، ممتلكات محمية.',
      paragraphs: [
        'الانتقال من أكثر اللحظات إرهاقاً في حياة الأسرة أو المؤسسة. صناديق غير محمية، فرق عشوائية، شاحنات غير مناسبة، عروض غامضة، تأخيرات: المفاجآت السيئة شائعة. هيكلت TAOMAN GROUP INVESTMENTS خدمة النقل لإزالة هذه المخاطر.',
        'ننفذ انتقالات الأفراد والشركات والتحويلات المتخصصة (إدارات، صناعية، تجارية) ومناولة الأحجام أو الأوزان الاستثنائية. كل مهمة تسبقها زيارة فنية مجانية وعرض أسعار مفصل. تغطي أسطولنا الانتقالات الحضرية وبين المدن (لومي، كارا، أتاكبامي، سوكودي، دابونغ) وعبر المنطقة الفرعية (UEMOA، CEDEAO). نستخدم تغليفاً مناسباً لكل نوع ممتلكات وفرقنا مدربة على المناولة الآمنة للأشياء الهشة أو الضخمة أو الثقيلة.',
      ],
    },
    types: {
      eyebrow: 'خدماتنا',
      title: 'أربعة أنواع من الانتقال، شرط واحد: صفر كسر',
      description:
        'سواء كنت فرداً يغير شقته، أو مديراً مغترباً، أو شركة صغيرة تنقل مكاتبها، أو إدارة تعيد تنظيم مقرها، نكيّف الفريق والمعدات والأسلوب.',
      items: [
        {
          id: 'particulier',
          title: 'انتقال الأفراد',
          desc: 'استوديوهات، شقق بغرفتين وثلاث وأربع، فيلات: نتولى التغليف، تفكيك الأثاث، التحميل، النقل، التفريغ، إعادة التركيب والترتيب في السكن الجديد.',
          pts: ['زيارة فنية مجانية في المنزل', 'صناديق، فقاعات هوائية وأغطية مقدمة', 'تفكيك وإعادة تركيب الأثاث', 'مساعدة في الترتيب عند الوصول'],
        },
        {
          id: 'entreprise',
          title: 'انتقال الشركات',
          desc: 'مكاتب، قاعات اجتماعات، أرشيف، خوادم معلوماتية: نخطط خارج ساعات العمل لتقليل الانقطاع. تنسيق مباشر مع مسؤول المرافق.',
          pts: ['جدول مفصل يُسلّم قبل أسبوع', 'وسم وترقيم منهجي', 'مناولة آمنة لمعدات تكنولوجيا المعلومات', 'تقارير تقدم في كل مرحلة'],
        },
        {
          id: 'transfert',
          title: 'تحويلات متخصصة',
          desc: 'إدارات عامة، سفارات، منظمات غير حكومية، مشاريع صناعية: لدينا خبرة في القواعد الخاصة (جرد، توقيعات، أختام، تصاريح جمركية، أمن معزز).',
          pts: ['إجراءات جرد مطابقة', 'فرق مخولة ومُوجّهة', 'توثيق بالصور والتوقيع', 'تنسيق مع لوجستياتكم الداخلية'],
        },
        {
          id: 'manutention',
          title: 'مناولة متخصصة',
          desc: 'خزائن، معدات صناعية، بيانو، أعمال فنية، أثاث فاخر: نقل الأشياء الثقيلة أو الهشة أو عالية القيمة يتطلب معدات خاصة (رافعات، أحزمة، مصاعد أثاث) ومشغلين ذوي خبرة.',
          pts: ['دراسات حالة وخطط رفع', 'معدات مناسبة (رافعة شوكية، مصعد بضائع)', 'تأمين تكميلي للأشياء الثمينة', 'أغطية وصناديق مخصصة'],
        },
      ],
    },
    process: {
      eyebrow: 'عمليتنا',
      title: 'سبع خطوات واضحة، من العرض إلى كأس الصالة في مكانه',
      description:
        'أسلوبنا مجرّب. يتجنب المفاجآت السيئة والتأخير والكسر. تعرف دائماً ما يحدث ومن يفعل ماذا.',
      steps: [
        { num: '01', title: 'طلب وعرض أسعار إرشادي', desc: 'تملأ النموذج أو تتصل بنا. نحدد موعد تقييم. للانتقالات الصغيرة يمكن إصدار عرض إرشادي هاتفياً.' },
        { num: '02', title: 'زيارة فنية وعرض نهائي', desc: 'رئيس الفريق يزور الموقع، يقيس الأحجام، يحدد القيود (سلالم، مصعد، موقف، أشياء خاصة) ويصدر عرضاً نهائياً مفصلاً.' },
        { num: '03', title: 'اعتماد وتحضير', desc: 'تعتمد العرض. نسلم الصناديق والفقاعات والأغطية. يُبلّغكم جدول دقيق (وقت المغادرة، الفرق، ترتيب التحميل).' },
        { num: '04', title: 'تغليف', desc: 'الفريق يغلف ويوسم الهش، يفكك الأثاث المعقد ويحمي الأثاث بأغطية متخصصة. كل صندوق مرقم.' },
        { num: '05', title: 'تحميل ونقل', desc: 'تحميل منهجي حسب الفئة (صناديق ثم أثاث ثم هش). نقل آمن مع تثبيت. تتبع GPS في المسافات الطويلة.' },
        { num: '06', title: 'تفريغ وإعادة تركيب', desc: 'تفريغ بإشراف مسؤولنا. إعادة تركيب الأثاث والوضع حسب مخططكم. إزالة التغليف.' },
        { num: '07', title: 'مراقبة نهائية وتوقيع', desc: 'جولة نهائية مشتركة للتحقق. توقيع محضر الاستلام. تقرير مصور عند الطلب.' },
      ],
    },
    fleet: {
      eyebrow: 'أسطولنا',
      title: 'مركبات مناسبة لكل حجم ونوع ممتلكات',
      description:
        'يُصان أسطولنا بانتظام بواسطة فرقنا التقنية. تُفحص جميع المركبات قبل كل انتقال (فرامل، إطارات، تثبيت، نظافة). لا تُنقل ممتلكات في مركبة غير مُعدّة.',
      items: [
        { title: 'شاحنات صغيرة (3-6 م³)', desc: 'استوديوهات، انتقالات جزئية، توصيل سريع في المدينة.' },
        { title: 'شاحنات مغلقة (12-20 م³)', desc: 'شقق بغرفة أو غرفتين، نقل أرشيف وأثاث مكتبي.' },
        { title: 'شاحنات 20-30 م³', desc: 'شقق بثلاث أو أربع غرف، منازل عائلية أولى.' },
        { title: 'شاحنات 40-50 م³', desc: 'فيلات، مكاتب كاملة، انتقالات بين مدن لمسافات طويلة.' },
        { title: 'شاحنات نصف مقطورة', desc: 'تحويلات صناعية كبيرة، أثاث ثقيل، حاويات.' },
      ],
    },
    packaging: {
      eyebrow: 'تغليف وحماية',
      title: 'ممتلكاتكم تستحق أكثر من قطعة قماش بسيطة',
      description:
        'التغليف سر الانتقال دون كسر. نوفر ونطبق تغليفاً مناسباً لكل فئة ممتلكات.',
      items: [
        { title: 'صناديق قياسية', desc: 'للكتب والملابس وأواني خفيفة. قاع معزز.' },
        { title: 'فقاعات هوائية', desc: 'لأواني هشة ومرايا وإطارات وشاشات مسطحة.' },
        { title: 'أغطية', desc: 'لأثاث كبير (أريكة، خزانة، طاولة).' },
        { title: 'صناديق مخصصة', desc: 'لأعمال فنية وآلات وأشياء ثمينة.' },
        { title: 'أحزمة', desc: 'لتثبيت ورفع أثاث ثقيل أو ضخم.' },
        { title: 'فيلم تمدد', desc: 'لأثاث مكتبي وتعبئة على منصات.' },
        { title: 'صناديق كتب', desc: 'حجم صغير لعدم الثقل الشديد.' },
        { title: 'خزانة ملابس محمولة', desc: 'لملابس معلقة دون تجعيد.' },
      ],
    },
    form: {
      eyebrow: 'طلب عرض أسعار',
      title: 'حدّد تفاصيل انتقالكم',
      description:
        'تعطونا المنشأ والوجهة والتاريخ وفكرة تقريبية عن الحجم. نرد خلال 24 ساعة بعرض إرشادي واقتراح زيارة فنية.',
      success: 'تم إرسال طلبكم بنجاح! سنتواصل معكم قريباً.',
      sending: 'جارٍ الإرسال...',
      submit: 'إرسال طلب عرض الأسعار',
      errorGeneric: 'تعذر إرسال طلب عرض الأسعار.',
      errorNetwork: 'خطأ في الشبكة. أعدوا المحاولة لاحقاً.',
      fields: {
        cityFrom: { label: 'مدينة المغادرة', placeholder: 'مثال: Lomé' },
        cityTo: { label: 'مدينة الوصول', placeholder: 'مثال: Accra' },
        quartierFrom: { label: 'حي المغادرة', placeholder: 'مثال: Adewi' },
        quartierTo: { label: 'حي الوصول', placeholder: 'مثال: Jamestown' },
        date: { label: 'تاريخ الانتقال' },
        time: { label: 'وقت الانتقال' },
        knownVolume: { label: 'هل تعرفون الحجم التقريبي؟', yes: 'نعم', no: 'لا' },
        volume: { label: 'الحجم المقدر', placeholder: 'مثال: 50 م³' },
        name: { label: 'اسم العائلة', placeholder: '' },
        firstName: { label: 'الاسم الأول' },
        phone: { label: 'الهاتف', placeholder: '+228 ...' },
        address: { label: 'عنوانكم', placeholder: 'عنوانكم الكامل' },
      },
    },
    faq: {
      eyebrow: 'أسئلة شائعة – الانتقال',
      title: 'الأسئلة الأكثر تكراراً',
      items: [
        { question: 'كم مسبقاً يجب أن أحجز الانتقال؟', answer: 'لانتقال في Lomé، 7 إلى 10 أيام تكفي عادة. للانتقالات بين المدن، خططوا لأسبوعين إلى ثلاثة. في الموسم الذروة (يوليو–سبتمبر، نهاية الشهر)، احجزوا قبل 3 إلى 4 أسابيع.' },
        { question: 'هل يجب أن أكون حاضراً يوم الانتقال؟', answer: 'من الأفضل نعم، خاصة عند التفريغ لتحديد مواقع الأثاث. عند الغياب يمكننا العمل بمخطط موضّح أو مع طرف موثوق.' },
        { question: 'هل ممتلكاتي مؤمّنة أثناء النقل؟', answer: 'نعم. تأمين أساسي مشمول. للأشياء عالية القيمة (أعمال فنية، معدات صناعية، خزائن) نقدم تأميناً تكميلياً اختيارياً مع إقرار بالقيمة.' },
        { question: 'هل تتولون التفكيك وإعادة التركيب؟', answer: 'نعم، وهو مشمول في خدماتنا القياسية. أسرة، خزائن، مكاتب، رفوف: نفكك وننقل ونعيد التركيب كما كان. احسبوا 20–40 دقيقة لكل قطعة معقدة.' },
        { question: 'هل يمكنكم إدارة انتقال دولي؟', answer: 'نعم، نعمل في المنطقة الفرعية بأكملها (بنين، غانا، بوركينا، ساحل العاج، النيجر، مالي). لوجهات خارج CEDEAO نعمل مع شركاء لوجستيين مختارين.' },
        { question: 'ماذا يحدث إذا أمطرت يوم الانتقال؟', answer: 'نقرر بالاتفاق. إذا جعل الطقس النقل خطيراً على ممتلكاتكم، نؤجل دون رسوم. وإلا نستخدم أغطية مقاومة للماء وأغطية إضافية.' },
        { question: 'ما طريقة الدفع؟', answer: '30% عند توقيع العرض لحجز الموعد، 70% عند الانتهاء بعد اعتمادكم محضر الاستلام. الدفع بالتحويل أو Mobile Money أو نقداً.' },
      ],
    },
    finalCta: {
      title: 'لنحضّر انتقالكم معاً',
      description:
        'زيارة فنية مجانية وعرض مفصل دون التزام. فريقنا يرد خلال 24 ساعة لتحديد موعد.',
      btnAdvisor: 'التحدث مع مستشار',
      btnServices: 'عرض جميع الخدمات',
    },
  },
  ZH: {
    intro: {
      eyebrow: '服务简介',
      title: '在多哥安心搬迁：规范物流、专业团队、财物妥善保护。',
      paragraphs: [
        '搬迁是家庭或企业生活中压力最大的时刻之一。包装不当、临时拼凑的团队、不合适的卡车、模糊的报价、延误：意外时有发生。TAOMAN GROUP INVESTMENTS 已将其搬迁服务结构化，以消除这些风险。',
        '我们承办个人搬迁、企业搬迁、专业转运（行政、工业、商业）以及超规格体积或重量的搬运。每项任务前均提供免费技术勘察和详细报价。 我们的车队覆盖市内搬迁、城际线路（Lomé、Kara、Atakpamé、Sokodé、Dapaong）及次区域业务（UEMOA、CEDEAO）。我们使用适合各类物品的包装材料，团队经过培训，可安全搬运易碎、笨重或沉重物品。',
      ],
    },
    types: {
      eyebrow: '我们的服务',
      title: '四种搬迁类型，同一要求：零破损',
      description:
        '无论您是换房的个人、外派高管、搬迁办公室的中小企业，还是重组办公场所的行政机构，我们都会调整团队、设备和方案。',
      items: [
        {
          id: 'particulier',
          title: '个人搬迁',
          desc: '单间、两室、三室、四室公寓及别墅：我们负责包装、家具拆装、装车、运输、卸货、组装及在新住所摆放。',
          pts: ['免费上门技术勘察', '提供纸箱、气泡膜和防护毯', '家具拆装', '到达后协助布置'],
        },
        {
          id: 'entreprise',
          title: '企业搬迁',
          desc: '办公室、会议室、档案、IT 服务器：我们在非工作时间规划，以尽量减少业务中断。与您的行政后勤负责人直接协调。',
          pts: ['提前一周交付详细计划', '系统化贴标和编号', '安全搬运 IT 设备', '各阶段进度报告'],
        },
        {
          id: 'transfert',
          title: '专业转运',
          desc: '公共行政机构、使馆、非政府组织、工业项目：我们熟悉特定规则（盘点、签字、封条、海关许可、加强安保）。',
          pts: ['合规盘点程序', '持证并已 briefing 的团队', '拍照记录与签字', '与您内部物流协调'],
        },
        {
          id: 'manutention',
          title: '专业搬运',
          desc: '保险箱、工业设备、钢琴、艺术品、豪华家具：搬运沉重、易碎或高价值物品需要专用设备（托盘车、绑带、家具升降机）和经验丰富的操作员。',
          pts: ['案例研究与吊装方案', '适配设备（托盘车、货梯）', '贵重物品补充保险', '定制防护毯和木箱'],
        },
      ],
    },
    process: {
      eyebrow: '我们的流程',
      title: '七个清晰步骤，从报价到客厅玻璃杯归位',
      description:
        '我们的方法经过验证，可避免意外、延误和破损。您随时清楚进展及负责人。',
      steps: [
        { num: '01', title: '申请与参考报价', desc: '填写表格或致电我们。我们安排上门评估。小型搬迁可通过电话出具参考报价。' },
        { num: '02', title: '技术勘察与正式报价', desc: '团队负责人上门测量体积，识别限制条件（楼梯、电梯、停车、特殊物品）并出具正式详细报价。' },
        { num: '03', title: '确认与准备', desc: '您确认报价。我们交付纸箱、气泡膜和防护毯。向您提供精确计划（出发时间、调配团队、装车顺序）。' },
        { num: '04', title: '包装', desc: '团队包装并贴标易碎品，拆卸复杂家具，用专业防护毯保护家具。每个纸箱编号。' },
        { num: '05', title: '装车与运输', desc: '按类别有序装车（纸箱、家具、易碎品）。安全运输并固定。长途路线 GPS 跟踪。' },
        { num: '06', title: '卸货与组装', desc: '由负责人监督卸货。按您的平面图组装家具并摆放。清理包装材料。' },
        { num: '07', title: '最终检查与签收', desc: '共同最终检查确认一切就位。签署验收报告。应要求提供照片报告。' },
      ],
    },
    fleet: {
      eyebrow: '我们的车队',
      title: '适应各种体积和物品类型的车辆',
      description:
        '车队由技术团队定期维护。每次搬迁前检查所有车辆（刹车、轮胎、固定装置、清洁）。不在未准备的车辆中运输物品。',
      items: [
        { title: '小型厢式车（3-6 立方米）', desc: '单间、部分搬迁、市内快速配送。' },
        { title: '厢式货车（12-20 立方米）', desc: '一居、两居公寓，档案及办公家具转运。' },
        { title: '卡车 20-30 立方米', desc: '三居、四居公寓，首批家庭住宅。' },
        { title: '卡车 40-50 立方米', desc: '别墅、完整办公室、长途城际搬迁。' },
        { title: '半挂卡车', desc: '大型工业转运、重型家具、集装箱。' },
      ],
    },
    packaging: {
      eyebrow: '包装与保护',
      title: '您的物品值得更好的保护',
      description:
        '包装是零破损搬迁的关键。我们提供并应用适合各类物品的包装材料。',
      items: [
        { title: '标准纸箱', desc: '用于书籍、衣物、轻餐具。加固底部。' },
        { title: '气泡膜', desc: '用于易碎餐具、镜子、画框、平板电视。' },
        { title: '防护毯', desc: '用于大型家具（沙发、衣柜、桌子）。' },
        { title: '定制木箱', desc: '用于艺术品、乐器、贵重物品。' },
        { title: '绑带', desc: '用于固定和吊装沉重或笨重家具。' },
        { title: '拉伸膜', desc: '用于办公家具和托盘包装。' },
        { title: '书籍专用箱', desc: '小尺寸避免过重。' },
        { title: '便携式挂衣柜', desc: '用于悬挂衣物，免皱褶。' },
      ],
    },
    form: {
      eyebrow: '申请报价',
      title: '说明您的搬迁需求',
      description:
        '请提供起运地、目的地、日期及大致体积。我们将在 24 小时内回复参考报价并提议技术勘察。',
      success: '您的申请已成功发送！我们将尽快与您联系。',
      sending: '发送中...',
      submit: '发送我的报价申请',
      errorGeneric: '无法发送您的报价申请。',
      errorNetwork: '网络错误，请稍后重试。',
      fields: {
        cityFrom: { label: '出发城市', placeholder: '例：Lomé' },
        cityTo: { label: '到达城市', placeholder: '例：Accra' },
        quartierFrom: { label: '出发街区', placeholder: '例：Adewi' },
        quartierTo: { label: '到达街区', placeholder: '例：Jamestown' },
        date: { label: '搬迁日期' },
        time: { label: '搬迁时间' },
        knownVolume: { label: '您是否知道大致体积？', yes: '是', no: '否' },
        volume: { label: '估计体积', placeholder: '例：50 立方米' },
        name: { label: '您的姓氏', placeholder: '' },
        firstName: { label: '您的名字' },
        phone: { label: '电话', placeholder: '+228 ...' },
        address: { label: '您的地址', placeholder: '您的完整地址' },
      },
    },
    faq: {
      eyebrow: '搬迁常见问题',
      title: '最常遇到的问题',
      items: [
        { question: '应提前多久预订搬迁？', answer: '在 Lomé 搬迁通常提前 7 至 10 天即可。城际搬迁请预留 2 至 3 周。旺季（7–9 月、月末）请提前 3 至 4 周预订。' },
        { question: '搬迁当天我是否需要在场？', answer: '最好在场，尤其在卸货时指明家具位置。若您不在，我们可根据标注平面图或与可信第三方协作。' },
        { question: '运输期间我的物品是否投保？', answer: '是。含基础保险。高价值物品（艺术品、工业设备、保险箱）可提供可选补充保险并申报价值。' },
        { question: '你们是否负责拆装？', answer: '是，已包含在标准服务中。床、衣柜、办公桌、书架：我们拆装、运输并原样组装。复杂家具约需 20–40 分钟。' },
        { question: '能否办理国际搬迁？', answer: '可以，我们在整个次区域运营（贝宁、加纳、布基纳、科特迪瓦、尼日尔、马里）。CEDEAO 以外目的地我们与精选物流伙伴合作。' },
        { question: '搬迁当天下雨怎么办？', answer: '我们共同决定。若天气使运输对您物品构成危险，我们免费改期。否则使用防水篷布和额外防护毯。' },
        { question: '付款方式是什么？', answer: '签署报价时付 30% 锁定档期，服务结束后您确认验收报告再付 70%。支持转账、Mobile Money 或现金。' },
      ],
    },
    finalCta: {
      title: '一起准备您的搬迁',
      description:
        '免费技术勘察，详细报价无约束。我们的团队将在 24 小时内回复并安排时间。',
      btnAdvisor: '咨询顾问',
      btnServices: '查看所有服务',
    },
  },
};

export const getDevisMovingTranslations = (language) => DEVIS_MOVING[language] || DEVIS_MOVING.FR;
export default DEVIS_MOVING;
