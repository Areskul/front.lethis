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
</template>
<script lang="ts">
import {
  defineComponent,
  computed,
  /*watch, */
  ref,
} from "vue";
import { useStore } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useMutation } from "villus";
import { CREATE_CLIENT } from "@/services/clients";
import { UPDATE_CLIENT } from "@/services/clients";
/*import { local } from "@/composables/storage";*/
export default defineComponent({
  name: "basicInformations",
  setup() {
    //Store
    const store = useStore();
    const cli = computed(() => store.state.client.currentClient);
    const dispatchClient = (data) => {
      store.dispatch("client/setCurrentClient", data);
    };
    //LocalStorage
    /*const { set, get } = local();*/
    /*const savedState = get("basic_informations");*/
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
      if (Object.entries(cli.value).length == 0) {
        return cli.value;
        /*} else if (savedState) {*/
        /*return savedState;*/
      } else if (initialState) {
        return initialState;
      }
    };
    const state = ref(useState());
    /*watch(state.value, () => {*/
    /*set("basic_informations", state.value);*/
    /*});*/
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
    const mutation = cli.value.id ? UPDATE_CLIENT : CREATE_CLIENT;
    const variables = state.value;
    const { execute } = useMutation(mutation);
    return {
      dispatchClient,
      cli,
      model,
      labels,
      variables,
      execute,
    };
  },
  //Router
  beforeRouteLeave() {
    this.handleSubmit();
  },
  methods: {
    handleSubmit: function () {
      this.execute(this.variables).then((result) => {
        if (result.data.createClient) {
          this.dispatchClient(result.data.createClient);
        } else if (result.data.updateClient) {
          this.dispatchClient(result.data.updateClient);
        } else {
          this.dispatchClient({});
        }
      });
    },
  },
});
</script>
