<template>
  <v-container grid-list-md class="">

    <v-layout justify-center>
      <v-flex xs12 sm12 md9>
        <v-card class="mb-5 pa-3">
          back -<h1>{{ goalTitle }}</h1>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import axios from '@/axios-auth';
import api from '@/api-endpoints';

export default {
  data() {
    return {
      goal: null,
      goalTitle: ''
    };
  },
  created() {
    this.fetchGoal();
  },
  computed: {
    token() {
      return this.$store.state.token;
    },
  },
  methods: {
    fetchGoal() {
      axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      axios
        .get(`/goals/${this.$route.params.goalId}`)
        .then((response) => {
          if (response.status === 200) {
            this.goal = response.data;
            this.goalTitle = `#${this.goal.days}DaysOf${this.goal.title}`;
          }
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
</style>
