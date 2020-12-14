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
    .col-auto
      button(@click="execute") submit
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
    const variables = { user: { data: state.value } };
    const { data, execute } = useMutation(REGISTER_USER);
    return {
      data,
      execute,
      state,
      variables,
      model,
    };
  },
  data: () => ({}),
  components: {},
});
</script>
