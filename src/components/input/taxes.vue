<template lang="pug">
.container
  .flex.justify-center.items-center.py-6
    h1 Charges courantes
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
import { required, numeric } from "@vuelidate/validators";
import { useMutation } from "villus";
import { CREATE_TAXES } from "@/services/clients";
import { local } from "@/composables/storage";
export default defineComponent({
  name: "Taxes",
  setup() {
    //LocalStorage
    const { set, get } = local();
    const savedState = get("taxes");
    const initialState = {
      yearlyIncomeTax: "",
      ifi: "",
      housingTax: "",
    };
    const labels = {
      yearlyIncomeTax: "Impôt sur le revenu annuel",
      ifi: "IFI",
      housingTax: "Taxe d'habitation",
    };
    const state = ref(savedState ? savedState : initialState);
    watch(state.value, () => {
      set("taxes", state.value);
    });
    //Vueliate
    const rules = {
      yearlyIncomeTax: {
        required,
        numeric,
      },
      housingTax: {
        required,
        numeric,
      },
      ifi: {
        required,
        numeric,
      },
    };
    const model = useVuelidate(rules, state);
    //Villus
    const variables = state.value;
    const { execute } = useMutation(CREATE_TAXES);
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
