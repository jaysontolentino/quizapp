import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './../features/auth/authSlice'
import { apiSlice, defaultApiSlice } from './api/apiSlice'
import quizReducer from '../features/quiz/quizSlice'

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    [defaultApiSlice.reducerPath]: defaultApiSlice.reducer,
    auth: authReducer,
    quiz: quizReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(apiSlice.middleware)
    },
    devTools: true
})

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

export default store