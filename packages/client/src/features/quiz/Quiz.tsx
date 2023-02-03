import { useGetQuizByNoQuery } from './quizApiSlice'
import OptionGroup from '../../components/forms/OptionGroup'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectActive, selectAnswer } from './quizSlice'

const Quiz = function() {

    const params = useParams()
    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    const active = useAppSelector(selectActive)

    const id = Number(params.id)

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetQuizByNoQuery(id)

    const onClickNext = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        let nextId = id + 1;

        
        navigate(`/quiz/${nextId}`)
    }

    const onClickPrev = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch(selectAnswer(''))
        navigate(-1)
    }

    if(isLoading) {
        return <span>Loading...</span>
    } else if(isSuccess) {

        const { quiz } = data
        
        return (
            <>
                <div className='w-full md:w-[800px] md:flex-row'>
                    <button onClick={onClickPrev} className="bg-green-400 px-6 py-2 rounded-md text-white self-start">Previous Question</button>
                </div>
                
                
                <div className="flex flex-col gap-y-8 w-full h-auto bg-white rounded-md shadow-md mt-6 p-6 md:w-[800px] md:flex-row">
                            <div className="flex flex-col items-start gap-y-4 w-full md:w-3/5 ">

                                <h3 className="text-lg font-bold">Question #{id}</h3>
                                <span>{quiz.question}</span> 

                            </div>

                            <div className="flex flex-1 flex-col gap-y-8 md:pl-6">

                                <div className="flex flex-col gap-y-4">
                                    <h3 className="font-bold">Please select your answer</h3>

                                    <OptionGroup options={quiz.options} />
                                </div>
                                
                                <button onClick={onClickNext} className="bg-indigo-500 w-full py-2 rounded-md text-white">Submit</button>

                            </div>
                    </div>
                </>
            )        
    } else if(isError) {
        return <pre>{JSON.stringify(error)}</pre>
    }

    return <h1>assdasd</h1>
}

export default Quiz