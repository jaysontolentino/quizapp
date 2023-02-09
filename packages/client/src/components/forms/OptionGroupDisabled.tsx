import { FunctionComponent } from 'react'
import Option from './Option'
import { useAppSelector } from '../../app/hooks'
import { selectedAnswer } from '../../features/quiz/quizSlice'
import OptionDisabled from './OptionDisabled'

interface IOption {
    id: number,
    value: string,
    label: string
}

interface IOptionGroupProps {
    options: IOption[],
    selected: IOption
}

const OptionGroup: FunctionComponent<IOptionGroupProps> = function({ options, selected }) {

    return (
        <div className='flex flex-col w-full gap-y-4'>
            {options.map((option, index) => {
                return (<OptionDisabled isActive={option.value === selected?.value} key={index} option={option} />)
            })}
        </div>
    )
}

export default OptionGroup