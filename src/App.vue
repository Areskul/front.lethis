<template>
  <v-card id="app-theme" :class="mytheme" class="no-select" color="bg">
    <inject-token :token="token">
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
    </inject-token>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
/*import { useClient } from "villus";*/
import injectToken from "@/components/containers/injectToken.vue";
import vCard from "@/components/containers/vCard.vue";
import { auth } from "@/mixins/auth.js";
import { theme } from "@/mixins/theme.js";
export default defineComponent({
  mixins: [auth, theme],
  computed: {
    mytheme: function () {
      if (this.isDark) {
        return "theme--dark";
      } else if (this.isOld) {
        return "theme--old";
      } else {
        return "theme--light";
      }
    },
  },
  components: {
    injectToken,
    vCard,
  },
});
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
