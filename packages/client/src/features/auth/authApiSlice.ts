import { apiSlice } from '../../app/api/apiSlice'

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
            })
        }
    },
})

export const { useSignInMutation } = authApiSlice