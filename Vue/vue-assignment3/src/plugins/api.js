import axios from "./axios";
const api = {
    get(url, params = {}, cancel_token = null) {
        return new Promise((resolve, reject) => {
            axios
                .get(url, {
                    params,
                    cancelToken: cancel_token ? cancel_token.token : null,
                })
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    if (axios.isCancel(err)) {
                        return reject("canceled");
                    }
                    reject(err);
                });
        });
    },

    post(url, data = {}) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, data,)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    if (axios.isCancel(err)) {
                        return reject("canceled");
                    }
                    reject(err);
                });
        });
    },

    put(url, data = {}) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, {
                    ...data,
                })
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    if (axios.isCancel(err)) {
                        return reject("canceled");
                    }
                    reject(err);
                });
        });
    },

    delete(url, data = {}) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, {
                    data,
                })
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    if (axios.isCancel(err)) {
                        return reject("canceled");
                    }
                    reject(err);
                });
        });
    },
};

export default {
    login(payload) {
        let { email = "", password = "", timezone = "Asia/Bangkok" } = payload
        return api.post(`/api/app/sign-in`, { email, password, timezone })
    },
    register(payload) {
        let { name = "", email = "", password = "", timezone = "Asia/Bangkok" } = payload
        return api.post(`/api/app/sign-up`, { email, password, timezone, name })
    },
    getUser() {
        return api.get(`/api/app/user`)
    }
};