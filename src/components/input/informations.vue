<template lang="pug">
.container
  .flex.justify-center.items-center
    .myinput
    h1 Informations personnelles du client
  .flex.justify-center
    form(@submit.prevent)
      .myinput(v-for="(x, i) in labels")
        label(for="x") {{ x }}
        input#x(type="text", v-model="model[i].$model")
      .myinput
        button.btn(@click="handleSubmit") submit
</template>
<script lang="ts">
import { defineComponent, watch, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useMutation } from "villus";
import { CREATE_CLIENT } from "@/services/clients";
import { local } from "@/composables/storage";
export default defineComponent({
  name: "Discover",
  setup() {
    //LocalStorage
    const { set, get } = local();
    const savedState = get("informations");
    const initialState = {
      type: "",
      civilite: "",
      lastname: "",
      firstname: "",
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
      civilite: "civilité",
      lastname: "nom",
      firstname: "prénom",
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
    const state = ref(savedState ? savedState : initialState);
    watch(state.value, () => {
      set("incomes", state.value);
    });
    //Vueliate
    const rules = {
      type: {},
      civilite: {},
      lastname: {
        required,
      },
      firstname: {
        required,
      },
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
    const { data, execute } = useMutation(CREATE_CLIENT);
    return {
      model,
      labels,
      variables,
      execute,
      data,
    };
  },
  methods: {
    handleSubmit: function () {
      console.log(this.variables);
      this.execute(this.variables).then((result) => {
        console.log(result);
      });
    },
  },
});
</script>
<style lang="postcss" scoped>
</style>

