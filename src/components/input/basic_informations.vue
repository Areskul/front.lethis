<template lang="pug">
.container
  .flex.justify-center.items-center.py-6
    h1 Informations personnelles du client
  .flex.justify-center.items-center
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
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import selectable from "@/components/containers/selectable.vue";
import { onBeforeRouteLeave } from "vue-router";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { clientUtils } from "@/composables/client";
/*import { GET_GENDERS } from "@/services/fields";*/
/*import {useQuery} from "villus"*/
export default defineComponent({
  name: "basicInformations",
  components: {
    selectable,
  },
  props: {
    uid: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const {
      updateClient,
      /*client*/
    } = clientUtils();
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
      updateClient(props.uid, variables);
    });
    onBeforeRouteLeave((to, from) => {
      onSubmit();
    });
    return {
      state,
      firstname,
      lastname,
      gender,
      onSubmit,
    };
  },
});
</script>
