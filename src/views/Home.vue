<template lang="pug">
div
  .container(v-if="isAuthenticated")
    .row.justify-content-center
      .col-auto 
        postForm
  .container
    .row
      News
      Feed
</template>
<script>
import { defineComponent } from "vue";
import { store } from "@/store";
export default defineComponent({
  name: "Home",
  data: () => ({}),
  components: {},
  computed: {
    isAuthenticated: {
      get: () => store.state.auth.isAuthenticated,
      set: (val) => val,
    },
  },
});
</script>
