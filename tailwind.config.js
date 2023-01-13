/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fca5a5",
        secondary: "#fecaca",
        "dark-primary": "#f87171",
      },
      boxShadow: {
        menu_item: "0 3px 15px 0 rgb(44 71 146 / 25%)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
