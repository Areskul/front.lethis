<template lang="pug">
.container.py-5.my-52
  .flex.justify-center.items-center
    form(@submit.prevent)
      .py-4
        .myinput 
          label.autocomplete(for="username") username
          input#username(
            type="text",
            autocomplete="on",
            v-model="model.name.$model"
          )
      .py-4
        .myinput
          label.autocomplete(for="email") email
          input#email(
            type="email",
            autocomplete="on",
            v-model="model.email.$model"
          )
      .py-4
        .myinput
          label.autocomplete(for="password") password
          input#password(
            type="password",
            autocomplete="on",
            v-model="model.password.$model"
          )
      .py-4
        .myinput
          button.btn(@click="handleSubmit") S'enrigister
  .flex.justify-center.items-center.pt-4
    .flex
      router-link(:to="path")
        p.text-sm Vous avez déjà un compte ?
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { auth, isAuthNavguard } from "@/composables/auth";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useMutation } from "villus";
import { REGISTER_USER } from "@/services/users.ts";
export default defineComponent({
  name: "Register",
  setup() {
    isAuthNavguard();
    //Router
    const loginPath = "/login";
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
    const { data, execute } = useMutation(REGISTER_USER);
    return {
      variables,
      execute,
      data,
      token,
      model,
      loginPath,
    };
  },
  methods: {
    handleSubmit: function () {
      try {
        this.execute(this.variables).then((result) => {
          this.token = result.data.registerUser;
        });
      } catch {
        throw new Error("Couldn't register user");
      }
    },
  },
});
</script>
