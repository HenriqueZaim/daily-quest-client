import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    token: '',
    isLoading: false,
  },
  mutations: {
    authenticate(state, payload) {
      state.token = payload.headers.authorization;
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async authenticateUser({ commit }) {
      this.commit('setLoading', true);
      await axios.post('https://daily-quest.herokuapp.com/api/v1/login', {
        email: 'user1@mail.com',
        senha: 'qwer1234',
      }).then((data) => commit('authenticate', data))
        .catch((err) => console.log(err))
        .finally(() => commit('setLoading', false));
    },
  },
  modules: {
  },
});
