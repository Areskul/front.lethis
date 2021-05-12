import { computed } from "vue";
import { useStore } from "vuex";
import { useMutation } from "villus";
import { UPDATE_CLIENT } from "@/services/clients";
import { GET_CLIENT } from "@/services/clients";
import { onBeforeRouteLeave } from "vue-router";
import { useForm } from "vee-validate";

export const clientUtils = () => {
  const { execute: update } = useMutation(UPDATE_CLIENT);
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
  const updateClient = (variables) => {
    variables.client["id"] = client.value.id;
    variables = removeBlankTuples(variables);
    update(variables).then((res) => {
      if (res.data) {
        client.value = res.data;
        return res;
      } else {
        console.log(res.error);
      }
    });
  };
  const dispatchClient = (clientId) => {
    const variables = { id: clientId };
    get(variables).then((res) => {
      if (res.data) {
        client.value = res.data;
      } else {
        client.value = {};
        console.log(res.error);
      }
    });
  };
  const saveOnLeave = (schema) => {
    const { handleSubmit } = useForm({
      initialValues: {
        client: client.value,
        job: client.value.job ? client.value.job : {},
      },
      validationSchema: schema.validation,
    });
    onBeforeRouteLeave(() => {
      const onSubmit = handleSubmit((variables) => {
        console.log(variables);
        updateClient(variables);
      });
      onSubmit();
    });
  };
  return {
    client,
    dispatchClient,
    saveOnLeave,
    updateClient,
  };
};
