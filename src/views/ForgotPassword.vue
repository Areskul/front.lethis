<template>
  <div class="container px-5">
    <div class="columns is-centered">
      <div class="column is-half">
        <card elevation="6" height="10vh">
          {{ message }}
          <b-field
            label="Email"
            type="is-error"
            message="This email is invalid"
          >
            <b-input type="email" value="john@" maxlength="30"> </b-input>
          </b-field>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import card from "../components/containers/card";
export default {
  data: () => ({
    message: "Nous vous envoyons un lien pour changer votre mot de passe",
  }),
  components: {
    card,
  },
};
</script>
