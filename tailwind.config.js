/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
import flowbitePlugin from 'flowbite/plugin'


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
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        bgPrimary: 'var(--color-bg-primary)',
        tBase: 'var(--color-text-base)',
        bgAccent: 'var(--color-bg-accent)', // New lighter color
        bgLight: 'var(--color-bg-light)',
      },
      fontFamily: {
        sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), flowbitePlugin],
  darkMode: "class",
};
