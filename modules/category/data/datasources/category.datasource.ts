import http from "@/core/http";
import useSWRInfinite from "swr/infinite";

export const perPage = 4


export function CategoryDatasource(enTitle : string | string[] | undefined) {
    return http.get(`/categories/${enTitle}?perPage=${perPage}&page=1`)
}

export const useCategoriesLoadMoreDs = (enTitle: string | string[] | undefined , fallback : any) => {

    return useSWRInfinite(
       (index) => enTitle ? `/categories/${enTitle}?perPage=${perPage}&page=${index + 1}` : null,
       (url: string) => http.get(url).then((res: any) => res),
       {
           revalidateOnFocus : false ,
           revalidateOnMount : true ,
           fallbackData : [fallback]
       }
      );
}