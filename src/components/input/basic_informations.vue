<template lang="pug">
.container
  .flex.justify-center.items-center.py-6
    h1 Informations personnelles du client
  .flex.justify-center.items-center
    form#form
      .input-container(
        v-for="{ name, as, label, enumValues, ...attrs } in schema.fields"
      )
        label.autocomplete(:for="name") {{ label }}
        Field(:as="as", :id="name", :name="name", v-bind="attrs")
          template(v-if="data")
            component(
              is="option",
              v-for="{ name } in data.enumValues",
              :selected="name == client.gender ? 'selected' : null"
            ) {{ name }}
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Field } from "vee-validate";
import * as yup from "yup";
import { clientUtils } from "@/composables/client";
import { GET_GENDERS } from "@/services/fields";
import { useQuery } from "villus";
import { FormSchema } from "@/common/types";
export default defineComponent({
  name: "basicInformations",
  components: {
    Field,
  },
  setup() {
    const { saveOnLeave, client } = clientUtils();
    const { data } = useQuery({
      query: GET_GENDERS,
    });
    //Vee-validate
    const schema: FormSchema = {
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
        },
      ],
      validation: yup.object({
        firstname: yup.string(),
        lastname: yup.string(),
        gender: yup.string(),
      }),
    };
    saveOnLeave(client, schema);
    return {
      data,
      client,
      schema,
    };
  },
});
</script>
