/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',                           // enable theme toggle
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',              // safe to keep ts/tsx globs
  ],
  theme: {
    extend: {
      // you already had this; keeping it
      keyframes: {
        animate: { to: { transform: 'translateY(20px)' } },
        // new: smooth input width grow on focus
        'focus-grow': { '0%': { width: '12rem' }, '100%': { width: '20rem' } },
      },
      animation: {
        'focus-grow': 'focus-grow .25s ease-out forwards',
      },
      boxShadow: {
        // used by the <Glass/> component styles
        glass: '0 10px 30px rgba(0,0,0,.20)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
