import Input from '../../components/forms/Input'

const Login = function() {


    return (
        <div className="bg-white py-10 px-6 rounded-lg shadow-md flex flex-col items-center gap-y-4 w-full">   
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />

            <button className='w-full rounded-md border-none outline-none py-3 bg-blue-600 text-white hover:bg-blue-500'>Sign In</button>
        </div>
    )
}

export default Login