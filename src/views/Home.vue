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
import { auth } from "@/composables/auth";
export default defineComponent({
  name: "Home",
  props: {
    uid: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const { isAuthenticated } = auth();
    const store = useStore();
    //Dispatch Client
    const { data, execute } = useQuery({
      query: GET_CLIENT,
      variables: { id: props.uid },
    });
    return {
      isAuthenticated,
      data,
      execute,
      store,
    };
  },
  mounted() {
    if (this.uid) {
      this.execute().then((res) => {
        this.dispatchClifromRoute(this.data ? this.data : res);
      });
    } else {
      this.dispatchClifromRoute({});
    }
  },
  methods: {
    dispatchClifromRoute: function (data) {
      const client = data.client ? data.client : {};
      this.store.dispatch("client/setCurrentClient", client);
    },
  },
});
</script>
