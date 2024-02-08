import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className=" h-full w-full items-center justify-center flex flex-col">
      <img src="./boca.svg" alt="escudo boca" className=" size-72 " />
      <Link to='/tasks'> <h1 className='text-3xl bg-[#023F87] px-2 border-[#F9B000] border-2 rounded-xl mt-2 hover:text-[#F9B000]'>Lista de tareas</h1></Link>
    </div>
  )
}

export default HomePage