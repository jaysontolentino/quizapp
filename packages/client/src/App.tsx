
import {useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import Home from './pages/Home.page'
import Layout from './components/Layout'
import Quiz from './features/quiz/Quiz'
import QuizIntro from './components/QuizIntro'
import AuthChecker from './features/auth/AuthChecker'
import AuthProvider from './features/auth/AuthProvider'
import { selectQuiz,  } from './features/quiz/quizSlice'
import { useAppSelector } from './app/hooks'
import { selectAuth } from './features/auth/authSlice'
import QuizResult from './components/QuizResult'
import RedirectAuth from './features/auth/RedirectAuth'

function App() {
  const quizState = useAppSelector(selectQuiz)
  const authState = useAppSelector(selectAuth)

  // useEffect(() => {
  //   console.log('Redux Quiz state --> ', quizState)
  //   console.log('Redux Auth state -->', authState)

  //   console.log('Token --> ', authState.token)
  // }, [])

  return (
    <Routes>
        <Route element={<AuthProvider/>}>
          <Route path='/' element={<Home />} />
          
          <Route element={<RedirectAuth />}>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
          </Route>

          <Route element={<AuthChecker />}>
            <Route path='quiz' element={<Layout />} >
              <Route index element={<QuizIntro />} />
              <Route path=':id' element={<Quiz />} />
            </Route>

            <Route path='result' element={<Layout />}>
              <Route index element={<QuizResult />} />
            </Route>
          </Route>
          

        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App
