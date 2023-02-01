
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import PageNotFound from './pages/PageNotFound'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'

function App() {

  return (
    <Routes>

        <Route path='/' element={<h1>Dashboard</h1>} />

        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
      

      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default App
