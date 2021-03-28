<template lang="pug">
.container.bg-gray.h-screen.transition-all(
  @mouseover="hover = true",
  @mouseleave="hover = false",
  :class="hover ? 'large' : 'tight'"
)
  .flex(v-for="route in routes", :key="route.name")
    svg(viewBox="0 0 24 36")
      path(fill="bg-purple-400", :d="route.svg")
    button(@click="handleClick(route.path)", v-if="hover") {{ route.name }}
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
import { mdiAccountVoice } from "@mdi/js";
export default defineComponent({
  name: "breadcrumbs",
  data: () => ({
    hover: false,
    mdiAccountVoice: mdiAccountVoice,
  }),
  setup() {
    const mdiA = mdiAccountVoice;
    const router = useRouter();
    const handleClick = (path) => {
      router.push(path);
    };
    const routes = [
      {
        name: "Informations",
        path: "/NewClient/Informations",
        svg: mdiA,
      },
      {
        name: "Incomes",
        path: "/NewClient/Incomes",
        svg: mdiA,
      },
    ];
    return {
      routes,
      router,
      handleClick,
    };
  },
});
</script>

<style lang="postcss" soped>
.large {
  width: 15rem;
}
.tight {
  width: 10rem;
}
</style>
