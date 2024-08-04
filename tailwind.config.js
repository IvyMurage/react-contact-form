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
        'linear': '#5ca9fb ',
        'font-color': '#555555'
      },
      width: {
        '46.875': '46.875rem'
      },
      fontSize: {
        basex: '15px',
        '7.5xl': '82px'
      },
      backgroundImage: {
        'hero': "url('./assets/images/intro-bg.jpeg')"
      }
    },
  },
  plugins: [],
}

