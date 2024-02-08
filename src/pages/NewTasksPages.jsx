import { useForm } from 'react-hook-form'
import { UseTask } from '../context/taskContext'
import { useEffect } from 'react'
import TasksPages from './TasksPages'

function NewTasksPages  ()  {

  const { register, handleSubmit, reset } = useForm()
  const { tasks, createTask, getTasks } = UseTask()

  useEffect(() => {
    getTasks()
  }, [])

  const onSubmit = handleSubmit((res) => {
    createTask(res)
    reset()
  })


  return (
    <div className='flex justify-center items-center flex-col'>
      <TasksPages tasks={tasks} />
      <form className='max-w-[80%] flex flex-col gap-2' onSubmit={onSubmit}>
        <input className=' border border-[#f9b000] text-blue-700 px-2' type="text" placeholder="titulo" {...register('title')} />
        <textarea className=' border border-[#f9b000] text-blue-700 px-2' cols={50} type="text" placeholder="tarea" {...register('task')} />
        <button className='text-[#f9b000] w-[30%] m-auto bg-[#023F87] rounded-md border border-[#f9b000]'>Crear tarea</button>
      </form>
    </div>
  )
}

export default NewTasksPages