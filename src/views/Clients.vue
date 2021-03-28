<template lang="pug">
.container(v-if="data")
  client(:items="data.clients")
</template>

<script lang="ts">
import client from "@/components/containers/client.vue";
import { defineComponent } from "vue";
import { useQuery } from "villus";
import { GET_CLIENTS } from "@/services/clients";
export default defineComponent({
  setup() {
    const { data } = useQuery({
      query: GET_CLIENTS,
    });
    return {
      data,
    };
  },
  components: {
    client,
  },
});
</script>
