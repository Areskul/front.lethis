<template lang="pug">
.container.pt-10
  router-view(name="input", v-slot="{ Component }")
    transition(
      mode="out-in",
      enter-active-class="fade-in-fwd",
      leave-active-class="fade-out-bck"
    )
      component(:is="Component")
</template>
<script lang="typescript">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useQuery } from "villus";
import { GET_CLIENT } from "@/services/clients";
import informations from "@/components/input/informations.vue";
export default defineComponent({
  name: "Home",
  props: {
    uid: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const store = useStore();
    //Dispatch Client
    const { data, execute } = useQuery({
      query: GET_CLIENT,
      variables: { id: props.uid },
    });
    return {
      data,
      execute,
      store,
    };
  },
  mounted() {
    this.execute().then(() => this.dispatchClifromRoute());
  },
  methods: {
    dispatchClifromRoute: function () {
      console.log(this.data.client);
      this.store.dispatch("client/setCurrentClient", this.data.client);
    },
  },
  components: {
    informations,
  },
});
</script>
