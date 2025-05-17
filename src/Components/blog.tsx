import { useEffect, useState } from "react"
import { useGetBlogsByCataQuery } from "../State/Slices/API/apiSlice"
export default function Blogs(){
   
    const [lang, setLang] = useState("my");
    const [catagory,setCata] = useState("Events")
    const queryChange = {
         lang,
         catagory,
         page:"1"
    }
    const {data:blogs, isLoading,isError } = useGetBlogsByCataQuery(queryChange);
    
    if(isLoading){
        return <div>...Loading</div>
    }
    if(isError){
        return <div>Error</div>
    }
    return(
        <div>
            <h1>Blogs</h1>
            <button onClick={()=>setCata("Events")}>Events</button>
            <button onClick={()=>setCata("articles")}>articles</button>

            {blogs?.blogs?.map((blog:any,index:number)=>{
                return(
                    <div key={index}>

                        <h3>{index+1}.{blog?.title}</h3>
                        <p>{blog?.description}</p>
                    </div>
                )
            })}
        </div>
    )
}