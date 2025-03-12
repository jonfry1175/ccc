import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        color1: "#20386D",
        color2: "#4F9EE1",
        color3: "#4791A6",
        color4: "#AAA295",
        textColor: "#BEBFC0",
        gold: {
          DEFAULT: "#AAA295",
          light: "#A68D6B",
          dark: "#664D2B"
        },
        navy: {
          DEFAULT: "#010033",
          light: "#1A237E"
        },
        elegant: {
          gray: "#2C3539",
          beige: "#F5F5DC",
          cream: "#E8E5D5",
          silver: "#C0C0C0"
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        primary: {
          DEFAULT: "#AAA295",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        }
      },
      boxShadow: {
        glow: "0 0 15px rgba(121, 178, 246, 0.6)"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)"
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))"
          }
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)"
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))"
          }
        }
      },
      animation: {
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;
