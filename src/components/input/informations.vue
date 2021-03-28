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
        label(for="lastname") nom
        input#lastname(type="text", v-model="model.lastname.$model")
      .myinput.empty
        label(for="firstname") prenom
        input#firstname(type="text", v-model="model.firstname.$model")
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
import { CREATE_CLIENT } from "@/services/clients";
export default defineComponent({
  name: "Discover",
  setup() {
    //Vueliate
    const state = ref({
      type: "",
      civilite: "",
      lastname: "",
      firstname: "",
      family: "",
      birthdate: "",
      dependants: "",
      employees: "",
      job: "",
      retirementAge: "",
      adress: "",
      cedex: "",
      city: "",
      phone: "",
      email: "",
    });
    const rules = {
      type: {},
      civilite: {},
      lastname: {
        required,
      },
      firstname: {
        required,
      },
      family: {},
      birthdate: {},
      dependants: {},
      employees: {},
      job: {},
      retirementAge: {},
      adress: {},
      cedex: {},
      city: {},
      phone: {},
      email: {},
    };
    const model = useVuelidate(rules, state);
    //Villus
    const variables = state.value;
    const { data, execute } = useMutation(CREATE_CLIENT);
    return {
      model,
      variables,
      execute,
      data,
    };
  },
  methods: {
    handleSubmit: function () {
      console.log(this.variables);
      this.execute(this.variables).then((result) => {
        console.log(result);
      });
    },
  },
});
</script>
<style lang="postcss" scoped>
</style>

