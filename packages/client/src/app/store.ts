import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'
import authReducer from './../features/auth/authSlice'
import { apiSlice, defaultApiSlice } from './api/apiSlice'
import quizReducer from '../features/quiz/quizSlice'

const persistConfig = {
    key: 'root',
    storage
}

//const persistedAuthReducer = persistReducer(persistConfig, authReducer)
const persistedQuizReducer = persistReducer(persistConfig, quizReducer)

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    //[defaultApiSlice.reducerPath]: defaultApiSlice.reducer,
    auth: authReducer,
    quiz: persistedQuizReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({serializableCheck: false}).concat(apiSlice.middleware)
    },
    devTools: false
})

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)