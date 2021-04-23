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
import { UPDATE_CLIENT } from "@/services/clients";
import { local } from "@/composables/storage";
export default defineComponent({
  name: "basicInformations",
  props: {
    uid: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    //Store
    const store = useStore();
    const cli = computed(() => store.state.client.currentClient);
    const dispatchClient = (data) => {
      store.dispatch("client/setCurrentClient", data);
    };
    //LocalStorage
    const { filter } = local();
    const initialState = {
      gender: "",
      lastname: null,
      firstname: null,
    };
    const labels = {
      gender: "civilité",
      lastname: "nom",
      firstname: "prénom",
    };
    const useState = () => {
      if (Object.entries(cli.value).length != 0) {
        return cli.value;
      } else if (initialState) {
        return initialState;
      }
    };
    const state = ref(useState());
    //Vueliate
    const rules = {
      gender: {},
      lastname: {
        required,
      },
      firstname: {
        required,
      },
    };
    const model = useVuelidate(rules, state);
    //Villus
    const variables = filter(state.value);
    const { execute } = useMutation(UPDATE_CLIENT);
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
  beforeRouteLeave(to, from) {
    if (!this.uid) {
      this.dispatchClient({});
    } else if (!to.params.uid) {
      this.dispatchClient({});
    } else {
      this.handleSubmit();
    }
  },
  methods: {
    handleSubmit: function () {
      let id = "";
      this.execute(this.variables).then((res) => {
        if (res.data.updateClient) {
          this.dispatchClient(res.data.updateClient);
          id = res.data.updateClient.id;
        } else {
          console.log(res.error);
          /*this.dispatchClient({});*/
        }
      });
      return id;
    },
  },
});
</script>
