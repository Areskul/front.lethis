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
import { defineComponent, onMounted, computed } from "vue";
import { auth } from "@/composables/auth";
import { useStore } from "vuex";
import vCard from "@/components/containers/vCard.vue";
import { theme } from "@/composables/theme";
import { metaTheme } from "@/composables/theme";
import { useQuery } from "villus";
import { USER_INFO } from "@/services/users.ts";
export default defineComponent({
  setup() {
    const store = useStore();
    //villus
    const { token, villusClientSetup } = auth();
    villusClientSetup(token.value);
    const { data, execute } = useQuery({ query: USER_INFO });
    store.dispatch("auth/setUser", data);

    const isAuthenticated = computed({
      get: () => store.state.auth.isAuthenticated,
      set: (val) => val,
    });

    //theme
    const { isDark, isOld } = theme();
    const { setMeta } = metaTheme();
    onMounted(() => {
      setMeta();
    });
    return {
      isAuthenticated,
      execute,
      isDark,
      isOld,
    };
  },

  watch: {
    isAuthenticated: function () {
      this.execute();
    },
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
