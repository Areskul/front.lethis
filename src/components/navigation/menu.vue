<template lang="pug">
v-menu(hover)
  template(#anchor)
    svg.svg(viewBox="0 0 24 36")
      path(fill="var(--bg)", :d="down")
  template(#popper)
    v-card.menu(
      rounded,
      elevation="3",
      height="300px",
      width="200px",
      color="bg"
    )
      .row
        .col
          v-switch
        .col
          button(@click="logout") logout
</template>
<script lang="ts">
import { mdiChevronDown } from "@mdi/js";
import { defineComponent } from "vue";
import vMenu from "@/components/containers/vMenu.vue";
import vCard from "@/components/containers/vCard.vue";
import vSwitch from "@/components/buttons/vSwitch.vue";
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
    vCard,
    vSwitch,
  },
  methods: {
    logout: function () {
      this.token = null;
    },
  },
});
</script>

<style lang="scss" scoped>
.svg {
  margin-top: 9px;
  margin-bottom: -12px;
  width: 40px;
  height: 45px;
}
/*.menu {*/
/*position: absolute;*/
/*top: 0;*/
/*right: 0;*/
/*}*/
</style>
