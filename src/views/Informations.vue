<template lang="pug">
.container
  .flex.justify-center.items-center
    .myinput
    h1 Informations personnelles du client
  .flex.justify-center
    form(@submit.prevent)
      .myinput
        label(for="type") type
        input#type(type="text", v-model="model.type.$model")
      .myinput
        label(for="civilite") civilite
        input#civilite(type="text", v-model="model.civilite.$model")
      .myinput
        label(for="nom") nom
        input#nom(type="text", v-model="model.nom.$model")
      .myinput.empty
        label(for="prenom") prenom
        input#prenom(type="text", v-model="model.prenom.$model")
      .myinput
        label(for="birthdate") date de naissance
        input#birthdate(type="date", v-model="model.birthdate.$model")
      .myinput
        label(for="family") situation familliale
        input#family(type="text", v-model="model.family.$model")
      .myinput
        label(for="dependants") Personnes à charge
        input#dependants(type="text", v-model="model.dependants.$model")
      .myinput
        label(for="employees") Salariés
        input#employees(type="text", v-model="model.employees.$model")
      .myinput
        label(for="job") Profession
        input#job(type="text", v-model="model.job.$model")
      .myinput
        label(for="retirementAge") Age de départ à la retraite
        input#retirementAge(type="text", v-model="model.retirementAge.$model")
      .myinput
        label(for="adress") Adresse
        input#adress(type="text", v-model="model.adress.$model")
      .myinput
        label(for="cedex") Code postal
        input#cedex(type="text", v-model="model.cedex.$model")
      .myinput
        label(for="city") Ville
        input#city(type="text", v-model="model.city.$model")
      .myinput
        label(for="phone") Téléphone
        input#phone(type="tel", v-model="model.phone.$model")
      .myinput
        label(for="email") Mail
        input#email(type="email", v-model="model.email.$model")
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
      type: "",
      civilite: "",
    });
    const rules = {
      type: {
        required,
      },
      civilite: {
        required,
      },
      nom: {
        required,
      },
      prenom: {
        required,
      },
      family: {
        required,
      },
      birthdate: {
        required,
      },
      dependants: {
        required,
      },
      employees: {
        required,
      },
      job: {
        required,
      },
      retirementAge: {
        required,
      },
      adress: {
        required,
      },
      cedex: {
        required,
      },
      city: {
        required,
      },
      phone: {
        required,
      },
      email: {
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

