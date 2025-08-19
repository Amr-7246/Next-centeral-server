/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#ffddc6',
          dark: '#0c081d',
        },
        invertedBg: {
          DEFAULT: '#0c081d',
          dark: '#ffddc6',
        },
        surface: {
          DEFAULT: '#d44e18',
          dark: '#5c3ad8',
        },
        hovered: {
          DEFAULT: '#aaaaaa',
          dark: '#888888',
        },
        mainBtn: {
          DEFAULT: '#e23c1f',
          dark: '#e23c1f',
        },
        secBtn: {
          DEFAULT: '#ffffff',
          dark: '#ffffff',
        },
        warnBtn: {
          DEFAULT: '#e53c4f',
          dark: '#e53c4f',
        },
        text: {
          DEFAULT: '#e23c1f',
          dark: '#202020',
        },
        textSecondary: {
          DEFAULT: '#363636',
          dark: '#7c7c7c',
        },
        textInverted: {
          DEFAULT: '#ffc9a4',
          dark: '#ffffff',
        },
        border: {
          DEFAULT: '#313131',
          dark: '#313131',
        },
        shadow: {
          DEFAULT: 'rgba(0, 0, 0, 0.1)',
        },
        input: {
          DEFAULT: '#ffffff',
          dark: '#ffffff',
        },
        gradientFrom: {
          DEFAULT: '#cdc0ff',
        },
        gradientVia: {
          DEFAULT: '#5c3ad8',
        },
        gradientTo: {
          DEFAULT: '#cdc0ff',
        },
        //& Low Firm colors . . 
        'lf-db': '#000349',
        'lf-b': '#0C1B63',
        'lf-w': '#FFFFFF',
        'lf-dw': '#D9D9E2',
        'lf-dy': '#E6A61E',
        'lf-g': '#252B3D',
      },
    },
  },
  plugins: [],
};
