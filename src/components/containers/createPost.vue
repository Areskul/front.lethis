<template lang="pug">
div
  h2 {{ title }}
  input 
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data: () => ({
    title: "New Posts",
  }),
});
</script>
