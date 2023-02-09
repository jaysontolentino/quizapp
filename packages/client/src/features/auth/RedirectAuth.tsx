import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import { selectAuthToken } from "./authSlice"

const RedirectAuth = function() {

    const token = useAppSelector(selectAuthToken)

    return (!token) ? <Outlet /> : <Navigate to='/quiz' />

    //return <Outlet />
}

export default RedirectAuth