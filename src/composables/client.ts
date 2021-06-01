import { computed } from "vue";
import { useStore } from "vuex";
import { useMutation } from "villus";
import { UPDATE_CLIENT } from "@/services/clients";
import { GET_CLIENT } from "@/services/clients";
import { onBeforeRouteLeave } from "vue-router";
import { useForm } from "vee-validate";
import { removeBlankTuples, isEmpty } from "./utils";

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
  const updateClient = (variables) => {
    if (!isEmpty(client.value)) {
      variables.client["id"] = client.value.id;
    }
    variables = removeBlankTuples(variables);
    update(variables).then((res) => {
      if (res.data) {
        client.value = res.data;
      } else {
        //client.value = {};
        console.log(res.error);
      }
      return res;
    });
  };
  const updateClientAsync = (variables) => {
    if (!isEmpty(client.value)) {
      variables.client["id"] = client.value.id;
    }
    variables = removeBlankTuples(variables);
    update(variables).then((res) => {
      if (res.data) {
        client.value = res.data;
      } else {
        //client.value = {};
        console.log(res.error);
      }
      return res;
    });
    //let promise = new Promise((resolve, reject) => {
    //resolve(res.data);
    //reject(res.error);
    //});
    //return promise;
  };
  const dispatchClient = (clientId) => {
    const variables = { id: clientId };
    get(variables).then((res) => {
      if (res.data) {
        client.value = res.data;
        return res.data;
      } else {
        //client.value = {};
        console.log(res.error);
        return res.error;
      }
    });
  };
  const saveOnLeave = (schema) => {
    const { handleSubmit } = useForm({
      initialValues: {
        client: client.value,
        job: client.value.job ? client.value.job : { name: null },
        place: client.value.place
          ? client.value.place
          : {
              adress: null,
              cedex: null,
              city: null,
            },
        incomes: client.value.incomes
          ? client.value.incomes
          : {
              benefits: "0",
              wage: "0",
              landed: "0",
              others: "0",
              joint: "0",
              qp: "0",
              total: "0",
              result: "0",
            },
      },
      validationSchema: schema.validation,
    });
    onBeforeRouteLeave(() => {
      const onSubmit = handleSubmit((variables) => {
        if (!variables.incomes) {
          variables.incomes = client.value.incomes;
        }
        if (!variables.client) {
          variables.client = { id: client.value.id };
        }
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
    updateClientAsync,
  };
};
