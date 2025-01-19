import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#173156', // Dark blue
          light: '#3E5879',   // Medium blue
        },
        neutral: {
          DEFAULT: '#D8C4B6', // Light beige
          light: '#F5EFE7',   // Off white
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
