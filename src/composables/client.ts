import { computed } from "vue";
import { useStore } from "vuex";
import { useMutation } from "villus";
import { UPDATE_CLIENT } from "@/services/clients";
import { GET_CLIENT } from "@/services/clients";
import { onBeforeRouteLeave } from "vue-router";
import { useForm } from "vee-validate";
import { removeBlankTuples, isEmpty, removeDeepObjects } from "./utils";

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

  const defaultValues = {
    job: {
      name: null,
    },
    place: {
      adress: null,
      cedex: null,
      city: null,
    },
    taxes: {
      income: "0",
      wage: "0",
      housing: "0",
    },
    incomes: {
      benefits: "0",
      wage: "0",
      landed: "0",
      others: "0",
      joint: "0",
      qp: "0",
      total: "0",
      result: "0",
    },
    charges: {
      rent: "0",
      food: "0",
      energy: "0",
      isp: "0",
      school: "0",
      insurance: "0",
      help: "0",
      transports: "0",
      recreation: "0",
      holidays: "0",
      consumer: "0",
      others: "0",
      coownership: "0",
      total: "0",
      qp: "0",
      result: "0",
    },
  };
  const updateClient = (variables) => {
    if (!isEmpty(client.value)) {
      variables.client["id"] = client.value.id;
    }
    variables.client = removeDeepObjects(variables.client);
    variables = removeBlankTuples(variables);
    //console.log(variables);
    update(variables).then((res) => {
      if (res.data) {
        client.value = res.data;
      } else {
        console.log(res.error);
      }
      return res;
    });
  };
  const dispatchClient = (clientId) => {
    const variables = { id: clientId };
    get(variables).then((res) => {
      if (res.data) {
        client.value = res.data;
        return res.data;
      } else {
        client.value = {};
        console.log(res.error);
        return res.error;
      }
    });
  };
  const saveOnLeave = (schema) => {
    const { handleSubmit } = useForm({
      initialValues: {
        client: client.value,
        job: isEmpty(client.value.job) ? client.value.job : null,
        place: isEmpty(client.value.place) ? client.value.place : null,
        incomes: client.value.incomes ? client.value.incomes : null,
        charges: client.value.charges ? client.value.charges : null,
        taxes: client.value.taxes ? client.value.taxes : null,
      },
      validationSchema: schema.validation,
    });
    onBeforeRouteLeave(() => {
      const onSubmit = handleSubmit((variables) => {
        console.log(variables);
        //if (!variables.incomes) {
        //variables.incomes = client.value.incomes;
        //}
        if (!variables.client) {
          variables.client = { id: client.value.id };
        }
        //delete variables.client["job"];
        //delete variables.client["charges"];
        //delete variables.client["taxes"];
        //delete variables.client["incomes"];
        //delete variables.client["place"];

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
    defaultValues,
  };
};
