<template lang="pug">
.container
  .row.justify-content-center
    .col-auto 
      postForm
  .row
    Feed
</template>
<script>
import { defineComponent } from "vue";
import postForm from "@/components/containers/createPost";
import Feed from "@/views/feed.vue";
export default defineComponent({
  name: "Home",
  data: () => ({}),
  components: {
    postForm,
    Feed,
  },
});
</script>
