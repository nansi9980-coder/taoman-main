/**
 * Traductions complètes de LavageAutoDevisPage pour les 7 langues du site.
 * Utilisé via getCarwashTranslations(language).
 */

const CARWASH = {
  FR: {
    intro: {
      eyebrow: 'Le service en quelques mots',
      title: 'Un lavage automobile pensé pour durer, pas seulement pour briller.',
      paragraphs: [
        "TAOMAN GROUP INVESTMENTS opère un service de lavage automobile haut de gamme destiné aux particuliers, aux flottes d'entreprise et aux investisseurs qui souhaitent maintenir la valeur de leurs véhicules. Chaque prestation est réalisée par des équipes formées, avec un matériel professionnel et des produits sélectionnés pour leur efficacité comme pour leur respect de la carrosserie.",
        "Notre conviction est simple : laver un véhicule n'est pas une dépense, c'est un acte d'entretien qui prolonge la durée de vie de la carrosserie, des sièges, des moquettes et des optiques. Un véhicule régulièrement entretenu se revend mieux, consomme moins en frais d'usure et reflète une image plus professionnelle dans la vie quotidienne ou en clientèle. Nous proposons trois formules complémentaires – Lavage Intérieur, Lavage Extérieur et Lavage Général – ainsi qu'une option à domicile pour les clients qui ne peuvent pas se déplacer. Chaque formule est encadrée par une checklist, un délai annoncé et un contrôle qualité avant remise du véhicule.",
      ],
    },
    formulas: {
      eyebrow: 'Nos formules',
      title: "Trois formules, un seul niveau d'exigence",
      description:
        "Choisissez la formule qui correspond à l'état actuel de votre véhicule et au résultat que vous attendez. Toutes les formules incluent un contrôle visuel par notre responsable d'équipe avant la restitution.",
      recommendedBadge: 'Recommandé',
      items: [
        {
          id: 'integral',
          title: 'Lavage Intérieur',
          duration: '45 – 75 min',
          desc: "Idéal pour les véhicules dont l'extérieur reste correct mais dont l'habitacle a besoin d'un vrai rafraîchissement : poussières, miettes, taches, odeurs.",
          points: [
            'Aspirateur professionnel des sièges, tapis, coffre',
            'Nettoyage vapeur des zones sensibles',
            'Shampouinage sièges et moquettes (en option)',
            'Tableau de bord, console et plastiques',
            'Vitres intérieures et miroirs',
            'Désodorisation finale microfibre',
          ],
        },
        {
          id: 'extreme',
          title: 'Lavage Général',
          duration: '90 – 150 min',
          desc: "La formule la plus complète : intérieur + extérieur. Recommandée pour préparer un long trajet, une réception client ou simplement remettre un véhicule au niveau d'un véhicule neuf.",
          points: [
            'Tout le Lavage Intérieur inclus',
            'Tout le Lavage Extérieur inclus',
            'Polissage plastiques extérieurs',
            'Traitement déperlant des vitres',
            'Aspiration approfondie du coffre',
            'Brillance finale par cire express',
          ],
        },
        {
          id: 'standard',
          title: 'Lavage Extérieur',
          duration: '30 – 60 min',
          desc: 'Conçu pour les véhicules qui roulent beaucoup en environnement poussiéreux ou pluvieux et qui demandent un rafraîchissement régulier de la carrosserie.',
          points: [
            'Pré-lavage haute pression',
            'Shampooing carrosserie microfibre',
            'Nettoyage jantes, pneus et passages de roue',
            'Rinçage haute pression et séchage',
            'Brillant pneus et lustre carrosserie',
            'Vitres et miroirs extérieurs',
          ],
        },
      ],
    },
    process: {
      eyebrow: 'Notre processus',
      title: 'Du devis au véhicule restitué, étape par étape',
      description:
        "Chaque prestation suit la même méthode rigoureuse. Pas d'improvisation. Pas de surprise. Chaque collaborateur connaît sa checklist et son ordre d'intervention.",
      steps: [
        { num: '01', title: 'Demande de devis', desc: "Vous remplissez le formulaire ou nous contactez par téléphone. Nous notons le type de véhicule, l'état, l'urgence et le lieu d'intervention souhaité (centre TAOMAN GROUP INVESTMENTS ou domicile)." },
        { num: '02', title: 'Confirmation et planning', desc: 'Nous validons la formule la plus adaptée à votre véhicule, vous communiquons un créneau et un délai indicatif. Vous recevez une confirmation écrite avec le détail du périmètre.' },
        { num: '03', title: 'Accueil et inspection', desc: "À l'arrivée, le responsable d'équipe inspecte le véhicule avec vous, identifie les zones nécessitant un soin particulier (taches anciennes, plastiques jaunis, jantes très sales) et note les éventuels défauts existants." },
        { num: '04', title: 'Exécution par formule', desc: "L'équipe applique la checklist correspondant à la formule choisie. Les produits sont sélectionnés en fonction des matériaux (cuir, alcantara, tissu, plastique souple) pour ne jamais agresser les surfaces." },
        { num: '05', title: 'Contrôle qualité', desc: "Avant la restitution, un second collaborateur effectue un contrôle visuel sur l'ensemble des points de la checklist. Si une zone n'est pas conforme, elle est immédiatement reprise." },
        { num: '06', title: 'Restitution et satisfaction', desc: "Vous récupérez le véhicule sur le parking ou à domicile, nous parcourons ensemble les points clés du lavage, et vous donnez votre retour. En cas d'insatisfaction, nous corrigeons sans frais supplémentaires." },
      ],
    },
    vehicles: {
      eyebrow: 'Pour quel véhicule ?',
      title: 'Citadine, berline, SUV, 4x4, utilitaire ou moto : nous adaptons.',
      paragraphs: [
        "Le lavage n'est pas un service uniforme. Une citadine en zone urbaine ne subit pas les mêmes agressions qu'un 4x4 qui roule en piste ou qu'un utilitaire de livraison qui sort tous les jours. Nos équipes adaptent la formule, le temps de prestation et les produits selon le type de véhicule, son usage et son état.",
        "Pour les flottes d'entreprise (10 véhicules et plus), nous proposons des contrats d'entretien périodiques, des tarifs préférentiels, un planning d'intervention sur site et un reporting mensuel à votre service moyens généraux.",
      ],
      items: [
        { title: 'Citadine', desc: 'Petits volumes, accès facile. Idéal pour un lavage rapide hebdomadaire ou bi-hebdomadaire.' },
        { title: 'Berline', desc: 'Soins particuliers pour les sièges en tissu/cuir et les optiques. Lavage général recommandé tous les 15 jours.' },
        { title: 'Compacte', desc: 'Compromise volume/maniabilité. Adaptée à toutes les formules sans contraintes.' },
        { title: 'SUV', desc: 'Plus de surface vitrée, jantes complexes, marche-pied à nettoyer. Prévoir 20 minutes supplémentaires.' },
        { title: '4x4', desc: 'Souvent boueux, dessous très exposés. Pré-lavage haute pression obligatoire pour décoller la terre sèche.' },
        { title: 'Utilitaire', desc: 'Carrosserie souvent rayée, cargo intérieur à dépoussiérer. Forfaits flotte adaptés.' },
        { title: 'Moto', desc: 'Lavage manuel uniquement, jamais en automatique. Soin sur les chromes, jantes, échappement.' },
        { title: 'Pick-up', desc: 'Benne à nettoyer en plus du véhicule. Forfaits avec ou sans benne disponibles.' },
      ],
    },
    location: {
      eyebrow: 'Où voulez-vous être lavé(e) ?',
      title: 'Lavage à domicile ou au centre TAOMAN GROUP INVESTMENTS : à vous de choisir.',
      description:
        "Les deux options ont leurs avantages. Nous vous proposons le choix selon votre emploi du temps, la disponibilité d'eau et d'espace, et le niveau de service souhaité.",
      home: {
        title: 'Lavage à domicile',
        description:
          "Notre équipe se déplace chez vous avec son matériel autonome (réserve d'eau, aspirateur, produits). Vous gagnez du temps : pas de déplacement, pas d'attente. Idéal pour les familles, les chefs d'entreprise et les expatriés.",
        bullets: [
          "Aucune file d'attente",
          'Travail sous votre supervision possible',
          'Idéal pour 2 véhicules ou plus en même temps',
          'Frais de déplacement transparents selon la zone',
        ],
      },
      center: {
        title: 'Centre de lavage TAOMAN GROUP INVESTMENTS',
        description:
          "Notre centre dispose d'équipements lourds : haute pression industrielle, bras d'aspiration, zones couvertes et éclairées. Vous patientez dans un espace dédié pendant que votre véhicule est traité.",
        bullets: [
          'Matériel professionnel plus puissant',
          'Tarifs réduits par rapport au domicile',
          "Espace d'attente confortable",
          'Disponible sans rendez-vous (selon affluence)',
        ],
      },
    },
    form: {
      eyebrow: 'Demander un devis',
      title: 'Remplissez votre demande en 2 minutes',
      description:
        'Renseignez les informations sur votre véhicule et notre équipe vous recontacte sous 24 heures avec un créneau et un tarif ferme.',
      success: 'Votre devis a été envoyé avec succès ! Nous vous recontacterons sous peu.',
      sending: 'Envoi en cours...',
      submit: 'Envoyer ma demande de devis',
      errorGeneric: "Impossible d'envoyer votre demande de devis.",
      errorNetwork: 'Erreur réseau. Réessayez plus tard.',
      selectPlaceholder: 'Sélectionner',
      fields: {
        washType: { label: 'Type de lavage', options: ['Lavage Intérieur', 'Lavage Extérieur', 'Lavage Général'] },
        wish: { label: 'Vous souhaitez', options: ['Un lavage à domicile', 'Au centre de lavage TAOMAN GROUP INVESTMENTS'] },
        vehicleType: { label: 'Type de véhicule', options: ['Citadine', 'Berline', 'Compacte', 'SUV', '4x4', 'Utilitaire', 'Moto'] },
        brand: { label: 'Marque et modèle', placeholder: 'Ex: Toyota Corolla' },
        date: { label: 'Date souhaitée' },
        time: { label: 'Heure souhaitée' },
        name: { label: 'Votre nom', placeholder: 'Votre nom complet' },
        phone: { label: 'Téléphone', placeholder: '+228 ...' },
        address: { label: 'Votre adresse', placeholder: 'Votre adresse complète' },
        notes: { label: 'Remarques additionnelles', placeholder: "Précisez l'état du véhicule, les zones à traiter en priorité, vos contraintes horaires..." },
      },
    },
    sidebar: {
      eyebrow: 'Pourquoi TAOMAN GROUP INVESTMENTS ?',
      title: 'Un service pensé pour la durée de vie de votre véhicule',
      description:
        'Nous ne vendons pas seulement un lavage : nous vendons un soin régulier qui protège votre carrosserie, votre habitacle et la valeur de revente de votre véhicule.',
      equipmentTitle: 'Équipement professionnel',
      equipmentDesc:
        'Haute pression contrôlée, aspirateurs industriels, gants microfibre certifiés, produits adaptés aux matériaux modernes.',
    },
    faq: {
      eyebrow: 'FAQ Lavage',
      title: 'Vos questions, nos réponses claires',
      items: [
        { question: 'Quelle est la différence entre un lavage classique et un lavage TAOMAN GROUP INVESTMENTS ?', answer: "Un lavage classique se limite souvent à un passage d'eau et de mousse. Un lavage TAOMAN GROUP INVESTMENTS repose sur une checklist, des produits adaptés au matériau, un contrôle qualité et une politique de reprise en cas d'insatisfaction. Nous traitons votre véhicule comme s'il s'agissait du nôtre." },
        { question: 'Combien de fois par mois dois-je laver mon véhicule ?', answer: 'En conditions normales urbaines, un Lavage Général tous les 15 jours suffit, complété par un Lavage Extérieur intermédiaire. En conditions agressives (chantier, piste, météo très poussiéreuse), un passage hebdomadaire est recommandé.' },
        { question: 'Le lavage haute pression abîme-t-il la carrosserie ?', answer: "Non, à condition d'utiliser une pression contrôlée et la bonne distance d'application. Nos opérateurs sont formés à cela. Une haute pression mal utilisée peut effectivement décoller un vernis ou un mastic ancien : c'est pourquoi nous inspectons toujours le véhicule avant intervention." },
        { question: 'Mes sièges en tissu sont-ils risqués au shampouinage ?', answer: "Non. Nous utilisons un shampoing doux, un brossage léger et un aspirateur extracteur qui retire l'humidité résiduelle. Vos sièges sont secs en quelques heures et n'auront ni odeur ni rétrécissement." },
        { question: 'Pouvez-vous laver une moto à domicile ?', answer: 'Oui. La moto demande un soin particulier (chromes, échappement, jantes complexes) et un lavage à la main est obligatoire. Notre forfait moto inclut tout cela.' },
        { question: 'Quels moyens de paiement acceptez-vous ?', answer: "Mobile Money (Tmoney, Flooz), espèces, virement bancaire et carte. Une facture vous est remise pour chaque prestation, utile pour les flottes d'entreprise." },
      ],
    },
    finalCta: {
      title: 'Votre véhicule mérite un soin professionnel',
      description:
        'Demandez un devis personnalisé en moins de 2 minutes. Notre équipe revient vers vous sous 24 heures avec un tarif clair et un créneau ferme.',
      btnServices: 'Voir tous les services',
      btnAdvisor: 'Parler à un conseiller',
    },
  },

  EN: {
    intro: {
      eyebrow: 'The service in brief',
      title: 'Car washing built to last, not just to shine.',
      paragraphs: [
        'TAOMAN GROUP INVESTMENTS operates a premium car wash service for individuals, corporate fleets and investors who want to preserve their vehicles\' value. Every service is delivered by trained teams, with professional equipment and products chosen for effectiveness and respect for the bodywork.',
        'Our belief is simple: washing a vehicle is not an expense, it is maintenance that extends the life of the bodywork, seats, carpets and lights. A regularly maintained vehicle resells better, wears less and projects a more professional image in daily life or with clients. We offer three complementary packages – Interior Wash, Exterior Wash and Full Wash – plus an at-home option for clients who cannot travel. Each package follows a checklist, a stated timeframe and a quality check before handover.',
      ],
    },
    formulas: {
      eyebrow: 'Our packages',
      title: 'Three packages, one standard of excellence',
      description:
        'Choose the package that matches your vehicle\'s current condition and the result you expect. Every package includes a visual check by our team leader before handover.',
      recommendedBadge: 'Recommended',
      items: [
        { id: 'integral', title: 'Interior Wash', duration: '45 – 75 min', desc: 'Ideal when the exterior still looks fine but the cabin needs a real refresh: dust, crumbs, stains and odours.', points: ['Professional vacuuming of seats, carpets and boot', 'Steam cleaning of sensitive areas', 'Seat and carpet shampooing (optional)', 'Dashboard, console and plastics', 'Interior windows and mirrors', 'Final microfibre deodorising'] },
        { id: 'extreme', title: 'Full Wash', duration: '90 – 150 min', desc: 'Our most complete package: interior + exterior. Recommended before a long trip, a client visit or to restore a like-new finish.', points: ['Full Interior Wash included', 'Full Exterior Wash included', 'Exterior plastic polishing', 'Water-repellent window treatment', 'Deep boot vacuuming', 'Express wax final shine'] },
        { id: 'standard', title: 'Exterior Wash', duration: '30 – 60 min', desc: 'Designed for vehicles that drive often in dusty or rainy conditions and need regular bodywork refresh.', points: ['High-pressure pre-wash', 'Microfibre body shampoo', 'Wheels, tyres and wheel arches', 'High-pressure rinse and drying', 'Tyre shine and body gloss', 'Exterior windows and mirrors'] },
      ],
    },
    process: {
      eyebrow: 'Our process',
      title: 'From quote to handover, step by step',
      description: 'Every service follows the same rigorous method. No improvisation. No surprises. Every team member knows their checklist and order of work.',
      steps: [
        { num: '01', title: 'Quote request', desc: 'You fill in the form or contact us by phone. We note the vehicle type, condition, urgency and preferred location (TAOMAN GROUP INVESTMENTS centre or at home).' },
        { num: '02', title: 'Confirmation and scheduling', desc: 'We confirm the most suitable package, share a time slot and indicative duration. You receive written confirmation with full scope details.' },
        { num: '03', title: 'Welcome and inspection', desc: 'On arrival, the team leader inspects the vehicle with you, identifies areas needing special care (old stains, yellowed plastics, very dirty wheels) and records any existing defects.' },
        { num: '04', title: 'Service execution', desc: 'The team applies the checklist for the chosen package. Products are selected according to materials (leather, alcantara, fabric, soft plastic) to never damage surfaces.' },
        { num: '05', title: 'Quality control', desc: 'Before handover, a second team member performs a visual check on every checklist point. Any non-conforming area is immediately reworked.' },
        { num: '06', title: 'Handover and satisfaction', desc: 'You collect the vehicle in the car park or at home, we review the key points together, and you share feedback. If dissatisfied, we correct at no extra charge.' },
      ],
    },
    vehicles: {
      eyebrow: 'Which vehicle?',
      title: 'City car, sedan, SUV, 4x4, van or motorcycle: we adapt.',
      paragraphs: [
        'Washing is not a one-size-fits-all service. A city car in an urban area does not face the same wear as an off-roader on tracks or a delivery van on the road every day. Our teams adapt the package, service time and products to vehicle type, use and condition.',
        'For corporate fleets (10 vehicles or more), we offer periodic maintenance contracts, preferential rates, on-site scheduling and monthly reporting to your facilities team.',
      ],
      items: [
        { title: 'City car', desc: 'Compact size, easy access. Ideal for a quick weekly or bi-weekly wash.' },
        { title: 'Sedan', desc: 'Special care for fabric/leather seats and lights. Full wash recommended every 15 days.' },
        { title: 'Compact', desc: 'Balance of size and manoeuvrability. Suitable for all packages without constraints.' },
        { title: 'SUV', desc: 'More glass area, complex wheels, running boards to clean. Allow 20 extra minutes.' },
        { title: '4x4', desc: 'Often muddy, heavily exposed underbody. High-pressure pre-wash required to loosen dry mud.' },
        { title: 'Van', desc: 'Often scratched bodywork, cargo area to dust. Fleet packages available.' },
        { title: 'Motorcycle', desc: 'Hand wash only, never automatic. Care for chrome, wheels and exhaust.' },
        { title: 'Pick-up', desc: 'Bed to clean in addition to the cab. Packages with or without bed available.' },
      ],
    },
    location: {
      eyebrow: 'Where would you like to be washed?',
      title: 'At home or at the TAOMAN GROUP INVESTMENTS centre: your choice.',
      description: 'Both options have their advantages. We help you choose based on your schedule, water and space availability, and the service level you want.',
      home: { title: 'At-home wash', description: 'Our team comes to you with self-contained equipment (water supply, vacuum, products). You save time: no travel, no waiting. Ideal for families, business owners and expatriates.', bullets: ['No queue', 'Work can be supervised by you', 'Ideal for 2 or more vehicles at once', 'Transparent travel fees by area'] },
      center: { title: 'TAOMAN GROUP INVESTMENTS wash centre', description: 'Our centre has heavy-duty equipment: industrial high pressure, vacuum arms, covered and lit bays. You wait in a dedicated area while your vehicle is treated.', bullets: ['More powerful professional equipment', 'Lower rates than at-home service', 'Comfortable waiting area', 'Walk-in available (subject to capacity)'] },
    },
    form: {
      eyebrow: 'Request a quote', title: 'Complete your request in 2 minutes',
      description: 'Enter your vehicle details and our team will contact you within 24 hours with a time slot and firm price.',
      success: 'Your quote has been sent successfully! We will contact you shortly.',
      sending: 'Sending...', submit: 'Send my quote request',
      errorGeneric: 'Unable to send your quote request.', errorNetwork: 'Network error. Please try again later.',
      selectPlaceholder: 'Select',
      fields: {
        washType: { label: 'Wash type', options: ['Interior Wash', 'Exterior Wash', 'Full Wash'] },
        wish: { label: 'You would like', options: ['An at-home wash', 'At the TAOMAN GROUP INVESTMENTS wash centre'] },
        vehicleType: { label: 'Vehicle type', options: ['City car', 'Sedan', 'Compact', 'SUV', '4x4', 'Van', 'Motorcycle'] },
        brand: { label: 'Make and model', placeholder: 'e.g. Toyota Corolla' },
        date: { label: 'Preferred date' }, time: { label: 'Preferred time' },
        name: { label: 'Your name', placeholder: 'Your full name' },
        phone: { label: 'Phone', placeholder: '+228 ...' },
        address: { label: 'Your address', placeholder: 'Your full address' },
        notes: { label: 'Additional remarks', placeholder: 'Describe vehicle condition, priority areas, time constraints...' },
      },
    },
    sidebar: { eyebrow: 'Why TAOMAN GROUP INVESTMENTS?', title: 'A service designed for your vehicle\'s lifetime', description: 'We do not just sell a wash: we sell regular care that protects your bodywork, cabin and resale value.', equipmentTitle: 'Professional equipment', equipmentDesc: 'Controlled high pressure, industrial vacuums, certified microfibre gloves, products suited to modern materials.' },
    faq: {
      eyebrow: 'Car wash FAQ', title: 'Your questions, our clear answers',
      items: [
        { question: 'What is the difference between a standard wash and a TAOMAN GROUP INVESTMENTS wash?', answer: 'A standard wash is often just water and foam. A TAOMAN GROUP INVESTMENTS wash follows a checklist, material-appropriate products, quality control and a rework policy if you are not satisfied. We treat your vehicle as if it were our own.' },
        { question: 'How often should I wash my vehicle per month?', answer: 'In normal urban conditions, a Full Wash every 15 days is enough, with an Exterior Wash in between. In harsh conditions (construction site, tracks, very dusty weather), a weekly visit is recommended.' },
        { question: 'Does high-pressure washing damage the bodywork?', answer: 'No, when pressure and distance are controlled. Our operators are trained for this. Misused high pressure can lift old varnish or sealant – which is why we always inspect the vehicle before starting.' },
        { question: 'Are fabric seats at risk with shampooing?', answer: 'No. We use a gentle shampoo, light brushing and an extractor vacuum that removes residual moisture. Your seats dry within hours with no odour or shrinkage.' },
        { question: 'Can you wash a motorcycle at home?', answer: 'Yes. Motorcycles need special care (chrome, exhaust, complex wheels) and must be hand-washed. Our motorcycle package covers all of this.' },
        { question: 'What payment methods do you accept?', answer: 'Mobile Money (Tmoney, Flooz), cash, bank transfer and card. An invoice is issued for every service, useful for corporate fleets.' },
      ],
    },
    finalCta: { title: 'Your vehicle deserves professional care', description: 'Request a personalised quote in under 2 minutes. Our team will get back to you within 24 hours with a clear price and confirmed slot.', btnServices: 'View all services', btnAdvisor: 'Speak to an advisor' },
  },

  ES: {
    intro: {
      eyebrow: 'El servicio en pocas palabras',
      title: 'Un lavado de automóvil pensado para durar, no solo para brillar.',
      paragraphs: [
        'TAOMAN GROUP INVESTMENTS ofrece un servicio de lavado de automóviles premium para particulares, flotas empresariales e inversores que desean mantener el valor de sus vehículos. Cada prestación la realizan equipos formados, con material profesional y productos seleccionados por su eficacia y respeto hacia la carrocería.',
        'Nuestra convicción es simple: lavar un vehículo no es un gasto, es un acto de mantenimiento que prolonga la vida de la carrocería, los asientos, las moquetas y los ópticos. Un vehículo mantenido regularmente se revende mejor, consume menos en desgaste y proyecta una imagen más profesional. Ofrecemos tres fórmulas complementarias – Lavado Interior, Lavado Exterior y Lavado General – además de una opción a domicilio para clientes que no pueden desplazarse. Cada fórmula sigue una checklist, un plazo anunciado y un control de calidad antes de la entrega.',
      ],
    },
    formulas: {
      eyebrow: 'Nuestras fórmulas', title: 'Tres fórmulas, un solo nivel de exigencia',
      description: 'Elija la fórmula que corresponda al estado actual de su vehículo y al resultado esperado. Todas incluyen un control visual por nuestro responsable de equipo antes de la entrega.',
      recommendedBadge: 'Recomendado',
      items: [
        { id: 'integral', title: 'Lavado Interior', duration: '45 – 75 min', desc: 'Ideal para vehículos cuyo exterior sigue en buen estado pero cuyo habitáculo necesita un verdadero refresco: polvo, migas, manchas y olores.', points: ['Aspirado profesional de asientos, alfombras y maletero', 'Limpieza a vapor de zonas sensibles', 'Champú en asientos y moquetas (opcional)', 'Salpicadero, consola y plásticos', 'Cristales interiores y espejos', 'Desodorización final con microfibra'] },
        { id: 'extreme', title: 'Lavado General', duration: '90 – 150 min', desc: 'La fórmula más completa: interior + exterior. Recomendada antes de un viaje largo, una recepción de clientes o para devolver un acabado como nuevo.', points: ['Todo el Lavado Interior incluido', 'Todo el Lavado Exterior incluido', 'Pulido de plásticos exteriores', 'Tratamiento hidrófugo de cristales', 'Aspirado profundo del maletero', 'Brillo final con cera express'] },
        { id: 'standard', title: 'Lavado Exterior', duration: '30 – 60 min', desc: 'Pensado para vehículos que circulan mucho en entornos polvorientos o lluviosos y necesitan un refresco regular de la carrocería.', points: ['Prelavado a alta presión', 'Champú de carrocería con microfibra', 'Limpieza de llantas, neumáticos y pasos de rueda', 'Enjuague a alta presión y secado', 'Brillo de neumáticos y lustre de carrocería', 'Cristales y espejos exteriores'] },
      ],
    },
    process: {
      eyebrow: 'Nuestro proceso', title: 'Del presupuesto a la entrega del vehículo, paso a paso',
      description: 'Cada prestación sigue el mismo método riguroso. Sin improvisación. Sin sorpresas. Cada colaborador conoce su checklist y su orden de intervención.',
      steps: [
        { num: '01', title: 'Solicitud de presupuesto', desc: 'Rellena el formulario o nos contactas por teléfono. Anotamos el tipo de vehículo, el estado, la urgencia y el lugar de intervención (centro TAOMAN GROUP INVESTMENTS o domicilio).' },
        { num: '02', title: 'Confirmación y planificación', desc: 'Validamos la fórmula más adecuada, te comunicamos una franja horaria y un plazo indicativo. Recibes una confirmación escrita con el detalle del alcance.' },
        { num: '03', title: 'Recepción e inspección', desc: 'A la llegada, el responsable inspecciona el vehículo contigo, identifica zonas que requieren cuidado especial (manchas antiguas, plásticos amarillentos, llantas muy sucias) y anota posibles defectos existentes.' },
        { num: '04', title: 'Ejecución según fórmula', desc: 'El equipo aplica la checklist de la fórmula elegida. Los productos se seleccionan según los materiales (cuero, alcántara, tejido, plástico blando) para no dañar las superficies.' },
        { num: '05', title: 'Control de calidad', desc: 'Antes de la entrega, un segundo colaborador realiza un control visual de todos los puntos de la checklist. Si una zona no es conforme, se repite de inmediato.' },
        { num: '06', title: 'Entrega y satisfacción', desc: 'Recoges el vehículo en el parking o a domicilio, repasamos juntos los puntos clave del lavado y recogemos tu opinión. En caso de insatisfacción, corregimos sin coste adicional.' },
      ],
    },
    vehicles: {
      eyebrow: '¿Para qué vehículo?', title: 'Utilitario, berlina, SUV, 4x4, furgoneta o moto: nos adaptamos.',
      paragraphs: [
        'El lavado no es un servicio uniforme. Un utilitario urbano no sufre las mismas agresiones que un 4x4 en pista o una furgoneta de reparto. Nuestros equipos adaptan la fórmula, el tiempo y los productos según el tipo de vehículo, su uso y su estado.',
        'Para flotas empresariales (10 vehículos o más), ofrecemos contratos de mantenimiento periódico, tarifas preferenciales, planificación en sitio e informes mensuales a su departamento de medios generales.',
      ],
      items: [
        { title: 'Utilitario', desc: 'Volúmenes pequeños, acceso fácil. Ideal para un lavado rápido semanal o quincenal.' },
        { title: 'Berlina', desc: 'Cuidado especial de asientos en tejido/cuero y ópticos. Lavado general recomendado cada 15 días.' },
        { title: 'Compacto', desc: 'Equilibrio entre volumen y maniobrabilidad. Adecuado para todas las fórmulas sin restricciones.' },
        { title: 'SUV', desc: 'Más superficie acristalada, llantas complejas, estribos que limpiar. Prever 20 minutos adicionales.' },
        { title: '4x4', desc: 'A menudo embarrado, bajos muy expuestos. Prelavado a alta presión obligatorio para desprender barro seco.' },
        { title: 'Furgoneta', desc: 'Carrocería a menudo rayada, carga interior que desempolvar. Tarifas de flota adaptadas.' },
        { title: 'Moto', desc: 'Lavado manual únicamente, nunca automático. Cuidado de cromados, llantas y escape.' },
        { title: 'Pick-up', desc: 'Caja que limpiar además de la cabina. Tarifas con o sin caja disponibles.' },
      ],
    },
    location: {
      eyebrow: '¿Dónde desea ser lavado?', title: 'Lavado a domicilio o en el centro TAOMAN GROUP INVESTMENTS: usted elige.',
      description: 'Ambas opciones tienen sus ventajas. Le proponemos la elección según su agenda, la disponibilidad de agua y espacio, y el nivel de servicio deseado.',
      home: { title: 'Lavado a domicilio', description: 'Nuestro equipo se desplaza a su domicilio con material autónomo (reserva de agua, aspirador, productos). Ahorra tiempo: sin desplazamiento ni espera. Ideal para familias, empresarios y expatriados.', bullets: ['Sin colas', 'Trabajo bajo su supervisión posible', 'Ideal para 2 vehículos o más a la vez', 'Gastos de desplazamiento transparentes según la zona'] },
      center: { title: 'Centro de lavado TAOMAN GROUP INVESTMENTS', description: 'Nuestro centro dispone de equipos pesados: alta presión industrial, brazos de aspiración, zonas cubiertas e iluminadas. Espera en un espacio dedicado mientras se trata su vehículo.', bullets: ['Material profesional más potente', 'Tarifas reducidas respecto al domicilio', 'Zona de espera confortable', 'Disponible sin cita previa (según afluencia)'] },
    },
    form: {
      eyebrow: 'Solicitar presupuesto', title: 'Complete su solicitud en 2 minutos',
      description: 'Indique los datos de su vehículo y nuestro equipo le contactará en 24 horas con una franja horaria y un precio firme.',
      success: '¡Su presupuesto se ha enviado con éxito! Le contactaremos en breve.',
      sending: 'Enviando...', submit: 'Enviar mi solicitud de presupuesto',
      errorGeneric: 'No se pudo enviar su solicitud de presupuesto.', errorNetwork: 'Error de red. Inténtelo de nuevo más tarde.',
      selectPlaceholder: 'Seleccionar',
      fields: {
        washType: { label: 'Tipo de lavado', options: ['Lavado Interior', 'Lavado Exterior', 'Lavado General'] },
        wish: { label: 'Desea', options: ['Un lavado a domicilio', 'En el centro de lavado TAOMAN GROUP INVESTMENTS'] },
        vehicleType: { label: 'Tipo de vehículo', options: ['Utilitario', 'Berlina', 'Compacto', 'SUV', '4x4', 'Furgoneta', 'Moto'] },
        brand: { label: 'Marca y modelo', placeholder: 'Ej: Toyota Corolla' },
        date: { label: 'Fecha deseada' }, time: { label: 'Hora deseada' },
        name: { label: 'Su nombre', placeholder: 'Su nombre completo' },
        phone: { label: 'Teléfono', placeholder: '+228 ...' },
        address: { label: 'Su dirección', placeholder: 'Su dirección completa' },
        notes: { label: 'Observaciones adicionales', placeholder: 'Indique el estado del vehículo, zonas prioritarias, restricciones horarias...' },
      },
    },
    sidebar: { eyebrow: '¿Por qué TAOMAN GROUP INVESTMENTS?', title: 'Un servicio pensado para la vida útil de su vehículo', description: 'No vendemos solo un lavado: vendemos un cuidado regular que protege su carrocería, habitáculo y valor de reventa.', equipmentTitle: 'Equipamiento profesional', equipmentDesc: 'Alta presión controlada, aspiradores industriales, guantes de microfibra certificados, productos adaptados a materiales modernos.' },
    faq: {
      eyebrow: 'FAQ Lavado', title: 'Sus preguntas, nuestras respuestas claras',
      items: [
        { question: '¿Cuál es la diferencia entre un lavado clásico y un lavado TAOMAN GROUP INVESTMENTS?', answer: 'Un lavado clásico suele limitarse a agua y espuma. Un lavado TAOMAN GROUP INVESTMENTS se basa en una checklist, productos adaptados al material, control de calidad y política de repetición en caso de insatisfacción. Tratamos su vehículo como si fuera nuestro.' },
        { question: '¿Cuántas veces al mes debo lavar mi vehículo?', answer: 'En condiciones urbanas normales, un Lavado General cada 15 días basta, complementado por un Lavado Exterior intermedio. En condiciones agresivas (obra, pista, clima muy polvoriento), se recomienda una visita semanal.' },
        { question: '¿El lavado a alta presión daña la carrocería?', answer: 'No, si se usa presión controlada y la distancia correcta. Nuestros operadores están formados. Una alta presión mal usada puede levantar barniz o sellador antiguo: por eso siempre inspeccionamos el vehículo antes.' },
        { question: '¿Los asientos de tela corren riesgo con el champú?', answer: 'No. Usamos champú suave, cepillado ligero y aspirador extractor que retira la humedad residual. Los asientos secan en pocas horas sin olor ni encogimiento.' },
        { question: '¿Pueden lavar una moto a domicilio?', answer: 'Sí. La moto requiere cuidado especial (cromados, escape, llantas complejas) y lavado a mano obligatorio. Nuestro forfait moto lo incluye todo.' },
        { question: '¿Qué medios de pago aceptan?', answer: 'Mobile Money (Tmoney, Flooz), efectivo, transferencia bancaria y tarjeta. Se entrega factura en cada prestación, útil para flotas empresariales.' },
      ],
    },
    finalCta: { title: 'Su vehículo merece un cuidado profesional', description: 'Solicite un presupuesto personalizado en menos de 2 minutos. Nuestro equipo le responde en 24 horas con un precio claro y una franja confirmada.', btnServices: 'Ver todos los servicios', btnAdvisor: 'Hablar con un asesor' },
  },

  PT: {
    intro: {
      eyebrow: 'O serviço em poucas palavras',
      title: 'Uma lavagem automóvel pensada para durar, não apenas para brilhar.',
      paragraphs: [
        'A TAOMAN GROUP INVESTMENTS opera um serviço de lavagem automóvel premium para particulares, frotas empresariais e investidores que desejam manter o valor dos seus veículos. Cada prestação é realizada por equipas formadas, com material profissional e produtos selecionados pela eficácia e respeito pela carroceria.',
        'A nossa convicção é simples: lavar um veículo não é uma despesa, é um ato de manutenção que prolonga a vida da carroceria, dos bancos, dos carpetes e dos ópticos. Um veículo regularmente mantido revende-se melhor, consome menos em desgaste e projeta uma imagem mais profissional. Propomos três fórmulas complementares – Lavagem Interior, Lavagem Exterior e Lavagem Geral – bem como uma opção ao domicílio para clientes que não podem deslocar-se. Cada fórmula segue uma checklist, um prazo anunciado e um controlo de qualidade antes da entrega.',
      ],
    },
    formulas: {
      eyebrow: 'As nossas fórmulas', title: 'Três fórmulas, um só nível de exigência',
      description: 'Escolha a fórmula que corresponde ao estado atual do seu veículo e ao resultado esperado. Todas incluem um controlo visual pelo responsável de equipa antes da entrega.',
      recommendedBadge: 'Recomendado',
      items: [
        { id: 'integral', title: 'Lavagem Interior', duration: '45 – 75 min', desc: 'Ideal para veículos cujo exterior ainda está aceitável mas cuja cabine precisa de um verdadeiro refresh: pó, migalhas, manchas e odores.', points: ['Aspiração profissional de bancos, tapetes e porta-malas', 'Limpeza a vapor de zonas sensíveis', 'Shampoo em bancos e carpetes (opcional)', 'Painel, consola e plásticos', 'Vidros interiores e espelhos', 'Desodorização final com microfibra'] },
        { id: 'extreme', title: 'Lavagem Geral', duration: '90 – 150 min', desc: 'A fórmula mais completa: interior + exterior. Recomendada antes de uma viagem longa, recepção de clientes ou para devolver um acabamento como novo.', points: ['Toda a Lavagem Interior incluída', 'Toda a Lavagem Exterior incluída', 'Polimento de plásticos exteriores', 'Tratamento hidrofóbico dos vidros', 'Aspiração profunda do porta-malas', 'Brilho final com cera express'] },
        { id: 'standard', title: 'Lavagem Exterior', duration: '30 – 60 min', desc: 'Concebida para veículos que circulam muito em ambientes empoeirados ou chuvosos e precisam de refresh regular da carroceria.', points: ['Pré-lavagem de alta pressão', 'Shampoo de carroceria com microfibra', 'Limpeza de jantes, pneus e caixas de roda', 'Enxaguamento de alta pressão e secagem', 'Brilho de pneus e lustro da carroceria', 'Vidros e espelhos exteriores'] },
      ],
    },
    process: {
      eyebrow: 'O nosso processo', title: 'Do orçamento à entrega do veículo, passo a passo',
      description: 'Cada prestação segue o mesmo método rigoroso. Sem improvisação. Sem surpresas. Cada colaborador conhece a sua checklist e a ordem de intervenção.',
      steps: [
        { num: '01', title: 'Pedido de orçamento', desc: 'Preenche o formulário ou contacta-nos por telefone. Registamos o tipo de veículo, o estado, a urgência e o local de intervenção (centro TAOMAN GROUP INVESTMENTS ou domicílio).' },
        { num: '02', title: 'Confirmação e planeamento', desc: 'Validamos a fórmula mais adequada, comunicamos uma faixa horária e um prazo indicativo. Recebe uma confirmação escrita com o detalhe do âmbito.' },
        { num: '03', title: 'Receção e inspeção', desc: 'À chegada, o responsável inspeciona o veículo consigo, identifica zonas que requerem cuidado especial (manchas antigas, plásticos amarelados, jantes muito sujas) e regista eventuais defeitos existentes.' },
        { num: '04', title: 'Execução por fórmula', desc: 'A equipa aplica a checklist da fórmula escolhida. Os produtos são selecionados conforme os materiais (couro, alcântara, tecido, plástico macio) para nunca agredir as superfícies.' },
        { num: '05', title: 'Controlo de qualidade', desc: 'Antes da entrega, um segundo colaborador efetua um controlo visual de todos os pontos da checklist. Se uma zona não estiver conforme, é imediatamente repetida.' },
        { num: '06', title: 'Entrega e satisfação', desc: 'Recolhe o veículo no parque ou ao domicílio, percorremos juntos os pontos-chave da lavagem e recolhemos o seu feedback. Em caso de insatisfação, corrigimos sem custo adicional.' },
      ],
    },
    vehicles: {
      eyebrow: 'Para que veículo?', title: 'Citadino, berlina, SUV, 4x4, comercial ou mota: adaptamo-nos.',
      paragraphs: [
        'A lavagem não é um serviço uniforme. Um citadino urbano não sofre as mesmas agressões que um 4x4 em pista ou uma carrinha de entregas. As nossas equipas adaptam a fórmula, o tempo e os produtos ao tipo de veículo, uso e estado.',
        'Para frotas empresariais (10 veículos ou mais), oferecemos contratos de manutenção periódica, tarifas preferenciais, planeamento no local e relatórios mensais ao seu serviço de meios gerais.',
      ],
      items: [
        { title: 'Citadino', desc: 'Volumes pequenos, acesso fácil. Ideal para uma lavagem rápida semanal ou quinzenal.' },
        { title: 'Berlina', desc: 'Cuidados especiais para bancos em tecido/couro e ópticos. Lavagem geral recomendada a cada 15 dias.' },
        { title: 'Compacto', desc: 'Compromisso volume/maneabilidade. Adequado a todas as fórmulas sem restrições.' },
        { title: 'SUV', desc: 'Mais superfície envidraçada, jantes complexas, estribos a limpar. Prever 20 minutos adicionais.' },
        { title: '4x4', desc: 'Muitas vezes enlameado, parte inferior muito exposta. Pré-lavagem de alta pressão obrigatória para soltar lama seca.' },
        { title: 'Comercial', desc: 'Carroceria muitas vezes riscada, carga interior a desempoeirar. Tarifas de frota adaptadas.' },
        { title: 'Mota', desc: 'Lavagem manual apenas, nunca automática. Cuidado com cromados, jantes e escape.' },
        { title: 'Pick-up', desc: 'Caixa a limpar além da cabina. Tarifas com ou sem caixa disponíveis.' },
      ],
    },
    location: {
      eyebrow: 'Onde deseja ser lavado?', title: 'Lavagem ao domicílio ou no centro TAOMAN GROUP INVESTMENTS: à sua escolha.',
      description: 'As duas opções têm as suas vantagens. Propomos a escolha conforme a sua agenda, disponibilidade de água e espaço, e o nível de serviço desejado.',
      home: { title: 'Lavagem ao domicílio', description: 'A nossa equipa desloca-se a si com material autónomo (reserva de água, aspirador, produtos). Poupa tempo: sem deslocação nem espera. Ideal para famílias, empresários e expatriados.', bullets: ['Sem filas de espera', 'Trabalho sob a sua supervisão possível', 'Ideal para 2 veículos ou mais em simultâneo', 'Taxas de deslocação transparentes conforme a zona'] },
      center: { title: 'Centro de lavagem TAOMAN GROUP INVESTMENTS', description: 'O nosso centro dispõe de equipamentos pesados: alta pressão industrial, braços de aspiração, zonas cobertas e iluminadas. Aguarda num espaço dedicado enquanto o veículo é tratado.', bullets: ['Material profissional mais potente', 'Tarifas reduzidas face ao domicílio', 'Espaço de espera confortável', 'Disponível sem marcação (conforme afluência)'] },
    },
    form: {
      eyebrow: 'Pedir orçamento', title: 'Preencha o seu pedido em 2 minutos',
      description: 'Indique os dados do seu veículo e a nossa equipa contacta-o em 24 horas com uma faixa horária e um preço firme.',
      success: 'O seu orçamento foi enviado com sucesso! Entraremos em contacto em breve.',
      sending: 'A enviar...', submit: 'Enviar o meu pedido de orçamento',
      errorGeneric: 'Não foi possível enviar o seu pedido de orçamento.', errorNetwork: 'Erro de rede. Tente novamente mais tarde.',
      selectPlaceholder: 'Selecionar',
      fields: {
        washType: { label: 'Tipo de lavagem', options: ['Lavagem Interior', 'Lavagem Exterior', 'Lavagem Geral'] },
        wish: { label: 'Deseja', options: ['Uma lavagem ao domicílio', 'No centro de lavagem TAOMAN GROUP INVESTMENTS'] },
        vehicleType: { label: 'Tipo de veículo', options: ['Citadino', 'Berlina', 'Compacto', 'SUV', '4x4', 'Comercial', 'Mota'] },
        brand: { label: 'Marca e modelo', placeholder: 'Ex: Toyota Corolla' },
        date: { label: 'Data pretendida' }, time: { label: 'Hora pretendida' },
        name: { label: 'O seu nome', placeholder: 'O seu nome completo' },
        phone: { label: 'Telefone', placeholder: '+228 ...' },
        address: { label: 'A sua morada', placeholder: 'A sua morada completa' },
        notes: { label: 'Observações adicionais', placeholder: 'Indique o estado do veículo, zonas prioritárias, restrições horárias...' },
      },
    },
    sidebar: { eyebrow: 'Porquê TAOMAN GROUP INVESTMENTS?', title: 'Um serviço pensado para a vida útil do seu veículo', description: 'Não vendemos apenas uma lavagem: vendemos um cuidado regular que protege a carroceria, a cabina e o valor de revenda.', equipmentTitle: 'Equipamento profissional', equipmentDesc: 'Alta pressão controlada, aspiradores industriais, luvas de microfibra certificadas, produtos adaptados a materiais modernos.' },
    faq: {
      eyebrow: 'FAQ Lavagem', title: 'As suas perguntas, as nossas respostas claras',
      items: [
        { question: 'Qual é a diferença entre uma lavagem clássica e uma lavagem TAOMAN GROUP INVESTMENTS?', answer: 'Uma lavagem clássica limita-se muitas vezes a água e espuma. Uma lavagem TAOMAN GROUP INVESTMENTS baseia-se numa checklist, produtos adaptados ao material, controlo de qualidade e política de repetição em caso de insatisfação. Tratamos o seu veículo como se fosse nosso.' },
        { question: 'Quantas vezes por mês devo lavar o meu veículo?', answer: 'Em condições urbanas normais, uma Lavagem Geral a cada 15 dias basta, complementada por uma Lavagem Exterior intermédia. Em condições agressivas (obra, pista, clima muito empoeirado), recomenda-se uma visita semanal.' },
        { question: 'A lavagem de alta pressão danifica a carroceria?', answer: 'Não, com pressão controlada e distância correta. Os nossos operadores estão formados. Alta pressão mal usada pode levantar verniz ou vedante antigo: por isso inspecionamos sempre o veículo antes.' },
        { question: 'Os bancos de tecido correm risco com o shampoo?', answer: 'Não. Usamos shampoo suave, escovagem leve e aspirador extrator que retira a humidade residual. Os bancos secam em poucas horas sem odor nem encolhimento.' },
        { question: 'Podem lavar uma mota ao domicílio?', answer: 'Sim. A mota exige cuidado especial (cromados, escape, jantes complexas) e lavagem manual obrigatória. O nosso forfait mota inclui tudo isto.' },
        { question: 'Que meios de pagamento aceitam?', answer: 'Mobile Money (Tmoney, Flooz), numerário, transferência bancária e cartão. É emitida fatura em cada prestação, útil para frotas empresariais.' },
      ],
    },
    finalCta: { title: 'O seu veículo merece um cuidado profissional', description: 'Peça um orçamento personalizado em menos de 2 minutos. A nossa equipa responde em 24 horas com um preço claro e uma faixa confirmada.', btnServices: 'Ver todos os serviços', btnAdvisor: 'Falar com um consultor' },
  },

  DE: {
    intro: {
      eyebrow: 'Der Service in Kürze',
      title: 'Autowäsche, die hält – nicht nur glänzt.',
      paragraphs: [
        'TAOMAN GROUP INVESTMENTS bietet einen Premium-Autowaschservice für Privatkunden, Firmenflotten und Investoren, die den Wert ihrer Fahrzeuge erhalten möchten. Jede Leistung wird von geschulten Teams mit professioneller Ausrüstung und sorgfältig ausgewählten Produkten durchgeführt.',
        'Unsere Überzeugung ist einfach: Ein Fahrzeug zu waschen ist keine Ausgabe, sondern Wartung, die Karosserie, Sitze, Teppiche und Scheinwerfer länger erhält. Regelmäßig gepflegte Fahrzeuge verkaufen sich besser, verschleißen weniger und wirken professioneller. Wir bieten drei ergänzende Pakete – Innenreinigung, Außenwäsche und Komplettwäsche – sowie eine Option vor Ort für Kunden, die sich nicht bewegen können. Jedes Paket folgt einer Checkliste, einem angekündigten Zeitrahmen und einer Qualitätskontrolle vor der Übergabe.',
      ],
    },
    formulas: {
      eyebrow: 'Unsere Pakete', title: 'Drei Pakete, ein Anspruch',
      description: 'Wählen Sie das Paket, das zum aktuellen Zustand Ihres Fahrzeugs und zum gewünschten Ergebnis passt. Alle Pakete umfassen eine Sichtkontrolle durch unseren Teamleiter vor der Übergabe.',
      recommendedBadge: 'Empfohlen',
      items: [
        { id: 'integral', title: 'Innenreinigung', duration: '45 – 75 Min.', desc: 'Ideal, wenn die Außenseite noch in Ordnung ist, der Innenraum aber eine echte Auffrischung braucht: Staub, Krümel, Flecken und Gerüche.', points: ['Professionelles Saugen von Sitzen, Teppichen und Kofferraum', 'Dampfreinigung sensibler Bereiche', 'Sitz- und Teppichshampoo (optional)', 'Armaturenbrett, Konsole und Kunststoffe', 'Innenfenster und Spiegel', 'Abschließende Mikrofaser-Desodorierung'] },
        { id: 'extreme', title: 'Komplettwäsche', duration: '90 – 150 Min.', desc: 'Unser umfassendstes Paket: Innen + Außen. Empfohlen vor einer langen Fahrt, einem Kundentermin oder für einen Neuwagen-Look.', points: ['Komplette Innenreinigung inklusive', 'Komplette Außenwäsche inklusive', 'Politur Außenkunststoffe', 'Wasserabweisende Fensterbehandlung', 'Gründliche Kofferraum-Saugung', 'Express-Wachs-Glanzfinish'] },
        { id: 'standard', title: 'Außenwäsche', duration: '30 – 60 Min.', desc: 'Für Fahrzeuge in staubiger oder regnerischer Umgebung, die eine regelmäßige Auffrischung der Karosserie benötigen.', points: ['Hochdruck-Vorwäsche', 'Mikrofaser-Karosserieshampoo', 'Felgen, Reifen und Radkästen', 'Hochdruck-Spülung und Trocknung', 'Reifenglanz und Karosserie-Lackglanz', 'Außenfenster und Spiegel'] },
      ],
    },
    process: {
      eyebrow: 'Unser Prozess', title: 'Vom Angebot bis zur Fahrzeugübergabe, Schritt für Schritt',
      description: 'Jede Leistung folgt derselben rigorosen Methode. Keine Improvisation. Keine Überraschungen. Jedes Teammitglied kennt seine Checkliste und Reihenfolge.',
      steps: [
        { num: '01', title: 'Angebotsanfrage', desc: 'Sie füllen das Formular aus oder kontaktieren uns telefonisch. Wir notieren Fahrzeugtyp, Zustand, Dringlichkeit und gewünschten Ort (TAOMAN GROUP INVESTMENTS-Zentrum oder vor Ort).' },
        { num: '02', title: 'Bestätigung und Terminplanung', desc: 'Wir bestätigen das passende Paket, teilen einen Zeitfenster und Richtwert mit. Sie erhalten eine schriftliche Bestätigung mit Leistungsumfang.' },
        { num: '03', title: 'Empfang und Inspektion', desc: 'Bei Ankunft inspiziert der Teamleiter das Fahrzeug mit Ihnen, identifiziert Bereiche mit besonderem Pflegebedarf und dokumentiert bestehende Mängel.' },
        { num: '04', title: 'Ausführung nach Paket', desc: 'Das Team wendet die Checkliste des gewählten Pakets an. Produkte werden nach Material (Leder, Alcantara, Stoff, Weichkunststoff) ausgewählt, um Oberflächen nicht zu beschädigen.' },
        { num: '05', title: 'Qualitätskontrolle', desc: 'Vor der Übergabe führt ein zweites Teammitglied eine Sichtkontrolle aller Checklistenpunkte durch. Nicht konforme Bereiche werden sofort nachbearbeitet.' },
        { num: '06', title: 'Übergabe und Zufriedenheit', desc: 'Sie holen das Fahrzeug auf dem Parkplatz oder vor Ort ab, wir besprechen die wichtigsten Punkte und Ihr Feedback. Bei Unzufriedenheit korrigieren wir ohne Aufpreis.' },
      ],
    },
    vehicles: {
      eyebrow: 'Für welches Fahrzeug?', title: 'Kleinwagen, Limousine, SUV, Geländewagen, Transporter oder Motorrad: wir passen uns an.',
      paragraphs: [
        'Waschen ist kein Einheitsdienst. Ein Kleinwagen in der Stadt unterliegt nicht denselben Belastungen wie ein Geländewagen auf Pisten oder ein Liefertransporter. Unsere Teams passen Paket, Dauer und Produkte an Fahrzeugtyp, Nutzung und Zustand an.',
        'Für Firmenflotten (10 Fahrzeuge und mehr) bieten wir Wartungsverträge, Vorzugstarife, Einsatzplanung vor Ort und monatliches Reporting an Ihre Facility-Abteilung.',
      ],
      items: [
        { title: 'Kleinwagen', desc: 'Kleine Abmessungen, einfacher Zugang. Ideal für eine schnelle wöchentliche oder zweiwöchentliche Wäsche.' },
        { title: 'Limousine', desc: 'Besondere Pflege für Stoff-/Ledersitze und Scheinwerfer. Komplettwäsche alle 15 Tage empfohlen.' },
        { title: 'Kompaktwagen', desc: 'Kompromiss aus Größe und Wendigkeit. Für alle Pakete ohne Einschränkungen geeignet.' },
        { title: 'SUV', desc: 'Mehr Glasfläche, komplexe Felgen, Trittstufen zu reinigen. 20 zusätzliche Minuten einplanen.' },
        { title: 'Geländewagen', desc: 'Oft matschig, stark beanspruchter Unterboden. Hochdruck-Vorwäsche Pflicht zum Lösen trockenen Schlamms.' },
        { title: 'Transporter', desc: 'Oft verkratzte Karosserie, Laderaum zu entstauben. Flottenpakete verfügbar.' },
        { title: 'Motorrad', desc: 'Nur Handwäsche, nie automatisch. Pflege von Chrom, Felgen und Auspuff.' },
        { title: 'Pick-up', desc: 'Ladefläche zusätzlich zur Kabine. Pakete mit oder ohne Ladefläche verfügbar.' },
      ],
    },
    location: {
      eyebrow: 'Wo möchten Sie gewaschen werden?', title: 'Vor Ort oder im TAOMAN GROUP INVESTMENTS-Zentrum: Sie entscheiden.',
      description: 'Beide Optionen haben ihre Vorteile. Wir helfen bei der Wahl nach Zeitplan, Wasser- und Platzverfügbarkeit sowie gewünschtem Serviceniveau.',
      home: { title: 'Wäsche vor Ort', description: 'Unser Team kommt mit autarker Ausrüstung (Wasservorrat, Staubsauger, Produkte). Sie sparen Zeit: keine Anfahrt, kein Warten. Ideal für Familien, Unternehmer und Expats.', bullets: ['Keine Warteschlange', 'Arbeit unter Ihrer Aufsicht möglich', 'Ideal für 2 oder mehr Fahrzeuge gleichzeitig', 'Transparente Anfahrtskosten je Zone'] },
      center: { title: 'TAOMAN GROUP INVESTMENTS Waschzentrum', description: 'Unser Zentrum verfügt über schwere Ausrüstung: industrieller Hochdruck, Saugarms, überdachte und beleuchtete Boxen. Sie warten in einem eigenen Bereich während der Behandlung.', bullets: ['Leistungsstärkere Profi-Ausrüstung', 'Günstigere Tarife als vor Ort', 'Komfortabler Wartebereich', 'Ohne Termin möglich (je nach Auslastung)'] },
    },
    form: {
      eyebrow: 'Angebot anfordern', title: 'Füllen Sie Ihre Anfrage in 2 Minuten aus',
      description: 'Geben Sie Ihre Fahrzeugdaten ein und unser Team meldet sich innerhalb von 24 Stunden mit Zeitfenster und Festpreis.',
      success: 'Ihr Angebot wurde erfolgreich gesendet! Wir melden uns in Kürze.',
      sending: 'Wird gesendet...', submit: 'Meine Angebotsanfrage senden',
      errorGeneric: 'Ihre Angebotsanfrage konnte nicht gesendet werden.', errorNetwork: 'Netzwerkfehler. Bitte versuchen Sie es später erneut.',
      selectPlaceholder: 'Auswählen',
      fields: {
        washType: { label: 'Waschart', options: ['Innenreinigung', 'Außenwäsche', 'Komplettwäsche'] },
        wish: { label: 'Sie wünschen', options: ['Eine Wäsche vor Ort', 'Im Waschzentrum TAOMAN GROUP INVESTMENTS'] },
        vehicleType: { label: 'Fahrzeugtyp', options: ['Kleinwagen', 'Limousine', 'Kompaktwagen', 'SUV', 'Geländewagen', 'Transporter', 'Motorrad'] },
        brand: { label: 'Marke und Modell', placeholder: 'z. B. Toyota Corolla' },
        date: { label: 'Wunschdatum' }, time: { label: 'Wunschuhrzeit' },
        name: { label: 'Ihr Name', placeholder: 'Ihr vollständiger Name' },
        phone: { label: 'Telefon', placeholder: '+228 ...' },
        address: { label: 'Ihre Adresse', placeholder: 'Ihre vollständige Adresse' },
        notes: { label: 'Zusätzliche Anmerkungen', placeholder: 'Fahrzeugzustand, Prioritätsbereiche, zeitliche Einschränkungen...' },
      },
    },
    sidebar: { eyebrow: 'Warum TAOMAN GROUP INVESTMENTS?', title: 'Ein Service für die Lebensdauer Ihres Fahrzeugs', description: 'Wir verkaufen nicht nur eine Wäsche: wir verkaufen regelmäßige Pflege, die Karosserie, Innenraum und Wiederverkaufswert schützt.', equipmentTitle: 'Professionelle Ausrüstung', equipmentDesc: 'Kontrollierter Hochdruck, Industriesauger, zertifizierte Mikrofaserhandschuhe, Produkte für moderne Materialien.' },
    faq: {
      eyebrow: 'Wasch-FAQ', title: 'Ihre Fragen, unsere klaren Antworten',
      items: [
        { question: 'Was ist der Unterschied zwischen einer Standardwäsche und einer TAOMAN GROUP INVESTMENTS-Wäsche?', answer: 'Eine Standardwäsche beschränkt sich oft auf Wasser und Schaum. Eine TAOMAN GROUP INVESTMENTS-Wäsche folgt einer Checkliste, materialgerechten Produkten, Qualitätskontrolle und Nachbesserung bei Unzufriedenheit. Wir behandeln Ihr Fahrzeug wie unser eigenes.' },
        { question: 'Wie oft soll ich mein Fahrzeug pro Monat waschen?', answer: 'Unter normalen Stadtbedingungen reicht eine Komplettwäsche alle 15 Tage, ergänzt durch eine Außenwäche dazwischen. Bei harten Bedingungen (Baustelle, Piste, sehr staubiges Wetter) wird ein wöchentlicher Besuch empfohlen.' },
        { question: 'Schadet Hochdruckwäsche der Karosserie?', answer: 'Nein, bei kontrolliertem Druck und richtigem Abstand. Unsere Mitarbeiter sind geschult. Falsch eingesetzter Hochdruck kann alten Lack oder Dichtmasse lösen – deshalb inspizieren wir immer vorher.' },
        { question: 'Sind Stoffsitze beim Shampoonieren gefährdet?', answer: 'Nein. Wir verwenden mildes Shampoo, leichtes Bürsten und einen Extraktorstaubsauger. Ihre Sitze trocknen in wenigen Stunden ohne Geruch oder Einlaufen.' },
        { question: 'Können Sie ein Motorrad vor Ort waschen?', answer: 'Ja. Motorräder brauchen besondere Pflege (Chrom, Auspuff, komplexe Felgen) und müssen per Hand gewaschen werden. Unser Motorradpaket umfasst alles.' },
        { question: 'Welche Zahlungsmittel akzeptieren Sie?', answer: 'Mobile Money (Tmoney, Flooz), Bargeld, Banküberweisung und Karte. Für jede Leistung erhalten Sie eine Rechnung – nützlich für Firmenflotten.' },
      ],
    },
    finalCta: { title: 'Ihr Fahrzeug verdient professionelle Pflege', description: 'Fordern Sie in unter 2 Minuten ein personalisiertes Angebot an. Unser Team meldet sich innerhalb von 24 Stunden mit klarem Preis und festem Termin.', btnServices: 'Alle Dienste ansehen', btnAdvisor: 'Mit einem Berater sprechen' },
  },

  AR: {
    intro: {
      eyebrow: 'الخدمة باختصار',
      title: 'غسيل سيارات مصمم ليدوم، لا ليلمع فقط.',
      paragraphs: [
        'تقدّم TAOMAN GROUP INVESTMENTS خدمة غسيل سيارات فاخرة للأفراد وأساطيل الشركات والمستثمرين الراغبين في الحفاظ على قيمة مركباتهم. تُنفَّذ كل خدمة بواسطة فرق مُدرَّبة، بمعدات احترافية ومنتجات مختارة لفعاليتها واحترامها للهيكل.',
        'قناعتنا بسيطة: غسل المركبة ليس مصروفاً بل صيانة تُطيل عمر الهيكل والمقاعد والسجاد والمصابيح. المركبة المُعتنى بها بانتظام تُباع أفضل وتستهلك أقل في التآكل وتعكس صورة أكثر احترافية. نقدّم ثلاث صيغ مكمّلة – غسيل داخلي، غسيل خارجي وغسيل شامل – إضافة إلى خيار في المنزل للعملاء الذين لا يستطيعون التنقل. كل صيغة تتبع قائمة تحقق ومدة مُعلَنة ومراقبة جودة قبل التسليم.',
      ],
    },
    formulas: {
      eyebrow: 'صيغنا', title: 'ثلاث صيغ، مستوى واحد من التميّز',
      description: 'اختر الصيغة التي تناسب حالة مركبتك الحالية والنتيجة المتوقعة. تشمل جميع الصيغ فحصاً بصرياً من مسؤول الفريق قبل التسليم.',
      recommendedBadge: 'موصى به',
      items: [
        { id: 'integral', title: 'غسيل داخلي', duration: '45 – 75 دقيقة', desc: 'مثالي للمركبات التي يبدو خارجها جيداً لكن المقصورة تحتاج إلى تجديد حقيقي: غبار، فتات، بقع وروائح.', points: ['مكنسة احترافية للمقاعد والسجاد والصندوق', 'تنظيف بالبخار للمناطق الحساسة', 'شامبو للمقاعد والسجاد (اختياري)', 'لوحة القيادة والكونسول والبلاستيك', 'زجاج داخلي ومرايا', 'تعطير نهائي بقماش ميكروفايبر'] },
        { id: 'extreme', title: 'غسيل شامل', duration: '90 – 150 دقيقة', desc: 'الصيغة الأكثر اكتمالاً: داخلي + خارجي. موصى بها قبل رحلة طويلة أو استقبال عميل أو لإعادة مظهر كالجديد.', points: ['يشمل الغسيل الداخلي بالكامل', 'يشمل الغسيل الخارجي بالكامل', 'تلميع البلاستيك الخارجي', 'معالجة طاردة للماء على الزجاج', 'شفط عميق للصندوق', 'لمسة نهائية بلمعان شمع سريع'] },
        { id: 'standard', title: 'غسيل خارجي', duration: '30 – 60 دقيقة', desc: 'للمركبات التي تسير كثيراً في بيئة مغبرة أو ممطرة وتحتاج إلى تجديد منتظم للهيكل.', points: ['غسيل مسبق بضغط عالٍ', 'شامبو هيكل بميكروفايبر', 'تنظيف الجنوط والإطارات وحواجز العجلات', 'شطف بضغط عالٍ وتجفيف', 'لمعان الإطارات والهيكل', 'زجاج ومرايا خارجية'] },
      ],
    },
    process: {
      eyebrow: 'عمليتنا', title: 'من عرض السعر إلى تسليم المركبة، خطوة بخطوة',
      description: 'كل خدمة تتبع نفس المنهجية الصارمة. بلا ارتجال. بلا مفاجآت. يعرف كل موظف قائمة التحقق وترتيب التدخل.',
      steps: [
        { num: '01', title: 'طلب عرض سعر', desc: 'تملأ النموذج أو تتصل بنا هاتفياً. نُسجّل نوع المركبة وحالتها والاستعجال ومكان التدخل (مركز TAOMAN GROUP INVESTMENTS أو المنزل).' },
        { num: '02', title: 'تأكيد وجدولة', desc: 'نُؤكد الصيغة الأنسب ونُبلغك بموعد ومدة تقديرية. تتلقى تأكيداً كتابياً بتفاصيل النطاق.' },
        { num: '03', title: 'استقبال وفحص', desc: 'عند الوصول، يفحص المسؤول المركبة معك ويُحدد المناطق التي تحتاج عناية خاصة (بقع قديمة، بلاستيك مصفر، جنوط شديدة الاتساخ) ويُدوّن العيوب الموجودة.' },
        { num: '04', title: 'تنفيذ حسب الصيغة', desc: 'يطبّق الفريق قائمة التحقق للصيغة المختارة. تُختار المنتجات حسب المواد (جلد، ألكانتارا، قماش، بلاستيك ناعم) لعدم إتلاف الأسطح.' },
        { num: '05', title: 'مراقبة الجودة', desc: 'قبل التسليم، يُجري موظف ثانٍ فحصاً بصرياً لجميع نقاط القائمة. إن لم تكن منطقة مطابقة، تُعاد معالجتها فوراً.' },
        { num: '06', title: 'تسليم ورضا', desc: 'تستلم المركبة في المواقف أو في المنزل، نراجع معاً النقاط الرئيسية ونجمع ملاحظاتك. عند عدم الرضا، نُصحّح دون تكلفة إضافية.' },
      ],
    },
    vehicles: {
      eyebrow: 'أي مركبة؟', title: 'سيارة مدينة، سيدان، SUV، دفع رباعي، شاحنة صغيرة أو دراجة نارية: نتكيّف.',
      paragraphs: [
        'الغسيل ليس خدمة موحّدة. سيارة المدينة لا تتعرض لنفس الضغوط مثل مركبة الدفع الرباعي على المسارات أو شاحنة التوصيل اليومية. فرقنا تُكيّف الصيغة والوقت والمنتجات حسب نوع المركبة واستخدامها وحالتها.',
        'لأساطيل الشركات (10 مركبات فأكثر)، نقدّم عقود صيانة دورية وأسعاراً تفضيلية وجدولة في الموقع وتقارير شهرية لقسم المرافق.',
      ],
      items: [
        { title: 'سيارة مدينة', desc: 'أحجام صغيرة، وصول سهل. مثالية لغسيل سريع أسبوعي أو نصف شهري.' },
        { title: 'سيدان', desc: 'عناية خاصة بمقاعد القماش/الجلد والمصابيح. يُوصى بالغسيل الشامل كل 15 يوماً.' },
        { title: 'مدمجة', desc: 'توازن بين الحجم والمناورة. مناسبة لجميع الصيغ دون قيود.' },
        { title: 'SUV', desc: 'مساحة زجاج أكبر، جنوط معقدة، عتبات للتنظيف. يُفضّل 20 دقيقة إضافية.' },
        { title: 'دفع رباعي', desc: 'غالباً موحلة، قاع معرّض جداً. غسيل مسبق بضغط عالٍ إلزامي لفك الطين الجاف.' },
        { title: 'شاحنة صغيرة', desc: 'هيكل غالباً مخدوش، حمولة داخلية للتنظيف. باقات أساطيل مخصّصة.' },
        { title: 'دراجة نارية', desc: 'غسيل يدوي فقط، أبداً آلي. عناية بالكروم والجنوط والعادم.' },
        { title: 'بيك أب', desc: 'صندوق للتنظيف إضافة إلى المقصورة. باقات مع أو بدون صندوق.' },
      ],
    },
    location: {
      eyebrow: 'أين تريد الغسيل؟', title: 'في المنزل أو في مركز TAOMAN GROUP INVESTMENTS: أنت تختار.',
      description: 'للكلا الخيارين مزاياه. نُقترح الاختيار حسب جدولك وتوفر الماء والمساحة ومستوى الخدمة المطلوب.',
      home: { title: 'غسيل في المنزل', description: 'يأتي فريقنا بمعدات مستقلة (ماء، مكنسة، منتجات). توفّر الوقت: بلا تنقل ولا انتظار. مثالي للعائلات ورجال الأعمال والمغتربين.', bullets: ['بلا طوابير', 'إمكانية الإشراف على العمل', 'مثالي لمركبتين أو أكثر معاً', 'رسوم تنقل شفافة حسب المنطقة'] },
      center: { title: 'مركز غسيل TAOMAN GROUP INVESTMENTS', description: 'يضم مركزنا معدات ثقيلة: ضغط عالٍ صناعي، أذرع شفط، مناطق مغطاة ومضاءة. تنتظر في مساحة مخصّصة أثناء معالجة مركبتك.', bullets: ['معدات احترافية أقوى', 'أسعار أقل من الخدمة المنزلية', 'منطقة انتظار مريحة', 'متاح بدون موعد (حسب الازدحام)'] },
    },
    form: {
      eyebrow: 'طلب عرض سعر', title: 'أكمل طلبك في دقيقتين',
      description: 'أدخل بيانات مركبتك وسيتواصل فريقنا خلال 24 ساعة بموعد وسعر ثابت.',
      success: 'تم إرسال عرض السعر بنجاح! سنتواصل معك قريباً.',
      sending: 'جارٍ الإرسال...', submit: 'إرسال طلب عرض السعر',
      errorGeneric: 'تعذّر إرسال طلب عرض السعر.', errorNetwork: 'خطأ في الشبكة. يُرجى المحاولة لاحقاً.',
      selectPlaceholder: 'اختيار',
      fields: {
        washType: { label: 'نوع الغسيل', options: ['غسيل داخلي', 'غسيل خارجي', 'غسيل شامل'] },
        wish: { label: 'ترغب في', options: ['غسيل في المنزل', 'في مركز غسيل TAOMAN GROUP INVESTMENTS'] },
        vehicleType: { label: 'نوع المركبة', options: ['سيارة مدينة', 'سيدان', 'مدمجة', 'SUV', 'دفع رباعي', 'شاحنة صغيرة', 'دراجة نارية'] },
        brand: { label: 'العلامة والطراز', placeholder: 'مثال: Toyota Corolla' },
        date: { label: 'التاريخ المطلوب' }, time: { label: 'الوقت المطلوب' },
        name: { label: 'اسمك', placeholder: 'اسمك الكامل' },
        phone: { label: 'الهاتف', placeholder: '+228 ...' },
        address: { label: 'عنوانك', placeholder: 'عنوانك الكامل' },
        notes: { label: 'ملاحظات إضافية', placeholder: 'حدّد حالة المركبة والمناطق ذات الأولوية والقيود الزمنية...' },
      },
    },
    sidebar: { eyebrow: 'لماذا TAOMAN GROUP INVESTMENTS؟', title: 'خدمة مصممة لعمر مركبتك', description: 'لا نبيع غسيلاً فحسب: نبيع عناية منتظمة تحمي الهيكل والمقصورة وقيمة إعادة البيع.', equipmentTitle: 'معدات احترافية', equipmentDesc: 'ضغط عالٍ مُتحكَّم به، مكانس صناعية، قفازات ميكروفايبر معتمدة، منتجات مناسبة للمواد الحديثة.' },
    faq: {
      eyebrow: 'الأسئلة الشائعة', title: 'أسئلتكم، إجاباتنا الواضحة',
      items: [
        { question: 'ما الفرق بين غسيل تقليدي وغسيل TAOMAN GROUP INVESTMENTS؟', answer: 'الغسيل التقليدي غالباً يقتصر على الماء والرغوة. غسيل TAOMAN GROUP INVESTMENTS يعتمد على قائمة تحقق ومنتجات مناسبة للمادة ومراقبة جودة وسياسة إعادة العمل عند عدم الرضا. نُعامل مركبتك كأنها لنا.' },
        { question: 'كم مرة شهرياً يجب غسل مركبتي؟', answer: 'في الظروف الحضرية العادية، يكفي غسيل شامل كل 15 يوماً مع غسيل خارجي بينهما. في الظروف القاسية (ورشة، مسارات، طقس شديد الغبار)، يُوصى بزيارة أسبوعية.' },
        { question: 'هل يُتلف الغسيل بضغط عالٍ الهيكل؟', answer: 'لا، عند ضغط مُتحكَّم به ومسافة صحيحة. مشغّلونا مُدرَّبون. الضغط العالي الخاطئ قد يرفع الطلاء القديم: لذلك نفحص المركبة دائماً قبل البدء.' },
        { question: 'هل مقاعد القماش معرّضة للخطر مع الشامبو؟', answer: 'لا. نستخدم شامبو لطيفاً وفركاً خفيفاً ومكنسة استخراج تزيل الرطوبة. تجف المقاعد في ساعات بلا رائحة أو انكماش.' },
        { question: 'هل يمكن غسل دراجة نارية في المنزل؟', answer: 'نعم. الدراجة تحتاج عناية خاصة (كروم، عادم، جنوط معقدة) وغسيلاً يدوياً إلزامياً. باقتنا للدراجات تشمل كل ذلك.' },
        { question: 'ما وسائل الدفع المقبولة؟', answer: 'Mobile Money (Tmoney, Flooz)، نقداً، تحويل بنكي وبطاقة. تُسلَّم فاتورة لكل خدمة، مفيدة لأساطيل الشركات.' },
      ],
    },
    finalCta: { title: 'مركبتك تستحق عناية احترافية', description: 'اطلب عرض سعر مخصّص في أقل من دقيقتين. يعود فريقنا خلال 24 ساعة بسعر واضح وموعد مؤكّد.', btnServices: 'عرض جميع الخدمات', btnAdvisor: 'التحدث مع مستشار' },
  },

  ZH: {
    intro: {
      eyebrow: '服务简介',
      title: '为持久而设计的洗车，不只是为了闪亮。',
      paragraphs: [
        'TAOMAN GROUP INVESTMENTS 为个人、企业车队和希望保持车辆价值的投资人提供高端洗车服务。每项服务均由经过培训的团队完成，配备专业设备和兼顾效果与车身保护的产品。',
        '我们的理念很简单：洗车不是开支，而是延长车身、座椅、地毯和灯具寿命的保养。定期保养的车辆更易转手、磨损更少，在日常或客户面前也更显专业。 我们提供三种互补方案——内饰清洗、外观清洗和全面清洗——以及为无法到店的客户提供的上门服务。每种方案均有检查清单、明确时限和交车前的质量检验。',
      ],
    },
    formulas: {
      eyebrow: '我们的方案', title: '三种方案，同一高标准',
      description: '请选择符合您车辆现状和期望效果的方案。所有方案在交车前均由团队负责人进行目视检查。',
      recommendedBadge: '推荐',
      items: [
        { id: 'integral', title: '内饰清洗', duration: '45 – 75 分钟', desc: '适合外观尚可但座舱需要真正焕新的车辆：灰尘、碎屑、污渍和异味。', points: ['座椅、地毯和后备箱专业吸尘', '敏感区域蒸汽清洁', '座椅和地毯洗发（可选）', '仪表台、中控台和塑料件', '车内玻璃和后视镜', '超细纤维最终除味'] },
        { id: 'extreme', title: '全面清洗', duration: '90 – 150 分钟', desc: '最完整的方案：内饰 + 外观。推荐长途出行前、接待客户前，或恢复如新光泽。', points: ['包含全部内饰清洗', '包含全部外观清洗', '外观塑料抛光', '玻璃驱水处理', '后备箱深度吸尘', '快速打蜡最终亮泽'] },
        { id: 'standard', title: '外观清洗', duration: '30 – 60 分钟', desc: '适合经常在多尘或多雨环境中行驶、需要定期刷新车身的车辆。', points: ['高压预洗', '超细纤维车身洗发', '轮毂、轮胎和轮拱清洁', '高压冲洗和烘干', '轮胎光亮和车身光泽', '车外玻璃和后视镜'] },
      ],
    },
    process: {
      eyebrow: '我们的流程', title: '从报价到交车，步步清晰',
      description: '每项服务遵循同样严谨的方法。不即兴。不意外。每位员工都熟悉自己的检查清单和操作顺序。',
      steps: [
        { num: '01', title: '索取报价', desc: '填写表格或致电联系我们。我们记录车型、状况、紧急程度及希望的服务地点（TAOMAN GROUP INVESTMENTS 中心或上门）。' },
        { num: '02', title: '确认与排期', desc: '我们确认最合适的方案，告知时段和预计时长。您将收到书面确认及服务范围明细。' },
        { num: '03', title: '接待与检查', desc: '到达后，负责人与您一起检查车辆，确定需特别护理的区域（旧渍、发黄塑料、极脏轮毂）并记录已有瑕疵。' },
        { num: '04', title: '按方案执行', desc: '团队按所选方案的检查清单操作。根据材料（皮革、Alcantara、织物、软塑料）选择产品，绝不损伤表面。' },
        { num: '05', title: '质量检验', desc: '交车前，第二名员工对检查清单所有项目进行目视检验。不合格区域立即返工。' },
        { num: '06', title: '交车与满意', desc: '您在停车场或家中取车，我们一起回顾关键要点并收集反馈。如不满意，我们免费更正。' },
      ],
    },
    vehicles: {
      eyebrow: '什么车型？', title: '微型车、轿车、SUV、四驱、厢式车或摩托车：我们灵活适配。',
      paragraphs: [
        '洗车并非千篇一律。城市微型车与越野或配送厢式车承受的压力不同。我们根据车型、用途和状况调整方案、时长和产品。',
        '针对企业车队（10 辆及以上），我们提供定期保养合同、优惠价格、现场排期及向行政部门的月度报告。',
      ],
      items: [
        { title: '微型车', desc: '体积小，进出方便。适合每周或每两周快速清洗。' },
        { title: '轿车', desc: '织物/皮革座椅和灯具特别护理。建议每 15 天全面清洗一次。' },
        { title: '紧凑型', desc: '体积与操控的平衡。适合所有方案，无特殊限制。' },
        { title: 'SUV', desc: '玻璃面积大、轮毂复杂、需清洁踏板。请预留额外 20 分钟。' },
        { title: '四驱', desc: '常沾泥，底盘暴露多。必须高压预洗以松动干泥。' },
        { title: '厢式车', desc: '车身常有划痕，货舱需除尘。提供车队套餐。' },
        { title: '摩托车', desc: '仅手工清洗，绝不机洗。护理镀铬、轮毂和排气管。' },
        { title: '皮卡', desc: '除驾驶室外还需清洁货箱。提供含/不含货箱套餐。' },
      ],
    },
    location: {
      eyebrow: '您希望在哪里洗车？', title: '上门洗车或 TAOMAN GROUP INVESTMENTS 中心：由您选择。',
      description: '两种方式各有优势。我们根据您的时间安排、水源和空间条件以及期望的服务水平帮您选择。',
      home: { title: '上门洗车', description: '团队携带独立设备（储水、吸尘器、产品）到您处。节省时间：无需出行和等待。适合家庭、企业主和外籍人士。', bullets: ['无需排队', '可在您监督下作业', '适合同时清洗 2 辆及以上', '按区域透明收取上门费'] },
      center: { title: 'TAOMAN GROUP INVESTMENTS 洗车中心', description: '中心配备重型设备：工业高压、吸尘臂、有顶有光的工位。您在专属休息区等候车辆处理。', bullets: ['更强大的专业设备', '价格比上门更优惠', '舒适的等候区', '无需预约（视客流量）'] },
    },
    form: {
      eyebrow: '索取报价', title: '2 分钟完成您的申请',
      description: '填写车辆信息，我们的团队将在 24 小时内联系您，提供时段和固定价格。',
      success: '报价已成功发送！我们将尽快与您联系。',
      sending: '发送中...', submit: '发送我的报价申请',
      errorGeneric: '无法发送您的报价申请。', errorNetwork: '网络错误，请稍后重试。',
      selectPlaceholder: '请选择',
      fields: {
        washType: { label: '清洗类型', options: ['内饰清洗', '外观清洗', '全面清洗'] },
        wish: { label: '您希望', options: ['上门洗车', '在 TAOMAN GROUP INVESTMENTS 洗车中心'] },
        vehicleType: { label: '车型', options: ['微型车', '轿车', '紧凑型', 'SUV', '四驱', '厢式车', '摩托车'] },
        brand: { label: '品牌与型号', placeholder: '例：Toyota Corolla' },
        date: { label: '期望日期' }, time: { label: '期望时间' },
        name: { label: '您的姓名', placeholder: '您的全名' },
        phone: { label: '电话', placeholder: '+228 ...' },
        address: { label: '您的地址', placeholder: '您的完整地址' },
        notes: { label: '补充说明', placeholder: '请说明车辆状况、优先处理区域、时间限制...' },
      },
    },
    sidebar: { eyebrow: '为什么选择 TAOMAN GROUP INVESTMENTS？', title: '为车辆全生命周期而设计的服务', description: '我们不仅销售一次清洗：我们提供定期护理，保护车身、座舱和转售价值。', equipmentTitle: '专业设备', equipmentDesc: '可控高压、工业吸尘器、认证超细纤维手套、适配现代材料的产品。' },
    faq: {
      eyebrow: '洗车常见问题', title: '您的问题，我们清晰的回答',
      items: [
        { question: '普通洗车和 TAOMAN GROUP INVESTMENTS 洗车有何不同？', answer: '普通洗车往往只是水和泡沫。TAOMAN GROUP INVESTMENTS 洗车遵循检查清单、适配材料的产品、质量检验以及不满意免费返工政策。我们把您的车当作自己的车。' },
        { question: '每月应洗车几次？', answer: '一般城市条件下，每 15 天全面清洗一次即可，其间辅以外观清洗。恶劣条件（工地、越野、极多尘天气）建议每周一次。' },
        { question: '高压清洗会损伤车身吗？', answer: '不会，在压力可控、距离正确的情况下。我们的操作员均受过培训。误用高压可能掀起旧漆或密封胶——因此我们总是在作业前检查车辆。' },
        { question: '织物座椅洗发有风险吗？', answer: '没有。我们使用温和洗发、轻刷和提取式吸尘器去除残留水分。座椅数小时内干燥，无异味无收缩。' },
        { question: '可以上门洗摩托车吗？', answer: '可以。摩托车需要特别护理（镀铬、排气管、复杂轮毂）且必须手工清洗。我们的摩托车套餐包含全部内容。' },
        { question: '接受哪些支付方式？', answer: 'Mobile Money（Tmoney、Flooz）、现金、银行转账和银行卡。每次服务均开具发票，便于企业车队使用。' },
      ],
    },
    finalCta: { title: '您的车辆值得专业护理', description: '不到 2 分钟即可申请个性化报价。我们的团队将在 24 小时内回复明确价格和确认时段。', btnServices: '查看所有服务', btnAdvisor: '咨询顾问' },
  },
};

export const getCarwashTranslations = (language) => CARWASH[language] || CARWASH.FR;
export default CARWASH;
