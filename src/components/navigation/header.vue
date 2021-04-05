<template lang="pug">
.flex.header {{ current.firstname }}
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "v-header",
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
  @apply justify-between py-4 h-auto;
  @apply bg-white dark:bg-gray-900;
}
</style>
