import stores from "@/data/stores.js";

const state = {
    stores: [],
};


const getters = {
    getStores(state) {
        return state.stores;
    }
};

const mutations = {
    setStores(state, payload) {
        state.stores = [...payload]
    }
};

const actions = {
    async fetchData({ commit }) {
        commit('setStores', stores);
    }
};
export default {
    state,
    mutations,
    getters,
    actions,
    namespaced: true,
};
