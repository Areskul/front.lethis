<template lang="pug">
.container
  .flex.justify-center.py-6
    h1 Charges courantes
  .flex.justify-center.self-center
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
import { CREATE_CHARGES } from "@/services/clients";
import { local } from "@/composables/storage";
export default defineComponent({
  name: "Charges",
  setup() {
    //LocalStorage
    const { set, get } = local();
    const savedState = get("charges");
    const initialState = {
      rent: "",
      food: "",
      energies: "",
      internet: "",
      school: "",
    };
    const labels = {
      rent: "Loyer",
      food: "Alimentaire",
      energies: "Eau/Electricité/Gaz",
      internet: "Téléphone/Internet",
      school: "Frais de scolairité",
    };
    const state = ref(savedState ? savedState : initialState);
    watch(state.value, () => {
      set("charges", state.value);
    });
    //Vueliate
    const rules = {
      rent: {
        required,
      },
      food: {
        required,
      },
      energies: {
        required,
      },
      internet: {
        required,
      },
      school: {
        required,
      },
    };
    const model = useVuelidate(rules, state);
    //Villus
    const variables = state.value;
    const { execute } = useMutation(CREATE_CHARGES);
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
