const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        pattaya: ["Pattaya"],
        varela: ["Varela Round"],
      },
    },

    screens: {
      xsm: "400px",
      // => @media (min-width: 640px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss/colors")],
};
