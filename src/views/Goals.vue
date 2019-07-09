<template>
  <v-container grid-list-md class="">

    <v-layout justify-center>
      <v-flex xs12 sm8 md5>
        <AppAddGoal></AppAddGoal>
      </v-flex>
    </v-layout>

    <v-layout
      v-if="goals.length > 0"
      row
      wrap
      justify-center>

        <v-flex
          v-for="(goal, index) in goals"
          :key="`${index}`" xs12 sm6 md4 lg4
          class=" pa-3">
          <AppGoalCard :goal="goal"></AppGoalCard>
        </v-flex>

    </v-layout>

    <v-layout
      v-else
      row
      wrap
      justify-center>
      <div
        class="nothing-found">
        <v-icon
          large
          color="lightgray"
        >stars</v-icon>
        <div class="nothing-found--title mt-2">
          Goals you add appear here
        </div>
      </div>

    </v-layout>

  </v-container>
</template>

<script>
import AppAddGoal from '@/views/AddGoal.vue';
import AppGoalCard from '@/views/GoalCard.vue';

export default {
  components: {
    AppAddGoal,
    AppGoalCard,
  },
  created() {
    this.fetchGoals();
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    goals() {
      return this.$store.getters.goals;
    },
  },
  methods: {
    fetchGoals() {
      this.$store.dispatch('fetchGoals');
    },
  },
};
</script>

<style scoped>
.daysof {
  margin-top: 12px;
  font-size: 1.2em;
}
.nothing-found {
  user-select: none;
  color: gray;
  display: flex;
  flex-direction: column;
  padding: 42px;
}
.nothing-found--title {
  font-size: 1.3em;
}
</style>
