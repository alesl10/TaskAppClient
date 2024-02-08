import { useForm } from 'react-hook-form'
import { UseAuth } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'





function Login ()  {

  const { signin, isAuthenticated, error } = UseAuth()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const onSubmit = handleSubmit(async values => signin(values))

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks')
  }, [isAuthenticated])

  return (
    <div className='max-w-md m-auto my-10'>

      <h2 className=' text-blue-700 font-bold text-2xl mb-2'>Login</h2>

      {
        error.map((error, i) => (
          <div className=' bg-red-600 text-white' key={i}>{error}</div>
        ))
      }
      <div className='border-2 border-[#f9b000] bg-blue-200 p-10 rounded-lg'>
        <form onSubmit={onSubmit}>
          <input placeholder='email'
            type="email" {...register("email", { required: true })}
            className='w-full px-4 py-2 mb-2 bg-blue-500 text-yellow-300 rounded-md'
          />
          {
            errors.username && <p>username is required</p>
          }

          <input placeholder='password'
            type="password" {...register("password", { required: true })}
            className='w-full px-4 py-2 mb-2 bg-blue-500 text-yellow-300 rounded-md' />
          {
            errors.username && <p>username is required</p>
          }

          <button className=' px-4 font-semibold bg-blue-500 text-yellow-300 rounded-md'>Login</button>
        </form>
        <div className='flex items-center'>
          <p className='text-blue-700 font-semibold'>¿ sos nuevo y no tenes una cuenta todavia ? </p> <Link className='px-4 font-semibold bg-red-600 text-yellow-300 rounded-md' to="/register">Registrate</Link>
        </div>
      </div>
    </div>
  )
}

export default Login