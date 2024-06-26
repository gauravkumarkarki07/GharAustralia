import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:false
}

export const GlobalSlice=createSlice({
    name:"GlobalSlice",
    initialState,
    reducers:{
        loadingStart:(state)=>{
            state.loading=true;
        },
        loadingStop:(state)=>{
            state.loading=false;
        }
    }
})

export const{loadingStart,loadingStop}=GlobalSlice.actions;
export default GlobalSlice.reducer;