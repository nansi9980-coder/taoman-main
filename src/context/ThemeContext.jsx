import React, { createContext, useContext, useEffect, useState } from 'react';
import { API_URL } from "../config";

const ThemeContext = createContext();

function applyThemeToRoot(theme) {
  if (!theme) return;
  const root = document.documentElement;
  const primary = theme.primary || theme.palette?.primary;
  const secondary = theme.secondary || theme.palette?.secondary || primary;
  const surface = theme.surface || theme.palette?.surface;
  const background = theme.background || theme.palette?.background;

  if (primary) {
    root.style.setProperty('--color-primary', primary);
    root.style.setProperty('--color-primary-container', secondary);
    root.style.setProperty('--color-on-primary', '#ffffff');
    root.style.setProperty('--color-on-primary-container', '#ffffff');
  }
  if (secondary) {
    root.style.setProperty('--color-secondary', secondary);
    root.style.setProperty('--color-secondary-container', secondary);
  }
  if (surface) root.style.setProperty('--color-surface', surface);
  if (background) root.style.setProperty('--color-background', background);
}

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
    fetch(`${API_URL}/theme/active`)
      .then(res => res.json())
      .then((theme) => {
        if (colorMode === 'light' && theme) {
          applyThemeToRoot(theme);
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
