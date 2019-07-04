<template>
  <div>
    <h1>Goals</h1>
    <h3>Welcome x to N Days Of => {{ user }}</h3>
    <input type="button" value="Logout" @click="logout()">
  </div>
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
