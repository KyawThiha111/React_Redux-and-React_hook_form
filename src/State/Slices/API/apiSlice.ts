import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath:"naethitpages",
    baseQuery: fetchBaseQuery({baseUrl:"https://naethitasanv2.onrender.com/api/pages"}),
    endpoints:(builder)=>({
      getTestimonals: builder.query({
        query:()=>"/testimonals"
      }),
      //blogpagination?catagory=Events&page=1&lang=my
      getBlogsByCata: builder.query<any,{catagory:string,page:string,lang:string}>({
        query:({catagory,page,lang})=>`/blogpagination?catagory=${catagory}&page=${page}&lang=${lang}`,
      })
    })
})

export const {useGetTestimonalsQuery,useGetBlogsByCataQuery} = apiSlice;