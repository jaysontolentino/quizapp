import { PropsWithChildren } from "react"

interface IButtonProps extends PropsWithChildren {
    bgColor: 'green' | 'indigo'
    handleClick: () => void
    children: JSX.Element[] | string
}

const Button: React.FunctionComponent<IButtonProps> = function({ children, bgColor, handleClick }) {

    if(bgColor === 'green') return <button onClick={e => handleClick() } className={`flex bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-400`}>{children}</button>

    return <button onClick={e => handleClick() } className={`flex justify-center gap-2 items-center bg-indigo-500 px-4 py-2 rounded-md text-white hover:bg-indigo-400`}>{children}</button>
}

export default Button