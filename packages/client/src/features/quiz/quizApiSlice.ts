import { apiSlice } from '../../app/api/apiSlice'
import { setScore } from './quizSlice'

export const quizApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getQuizByNo: builder.query({
            query: (id: number) => ({url: `quiz/${id}`}),
        }),
        getQuizScore: builder.mutation({
            query: (args) => {
                return {
                    url: '/quiz/calculate-score',
                    method: 'POST',
                    body: args
                }
            },
            async onQueryStarted(arg, api) {
                const result = await api.queryFulfilled
                const scores = result.data.scores
                api.dispatch(setScore(Number(scores)))
            },
        })
    })
})

export const { useGetQuizByNoQuery, useGetQuizScoreMutation } = quizApiSlice