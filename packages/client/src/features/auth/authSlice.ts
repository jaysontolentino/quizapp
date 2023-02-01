import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

const authSlice = createSlice({
    name: 'auth',
    initialState: {},
    reducers:{},
    extraReducers: (builder) => {}
})

export const {} = authSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer