import http from "@/core/http";
import useSWRInfinite from "swr/infinite";

export const perPage = 8

export const searchDatasource = (key : any) => {
    return http.get(`/search?key=${encodeURI(key)}&perPage=${perPage}&page=1`)
}

export const useSearchDs = (key: any , fallback : any) => {
    return useSWRInfinite(
       (index) => key ? `/search?key=${encodeURI(key)}&perPage=${perPage}&page=${index + 1}` : null,
       (url: string) => http.get(url).then((res: any) => res),
       {
           revalidateOnFocus : false ,
           revalidateOnMount : true ,
           fallbackData : [fallback]
       }
      );
}