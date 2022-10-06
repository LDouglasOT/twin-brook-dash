import { createSlice } from "@reduxjs/toolkit"
const initialState=[]

export const dataSlice =createSlice({
    name:"user",
    initialState:{value:initialState},
    reducers:{
        students:(state,action)=>{
            state.value=action.payload
        },
        uniforms:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {students} = dataSlice.actions;
export const {uniforms} = dataSlice.actions;
export default dataSlice.reducer