import { useGetTestimonalsQuery } from "../State/Slices/API/apiSlice"

export default function Testimonals(){
    const {data:testimonals,isLoading,isError} = useGetTestimonalsQuery({})
   if(isLoading){
    return (
        <div>...Loading</div>
    )
   }
    return(
        <div>
          {isError&&<div>Error while fetching!</div>}

          <ul>
            {testimonals?.FormattedResponse?.map((testimonal:any,index:number)=>{
                return(
                    <li key={index}>
                       <h1>{testimonal.patient_name_en}</h1>
                       <p>{testimonal.note_en}</p>
                    </li>
                )
            })}
          </ul>
        </div>
    )
}