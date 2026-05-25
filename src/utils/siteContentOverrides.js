const STORAGE_KEY = 'taoman-cms-overrides';

export function loadContentOverrides() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveContentOverride(sectionKey, data) {
  const all = loadContentOverrides();
  all[sectionKey] = data;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  window.dispatchEvent(new CustomEvent('taoman-cms-updated'));
}

export function clearContentOverride(sectionKey) {
  const all = loadContentOverrides();
  delete all[sectionKey];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  window.dispatchEvent(new CustomEvent('taoman-cms-updated'));
}
