<template>
  <card
    id="app-theme"
    :class="{ 'theme--dark': isDark, 'theme--light': !isDark }"
    class="no-select"
    color="bg"
  >
    <router-view name="header" v-slot="{ Component }">
      <transition
        mode="out-in"
        appear
        enter-active-class="fade-in-top"
        leave-active-class="fade-out-top"
      >
        <component :is="Component"></component>
      </transition>
    </router-view>

    <router-view name="contentRefreshed" v-slot="{ Component }">
      <transition
        mode="out-in"
        enter-active-class="fade-in-fwd"
        leave-active-class="fade-out-bck"
      >
        <component :is="Component"></component>
      </transition>
    </router-view>

    <router-view name="footer" v-slot="{ Component }">
      <transition
        mode="out-in"
        enter-active-class="fade-in-fwd"
        leave-active-class="fade-out-bck"
      >
        <component :is="Component"></component>
      </transition>
    </router-view>
  </card>
  caca
</template>
<script>
import { useClient } from "villus";
import card from "@components/containers/card";
import { theme } from "@/../core-minimal/mixins/theme.js";
export default {
  setup() {
    useClient({
      url: "http://localhost:1337/graphql",
      cachePolicy: "network-only",
    });
  },
  components: {
    card,
  },
  mixins: [theme],
};
</script>
<style lang="scss">
#app {
  font-family: Ubuntu, Avenir, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
</style>
