import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { API_URL } from '../config';
import { parseSiteContentMap } from '../utils/siteContent';

const SiteContentContext = createContext(null);

export function SiteContentProvider({ children }) {
  const [content, setContent] = useState({});
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [textsRes, servicesRes] = await Promise.all([
        fetch(`${API_URL}/content/texts`, { cache: 'no-store' }),
        fetch(`${API_URL}/content/services`, { cache: 'no-store' }),
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

  const section = useCallback((key) => content[key] || {}, [content]);

  const value = useMemo(
    () => ({ content, services, loading, section, reload: load }),
    [content, services, loading, section, load],
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
