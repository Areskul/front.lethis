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
import { defineComponent, onMounted } from "vue";
import { auth } from "@/composables/auth";
import vCard from "@/components/containers/vCard.vue";
import { theme } from "@/composables/theme";
import { metaTheme } from "@/composables/theme";
import { useQuery } from "villus";
import { USER_INFO } from "@/services/users.ts";
export default defineComponent({
  setup() {
    //villus
    const { token, villusClientSetup, user } = auth();
    villusClientSetup();

    //Dispatch villus data in app
    const { data } = useQuery({ query: USER_INFO });

    //theme
    const { isDark, isOld } = theme();
    const { setMeta } = metaTheme();
    onMounted(async () => {
      setMeta();
    });
    return {
      data,
      token,
      user,
      isDark,
      isOld,
    };
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
  watch: {
    data: function (val) {
      this.user = val.user;
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
