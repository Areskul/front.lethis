<template lang="pug">
div
  slot
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { color, text } from "@areskul/minimal-palette";
import { dimension } from "@areskul/minimal-dimension";
import { border } from "@areskul/minimal-border";
import { elevation } from "@areskul/minimal-elevation";
export default defineComponent({
  name: "v-card",
  mixins: [color, text, elevation, border, dimension],
});
</script>
