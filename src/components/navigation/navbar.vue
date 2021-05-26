<template lang="pug">
.container.relative.transition-all.z-10(
  @mouseover="hover = true",
  @mouseleave="hover = false",
  :class="hover ? 'large' : 'tight'"
)
  .flex.fixed.flex-col.h-4.justify-between.min-h-screen.theme.transition-all.pt-20(
    :class="hover ? 'large' : 'tight'"
  )
    .flex.py-4.justify-center(v-for="route in routes", :key="route.name")
      button(
        :class="{ active: route.name == parents.name, disabled: !route.enabled }"
      )
        svg.fill-current(viewBox="0 0 25 35")
          path(:d="route.svg")
      button.bottom(
        @click="handleClick(route)",
        v-if="hover",
        :class="{ active: route.name == parents.name, disabled: !route.enabled }"
      ) {{ route.name }}
    .flex.flex-grow
    .flex.py-4.justify-center
      .flex.flex-col(v-if="!isAuthenticated && hover")
        router-link(to="/register")
          button.btn s'inscrire
        router-link(to="/login")
          button.btn se connecter
      div(v-if="isAuthenticated && hover")
        p.p-3.text-sm {{ user.name }}
        button.btn.text-sm(v-if="isAuthenticated", @click="logout") Se déconnecter
</template>

<script lang="ts">
import { useRouter, useRoute, RouteRecordRaw } from "vue-router";
import { defineComponent, computed } from "vue";
import { auth } from "@/composables/auth";
import {
  mdiInformationOutline,
  mdiAccountSearchOutline,
  mdiBatteryPositive,
  mdiCart,
  mdiPiggyBank,
} from "@mdi/js";
export default defineComponent({
  name: "navbar",
  props: {
    uid: {
      type: String,
      required: false,
    },
  },
  data: () => ({
    hover: false,
  }),
  setup(props) {
    //Use Router
    const router = useRouter();
    const { user, isAuthenticated, token } = auth();
    const accounts = mdiAccountSearchOutline;
    const informations = mdiInformationOutline;
    const cart = mdiCart;
    const battery = mdiBatteryPositive;
    const piggy = mdiPiggyBank;

    const handleClick = ({ path, name, childname }) => {
      router.push({
        name: childname ? childname : name,
        params: { uid: props.uid ? props.uid : "" },
      });
    };
    const logout = () => {
      token.value = "";
      router.push({ path: "/login" });
    };
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
    const routes = computed(() => [
      {
        name: "Clients",
        path: "/Clients",
        svg: accounts,
        enabled: true,
      },
      {
        name: "Découverte",
        childname: "Informations",
        path: "/Discover/Informations",
        svg: informations,
        enabled: true,
      },
      {
        name: "Produits",
        childname: "Comptes et livrets",
        path: "/Products/Accounts",
        svg: cart,
        enabled: false,
      },
      {
        name: "Budget",
        path: "/Budget",
        svg: piggy,
        enabled: false,
      },
      {
        name: "Capacité d'épargne",
        path: "/Saving",
        svg: battery,
        enabled: false,
      },
    ]);
    return {
      user,
      isAuthenticated,
      logout,
      routes,
      router,
      handleClick,
      children,
      current,
      parents,
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
button {
  @apply text-sm font-semibold transition-all;
  @apply text-black;
  @apply dark:text-white;
}
.active {
  @apply text-purple-600;
  @apply dark:text-blue-500;
}
.disabled {
  @apply select-none pointer-events-none;
  @apply text-gray-300;
  @apply dark:text-gray-600;
}
</style>
