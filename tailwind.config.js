/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Styles/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      fontFamily: {
        'lobsterTwo': ['"Lobster Two"'],
        'poppins': ['"Poppins"'],
        'rubik': ['"Rubik"'],
        'roboto': ['"Roboto"'],
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light'],
  },
}