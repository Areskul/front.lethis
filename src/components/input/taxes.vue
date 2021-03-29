<template lang="pug">
.container
  .flex.justify-center.items-center
    .myinput
    h1 Charges courantes
  .flex.justify-center
    form(@submit.prevent)
      .myinput
        label(for="rent") Loyer
        input#rent(type="text", v-model="model.rent.$model")
      .myinput
        label(for="food") Alimentaire
        input#food(type="text", v-model="model.food.$model")
      .myinput
        label(for="energies") Eau/Electricité/Gaz
        input#energies(type="text", v-model="model.energies.$model")
      .myinput.empty
        label(for="internet") Téléphone/Internet
        input#internet(type="text", v-model="model.internet.$model")
      .myinput
        label(for="school") Autres revenus
        input#school(type="date", v-model="model.school.$model")
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
      rent: "",
      food: "",
      energies: "",
      internet: "",
      school: "",
    });
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

