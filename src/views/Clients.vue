<template lang="pug">
div
  .container(v-if="data")
    .flex.justify-around
      client(v-for="client in data.clients", :key="client", :client="client")
  button.fab(@click="handleClick")
    svg.fill-current(viewBox="0 0 25 35")
      path(:d="account")
</template>

<script lang="ts">
import client from "@/components/containers/client.vue";
import { mdiAccountPlus } from "@mdi/js";
import { defineComponent } from "vue";
import { useQuery } from "villus";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { GET_CLIENTS } from "@/services/clients";
export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const { data } = useQuery({
      query: GET_CLIENTS,
    });
    const account = mdiAccountPlus;
    const handleClick = () => {
      store.dispatch("client/setCurrentClient", {});
      router.push("/Discover/Informations");
    };
    return {
      data,
      account,
      handleClick,
    };
  },
  components: {
    client,
  },
});
</script>
<style lang="postcss" scoped>
.fab {
  border-radius: 50%;
  @apply h-16 w-16 px-3 py-4 absolute bottom-10 right-10 shadow-xl;
  @apply text-white bg-blue-600;
  @apply dark:text-white dark:bg-purple-600;
}
</style>
