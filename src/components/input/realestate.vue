<template lang="pug">
.container
  .flex.justify-center.items-center.py-6
    h1 {{ route.name }}
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
import { useRoute } from "vue-router";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useMutation } from "villus";
import { CREATE_REALESTATE } from "@/services/clients";
import { local } from "@/composables/storage";
export default defineComponent({
  name: "RealEstate",
  setup() {
    const route = useRoute();
    //LocalStorage
    const { set, get } = local();
    const savedState = get("assets");
    const initialState = {
      name: "",
      value: null,
      monthlyPayment: null,
      propertyTax: null,
    };
    const labels = {
      name: "Nom",
      value: "Valeur bien immobiliers",
      monthlyPayment: "Mensualité prèt immobilier",
      propertyTax: "Taxe foncière",
    };
    const state = ref(savedState ? savedState : initialState);
    watch(state.value, () => {
      set("assets", state.value);
    });
    //Vueliate
    const rules = {
      name: {
        required,
      },
      value: {},
      monthlyPayment: {},
      propertyTax: {},
    };
    const model = useVuelidate(rules, state);
    //Villus
    const variables = state.value;
    const { execute } = useMutation(CREATE_REALESTATE);
    return {
      route,
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
<style lang="postcss" scoped></style>
