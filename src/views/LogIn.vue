<template lang="pug">
.container
  .row.justify-content-center
    .col-auto
      label(for="email") username or email
      input#email(type="text", v-model="nameAndMailC")
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
  data: () => ({
    nameAndMail: "",
  }),
  computed: {
    nameAndMailC: {
      get: function (): string {
        return this.nameAndMail as string;
      },
      set: function (val: string) {
        this.nameAndMail = val;
      },
    },
  },
  watch: {
    nameAndMailC: function (val) {
      this.state.name = val;
      this.state.email = val;
      this.model.name.$touch();
      this.model.email.$touch();
      this.model.email.$invalid
        ? (this.state.email = "")
        : (this.state.name = "");
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
