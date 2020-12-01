import api from '../../api/imgur';

const state = {
    token: null
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
   finalizeLogin: () => {

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