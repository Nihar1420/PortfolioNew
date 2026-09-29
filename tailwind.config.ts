import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fixed brand colors
        paper: "#f4f3ee",
        ink: "#111111",
        lime: "#d4f24a",
        // Dark-theme surfaces
        night: "#0f0f0e",
        bone: "#edece6",
        raised: "#1a1a18",
        cobaltlt: "#7c93f0",
        deepcobalt: "#0e1a52",
        // Theme-aware (flip via CSS variables in light/dark)
        cobalt: "rgb(var(--c-cobalt) / <alpha-value>)",
        body: "rgb(var(--c-body) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        rule: "rgb(var(--c-rule) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-kreon)", "Georgia", "serif"],
        sans: ["var(--font-kreon)", "Georgia", "serif"],
      },
      letterSpacing: { tightest: "-0.03em", label: "0.08em" },
      fontSize: {
        d1: ["clamp(3rem, 11vw, 13rem)", { lineHeight: "0.9" }],
        d2: ["clamp(2.75rem, 8vw, 9.5rem)", { lineHeight: "0.9" }],
        d3: ["clamp(2.25rem, 5vw, 6rem)", { lineHeight: "0.95" }],
      },
      maxWidth: { page: "80rem" },
      keyframes: {
        "spin-slow": { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
      },
      animation: { "spin-slow": "spin-slow 22s linear infinite" },
    },
  },
  plugins: [],
};

export default config;
