const nymphicusPreset = require("./branding/tailwind/nymphicus.preset.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [nymphicusPreset],
  content: ["./app/**/*", "./components/**/*", "./lib/**/*", "./views/**/*"],
  theme: {
    extend: {
      fontSize: {
        hero: ["clamp(3rem, 8vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "hero-sub": ["clamp(1.125rem, 2.2vw, 1.5rem)", { lineHeight: "1.6" }],
        "section-title": ["clamp(1.875rem, 4vw, 2.75rem)", { lineHeight: "1.15" }],
      },
      colors: {
        marketing: {
          bg: "var(--nym-body-bg)",
          surface: "var(--nym-surface)",
          "surface-elevated": "var(--nym-surface-muted)",
          border: "var(--nym-border)",
          text: "var(--nym-text)",
          "text-muted": "var(--nym-text-muted)",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.35s ease-out forwards",
        "slide-up": "slideUp 0.4s ease-out forwards",
        "pulse-edge": "pulseEdge 2.5s ease-in-out infinite",
        "node-in": "nodeIn 0.5s ease-out forwards",
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee 40s linear infinite reverse",
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite reverse",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseEdge: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        nodeIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
};
