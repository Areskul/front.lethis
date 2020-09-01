<template>
  <div class="columns is-mobile">
    <div class="column">
      <b-icon pack="mdi" icon="account" class="" />
    </div>
    <div class="column anchor" @click="show = !show">
      <b-icon pack="mdi" icon="cart" class="" />
      <popUpMenu :show="show" />
    </div>
  </div>
</template>
<script>
import popUpMenu from "../menu/popUpMenu";
export default {
  name: "headerButtons",
  data: () => ({
    show: false,
  }),
  components: {
    popUpMenu,
  },
};
</script>
<style>
.anchor {
  position: inherit;
}
</style>
