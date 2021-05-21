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
              benefits: null,
              wage: null,
              landed: null,
              others: null,
              joint: null,
              qp: null,
              total: null,
              result: null,
            },
      },
      validationSchema: schema.validation,
    });
    onBeforeRouteLeave(() => {
      const onSubmit = handleSubmit((variables) => {
        if (variables.incomes) {
          variables.incomes.id = client.value.incomes.id;
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
  };
};
