import { FunctionComponent } from 'react'
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectAnswer, selectedAnswer } from '../../features/quiz/quizSlice'

export interface IOption {
    value: string,
    label: string
}

interface IOptionProps {
    option: IOption
    isActive?: boolean
}

const Option: FunctionComponent<IOptionProps> = function({ option, isActive }) {

    const dispatch = useAppDispatch()
    

    const onClick = () => {
        dispatch(selectAnswer(option.value))
    }

    return (
        <div className={`w-full flex items-center gap-x-3 p-4 bg-white rounded-lg border shadow-sm cursor-pointer ${isActive && 'border-indigo-500' }`} onClick={onClick}>
            {isActive ? <IoIosRadioButtonOn size={20} color='#6366f1' /> : <IoIosRadioButtonOff size={20} color='gray' />}
            <span className='flex flex-1'>{option.label}</span> 
        </div>
    )
}

export default Option