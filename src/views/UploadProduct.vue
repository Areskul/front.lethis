<template>
  <div class="container px-5">
    <div class="columns is-centered">
      <div class="column is-half">
        <card elevation="6" height="10vh">
          {{ message }}
          <b-field class="file is-primary" :class="{ 'has-name': !!file }">
            <b-upload v-model="file" class="file-label">
              <span class="file-cta">
                <b-icon class="file-icon" icon="upload"></b-icon>
                <span class="file-label">Click to upload</span>
              </span>
              <span class="file-name" v-if="file">
                {{ file.name }}
              </span>
            </b-upload>
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
    file: null,
  }),
  components: {
    card,
  },
};
</script>
