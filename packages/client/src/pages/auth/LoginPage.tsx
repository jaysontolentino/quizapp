import { Link } from 'react-router-dom'
import googleIcon from '../../assets/google.png'
import Login from '../../features/auth/Login'


const LoginPage = function() {
    return (
        <div className='bg-slate-100 h-screen flex justify-center items-center p-8 md:px-0'>
            <div className='w-full h-full flex flex-col gap-y-4 items-center justify-center md:w-[350px]'>

                <div className='flex flex-col gap-y-2 text-center'>
                <h1 className='font-sans text-3xl font-bold text-slate-700'>Sign In to continue</h1>
                <span className='text-slate-500'>Not yet registered? <Link to='/register' className='text-blue-600'>Sign Up</Link></span>
                </div>
                
                {/* Login features */}
                <Login />

                {/* <span>Or</span>

                <button className='w-full flex justify-center items-center gap-x-2 bg-white py-4 rounded-lg shadow-lg text-bold text-lg'>
                    <img src={googleIcon} className='object-cover ' alt="google icon" />
                        Sign In with Google
                </button> */}
                
            </div>
        </div>
        
    )
}

export default LoginPage