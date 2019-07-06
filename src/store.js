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
    goals: [],
  },

  getters: {
    user: state => state.user,
    isAuthenticated: state => state.token !== null,
    goals: state => state.goals,
  },

  mutations: {
    authUser: (state, userData) => {
      state.token = userData.token;
      state.userId = userData.userId;
      state.user = userData.user;
    },
    clearAuthData: (state, userData) => {
      state.token = null;
      state.userId = null;
      state.user = null;
    },
    addGoal: (state, newGoalData) => {
      // state.goals.$set(0, newGoalData);
      state.goals.push(newGoalData);
    },
  },

  actions: {
    register: ({ commit }, authData) => {
      axios
        .post(api.register, authData)
        .then((response) => {
          if (response.status === 201) {
            router.replace({ name: 'login' });
          }
        })
        .catch(() => {
        });
    },

    login: ({ commit }, authData) => {
      axios
        .post(api.login, authData)
        .then((response) => {
          if (response.status === 200) {
            commit('authUser', {
              token: response.data.token,
              userId: response.data.user.id,
              user: response.data.user,
            });
            router.replace({ name: 'goals' });
          }
        })
        .catch(() => {
        });
    },

    logout: ({ commit }) => {
      // TODO: post to deactivate user login log in db
      commit('clearAuthData');
      router.replace({ name: 'login' });
    },

    addGoal: ({ commit, state }, newGoalData) => {
      axios.defaults.headers.common.Authorization = `Bearer ${state.token}`;
      axios
        .post(api.addGoal, {
          title: newGoalData.goalTitle,
          days: newGoalData.goalDays,
        })
        .then((response) => {
          if (response.status === 201) {
            commit('addGoal', {
              days: response.data.goal.days,
              title: response.data.goal.title,
              completionPercentage: 0,
              currentDayNumber: 1,
              currentDate: new Date(),
            });
          }
        })
        .catch(() => {});
    },
  },
});
