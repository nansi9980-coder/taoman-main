/**
 * Page Personnel & flotte déménagement — contenus par langue.
 */

const FR = {
  searchPlaceholder: 'Rechercher un véhicule, une ville…',
  vehicles: [
    {
      title: 'Camion de déménagement 10 m³',
      location: 'Adewi, Lomé',
      details: 'Idéal pour studios, F2, F3 ou bureaux compacts.',
      capacity: '10 m³',
      crew: '2 déménageurs',
      availability: 'Disponible',
      price: 'À partir de 75 000 FCFA',
      badge: 'Populaire',
      features: ['Sangles & couvertures', 'Hayon élévateur', 'Bâche imperméable'],
    },
    {
      title: 'Fourgon utilitaire 6 m³',
      location: 'Agoè Zongo, Lomé',
      details: 'Petits volumes, déménagement étudiant ou gros électroménager.',
      capacity: '6 m³',
      crew: '1 conducteur + 1 manutentionnaire',
      availability: 'Disponible',
      price: 'À partir de 45 000 FCFA',
      badge: 'Économique',
      features: ['Chargement rapide', 'Carburant inclus', 'Sangles fournies'],
    },
    {
      title: 'Camion 20 m³ longue distance',
      location: 'Lomé Centre',
      details: 'Villas, bureaux entiers ou trajets inter-villes et CEDEAO.',
      capacity: '20 m³',
      crew: '3 déménageurs',
      availability: 'Sur réservation',
      price: 'À partir de 150 000 FCFA',
      badge: 'Longue distance',
      features: ['Itinéraire CEDEAO', 'Démontage / remontage', 'Assurance marchandise'],
    },
  ],
  processSteps: [
    { title: '1. Premier contact', desc: 'Appelez-nous ou remplissez le formulaire. Évaluation en 5 minutes.' },
    { title: '2. Visite technique', desc: 'Visite gratuite pour mesurer le volume et les contraintes.' },
    { title: '3. Devis détaillé', desc: 'Devis sous 24 h : prix, équipe, matériel et planning.' },
    { title: '4. Jour J', desc: 'Emballage, transport et réinstallation chez vous.' },
  ],
  commitments: [
    { title: 'Marchandise assurée', desc: 'Vos biens sont couverts pendant tout le transport.' },
    { title: 'Équipe identifiée', desc: 'Déménageurs en uniforme TAOMAN et identifiables.' },
    { title: 'Matériel fourni', desc: 'Cartons, bulle, sangles, couvertures, diables inclus.' },
    { title: 'Délais respectés', desc: 'Ponctualité garantie avec pénalité en cas de retard.' },
  ],
  types: [
    { title: 'Particuliers', desc: 'Studios à villas — emballage, transport et réinstallation. Visite gratuite.' },
    { title: 'Entreprises', desc: 'Bureaux, archives, serveurs — planification hors heures ouvrées.' },
    { title: 'Commerces & ateliers', desc: 'Stock et équipements lourds — transfert sécurisé.' },
  ],
  labels: {
    capacity: 'Capacité',
    crew: 'Équipe',
    availability: 'Disponibilité',
    from: 'À partir de',
    book: 'Réserver',
    fleetBadge: 'Flotte propre',
    coverage: 'Lomé • Togo • CEDEAO',
    typesIntro: 'Que vous soyez particulier, entreprise ou commerçant, nos équipes adaptent méthode et matériel.',
    vehiclesIntro: 'Trois formats pour votre volume, distance et budget. Véhicules entretenus dans notre atelier TAOMAN.',
    vehicleSearch: 'Rechercher par type, lieu ou volume…',
    commitmentsIntro: 'Quatre promesses simples qui font la différence sur le terrain.',
    processIntro: 'Une procédure claire en quatre étapes pour un déménagement sans stress.',
    noResults: 'Aucun véhicule ne correspond à votre recherche.',
    noVehicleTitle: 'Aucun véhicule trouvé',
    noVehicleHint: 'Contactez-nous : nous adaptons notre flotte à votre besoin.',
  },
};

const EN = {
  searchPlaceholder: 'Search for a vehicle, city…',
  vehicles: [
    {
      title: '10 m³ moving truck',
      location: 'Adewi, Lomé',
      details: 'Ideal for studios, small apartments or compact offices.',
      capacity: '10 m³',
      crew: '2 movers',
      availability: 'Available',
      price: 'From 75,000 CFA',
      badge: 'Popular',
      features: ['Straps & blankets', 'Tail lift', 'Waterproof cover'],
    },
    {
      title: '6 m³ utility van',
      location: 'Agoè Zongo, Lomé',
      details: 'Small loads, student moves or large appliances.',
      capacity: '6 m³',
      crew: '1 driver + 1 handler',
      availability: 'Available',
      price: 'From 45,000 CFA',
      badge: 'Economy',
      features: ['Fast loading', 'Fuel included', 'Straps provided'],
    },
    {
      title: '20 m³ long-distance truck',
      location: 'Lomé Centre',
      details: 'Villas, full offices or inter-city and ECOWAS routes.',
      capacity: '20 m³',
      crew: '3 movers',
      availability: 'On request',
      price: 'From 150,000 CFA',
      badge: 'Long distance',
      features: ['ECOWAS routes', 'Disassembly / reassembly', 'Goods insurance'],
    },
  ],
  processSteps: [
    { title: '1. First contact', desc: 'Call us or fill the form. Needs assessed in 5 minutes.' },
    { title: '2. Site visit', desc: 'Free visit to measure volume and constraints.' },
    { title: '3. Detailed quote', desc: 'Quote within 24 h: price, team, equipment and schedule.' },
    { title: '4. Moving day', desc: 'Packing, transport and setup at your new location.' },
  ],
  commitments: [
    { title: 'Insured goods', desc: 'Your belongings are covered throughout transport.' },
    { title: 'Identified team', desc: 'TAOMAN uniformed, identifiable movers.' },
    { title: 'Equipment included', desc: 'Boxes, bubble wrap, straps, blankets and dollies.' },
    { title: 'On-time delivery', desc: 'Punctuality commitment with penalty if late.' },
  ],
  types: [
    { title: 'Individuals', desc: 'Studios to villas — pack, move and reinstall. Free home visit.' },
    { title: 'Businesses', desc: 'Offices, archives, servers — planning outside business hours.' },
    { title: 'Shops & workshops', desc: 'Stock and heavy equipment — secure transfer.' },
  ],
  labels: {
    capacity: 'Capacity',
    crew: 'Team',
    availability: 'Availability',
    from: 'From',
    book: 'Book',
    fleetBadge: 'Own fleet',
    coverage: 'Lomé • Togo • ECOWAS',
    typesIntro: 'Whether you are an individual, business or shop, our teams adapt method and equipment.',
    vehiclesIntro: 'Three formats for volume, distance and budget. Vehicles maintained in our TAOMAN workshop.',
    vehicleSearch: 'Search by type, location or volume…',
    commitmentsIntro: 'Four simple promises that make the difference on the ground.',
    processIntro: 'A clear four-step process for a stress-free move.',
    noResults: 'No vehicle matches your search.',
    noVehicleTitle: 'No vehicle found',
    noVehicleHint: 'Contact us — we will adapt our fleet to your needs.',
  },
};

const PACKS = { FR, EN, ES: EN, PT: EN, DE: EN, AR: EN, ZH: EN };

export function getMovingPersonnelContent(language) {
  return PACKS[language] || EN;
}
