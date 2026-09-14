import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        brand: 'var(--color-brand)',
        cyan: 'var(--color-cyan)',
        amber: 'var(--color-amber)',
        signal: 'var(--color-signal)',
        steel: 'var(--color-steel)',
        slate: {
          950: 'var(--color-slate-950)',
          900: 'var(--color-slate-900)',
          700: 'var(--color-slate-700)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
