<template lang="pug">
.container
  .flex.justify-center.items-center.py-6
    h1 Informations personnelles du client
  form(@submit.prevent)
    .flex.flex-wrap.justify-center
      .flex.p-4(v-for="(x, i) in labels")
        .myinput(v-if="dropdown[i].bool")
          label(for="x") {{ x }}
          dropdown#x(
            v-model="model[i].$model",
            :query="dropdown[i].query",
            :queryName="dropdown[i].name"
          )
        .myinput(v-else)
          label(for="x") {{ x }}
          input#x(type="text", v-model="model[i].$model")
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import dropdown from "@/components/containers/dropdown.vue";
import { local } from "@/composables/storage";
import { client, saveCliToStore } from "@/composables/client";
import useVuelidate from "@vuelidate/core";
import { useMutation } from "villus";
import { UPDATE_CLIENT } from "@/services/clients";
import { GET_JOBS } from "@/services/fields";
export default defineComponent({
  name: "Informations",
  components: {
    dropdown,
  },
  props: {
    uid: {
      type: String,
      required: false,
    },
  },
  setup() {
    const { cli } = client();
    //LocalStorage
    const { filter } = local();
    const initialState = {
      type: "",
      family: "",
      birthdate: "",
      dependants: "",
      employees: "",
      job: { name: "" },
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
      if (Object.entries(cli.value).length != 0) {
        return cli.value;
      } else if (initialState) {
        return initialState;
      }
    };
    const state = ref(useState());
    const dropdown = {
      type: {
        bool: false,
      },
      family: {
        bool: false,
      },
      birthdate: {
        bool: false,
      },
      dependants: {
        bool: false,
      },
      employees: {
        bool: false,
      },
      job: {
        bool: true,
        query: GET_JOBS,
        name: "jobs",
      },
      retirementAge: {
        bool: false,
      },
      adress: {
        bool: false,
      },
      cedex: {
        bool: false,
      },
      city: {
        bool: false,
      },
      phone: {
        bool: false,
      },
      email: {
        bool: false,
      },
    };
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
    const variables = filter(state.value);
    const { execute } = useMutation(UPDATE_CLIENT);
    saveCliToStore(execute, variables);
    return {
      model,
      labels,
      dropdown,
    };
  },
});
</script>
