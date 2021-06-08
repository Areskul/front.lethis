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
          icon: "euro",
        },
        {
          as: "input",
          name: "charges.food",
          label: "Alimentaire",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "charges.energy",
          label: "Eau/Électrivité/Gaz",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "charges.isp",
          label: "Téléphone/Internet",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "charges.school",
          label: "Frais de scolarité",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "charges.insurance",
          label: "Assurances IARD",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "charges.help",
          label: "Aide à Domicile",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "charges.transports",
          label: "Transports",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "charges.recreation",
          label: "Loisirs",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "charges.holidays",
          label: "Vacances Annuelles",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "charges.consumer",
          label: "Crédit consommation",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "charges.others",
          label: "Autres",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "charges.coownership",
          label: "Charges de copropriétés",
          type: "text",
          icon: "euro",
        },
        {
          as: "input",
          name: "charges.total",
          label: "Total",
          type: "text",
          icon: "euro",
          computed: true,
          modelkey: "total",
        },
        {
          as: "input",
          name: "charges.qp",
          label: "Quote Part",
          type: "text",
          icon: "percent",
        },
        {
          as: "input",
          name: "charges.result",
          label: "Résultat",
          type: "text",
          icon: "euro",
          computed: true,
          modelkey: "result",
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
      let res = 0;
      let values = charges.value;
      const erata = ["id", "total", "qp", "result"];
      for (const [key, value] of Object.entries(values)) {
        if (!erata.includes(key)) {
          res += parseFloat(value as string);
        }
      }
      const str = String(res);
      charges.value.total = str;
      return str;
    });
    const result = computed(() => {
      const res =
        parseFloat(total.value) * (parseFloat(charges.value.qp) / 100);
      const str = String(res);
      charges.value.result = str;
      return str;
    });
    const models = ref({
      total: total,
      result: result,
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
.icon {
  @apply fill-current absolute right-0 p-2;
  @apply text-gray-400;
  @apply dark:text-gray-400;
}
</style>
