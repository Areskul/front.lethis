<template lang="pug">
.container
  .flex(v-for="route in routes", :key="route.name")
    button(@click="handleClick(route.path)") {{ route.name }}
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
  name: "breadcrumbs",
  setup() {
    const router = useRouter();
    const handleClick = (path) => {
      router.push(path);
    };
    const routes = [
      {
        name: "Informations",
        path: "/NewClient/Informations",
      },
      {
        name: "Incomes",
        path: "/NewClient/Incomes",
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
