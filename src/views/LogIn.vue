<template lang="pug">
.container.py-5.my-52
  .flex.justify-center.items-center
    form(@submit.prevent)
      .py-4
        .myinput
          label.autocomplete(for="email") nom ou email
          input#email(type="text", autocomplete="on", v-model="nameAndMailC")
      .py-4
        .myinput
          label.autocomplete(for="password") mot de passe
          input#password(type="password", v-model="model.password.$model")
      .py-4
        .myinput
          button.btn(@click="handleSubmit") Se connecter
  .flex.justify-center.items-center
    .flex
      ForgotPasswd(:variables="variables")
  .flex.justify-center.items-center.pt-4
    .flex
      router-link(:to="registerPath")
        p.text-sm Créer un compte
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { auth, isAuthNavguard } from "@/composables/auth";
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
    isAuthNavguard();
    //Router
    const registerPath = "/register";
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
      registerPath,
    };
  },
  methods: {
    handleSubmit: function () {
      this.execute(this.variables)
        .then((result) => {
          this.token = result.data;
          this.$router.push("/Clients");
        })
        .catch(() => {
          throw new Error("Couldn't log user in");
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
