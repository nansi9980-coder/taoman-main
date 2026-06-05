/** Parse GET /content/texts array into { sectionKey: parsedObject } */
export function parseSiteContentMap(data) {
  if (!Array.isArray(data)) return {};
  return data.reduce((acc, item) => {
    try {
      acc[item.section] =
        typeof item.content === 'string' ? JSON.parse(item.content) : item.content;
    } catch {
      acc[item.section] = item.content;
    }
    return acc;
  }, {});
}

function toStatItem(s, i) {
  return {
    label: s.label || '',
    value: s.value ?? '',
    suffix: s.suffix,
    icon: s.icon || String(i + 1).padStart(2, '0'),
  };
}

/** Admin statistics section → home page stat cards */
export function buildStatsFromSection(section) {
  if (Array.isArray(section) && section.length > 0) {
    return section.map(toStatItem);
  }
  if (!section || typeof section !== 'object') return null;
  if (Array.isArray(section.items) && section.items.length > 0) {
    return section.items.map(toStatItem);
  }
  const items = [];
  for (let i = 0; i < 4; i++) {
    const value = section[`value${i}`];
    const label = section[`label${i}`];
    if (value || label) {
      items.push(toStatItem({ label, value, icon: section[`icon${i}`] }, i));
    }
  }
  return items.length ? items : null;
}

/** Clés legacy en base (seed) → clés vitrine */
export const LEGACY_SECTION_KEYS = {
  hero: ['heroBanner'],
};

export function resolveSectionRaw(content, key) {
  if (!content || typeof content !== 'object') return {};
  if (Object.prototype.hasOwnProperty.call(content, key)) return content[key] ?? {};
  for (const legacy of LEGACY_SECTION_KEYS[key] || []) {
    if (Object.prototype.hasOwnProperty.call(content, legacy)) return content[legacy] ?? {};
  }
  return {};
}

/** Admin sectors / testimonials { items: [...] } */
export function normalizeItemsSection(section, fallback = []) {
  if (Array.isArray(section?.items) && section.items.length > 0) return section.items;
  if (Array.isArray(section) && section.length > 0) return section;
  return fallback;
}
