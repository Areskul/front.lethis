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
import postForm from "@/components/containers/createPost";
import Feed from "@/views/feed";
import News from "@/views/news";
export default defineComponent({
  name: "Home",
  data: () => ({}),
  components: {
    postForm,
    Feed,
    News,
  },
  computed: {
    isAuthenticated: {
      get: () => store.state.auth.isAuthenticated,
      set: (val) => val,
    },
  },
});
</script>
