<template lang="pug">
div
  .flex.header.p-3(v-if="current")
    p.p-1 {{ current.gender }}
    p.p-1 {{ current.firstname }}
    p.p-1 {{ current.lastname }}
  .flex
  breadcrumbs
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, computed } from "vue";
import breadcrumbs from "@/components/navigation/breadcrumbs.vue";
export default defineComponent({
  name: "v-header",
  components: {
    breadcrumbs,
  },
  setup() {
    const store = useStore();
    const current = computed(() => {
      return store.state.client.currentClient;
    });
    return {
      current,
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
