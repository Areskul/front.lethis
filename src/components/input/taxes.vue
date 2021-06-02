<template lang="pug">
.container
  form#form
    .flex.flex-wrap.justify-center
      .flex(v-for="{ name, as, label, ...attrs } in schema.fields")
        .input-container
          label(:for="name") {{ label }}
          Field(:as="as", :id="name", :name="name", v-bind="attrs")
        ErrorMessage(:name="name")
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { clientUtils } from "@/composables/client";
import { FormSchema } from "@/common/types";
export default defineComponent({
  name: "Informations",
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    uid: {
      type: String,
      required: false,
    },
  },
  setup() {
    const { saveOnLeave, client } = clientUtils();
    const taxes = computed(() => {
      if (client.value.taxes) {
        return client.value.taxes;
      } else {
        return {
          income: "0",
          wage: "0",
          housing: "0",
        };
      }
    });
    const schema: FormSchema = {
      fields: [
        {
          as: "input",
          name: "taxes.income",
          label: "Impot sur le revenu annuel",
          type: "text",
          modelkey: "benefits",
        },
        {
          as: "input",
          name: "taxes.wage",
          label: "Revenus salariés",
          type: "text",
          modelkey: "wage",
        },
        {
          as: "input",
          name: "taxes.housing",
          label: "Taxe d'habitation",
          type: "text",
        },
      ],
      validation: yup.object({
        taxes: yup.object({
          income: yup.number(),
          wage: yup.number(),
          housing: yup.number(),
        }),
      }),
    };
    saveOnLeave(schema);
    return {
      client,
      taxes,
      schema,
    };
  },
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
