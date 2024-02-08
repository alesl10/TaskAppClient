import axios from './axios.js'

export const registerRequest = user => axios.post(`/register`, user)

export const loginRequest = user => axios.post(`/login`, user)

export const verifyToken = () => axios.get('/auth/verify')

export const logoutRequest = () => axios.post('/logout')