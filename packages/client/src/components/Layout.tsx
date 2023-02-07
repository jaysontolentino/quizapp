import { Outlet, useNavigate } from 'react-router-dom'
import Button from './Button'
import { useAppDispatch } from '../app/hooks'
import { logout } from '../features/auth/authSlice'
import { useSignOutMutation } from '../features/auth/authApiSlice'

const Layout = function() {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [signOut, signOutResult] = useSignOutMutation()

    const handleLogout = async () => {
        await signOut(null)
        dispatch(logout())
        navigate('/login')
    }

    return (
        <div className="w-screen h-screen flex flex-col bg-slate-200">

            <nav className="flex justify-between items-center w-full bg-white shadow-md py-4 px-6 md:px-12">
                <div className="flex ">
                   <h3 className="text-xl font-black">Quiz App</h3>
                </div>
                
                <Button bgColor='green' handleClick={handleLogout}>
                    {signOutResult.isLoading ? 'Signing out...' : 'End Session'}
                </Button>
            </nav>

            <main className="flex flex-1 flex-col items-center  bg-indigo-50 px-6 py-4">
                <Outlet />
            </main>
            
        </div>
    )
}

export default Layout