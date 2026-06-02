import React, { createContext, useContext, useEffect, useState } from 'react';
import { API_URL } from "../config";
import { applyThemePalette } from '../utils/applyThemePalette';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [colorMode, setColorMode] = useState(() => localStorage.getItem('taoman-color-mode') || 'light');

  useEffect(() => {
    localStorage.setItem('taoman-color-mode', colorMode);
    document.documentElement.dataset.theme = colorMode;

    const palette = colorMode === 'dark'
      ? {
          surface: '#07111f',
          surfaceContainerLow: '#0f1d2f',
          surfaceContainer: '#13243a',
          onSurface: '#f4f7fb',
          onSurfaceVariant: '#b8c4d6',
          outlineVariant: '#31445f',
          background: '#07111f',
        }
      : {
          surface: '#faf8ff',
          surfaceContainerLow: '#f3f3fd',
          surfaceContainer: '#ededf8',
          onSurface: '#191b23',
          onSurfaceVariant: '#434654',
          outlineVariant: '#c3c6d6',
          background: '#faf8ff',
        };

    const root = document.documentElement;
    root.style.setProperty('--color-surface', palette.surface);
    root.style.setProperty('--color-surface-container-low', palette.surfaceContainerLow);
    root.style.setProperty('--color-surface-container', palette.surfaceContainer);
    root.style.setProperty('--color-on-surface', palette.onSurface);
    root.style.setProperty('--color-on-surface-variant', palette.onSurfaceVariant);
    root.style.setProperty('--color-outline-variant', palette.outlineVariant);
    root.style.setProperty('--color-background', palette.background);
  }, [colorMode]);

  useEffect(() => {
    fetch(`${API_URL}/theme/active`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    })
      .then(res => res.json())
      .then((theme) => {
        if (colorMode === 'light' && theme) {
          applyThemePalette(theme);
        }
      })
      .catch(err => console.error("Error loading theme:", err))
      .finally(() => setThemeLoaded(true));
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={{ themeLoaded, colorMode, setColorMode }}>
      <div className={`transition-opacity duration-500 ${themeLoaded ? 'opacity-100' : 'opacity-100'}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
