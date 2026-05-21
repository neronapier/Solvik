/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
      colors: {
        // Editorial forest greens
        brand: {
          50:  '#EEF4F0',
          100: '#D9E6DE',
          200: '#B0CCBE',
          300: '#7FAA94',
          400: '#4D8770',
          500: '#2E6850',
          600: '#1F5240',
          700: '#143E30',
          800: '#0E2C22',
          900: '#081C16',
        },
        // Warm champagne / honey
        sun: {
          100: '#FBF2DE',
          200: '#F4E4BD',
          300: '#EAD18C',
          400: '#D6B264',
          500: '#B68A3C',
          600: '#8A6628',
        },
        ink: {
          900: '#0E0E0D',
          800: '#1A1A18',
          700: '#2B2B27',
          500: '#5F5C53',
          400: '#8A867B',
          300: '#B5B1A4',
          200: '#D9D5C8',
          100: '#EBE7DA',
          50:  '#F4F0E3',
        },
        bone: {
          50:  '#FAF7EE',
          100: '#F4EEDE',
          200: '#EDE4CB',
        },
        navy: {
          700: '#1E2B4F',
          800: '#15203D',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,18,12,.04), 0 14px 40px -16px rgba(20,18,12,.10)',
        soft: '0 1px 2px rgba(20,18,12,.04), 0 2px 10px rgba(20,18,12,.06)',
        glow: '0 24px 70px -22px rgba(46,104,80,.55)',
        inkUp: '0 -8px 30px -10px rgba(14,14,13,.10)',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
