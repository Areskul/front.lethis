<template>
  <div class="tbig"></div>
</template>
<script>
import Vue from "vue";
import style from "@/mixins/style.js";
export default Vue.extend({
  name: "card",
  mixins: [style],
  mounted() {
    this.setColor();
    this.setElevation();
  },
});
</script>
<style scoped lang="scss">
.tbig {
  height: 150px;
}
</style>
