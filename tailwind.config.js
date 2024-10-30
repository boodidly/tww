/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ruby: {
          pink: '#ff2d70',
          bg: '#1a1a1a',
          sidebar: '#141414',
          border: '#2a2a2a',
          hover: '#202020',
        },
      },
    },
  },
  plugins: [],
}