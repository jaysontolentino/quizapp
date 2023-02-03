import { FunctionComponent } from 'react'
import Option from './Option'

interface IOption {
    key: number,
    value: string
}

interface IOptionGroupProps {
    options: IOption[]
}

const OptionGroup: FunctionComponent<IOptionGroupProps> = function({ options }) {
    return (
        <div className='flex flex-col w-full gap-y-4'>
            {options.map((option, index) => {

                if(index === 1) {
                    return (<Option isActive key={index} option={option} />)
                }
                return (<Option key={index} option={option} />)
            })}
        </div>
    )
}

export default OptionGroup