import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { API_URL } from '../config';
import { parseSiteContentMap, resolveSectionRaw, LEGACY_SECTION_KEYS } from '../utils/siteContent';
import { loadContentOverrides } from '../utils/siteContentOverrides';
import { resolveCmsForLanguage } from '../utils/cmsLocale';
import { localizeServiceCards, getHomeServiceFallbacks } from '../utils/localizeServiceCards';
import { useLanguage } from './LanguageContext';

const SiteContentContext = createContext(null);

const CONTENT_CACHE_KEY = 'taoman-content-cache';

function loadContentCache() {
  try {
    const raw = localStorage.getItem(CONTENT_CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveContentCache(texts, services) {
  try {
    localStorage.setItem(CONTENT_CACHE_KEY, JSON.stringify({ texts, services }));
  } catch {}
}

export function SiteContentProvider({ children }) {
  const { language } = useLanguage();

  const [content, setContent] = useState(() => {
    const cache = loadContentCache();
    return cache ? parseSiteContentMap(cache.texts) : {};
  });
  const [overrides, setOverrides] = useState(() => loadContentOverrides());
  const [services, setServices] = useState(() => {
    const cache = loadContentCache();
    return cache && Array.isArray(cache.services)
      ? cache.services.filter((s) => s.published !== false)
      : [];
  });
  const [loading, setLoading] = useState(() => loadContentCache() === null);

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
      saveContentCache(texts, svc);
      setContent(parseSiteContentMap(texts));
      setServices(Array.isArray(svc) ? svc.filter((s) => s.published !== false) : []);
    } catch {
      // Garde le cache en cas d'erreur réseau
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
      const base = resolveSectionRaw(content, key);
      const hasApiSection =
        Object.prototype.hasOwnProperty.call(content, key)
        || (LEGACY_SECTION_KEYS[key] || []).some((legacy) =>
          Object.prototype.hasOwnProperty.call(content, legacy),
        );
      const patch = overrides[key];
      const merged =
        hasApiSection || !patch || typeof patch !== 'object'
          ? base
          : { ...base, ...patch };
      return resolveCmsForLanguage(merged, language, key);
    },
    [content, overrides, language],
  );

  const cmsReady = !loading;

  const localizedServices = useMemo(() => {
    const localized = localizeServiceCards(services, language);
    if (localized.length > 0) return localized;
    return getHomeServiceFallbacks(language).services;
  }, [services, language]);

  const value = useMemo(
    () => ({ content, services: localizedServices, loading, cmsReady, section, reload: load, language }),
    [content, localizedServices, loading, cmsReady, section, load, language],
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
