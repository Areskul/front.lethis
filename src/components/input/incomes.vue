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
import { GET_POSTS } from "@/services/posts";
import { local } from "@/composables/storage";
export default defineComponent({
  name: "Discover",
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
    console.log(labels);
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
    const { execute } = useMutation({
      query: GET_POSTS,
    });
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
<style lang="postcss" scoped>
</style>

