<template lang="pug">
.container
  v-card {{ post }}
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
