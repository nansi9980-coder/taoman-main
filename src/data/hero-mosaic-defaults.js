export const HERO_MOSAIC_TILES = [
  { id: 'logistics', tag: 'Logistique', title: 'Flotte multi-utilitaires', imageUrl: '' },
  { id: 'services', tag: 'Services', title: 'Lavage premium', imageUrl: '' },
  { id: 'teams', tag: 'Équipes', title: 'Conducteurs certifiés', imageUrl: '' },
];

export const HERO_MOSAIC_KPI_DEFAULTS = {
  liveLabel: 'Live',
  livePill: 'Suivi temps réel',
  kpiPercent: 96,
  kpiLabel: 'satisfaction client',
};

export function mergeHeroMosaicTiles(cmsTiles = []) {
  const byId = new Map();
  (Array.isArray(cmsTiles) ? cmsTiles : []).forEach((item) => {
    const id = item?.id && HERO_MOSAIC_TILES.some((t) => t.id === item.id) ? item.id : null;
    if (!id) return;
    byId.set(id, { ...byId.get(id), ...item, id });
  });
  return HERO_MOSAIC_TILES.map((t) => {
    const cms = byId.get(t.id);
    return {
      id: t.id,
      tag: cms?.tag?.trim() || t.tag,
      title: cms?.title?.trim() || t.title,
      imageUrl: cms?.imageUrl || '',
    };
  });
}

export function mergeHeroMosaicBlock(mosaic = {}) {
  return {
    ...HERO_MOSAIC_KPI_DEFAULTS,
    ...mosaic,
    tiles: mergeHeroMosaicTiles(mosaic.tiles),
  };
}
