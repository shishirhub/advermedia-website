import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F1E6",
        "cream-dim": "#EFE7D6",
        ink: "#0D0C0A",
        "ink-soft": "#18150F",
        "ink-line": "#2E2820",
        charcoal: "#3A362F",
        gold: "#DFAE3F",
        "gold-deep": "#A6771F",
        "gold-pale": "#F3D488",
        stone: "#6E6656",
        "stone-light": "#D2CAB4",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        content: "1320px",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-1%,-2%)" },
          "20%": { transform: "translate(-3%,1%)" },
          "30%": { transform: "translate(2%,-3%)" },
          "40%": { transform: "translate(-2%,3%)" },
          "50%": { transform: "translate(1%,2%)" },
          "60%": { transform: "translate(3%,1%)" },
          "70%": { transform: "translate(-1%,-1%)" },
          "80%": { transform: "translate(2%,2%)" },
          "90%": { transform: "translate(-3%,-2%)" },
        },
        /* very slow ambient light drift, used behind hero/manifesto/contact glows */
        drift: {
          "0%, 100%": { transform: "translate(-4%, -3%) scale(1)" },
          "33%": { transform: "translate(3%, 2%) scale(1.08)" },
          "66%": { transform: "translate(-2%, 4%) scale(0.96)" },
        },
        "drift-reverse": {
          "0%, 100%": { transform: "translate(3%, 2%) scale(1.05)" },
          "50%": { transform: "translate(-4%, -3%) scale(0.95)" },
        },
        /* gentle continuous float for community/creator cards */
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-9px) rotate(-0.6deg)" },
        },
        "float-alt": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-7px) rotate(0.5deg)" },
        },
        /* soft breathing glow, used on the package card + primary CTAs */
        "glow-pulse": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.04)" },
        },
        /* diagonal light sweep, used on card/button sheen layers */
        shimmer: {
          "0%": { backgroundPosition: "-150% 0" },
          "100%": { backgroundPosition: "250% 0" },
        },
        /* slow twinkle used per-particle in the ParticleField canvas fallback */
        twinkle: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.65" },
        },
      },
      animation: {
        marquee: "marquee 46s linear infinite",
        "marquee-slow": "marquee 70s linear infinite",
        "pulse-slow": "pulse-slow 3.5s ease-in-out infinite",
        grain: "grain 8s steps(10) infinite",
        drift: "drift 22s ease-in-out infinite",
        "drift-reverse": "drift-reverse 26s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        "float-alt": "float-alt 8.5s ease-in-out infinite",
        "glow-pulse": "glow-pulse 5s ease-in-out infinite",
        shimmer: "shimmer 3.2s ease-in-out infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
        velvet: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;

