<template lang="pug">
.flex.py-5
  .card
    p {{ client.civilite }}
    p {{ client.lastname }}
    p {{ client.firstname }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    client: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="postcss" scoped>
.card {
  @apply shadow-md w-60 h-24;
}
</style>
