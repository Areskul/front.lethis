<template lang="pug">
.container
  post(v-for="post in data.newPost", :post="post")
  div {{ data }}
</template>

<script lang="ts">
import { useSubscription } from "villus";
import { defineComponent, watch } from "vue";
import post from "@/components/containers/post.vue";
import { GET_POSTS } from "@/services/posts";
export default defineComponent({
  name: "Register",
  setup() {
    const { data } = useSubscription({
      query: GET_POSTS,
    });
    watch(data, (incoming) => {
      console.log(data);
      /*console.log(incoming);*/
      // do stuff with incoming data
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
