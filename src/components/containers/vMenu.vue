<template lang="pug">
.anchor(@mouseover.passive="show = true", @mouseleave.passive="show = false")
  .clickable
    slot(name="anchor")
  transition(name="fade")
    .popper.shadow-md(v-show="show")
      slot(name="popper")
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  setup(props) {
    const placement = computed({
      get: () => (props.top ? "top" : "botom"),
      set: (string) => string,
    });
    return {
      placement,
    };
  },
  data: () => ({
    show: false,
  }),
  name: "v-menu",
  props: {
    name: {
      type: String,
      default: "menu",
    },
    hover: {
      type: Boolean,
      default: false,
    },
    top: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.popper {
  position: absolute;
  margin-top: 10px;
  right: 0;
  top: 0;
  display: inline;
  z-index: 10;
}
.anchor {
  position: relative;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
