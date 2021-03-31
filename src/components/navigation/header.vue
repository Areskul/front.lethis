<template lang="pug">
.flex.header header boy
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "v-header",
});
</script>

<style lang="postcss" scoped>
.svg {
  margin-top: 9px;
  margin-bottom: -12px;
  width: 40px;
  height: 45px;
}
.header {
  @apply justify-between py-4;
  @apply bg-white dark:bg-gray-900;
}
</style>
