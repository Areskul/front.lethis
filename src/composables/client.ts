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
  const updateClient = (variables, clientId?) => {
    variables["id"] = clientId;
    variables = removeBlankTuples(variables);
    (clientId ? update(variables) : create(variables)).then((res) => {
      if (res.data) {
        client.value = res.data;
      } else {
        console.log(res.error);
      }
    });
  };
  const dispatchClient = (clientId) => {
    const variables = { id: clientId };
    get(variables).then((res) => {
      if (res.data) {
        console.log(res);
        client.value = res.data;
      } else {
        console.log(res.error);
      }
    });
  };
  //Router
  return {
    client,
    dispatchClient,
    updateClient,
  };
};
