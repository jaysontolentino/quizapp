
export interface IProps {
    type: 'text' | 'number' | 'email' | 'password'
    placeholder: string
}

const Input: React.FunctionComponent<IProps> = function({
    type,
    placeholder
}) {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
    )
}

export default Input