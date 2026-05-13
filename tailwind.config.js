/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        stage: {
          black: "#0a0a0b",
          charcoal: "#121214",
          smoke: "#1a1a1f",
          burgundy: "#5c1a2e",
          "burgundy-deep": "#3d0f1f",
          gold: "#c9a962",
          "gold-muted": "#9a8350",
          cream: "#f4f0e8",
          "cream-muted": "#c4bdb0",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "spotlight-radial":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(201, 169, 98, 0.12), transparent 55%)",
        "hero-light-leak":
          "linear-gradient(115deg, transparent 0%, transparent 42%, rgba(201, 169, 98, 0.06) 52%, rgba(92, 26, 46, 0.12) 62%, transparent 72%)",
        "hero-floor":
          "linear-gradient(to top, rgba(10, 10, 11, 0.95) 0%, rgba(10, 10, 11, 0.5) 28%, transparent 55%)",
        "vignette":
          "radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 11, 0.85) 100%)",
        "portrait-halo":
          "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(201, 169, 98, 0.15), transparent 70%)",
      },
      animation: {
        "slow-zoom": "slow-zoom 24s ease-in-out infinite alternate",
      },
      keyframes: {
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.06)" },
        },
      },
    },
  },
  plugins: [],
};
