import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './../features/auth/authSlice'
import { apiSlice } from "./api/apiSlice";

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
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