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
        cougar: {
          crimson: "#981e32",
          gray: "#5e6a71",
          cream: "#f7f5f0",
          gold: "#c69214",
          dark: "#1a1a1a",
        },
      },
      fontFamily: {
        display: ["Clash Display", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
