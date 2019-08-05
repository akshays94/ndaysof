import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

import router from './router';

import axios from './axios-auth';
import api from './api-endpoints';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null || localStorage.getItem('token'),
    userId: null,
    user: null,
    goals: [],
    snackbarText: '',
    snackbarStatus: false,
    snackbarTimeout: 3000,
  },

  getters: {
    user: state => state.user,
    isAuthenticated: state => state.token !== null,
    goals: state => state.goals,
    getSnackbarStatus: state => state.snackbarStatus,
    getSnackbarText: state => state.snackbarText,
    getSnackbarTimeout: state => state.snackbarTimeout,
  },

  mutations: {
    SET_SNACKBAR_TEXT: (state, snackbarText) => {
      state.snackbarText = snackbarText;
    },
    SET_SNACKBAR: (state) => {
      state.snackbarStatus = true;
    },
    UNSET_SNACKBAR: (state) => {
      state.snackbarStatus = false;
    },
    SET_USER_AUTHENTICATION: (state, userData) => {
      state.token = userData.token;
      state.userId = userData.userId;
      state.user = userData.user;
      localStorage.setItem('token', userData.token);
    },
    REMOVE_USER_AUTHENTICATION: (state) => {
      state.token = null;
      state.userId = null;
      state.user = null;
      localStorage.removeItem('token');
    },
    REMOVE_GOALS: (state) => {
      state.goals = [];
    },
    SET_GOAL: (state, newGoalData) => {
      state.goals.push(newGoalData);
      // state.goals.unshift(newGoalData);
      // state.goals.splice(0, 0, newGoalData);
      // state.goals.$set(0, newGoalData);
      // Vue.set(state.goals, 0, newGoalData);
    },
    UPDATE_GOAL: (state, newGoalData) => {
      Vue.set(state.goals, newGoalData.goalIndex, newGoalData.newData);
    },
    GET_GOALS: (state, fetchedGoals) => state.goals.push(...fetchedGoals),
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
            commit('SET_USER_AUTHENTICATION', {
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
      commit('REMOVE_USER_AUTHENTICATION');
      commit('REMOVE_GOALS');
      router.replace({ name: 'login' });
    },

    fetchGoals: ({ commit, state }) => {
      if (state.goals.length === 0) {
        axios.defaults.headers.common.Authorization = `Bearer ${state.token}`;
        axios
          .get(api.goals)
          .then((response) => {
            if (response.status === 200) {
              commit('GET_GOALS', response.data);
            }
          })
          .catch(() => {});
      }
    },

    addGoal: ({ commit, state }, newGoalData) => {
      axios.defaults.headers.common.Authorization = `Bearer ${state.token}`;
      axios
        .post(api.goals, {
          title: newGoalData.goalTitle,
          days: newGoalData.goalDays,
          startDate: newGoalData.startDate,
        })
        .then((response) => {
          if (response.status === 201) {
            commit('SET_GOAL', response.data);
            commit('SET_SNACKBAR_TEXT', 'New goal created');
            commit('SET_SNACKBAR');
          }
        })
        .catch(() => {});
    },

    checkDay: ({ commit, state }, newCheckData) => {
      axios.defaults.headers.common.Authorization = `Bearer ${state.token}`;
      let url = api.checkDay;
      url = url.replace(':goalId', newCheckData.goalId);
      axios
        .post(url, {
          dayNumber: newCheckData.dayNumber,
        })
        .then((response) => {
          if (response.status === 201) {
            commit('UPDATE_GOAL', {
              goalIndex: newCheckData.goalIndex,
              newData: response.data,
            });
            commit('SET_SNACKBAR_TEXT', `Checked ${newCheckData.goalTitle} - Day ${newCheckData.dayNumber}`);
            commit('SET_SNACKBAR');
          }
        })
        .catch(() => {});
    },

    missDay: ({ commit, state }, newCheckData) => {
      axios.defaults.headers.common.Authorization = `Bearer ${state.token}`;
      let url = api.missDay;
      url = url.replace(':goalId', newCheckData.goalId);
      axios
        .post(url, {
          dayNumber: newCheckData.dayNumber,
        })
        .then((response) => {
          if (response.status === 201) {
            commit('UPDATE_GOAL', {
              goalIndex: newCheckData.goalIndex,
              newData: response.data,
            });
            commit('SET_SNACKBAR_TEXT', `Missed ${newCheckData.goalTitle} - Day ${newCheckData.dayNumber}`);
            commit('SET_SNACKBAR');
          }
        })
        .catch(() => {});
    },

  },
});
