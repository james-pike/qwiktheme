const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        bgPrimary: "var(--color-bg-primary)",
        tBase: "var(--color-text-base)",
      },
      fontFamily: {
        sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        translateX: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        translateX: "translateX 10s infinite linear",
        gradient: "gradient 10s ease infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
