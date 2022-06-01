import http from "@/core/http";
import useSWRInfinite from "swr/infinite";

export const perPage = 4

export const searchDatasource = (type : any , key : any) => {
    console.log("inside",`/search?${type}=${encodeURI(key)}`)
    return http.get(`/search?${type}=${encodeURI(key)}`)
}

export const useSearchDs = (type : any, key: any , fallback : any) => {
    return useSWRInfinite(
       (index) => key ? `/search?${type}=${encodeURI(key)}&perPage=${perPage}&page=${index + 1}` : null,
       (url: string) => http.get(url).then((res: any) => res),
       {
           revalidateOnFocus : false ,
           revalidateOnMount : true ,
           fallbackData : [fallback]
       }
      );
}