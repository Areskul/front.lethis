<template lang="pug">
.container.pt-10
  router-view(name="input", v-slot="{ Component }")
    transition(
      mode="out-in",
      appear,
      enter-active-class="slide-in-left",
      leave-active-class="slide-out-right"
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
