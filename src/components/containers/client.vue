<template lang="pug">
.flex.py-5
  .card.cursor-pointer(@mouseover="show = true", @mouseleave="show = false")
    p {{ client.civilite }}
    p {{ client.lastname }}
    p {{ client.firstname }}
    svg.fill-current.opacity-50.transition-all(
      viewBox="0 0 35 45",
      v-show="show"
    )
      path(:d="pencil")
</template>

<script lang="ts">
import { mdiPencil } from "@mdi/js";
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    client: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    show: false,
    pencil: mdiPencil,
  }),
});
</script>

<style lang="postcss" scoped>
.card {
  @apply shadow-md w-60 h-24;
}
</style>
