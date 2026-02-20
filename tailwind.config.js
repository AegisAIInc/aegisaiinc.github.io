/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{liquid,html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      colors: {
        aegis: {
          50: "#eef9ff",
          100: "#d9f2ff",
          200: "#bce8ff",
          300: "#8edaff",
          400: "#59c3ff",
          500: "#33a5ff",
          600: "#1a86f5",
          700: "#136ee1",
          800: "#175ab6",
          900: "#194d8f",
          950: "#142f57",
        },
        dark: {
          900: "#0a0e17",
          800: "#0f1623",
          700: "#161e2e",
          600: "#1e293b",
          500: "#334155",
        },
      },
      backgroundImage: {
        "shield-gradient":
          "linear-gradient(135deg, rgba(26, 134, 245, 0.15) 0%, rgba(10, 14, 23, 0.9) 100%)",
        "radial-glow": "radial-gradient(ellipse at center, rgba(26, 134, 245, 0.2) 0%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(26, 134, 245, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(26, 134, 245, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
