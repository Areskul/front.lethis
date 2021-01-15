<template lang="pug">
.container
  v-card.py-2.my-2(rounded, elevation="2") {{ post.content }}
  div {{ post.user.name }}
</template>

<script lang="ts">
import vCard from "@/components/containers/vCard.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Feed",
  props: {
    post: Object,
  },
  components: {
    vCard,
  },
});
</script>
