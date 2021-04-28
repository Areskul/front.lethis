import { computed } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import { useStore } from "vuex";

export const clientUtils = () => {
  //Store
  const store = useStore();

  const client = computed({
    get: () => store.state.client.currentClient,
    set: (data) => {
      store.dispatch("client/setCurrentClient", data);
    },
  });

  const handleSubmit = (execute, variables) => {
    let id = "";
    execute(variables).then((res) => {
      if (res.data.updateClient) {
        client.value = res.data.updateClient;
        id = res.data.updateClient.id;
      } else {
        console.log(res.error);
        client.value = {};
      }
    });
    return id;
  };
  //Router
  const saveOnLeave = onBeforeRouteLeave((to, from) => {
    if (!from.params.uid) {
      client.value = {};
    } else if (!to.params.uid) {
      client.value = {};
    } else {
      //handleSubmit(execute, variables);
    }
  });
  //const saveCliToStore = (execute, variables) => {
  //}
  const isBlank = (str: any) => {
    return !str || /^\s*$/.test(str);
  };
  const isBlankTuple = (key: any, value: any) => {
    if (isBlank(value)) {
      return key;
    }
  };
  const removeBlankTuples = (obj: any) => {
    const entries = Object.entries(obj);
    const empty: string[] = [];
    entries.forEach(([key, value]) => {
      empty.push(isBlankTuple(key, value));
    });
    empty.forEach((key) => {
      delete obj[key];
    });
    return obj;
  };
  return {
    handleSubmit,
    client,
    saveOnLeave,
    removeBlankTuples,
  };
};
