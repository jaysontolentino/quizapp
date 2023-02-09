import { apiSlice } from '../../app/api/apiSlice'
import { reset } from '../quiz/quizSlice'
import { logout, setAuthToken, setAuthUser } from './authSlice'

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints(build) {
        return {
            signIn: build.mutation({
                query({email, password}) {
                    return {
                        url: '/auth/signin',
                        method: 'POST',
                        body: {email, password}
                    }
                },
                async onQueryStarted(arg, api) {
                    const result = await api.queryFulfilled
                    const token = result.data.token
                    const user = result.data.user
                    api.dispatch(setAuthToken(token))
                    api.dispatch(setAuthUser(user))
                },
            }),
            signUp: build.mutation({
                query(args) {
                    return {
                        url: '/auth/signup',
                        method: 'POST',
                        body: args
                    }
                },
                async onQueryStarted(arg, api) {
                    const result = await api.queryFulfilled
                    const token = result.data.token
                    const user = result.data.user
                    api.dispatch(setAuthToken(token))
                    api.dispatch(setAuthUser(user))
                },
            }),
            signOut: build.mutation({
                query() {
                    return {
                        url: '/auth/signout',
                        method: 'POST'
                    }
                },
                async onQueryStarted(arg, api) {
                    await api.queryFulfilled
                    api.dispatch(logout())
                    api.dispatch(reset())
                },
            }),
            refresh: build.mutation({
                query() {
                    return {
                        url: '/auth/refresh-token',
                        method: 'GET'
                    }
                },
                async onQueryStarted(arg, api) {
                    const result = await api.queryFulfilled
                    const token = result.data.token
                    api.dispatch(setAuthToken(token))
                },
            }),
            getUser: build.mutation({
                query() {
                    return {
                        url: '/auth/get-auth-user',
                        method: 'GET'
                    }
                },
                async onQueryStarted(arg, api) {
                    const result = await api.queryFulfilled
                    const user = result.data.user
                    api.dispatch(setAuthUser({name: user.name, email: user.email}))
                },
            }),
        }
    },
})

export const { 
    useSignInMutation,
    useSignUpMutation,
    useSignOutMutation,
    useRefreshMutation,
    useGetUserMutation
 } = authApiSlice