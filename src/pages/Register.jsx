import { useForm } from 'react-hook-form'
import { UseAuth } from '../context/authContext'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Register ()  {

  const { signup, isAuthenticated, error: registerError } = UseAuth()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks')
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async values => signup(values))

  return (
    <div className='max-w-md m-auto my-10 p-10 bg-blue-200 border-[#f9b000] border-4 rounded-lg'>

      <form onSubmit={onSubmit}>

        {
          registerError.map((error, i) => (
            <div className='bg-red-500 text-white p-2' key={i}>{error}</div>
          ))
        }

        <input placeholder='username'
          type="text" {...register("username", { required: true })}
          className='w-full px-4 py-2 mb-2 bg-blue-500 font-semibold text-[#f9b000] rounded-md placeholder:text-[#f9b000] placeholder:font-normal' />
        {
          errors.username && <p className='text-red-800'>username is required</p>
        }

        <input placeholder='email'
          type="email" {...register("email", { required: true })}
          className='w-full px-4 py-2 mb-2 bg-blue-500 font-semibold text-[#f9b000] rounded-md placeholder:text-[#f9b000] placeholder:font-normal' />
        {
          errors.email && <p className='text-red-800'>email is required</p>
        }

        <input placeholder='password'
          type="password" {...register("password", { required: true })}
          className='w-full px-4 py-2 mb-2 bg-blue-500 font-semibold text-[#f9b000] rounded-md placeholder:text-[#f9b000] placeholder:font-normal' />
        {
          errors.password && <p className='text-red-800'>password is required</p>
        }

        <button className='bg-[#f9b000] border border-blue-700 px-4 rounded-md text-blue-700 font-semibold hover:bg-blue-700 hover:text-[#f9b000]'>Registrarse</button>

      </form>

      <p className='text-blue-700 font-semibold flex items-center justify-between'>¿ Ya tenes una cuenta ? <Link className='px-4 font-semibold bg-[#f9b000] text-blue-700 border border-blue-700 rounded-md' to="/login">Inicia sesion</Link></p>

    </div>
  )
}

export default Register