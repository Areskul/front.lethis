<template lang="pug">
.container
  form#form
    .flex.flex-wrap.justify-center
      .flex(v-for="{ name, as, label, enumValues, ...attrs } in schema.fields")
        .input-container
          label(:for="name") {{ label }}
          svg.icon(viewBox="0 0 25 25")
            path(:d="icons[attrs.icon]")
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
import { defineComponent, ref, computed } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { mdiCurrencyEur, mdiPercent } from "@mdi/js";
import Dialog from "@/components/containers/dialog.vue";
import { mdiPlusCircle } from "@mdi/js";
import { GET_ENUM } from "@/services/fields";
import { useQuery } from "villus";
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { clientUtils } from "@/composables/client";
import { FormSchema } from "@/common/types";
export default defineComponent({
  name: "RealEstate",
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
    icons: {
      euro: mdiCurrencyEur,
      percent: mdiPercent,
    },
  }),
  setup() {
    const { saveOnLeave, client } = clientUtils();
    const realestate = computed(() => {
      if (client.value.realestate) {
        return client.value.realestate;
      } else {
        return {
          fiscality: null,
          owner: null,
          name: null,
          value: "0",
          monthly: "0",
          qp: "0",
          result: "0",
          taxe: "0",
          taxeResult: "0",
          rest: "0",
          rate: "0",
          date: null,
        };
      }
    });
    const job = computed(() => {
      if (realestate.value.job) {
        return realestate.value.job;
      } else {
        return { name: null };
      }
    });
    const { data: dataFisc } = useQuery({
      query: GET_ENUM,
      variables: { name: "Fiscality" },
    });
    const { data: dataOwner } = useQuery({
      query: GET_ENUM,
      variables: { name: "Owner" },
    });
    const data = ref({
      fiscality: dataFisc,
      owner: dataOwner,
    });
    const models = ref({
      family: realestate.value.family,
    });
    //Vee-validate
    const schema: FormSchema = {
      fields: [
        {
          as: "select",
          name: "realestate.fiscality",
          modelkey: "fiscality",
          label: "Fiscalite",
        },
        {
          as: "select",
          name: "realestate.owner",
          modelkey: "owner",
          label: "Proprietaire",
        },
        {
          as: "input",
          type: "text",
          name: "realestate.name",
          label: "Nom",
        },
        {
          as: "input",
          type: "text",
          name: "realestate.value",
          label: "Valeur bien immobilier",
          icon: "euro",
        },
        {
          as: "input",
          type: "text",
          name: "realestate.monthly",
          label: "Mensualite pret immobilier",
          icon: "euro",
        },
        {
          as: "input",
          name: "realestate.qp",
          label: "Quote Part",
          type: "text",
          icon: "percent",
        },
        {
          as: "input",
          name: "realestate.result",
          label: "Résultat",
          type: "text",
          icon: "euro",
          computed: true,
          modelkey: "result",
        },
        {
          as: "input",
          name: "realestate.taxe",
          label: "Taxes foncieres",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "realestate.result",
          label: "Resultat taxe fonciere",
          type: "text",
          icon: "euro",
          computed: true,
          modelkey: "taxeResult",
        },
        {
          as: "input",
          name: "realestate.rest",
          label: "Capital restant pret immobilier",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "realestate.rate",
          label: "Taux pret immobilier",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "realestate.date",
          label: "Date de fin de pret",
          type: "date",
        },
      ],
      validation: yup.object({
        realestate: yup.object({
          fiscality: yup.string(),
          owner: yup.string(),
          name: yup.string(),
          value: yup.number(),
          monthly: yup.number(),
          qp: yup.number(),
          result: yup.number(),
          taxe: yup.number(),
          taxeResult: yup.number(),
          rest: yup.number(),
          rate: yup.number(),
          date: yup.date(),
        }),
      }),
    };
    saveOnLeave(schema);
    return {
      data,
      models,
      client,
      realestate,
      job,
      schema,
    };
  },
});
</script>
<style lang="postcss" scoped>
.icon {
  @apply fill-current absolute right-0 p-2;
  @apply text-gray-400;
  @apply dark:text-gray-400;
}
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
