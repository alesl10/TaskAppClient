import { UseTask } from "../context/taskContext"

function TasksPages ({ tasks }) {

    const { deleteTask, deleteAll, updateTask } = UseTask()

    const deleteSubmit = async (id) => {
        await deleteTask(id)
    }

    const deleteAllSubmit = async () => {
        await deleteAll()
    }


    return (
        <div className="w-full md:w-[80%]  bg-opacity-45 text-blue-900 px-5 m-10 flex flex-col items-center justify-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 ">
                {
                    tasks.map((task, i) => (
                        <div className=" max-w-[24rem] px-2 m-2 flex flex-col justify-between h-full bg-opacity-60 p-2 bg-yellow-900 rounded-lg" key={i}>
                            <h5 className=" text-[0.9rem] sm:text-[1rem] lg:text-lg font-bold min-h-8 max-h-10 text-center text-wrap underline px-2 bg-yellow-300 rounded-lg">{task.title}</h5>
                            <p className=" text-[0.7rem] sm:text-[0.9rem] font-semibold break-words px-1 text-wrap overflow-auto h-24 bg-yellow-300 rounded-lg" >{task.task}</p>
                            <div className="flex justify-between  min-h-8 items-end ">
                                <p className="text-sm text-white ">Creada el {new Date(task.createdAt).toLocaleDateString()}</p>
                                {
                                    task.done ? <img className=" size-6" src="./check-circle-svgrepo-com.svg" alt="img check" /> : <img className=" size-8" src="./system-pending-line-svgrepo-com.svg" alt="img pending" />
                                }
                            </div>
                            <div className="flex justify-between gap-1 font-semibold">
                                {
                                    task.done ? <button onClick={() => updateTask(task._id, task.done)} className="bg-red-400 px-2 rounded-lg border text-sm border-red-950 text-white my-2">Marcar pendiente</button> : <button onClick={() => updateTask(task._id, task.done)} className=" text-sm bg-green-600 text-white px-2 rounded-lg border border-green-950 my-2">Marcar realizada</button>
                                }
                                <button onClick={() => deleteSubmit(task._id)} className="bg-red-600 px-2 rounded-lg border border-red-950 text-white my-2">Eliminar</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                tasks.length > 0 ?
                    <button className="bg-red-600 border border-red-900 px-2 rounded-lg text-white m-2" onClick={() => deleteAllSubmit()}>Eliminar todas</button>
                    : ''
            }
        </div>
    )
}

export default TasksPages