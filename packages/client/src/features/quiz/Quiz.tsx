import { useGetQuizByNoQuery } from './quizApiSlice'
import OptionGroup from '../../components/forms/OptionGroup'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectActive, selectAnswer } from './quizSlice'
import Button from '../../components/Button'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'

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

    const onClickNext = () => {

        let nextId = id + 1;

        dispatch(selectAnswer(''))
        navigate(`/quiz/${nextId}`)
    }

    const onClickPrev = () => {
        dispatch(selectAnswer(''))
        navigate(-1)
    }

    if(isLoading) {
        return <span>Loading...</span>
    } else if(isSuccess) {

        const { quiz } = data
        
        return (
            <>
                <div className='w-full flex flex-col md:w-[800px] md:flex-row md:justify-between'>
                    <Button bgColor='indigo' handleClick={onClickPrev} >
                        <IoMdArrowRoundBack />
                        <span>Previous Question</span>
                    </Button>
                    <Button bgColor='indigo' handleClick={onClickNext} >
                        <span>Next Question</span>
                        <IoMdArrowRoundForward />
                    </Button>
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