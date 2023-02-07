import { useGetQuizByNoQuery } from './quizApiSlice'
import OptionGroup from '../../components/forms/OptionGroup'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addAnswer, itemCount, selectAnswer, selectQuiz, selectedAnswer, setActive } from './quizSlice'
import Button from '../../components/Button'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'
import { AiTwotoneHome } from 'react-icons/ai'

const Quiz = function() {

    const params = useParams()
    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    const selected = useAppSelector(selectedAnswer)
    const count = useAppSelector(itemCount)

    const id = Number(params.id)

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetQuizByNoQuery(id)

    const onClickNext = () => {

        let nextId = id + 1;

        dispatch(selectAnswer(null))
        dispatch(setActive(nextId))
        dispatch(addAnswer({id: selected?.id as number, value: selected?.value as string}))
        navigate(`/quiz/${nextId}`)
    }

    const onClickPrev = () => {

        let prevId = id - 1;

        dispatch(selectAnswer(null))
        navigate(`/quiz/${prevId}`)
    }


    if(isLoading) {
        return <span>Loading...</span>
    } else if(isSuccess) {

        const { quiz } = data
        
        return (
            <>
                <div className='w-full flex flex-col gap-y-2 md:w-[800px] md:flex-row md:justify-between md:mt-12'>
                    {id === 1 ? (
                    <Link to='/quiz' className='flex py-3 px-4 bg-indigo-500 text-white justify-center rounded-lg items-center gap-x-2'>
                        <span><AiTwotoneHome /></span>
                        <span>Back to home</span>
                    </Link>
                    ): (
                        <Button bgColor='indigo' handleClick={onClickPrev} >
                            <span className='hidden md:block'><IoMdArrowRoundBack /></span>
                            <span>Previous Question</span>
                        </Button>
                    )}
                    
                    
                    {(selected && (id < count)) && (
                        <Button bgColor='indigo' handleClick={onClickNext} >
                            <span>Next Question</span>
                            <span className='hidden md:block'><IoMdArrowRoundForward /></span> 
                        </Button>
                    )}
                    
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