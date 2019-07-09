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
          {{ goal.completion_percentage }}% Complete
        </div>
      </div>
      <div class="box--2">
        <v-progress-circular
          :value="goal.completion_percentage"
          class=""
        ></v-progress-circular>
      </div>
    </div>


    <div class="daycontainer pa-3 mt-2">
      <b>Day {{ goal.current_day_number }}</b> - {{ goal.start_date }}
      <br>
      <v-btn
        small
        color="green"
        class="ma-0 mr-2 mt-2 white--text"
      >Check</v-btn>

      <v-btn
        small
        outline
        color="red"
        class="ma-0 mt-2"
      >Miss</v-btn>
    </div>

  </v-card>
</template>

<script>
export default {
  props: [
    'goal',
  ],
  data() {
    return {
      goalTitle: `#${this.goal.days}DaysOf${this.goal.title}`,
    };
  },
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
</style>
