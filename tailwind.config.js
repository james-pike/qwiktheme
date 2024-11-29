/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
import flowbitePlugin from 'flowbite/plugin';

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-qwik/**/*.{cjs,mjs}'],
  theme: {
    extend: {
      animation: {
        'shining-line': 'shining-line 12s linear infinite',
        'from-left': 'slideFromLeft 0.2s 1',
        'from-right': 'slideFromRight 0.2s 1',
      },
      keyframes: {
        'shining-line': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      colors: {
        p1: 'var(--color-p1)',
        p2: 'var(--color-p2)',
        p3: 'var(--color-p3)',
        p4: 'var(--color-p4)',
        p5: 'var(--color-p5)',
        p6: 'var(--color-p6)',
        p7: 'var(--color-p7)',
        p8: 'var(--color-p8)',
        p9: 'var(--color-p9)',
        s1: 'var(--color-s1)',
        s2: 'var(--color-s2)',
        s3: 'var(--color-s3)',
        s4: 'var(--color-s4)',
        s5: 'var(--color-s5)',
        s6: 'var(--color-s6)',
        s7: 'var(--color-s7)',
        s8: 'var(--color-s8)',
        s9: 'var(--color-s9)',
      },
      fontFamily: {
        sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), flowbitePlugin],
  darkMode: "class",
};
