import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { API_URL } from '../config';
import { parseSiteContentMap } from '../utils/siteContent';
import { loadContentOverrides } from '../utils/siteContentOverrides';
import { resolveCmsForLanguage } from '../utils/cmsLocale';
import { localizeServiceCards, getHomeServiceFallbacks } from '../utils/localizeServiceCards';
import { useLanguage } from './LanguageContext';

const SiteContentContext = createContext(null);

export function SiteContentProvider({ children }) {
  const { language } = useLanguage();
  const [content, setContent] = useState({});
  const [overrides, setOverrides] = useState(() => loadContentOverrides());
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const cacheHeaders = {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      };
      const [textsRes, servicesRes] = await Promise.all([
        fetch(`${API_URL}/content/texts`, { 
          cache: 'no-store',
          headers: cacheHeaders,
        }),
        fetch(`${API_URL}/content/services`, { 
          cache: 'no-store',
          headers: cacheHeaders,
        }),
      ]);
      const texts = textsRes.ok ? await textsRes.json() : [];
      const svc = servicesRes.ok ? await servicesRes.json() : [];
      setContent(parseSiteContentMap(texts));
      setServices(Array.isArray(svc) ? svc.filter((s) => s.published !== false) : []);
    } catch {
      setContent({});
      setServices([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    const sync = () => {
      setOverrides(loadContentOverrides());
      load();
    };
    window.addEventListener('taoman-cms-updated', sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('taoman-cms-updated', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const section = useCallback(
    (key) => {
      const base = content[key] || {};
      const patch = overrides[key];
      const merged = patch && typeof patch === 'object' ? { ...base, ...patch } : base;
      return resolveCmsForLanguage(merged, language, key);
    },
    [content, overrides, language],
  );

  const localizedServices = useMemo(() => {
    const localized = localizeServiceCards(services, language);
    if (localized.length > 0) return localized;
    return getHomeServiceFallbacks(language).services;
  }, [services, language]);

  const value = useMemo(
    () => ({ content, services: localizedServices, loading, section, reload: load, language }),
    [content, localizedServices, loading, section, load, language],
  );

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const ctx = useContext(SiteContentContext);
  if (!ctx) {
    throw new Error('useSiteContent must be used within SiteContentProvider');
  }
  return ctx;
}
