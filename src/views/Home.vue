<template lang="pug">
.container
  .row
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
