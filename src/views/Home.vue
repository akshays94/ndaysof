<template>
  <div>
    <v-toolbar app flat>
      <v-toolbar-title>N<b>Days</b>Of</v-toolbar-title>
      <v-spacer></v-spacer>
      <input type="button" value="Logout" @click="logout()">
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app class="pa-3">
      <v-spacer></v-spacer>
      <div>
        Made with <v-icon small color="red">favorite</v-icon>
      </div>
    </v-footer>
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
