import useFetch from "@/core/hooks/useFetch";
import { json } from "stream/consumers";

export const getCategoriesListDs = () => {
   return useFetch("/categories" ,{
    revalidateOnMount : true ,
    revalidateOnFocus : false
   })
}

export const getSearchKeyDs = (key : string) => {
   return useFetch(`/search?key=${key}` ,{
    revalidateOnMount : false ,
    revalidateOnFocus : false ,
    isPaused : () => !key ? true : false
   })
}
