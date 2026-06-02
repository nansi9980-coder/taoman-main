import { useMemo } from 'react';
import { useSiteContent } from '../context/SiteContentContext';

/** Visibilité des sections pilotées depuis l’admin (Paramètres → siteFeatures). */
export function useSiteFeatures() {
  const { section, content } = useSiteContent();

  return useMemo(() => {
    const raw = section('siteFeatures') || {};
    return {
      leadersSectionVisible: raw.leadersSectionVisible === true,
      simulatorPublicVisible: raw.simulatorPublicVisible === true,
    };
  }, [section, content]);
}
