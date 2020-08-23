/* 
Must use this mixin on Vue first instance
to get all colors generated from scss
available in js as constantes. 
*/

const global = {
  data: () => ({
    colors: {},
  }),
  async mounted() {
    await this.setTheme();
    this.$store.dispatch("theme/isDark", false);
  },
  methods: {
    setTheme: async function () {
      if (this.$store.state.theme.isDark) {
        await import("@/scss/colors/dark.scss");
      } else {
        await import("@/scss/colors/light.scss");
      }
    },
    //Deprecated
    getTheme: async function () {
      const degres = ["", "2", "3", "4", "5"];
      const modes = ["lighten", "darken"];
      const prefixes = [
        "primary",
        "secondary",
        "ternary",
        "success",
        "info",
        "warning",
        "error",
      ];
      prefixes.forEach((prefix) => {
        modes.forEach((mode) => {
          degres.forEach((degre) => {
            let name = `${prefix}-${mode}${degre}`;
            let variable = `--${name}`;
            let value = getComputedStyle().getPropertyValue(name);
            console.log(value);
            this.colors[name] = value;
          });
        });
      });
    },
  },
};
export default global;
