<template lang="pug">
.container
  .flex.justify-center.items-center.py-6
    h1 Residence principale/secondaire
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
import { CREATE_ASSET } from "@/services/clients";
import { local } from "@/composables/storage";
export default defineComponent({
  name: "Assets",
  setup() {
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
    const { execute } = useMutation(CREATE_ASSET);
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
<style lang="postcss" scoped></style>
