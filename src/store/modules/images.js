import api from '../../api/imgur';
import { router } from '../../main';

const state = {
    images: []
};

const getters = {
    allImages: appState => appState.images
};

const actions = {
    async fetchImages({ rootState, commit }) {
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data)
    },
    async uploadImages({ rootState }, images) {
        const { token } = rootState.auth;
        await api.uploadImages(images, token);
        router.push('/');
    }
};

const mutations = {
    setImages: (appState, images) => {
        appState.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
