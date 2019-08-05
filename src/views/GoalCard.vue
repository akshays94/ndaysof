<template>
  <v-card class="pa-3">
    <div class="box">
      <div class="box--1">
        <router-link
          tag="a"
          class="header"
          :to="{
            name: 'goal',
            params: {
              goalId: goal.id
            }
          }"
        >{{ goalTitle }}</router-link>

        <div class="subheader mt-1">
          <span v-if="goal.days_completed == 0">Not yet started</span>
          <span v-else>
            Completed {{ goal.days_completed }} 
            <span v-if="goal.days_completed > 1">days</span>
            <span v-else>day</span> | {{ goal.completion_percentage }}%
          </span>
        </div>
      </div>
      <div class="box--2">
        <v-progress-circular
          :value="goal.completion_percentage"
          class=""
        ></v-progress-circular>
      </div>
    </div>


    <div class="daycontainer pa-3 mt-2 userselectnone">
      <span v-if="goal.completion_percentage < 100">
        <b>For Day {{ goal.current_day_number }}</b> - {{ goal.current_day_date }}
      </span>
      <span v-else>
        <b>Goal Completed</b> <v-icon small color="green">check</v-icon>
      </span>
      <br>
      <v-btn
        :disabled="goal.completion_percentage >= 100 ? true : false"
        small
        color="green"
        class="ma-0 mr-2 mt-2 white--text"
        @click="checkDay"
      >Check</v-btn>

      <v-btn
        :disabled="goal.completion_percentage >= 100 ? true : false"
        small
        outline
        color="red"
        class="ma-0 mt-2"
        @click="missDay"
      >Miss</v-btn>
    </div>

  </v-card>
</template>

<script>
export default {
  props: [
    'goal',
    'goalIndex'
  ],
  computed: {
    goalTitle () {
      return `#${this.goal.days}DaysOf${this.goal.title}`
    }
  },
  methods: {
    checkDay () {
      this.$store.dispatch('checkDay', {
        goalId: this.goal.id,
        dayNumber: this.goal.current_day_number,
        goalIndex: this.goalIndex,
        goalTitle: this.goal.title
      });
    }, 
    missDay () {
      this.$store.dispatch('missDay', {
        goalId: this.goal.id,
        dayNumber: this.goal.current_day_number,
        goalIndex: this.goalIndex,
        goalTitle: this.goal.title
      });
    }
  }
};
</script>


<style scoped>
.box {
  display: flex;
  justify-content: space-between;
}
.header {
  font-size: 1.2em;
  text-decoration: underline;
}

.header:hover {
  text-decoration: none;
}

.daycontainer {
  background: #efefef;
}
.userselectnone {
  user-select: none;
}
</style>
