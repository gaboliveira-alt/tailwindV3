/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '200': '1200px'
      }
    },
  },
  plugins: [],
}   