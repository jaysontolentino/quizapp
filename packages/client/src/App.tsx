
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import Home from './pages/Home.page'
import Layout from './components/Layout'
import Quiz from './features/quiz/Quiz'

function App() {

  return (
    <Routes>

        <Route path='/' element={<Home />} />

        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />

        <Route path='quiz' element={<Layout />} >
          <Route path=':id' element={<Quiz />} />
        </Route>

      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default App
