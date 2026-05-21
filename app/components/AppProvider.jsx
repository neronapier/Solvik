'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useTweaks } from './tweaks-panel';

// Default tweak values — switch "mode" to "light" if you prefer the light theme as default.
export const TWEAK_DEFAULTS = {
  mode: 'dark',
  displayFont: 'manrope-tight',
  heroLayout: 'split',
  density: 'standard',
  corners: 'soft',
  showHeroStats: true,
  showGrain: true,
  showCalculator: true,
  videoAutoplay: true,
  italicAccents: true,
};

// Mode presets — semantic tokens covering all UI contrast cases
export const MODES = {
  light: {
    label: 'Light',
    vars: {
      '--bg':           '#FFFFFF',
      '--surface':      '#FAFAF7',
      '--ink':          '#0E0E0D',
      '--ink-soft':     '#5F5C53',
      '--ink-inverse':  '#FFFFFF',
      '--rule':         '#ECE6D9',
      '--brand':        '#2E6850',
      '--brand-deep':   '#143E30',
      '--brand-ink':    '#F8F4E6',
      '--sun':          '#D6B264',
      '--sun-ink':      '#0E0E0D',
    },
  },
  dark: {
    label: 'Dark',
    vars: {
      '--bg':           '#0F1115',
      '--surface':      '#16191F',
      '--ink':          '#F4EFE3',
      '--ink-soft':     '#9A968D',
      '--ink-inverse':  '#0F1115',
      '--rule':         '#262932',
      '--brand':        '#4D8770',
      '--brand-deep':   '#2E6850',
      '--brand-ink':    '#0F1115',
      '--sun':          '#D6B264',
      '--sun-ink':      '#0F1115',
    },
  },
};

export const DISPLAY_FONTS = {
  'instrument-serif': { label: 'Editorial Serif', font: '"Instrument Serif"', italics: true },
  'space-grotesk':    { label: 'Geometric Display', font: '"Space Grotesk"', italics: false },
  'manrope-tight':    { label: 'Modern Sans', font: '"Manrope"', italics: false },
};

export const CORNERS = {
  soft:  { '--radius': '22px', '--radius-lg': '28px' },
  sharp: { '--radius': '4px',  '--radius-lg': '6px' },
  pill:  { '--radius': '999px','--radius-lg': '999px' },
};

const AppCtx = createContext(null);
export function useApp() { return useContext(AppCtx); }

export function AppProvider({ children }) {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const root = document.documentElement;
    const mode = MODES[tweaks.mode] || MODES.light;
    const corners = CORNERS[tweaks.corners] || CORNERS.soft;
    const font = DISPLAY_FONTS[tweaks.displayFont] || DISPLAY_FONTS['manrope-tight'];

    const all = { ...mode.vars, ...corners };
    all['--display-font'] = font.font;

    Object.entries(all).forEach(([k, v]) => root.style.setProperty(k, v));

    document.body.classList.toggle('has-grain', !!tweaks.showGrain);
    document.body.classList.toggle('mode-dark', tweaks.mode === 'dark');
    document.body.classList.toggle('mode-light', tweaks.mode !== 'dark');

    const main = document.querySelector('main');
    if (main) {
      main.classList.remove('density-editorial','density-standard','density-compact');
      main.classList.add(`density-${tweaks.density}`);
    }
  }, [tweaks]);

  const [quoteOpen, setQuoteOpen] = useState(false);
  const [prefill, setPrefill] = useState(null);
  const openQuote = useCallback((p) => { setPrefill(p || null); setQuoteOpen(true); }, []);
  const closeQuote = useCallback(() => setQuoteOpen(false), []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <AppCtx.Provider value={{ tweaks, setTweak, quoteOpen, openQuote, closeQuote, scrollTo, prefill }}>
      {children}
    </AppCtx.Provider>
  );
}
