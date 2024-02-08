import { createContext, useContext, useState } from "react";
import { createNewTask, getTasksRequest, updateTaskRequest, deleteTaskRequest, deleteAllRequest } from '../api/tasks.js'


export const TaskContext = createContext()
export const UseTask = () => {
    const context = useContext(TaskContext)
    if (!context) {
        throw new Error('useAuth mus be used within an AuthProvider')
    }
    return context
}

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])

    // crear tarea
    const createTask = async (task) => {
        try {
            const res = await createNewTask(task)
            getTasks()

        } catch (error) {
            console.log(error)
        }
    }

    // obtener tareas
    const getTasks = async () => {
        try {
            const res = await getTasksRequest()
            setTasks(res.data)
            // console.log(tasks)

        } catch (error) {
            console.log(error)
        }
    }


    // eliminar tarea
    const deleteTask = async (id) => {
        try {
            const res = await deleteTaskRequest(id)
            getTasks()
        } catch (error) {
            console.log(error)
        }
    }



    const deleteAll = async () => {
        try {
            const res = await deleteAllRequest()
            getTasks()
        } catch (error) {
            console.log(error)
        }
    }

        // eliminar tarea
        const updateTask = async (id, newValue) => {
            try {
                const res = await updateTaskRequest(id, {done:!newValue})
                getTasks()
            } catch (error) {
                console.log(error)
            }
        }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks,
            setTasks,
            deleteTask,
            deleteAll,
            updateTask
        }}>
            {children}
        </TaskContext.Provider>

    )
}