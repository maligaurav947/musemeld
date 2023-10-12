/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Work Sans", "sans-serif"],
      secondary: ["Open Sans", "sans-serif"],
      accent: ["Pacifico", "cursive"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
