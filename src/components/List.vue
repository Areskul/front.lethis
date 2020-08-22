<template>
  <div class="hello">
    <card color="error-darken5" elevation="4" height="150px"></card>
  </div>
</template>
<script>
import card from "@/components/containers/card.vue";
export default {
  name: "List",
  props: {},
  components: {
    card,
  },
};
</script>
