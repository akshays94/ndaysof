<template>
  <v-container class="vcontainer">
    <v-layout align-center justify-center row fill-height class="vlayout">
      <v-flex shrink class="vflex">
        <h1 ref="myid" class="text-xs-center">#100DaysOfCode</h1>
        <br>
        <div class="box">
          <v-text-field
            label="Email ID"
            solo
            flat
          ></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            solo
            flat
          ></v-text-field>
          <v-btn block color="secondary" dark>Login</v-btn>
          <br>
          <v-btn block flat small @click="$router.push({ name: 'register' })">
            New User? Sign Up
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';

export default {
  mounted() {
    const typewriter = new Typewriter(this.$refs.myid, {
      loop: true,
    });

    typewriter.typeString('#100DaysOfCode')
      .pauseFor(2500)
      .deleteChars(4)
      .typeString('LeetCode')
      .pauseFor(2500)
      .deleteAll()
      .typeString('#200DaysOfSweat')
      .pauseFor(2500)
      .deleteAll()
      .typeString('#50DaysOfMeditation')
      .pauseFor(2500)
      .deleteChars(10)
      .typeString('Running')
      .pauseFor(2500)
      .deleteAll()
      .start();
  },
};
</script>

<style scoped>
  .box {
    background: #efefef;
    box-shadow: 0 5px 7px 0 lightgray;
    padding: 32px 48px;
  }

  .vcontainer {
    /*border: 1px solid blue;*/
  }

  .vlayout {
    /*border: 1px solid green;*/
  }

  .vflex {
    /*border: 1px dotted black;*/
  }
</style>
