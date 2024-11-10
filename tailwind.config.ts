import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#E7EBEE",
        background: "#090B0C",
        primary: "#A8B5C2",
        secondary: "#41465D",
        accent: "#74729D",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
