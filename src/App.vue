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
</template>
<script>
import card from "@/components/containers/card";
import { theme } from "@/../core-minimal/mixins/theme.js";
export default {
  components: {
    card,
  },
  mixins: [theme],
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Agence Web Areskul ",
    // all titles will be injected into this template
    titleTemplate: "%s",
  },
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
