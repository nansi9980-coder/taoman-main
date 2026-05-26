import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { LANGUAGE_OPTIONS, getNavTranslations } from '../i18n/navigation';
import { getContentTranslations } from '../i18n/content';

const STORAGE_KEY = 'taoman-language';
const SUPPORTED_CODES = LANGUAGE_OPTIONS.map((l) => l.code);
const DEFAULT_CODE = 'FR';
const RTL_CODES = new Set(['AR']);

const LanguageContext = createContext(null);

/**
 * Détection automatique de la langue préférée du navigateur,
 * fallback FR si non supportée.
 */
function detectInitialLanguage() {
  if (typeof window === 'undefined') return DEFAULT_CODE;

  const stored = window.localStorage?.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_CODES.includes(stored)) return stored;

  const browser = (navigator.language || navigator.languages?.[0] || 'fr').slice(0, 2).toLowerCase();
  const match = LANGUAGE_OPTIONS.find((l) => l.lang === browser);
  return match?.code || DEFAULT_CODE;
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(DEFAULT_CODE);

  useEffect(() => {
    setLanguageState(detectInitialLanguage());
  }, []);

  // Met à jour <html lang> et <html dir> + persist localStorage
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const meta = LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];
    document.documentElement.lang = meta.lang;
    document.documentElement.dir = RTL_CODES.has(language) ? 'rtl' : 'ltr';
    document.documentElement.dataset.lang = language;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* ignore */
    }
  }, [language]);

  // Sync entre onglets
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key === STORAGE_KEY && event.newValue && SUPPORTED_CODES.includes(event.newValue)) {
        setLanguageState(event.newValue);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const setLanguage = useCallback((code) => {
    if (!code || !SUPPORTED_CODES.includes(code)) return;
    setLanguageState(code);
    // Émet un événement custom pour les composants qui n'utilisent pas encore le contexte
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('taoman:language-change', { detail: { code } }));
    }
  }, []);

  const value = useMemo(() => {
    const meta = LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];
    return {
      language,
      setLanguage,
      languageMeta: meta,
      isRTL: RTL_CODES.has(language),
      languages: LANGUAGE_OPTIONS,
      nav: getNavTranslations(language),
      content: getContentTranslations(language),
    };
  }, [language, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Fallback safe (par exemple si un composant est monté hors du provider)
    return {
      language: DEFAULT_CODE,
      setLanguage: () => {},
      languageMeta: LANGUAGE_OPTIONS[0],
      isRTL: false,
      languages: LANGUAGE_OPTIONS,
      nav: getNavTranslations(DEFAULT_CODE),
      content: getContentTranslations(DEFAULT_CODE),
    };
  }
  return ctx;
};

/**
 * Hook pratique : renvoie l'objet de traduction du namespace demandé.
 * Exemples : useT('home'), useT('home.hero'), useT('common').
 */
export const useT = (namespace = '') => {
  const { content } = useLanguage();
  if (!namespace) return content;
  return namespace.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : null), content) || {};
};
