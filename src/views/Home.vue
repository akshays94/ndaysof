<template>
  <v-container>
    <h3>Welcome to N Days Of => {{ user }}</h3>
    <input type="button" value="Logout" @click="logout()">
  </v-container>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
