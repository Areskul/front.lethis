<template lang="pug">
v-menu(hover)
  template(#anchor)
    svg.svg(viewBox="0 0 24 36")
      path(fill="var(--bg)", :d="down")
  template(#popper)
    .menu.grids
      .col
        button.btn(@click="logout") logout
</template>
<script lang="ts">
import { mdiChevronDown } from "@mdi/js";
import { defineComponent } from "vue";
import vMenu from "@/components/containers/vMenu.vue";
import { auth } from "@/composables/auth";
export default defineComponent({
  setup() {
    const { token } = auth();
    return {
      token,
    };
  },
  data: () => ({
    down: mdiChevronDown,
  }),
  components: {
    vMenu,
  },
  methods: {
    logout: function () {
      this.token = null;
    },
  },
});
</script>

<style lang="postcss" scoped>
.svg {
  margin-top: 9px;
  margin-bottom: -12px;
  width: 40px;
  height: 45px;
}
.menu {
  @apply bg-white;
  @apply dark:bg-black;
}
</style>
