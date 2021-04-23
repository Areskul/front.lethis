<template lang="pug">
.container
  .flex.justify-center.items-center.py-6
    h1 Informations personnelles du client
  form(@submit.prevent)
    .flex.flex-wrap.justify-center
      .flex.p-4(v-for="(x, i) in labels")
        .myinput(v-if="dropdown[i].bool")
          label(for="x") {{ x }}
          dropdown#x(
            v-model="model[i].$model",
            :query="dropdown[i].query",
            :queryName="dropdown[i].name"
          )
        .myinput(v-else)
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
import dropdown from "@/components/containers/dropdown.vue";
import { useStore } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useMutation } from "villus";
import { UPDATE_CLIENT } from "@/services/clients";
import { GET_GENDERS } from "@/services/fields";
import { local } from "@/composables/storage";
export default defineComponent({
  name: "basicInformations",
  components: {
    dropdown,
  },
  props: {
    uid: {
      type: String,
      required: false,
    },
  },
  setup() {
    //Store
    const store = useStore();
    const cli = computed(() => store.state.client.currentClient);
    const dispatchClient = (data) => {
      store.dispatch("client/setCurrentClient", data);
    };
    //LocalStorage
    const { filter } = local();
    const initialState = {
      gender: null,
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
    const dropdown = {
      gender: {
        bool: true,
        query: GET_GENDERS,
        name: "genders",
      },
      lastname: {
        bool: false,
      },
      firstname: {
        bool: false,
      },
    };
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
      dropdown,
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
