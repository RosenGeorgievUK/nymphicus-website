/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        nym: {
          primary: {
            DEFAULT: "#9B5FFD",
            rgb: "155 95 253",
            50: "rgba(152, 95, 253, 0.05)",
            100: "rgba(152, 95, 253, 0.1)",
            200: "rgba(152, 95, 253, 0.2)",
            500: "#9B5FFD",
          },
          secondary: {
            DEFAULT: "#FF49CD",
            rgb: "255 73 205",
          },
          body: "#F8F9FD",
          surface: "#FFFFFF",
          muted: "#F9F7FC",
          text: {
            DEFAULT: "#011E42",
            muted: "#5D6576",
            nav: "#302836",
          },
          border: "#E2E8EE",
          input: "#8A93A3",
          icon: "#6C7E96",
          success: "#32D484",
          warning: "#FDAF22",
          danger: "#FE6757",
          info: "#00C9FF",
          list: "#F5F6F7",
          dark: {
            bg: "#161623",
            surface: "#262634",
          },
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        body: ["0.875rem", { lineHeight: "1.5" }],
        button: ["0.8125rem", { lineHeight: "1.5" }],
      },
      borderRadius: {
        nym: "0.3rem",
        "nym-sm": "0.25rem",
        "nym-lg": "0.3rem",
        "nym-kit": "0.5rem",
      },
      boxShadow: {
        nym: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "nym-gradient": "linear-gradient(to bottom right, #9B5FFD 0%, #FF49CD 100%)",
        "nym-gradient-menu": "linear-gradient(to right, #9B5FFD 0%, #FF3DBB 100%)",
      },
      maxWidth: {
        nym: "1440px",
      },
      height: {
        header: "4.25rem",
      },
    },
  },
};
