<template lang="pug">
.z-10
  .flex.w-24
    // img(src="/logo.png", height="20", widht="100")
  .flex.header.p-3(v-if="client && isAuthenticated")
    p.p-1 {{ client.gender }}
    p.p-1 {{ client.firstname }}
    p.p-1 {{ client.lastname }}
  .flex
  router-view(name="titles", v-slot="{ Component }")
    transition(
      mode="out-in",
      enter-active-class="fade-in-fwd",
      leave-active-class="fade-out-bck"
    )
      component(:is="Component")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import breadcrumbs from "@/components/navigation/breadcrumbs.vue";
import { clientUtils } from "@/composables/client";
import { auth } from "@/composables/auth";
export default defineComponent({
  name: "v-header",
  components: {
    breadcrumbs,
  },
  setup() {
    const { client } = clientUtils();
    const { isAuthenticated } = auth();
    return {
      client,
      isAuthenticated,
    };
  },
});
</script>

<style lang="postcss" scoped>
.svg {
  margin-top: 9px;
  margin-bottom: -12px;
  width: 40px;
  height: 45px;
}
.header {
  @apply justify-end py-4 h-auto;
  @apply bg-white dark:bg-gray-900;
}
p {
  @apply text-purple-600;
  @apply dark:text-purple-600;
}
</style>
