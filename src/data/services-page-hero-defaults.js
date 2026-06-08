export const SERVICES_PAGE_HERO_SLIDES = [
  { id: 'lavage-1', title: 'Centre de lavage auto & moto', category: 'Lavage', imageUrl: '' },
  { id: 'lavage-2', title: 'Parking client – activité commerciale', category: 'Lavage', imageUrl: '' },
  { id: 'demenagement', title: 'Camion de déménagement TAOMAN GROUP INVESTMENTS', category: 'Déménagement', imageUrl: '' },
  { id: 'transport', title: 'Conducteur TAOMAN GROUP INVESTMENTS sur le terrain', category: 'Transport', imageUrl: '' },
  { id: 'equipe', title: 'Entretien professionnel de bureaux', category: 'Entretien', imageUrl: '' },
];

export function mergeServicesPageHeroSlides(cmsList = []) {
  const byId = new Map();
  (Array.isArray(cmsList) ? cmsList : []).forEach((item) => {
    const id = item?.id && SERVICES_PAGE_HERO_SLIDES.some((t) => t.id === item.id) ? item.id : null;
    if (!id) return;
    byId.set(id, { ...byId.get(id), ...item, id });
  });
  return SERVICES_PAGE_HERO_SLIDES.map((t) => {
    const cms = byId.get(t.id);
    return {
      id: t.id,
      title: cms?.title?.trim() || t.title,
      category: cms?.category?.trim() || t.category,
      imageUrl: cms?.imageUrl || '',
    };
  });
}
