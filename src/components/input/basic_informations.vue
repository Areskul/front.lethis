<template lang="pug">
.container
  .flex.justify-center.items-center.py-6
    h1 Informations personnelles du client
  form(@submit.prevent)
    .flex.flex-wrap.justify-center
      .flex.p-4(v-for="(x, i) in labels")
        .myinput
          label(for="x") {{ x }}
          input#x(type="text", v-model="model[i].$model")
  .flex.justify-center.items-center.py-6
    .myinput
      button.btn(@click="handleSubmit") {{ cli.id ? 'Enregistrer' : 'Créer' }}
</template>
<script lang="ts">
import { defineComponent, watch, ref } from "vue";
import { useStore } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useMutation } from "villus";
import { CREATE_CLIENT } from "@/services/clients";
import { local } from "@/composables/storage";
export default defineComponent({
  name: "basicInformations",
  setup() {
    //Store
    const store = useStore();
    const cli = store.state.client.currentClient;
    //LocalStorage
    const { set, get } = local();
    const savedState = get("basic_informations");
    const initialState = {
      civilite: "",
      lastname: "",
      firstname: "",
    };
    const labels = {
      civilite: "civilité",
      lastname: "nom",
      firstname: "prénom",
    };
    const useState = () => {
      if (cli) {
        return cli;
      } else if (savedState) {
        return savedState;
      } else if (initialState) {
        return initialState;
      }
    };
    const state = ref(useState());
    watch(state.value, () => {
      set("basic_informations", state.value);
    });
    //Vueliate
    const rules = {
      civilite: {},
      lastname: {
        required,
      },
      firstname: {
        required,
      },
    };
    const model = useVuelidate(rules, state);
    //Villus
    const variables = state.value;
    const { data, execute } = useMutation(CREATE_CLIENT);
    return {
      cli,
      model,
      labels,
      variables,
      execute,
      data,
    };
  },
  methods: {
    handleSubmit: function () {
      this.execute(this.variables).then((result) => {
        console.log(result);
      });
    },
  },
});
</script>
