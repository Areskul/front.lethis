<template lang="pug">
.container
  .flex.flex-row.justify-around
    .flex.flex-col(v-for="route in children", :key="route.name")
      router-link(:to="route.path")
        button(:class="[route.name == current.name ? 'active' : null]") {{ route.name }}
</template>

<script lang="ts">
import { useRouter, useRoute, RouteRecordRaw } from "vue-router";
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "breadcrumbs",
  setup() {
    //Use Router
    const router = useRouter();
    const current = useRoute();
    const parents = computed(
      (): RouteRecordRaw => {
        const parents = current.matched[0];
        return parents;
      }
    );
    const children = computed((): RouteRecordRaw[] => {
      const children = router.options.routes.filter(
        (e) => e.path === parents.value.path
      )[0].children!;
      return children;
    });
    return {
      current,
      children,
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
