const nymphicusPreset = require("./branding/tailwind/nymphicus.preset.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [nymphicusPreset],
  content: ["./app/**/*", "./components/**/*", "./lib/**/*", "./views/**/*"],
  theme: {
    extend: {
      fontSize: {
        hero: ["2.5rem", { lineHeight: "1.2" }],
        "hero-sub": ["0.875rem", { lineHeight: "1.5" }],
        "section-title": ["2rem", { lineHeight: "1.2" }],
        button: ["0.8125rem", { lineHeight: "1.5" }],
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
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
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
          "0%": { opacity: "0", transform: "translateY(20px)" },
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
