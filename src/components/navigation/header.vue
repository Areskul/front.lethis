<template lang="pug">
v-card.mb-5(color="secondary", height="60px")
  .container-fluid
    .row.justify-content-between
      .col-auto
        v-switch
      .col-auto(v-if="!isAuthenticated")
        router-link(exact, tag="div", to="/register")
          button s'inscrire
        router-link(exact, tag="div", to="/login")
          button se connecter
      .col-auto(v-if="isAuthenticated")
        p {{ user }}
</template>
<script>
import { defineComponent } from "vue";
import { store } from "@/store";
import vCard from "@/components/containers/vCard";
import vSwitch from "@/components/buttons/vSwitch.vue";
export default defineComponent({
  name: "v-header",
  data: () => ({}),
  components: {
    vCard,
    vSwitch,
  },
  computed: {
    isAuthenticated: {
      get: () => store.state.auth.isAuthenticated,
    },
    user: {
      get: () => store.state.auth.user,
    },
  },
});
</script>
