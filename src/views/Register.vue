<template lang="pug">
.container
  .row.justify-content-center
    .col-auto 
      label(for="username") username
      input#username(type="text", v-model="model.name.$model")
    .col-auto
      label(for="email") email
      input#email(type="email", v-model="model.email.$model")
    .col-auto
      label(for="pasword") password
      input#password(type="password", v-model="model.password.$model")
    .col-auto
      button(@click="handleSubmit") submit
</template>

<script>
import { defineComponent, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useMutation } from "villus";
import { REGISTER_USER } from "@/services/users";
export default defineComponent({
  name: "Home",
  setup() {
    //Vueliate
    const state = ref({
      name: "",
      password: "",
      email: "",
    });
    const rules = {
      name: {
        required,
      },
      password: {
        required,
      },
      email: {
        required,
        email,
      },
    };
    const model = useVuelidate(rules, state);
    //Villus
    const variables = state.value;
    const { data, execute } = useMutation(REGISTER_USER);
    return {
      variables,
      execute,
      data,
      model,
    };
  },
  data: () => ({}),
  components: {},
  methods: {
    handleSubmit: function () {
      this.execute(this.variables).then((result) => {
        console.log(result);
        /*if (!this.model.$invalid) {*/
        /*this.color = "success";*/
        /*this.message = "Votre participation a été pris en compte";*/
        /*this.state = this.initialaState;*/
        /*} else {*/
        /*this.color = "danger";*/
        /*this.message = "Oooups, quelquechose n'a pas marché";*/
        /*}*/
        /*[>this.alert = true;<]*/
        /*setTimeout(*/
        /*function () {*/
        /*this.alert = false;*/
        /*}.bind(this),*/
        /*2400*/
        /*);*/
      });
    },
  },
});
</script>
