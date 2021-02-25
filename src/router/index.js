import Vue from 'vue';
import VueRouter from 'vue-router';
import Sign from '@/views/Sign.vue';
import Home from '../views/Home.vue';
import Apresentation from '../components/Apresentation.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: '/',
      name: 'apresentation',
      component: Apresentation,
    }],
  },
  {
    path: '/sign',
    name: 'sign',
    component: Sign,
    meta: {
      isRegistered: false,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
