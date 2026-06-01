import v2Defaults from '../data/cms-v2-defaults.json';
import { getLocalizedCmsV2Default } from '../i18n/cms-legal-blocks';
import { isFrenchLocale } from './pickLocale';

export const CMS_V2_KEYS = [
  'legal',
  'privacy',
  'terms',
  'jobs',
  'devisLavage',
  'devisDemenagement',
  'devisBureaux',
  'devisClimatisation',
];

export function getCmsV2Default(key) {
  const d = v2Defaults[key];
  return d ? JSON.parse(JSON.stringify(d)) : {};
}

function mergeBlocks(defaultBlocks = [], apiBlocks = []) {
  if (!apiBlocks?.length) return defaultBlocks;
  return apiBlocks.map((b, i) => ({
    ...defaultBlocks[i],
    ...b,
    listItems: b.listItems?.length ? b.listItems : defaultBlocks[i]?.listItems,
  }));
}

export function mergeCmsSection(key, api = {}, language = 'FR') {
  const defaults = isFrenchLocale(language)
    ? getCmsV2Default(key)
    : getLocalizedCmsV2Default(key, language);
  if (!api || Object.keys(api).length === 0) return defaults;

  const out = { ...defaults, ...api };
  if (defaults.blocks || api.blocks) {
    out.blocks = mergeBlocks(defaults.blocks, api.blocks);
  }
  if (defaults.categories || api.categories) {
    out.categories = api.categories?.length ? api.categories : defaults.categories;
  }
  return out;
}
