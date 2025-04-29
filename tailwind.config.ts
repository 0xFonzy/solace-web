import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#265b4e",
        secondary: "#ffffff",
        accent: "#d7a13b",
        text: "#000000",
        "text-secondary": "#5a5a5a",
      },
      fontFamily: {
        sans: ["var(--font-lato)"],
        lato: ["var(--font-lato)"],
        merriweather: ["var(--font-merriweather)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [heroui()],
  darkMode: "class",
};
export default config;
