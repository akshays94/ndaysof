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
            v-model="email"
          ></v-text-field>

          <v-text-field
            label="Password"
            type="password"
            solo
            flat
            v-model="password"
          ></v-text-field>

          <v-btn
            block
            color="secondary"
            dark
            @click="login()"
          >Login</v-btn>
          <br>

          <v-btn
            block
            flat
            small
            @click="$router.push({ name: 'register' })"
          >Create a new account
          </v-btn>

          <v-btn
            block
            flat
            small
          >Forgot your password
          </v-btn>

        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  mounted() {
    const typewriter = new Typewriter(this.$refs.myid, {
      loop: true,
    });

    typewriter
      .typeString('#100DaysOfCode')
      .pauseFor(3500)

      .deleteChars(4)
      .typeString('Gym')
      .pauseFor(3500)

      .deleteAll()
      .typeString('#200DaysOfRun')
      .pauseFor(3500)

      .deleteAll()
      .typeString('#50DaysOfMeditation')
      .pauseFor(3500)

      .deleteChars(10)
      .typeString('Swim')
      .pauseFor(3500)

      .deleteAll()
      .start();
  },
  methods: {
    login() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('login', formData);
    },
  },
};
</script>

<style scoped>
  .box {
    background: #efefef;
    box-shadow: 0 5px 7px 0 lightgray;
    padding: 32px 48px;
  }
</style>
