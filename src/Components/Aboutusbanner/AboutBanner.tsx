
import { useEffect, useState } from "react";
import { useGetAboutusBannerQuery,useEditAboutBannerMutation } from "../../State/Slices/API/apiSlice"
import {SubmitHandler, useForm} from "react-hook-form";
export interface FormType{
    titleen:string,
    titlemy:string,
    abouten:string,
    aboutmy:string,
    blogtitleen:string,
    blogtitlemy:string,
    blogen:string,
    blogmy:string,
    homepageblogtitle_en:string,
    homepageblogtitle_my:string,
    homepageblog_en:string,
    homepageblog_my:string,
    introductionen:string,
    introductionmy:string,
    /* For images */
    bannerBgFile:FileList,
    backgroundBlogFile:FileList,
    homepageblogfile:FileList
}
export default function AboutusBanner(){
    const {data:AboutUsBanner, isLoading, isError} = useGetAboutusBannerQuery({});
    const {register,setValue,handleSubmit,formState:{errors},watch} = useForm<FormType>();
   
    const [bannerbgPreview,setBannerBgPreview]= useState<string>("");
    const [blogbgPreview,setBlogBgPreview] = useState<string>("");
    const [homepageBgPreview, setHomepageBgPreview] = useState<string>("")
    if(isLoading){
        return(
            <div>...Loading</div>
        )
    }
    if(isError){
        return(
            <div>...Error</div>
        )
    }
    useEffect(()=>{
        if(AboutUsBanner){
            setValue("titleen",AboutUsBanner?.data?.titleen)
            setValue("titlemy",AboutUsBanner?.data?.titlemy)
            setValue("abouten",AboutUsBanner?.data?.abouten)
            setValue("aboutmy",AboutUsBanner?.data?.aboutmy)
            setValue("blogtitleen",AboutUsBanner?.data?.blogtitleen)
            setValue("blogtitlemy",AboutUsBanner?.data?.blogtitlemy)
            setValue("blogen",AboutUsBanner?.data?.blogen)
            setValue("blogmy",AboutUsBanner?.data?.blogmy)
            setValue("homepageblogtitle_en",AboutUsBanner?.data?.homepageblogtitle_en)
            setValue("homepageblogtitle_my",AboutUsBanner?.data?.homepageblogtitle_my)
            setValue("homepageblog_en",AboutUsBanner?.data?.homepageblog_en)
            setValue("homepageblog_my",AboutUsBanner?.data?.homepageblog_my)
            setValue("introductionen",AboutUsBanner?.data?.introductionen)
            setValue("introductionmy",AboutUsBanner?.data?.introductionmy)
            /* Set preview Photos */
            setBannerBgPreview(AboutUsBanner?.data?.bannerbgimg);
            setBlogBgPreview(AboutUsBanner?.data?.homepageblogimg)
            setHomepageBgPreview(AboutUsBanner?.data?.homepageblogimg)
        }
    },[AboutUsBanner,setValue])

    /* Watch files for updated Previews */
    const BannerBgFileList = watch("bannerBgFile");
    const BlogBgFileList = watch("backgroundBlogFile");
    const HomepageBlogFileList = watch("homepageblogfile")
     useEffect(()=>{
        if(BannerBgFileList&&BannerBgFileList.length>0){
            const file = BannerBgFileList[0];
            setBannerBgPreview(URL.createObjectURL(file));
        }
     },[BannerBgFileList]);

     useEffect(()=>{
        if(BlogBgFileList&&BlogBgFileList.length>0){
            const file = BlogBgFileList[0];
            setBlogBgPreview(URL.createObjectURL(file));
        }
     },[BlogBgFileList])

     useEffect(()=>{
        if(HomepageBlogFileList&&HomepageBlogFileList.length>0){
            const file = HomepageBlogFileList[0];
            setHomepageBgPreview(URL.createObjectURL(file))
        }
     })
    const titleen = watch("titleen");

    const onSubmit:SubmitHandler<FormType> =async(data)=>{
        console.log(data)
     }
    return(
        <div>
            <h1>{titleen}</h1>
            <h1>Aboutus Banner</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <label htmlFor="titleen">Titleen</label>
                <input 
                {...register("titleen",{required:true})}
                type="text"
                name="titleen" 
                id="titleen"
                />
                {errors?.titleen&&(<div>Titleen required!</div>)}
                </div>
                <div>
                <label htmlFor="titlemy">Titlemy</label>
                <input 
                {...register("titlemy",{required:true})}
                type="text"
                name="titlemy" 
                id="titlemy"
                />
                {errors?.titlemy&&(<div>Titlemy required!</div>)}
                </div>
                {/* About */}
                <div>
                    <label htmlFor="abouten">Abouten</label>
                    <textarea {...register("abouten")} cols={3} name="abouten" />
                </div>
                <div>
                    <label htmlFor="aboutmy">Aboutmy:</label>
                    <textarea {...register("aboutmy")} cols={3}  name="aboutmy" />
                </div>
                {/* Blog title */}
                <div>
                    <label htmlFor="blogtitleen">Blog title En:</label>
                    <input {...register("blogtitleen")} type="text" name="blogtitleen" />
                </div>
                <div>
                    <label htmlFor="blogtitlemy">Blog title My:</label>
                    <input {...register("blogtitlemy")} type="text" name="blogtitlemy" />
                </div>
                {/* Blog */}
                <div>
                    <label htmlFor="blogen">Blog En:</label>
                    <textarea {...register("blogen")} name="blogen" />
                </div>
                <div>
                    <label htmlFor="blogmy">Blog My:</label>
                    <textarea {...register("blogmy")} name="blogmy" />
                </div>
                {/* homepageblogtitle_en */}
                <div>
                    <label htmlFor="homepageblogtitle_en">Home page Blog En:</label>
                    <input {...register("homepageblogtitle_en")} name="homepageblogtitle_en" />
                </div>
                <div>
                    <label htmlFor="homepageblogtitle_my">Home page Blog My:</label>
                    <input {...register("homepageblogtitle_my")} name="homepageblogtitle_my" />
                </div>
                {/* Home page blog */}
                <div>
                    <label htmlFor="homepageblog_en">Home page Blog En:</label>
                    <input {...register("homepageblog_en")} name="homepageblog_en" />
                </div>
                <div>
                    <label htmlFor="homepageblog_my">Home page Blog My:</label>
                    <input {...register("homepageblog_my")} name="homepageblog_my" />
                </div>
                {/* Description */}
                <div>
                    <label htmlFor="introdunctionen">Introductionen:</label>
                    <textarea 
                    {...register("introductionen",{required:true})}
                    rows={5}
                    name="introductionen" 
                    id="introductionen"/>

                  {errors?.introductionen&&(<div>Introductionen required!</div>)}
                </div>
                <div>
                    <label htmlFor="introdunctionmy">Introductionmy:</label>
                    <textarea 
                    {...register("introductionmy",{required:true})}
                    rows={5}
                    name="introductionmy" 
                    id="introductionmy"/>

                  {errors?.introductionmy&&(<div>Introductionmy required!</div>)}
                </div>

                {/* Banner Bg Img */}
                <div>
                    <label>Current Banner Background</label>
                    {bannerbgPreview&&(
                        <img 
                        src={bannerbgPreview} 
                        alt="Banner Background Preview" 
                        style={{ width: 200, display: "block", marginBottom: 8 }}
                        />
                    )}

                    <input {...register("bannerBgFile")} type="file" accept='image/*' />
                </div>

                {/* Blog Bg Img */}
                <div>
                    <label>Current Blog Img</label>
                    {blogbgPreview&&(
                        <img 
                        src={blogbgPreview} 
                        alt="Blog Background Preview Photo"
                        className="w-[200px] block mb-8"
                        />
                    )}
                    <input {...register("backgroundBlogFile")} type="file" accept="image/*" />
                </div>
                {/* Home Bg Img */}
                <div>
                    <label>Current Homepage Blog Img</label>
                    {homepageBgPreview&&(
                        <img 
                        src={homepageBgPreview} 
                        alt="Blog Background Preview Photo"
                        className="w-[200px] block mb-8"
                        />
                    )}
                    <input {...register("homepageblogfile")} type="file" accept="image/*" />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}