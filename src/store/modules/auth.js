import api from '../../api/imgur';
import qs from 'qs';

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: appState => !!appState.token
};

const actions = {
    logout: ({ commit }) => {
        commit('setToken', null);
    },
    login: () => {
        api.login();

   },
   finalizeLogin: ({ commit }, hash) => {
        const query = qs.parse(hash.replace('#', ''));
        commit('setToken', query.access_token);
        window.localStorage.setItem('imgur_token', query.access_token);
   }
};

const mutations = {
    setToken: (appState, token) => {
        appState.token = token;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
}