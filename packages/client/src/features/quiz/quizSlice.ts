import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'


export interface IQuizState {
    selected: {id: number, value: string, label: string} | null
    active: number
    score: number
    started: boolean
    completed: boolean
    answers: Array<{id: number, value: string, label: string}>
    itemCount: number
}

export const initialState: IQuizState = {
    selected: null,
    active: 1,
    score: 0,
    started: false,
    completed: false,
    answers: [],
    itemCount: 2
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers:{
        selectAnswer: (state, action: PayloadAction<{id: number, value: string, label: string} | null>) => {
            state.selected = action.payload
        },
        setActive: (state, action: PayloadAction<number>) => {
            state.active = action.payload
        },
        setScore: (state, action: PayloadAction<number>) => {
            state.score = action.payload
        },
        setStarted: (state, action: PayloadAction<boolean>) => {
            state.started = action.payload
        },
        setCompleted: (state, action: PayloadAction<boolean>) => {
            state.completed = action.payload
        },
        addAnswer: (state, action: PayloadAction<{id: number, value: string, label: string}>) => {
            state.answers = [
                ...state.answers,
                action.payload
            ]
        },
        setData: (state, action: PayloadAction<IQuizState>) => {
            return {
                ...state,
                ...action.payload
            }
        },
        reset: (state) => {
            return {
                ...state,
                ...initialState
            }
        }
    },
    extraReducers: (builder) => {}
})

export const { 
    selectAnswer, 
    setActive, 
    setScore,
    setStarted,
    setCompleted,
    addAnswer,
    reset,
    setData
 } = quizSlice.actions

export const selectedAnswer = (state: RootState) => state.quiz.selected
export const active = (state: RootState) => state.quiz.active
export const score = (state: RootState) => state.quiz.score
export const started = (state: RootState) => state.quiz.started
export const completed = (state: RootState) => state.quiz.completed
export const answers = (state: RootState) => state.quiz.answers
export const itemCount = (state: RootState) => state.quiz.itemCount
export const selectQuiz = (state: RootState) => state.quiz


export default quizSlice.reducer