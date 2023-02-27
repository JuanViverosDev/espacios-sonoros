/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        caliMenu: "url('/src/resources/cali-menu.jpg')",
      }
    },
  },
  plugins: [],
}
