<template lang="pug">
.container
  form#form
    .flex.flex-wrap.justify-center
      .flex(v-for="{ name, as, label, ...attrs } in schema.fields")
        .input-container
          label(:for="name") {{ label }}
          svg.icon(viewBox="0 0 25 25")
            path(:d="icons[attrs.icon]")
          Field(
            v-if="attrs.modelkey",
            :as="as",
            :id="name",
            :name="name",
            v-bind="attrs",
            :readonly="attrs.computed",
            v-model="models[attrs.modelkey]"
          )
          Field(v-else, :as="as", :id="name", :name="name", v-bind="attrs")
        ErrorMessage(:name="name")
</template>
<script lang="ts">
import { mdiCurrencyEur, mdiPercent } from "@mdi/js";
import { defineComponent, computed, ref } from "vue";
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
  data: () => ({
    icons: {
      euro: mdiCurrencyEur,
      percent: mdiPercent,
    },
  }),
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
          others: "0",
          joint: "0",
          qp: "0",
          total: "0",
          result: "0",
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
          icon: "euro",
        },
        {
          as: "input",
          name: "incomes.wage",
          label: "Revenus salariés",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "incomes.landed",
          label: "Revenus fonciers",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "incomes.others",
          label: "Autres revenus",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "incomes.joint",
          label: "Revenus du conjoint",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "incomes.total",
          label: "Total",
          type: "text",
          icon: "euro",
          computed: true,
          modelkey: "total",
        },
        {
          as: "input",
          name: "incomes.qp",
          label: "Quote Part",
          type: "text",
          icon: "percent",
        },
        {
          as: "input",
          name: "incomes.result",
          label: "Resultat",
          type: "text",
          icon: "euro",
          computed: true,
          modelkey: "result",
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
    const total = computed(() => {
      const res =
        parseFloat(incomes.value.benefits) + parseFloat(incomes.value.wage);
      const str = new String(res);
      incomes.value.total = str;
      return res;
    });
    const result = computed(() => {
      const res = (total.value * parseFloat(incomes.value.qp)) / 100;
      const str = new String(res);
      incomes.value.result = str;
      return res;
    });
    const models = ref({
      total: total,
      result: result,
    });
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
.icon {
  @apply fill-current absolute right-0 p-2;
  @apply text-gray-400;
  @apply dark:text-gray-400;
}
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
