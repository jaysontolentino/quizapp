import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'


export interface IQuizState {
    selected: string
    active: number
    score: number
}

const initialState: IQuizState = {
    selected: '',
    active: 1,
    score: 0
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers:{
        selectAnswer: (state, action: PayloadAction<string>) => {
            state.selected = action.payload
        },
        setActive: (state, action: PayloadAction<number>) => {
            state.active = action.payload
        },
        setScore: (state, action: PayloadAction<number>) => {
            state.score = action.payload
        },
    },
    extraReducers: (builder) => {}
})

export const { selectAnswer } = quizSlice.actions

export const selectedAnswer = (state: RootState) => state.quiz.selected
export const selectActive = (state: RootState) => state.quiz.active
export const selectScore= (state: RootState) => state.quiz.score

export default quizSlice.reducer