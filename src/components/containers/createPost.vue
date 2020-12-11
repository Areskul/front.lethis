<template lang="pug">
  h1{{title}}

</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data: () => ({
    title: "New Posts",
  }),
});
</script>
