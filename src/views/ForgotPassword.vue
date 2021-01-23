<template lang="pug">
.container
  button Forgot pasword ?
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useQuery } from "villus";
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
    const { execute } = useQuery({
      query: FORGOT_PASSWD,
      variables: props.variables,
    });

    return {
      execute,
    };
  },
  methods: {
    handleSubmit: function () {
      this.execute().then((result) => {
        this.success = result.data.getResetPasswordToken;
      });
      this.$router.push("/home");
    },
  },
});
</script>
