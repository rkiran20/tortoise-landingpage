/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      fontSize: {
        "large-font": "2rem",
        "larger-font": "2.5rem",
      },
      colors: {
        softBeige: "#faf4ea",
        lightBrown: "#f3f2f0",
        brown: "#41341a",
        lightBlue: "#b4e2ee",
        lightGrey: "#9CA3AF", // secondary text
        variedGreen: "#15803d", //btn
        lightBeige: "#FAF4EA", // hover btn background
        greyy: "#F9FAFB", // primary text
        mainBlack: "#1F2937", // background
        lightGreen: "#22C55E",
        darkGrey: "#37474F",
        greyyishBlue: "#2C3E50",
      },
      boxShadow: {
        softGray: "0 4px 18px rgba(0, 0, 0, 0.1)",
        warm: "0 4px 18px rgba(180, 100, 50, 0.2)",
        green: "0 4px 18px rgba(50, 150, 50, 0.2)",
      },
    },
  },
  plugins: [],
};
