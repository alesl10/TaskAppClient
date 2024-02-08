import { UseAuth } from '../context/authContext'
import {Navigate, Outlet} from 'react-router-dom'

const ProtectedRoute = () => {

const {user, isAuthenticated} = UseAuth()
if(!isAuthenticated) return <Navigate to='/login' replace/>
    return (
    <Outlet/>
  )
}

export default ProtectedRoute