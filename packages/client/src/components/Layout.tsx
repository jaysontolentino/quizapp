import { Outlet, useParams } from "react-router-dom"
import Button from "./Button"
import { useAppSelector } from "../app/hooks"
import { selectAuthToken } from "../features/auth/authSlice"
import {AiTwotoneHome} from 'react-icons/ai'

const Layout = function() {

    const params = useParams()

    const token = useAppSelector(selectAuthToken)

    return (
        <div className="w-screen h-screen flex flex-col bg-slate-200">

            <nav className="flex justify-between items-center w-full bg-white shadow-md py-4 px-6 md:px-12">
                <div className="flex ">
                   <h3 className="text-xl font-black">Quiz App</h3>
                </div>
                
                <Button bgColor='green' handleClick={() => {}}>End Session</Button>
            </nav>

            <main className="flex flex-1 flex-col items-center  bg-indigo-50 px-6 py-4">
                <Outlet />
            </main>
            
        </div>
    )
}

export default Layout