<template lang="pug">
.container(v-if="data")
  post(v-for="post in posts", :key="post", :post="post")
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
    const posts: any[] = [];
    return {
      data,
      posts,
    };
  },
  watch: {
    data: function (val) {
      console.log(val);
      this.posts.unshift(val.newPost);
    },
  },
  components: {
    post,
  },
});
</script>
