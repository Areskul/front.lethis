<template lang="pug">
div
  .container(v-if="data")
    .flex.flex-wrap.justify-around
      client.px-4(
        v-for="client in data.clients",
        :key="client",
        :client="client"
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
import { defineComponent, watch, onBeforeMount, ref } from "vue";
import { useQuery } from "villus";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { GET_CLIENTS } from "@/services/clients";
import { auth } from "@/composables/auth";
export default defineComponent({
  setup() {
    const router = useRouter();
    const { isAuthenticated } = auth();
    watch(isAuthenticated, (isAuthenticated) => {
      if (!isAuthenticated) {
        router.push("/login");
      }
    });
    onBeforeMount(() => {
      if (!isAuthenticated.value) {
        router.push("/login");
      }
    });
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
      /*router.push("/Discover/Identity");*/
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
  border-radius: 50%;
  @apply h-16 w-16 px-3 py-4 fixed bottom-10 right-10 shadow-xl;
  @apply text-white bg-blue-600;
  @apply dark:text-white dark:bg-purple-600;
}
</style>
