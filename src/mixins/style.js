const colorProps = {
  props: {
    color: String,
    shape: String,
    elevation: String,
  },
  methods: {
    setColor: function () {
      let color = `var(--${this.color})`;
      this.$el.style.background = color;
    },
    setElevation: function () {
      let elevation = `var(--box${this.elevation})`;
      this.$el.style.boxShadow = elevation;
    },
  },
};
export default colorProps;
