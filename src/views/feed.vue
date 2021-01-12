<template lang="pug">
.container
  post
div {{ data }}
</template>

<script lang="ts">
import { useSubscription } from "villus";
import { defineComponent } from "vue";
import post from "@/components/containers/post.vue";
import { GET_POSTS } from "@/services/posts";
export default defineComponent({
  name: "Register",
  setup() {
    const { data } = useSubscription({
      query: GET_POSTS,
    });
    console.log(data);
    return {
      data,
    };
  },
  components: {
    post,
  },
});
</script>
