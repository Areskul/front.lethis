<template lang="pug">
.container
  .row.justify-content-center
    .col-auto 
      post
</template>
<script>
import { defineComponent } from "vue";
import post from "@/components/containers/createPost";
export default defineComponent({
  name: "Home",
  data: () => ({}),
  components: {
    post,
  },
});
</script>
