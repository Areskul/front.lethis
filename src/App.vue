<template>
  <v-card id="app-theme" :class="mytheme" class="no-select" color="bg">
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
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { auth } from "@/composables/auth";
import { store } from "@/store";
import vCard from "@/components/containers/vCard.vue";
import { theme } from "@/mixins/theme.js";
import { useQuery } from "villus";
import { USER_INFO } from "@/services/users.ts";
export default defineComponent({
  mixins: [theme],
  setup() {
    const { token, villusClientSetup } = auth();
    villusClientSetup(token.value);
    const { data } = useQuery({ query: USER_INFO });
    console.log(data)
    store.dispatch("auth/setUser", data);
  },
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
