import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import './plugins/vuetify';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Vuetify, {
  iconfont: 'mdi',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
