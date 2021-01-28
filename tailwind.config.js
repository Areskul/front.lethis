module.exports = {
  purge: {
    content: ["./src/**/*.vue"],
  },
  darkMode: "media",
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
