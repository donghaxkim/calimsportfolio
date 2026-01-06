/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Monument Grotesk font family
        helvetica: ['"Monument Grotesk"', 'sans-serif'],
        sans: ['"Monument Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}