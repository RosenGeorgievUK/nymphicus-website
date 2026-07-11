/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        nym: {
          primary: {
            DEFAULT: '#985FFD',
            rgb: '152 95 253',
            50: 'rgba(152, 95, 253, 0.05)',
            100: 'rgba(152, 95, 253, 0.1)',
            200: 'rgba(152, 95, 253, 0.2)',
            500: '#985FFD',
          },
          secondary: {
            DEFAULT: '#FF49CD',
            rgb: '255 73 205',
          },
          body: '#F8F9FD',
          surface: '#FFFFFF',
          muted: '#F9F7FC',
          text: {
            DEFAULT: '#011A42',
            muted: '#5D6576',
            nav: '#302D36',
          },
          border: '#E2E8EE',
          icon: '#6C7E96',
          success: '#32D484',
          warning: '#FDAF22',
          danger: '#FF6757',
          info: '#00C9FF',
          dark: {
            bg: '#161623',
            surface: '#262634',
          },
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        nym: '0.3rem',
        'nym-lg': '0.5rem',
      },
      boxShadow: {
        'nym-primary': '0 4px 12px rgba(152, 95, 253, 0.3)',
        nym: '0 2px 4px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'nym-gradient': 'linear-gradient(to bottom right, #985FFD 0%, #FF49CD 100%)',
      },
      maxWidth: {
        nym: '1440px',
      },
    },
  },
};
