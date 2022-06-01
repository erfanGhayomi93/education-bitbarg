import useFetch from "@/core/hooks/useFetch";
import { json } from "stream/consumers";

export const getCategoriesListDs = () => {
   return useFetch("/categories" ,{
    revalidateOnMount : true ,
    revalidateOnFocus : false
   })
}

export const getSearchKeyDs = (key : string) => {
   return useFetch(`/search?key=${(encodeURI(key))}` ,{
    revalidateOnMount : false ,
    revalidateOnFocus : false ,
    isPaused : () => (key && key.length > 2) ? false : true
   })
}
