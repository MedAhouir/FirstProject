import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'], // Array format with fallback
        lora: ['var(--font-lora)', 'serif'],       // Array format with fallback
      },
    },
  },
  plugins: [],
} satisfies Config;
