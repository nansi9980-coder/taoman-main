/** Champs média hérités du CMS français vers les autres langues. */
const MEDIA_FIELDS = ['imageUrl', 'photoUrl', 'heroImage', 'backgroundImage', 'logoUrl'];

function hasMediaValue(value) {
  return value != null && String(value).trim() !== '';
}

function copyMissingMedia(target, source) {
  if (!source || typeof source !== 'object' || !target || typeof target !== 'object') return target;
  const out = { ...target };
  for (const field of MEDIA_FIELDS) {
    if (!hasMediaValue(out[field]) && hasMediaValue(source[field])) {
      out[field] = source[field];
    }
  }
  return out;
}

function itemKey(item) {
  if (!item || typeof item !== 'object') return null;
  return item.id || item.slug || null;
}

function mergeItemListsByKey(frList, localizedList) {
  const frArr = Array.isArray(frList) ? frList : [];
  const locArr = Array.isArray(localizedList) ? localizedList : [];
  if (!frArr.length) return locArr;
  if (!locArr.length) return frArr.map((item) => ({ ...item }));

  const frByKey = new Map();
  frArr.forEach((item, idx) => {
    const key = itemKey(item) ?? `__idx_${idx}`;
    frByKey.set(key, item);
  });

  return locArr.map((item, idx) => {
    const key = itemKey(item) ?? `__idx_${idx}`;
    const frItem = frByKey.get(key) ?? frArr[idx];
    return frItem ? copyMissingMedia(item, frItem) : item;
  });
}

function mergeStatsByIndex(frStats, locStats) {
  const frArr = Array.isArray(frStats) ? frStats : [];
  const locArr = Array.isArray(locStats) ? locStats : [];
  if (!frArr.length) return locArr;
  if (!locArr.length) return frArr.map((item) => ({ ...item }));
  return locArr.map((item, idx) => {
    const frItem = frArr[idx];
    if (!frItem) return item;
    return {
      ...frItem,
      ...item,
      value: hasMediaValue(item?.value) ? item.value : frItem.value,
      label: hasMediaValue(item?.label) ? item.label : frItem.label,
      icon: hasMediaValue(item?.icon) ? item.icon : frItem.icon,
    };
  });
}

function mergeRealisationItemsById(frItems, locItems) {
  const frArr = Array.isArray(frItems) ? frItems : [];
  const locArr = Array.isArray(locItems) ? locItems : [];
  if (!frArr.length) return locArr;
  if (!locArr.length) return frArr.map((item) => ({ ...item }));

  const frByKey = new Map();
  frArr.forEach((item, idx) => {
    const key = itemKey(item) ?? `__idx_${idx}`;
    frByKey.set(key, item);
  });

  return locArr.map((item, idx) => {
    const key = itemKey(item) ?? `__idx_${idx}`;
    const frItem = frByKey.get(key) ?? frArr[idx];
    if (!frItem) return item;
    return {
      ...frItem,
      ...item,
      imageUrl: hasMediaValue(frItem.imageUrl) ? frItem.imageUrl : item.imageUrl || '',
    };
  });
}

function mergeMosaicTiles(frMosaic, localizedMosaic) {
  if (!frMosaic?.tiles?.length) return localizedMosaic;
  const loc = localizedMosaic || {};
  return {
    ...loc,
    tiles: mergeItemListsByKey(frMosaic.tiles, loc.tiles),
  };
}

/**
 * Copie les URLs média du contenu FR vers la locale active sans écraser les médias déjà définis.
 */
export function inheritFrenchMedia(frContent, localizedContent, sectionKey) {
  if (!frContent || typeof frContent !== 'object') return localizedContent;
  if (!localizedContent || typeof localizedContent !== 'object') {
    return JSON.parse(JSON.stringify(frContent));
  }

  let result = copyMissingMedia(localizedContent, frContent);

  switch (sectionKey) {
    case 'hero':
    case 'heroBanner':
      result = {
        ...result,
        mosaic: mergeMosaicTiles(frContent.mosaic, result.mosaic),
      };
      break;

    case 'about':
      result = {
        ...result,
        leaders: mergeItemListsByKey(frContent.leaders, result.leaders),
      };
      break;

    case 'sectors':
      result = {
        ...result,
        items: mergeItemListsByKey(frContent.items, result.items),
      };
      break;

    case 'realisations':
      result = {
        ...result,
        items: mergeRealisationItemsById(frContent.items, result.items),
      };
      break;

    case 'servicesPage':
      result = {
        ...result,
        heroSlides: mergeItemListsByKey(frContent.heroSlides, result.heroSlides),
      };
      break;

    case 'operationalServices':
      result = {
        ...result,
        items: mergeItemListsByKey(frContent.items, result.items),
      };
      break;

    case 'testimonials':
      result = {
        ...result,
        items: mergeItemListsByKey(frContent.items, result.items),
      };
      break;

    case 'investmentTgi':
    case 'investmentTie':
      result = {
        ...result,
        stats: mergeStatsByIndex(frContent.stats, result.stats),
      };
      break;

    default:
      if (Array.isArray(result.items) && Array.isArray(frContent.items)) {
        result = {
          ...result,
          items: mergeItemListsByKey(frContent.items, result.items),
        };
      }
      break;
  }

  return result;
}
