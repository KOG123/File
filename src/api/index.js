import axios from 'axios';

let service = axios.create({
    baseURL: 'http://47.94.142.206:23333',
    timeout: 15000
})

service.interceptors.request.use(
    config => {
        return Promise.resolve(config);
    },
    err => {
        return Promise.reject(err);
    }
)

service.interceptors.response.use(
    res => {
        return Promise.resolve(res);
    },
    err => {
        return Promise.reject(err);
    }
)

export default service;