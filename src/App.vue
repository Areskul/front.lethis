<template lang="pug">
.body.flex
  .w-auto
    router-view(name="navbar", v-slot="{ Component }")
      transition(
        mode="out-in",
        enter-active-class="slide-in-left",
        leave-active-class="slide-out-left"
      )
        component(:is="Component")
  .w-screen
    router-view(name="header", v-slot="{ Component }")
      transition(
        mode="out-in",
        enter-active-class="fade-in-top",
        leave-active-class="fade-out-top"
      )
        component(:is="Component")
    router-view(name="bodyContent", v-slot="{ Component }")
      transition(
        mode="out-in",
        enter-active-class="fade-in-fwd",
        leave-active-class="fade-out-bck"
      )
        component(:is="Component")
    router-view(name="footer", v-slot="{ Component }")
      transition(
        mode="out-in",
        appear,
        enter-active-class="fade-in-fwd",
        leave-active-class="fade-out-bck"
      )
        component(:is="Component")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useVillus } from "@/villus/setup";
import { auth } from "@/composables/auth";
export default defineComponent({
  setup() {
    //Villus
    useVillus();
    auth();
  },
});
</script>
