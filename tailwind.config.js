/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'moving-bg': 'background 5s ease infinite',
        'sliderNavWidth': 'sliderNav 0.3s ease',
      },
      keyframes: {
        background: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        },
        sliderNav: {
          '0%': { 'width': '8px' },
          '100%': { 'width': '20px' },
        },
      },
    },
    screens: {
      '2xl': {'min': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'min': '1279px'},
      // => @media (max-width: 1279px) { ... }
      
      'det': {'min': '1130px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'min': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'min': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'min': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
