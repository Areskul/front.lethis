<template>
  <div id="app">
    <transition
      mode="out-in"
      enter-active-class="animated speed fadeIn"
      leave-active-class="animated speed fadeOut"
    >
      <router-view name="header"></router-view>
    </transition>

    <transition
      mode="out-in"
      enter-active-class="animated speed fadeIn"
      leave-active-class="animated speed fadeOut"
    >
      <router-view name="contentRefreshed"></router-view>
    </transition>
    <transition
      mode="out-in"
      enter-active-class="animated speed fadeIn"
      leave-active-class="animated speed fadeOut"
    >
      <keep-alive>
        <router-view name="contentKeepAlive"></router-view>
      </keep-alive>
    </transition>

    <transition
      mode="out-in"
      enter-active-class="animated speed fadeInRight"
      leave-active-class="animated speed fadeOutRight"
    >
      <router-view class="fixedbottom" name="navigation"></router-view>
    </transition>

    <transition
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view name="footer"></router-view>
    </transition>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
