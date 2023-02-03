import { FunctionComponent } from 'react'
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io'

export interface IOption {
    key: number,
    value: string
}

interface IOptionProps {
    option: IOption
    isActive?: boolean
}

const Option: FunctionComponent<IOptionProps> = function({option, isActive}) {
    return (
        <div className={`w-full flex items-center gap-x-3 p-4 bg-white rounded-lg border shadow-sm cursor-pointer ${isActive && 'border-indigo-500' }`}>
            {isActive ? <IoIosRadioButtonOn size={20} color='#6366f1' /> : <IoIosRadioButtonOff size={20} color='gray' />}
            <span className='flex flex-1'>{option.value}</span> 
        </div>
    )
}

export default Option