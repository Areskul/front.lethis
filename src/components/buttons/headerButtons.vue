<template>
  <div class="columns is-mobile">
    <div class="column">
      <b-icon pack="mdi" icon="account" class />
    </div>
    <div class="column anchor" @click="show = !show">
      <b-icon pack="mdi" icon="cart" class />
      <Menu :show="show" />
    </div>
  </div>
</template>
<script>
import Menu from "@/core/components/menu";
export default {
  name: "headerButtons",
  data: () => ({
    show: false,
  }),
  components: {
    Menu,
  },
};
</script>
<style>
.anchor {
  position: inherit;
}
</style>
