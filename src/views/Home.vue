<template lang="pug">
.container.pt-10
  router-view(name="input", v-slot="{ Component }")
    transition(
      mode="out-in",
      enter-active-class="fade-in-fwd",
      leave-active-class="fade-out-bck"
    )
      component(:is="Component")
</template>
<script lang="typescript">
import { defineComponent } from "vue";
import informations from "@/components/input/informations.vue";
export default defineComponent({
  name: "Home",
  data: () => ({}),
  components: {
    informations,
  },
});
</script>
