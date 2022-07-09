const state = {
    products: [],
};


const getters = {
    getProducts(state) {
        return state.products;
    }
};

const mutations = {
    setProducts(state, payload) {
        state.products = [...payload]
    }
};

const actions = {
    
};
export default {
    state,
    mutations,
    getters,
    actions,
    namespaced: true,
};
