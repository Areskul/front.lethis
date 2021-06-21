<template lang="pug">
.container
  form#form
    .flex.flex-wrap.justify-center
      .flex(v-for="{ name, as, label, enumValues, ...attrs } in schema.fields")
        .input-container
          label(:for="name") {{ label }}
          Field.w-full(
            v-if="as == 'select'",
            :id="name",
            :name="name",
            v-bind="attrs",
            v-model="models[attrs.modelkey]"
          )
            Listbox(v-model="models[attrs.modelkey]")
              ListboxButton.listbtn
                span.my-auto.px-3 {{ models[attrs.modelkey] }}
              transition(
                leave-active-class="transition duration-100 ease-in",
                leave-from-class="opacity-100",
                leave-to-class="opacity-0"
              )
                ListboxOptions.options
                  ListboxOption(
                    v-slot="{ active, selected }",
                    v-for="{ name: n } in data[attrs.modelkey].enumValues",
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
          div(v-if="attrs.add")
            .flex.text-center.justify-center
              button.px-4.pt-2.text-sm.text-green-500(
                type="button",
                @click="state.show = true"
              )
                svg.fill-current.opacity-50(viewBox="0 0 35 45")
                  path(:d="plus")
            Dialog(:entity="attrs.modelkey", v-model="state.show")
          ErrorMessage(v-if="as != 'select'", :name="name")
</template>
<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import Dialog from "@/components/containers/dialog.vue";
import { mdiPlusCircle } from "@mdi/js";
import { GET_ENUM, GET_JOBS } from "@/services/fields";
import { useQuery } from "villus";
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { clientUtils } from "@/composables/client";
import { FormSchema } from "@/common/types";
import { isEmpty } from "@/composables/utils";
export default defineComponent({
  name: "Informations",
  components: {
    Field,
    ErrorMessage,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    Dialog,
  },
  props: {
    uid: {
      type: String,
      required: false,
    },
  },
  data: () => ({
    plus: mdiPlusCircle,
  }),
  setup() {
    const state = ref({
      show: false,
    });
    watch(state.value, () => {
      if (!state.value.show) {
        setTimeout(execute, 200);
      }
    });
    const { saveOnLeave, client } = clientUtils();
    const place = computed(() => {
      if (!isEmpty(client.value.place)) {
        return client.value.place;
      } else {
        return {
          adress: null,
          cedex: null,
          city: null,
        };
      }
    });
    const job = computed(() => {
      if (!isEmpty(client.value.job)) {
        return client.value.job;
      } else {
        return { name: null };
      }
    });
    const { data: dataFam } = useQuery({
      query: GET_ENUM,
      variables: { name: "Family" },
    });
    const { data: dataTyp } = useQuery({
      query: GET_ENUM,
      variables: { name: "Type" },
    });
    const { data: dataJob, execute } = useQuery({
      query: GET_JOBS,
    });
    const { data: dataBool } = useQuery({
      query: GET_ENUM,
      variables: { name: "Bool" },
    });
    const data = ref({
      family: dataFam,
      employees: dataBool,
      type: dataTyp,
      job: {
        enumValues: dataJob,
      },
    });
    const models = ref({
      family: client.value.family,
      employees: client.value.employees,
      type: client.value.type,
      job: job.value.name,
    });
    //Vee-validate
    const schema: FormSchema = {
      fields: [
        {
          as: "select",
          name: "client.type",
          label: "Type de bilan",
          modelkey: "type",
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
          modelkey: "family",
        },
        {
          as: "input",
          name: "client.dependants",
          label: "Personnes à charge",
          type: "text",
        },
        {
          as: "select",
          name: "client.employees",
          label: "Salarié",
          modelkey: "employees",
        },
        {
          as: "select",
          name: "job.name",
          label: "Profession",
          modelkey: "job",
          add: true,
        },
        {
          as: "input",
          name: "client.retirementAge",
          label: "Age de départ à la retraite",
          type: "text",
        },
        {
          as: "input",
          name: "place.adress",
          label: "Adresse",
          type: "text",
        },
        {
          as: "input",
          name: "place.cedex",
          label: "Code postal",
          type: "text",
        },
        {
          as: "input",
          name: "place.city",
          label: "Ville",
          type: "text",
        },
        {
          as: "input",
          name: "client.phone",
          label: "Téléphone",
          type: "text",
        },
        {
          as: "input",
          name: "client.email",
          label: "Mail",
          type: "text",
        },
      ],
      validation: yup.object({
        client: yup.object({
          type: yup.string().nullable(),
          birthdate: yup.date().nullable(),
          family: yup.string().nullable(),
          dependants: yup.number().nullable(),
          employees: yup.string().nullable(),
          retirementAge: yup.number().nullable(),
          adress: yup.string().nullable(),
          phone: yup.number().nullable(),
          email: yup.string().email().nullable(),
        }),
        job: yup.object({
          name: yup.string(),
        }),
        place: yup.object({
          adress: yup.string(),
          cedex: yup.number(),
          city: yup.string(),
        }),
      }),
    };
    /*delete client.value["job"];*/
    /*delete client.value["charges"];*/
    /*delete client.value["taxes"];*/
    /*delete client.value["incomes"];*/
    /*delete client.value["place"];*/
    saveOnLeave(schema);
    return {
      state,
      client,
      place,
      job,
      data,
      models,
      schema,
    };
  },
});
</script>
<style lang="postcss" scoped>
.listbtn {
  @apply relative w-full py-3 text-left rounded-lg shadow-md cursor-default focus:outline-none sm:text-sm;
  @apply text-black bg-white;
  @apply dark:text-white dark:bg-gray-900;
}
.options {
  @apply absolute z-10 w-full py-1 mt-1 overflow-auto rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;
  @apply text-black bg-white;
  @apply dark:text-white dark:bg-gray-900;
}
</style>
