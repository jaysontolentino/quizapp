
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
import { initialState, selectQuiz, setData } from './features/quiz/quizSlice'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useAppDispatch, useAppSelector } from './app/hooks'

function App() {

  const dispatch = useAppDispatch()
  const {getState, setState} = useLocalStorage()

  const quizState = useAppSelector(selectQuiz)

  useEffect(() => {

    const x = getState('quiz')
    console.log('Quiz redux state --> ', quizState)
    console.log('local storage value --> ', x)

    const data = getState('quiz') || initialState

    setState('quiz', data)

    dispatch(setData(data))

  }, [])

  return (
    <Routes>
        <Route element={<AuthProvider/>}>
          <Route path='/' element={<Home />} />

          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />

          <Route element={<AuthChecker />}>
            <Route path='quiz' element={<Layout />} >
              <Route index element={<QuizIntro />} />
              <Route path=':id' element={<Quiz />} />
            </Route>
          </Route>
          

        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App
