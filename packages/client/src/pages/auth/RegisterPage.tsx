import { Link } from 'react-router-dom'
import Input from '../../components/forms/Input'
import googleIcon from './../../assets/google.png'

const RegisterPage = function () {
    return (
        <div className='bg-slate-100 h-screen flex justify-center items-center p-8 md:px-0'>
            <div className='w-full h-full flex flex-col gap-y-4 items-center justify-center md:w-[350px]'>

                <div className='flex flex-col gap-y-2 text-center'>
                <h1 className='font-sans text-3xl font-bold text-slate-700'>Create your account</h1>
                <span className='text-slate-500'>Already registered? <Link to='/login' className='text-blue-600'>Sign In</Link></span>
                </div>
                

                <div className="bg-white py-10 px-6 rounded-lg shadow-md flex flex-col items-center gap-y-4 w-full">
                    <Input type="text" placeholder='Firstname' />

                    <Input type="text" placeholder="Lastname" />

                    <Input type="email" placeholder="Email" />

                    <Input type="password" placeholder="Password" />

                    <Input type="password" placeholder="Confirm Password" />

                    <button className='w-full rounded-md border-none outline-none py-3 bg-blue-600 text-white hover:bg-blue-500'>Sign Up</button>

                    
                </div>

                <span>Or</span>

                <button className='w-full flex justify-center items-center gap-x-2 bg-white py-4 rounded-lg shadow-lg text-bold text-lg'>
                    <img src={googleIcon} className='object-cover ' alt="google icon" />
                        Sign Up with Google
                </button>
                
            </div>
        </div>
        

    )
}

export default RegisterPage