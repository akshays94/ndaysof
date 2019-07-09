import Vue from 'vue';
import Router from 'vue-router';

import store from './store';


import Home from './views/Home.vue';
import Goal from './views/Goal.vue';
import Goals from './views/Goals.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/',
      component: Home,
      beforeEnter(to, from, next) {
        if (store.state.token) {
          next();
        } else {
          next('/login');
        }
      },
      children: [
        {
          path: '/',
          name: 'goals',
          component: Goals,
        },
        {
          path: '/goals/:goalId',
          name: 'goal',
          component: Goal,
        },
      ],
    },
  ],
});
