import { computed } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import { useStore } from "vuex";

export const client = () => {
  //Store
  const store = useStore();

  const cli = computed(() => store.state.client.currentClient);
  return {
    cli,
  };
};
export const saveCliToStore = (execute, variables) => {
  //Store
  const store = useStore();

  const handleSubmit = (execute, variables) => {
    let id = "";
    execute(variables).then((res) => {
      if (res.data.updateClient) {
        dispatchClient(res.data.updateClient);
        id = res.data.updateClient.id;
      } else {
        console.log(res.error);
        dispatchClient({});
      }
    });
    return id;
  };
  //Router
  const saveOnLeave = onBeforeRouteLeave((to, from) => {
    if (!from.params.uid) {
      dispatchClient({});
    } else if (!to.params.uid) {
      dispatchClient({});
    } else {
      handleSubmit(execute, variables);
    }
  });
  const dispatchClient = (data) => {
    store.dispatch("client/setCurrentClient", data);
  };
  return {
    dispatchClient,
    saveOnLeave,
  };
};
