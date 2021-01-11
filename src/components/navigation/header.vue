<template lang="pug">
v-card.mb-5(color="secondary", height="60px")
  .container-fluid
    .row.justify-content-between
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
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import vCard from "@/components/containers/vCard.vue";
import mainMenu from "@/components/navigation/menu.vue";
import { mdiHome } from "@mdi/js";
export default defineComponent({
  name: "v-header",
  data: () => ({
    home: mdiHome,
  }),
  components: {
    vCard,
    mainMenu,
  },
  setup() {
    const store = useStore();
    const isAuthenticated = computed({
      get: () => store.state.auth.isAuthenticated,
      set: (val) => val,
    });
    const user = computed({
      get: () => {
        const data = store.state.auth.user;
        const user = data ? data.user : "";
        return user;
      },
      set: (val) => val,
    });
    return {
      isAuthenticated,
      user,
    };
  },
  computed: {},
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
