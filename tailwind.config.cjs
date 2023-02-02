/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#603808",
        secondary: "#8b5e34",
        light: "#ffedd8",
        light2: "#f3d5b5",
      },
      fontFamily: {
        burtons: "burtons",
      },
    },
  },
  plugins: [],
};
