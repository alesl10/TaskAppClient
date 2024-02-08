import { Link } from "react-router-dom"
import { UseAuth } from '../context/authContext'

const NavBar = () => {

    const { isAuthenticated, user, logout } = UseAuth()

    return (
        <nav className="flex  justify-between text-2xl mx-4">
            <Link to='/'><img src="./boca.svg" className="size-20 mt-4" alt="" /></Link>

            {
                isAuthenticated ? (
                    <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 mx-2">
                        <p className="text-center">
                            Bienvenido {user.username}
                        </p>
                        <img src="./boca.svg" className="size-6 hidden sm:block" alt="icono user" />
                        <button onClick={() => logout()}>Salir</button>
                    </div>
                ) : (
                    <ul className="flex justify-between items-center gap-5 mx-2">
                        <Link to='/login' >Iniciar sesion</Link>
                        <Link to='/register'>Registrarse</Link>
                    </ul>

                )
            }

        </nav>
    )
}

export default NavBar