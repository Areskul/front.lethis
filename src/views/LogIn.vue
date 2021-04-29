<template lang="pug">
.container.py-5.my-52
  .flex.justify-center.items-center
    form#form(@submit="onSubmit")
      .input-container
        label.autocomplete(for="email") email ou pseudo
        input#email(type="text", autocomplete="on", v-model="email")
        span.message {{ emailError }}
      .input-container
        label.autocomplete(for="email") mot de passe
        input#email(type="password", autocomplete="on", v-model="password")
        span.message {{ passwordError }}
  .flex.justify-center.items-center.py-4
    button.btn(type="submit", form="form") Se connecter
  .flex.justify-center.items-center
    .flex
      ForgotPasswd(:variables="state")
  .flex.justify-center.items-center.pt-4
    .flex
      router-link(:to="path")
        p.text-sm Créer un compte
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { auth, isAuthNavguard } from "@/composables/auth";
import { useRouter } from "vue-router";
import { useMutation } from "villus";
import { LOGIN_USER } from "@/services/users.ts";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import ForgotPasswd from "@/views/ForgotPassword.vue";
export default defineComponent({
  name: "LogIn",
  data: () => ({
    path: "/register",
  }),
  components: {
    ForgotPasswd,
  },
  setup() {
    isAuthNavguard();
    const router = useRouter();
    const { token } = auth();
    const schema = yup.object({
      email: yup.string().required(),
      password: yup.string().required().min(4),
    });
    const { handleSubmit } = useForm({
      validationSchema: schema,
    });
    const { value: email, errorMessage: emailError } = useField("email");
    const { value: password, errorMessage: passwordError } = useField(
      "password"
    );
    //Villus
    const state = ref({
      name: email.value,
      email: email.value,
      password: password.value,
    });
    const { execute } = useMutation(LOGIN_USER);
    const onSubmit = handleSubmit((variables) => {
      execute(variables)
        .then((res) => {
          token.value = res.data;
          router.push("/Clients");
        })
        .catch(() => {
          throw new Error("Couldn't log user in");
        });
    });
    return {
      state,
      email,
      password,
      emailError,
      passwordError,
      onSubmit,
    };
  },
});
</script>
