import { Link, useNavigate } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import { selectAuthUser } from "../features/auth/authSlice"
import { active } from "../features/quiz/quizSlice"
import { useState } from "react"
import { BeatLoader } from "react-spinners"

const QuizIntro = function() {

    const navigate = useNavigate()

    const user = useAppSelector(selectAuthUser)
    const activePage = useAppSelector(active)

    const [isLoading, setLoading] = useState(false)

    const onStart = async () => {

        setLoading(true)

        setTimeout(() => {
            //set start state

            navigate(`${activePage}`)

            setLoading(false)
        }, 2000)
    }

    return (
        <div className="flex flex-col gap-y-8 w-full h-auto bg-white rounded-md shadow-md mt-6 p-6 md:w-[750px]">
            <h3 className="text-3xl">Hello, {user?.name}</h3>


            <p>Each question will have 4 answer choices. Choose the one that you believe is the best answer. Goodluck!</p>

            <button onClick={onStart} className=" bg-indigo-500 w-1/3 text-white rounded-lg text-lg font-sans font-bold py-4 px-3 text-center">
                {isLoading ? <BeatLoader color="white"/> : 'Begin Quiz'}
            </button>
        </div>
    )
}

export default QuizIntro