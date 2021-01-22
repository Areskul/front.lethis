module.exports = {
  purge: {
    mode: "all",
    preserveHtmlElements: false,
    content: ["./src/**/*.js", "./node_modules/flatpickr/**/*.js"],
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
  plugins: [],
};
