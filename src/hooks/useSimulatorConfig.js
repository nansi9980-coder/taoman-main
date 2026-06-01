import { useEffect, useMemo } from 'react';
import { useSiteContent } from '../context/SiteContentContext';
import { mergeSimulatorConfig } from '../utils/investmentSimulator';

/**
 * Config simulateur depuis le CMS (section simulator) + rechargement API.
 */
export function useSimulatorConfig() {
  const { section, reload, content } = useSiteContent();
  const config = useMemo(() => mergeSimulatorConfig(section('simulator')), [content]);

  useEffect(() => {
    const onUpdate = () => reload();
    window.addEventListener('taoman-cms-updated', onUpdate);
    return () => window.removeEventListener('taoman-cms-updated', onUpdate);
  }, [reload]);

  return config;
}
