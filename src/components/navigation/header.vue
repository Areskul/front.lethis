<template lang="pug">
.flex.colors
  .flex-1
    router-link(exact, tag="div", to="/home")
      svg.svg(viewBox="0 0 24 36")
        path(fill="var(--bg)", :d="home")
  .flex-1(v-if="!isAuthenticated")
    router-link(exact, tag="div", to="/register")
      button.btn s'inscrire
    router-link(exact, tag="div", to="/login")
      button.btn se connecter
  .flex-1.justify-seld-center(v-if="isAuthenticated")
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

<style lang="postcss" scoped>
.svg {
  margin-top: 9px;
  margin-bottom: -12px;
  width: 40px;
  height: 45px;
}
.colors {
  @apply bg-pink-500 dark:bg-purple-500;
}
</style>
