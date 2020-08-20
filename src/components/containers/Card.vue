<template>
  <div class="tbig"></div>
</template>
<script>
import Vue from "vue";
import style from "@/mixins/style.js";
export default Vue.extend({
  name: "Card",
  mixins: [style],
  mounted() {
    this.setColor();
  },
});
</script>
<style scoped lang="css">
.tbig {
  height: 150px;
}
</style>
