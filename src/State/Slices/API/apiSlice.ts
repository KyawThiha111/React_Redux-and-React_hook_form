import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { FormType } from "../../../Components/Aboutusbanner/AboutBanner";
export const apiSlice = createApi({
    reducerPath:"naethitpages",
    baseQuery: fetchBaseQuery({baseUrl:"https://naethitasanv2.onrender.com/api/pages"}),
    endpoints:(builder)=>({
     getAboutusBanner:builder.query({
      query:()=>({
        url:"/aboutbannergetall",
        method:"GET"
      })
     }),
     editAboutBanner:builder.mutation({
      query:(data)=>({
        url:"/aboutbanner",
        method:'PUT',
        body:data
      })
     })
    })
})

export const {useGetAboutusBannerQuery,useEditAboutBannerMutation} = apiSlice;
