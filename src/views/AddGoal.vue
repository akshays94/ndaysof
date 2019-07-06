<template>
  <v-card class="mb-5 pa-3">

    <v-layout justify-center style="">

      <v-flex xs4>
        <input
          type="text"
          placeholder="Days"
          v-model="goalDays"
          class="addgoalinput">
      </v-flex>

      <v-flex align-self-center xs4 md4 class="text-xs-center">
        <div class="daysof">
          Days Of
        </div>
      </v-flex>

      <v-flex xs4>
        <input
          type="text"
          placeholder="Goal"
          v-model="goalTitle"
          class="addgoalinput">
      </v-flex>

    </v-layout>

    <p class="mt-2">Starting from <a href="">today</a></p>

    <v-btn
      color="secondary"
      class="ma-0 mt-2"
      @click="addGoal()"
    >Create</v-btn>

  </v-card>

</template>

<script>
export default {
  data() {
    return {
      goalDays: '',
      goalTitle: '',
    };
  },
  methods: {
    addGoal() {
      this.$store.dispatch('addGoal', {
        goalDays: parseInt(this.goalDays, 10),
        goalTitle: this.goalTitle,
      });
    },
  },
};
</script>


<style scoped>
.addgoalinput {
  width: 100%;
  padding: 8px;
  background: #efefef;
}
</style>
