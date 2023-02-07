import { apiSlice } from '../../app/api/apiSlice'
import { setAuthToken } from './authSlice'

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
            })
        }
    },
})

export const { useSignInMutation, useRefreshMutation } = authApiSlice