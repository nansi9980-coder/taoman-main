import { HOME_SERVICE_FALLBACKS } from '../data/home-service-fallbacks';
import { isFrenchLocale } from './pickLocale';

/**
 * Applique les traductions aux cartes services API (accueil).
 */
export function localizeServiceCards(services, language) {
  const list = Array.isArray(services) ? services : [];
  if (isFrenchLocale(language)) return list;

  const activeFallback = HOME_SERVICE_FALLBACKS[language] || HOME_SERVICE_FALLBACKS.EN;

  return list.map((s, index) => {
    const fb =
      activeFallback.services.find((x) => x.icon === s.icon) || activeFallback.services[index];
    if (!fb) return s;
    return {
      ...s,
      title: fb.title,
      description: fb.description,
      price: fb.price,
      features: fb.features,
      href: s.href || fb.href,
    };
  });
}

export function getHomeServiceFallbacks(language) {
  return HOME_SERVICE_FALLBACKS[language] || HOME_SERVICE_FALLBACKS.EN;
}
