<template lang="pug">
.overlay(v-if="modelValue")
  .under(@click="handleClick(false)")
  .alert(@click.prevent)
    .flex.justify-center.pb-4
      h1 Informations personnelles du client
    form#form
      .input-container
        label.autocomplete(for="firstname") Prénom
        input#email(type="text", autocomplete="on", v-model="firstname")
      .input-container
        label.autocomplete(for="lastname") Nom
        input#email(type="text", autocomplete="on", v-model="lastname")
      .input-container
        label.autocomplete(for="gender") Civilité
        input#email(type="text", autocomplete="on", v-model="gender")
    .flex.flex-wrap.justify-center
      button.btn(@click="onSubmit") Créer
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { clientUtils } from "@/composables/client";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "basicInformations",
  /*emits: ["update:modelValue"],*/
  props: {
    uid: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const router = useRouter();
    const { createClient } = clientUtils();
    //Vee-validate
    const schema = yup.object({
      firstname: yup.string(),
      lastname: yup.string(),
      gender: yup.string(),
    });
    const { handleSubmit } = useForm({
      validationSchema: schema,
    });
    const { value: firstname } = useField("firstname");
    const { value: lastname } = useField("lastname");
    const { value: gender } = useField("gender");
    //Villus
    const state = ref({
      firstname: firstname.value,
      lastname: lastname.value,
      gender: gender.value,
    });
    const onSubmit = handleSubmit((variables) => {
      createClient(variables);
      router.push("/Informations");
    });

    const handleClick = function (bool) {
      emit("update:modelValue", bool);
    };
    return {
      firstname,
      lastname,
      gender,
      handleClick,
      onSubmit,
      state,
    };
  },
});
</script>
<style lang="postcss" scoped>
.alert {
  @apply container py-3 max-w-2xl rounded-md shadow z-20;
  @apply bg-white;
  @apply dark:bg-gray-900;
}
.overlay {
  @apply bg-gray-100;
  @apply dark:bg-black;
  @apply fixed z-10 inset-0 flex flex-row overflow-y-auto justify-center items-center;
  @apply bg-opacity-75 transition-opacity;
}
.under {
  @apply inset-0 fixed items-center justify-center;
}
</style>
