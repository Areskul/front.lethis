const colorProps = {
  props: {
    color: String,
    elevation: String,
    height: String,
  },
  mounted() {
    this.setColor();
    this.setElevation();
    this.setHeight();
    this.setWidth();
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
    setHeight: function () {
      let height = this.height;
      this.$el.style.height = height;
    },
    setWidth: function () {
      let width = this.width;
      this.$el.style.width = width;
    },
  },
};
export default colorProps;
