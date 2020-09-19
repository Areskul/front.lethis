<template>
  <div :class="{ 'theme--dark': isDark, 'theme--light': !isDark }">
    <card color="bg" id="app">
      <transition
        mode="out-in"
        enter-active-class="fade-in-top"
        leave-active-class="fade-ou-top"
      >
        <router-view name="header"></router-view>
      </transition>
      <transition
        mode="out-in"
        enter-active-class="slide-in-bck-center"
        leave-active-class="slide-out-bck-center"
      >
        <router-view name="contentRefreshed"></router-view>
      </transition>
      <transition
        mode="out-in"
        enter-active-class="fade-in-top"
        leave-active-class="fade-ou-top"
      >
        <router-view name="footer"></router-view>
      </transition>
      <router-view />
    </card>
  </div>
</template>
<script>
import card from "@/core/components/containers/card";
export default {
  components: {
    card,
  },
  computed: {
    isDark: {
      set: function (bool) {
        this.$store.dispatch("theme/setDark", bool);
      },
      get: function () {
        return this.$store.state.theme.isDark;
      },
    },
  },
};
</script>
<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
}
</style>
