<template lang="pug">
.container
  .grid.grid-cols-3
    .col-auto
      router-link(exact, tag="div", to="/home")
        svg.svg(viewBox="0 0 24 36")
          path(fill="var(--bg)", :d="home")
    .col-auto(v-if="!isAuthenticated")
      router-link(exact, tag="div", to="/register")
        button s'inscrire
      router-link(exact, tag="div", to="/login")
        button se connecter
    .col-auto(v-if="isAuthenticated")
      v-card(text="bg")
        p {{ user.name }}
    .col-auto
      mainMenu
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { auth } from "@/composables/auth";
import mainMenu from "@/components/navigation/menu.vue";
import { mdiHome } from "@mdi/js";
export default defineComponent({
  name: "v-header",
  data: () => ({
    home: mdiHome,
  }),
  components: {
    mainMenu,
  },
  setup() {
    const store = useStore();
    const { user, isAuthenticated } = auth();
    return {
      user,
      store,
      isAuthenticated,
    };
  },
});
</script>

<style lang="scss" scoped>
.svg {
  margin-top: 9px;
  margin-bottom: -12px;
  width: 40px;
  height: 45px;
}
</style>
