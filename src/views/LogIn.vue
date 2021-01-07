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

<script lang="ts">
import { defineComponent, ref } from "vue";
import { auth } from "@/composables/auth";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useMutation } from "villus";
import { LOGIN_USER } from "@/services/users.ts";
export default defineComponent({
  name: "LogIn",
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
    //Token
    const { token } = auth();
    //Villus
    const variables = state.value;
    const { data, execute } = useMutation(LOGIN_USER);
    return {
      data,
      execute,
      state,
      variables,
      token,
      model,
    };
  },
  methods: {
    handleSubmit: function () {
      this.execute(this.variables).then((result) => {
        console.log(result);
        this.token = result.data.loginUser;
      });
    },
  },
});
</script>
