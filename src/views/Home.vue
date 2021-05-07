<template lang="pug">
.container
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
import { isUnauthNavguard } from "@/composables/auth";
import { clientUtils } from "@/composables/client";
export default defineComponent({
  name: "Home",
  props: {
    uid: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    isUnauthNavguard();
    const { dispatchClient } = clientUtils();
    dispatchClient(props.uid);
  },
});
</script>
