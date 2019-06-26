import Vue from 'vue';
import Vuex from 'vuex';

import router from './router';

import axios from './axios-auth';
import api from './api-endpoints';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    userId: null,
    user: null,
  },
  getters: {

  },
  mutations: {
    authUser(state, userData) {
      state.token = userData.token;
      state.userId = userData.userId;
      state.user = userData.user;
    },
  },
  actions: {
    register({ commit }, authData) {
      axios
        .post(api.register, authData)
        .then((response) => {
          if (response.status === 201) {
            router.push({ name: 'login' });
          }
        })
        .catch(() => {
        });
    },

    login({ commit }, authData) {
      axios
        .post(api.login, authData)
        .then((response) => {
          if (response.status === 200) {
            console.log('here', response.data);
            commit('authUser', {
              token: response.data.token,
              userId: response.data.user.id,
              user: response.data.user,
            });
          }
        })
        .catch(() => {
        });
    },
  },
});
