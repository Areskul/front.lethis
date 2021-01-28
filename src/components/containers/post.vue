<template lang="pug">
.container.px-4
  .box {{ post.content }}
  .grid.justify-items-end 
    div @{{ post.user.name }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Feed",
  props: {
    post: Object,
  },
  components: {},
});
</script>
<style lang="postcss" scoped>
.box {
  min-height: 60px;
  @apply shadow;
  @apply dark:bg-gray-900;
}
</style>
