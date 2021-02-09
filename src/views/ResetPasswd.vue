<template lang="pug">
.container
  .grid.justify-center
    .col-auto
      label(for="password") password
      input#password(
        type="password",
        autocomplete="on",
        v-model="model.password.$model"
      )
    .col-auto
      label(for="password_bis") confirmation
      input#password_bis(
        type="password",
        autocomplete="on",
        v-model="model.password_bis.$model"
      )
    .col-auto
      button.btn(@click="handleSubmit") Reset Password
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useMutation } from "villus";
import { RESET_PASSWD } from "@/services/users";
export default defineComponent({
  name: "ForgotPasswd",
  data: () => ({
    success: false,
  }),
  setup(props) {
    //Vueliate
    const state = ref({
      password: "",
      password_bis: "",
    });
    const rules = {
      password: {
        required,
      },
      password_bis: {
        required,
      },
    };
    console.log(props);
    console.log(state);
    const model = useVuelidate(rules, state);
    //Villus
    const { data, execute } = useMutation(RESET_PASSWD);
    const variables = state.value;

    return {
      data,
      variables,
      execute,
      model,
    };
  },
  methods: {
    handleSubmit: function () {
      this.execute(this.variables).then((result) => {
        this.success = result.data.getResetPasswordToken;
      });
    },
  },
});
</script>
