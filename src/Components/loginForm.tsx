import { useState } from "react"
import {useForm,SubmitHandler} from "react-hook-form";

type formField = {
    email:string,
    password:string
}
export default function LoginForm(){
  const {register,handleSubmit} = useForm<formField>();

  const onSubmit:SubmitHandler<formField> = (data)=>{
    console.log(data?.email)
  }
    return(
        <div>
            <h2>A login Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                {...register("email")}
                className="border border-blue-800"
                type="text"
                 placeholder="email"/>
                <input 
                {...register("password")}
                className="border border-blue-800"
                type="text"
                 placeholder="Password"/>

                 <button type="submit">Submit</button>
            </form>
        </div>
    )
}