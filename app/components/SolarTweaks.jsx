'use client';

import React from 'react';
import { useApp } from './AppProvider';
import {
  TweaksPanel, TweakSection, TweakRadio, TweakSelect, TweakToggle,
} from './tweaks-panel';

export function SolarTweaks() {
  const { tweaks, setTweak } = useApp();

  return (
    <TweaksPanel>
      <TweakSection label="Modo" />
      <TweakRadio
        label="Apariencia"
        value={tweaks.mode}
        options={[
          { value: 'light', label: 'Light' },
          { value: 'dark',  label: 'Dark' },
        ]}
        onChange={(v) => setTweak('mode', v)}
      />

      <TweakSection label="Tipografía" />
      <TweakSelect
        label="Display"
        value={tweaks.displayFont}
        options={[
          { value: 'manrope-tight',    label: 'Modern Sans' },
          { value: 'instrument-serif', label: 'Editorial Serif' },
          { value: 'space-grotesk',    label: 'Geometric Display' },
        ]}
        onChange={(v) => setTweak('displayFont', v)}
      />
      <TweakToggle
        label="Acentos en cursiva"
        value={tweaks.italicAccents}
        onChange={(v) => setTweak('italicAccents', v)}
      />

      <TweakSection label="Layout" />
      <TweakRadio
        label="Hero"
        value={tweaks.heroLayout}
        options={[
          { value: 'cinematic', label: 'Cine' },
          { value: 'editorial', label: 'Editorial' },
          { value: 'split',     label: 'Split' },
        ]}
        onChange={(v) => setTweak('heroLayout', v)}
      />
      <TweakRadio
        label="Densidad"
        value={tweaks.density}
        options={[
          { value: 'editorial', label: 'Editorial' },
          { value: 'standard',  label: 'Estándar' },
          { value: 'compact',   label: 'Compacto' },
        ]}
        onChange={(v) => setTweak('density', v)}
      />
      <TweakRadio
        label="Esquinas"
        value={tweaks.corners}
        options={[
          { value: 'soft', label: 'Suaves' },
          { value: 'sharp', label: 'Rectas' },
          { value: 'pill', label: 'Pill' },
        ]}
        onChange={(v) => setTweak('corners', v)}
      />

      <TweakSection label="Acabado" />
      <TweakToggle
        label="Textura grain"
        value={tweaks.showGrain}
        onChange={(v) => setTweak('showGrain', v)}
      />
      <TweakToggle
        label="Tarjetas flotantes en hero"
        value={tweaks.showHeroStats}
        onChange={(v) => setTweak('showHeroStats', v)}
      />
      <TweakToggle
        label="Mostrar calculadora"
        value={tweaks.showCalculator}
        onChange={(v) => setTweak('showCalculator', v)}
      />
    </TweaksPanel>
  );
}
