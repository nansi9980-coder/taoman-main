import React, { createContext, useContext, useEffect, useState } from 'react';
import { API_URL } from "../config";

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
  }, [colorMode, themeLoaded]);

  useEffect(() => {
    fetch(`${API_URL}/theme/active`)
      .then(res => res.json())
      .then(theme => {
        if (colorMode === 'light' && theme && theme.palette) {
          const p = theme.palette;
          const root = document.documentElement;
          
          if (p.primary) root.style.setProperty('--color-primary', p.primary);
          if (p.primaryContainer) root.style.setProperty('--color-primary-container', p.primaryContainer);
          if (p.onPrimary) root.style.setProperty('--color-on-primary', p.onPrimary);
          if (p.onPrimaryContainer) root.style.setProperty('--color-on-primary-container', p.onPrimaryContainer);
          
          if (p.secondary) root.style.setProperty('--color-secondary', p.secondary);
          if (p.secondaryContainer) root.style.setProperty('--color-secondary-container', p.secondaryContainer);
          if (p.onSecondary) root.style.setProperty('--color-on-secondary', p.onSecondary);
          if (p.onSecondaryContainer) root.style.setProperty('--color-on-secondary-container', p.onSecondaryContainer);

          if (p.tertiary) root.style.setProperty('--color-tertiary', p.tertiary);
          if (p.tertiaryContainer) root.style.setProperty('--color-tertiary-container', p.tertiaryContainer);
          if (p.onTertiary) root.style.setProperty('--color-on-tertiary', p.onTertiary);
          if (p.onTertiaryContainer) root.style.setProperty('--color-on-tertiary-container', p.onTertiaryContainer);

          if (p.surface) root.style.setProperty('--color-surface', p.surface);
          if (p.surfaceContainerLow) root.style.setProperty('--color-surface-container-low', p.surfaceContainerLow);
          if (p.surfaceContainer) root.style.setProperty('--color-surface-container', p.surfaceContainer);
          if (p.onSurface) root.style.setProperty('--color-on-surface', p.onSurface);
          if (p.onSurfaceVariant) root.style.setProperty('--color-on-surface-variant', p.onSurfaceVariant);
        }
      })
      .catch(err => console.error("Error loading theme:", err))
      .finally(() => setThemeLoaded(true));
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={{ themeLoaded, colorMode, setColorMode }}>
      <div className={`transition-opacity duration-500 ${themeLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
