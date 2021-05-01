<template lang="pug">
.flex.py-5
  .card.cursor-pointer.hover(
    @mouseover="show = true",
    @mouseleave="show = false"
  )
    p.p-5 {{ client.gender }}
    p.p-5 {{ client.lastname }}
    p.p-5 {{ client.firstname }}
    button(@click="dispatchClient")
      svg.fill-current.opacity-50(viewBox="0 0 35 45", v-show="show")
        path(:d="pencil")
</template>

<script lang="ts">
import { mdiPencil } from "@mdi/js";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { clientUtils } from "@/composables/client";
export default defineComponent({
  props: {
    client: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { client } = clientUtils();
    const store = useStore();
    const router = useRouter();
    const dispatchClient = () => {
      client.value = props.client;
      router.push({ name: "Identité", params: { uid: props.client.id } });
    };
    return {
      store,
      dispatchClient,
    };
  },
  data: () => ({
    show: false,
    pencil: mdiPencil,
  }),
});
</script>

<style lang="postcss" scoped>
.card {
  @apply shadow-md min-w-max;
}
</style>
