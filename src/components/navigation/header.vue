<template lang="pug">
v-card.mb-5(color="secondary", height="60px")
  v-switch
</template>
<script>
import { defineComponent } from "vue";
import vCard from "@/components/containers/vCard";
import vSwitch from "@/components/buttons/vSwitch.vue";
export default defineComponent({
  name: "v-header",
  data: () => ({}),
  components: {
    vCard,
    vSwitch,
  },
});
</script>
