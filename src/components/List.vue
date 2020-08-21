<template>
  <div class="hello">
    <card color="error-darken5" elevation="5"></card>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
