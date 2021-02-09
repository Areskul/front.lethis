<template lang="pug">
.container
  .grids
    form(@submit.prevent)
      .col-auto
        label(for="email") username or email
        input#email(type="text", autocomplete="on", v-model="nameAndMailC")
      .col-auto
        label(for="password") password
        input#password(
          type="password",
          autocomplete="on",
          v-model="model.password.$model"
        )
      .col-auto
        button.btn(@click="handleSubmit") submit
  ForgotPasswd(:variables="variables")
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { auth } from "@/composables/auth";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useMutation } from "villus";
import { LOGIN_USER } from "@/services/users.ts";
import ForgotPasswd from "@/views/ForgotPassword.vue";
export default defineComponent({
  name: "LogIn",
  components: {
    ForgotPasswd,
  },
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
    const { execute } = useMutation(LOGIN_USER);

    return {
      execute,
      variables,
      token,
      model,
    };
  },
  methods: {
    handleSubmit: function () {
      this.execute(this.variables).then((result) => {
        this.token = result.data.loginUser;
      });
      this.$router.push("/home");
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
      this.variables.name = val;
      this.variables.email = val;
      this.model.name.$touch();
      this.model.email.$touch();
      this.model.email.$invalid
        ? (this.variables.email = "")
        : (this.variables.name = "");
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
