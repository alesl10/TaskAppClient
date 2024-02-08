import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest, loginRequest, verifyToken, logoutRequest } from '../api/auth.jsx'
import Cookies from 'js-cookie';


export const AuthContext = createContext()
export const UseAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth mus be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState([])
  const [isLoading, setIsLoading] = useState(false)



  // check token
  useEffect(() => {
    async function checkLogin() {
      const token = Cookies.get('token')
      // console.log(token)
      if (token) {
        try {

          const res = await verifyToken()
          console.log(res)
          if (res.data) {
            setIsAuthenticated(true)
            setUser(res.data)
          }
        } catch (error) {
          setIsAuthenticated(false)
          setUser(null)
        }
      }
    }
    checkLogin()
  }, [])

  // register
  const signup = async (user) => {
    setIsLoading(true)
    try {

      const res = await registerRequest(user)
      // console.log(res)
      setUser(res.data.user)
      // console.log(user)
      setIsAuthenticated(true)
      setIsLoading(false)
    } catch (error) {
      setError(error.response.data)
      setIsLoading(false)
      setTimeout(() => { setError([]) }, 3000)
      console.log(error.response)
    }
  }

  // login
  const signin = async (user) => {

    setIsLoading(true)

    try {

      const res = await loginRequest(user)
      // console.log(res)
      if (res.status === 200) {
        setUser(user)
        // console.log(res.data)
        const { token } = Cookies.get()
        if (!token) Cookies.set('token', res.data.payload)
        setIsAuthenticated(true)
        setIsLoading(false)
        setTimeout(() => { setError([]) }, 3000)
      }
      console.log(error)
    } catch (error) {
      setIsLoading(false)
      console.log(error.response.data)
      setError(error.response.data)
      setTimeout(() => { setError([]) }, 3000)

    }
  }

  const logout = async () => {
    try {
      await logoutRequest()
      Cookies.remove('token')
      setUser(null)
      setIsAuthenticated(false)
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <AuthContext.Provider value={{
      signup,
      signin,
      user,
      isAuthenticated,
      error,
      logout,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>

  )
}