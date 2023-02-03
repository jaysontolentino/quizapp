const Layout = function() {
    return (
        <div className="w-screen h-screen flex flex-col bg-slate-200">

            <nav className="flex justify-between w-full bg-white shadow-sm py-4 px-12">
                <h3 className="text-xl font-black">Quiz App</h3>

                <button className="bg-indigo-500 text-white rounded px-4 py-2">End Session</button>
            </nav>

            <main className="flex flex-1 justify-center  bg-indigo-50">
               <div className="flex w-[800px] h-[500px] max-h-[500px] bg-white rounded-md shadow-md mt-6 p-6">
                <div className="flex flex-col gap-y-4 w-3/5 border-r-2 ">
                    <h3>Quiz#1</h3>

                    <span>What is 1 + 1?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet obcaecati sint blanditiis delectus sequi, adipisci, veritatis in officiis magni nobis reiciendis iusto excepturi non alias dolor aut, harum eum impedit?
                    </span>
                </div>
                <div></div>
               </div>
            </main>
            
        </div>
    )
}

export default Layout