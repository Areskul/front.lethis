<template lang="pug">
.flex.py-5(v-for="client in items", :key="client")
  .card
    p {{ client.civilite }}
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
  @apply shadow-lg w-60 h-24 bg-gray-200;
}
</style>
