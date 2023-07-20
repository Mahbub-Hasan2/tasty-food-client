/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#c59d5f',
        'secondary': '#C59D5F',
        "light": "#FFFFFF",
      }
    },
  },
  plugins: [],
}