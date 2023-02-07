import { apiSlice } from '../../app/api/apiSlice'

export const quizApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getQuizByNo: builder.query({
            query: (id: number) => ({url: `quiz/${id}`}),
        }),
    })
})

export const { useGetQuizByNoQuery } = quizApiSlice