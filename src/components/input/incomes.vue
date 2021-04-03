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
  .flex.justify-center.items-center.py-6
    .myinput
      button.btn(@click="handleSubmit") submit
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useMutation } from "villus";
import { CREATE_INCOMES } from "@/services/clients";
import { local } from "@/composables/storage";
export default defineComponent({
  name: "Incomes",
  setup() {
    //LocalStorage
    const { set, get } = local();
    const savedState = get("incomes");
    const initialState = {
      benefit: "",
      employeeIncome: "",
      jointIncome: "",
      landIncome: "",
      otherIncome: "",
      share: "",
    };
    const labels = {
      benefit: "Benefices professionnels",
      employeeIncome: "Revenus salariés",
      jointIncome: "Revenus du conjoint",
      landIncome: "Revenus fonciers",
      otherIncome: "Autres revenus",
      share: "Quote Part",
    };
    const state = ref(savedState ? savedState : initialState);
    watch(state.value, () => {
      set("incomes", state.value);
    });
    //Vueliate
    const rules = {
      benefit: {
        required,
      },
      employeeIncome: {
        required,
      },
      jointIncome: {
        required,
      },
      landIncome: {
        required,
      },
      otherIncome: {
        required,
      },
      share: {
        required,
      },
    };
    const model = useVuelidate(rules, state);
    //Villus
    const variables = state.value;
    const { execute } = useMutation(CREATE_INCOMES);
    return {
      model,
      labels,
      variables,
      execute,
    };
  },
  methods: {
    handleSubmit: function () {
      this.execute(this.variables).then((result) => {
        console.log(result);
      });
    },
  },
});
</script>
