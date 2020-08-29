<template>
  <card color="secondary" height="60px">
    <nav class="level fill-height is-mobile pt-5">
      <div class="level-left"></div>
      <div class="level-right pr-5">
        <div class="level-item">
          <menuIcons />
        </div>
      </div>
    </nav>
  </card>
</template>
<script>
import card from "../containers/card";
import menuIcons from "./menuIcons";
export default {
  name: "myHeader",
  data: () => ({}),
  components: {
    card,
    menuIcons,
  },
};
</script>
<style>
.fill-height {
  height: inherit;
}
</style>
