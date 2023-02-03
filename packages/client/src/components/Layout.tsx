import { Outlet } from "react-router-dom"

const Layout = function() {
    return (
        <div className="w-screen h-screen flex flex-col bg-slate-200">

            <nav className="flex justify-between items-center w-full bg-white shadow-sm py-4 px-6 md:px-12">
                <h3 className="text-xl font-black">Quiz App</h3>

                <button className="bg-indigo-500 text-white rounded px-4 py-2">End Session</button>
            </nav>

            <main className="flex flex-1 flex-col items-center justify-center bg-indigo-100 px-6 py-4">
                <Outlet />
            </main>
            
        </div>
    )
}

export default Layout