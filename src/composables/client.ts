import { computed } from "vue";
import { useStore } from "vuex";
import { useMutation } from "villus";
import { UPDATE_CLIENT } from "@/services/clients";
import { CREATE_CLIENT } from "@/services/clients";
import { GET_CLIENT } from "@/services/clients";

export const clientUtils = () => {
  const { execute: update } = useMutation(UPDATE_CLIENT);
  const { execute: create } = useMutation(CREATE_CLIENT);
  const { execute: get } = useMutation(GET_CLIENT);
  //Store
  const store = useStore();
  const client = computed({
    get: () => store.state.client.currentClient,
    set: (data) => {
      store.dispatch("client/setCurrentClient", data);
    },
  });
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
  //const useState = () => {
  //if (Object.entries(client.value).length != 0) {
  //return client.value;
  //} else if (initialState) {
  //return initialState;
  //}
  //};
  const updateClient = (clientId, variables) => {
    variables["id"] = clientId;
    variables = removeBlankTuples(variables);
    let id = "";
    update(variables).then((res) => {
      if (res.data) {
        client.value = res.data;
        id = res.data.id;
      } else {
        console.log(res.error);
        client.value = {};
      }
    });
    return id;
  };
  const createClient = (variables) => {
    variables = removeBlankTuples(variables);
    create(variables).then((res) => {
      if (res.data) {
        client.value = res.data;
      } else {
        console.log(res.error);
        client.value = {};
      }
    });
  };
  const dispatchClient = (clientId) => {
    get(clientId).then((res) => {
      if (res.data) {
        client.value = res.data;
      } else {
        console.log(res.error);
        client.value = {};
      }
    });
  };
  //Router
  return {
    client,
    //saveOnLeave,
    dispatchClient,
    updateClient,
    createClient,
  };
};
