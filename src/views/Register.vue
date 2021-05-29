<template lang="pug">
.container.py-5.my-52
  .flex.justify-center.items-center
    form#form(@submit="onSubmit")
      .input-container 
        label.autocomplete(for="username") nom d'utilisateur
        input#username(type="text", autocomplete="on", v-model="name")
        span.message {{ nameError }}
      .input-container
        label.autocomplete(for="email") email
        input#email(type="text", autocomplete="on", v-model="email")
        span.message {{ emailError }}
      .input-container
        label.autocomplete(for="password") mot de passe
        input#password(type="password", autocomplete="on", v-model="password")
        span.message {{ passwordError }}
  .flex.justify-center.items-center.py-4
    button.btn(type="submit", form="form") S'enrigister
  .flex.justify-center.items-center.pt-4
    .flex
      router-link(:to="path")
        p.text-sm Vous avez déjà un compte ?
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { auth, isAuthNavguard } from "@/composables/auth";
import { useRouter } from "vue-router";
import { useMutation } from "villus";
import { REGISTER_USER } from "@/services/users.ts";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
export default defineComponent({
  name: "Register",
  data: () => ({
    path: "/login",
  }),
  setup() {
    isAuthNavguard();
    const router = useRouter();
    const { token } = auth();
    const schema = yup.object({
      name: yup.string().required(),
      email: yup.string().required().email(),
      password: yup.string().required().min(4),
    });
    const { handleSubmit } = useForm({
      validationSchema: schema,
    });
    const { value: name, errorMessage: nameError } = useField("name");
    const { value: email, errorMessage: emailError } = useField("email");
    const { value: password, errorMessage: passwordError } = useField(
      "password"
    );
    //Villus
    const state = ref({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    const { execute } = useMutation(REGISTER_USER);
    const onSubmit = handleSubmit((variables) => {
      execute(variables)
        .then((res) => {
          token.value = res.data;
          router.push("/Clients");
        })
        .catch(() => {
          throw new Error("Couldn't register user");
        });
    });
    return {
      state,
      name,
      nameError,
      email,
      emailError,
      password,
      passwordError,
      onSubmit,
    };
  },
});
</script>
