const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    content: ["./src/**/*.vue"],
  },
  darkMode: "media",
  theme: {
    container: {
      center: true,
    },
    colors: {
      pink: colors.pink,
      purple: colors.purple,
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      gray: colors.trueGray,
    },
    extend: {},
  },
  variants: {
    extend: {
      gradientColorStops: ["dark"],
      flexGrow: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
