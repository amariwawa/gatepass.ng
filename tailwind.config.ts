import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F1B2D",
        paper: "#F6F3EC",
        forest: "#1F5F46",
        mint: "#8FD3B1",
        stone: "#C9C3B3",
        line: "#E2DDD1",
        muted: "#5B6472",
        sand: "#EDE8DC",
        "navy-2": "#1D2B43",
        "slate-text": "#B8C2D1",
        "slate-dim": "#A9B4C4",
        dash: "#3C4A60",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["var(--font-newsreader)", "Newsreader", "Georgia", "serif"],
      },
      borderRadius: {
        card: "16px",
        input: "10px",
        pill: "999px",
        "hero-ticket": "24px",
      },
      screens: {
        landing: "860px",
        app: "900px",
      },
    },
  },
  plugins: [],
};
export default config;
