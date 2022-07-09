import api from "@/plugins/api";
import Cookies from '@/plugins/cookie'

const state = {
    user: null,
};
const getters = {
    getUser(state) {
        return state.user
    },
};

const mutations = {
    setUser(state, payload) {
        state.user = payload;
    },
};

const actions = {
    async fetchUser({ commit }) {
        this.commit('setLoading', true)
        const { status, data: user } = await api.getUser()
            .then(res => res)
            .catch(res => res.data)
            .finally(() => this.commit('setLoading', false))
        if (status) {
            commit('setUser', user)
            return true
        }
        return false
    },
    async login({ dispatch }, { email, password }) {
        this.commit('setLoading', true)
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const { status, data } = await api.login({ email, password, timezone })
            .then((res) => res).catch(err => err);
        if (status === true) {
            Cookies.set("access_token", data.token);
            await dispatch('fetchUser');
        }
        this.commit('setLoading', false)
        return status;
    },
    async register({ dispatch }, { email, password, name }) {
        this.commit('setLoading', true)
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const { status, data } = await api.register({ email, password, name, timezone })
            .then((res) => res).catch(err => err);
        if (status === true) {
            Cookies.set("access_token", data.token);
            await dispatch('fetchUser');
        }
        this.commit('setLoading', false)

        return { status, data };
    },
    logout({ commit }) {
        commit('setUser', null)
        Cookies.remove('access_token')
        sessionStorage.removeItem('vuex')
    }
};
export default {
    state,
    mutations,
    getters,
    actions,
    namespaced: true,
};