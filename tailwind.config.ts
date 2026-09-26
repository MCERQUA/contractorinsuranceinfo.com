import type { Config } from "tailwindcss";

/* ============================================================
   CONTRACTOR INSURANCE INFO — "Editorial Information Hub" palette
   Warm editorial: off-white + terracotta + amber + espresso (2026-09-26;
   was electric blue + slate — Josh HARD NO on blue gradients, USER.md L32)
   clay = terracotta (interactive) · sage = warm espresso (dark sections)
   cream = warm off-white · sand = warm alt bg · espresso = warm near-black
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === Backgrounds ===
        cream: "#FBF8F3",             // warm off-white page background
        sand: "#F3EEE6",              // warm alt section bg
        white: "#ffffff",
        // === Primary — Terracotta (token name: clay) ===
        clay: {
          DEFAULT: "#9C4722",         // terracotta — all CTAs, links, accents (white text 6.2:1)
          dark: "#7E3A1B",            // hover / pressed
          light: "#B4552D",
          50: "#FBF1EA",
          100: "#F6DFD0",
          200: "#EDC0A3",
          300: "#E09A72",
          400: "#CF7647",
          500: "#B4552D",
          600: "#9C4722",
          700: "#7E3A1B",
          800: "#6B2F13",
          900: "#4F220D",
        },
        // === Secondary — Warm espresso (token name: sage) ===
        sage: {
          DEFAULT: "#1C1410",         // warm espresso — dark hero/CTA sections
          dark: "#0F0A07",
          light: "#2E241E",
          50: "#FAF8F5",
          100: "#F3EFEA",
          200: "#E7E1D9",
          300: "#D3CBC0",
          400: "#A8A095",
          500: "#78716C",
          600: "#57534E",
          700: "#44403C",
        },
        // === Accent — Amber (token name: gold) ===
        gold: {
          DEFAULT: "#D98F2B",
          dark: "#9A5B12",
          light: "#F0B458",
          50: "#FDF6EA",
          100: "#FAE8C8",
          200: "#F4D08F",
          300: "#EDB65C",
          400: "#E3A03C",
          500: "#D98F2B",
          600: "#B8741C",
        },
        // === Text ===
        espresso: "#1C1410",          // warm near-black — headlines, dark text
        cocoa: "#44403C",             // warm stone-700 — body text
        mocha: "#6B625A",             // warm grey — muted text
        // === Borders / dividers ===
        adobe: "#E7E1D9",             // warm border
        adobeDark: "#D3CBC0",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "0.5rem",
        arch2: "0.75rem",
        "4xl": "0.5rem",
        "5xl": "0.75rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #FBF8F3 0%, #F3EEE6 40%, #F7EBDD 70%, #FBF8F3 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(156,71,34,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(28,20,16,0.03) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #9C4722 0%, #B4552D 100%)",
        "sage-gradient": "linear-gradient(135deg, #1C1410 0%, #2E241E 100%)",
        "gold-gradient": "linear-gradient(135deg, #D98F2B 0%, #E3A03C 100%)",
        "info-hero": "linear-gradient(135deg, #1C1410 0%, #2E241E 100%)",
        "info-surface": "linear-gradient(180deg, #2E241E 0%, #1C1410 100%)",
      },
      boxShadow: {
        warm: "0 4px 20px -8px rgba(156,71,34,0.15), 0 2px 8px -4px rgba(28,20,16,0.08)",
        "warm-lg": "0 12px 40px -15px rgba(156,71,34,0.20), 0 6px 20px -8px rgba(28,20,16,0.10)",
        card: "0 1px 4px -1px rgba(28,20,16,0.06), 0 1px 2px -1px rgba(28,20,16,0.04)",
        "card-hover": "0 8px 24px -8px rgba(156,71,34,0.18), 0 4px 12px -4px rgba(28,20,16,0.08)",
        arch: "0 0 0 1px rgba(231,225,217,1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "arch-rise": {
          "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
