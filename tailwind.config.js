/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#6372ff',
        'linear': '#5ca9fb '
      },
      width: {
        '46.875': '46.875rem'
      }
    },
  },
  plugins: [],
}

