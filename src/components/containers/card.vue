<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import { dimension } from "@areskul/minimal-dimension";
import { border } from "@areskul/minimal-border";
import { elevation } from "@areskul/minimal-elevation";
import { color, text } from "@areskul/minimal-palette";
export default {
  name: "card",
  mixins: [color, text, elevation, border, dimension],
};
</script>
