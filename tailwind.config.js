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
      fontFamily: {
        dosis: ['"Dosis"', 'sans-serif'],
        libre: ['"Libre Baskerville"', 'serif'],
        orbitron: ['"Orbitron"', 'sans-serif'],
        rowdies: ['"Rowdies"', 'cursive'],
        shafarik: ['"Shafarik"', 'serif'],
        yuji: ['"Yuji Mai"', 'serif'],
        bitcount: ['"Bitcount Grid Single"', 'sans-serif'],
        mozilla: ['"Mozilla Headline"', 'sans-serif'],
        winky: ['"Winky Rough"', 'cursive'],
        chela: ['"Chela One"', 'cursive'],
        ubuntu: ['"Ubuntu"', 'sans-serif'],
        Jost: ['"Jost"', 'sans-serif'],
      },
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
        'lf-db': ' #000349 ',  //* main colors
        'lf-w': '#FFFFFF',     //* main colors
        'lf-dy': '#E6A61E',    //^ accent color
        'lf-g': ' #252B3D',    //? text color
        'lf-b': '#0C1B63',     //~ remaining colors
        'lf-dw': '#D9D9E2',    //~ remaining colors
        //& porcalen colors . .
        'porc-w': '#F8FAFC',      
        'porc-dw': '#D9D9E2',   
        'porc-lb': '#d9eeff',   
        'porc-b': '#60A5FA',   
        'porc-db': '#3B82F6',
        'porc-s': '#94A3B8', 
        'porc-ds': '#64748B',
        'porc-g': '#34D399',    
        'porc-dg': '#10B981',
        //& MAC consulting colors . .
        'mac-db': '#002147',
        'mac-dy': '#B8860B'

      },
    },
  },
  plugins: [],
};
