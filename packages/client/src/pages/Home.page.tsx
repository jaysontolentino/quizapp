
import { Link } from 'react-router-dom'
import onlineTestSVG from './../assets/online_test.svg'

const Home = function() {
    return (
        <main className="w-screen h-screen flex justify-center items-center bg-slate-50 p-6">
            <div className="flex flex-col w-full shadow-lg bg-white p-10 gap-y-4 md:flex-row md:gap-y-0 md:w-[800px] ">
                <img src={onlineTestSVG} alt="online test" className='w-full md:w-[50%]' />

                <div className='flex-1 flex flex-col items-center px-6 gap-y-4'>
                    <h1 className='w-full text-2xl text-center font-extrabold'>Welcome to Quiz App</h1>

                    <Link to='/quiz' className='w-full rounded-md bg-indigo-500 text-white text-center py-3 text-lg font-sans font-medium hover:bg-indigo-400'>
                        Start the Quiz
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Home