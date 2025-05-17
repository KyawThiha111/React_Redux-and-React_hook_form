import { useState } from "react"
import { Employees } from "../State/Slices/employeeslice"
import { useDispatch } from "react-redux";
import {addnewEmployee} from "../State/Slices/employeeslice"
import { addnewEmployeeAsync} from "../State/Slices/employeeslice";
import { AppDispatch } from "../State/store";
export default function employee(){
    const [newEmployee,setNewEmployee] = useState<Employees>({name:"",age:0,position:""});
    const dispatch = useDispatch<AppDispatch>();
    const HandleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault()
      dispatch(addnewEmployeeAsync(newEmployee))
    }
    return(
        <div>
          <h2>Add new Employee</h2>
          <form onSubmit={HandleSubmit}>
                Name: <input onChange={(e)=>setNewEmployee({...newEmployee,name:e.target.value})} type="text" placeholder="Name"/>
                Age: <input onChange={(e)=>setNewEmployee({...newEmployee,age:Number(e.target.value)})} type="text" placeholder="Age"/>
                Position: <input onChange={(e)=>setNewEmployee({...newEmployee,position:e.target.value})} type="text" placeholder="Position"/>
                <button type="submit">Add</button>
          </form>
        </div>
    )
}