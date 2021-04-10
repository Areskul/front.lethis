<template lang="pug">
.flex.py-5
  .card.cursor-pointer.hover(
    @mouseover="show = true",
    @mouseleave="show = false"
  )
    p.p-5 {{ client.civilite }}
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
export default defineComponent({
  props: {
    client: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const dispatchClient = () => {
      store.dispatch("client/setCurrentClient", props.client);
      router.push(`/Discover/${props.client.id}/Informations`);
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
