/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          450: '#EAEAEA',
        },
        'dark-gray': '#232323',
        'finish-button': '#208298',
        'error-red': '#F15524',
      },
      textShadow: {
        '2xl': '2px 1px 0 #EAEAEA, 3px 1px 0 #000',
      },
      fontFamily: {
        arial: ['Arial-caps'],
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
