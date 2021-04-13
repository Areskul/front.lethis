<template lang="pug">
.container
  .flex.justify-center.items-center.py-6
    h1 Informations personnelles du client
  form(@submit.prevent)
    .flex.flex-wrap.justify-center
      .flex.p-4(v-for="(x, i) in labels")
        .myinput
          label(for="x") {{ x }}
          input#x(type="text", v-model="model[i].$model")
</template>
<script lang="ts">
import {
  defineComponent,
  /*, watch*/
  ref,
} from "vue";
import { useStore } from "vuex";
import useVuelidate from "@vuelidate/core";
import { useMutation } from "villus";
import { UPDATE_CLIENT } from "@/services/clients";
/*import { local } from "@/composables/storage";*/
export default defineComponent({
  name: "Informations",
  props: {
    uid: {
      type: String,
      required: false,
    },
  },
  setup() {
    //Store
    const store = useStore();
    const cli = store.state.client.currentClient;
    const dispatchClient = (data) => {
      store.dispatch("client/setCurrentClient", data);
    };
    //LocalStorage
    /*const { set, get } = local();*/
    /*const savedState = get("informations");*/
    const initialState = {
      type: "",
      family: "",
      birthdate: "",
      dependants: "",
      employees: "",
      job: "",
      retirementAge: "",
      adress: "",
      cedex: "",
      city: "",
      phone: "",
      email: "",
    };
    const labels = {
      type: "type",
      family: "date de naissance",
      birthdate: "situation familliale",
      dependants: "Personnes à charge",
      employees: "Salariés",
      job: "Profession",
      retirementAge: "Age de départ à la retraite",
      adress: "Adresse",
      cedex: "Code postal",
      city: "Ville",
      phone: "Téléphone",
      email: "Mail",
    };
    const useState = () => {
      if (cli) {
        return cli;
        /*} else if (savedState) {*/
        /*return savedState;*/
      } else if (initialState) {
        return initialState;
      }
    };
    const state = ref(useState());
    /*watch(state.value, () => {*/
    /*set("informations", state.value);*/
    /*});*/
    //Vueliate
    const rules = {
      type: {},
      family: {},
      birthdate: {},
      dependants: {},
      employees: {},
      job: {},
      retirementAge: {},
      adress: {},
      cedex: {},
      city: {},
      phone: {},
      email: {},
    };
    const model = useVuelidate(rules, state);
    //Villus
    const variables = state.value;
    const { data, execute } = useMutation(UPDATE_CLIENT);
    return {
      dispatchClient,
      cli,
      model,
      labels,
      variables,
      execute,
      data,
    };
  },
  //Router
  beforeRouteLeave(to, from) {
    if (!this.uid) {
      this.dispatchClient({});
    } else if (!to.params.uid) {
      this.dispatchClient({});
    } else {
      this.handleSubmit();
    }
  },
  methods: {
    handleSubmit: function () {
      this.execute(this.variables).then((result) => {
        this.dispatchClient(result.data.updateClient);
      });
    },
  },
});
</script>
