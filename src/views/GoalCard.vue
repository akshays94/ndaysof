<template>
  <v-card class="pa-3">
    <div class="header">
      {{ goalTitle }}
    </div>

    <div class="subheader mt-1">
      {{ goal.completionPercentage }}% Complete
    </div>

    <div class="daycontainer pa-3 mt-2">
      Day {{ goal.currentDayNumber }} -> {{ goal.currentDate }}
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
.header {
  font-size: 1.2em;
}

.daycontainer {
  background: #efefef;
}
</style>
