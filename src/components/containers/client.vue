<template lang="pug">
.flex.justify-content-center(v-for="client in items", :key="client")
  .card
    p {{ client.lastname }}
    p {{ client.firstname }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style lang="postcss" scoped>
.card {
  @apply shadow w-24 h-24 bg-pink-400 p-5;
}
</style>
