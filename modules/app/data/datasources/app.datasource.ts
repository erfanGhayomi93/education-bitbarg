import useFetch from "@/core/hooks/useFetch";

export const getCategoriesListDs = () => {
   return useFetch("/categories" ,{
    revalidateOnMount : true ,
    revalidateOnFocus : false
   })
}