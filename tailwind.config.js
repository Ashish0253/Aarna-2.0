/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#423185",
        secondary: "#91C02C",
      },
      fontFamily: {
        body: "'Montserrat', sans-serif",
      },
      boxShadow: {
        primary: "5px 2px 26px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
