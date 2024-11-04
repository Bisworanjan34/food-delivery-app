import { createSlice } from "@reduxjs/toolkit";
let mySlice=createSlice({
    name:'myslice',
    initialState:{cart:[]},
    reducers:{
        addToCart:(state,action)=>{
            state.cart=[...state.cart,action.payload]
        },
        removeCart:(state,action)=>{
            state.cart=state.cart.filter((f,i)=>i!==action.payload)
        }
    }
})
export const{addToCart,removeCart}=mySlice.actions
export default mySlice.reducer