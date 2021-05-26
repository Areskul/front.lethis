<template lang="pug">
.container.header.mb-20
  .flex.flex-row.flex-wrap.justify-center(class="md:justify-around")
    .flex.flex-col.px-4(v-for="route in children", :key="route.path")
      router-link(:to="route.path", :class="{ disabled: !route.meta.enabled }")
        button(
          :class="{ active: route.name == current.name, disabled: !route.meta.enabled }"
        ) {{ route.name }}
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
.header {
  @apply justify-between py-4;
  @apply bg-white dark:bg-gray-900;
}
.disabled {
  @apply select-none pointer-events-none;
  @apply text-gray-300;
  @apply dark:text-gray-600;
}
</style>
