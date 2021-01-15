<template lang="pug">
.container(v-if="data")
  post(:post="data.newPost")
</template>

<script lang="ts">
import { useSubscription } from "villus";
import { defineComponent } from "vue";
import post from "@/components/containers/post.vue";
import { NEW_POSTS } from "@/services/posts";
export default defineComponent({
  name: "News",
  setup() {
    const { data } = useSubscription({
      query: NEW_POSTS,
    });
    return {
      data,
    };
  },
  components: {
    post,
  },
});
</script>
