<template lang="pug">
.container
  .flex.flex-row.justify-around
    .flex.flex-col(v-for="route in routes", :key="route.name")
      button(@click="handleClick(route.path)") {{ route.name }}
</template>

<script lang="ts">
import { mdiCashMultiple, mdiInformationOutline } from "@mdi/js";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
  name: "breadcrumbs",
  setup() {
    const cash = mdiCashMultiple;
    const info = mdiInformationOutline;
    const router = useRouter();
    const handleClick = (path) => {
      router.push(path);
    };
    const routes = [
      {
        name: "Informations",
        path: "/NewClient/Informations",
        svg: info,
      },
      {
        name: "Incomes",
        path: "/NewClient/Incomes",
        svg: cash,
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
