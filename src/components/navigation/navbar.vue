<template lang="pug">
.container.pt-10.h-screen.transition-all.col(
  @mouseover="hover = true",
  @mouseleave="hover = false",
  :class="hover ? 'large' : 'tight'"
)
  .flex.py-4.justify-center(v-for="route in routes", :key="route.name")
    svg.fill-current(viewBox="0 0 25 35")
      path(:d="route.svg")
    button.bottom(@click="handleClick(route.path)", v-if="hover") {{ route.name }}
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
import { mdiAccountPlus, mdiAccountSearchOutline, mdiHome } from "@mdi/js";
export default defineComponent({
  name: "breadcrumbs",
  data: () => ({
    hover: false,
  }),
  setup() {
    const home = mdiHome;
    const accounts = mdiAccountSearchOutline;
    const accountplus = mdiAccountPlus;
    const router = useRouter();
    const handleClick = (path) => {
      router.push(path);
    };
    const routes = [
      {
        name: "Home",
        path: "/",
        svg: home,
      },
      {
        name: "Nouveau client",
        path: "/NewClient/Informations",
        svg: accountplus,
      },
      {
        name: "Clients",
        path: "/Clients",
        svg: accounts,
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
.col {
  @apply bg-blue-600;
  @apply dark:bg-purple-600;
}
.large {
  width: 10rem;
}
.tight {
  width: 5rem;
}
.anchor {
  position: static;
}
.bottom {
  position: absolute;
  display: inline;
  padding-top: 1.7rem;
}
</style>
