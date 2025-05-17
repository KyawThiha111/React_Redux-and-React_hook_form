import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
export interface Employees{
    name:string,
    age:number,
    position:string
}

const initialState:Employees[] = [{name:"Kyaw Thiha",age:21,position:"Developer"}];
const employeeSlice = createSlice({
    name:"employees",
    initialState,
    reducers:{
        addnewEmployee:(state:Employees[],action:PayloadAction<Employees>)=>{
              state.push(action.payload)
        }
    },
    extraReducers:(builder)=>{
       builder.addCase(
        addnewEmployeeAsync.pending,
        ()=>{
            console.log("Loading")
        }
       ).addCase(
        addnewEmployeeAsync.fulfilled,
        (state,action:PayloadAction<Employees>)=>{
          state.push(action.payload)
        }
       )
    }
})

export const addnewEmployeeAsync = createAsyncThunk(
    "employees/addnewEmployeeAsync",
    async(newEmployee:Employees)=>{
        await new Promise((resolve)=> setTimeout(resolve,3000));
        return newEmployee;
    }
)
export const {addnewEmployee,} = employeeSlice.actions;
export default employeeSlice.reducer;