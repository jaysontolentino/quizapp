import { Outlet, useParams } from "react-router-dom"
import Button from "./Button"
import { useEffect } from "react"

const Layout = function() {

    const params = useParams()

    useEffect(() => {
        if('id' in params) {

        } else {
            
        }
    }, [params])
    

    return (
        <div className="w-screen h-screen flex flex-col bg-slate-200">

            <nav className="flex justify-between items-center w-full bg-white shadow-sm py-4 px-6 md:px-12">
                <h3 className="text-xl font-black">Quiz App</h3>

                <Button bgColor='green' handleClick={() => {}}>End Session</Button>
            </nav>

            <main className="flex flex-1 flex-col items-center justify-center bg-indigo-50 px-6 py-4">
                <Outlet />
            </main>
            
        </div>
    )
}

export default Layout