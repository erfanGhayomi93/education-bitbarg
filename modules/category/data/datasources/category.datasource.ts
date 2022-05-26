import http from "@/core/http";
import useSWRInfinite from "swr/infinite";


export function CategoryDatasource(enTitle : string | string[] | undefined) {
    return http.get(`/categories/${enTitle}?perPage=2&page=1`)
}

export const useCategoriesLoadMoreDs = (enTitle: string | string[] | undefined , fallback : any) => {

    return useSWRInfinite(
       (index) => `/categories/${enTitle}?perPage=2&page=${index + 1}`,
       (url: string) => http.get(url).then((res: any) => res),
       {
           revalidateOnFocus : false ,
           revalidateOnMount : true ,
           fallbackData : [fallback]
       }
      );
}