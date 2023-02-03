import OptionGroup from "./forms/OptionGroup"

const Layout = function() {
    return (
        <div className="w-screen h-screen flex flex-col bg-slate-200">

            <nav className="flex justify-between items-center w-full bg-white shadow-sm py-4 px-6 md:px-12">
                <h3 className="text-xl font-black">Quiz App</h3>

                <button className="bg-indigo-500 text-white rounded px-4 py-2">End Session</button>
            </nav>

            <main className="flex flex-1 justify-center bg-indigo-100 px-6 py-4">
               <div className="flex flex-col gap-y-8 w-full h-auto bg-white rounded-md shadow-md mt-6 p-6 md:w-[800px] md:flex-row">
                    <div className="flex flex-col gap-y-4 w-full md:w-3/5 ">
                        <h3 className="text-lg font-bold">Question #1</h3>

                        <span>What is 1 + 1?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet obcaecati sint blanditiis delectus sequi, adipisci, veritatis in officiis magni nobis reiciendis iusto excepturi non alias dolor aut, harum eum impedit?
                        </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-y-8 md:pl-6">
                        <div className="flex flex-col gap-y-4">
                            <h3 className="font-bold">Please select your answer</h3>

                            <OptionGroup options={[
                                {
                                    key: 0,
                                    value: 'Choice 1'
                                },
                                {
                                    key: 1,
                                    value: 'Choice 2'
                                },
                                {
                                    key: 2,
                                    value: 'Choice 3sasadads asdasdsa dweqwe vvfdef'
                                },
                                {
                                    key: 3,
                                    value: 'Choice 4'
                                },
                            ]} />
                        </div>
                        

                        <button className="bg-indigo-500 w-full py-2 rounded-md text-white self-end">Submit</button>

                    </div>
               </div>
            </main>
            
        </div>
    )
}

export default Layout