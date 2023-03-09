/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animate: {
          'to': { transform: 'translateY(20px)' },
        }
      }
    },
  },
  plugins: [],
}
