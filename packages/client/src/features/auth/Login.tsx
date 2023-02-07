import { useEffect, useState } from 'react'
import Input from '../../components/forms/Input'
import { useSignInMutation } from './authApiSlice'
import { useAppDispatch } from '../../app/hooks'
import { setAuthToken, setAuthUser } from './authSlice'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = function() {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.pathname || '/quiz'

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [signIn, {data, isLoading, isError, error}] = useSignInMutation()

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const handleSignIn = async () => {
        try {
            await signIn({email, password}).unwrap()

            
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(data) {
            dispatch(setAuthUser(data?.user))
            dispatch(setAuthToken(data?.token))

            navigate(from, {replace: true})
        }
    }, [data])

    return (
        <div className="bg-white py-10 px-6 rounded-lg shadow-md flex flex-col items-center gap-y-4 w-full">   
            <Input type="email" placeholder="Email" onChange={handleChangeEmail} />
            <Input type="password" placeholder="Password" onChange={handleChangePassword} />

            <button disabled={isLoading}
            className='w-full rounded-md border-none outline-none py-3 bg-blue-600 text-white hover:bg-blue-500'
            onClick={handleSignIn}>
                {isLoading ? 'Loading...' : 'Sign In'}
            </button>
        </div>
    )
}

export default Login