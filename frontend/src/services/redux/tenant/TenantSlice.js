import { createSlice } from "@reduxjs/toolkit";

const initialState={
    session:null
}

export const TenantSlice=createSlice({
    name:"TenantSlice",
    initialState,
    reducers:{
        loginTenant:(state,action)=>{
            state.session=action.payload;
        },
        logoutTenant:(state)=>{
            state.session=null
        }
    }
})

export const{loginTenant,logoutTenant}=TenantSlice.actions;
export default TenantSlice.reducer;