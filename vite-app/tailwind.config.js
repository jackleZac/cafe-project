/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cafe-interior-design': "url('./src/assets/cafeDesign1.jpg')"
      },
      inset: {
        '-100': '-100%',
      }
    },
  },
  plugins: [],
}

