<template lang="pug">
.container
  .flex.justify-center.items-center
    .myinput
    h1 Informations personnelles du client
  .flex.justify-center
    form(@submit.prevent)
      .myinput
        label(for="benefit") Benefices professionnels
        input#benefit(type="text", v-model="model.benefit.$model")
      .myinput
        label(for="employeeIncome") Revenus salariés
        input#employeeIncome(
          type="text",
          v-model="model.employeeIncome.$model"
        )
      .myinput
        label(for="jointIncome") Revenus du conjoint
        input#jointIncome(type="text", v-model="model.jointIncome.$model")
      .myinput.empty
        label(for="landIncome") Revenus fonciers
        input#landIncome(type="text", v-model="model.landIncome.$model")
      .myinput
        label(for="otherIncome") Autres revenus
        input#otherIncome(type="date", v-model="model.otherIncome.$model")
      .myinput
        label(for="share") Quote Part
        input#share(type="text", v-model="model.share.$model")
      .myinput
        button.btn(@click="handleSubmit") submit
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useMutation } from "villus";
import { GET_POSTS } from "@/services/posts";
export default defineComponent({
  name: "Discover",
  setup() {
    //Vueliate
    const state = ref({
      benefit: "",
      employeeIncome: "",
      jointIncome: "",
      landIncome: "",
      otherIncome: "",
      share: "",
    });
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

