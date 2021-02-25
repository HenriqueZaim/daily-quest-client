import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

window.axios = axios;
axios.defaults.baseURL = 'https://daily-quest.herokuapp.com/api/v1/';

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: (h) => h(App),
}).$mount('#app');
