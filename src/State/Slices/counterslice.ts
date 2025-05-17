import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value:5,
}
interface PayLoadType{
    num1:number,
    num2:number
}
const counterSlice = createSlice({
    name:"counter",
    initialState,//initial state
    reducers:{
        increment:(state)=>{
            state.value += 1
        },
        decrement:(state)=>{
            state.value>0?state.value -=1:alert("Can't go below 0.")
        },
        incrementByAmount:(state,action:PayloadAction<PayLoadType>)=>{
            state.value = action.payload.num1 + action.payload.num2
        }
    }
})
export const {increment,decrement,incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;