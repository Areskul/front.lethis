<template lang="pug">
.container
  .flex.flex-row.justify-around
    .flex.flex-col(v-for="route in children", :key="route.name")
      router-link(:to="route.path")
        button(:class="[route.name == current.name ? 'active' : null]") {{ route.name }}
</template>

<script lang="ts">
import { useRouter, useRoute, RouteRecordRaw } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
  name: "breadcrumbs",
  setup() {
    //Use Router
    const router = useRouter();
    const current = useRoute();

    const parent: RouteRecordRaw = current.matched[0];
    const children: RouteRecordRaw[] = useRouter().options.routes.filter(
      (e) => e.path === parent.path
    )[0].children!;

    console.log(children);
    return {
      /*parent,*/
      router,
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
