import { createSlice } from "@reduxjs/toolkit";

const initialState={
    signupData:null,
    loading:false,
    token:localStorage.getItem("token1")? JSON.parse(localStorage.getItem("token1")):null
}

export const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setSignUpData(state,value){
            state.signupData=value.payload;
        },
        setLoading(state,value){
            state.loading=value.payload
        },
        setToken(state,value){
            state.token=value.payload
        },

    },
})

export const {setSignUpData,setLoading,setToken}=authSlice.actions;
export default authSlice.reducer