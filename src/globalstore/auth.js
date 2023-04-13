import { createSlice } from "@reduxjs/toolkit"
const authSlice = createSlice({
    name : 'auth',
    initialState : {username:'', isLoggedin : false},
    reducers : {
        login(state, action){
            state.isLoggedin = true
            state.username = action.payload
        },

        logout(state){
            state.isLoggedin = false
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice