import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cobalt & Lime — warm paper, warm ink, cobalt primary, lime pop
        paper: {
          DEFAULT: "#faf9f5",
          100: "#f4f3ee",
          200: "#f0eee6",
          300: "#e4e3dc",
          400: "#d6d5cd",
        },
        ink: {
          DEFAULT: "#171717",
          warm: "#33332f",
          muted: "#55544f",
          faint: "#a3a39b",
        },
        cobalt: {
          DEFAULT: "#1b3fd6",
          400: "#4b67e0",
          300: "#7c93f0",
          100: "#d3daf8",
        },
        lime: {
          DEFAULT: "#d4f24a",
        },
      },
      fontFamily: {
        display: ["var(--font-kreon)", "Georgia", "serif"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        page: "76rem",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 22s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
