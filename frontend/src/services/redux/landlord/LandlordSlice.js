import { createSlice } from "@reduxjs/toolkit";

const initialState={
    session:null
}

export const LandlordSlice=createSlice({
    name:"LandlordSlice",
    initialState,
    reducers:{
        loginLandlord:(state,action)=>{
            state.session=action.payload;
        },
        logoutLandlord:(state)=>{
            state.session=null
        }
    }
})

export const{loginLandlord,logoutLandlord}=LandlordSlice.actions;
export default LandlordSlice.reducer;