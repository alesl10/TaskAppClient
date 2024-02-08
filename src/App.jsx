import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import { AuthProvider } from './context/authContext.jsx'
import HomePage from './pages/HomePage.jsx'
import NewTasksPages from './pages/NewTasksPages.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { TaskProvider } from './context/taskContext.jsx'
import NavBar from './components/NavBar.jsx'

function App() {

  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/tasks' element={<NewTasksPages />} />

            <Route element={<ProtectedRoute />}>
            </Route>

          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>


  )
}

export default App
