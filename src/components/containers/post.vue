<template lang="pug">
.container.px-4
  .box {{ post.content }}
  .grid.justify-items-end 
    div @{{ post.user.name }}
    button.btn(@click="handleClick") like
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMutation } from "villus";
import { LIKE_POST } from "@/services/posts.ts";
export default defineComponent({
  name: "Feed",
  data: () => ({
    isLiked: false,
  }),
  props: {
    post: Object,
  },
  setup(props) {
    const variables = props.post!;
    const { data, execute } = useMutation(LIKE_POST);
    return {
      variables,
      execute,
      data,
    };
  },
  methods: {
    handleClick: async function () {
      const result = await this.execute(this.variables);
      if (result.error) {
        console.error(result.error);
      } else {
        this.isLiked = result.data.likePost as boolean;
      }
    },
  },
});
</script>
<style lang="postcss" scoped>
.box {
  min-height: 60px;
  @apply shadow;
  @apply dark:bg-gray-900;
}
</style>
