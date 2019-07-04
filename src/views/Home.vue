<template>
  <div>
    <v-toolbar app flat>
      <v-toolbar-title>N<b>Days</b>Of</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app class="pa-3">
      <v-spacer></v-spacer>
      <div>Built By Akshay Suresh</div>
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
