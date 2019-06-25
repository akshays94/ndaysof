import Vue from 'vue';
import Vuex from 'vuex';

import router from './router'

import axios from './axios-auth';
import api from './api-endpoints';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    userId: null,
  },
  getters: {

  },
  mutations: {

  },
  actions: {
    register({ commit }, authData) {
      axios
        .post(api.register, authData)
        .then(() => {
          router.push({ name: 'login' });
        })
        .catch(() => {
        });
    },

    login({ commit }, authData) {
      axios
        .post(api.login, authData)
        .then((reponse) => {
          // console.log(reponse);
        })
        .catch(() => {
        });
    },
  },
});
