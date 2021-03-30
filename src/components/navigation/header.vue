<template lang="pug">
.flex.header
  breadcrumbs
</template>

<script lang="ts">
import { defineComponent } from "vue";
import breadcrumbs from "@/components/navigation/breadcrumbs.vue";
export default defineComponent({
  name: "v-header",
  components: {
    breadcrumbs,
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
.header {
  @apply justify-between py-4;
  @apply bg-gray-200 dark:bg-gray-700;
}
</style>
