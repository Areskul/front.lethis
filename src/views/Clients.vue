<template lang="pug">
div
  .container(v-if="data")
    .flex.flex-wrap.justify-around
      client.px-4(v-for="client in data", :key="client", :client="client")

  transition(
    mode="out-in",
    enter-active-class="scale-in-center",
    leave-active-class="fade-out-bck"
  )
    button.fab(@click="handleClick")
      svg.fill-current(viewBox="0 0 25 35")
        path(:d="account")
  newCli(v-model="state.show")
</template>

<script lang="ts">
import newCli from "@/components/input/new.vue";
import client from "@/components/containers/client.vue";
import { mdiAccountPlus } from "@mdi/js";
import { defineComponent, ref } from "vue";
import { useQuery } from "villus";
import { useStore } from "vuex";
import { GET_CLIENTS } from "@/services/clients";
import { isUnauthNavguard } from "@/composables/auth";
export default defineComponent({
  setup() {
    isUnauthNavguard();
    const store = useStore();
    const { data } = useQuery({
      query: GET_CLIENTS,
    });
    const state = ref({
      show: false,
    });
    const account = mdiAccountPlus;
    const handleClick = () => {
      store.dispatch("client/setCurrentClient", {});
      state.value.show = !state.value.show;
    };
    return {
      state,
      data,
      account,
      handleClick,
    };
  },
  components: {
    client,
    newCli,
  },
});
</script>

<style lang="postcss" scoped>
.fab {
  @apply absolute z-10 bottom-10 right-10 h-16 w-16 px-3 py-4 shadow-xl;
  @apply text-white bg-blue-600;
  @apply dark:text-white dark:bg-purple-600;
  border-radius: 50%;
}
</style>
