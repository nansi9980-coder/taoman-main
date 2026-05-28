import { useSiteContent } from '../context/SiteContentContext';

/**
 * Paramètres médias paramétrables depuis le dashboard.
 *
 * Section : 'mediaSettings'
 *   - autoplayInterval (en ms)       — défaut 6000
 *   - autoplayEnabled (bool)         — défaut true
 *   - pauseOnHover (bool)            — défaut true
 *   - transitionMs (en ms)           — défaut 800
 *   - showIndicators (bool)          — défaut true
 *   - showArrows (bool)              — défaut true
 *   - kenBurns (bool, zoom doux)     — défaut true
 */
export const DEFAULT_MEDIA_SETTINGS = {
  autoplayInterval: 4500,
  autoplayEnabled: true,
  pauseOnHover: true,
  transitionMs: 800,
  showIndicators: true,
  showArrows: true,
  kenBurns: true,
};

export function useMediaSettings() {
  const { section } = useSiteContent();
  const raw = section('mediaSettings') || {};

  // Conversion sécurisée des nombres (peuvent venir en string depuis le dashboard).
  const toInt = (v, fallback) => {
    if (v === undefined || v === null || v === '') return fallback;
    const n = Number(v);
    return Number.isFinite(n) && n > 0 ? Math.round(n) : fallback;
  };
  const toBool = (v, fallback) => {
    if (v === undefined || v === null) return fallback;
    if (typeof v === 'boolean') return v;
    if (typeof v === 'string') return v.toLowerCase() !== 'false' && v !== '0';
    return Boolean(v);
  };

  return {
    autoplayInterval: toInt(raw.autoplayInterval, DEFAULT_MEDIA_SETTINGS.autoplayInterval),
    autoplayEnabled: toBool(raw.autoplayEnabled, DEFAULT_MEDIA_SETTINGS.autoplayEnabled),
    pauseOnHover: toBool(raw.pauseOnHover, DEFAULT_MEDIA_SETTINGS.pauseOnHover),
    transitionMs: toInt(raw.transitionMs, DEFAULT_MEDIA_SETTINGS.transitionMs),
    showIndicators: toBool(raw.showIndicators, DEFAULT_MEDIA_SETTINGS.showIndicators),
    showArrows: toBool(raw.showArrows, DEFAULT_MEDIA_SETTINGS.showArrows),
    kenBurns: toBool(raw.kenBurns, DEFAULT_MEDIA_SETTINGS.kenBurns),
  };
}
