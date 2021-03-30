<template lang="pug">
.container
  .flex.justify-center.items-center
    .myinput
    h1 Charges courantes
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
import { required, numeric } from "@vuelidate/validators";
import { useMutation } from "villus";
import { GET_POSTS } from "@/services/posts";
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

