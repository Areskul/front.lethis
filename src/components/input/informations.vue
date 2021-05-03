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
        ErrorMessage(:name="name")
</template>
<script lang="ts">
import { defineComponent } from "vue";
/*import dropdown from "@/components/containers/dropdown.vue";*/
/*import { GET_JOBS } from "@/services/fields";*/
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { clientUtils } from "@/composables/client";
import { FormSchema } from "@/common/types";
export default defineComponent({
  name: "Informations",
  components: {
    Field,
    ErrorMessage,
    /*dropdown,*/
  },
  setup() {
    const { saveOnLeave, client } = clientUtils();
    //Vee-validate
    const schema: FormSchema = {
      fields: [
        {
          as: "input",
          name: "type",
          label: "Type",
          type: "text",
        },
        {
          as: "input",
          name: "birthdate",
          label: "Date de naissance",
          type: "text",
        },
        {
          as: "input",
          name: "family",
          label: "Situation familliale",
          type: "text",
        },
        {
          as: "input",
          name: "dependants",
          label: "Personnes à charge",
          type: "text",
        },
        {
          as: "input",
          name: "employees",
          label: "Salariés",
          type: "text",
        },
        {
          as: "input",
          name: "job",
          label: "Profession",
          type: "text",
        },
        {
          as: "input",
          name: "retirementAge",
          label: "Age de départ à la retraite",
          type: "text",
        },
        {
          as: "input",
          name: "adress",
          label: "Adress",
          type: "text",
        },
        {
          as: "input",
          name: "phone",
          label: "Téléphone",
          type: "text",
        },
        {
          as: "input",
          name: "email",
          label: "Mail",
          type: "text",
        },
      ],
      validation: yup.object({
        type: yup.string(),
        birthdate: yup.string(),
        family: yup.string(),
        dependants: yup.string(),
        employees: yup.string(),
        job: yup.string(),
        retirementAge: yup.string(),
        address: yup.string(),
        phone: yup.string(),
        email: yup.string(),
      }),
    };
    saveOnLeave(client, schema);
    return {
      client,
      schema,
    };
  },
});
</script>
