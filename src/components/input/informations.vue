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
                :selected="name == client.family ? 'selected' : null"
              ) {{ name }}
          ErrorMessage(:name="name")
</template>
<script lang="ts">
import { defineComponent } from "vue";
/*import dropdown from "@/components/containers/dropdown.vue";*/
/*import { GET_JOBS } from "@/services/fields";*/
import { GET_ENUM } from "@/services/fields";
import { useQuery } from "villus";
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
  props: {
    uid: {
      type: String,
      required: false,
    },
  },
  setup() {
    const { saveOnLeave, client } = clientUtils();
    let job = { name: client.value.job as string };
    const { data } = useQuery({
      query: GET_ENUM,
      variables: { name: "Family" },
    });
    //Vee-validate
    const schema: FormSchema = {
      fields: [
        {
          as: "input",
          name: "client.type",
          label: "Type de bilan",
          type: "text",
        },
        {
          as: "input",
          name: "client.birthdate",
          label: "Date de naissance",
          type: "date",
        },
        {
          as: "select",
          name: "client.family",
          label: "Situation familliale",
        },
        {
          as: "input",
          name: "client.dependants",
          label: "Personnes à charge",
          type: "text",
        },
        {
          as: "input",
          name: "client.employees",
          label: "Salariés",
          type: "text",
        },
        {
          as: "input",
          name: "job.name",
          label: "Profession",
          type: "text",
        },
        {
          as: "input",
          name: "client.retirementAge",
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
        birthdate: yup.date(),
        family: yup.string(),
        dependants: yup.number(),
        employees: yup.number(),
        job: yup.string(),
        retirementAge: yup.number(),
        address: yup.string(),
        phone: yup.number(),
        email: yup.string().email(),
      }),
    };
    saveOnLeave(schema);
    return {
      data,
      client,
      job,
      schema,
    };
  },
});
</script>
