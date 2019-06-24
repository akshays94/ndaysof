<template>
  <v-container class="vcontainer">
    <v-layout align-center justify-center row fill-height class="vlayout">
      <v-flex shrink class="vflex">
        <div class="box">
          <v-text-field
            label="Name"
            solo
            flat
          ></v-text-field>
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
          <v-text-field
            label="Confirm Password"
            type="password"
            solo
            flat
          ></v-text-field>
          <v-btn block color="secondary" dark>Create Account</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
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
