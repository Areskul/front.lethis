<template lang="pug">
.container
  .flex.justify-center.items-center.py-6
    h1 Informations personnelles du client
  form#form
    .flex.flex-wrap.justify-center
      .flex(v-for="{ name, as, label, enumValues, ...attrs } in schema.fields")
        .input-container
          label(:for="name") {{ label }}
          Field(:as="as", :id="name", :name="name", v-bind="attrs")
            template(v-if="data")
              component(
                is="option",
                v-for="{ name } in data.enumValues",
                :selected="name == client.gender ? 'selected' : null"
              ) {{ name }}
          ErrorMessage(:name="name")
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useForm, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { clientUtils } from "@/composables/client";
import { GET_ENUM } from "@/services/fields";
import { useQuery } from "villus";
import { FormSchema } from "@/common/types";
export default defineComponent({
  name: "basicInformations",
  components: {
    Field,
    ErrorMessage,
  },
  setup() {
    const { saveOnLeave, client } = clientUtils();
    const { data } = useQuery({
      query: GET_ENUM,
      variables: { name: "Gender" },
    });
    //Vee-validate
    const schema: FormSchema = {
      fields: [
        {
          as: "input",
          name: "client.firstname",
          label: "Prénom",
          type: "text",
        },
        {
          as: "input",
          name: "client.lastname",
          label: "Nom",
          type: "text",
        },
        {
          as: "select",
          name: "client.gender",
          label: "Civilité",
        },
      ],
      validation: yup.object({
        firstname: yup.string(),
        lastname: yup.string(),
        gender: yup.string(),
      }),
    };
    const { handleSubmit } = useForm({
      initialValues: client.value,
      validationSchema: schema.validation,
    });
    saveOnLeave(schema);
    return {
      handleSubmit,
      data,
      client,
      schema,
    };
  },
});
</script>
