<template lang="pug">
.container
  .box {{ post.content }}
  div {{ post.user.name }}
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
<style>
.box {
  min-height: 60px;
  @apply shadow;
}
</style>
