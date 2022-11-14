/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "sans": ['"Inter"', "sans-serif"],
      "serif": ['"Nunito"', "serif"],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}