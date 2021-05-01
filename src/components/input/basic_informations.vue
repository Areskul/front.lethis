<template lang="pug">
.container
  .flex.justify-center.items-center.py-6
    h1 Informations personnelles du client
  .flex.justify-center.items-center
  div {{ schema.fields }}
    form#form
      .input-container(
        v-for="{ name, as, label, enumValues, ...attrs } in schema.fields"
      )
        label.autocomplete(:for="name") {{ label }}
        Field(:as="as", :id="name", :name="name", v-bind="attrs")
          template(v-if="enumValues && enumValues.length")
            div {{ enumValues }}
            component(is="option", v-for="{ name } in enumValues") {{ name }}
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { onBeforeRouteUpdate, onBeforeRouteLeave } from "vue-router";
import { useForm, Field } from "vee-validate";
import * as yup from "yup";
import { clientUtils } from "@/composables/client";
import { GET_GENDERS } from "@/services/fields";
import { useQuery } from "villus";
/*import { FormSchema } from "@/common/types";*/
export default defineComponent({
  name: "basicInformations",
  components: {
    Field,
  },
  props: {
    uid: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    onBeforeRouteLeave((to, from) => {
      onSubmit();
    });
    onBeforeRouteUpdate((to, from) => {
      dispatchClient(props.uid);
    });
    const { updateClient, client, dispatchClient } = clientUtils();
    const { data } = useQuery({ query: GET_GENDERS });
    //Vee-validate
    const schema = ref({
      fields: [
        {
          as: "input",
          name: "firstname",
          label: "Prénom",
          type: "text",
        },
        {
          as: "input",
          name: "lastname",
          label: "Nom",
          type: "text",
        },
        {
          as: "select",
          name: "gender",
          label: "Civilité",
          enumValues: data["enumValues"],
        },
      ],
      validation: yup.object({
        firstname: yup.string(),
        lastname: yup.string(),
        gender: yup.string(),
      }),
    });
    const { handleSubmit } = useForm({
      initialValues: client,
      validationSchema: schema.value.validation,
    });
    const onSubmit = handleSubmit((variables) => {
      updateClient(variables, props.uid);
    });
    return {
      schema,
      onSubmit,
    };
  },
});
</script>
