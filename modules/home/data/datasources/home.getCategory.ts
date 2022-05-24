import useFetch from "@/core/hooks/useFetch";

export function useGetCategoryDs(enTitle : string | null) {
    return useFetch(`/categories/${enTitle}?perPage=8&page=1`,{
        revalidateOnMount : true ,
        revalidateOnFocus : false
    })
}
