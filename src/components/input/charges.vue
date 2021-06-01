<template lang="pug">
.container
  form#form
    .flex.flex-wrap.justify-center
      .flex(v-for="{ name, as, label, ...attrs } in schema.fields")
        .input-container
          label(:for="name") {{ label }}
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
  setup() {
    const { saveOnLeave, client } = clientUtils();
    const charges = computed(() => {
      if (client.value.charges) {
        return client.value.charges;
      } else {
        return {
          rent: "0",
          food: "0",
          energy: "0",
          isp: "0",
          school: "0",
          insurance: "0",
          help: "0",
          transports: "0",
          recreation: "0",
          holidays: "0",
          consumer: "0",
          others: "0",
          coownership: "0",
          total: "0",
          qp: "0",
          result: "0",
        };
      }
    });
    //Vee-validate
    const schema: FormSchema = {
      fields: [
        {
          as: "input",
          name: "charges.rent",
          label: "Loyer",
          type: "text",
        },
        {
          as: "input",
          name: "charges.food",
          label: "Alimentaire",
          type: "text",
        },
        {
          as: "input",
          name: "charges.energy",
          label: "Eau/Électrivité/Gaz",
          type: "text",
        },
        {
          as: "input",
          name: "charges.isp",
          label: "Téléphone/Internet",
          type: "text",
        },
        {
          as: "input",
          name: "charges.school",
          label: "Frais de scolarité",
          type: "text",
        },
        {
          as: "input",
          name: "charges.insurance",
          label: "Assurances IARD",
          type: "text",
          computed: true,
          modelkey: "total",
        },
        {
          as: "input",
          name: "charges.help",
          label: "Aide à Domicile",
          type: "text",
        },
        {
          as: "input",
          name: "charges.transports",
          label: "Transports",
          type: "text",
        },
        {
          as: "input",
          name: "charges.recreation",
          label: "Loisirs",
          type: "text",
        },
        {
          as: "input",
          name: "charges.holidays",
          label: "Vacances Annuelles",
          type: "text",
        },
        {
          as: "input",
          name: "charges.consumer",
          label: "Crédit consommation",
          type: "text",
        },
        {
          as: "input",
          name: "charges.others",
          label: "Autres",
          type: "text",
        },
        {
          as: "input",
          name: "charges.coownership",
          label: "Charges de copropriétés",
          type: "text",
        },
        {
          as: "input",
          name: "charges.total",
          label: "Total",
          type: "text",
          computed: true,
          modelkey: "total",
        },
        {
          as: "input",
          name: "charges.qp",
          label: "Quote Part",
          type: "text",
          computed: true,
          modelkey: "total",
        },
        {
          as: "input",
          name: "charges.result",
          label: "Résultat",
          type: "text",
          computed: true,
          modelkey: "total",
        },
      ],
      validation: yup.object({
        charges: yup.object({
          rent: yup.number(),
          food: yup.number(),
          energy: yup.number(),
          isp: yup.number(),
          school: yup.number(),
          insurance: yup.number(),
          help: yup.number(),
          transports: yup.number(),
          recreation: yup.number(),
          holidays: yup.number(),
          consumer: yup.number(),
          others: yup.number(),
          coownership: yup.number(),
          total: yup.number(),
          qp: yup.number(),
          result: yup.number(),
        }),
      }),
    };
    const total = computed(() => {
      const res = new String(
        parseFloat(charges.value.benefits) + parseFloat(charges.value.wage)
      );
      charges.value.total = res;
      return res;
    });
    const models = ref({
      total: total,
    });
    saveOnLeave(schema);
    return {
      client,
      charges,
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
