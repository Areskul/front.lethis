<template lang="pug">
.container.z-10
  button.z-10(@click="handleSubmit") Mot de passe oublié ?
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMutation } from "villus";
import { FORGOT_PASSWD } from "@/services/users";
export default defineComponent({
  name: "ForgotPasswd",
  data: () => ({
    success: false,
  }),
  props: {
    variables: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    //Villus
    const { execute } = useMutation(FORGOT_PASSWD);

    return {
      execute,
    };
  },
  methods: {
    handleSubmit: function () {
      this.execute(this.variables).then((result) => {
        this.success = result.data.getResetPasswordToken;
      });
    },
  },
});
</script>
