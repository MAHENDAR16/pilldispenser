import { createSlice } from "@reduxjs/toolkit"
const authSlice = createSlice({
    name : 'auth',
    initialState : {username:'', isLogin : false},
    reducers : {
        login(state, action){
            state.isLogin = true
            state.username = action.payload
        },

        logout(state){
            state.isLogin = false
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice