<template lang="pug">
v-card.container(v-if="data", color="danger")
  post(:post="data.newPost")
</template>

<script lang="ts">
import { useSubscription } from "villus";
import { defineComponent } from "vue";
import post from "@/components/containers/post.vue";
import { NEW_POSTS } from "@/services/posts";
import vCard from "@/components/containers/vCard.vue";
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
    vCard,
    post,
  },
});
</script>
