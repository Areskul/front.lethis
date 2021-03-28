<template lang="pug">
.flex.header
  div
  div(v-if="!isAuthenticated")
    router-link(exact, tag="div", to="/register")
      button.btn s'inscrire
    router-link(exact, tag="div", to="/login")
      button.btn se connecter
  .justify-seld-center(v-if="isAuthenticated")
    p {{ user.name }}
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
.header {
  @apply justify-between py-4;
  @apply bg-pink-500 dark:bg-purple-500;
}
</style>
