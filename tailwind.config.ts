import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        blue: {
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
        },
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  darkMode: ["class"],
  plugins: [
    require("@tailwindcss/forms"),
    heroui({
      themes: {
        light: {
          colors: {
            background: "#f2f2f2",
            content1: "#ffffff",
            default: {
              200: "#d1d5db",
            },
            foreground: "#262626",
            primary: {
              DEFAULT: "#556cf7",
              700: "#25508e",
            },
            secondary: {
              DEFAULT: "#3e0ca9",
            },
          },
        },
        dark: {
          colors: {
            background: "#15191e",
            content1: "#1d232a",
            default: {
              200: "#374151",
            },
            foreground: "#d4d4d4",
            primary: {
              DEFAULT: "#556cf7",
              700: "#25508e",
            },
            secondary: {
              DEFAULT: "#3e0ca9",
            },
          },
        },
      },
    }),
  ],
};
export default config;
