<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
import styles from "@/mixins/styles.js";
export default Vue.extend({
  name: "card",
  mixins: [styles],
});
</script>
