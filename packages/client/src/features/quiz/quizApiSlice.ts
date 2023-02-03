import { apiSlice, defaultApiSlice } from '../../app/api/apiSlice'

export const quizApiSlice = defaultApiSlice.injectEndpoints({
    endpoints: builder => ({
        getQuizByNo: builder.query({
            query: (id: number) => ({url: `quiz/${id}`}),
        }),
    })
})

export const { useGetQuizByNoQuery } = quizApiSlice