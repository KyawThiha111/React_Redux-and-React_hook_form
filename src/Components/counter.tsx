import { RootState } from "../State/store";
import { useSelector, useDispatch } from "react-redux";
import { Employees } from "../State/Slices/employeeslice";
import EmployeeForm from "./employForm";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../State/Slices/counterslice";
import { useState } from "react";
import { Root } from "react-dom/client";

interface inputdata {
  num1: number;
  num2: number;
}

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const employeeArray = useSelector((state:RootState)=>state.employee)
  const [inputNumbers, setInputNumbers] = useState<inputdata>({
    num1: 0,
    num2: 0,
  });
  const dispatch = useDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputNumbers(prev => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  return (
    <div>
      <button
        className="w-[100px] py-3 bg-yellow-700"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      {count}
      <button
        className="w-[100px] py-3 bg-yellow-700"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <div>
        <h2>Your Calculator</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(incrementByAmount(inputNumbers));
          }}
        >
          Num1:
          <input
            type="number"
            value={inputNumbers.num1}
            name="num1"
            onChange={onChangeHandler}
          />
          Num2:
          <input
            type="number"
            value={inputNumbers.num2}
            name="num2"
            onChange={onChangeHandler}
          />
          <button type="submit">Add</button>
        </form>
      </div>

      <div>
        <h2>Employee Lists</h2>
        {
          employeeArray.map((employee:Employees,index)=>{
            return(
              <div key={index}>
                <h1>{employee.name}</h1>
                <p>{employee.age}</p>
              </div>
            )
          })
        }
      </div>

      <div>
       <EmployeeForm/>
      </div>
    </div>
  );
}
