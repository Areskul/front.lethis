<template lang="pug">
div
  basicInformations
  .container
    .flex.justify-center.items-center.py-6
      h1 Informations personnelles du client
    form(@submit.prevent)
      .flex.flex-wrap.justify-center
        .flex.p-4(v-for="(x, i) in labels")
          .myinput
            label(for="x") {{ x }}
            input#x(type="text", v-model="model[i].$model")
    .flex.justify-center.items-center.py-6
      .myinput
        button.btn(@click="handleSubmit") Enregistrer
</template>
<script lang="ts">
import { defineComponent, watch, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { useMutation } from "villus";
import { CREATE_CLIENT } from "@/services/clients";
import { local } from "@/composables/storage";
import basicInformations from "@/components/input/basic_informations.vue";
export default defineComponent({
  name: "Informations",
  setup() {
    //LocalStorage
    const { set, get } = local();
    const savedState = get("informations");
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
    const state = ref(savedState ? savedState : initialState);
    watch(state.value, () => {
      set("informations", state.value);
    });
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
      this.execute(this.variables).then((result) => {
        console.log(result);
      });
    },
  },
  components: {
    basicInformations,
  },
});
</script>
