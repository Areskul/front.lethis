<template lang="pug">
.container
  .flex.flex-row.justify-around
    .flex.flex-col(v-for="route in routes", :key="route.name")
      router-link(:to="route.path")
        button(:class="[route.name == current.name ? 'active' : null]") {{ route.name }}
</template>

<script lang="ts">
import { useRouter, useRoute } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
  name: "breadcrumbs",
  setup() {
    const router = useRouter();
    const routes = router.options.routes[1].children;
    const current = useRoute();
    const isActive = (path) => {
      console.log(current);
      console.log(path);
      if (current == path) {
        return true;
      } else {
        return false;
      }
    };
    return {
      isActive,
      current,
      routes,
      router,
    };
  },
});
</script>

<style lang="postcss" scoped>
button {
  @apply p-2 text-sm font-semibold rounded-2xl transition-all;
  @apply text-black;
  @apply dark:text-white;
}
.active {
  @apply bg-purple-500 text-white;
  @apply dark:bg-purple-400 dark:text-black;
}
</style>
