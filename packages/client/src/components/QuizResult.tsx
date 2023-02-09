import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectAuthUser } from "../features/auth/authSlice"
import { active, answers, reset, score, setCompleted, setStarted, started } from "../features/quiz/quizSlice"
import { useEffect, useState } from "react"
import { BeatLoader } from "react-spinners"
import { useGetQuizScoreMutation } from "../features/quiz/quizApiSlice"

const QuizResult = function() {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const user = useAppSelector(selectAuthUser)

    const [isLoading, setLoading] = useState(false)
    const userScore = useAppSelector(score)
    const userAnswers = useAppSelector(answers)

    const [getScore, getScoreResult] = useGetQuizScoreMutation()

    const onClickReset = async () => {

        setLoading(true)
        dispatch(setCompleted(false))
        dispatch(setStarted(false))
        dispatch(reset())

        setTimeout(() => {
            navigate('/quiz')
            setLoading(false)
        }, 1000)
    }

    useEffect(() => {

        const fetchScore = async () => {
            await getScore({
                answers: userAnswers
            })
        }

        fetchScore()

    }, [])

    

    return (
        <div className="flex flex-col gap-y-8 items-center w-full h-auto  bg-white rounded-md shadow-md mt-6 p-6 md:w-[750px]">
            {getScoreResult.isLoading ? (
                <BeatLoader color="indigo"/>
            ): (
                <>
                    <h3 className="text-3xl">Well done, {user?.name}!</h3>

                    <p>Here's your result</p>

                    <span className="text-5xl">{`${userScore}/10`}</span>

                    <button onClick={onClickReset} className=" bg-indigo-500 w-full text-white rounded-lg text-lg font-sans font-bold py-4 px-3 text-center md:w-1/3">
                        {isLoading 
                        ? <BeatLoader color="white"/> 
                        : 'Reset'}
                    </button>
                </>
            )}
            
        </div>
    )
}

export default QuizResult