<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
import style from "@/mixins/style.js";
export default Vue.extend({
  name: "card",
  mixins: [style],
});
</script>
