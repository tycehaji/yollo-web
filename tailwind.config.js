/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteGray: '#FAFAFA',
        primary: '#5170C6'
      }
    },
  },
  plugins: [],
}