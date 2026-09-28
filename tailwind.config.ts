import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f4f3ee",
        cobalt: "#1b3fd6",
        lime: "#d4f24a",
        ink: "#111111",
        body: "#33332f",
        muted: "#55544f",
        rule: "#d6d5cd",
        oncobalt: "#d3daf8",
      },
      fontFamily: {
        // One family: Kreon does headings (700), body (400), and labels (700 caps).
        display: ["var(--font-kreon)", "Georgia", "serif"],
        sans: ["var(--font-kreon)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
        label: "0.08em",
      },
      fontSize: {
        // Big display scale from the spec (leading .9, tight tracking applied inline)
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
