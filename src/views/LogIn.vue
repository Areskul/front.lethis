<template lang="pug">
.container.py-5
  .flex.justify-center.items-center
    form(@submit.prevent)
      .py-4
        .myinput
          label.autocomplete(for="email") username or email
          input#email(type="text", autocomplete="on", v-model="nameAndMailC")
      .py-4
        .myinput
          label.autocomplete(for="password") password
          input#password(type="password", v-model="model.password.$model")
      .py-4
        .myinput
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

<style lang="postcss" scoped>
.autocomplete {
  @apply absolute text-pink-400 bg-white dark:bg-black left-3 transition-all px-1;
  @apply dark:bg-black;
  top: 0%;
  transform: translateY(-100%);
}
.empty input:not(focus) + label {
  top: 50%;
  transform: translateY(-50%);
}
</style>
