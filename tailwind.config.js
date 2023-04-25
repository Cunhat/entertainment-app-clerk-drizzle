const { fontFamily } = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        custom: {
          red: "#FC4747",
          bue: {
            900: "#10141E",
            700: "#161D2F",
            200: "#5A698F",
          }
        }
      },
      backgroundImage: {
        thumbnail: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/play.png');",
      }
    },
  },
  plugins: [],
}
