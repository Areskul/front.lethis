const colorProps = {
  props: {
    color: String,
    shape: String,
  },
  methods: {
    setColor: function () {
      let color = `var(--${this.color})`;
      this.$el.style.background = color;
    },
    setShade: function () {
      let color = `var(--${this.color})`;
      this.$el.style.background = color;
    },
    setCorner: function () {
      let color = `var(--${this.color})`;
      this.$el.style.background = color;
    },
  },
};

export default colorProps;
