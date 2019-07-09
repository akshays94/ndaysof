<template>
  <div>
    <v-toolbar app flat>
      <v-toolbar-title>N<b>Days</b>Of</v-toolbar-title>
      <v-spacer></v-spacer>
      <button @click="logout()">
        <v-icon>power_settings_new</v-icon>
      </button>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>

      <v-snackbar
        v-model="snackbarStatus"
        :right="true"
        :timeout="snackbarTimeout"
        :top="true"
      >
        {{ snackbarText }}
        <v-btn
          color="pink"
          flat
          @click="snackbarStatus = false"
        >
          Close
        </v-btn>
      </v-snackbar>

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
    snackbarTimeout() {
      return this.$store.getters.snackbarTimeout;
    },
    snackbarText() {
      return this.$store.getters.getSnackbarText;
    },
    snackbarStatus: {
      get() {
        return this.$store.getters.getSnackbarStatus;
      },
      set() {
        this.$store.commit('UNSET_SNACKBAR');
      },
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
