<template lang="pug">
.container
  .row.justify-content-center
    .col-auto 
      label(for="username") username
      input#username(type="text")
    .col-auto
      label(for="email") email
      input#email(type="email")
    .col-auto
      label(for="pasword") password
      input#password(type="password")
</template>

<script>
import { defineComponent, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useMutation } from "villus";
export default defineComponent({
  name: "Home",
  setup() {
    //Vueliate
    const state = ref({
      username: "",
      password: "",
      email: "",
    });
    const rules = {
      username: {
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
    const variables = { user: { data: state.value } };
    /*const { data, execute } = useMutation(addUser);*/
    return {
      /*data,*/
      /*execute,*/
      state,
      variables,
      model,
    };
  },
  data: () => ({}),
  components: {},
});
</script>
