<template lang="pug">
.container
  .flex.justify-center.items-center.py-6
    h1 Informations personnelles du client
  form#form
    .flex.flex-wrap.justify-center
      .flex(v-for="{ name, as, label, ...attrs } in schema.fields")
        .input-container
          label(:for="name") {{ label }}
          Field(
            :as="as",
            :id="name",
            :name="name",
            v-bind="attrs",
            :readonly="attrs.computed",
            v-model="models[attrs.modelkey]"
          )
        ErrorMessage(:name="name")
</template>
<script lang="ts">
import { defineComponent, computed, watch, ref } from "vue";
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
          benefits: null,
          wage: null,
          landed: null,
          others: null,
          joint: null,
          total: null,
        };
      }
    });
    let total = null;
    const models = ref({
      total: total,
    });
    watch(incomes, () => {
      incomes.value.total = incomes.value.benefits + incomes.value.wages;
    });
    //Vee-validate
    const schema: FormSchema = {
      fields: [
        {
          as: "input",
          name: "incomes.benefits",
          label: "Bénéfices professionnels",
          type: "text",
        },
        {
          as: "input",
          name: "incomes.wage",
          label: "Revenus salariés",
          type: "text",
        },
        {
          as: "input",
          name: "incomes.landed",
          label: "Revenus fonciers",
          type: "text",
        },
        {
          as: "input",
          name: "incomes.others",
          label: "Autres revenus",
          type: "text",
        },
        {
          as: "input",
          name: "incomes.joint",
          label: "Revenus du conjoint",
          type: "text",
        },
        {
          as: "input",
          name: "incomes.total",
          label: "Total",
          type: "text",
          computed: true,
          modelkey: "total",
        },
        {
          as: "input",
          name: "incomes.qp",
          label: "Quote Part",
          type: "text",
        },
        {
          as: "input",
          name: "incomes.result",
          label: "Resultat",
          type: "text",
        },
      ],
      validation: yup.object({
        incomes: yup.object({
          benefits: yup.number(),
          wage: yup.number(),
          landed: yup.number(),
          others: yup.number(),
          joint: yup.number(),
          total: yup.number(),
          qp: yup.number(),
          result: yup.number(),
        }),
      }),
    };
    saveOnLeave(schema);
    return {
      client,
      incomes,
      schema,
      models,
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
