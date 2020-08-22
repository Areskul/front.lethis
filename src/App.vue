<template>
  <div id="app">
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
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
