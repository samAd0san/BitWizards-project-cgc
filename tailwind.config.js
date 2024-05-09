/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#010851', // Dark Blue
        'secondary' : '#59A3F9', // light blue
        'tartiary' : '#707070' // grey color for small text
      }
    },
  },
  plugins: [],
}