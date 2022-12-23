/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '100px': '100px'
      },

    },

    textShadow: {
      '2xl': '1px 1px 0 #EAEAEA, 2px 0px 0 #000',
    }
  },
  plugins: [
    require('tailwindcss-textshadow')
  ]
}
