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
    const incomes = computed(() => {
      if (client.value.incomes) {
        return client.value.incomes;
      } else {
        return {
          benefits: "0",
          wage: "0",
          landed: "0",
        };
      }
    });
    const schema: FormSchema = {
      fields: [
        {
          as: "input",
          name: "incomes.benefits",
          label: "Bénéfices professionnels",
          type: "text",
          modelkey: "benefits",
        },
        {
          as: "input",
          name: "incomes.wage",
          label: "Revenus salariés",
          type: "text",
          modelkey: "wage",
        },
        {
          as: "input",
          name: "incomes.landed",
          label: "Revenus fonciers",
          type: "text",
        },
      ],
      validation: yup.object({
        incomes: yup.object({
          benefits: yup.number(),
          wage: yup.number(),
          landed: yup.number(),
        }),
      }),
    };
    saveOnLeave(schema);
    return {
      client,
      incomes,
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
