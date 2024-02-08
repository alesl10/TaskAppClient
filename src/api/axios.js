import axios from 'axios'
import Cookies from 'js-cookie'

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: true,
})

instance.interceptors.request.use(
    (config) => {
        const token = Cookies.get('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance