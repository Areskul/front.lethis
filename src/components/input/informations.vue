<template lang="pug">
.container
  .flex.justify-center.items-center.py-6
    h1 Informations personnelles du client
  form#form
    .flex.flex-wrap.justify-center
      .flex(v-for="{ name, as, label, enumValues, ...attrs } in schema.fields")
        .input-container
          label(:for="name") {{ label }}
          Field.w-full(
            v-if="as == 'select'",
            as="div",
            :id="name",
            :name="name",
            v-bind="attrs",
            v-model="attrs.model"
          )
            Listbox(v-model="attrs.model")
              ListboxButton
                span.my-auto.px-3 {{ attrs.model }}
              transition(
                leave-active-class="transition duration-100 ease-in",
                leave-from-class="opacity-100",
                leave-to-class="opacity-0"
              )
                ListboxOptions.options
                  ListboxOption(
                    v-slot="{ active, selected }",
                    v-for="{ name: n } in data[attrs.data].enumValues",
                    :key="n",
                    :value="n",
                    as="template"
                  )
                    li(
                      :class="[active ? 'text-amber-900 bg-amber-100 dark:text-white' : 'dark:text-gray-400 text-gray-900', 'cursor-default select-none relative py-2 pl-10 pr-4']"
                    )
                      span.option(
                        :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']"
                      ) {{ n }}
          Field(v-else, :as="as", :id="name", :name="name", v-bind="attrs")
          ErrorMessage(:name="name")
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  /*reactive,*/
} from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

/*import dropdown from "@/components/containers/dropdown.vue";*/
/*import { GET_JOBS } from "@/services/fields";*/
import { GET_ENUM, GET_JOBS } from "@/services/fields";
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
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
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
    const { data: dataFam } = useQuery({
      query: GET_ENUM,
      variables: { name: "Family" },
    });
    const { data: dataJob } = useQuery({
      query: GET_JOBS,
    });
    const data = ref({
      family: dataFam,
      job: {
        enumValues: dataJob,
      },
    });
    console.log(dataJob);
    console.log(data.value["job"]);
    console.log(dataFam);
    console.log(data.value["family"]);

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
          model: client.value.family,
          data: "family",
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
          as: "select",
          name: "job.name",
          label: "Profession",
          model: client.value.job,
          data: "job",
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
  data: () => ({
    open: true,
  }),
});
</script>
<style lang="postcss" scoped>
button {
  @apply relative w-full py-3 text-left rounded-lg shadow-md cursor-default focus:outline-none sm:text-sm;
  @apply text-black bg-white;
  @apply dark:text-white dark:bg-gray-900;
}
.options {
  @apply absolute z-10 w-full py-1 mt-1 overflow-hidden rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;
  @apply dark:text-white dark:bg-gray-900;
  @apply text-black;
}
</style>
