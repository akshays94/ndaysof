<template>
  <v-container class="vcontainer">
    <v-layout align-center justify-center row fill-height class="vlayout">
      <v-flex shrink class="vflex">
        <div class="box">

          <v-text-field
            label="Firstname"
            solo
            flat
            v-model="firstname"
          ></v-text-field>

          <v-text-field
            label="Lastname"
            solo
            flat
            v-model="lastname"
          ></v-text-field>

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

          <v-text-field
            label="Confirm Password"
            type="password"
            solo
            flat
            v-model="confirmpassword"
          ></v-text-field>

          <v-btn
            block
            color="secondary"
            dark
            @click="createAccount()"
          >Create Account</v-btn>

        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpassword: '',
    };
  },
  methods: {
    createAccount() {
      const formData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('register', formData);
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
