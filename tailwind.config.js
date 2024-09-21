/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
