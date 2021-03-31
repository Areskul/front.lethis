<template lang="pug">
.container.relative.transition-all(
  @mouseover="hover = true",
  @mouseleave="hover = false",
  :class="hover ? 'large' : 'tight'"
)
  .flex.fixed.flex-col.h-4.justify-between.min-h-screen.theme.transition-all.pt-20(
    :class="hover ? 'large' : 'tight'"
  )
    .flex.py-4.justify-center(v-for="route in routes", :key="route.name")
      svg.fill-current(viewBox="0 0 25 35")
        path(:d="route.svg")
      button.bottom(@click="handleClick(route.path)", v-if="hover") {{ route.name }}
    .flex.flex-grow
    .flex.py-4.justify-center
      div(v-if="!isAuthenticated")
        router-link(to="/register")
          button.btn s'inscrire
        router-link(to="/login")
          button.btn se connecter
      div(v-if="isAuthenticated")
        p.p-3.text-sm {{ user.name }}
        button.btn.text-sm(v-if="isAuthenticated", @click="logout") logout
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
import { auth } from "@/composables/auth";
import { mdiAccountPlus, mdiAccountSearchOutline, mdiHome } from "@mdi/js";
export default defineComponent({
  name: "breadcrumbs",
  data: () => ({
    hover: false,
  }),
  setup() {
    const { user, isAuthenticated } = auth();
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
        name: "Découverte",
        path: "/Discover/Informations",
        svg: accountplus,
      },
      {
        name: "Produits",
        path: "/Products/Accounts",
        svg: accountplus,
      },
      {
        name: "Clients",
        path: "/Clients",
        svg: accounts,
      },
    ];
    return {
      user,
      isAuthenticated,
      routes,
      router,
      handleClick,
    };
  },
});
</script>

<style lang="postcss" soped>
.theme {
  @apply bg-gray-50;
  @apply dark:bg-gray-800;
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
