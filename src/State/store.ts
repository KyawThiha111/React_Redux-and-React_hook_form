
import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./Slices/counterslice";
import employeeSliceReducer from "./Slices/employeeslice"
import { apiSlice } from "./Slices/API/apiSlice";
export const store= configureStore({
    reducer:{
        counter: counterSliceReducer,
        employee:employeeSliceReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
   middleware:(getDefaultMiddleware)=>{
   return getDefaultMiddleware().concat(apiSlice.middleware)
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;