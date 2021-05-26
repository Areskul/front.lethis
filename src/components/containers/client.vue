<template lang="pug">
.flex.py-5
  .card.cursor-pointer.hover(
    @mouseover="show = true",
    @mouseleave="show = false",
    :class="{ delete: isDeleted }"
  )
    p.p-5 {{ client.gender }}
    p.p-5 {{ client.lastname }}
    p.p-5 {{ client.firstname }}
    button(@click="dispatchClientId")
      svg.fill-current.opacity-50(viewBox="0 0 35 45", v-show="show")
        path(:d="pencil")
    button(@click="deleteClient")
      svg.fill-current.opacity-50(viewBox="0 0 35 45", v-show="show")
        path(:d="trash")
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { mdiPencil, mdiTrashCan } from "@mdi/js";
import { useRouter } from "vue-router";
import { clientUtils } from "@/composables/client";
import { DELETE_CLIENT } from "@/services/clients";
import { useMutation } from "villus";
export default defineComponent({
  props: {
    client: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const isDeleted = ref(false);
    const router = useRouter();
    const { dispatchClient } = clientUtils();
    const dispatchClientId = async () => {
      await dispatchClient(props.client.id);
      await router.push({ name: "Identité", params: { uid: props.client.id } });
    };
    const { execute } = useMutation(DELETE_CLIENT);
    const deleteClient = () => {
      execute({ id: props.client.id }).then((res) => {
        if (res.data) {
          return res;
        } else {
          console.log(res.error);
        }
      });
      isDeleted.value = true;
    };
    return {
      dispatchClientId,
      isDeleted,
      deleteClient,
    };
  },
  data: () => ({
    show: false,
    pencil: mdiPencil,
    trash: mdiTrashCan,
  }),
});
</script>

<style lang="postcss" scoped>
.card {
  @apply shadow-md min-w-max;
}
.delete {
  @apply bg-red-200;
  @apply dark:bg-red-700;
}
</style>
