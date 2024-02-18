/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '485px',
      'md': '640px',
      'lg': '830px',
      'xl': '1100px',
      '2xl': '1300px',
      '3xl': '1500px',
      '4xl': '1700px',
      '5xl': '1900px',
      '6xl': '2100px',
    },
    extend: {
      boxShadow: {
        'select': '0 0 1rem 0.25rem rgba(0, 0, 0, 0.2)',
        'div': '0 0.125rem 0.625rem 0 rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}

