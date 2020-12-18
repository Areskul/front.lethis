<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { villusClientSetup } from "@/composables/auth";
export default defineComponent({
  name: "inject-token",
  props: {
    token: String,
  },
  setup(props) {
    villusClientSetup();
  },
});
</script>
