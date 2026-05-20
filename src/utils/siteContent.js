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

/** Admin statistics section → home page stat cards */
export function buildStatsFromSection(section) {
  if (Array.isArray(section) && section.length > 0) {
    return section.map((s, i) => ({
      label: s.label || '',
      value: s.value || '',
      icon: s.icon || String(i + 1).padStart(2, '0'),
    }));
  }
  if (!section || typeof section !== 'object') return null;
  const items = [];
  for (let i = 0; i < 4; i++) {
    const value = section[`value${i}`];
    const label = section[`label${i}`];
    if (value || label) {
      items.push({
        label: label || '',
        value: value || '',
        icon: String(i + 1).padStart(2, '0'),
      });
    }
  }
  return items.length ? items : null;
}

/** Admin sectors / testimonials { items: [...] } */
export function normalizeItemsSection(section, fallback = []) {
  if (Array.isArray(section?.items) && section.items.length > 0) return section.items;
  if (Array.isArray(section) && section.length > 0) return section;
  return fallback;
}
