import axios from './axios.js'

export const getTasksRequest = () => axios.get('/tasks')

export const createNewTask = task => axios.post('/tasks', task)

export const updateTaskRequest = (id, newValue) => axios.put(`/tasks/${id}`, newValue)

export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`)

export const deleteAllRequest = () => axios.delete('/tasks')