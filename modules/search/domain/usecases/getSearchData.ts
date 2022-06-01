import { searchDatasource, useSearchDs } from "@/modules/search/data/datasources/search.datasource";


export const getSearchData = async (type : any ,key : any) => {
    const data = await searchDatasource(type ,key)

    if(data.error) return {error : data.error}

    return {data}
}

export const useSearch = (type : any,key : any , fallback : any) => {
    return useSearchDs(type ,key , fallback)
}