import { searchDatasource, useSearchDs } from "@/modules/search/data/datasources/search.datasource";


export const getSearchData = async (key : any) => {
    const data = await searchDatasource(key)

    if(data.error) return {error : data.error}

    return {data}
}

export const useSearch = (key : any , fallback : any) => {
    return useSearchDs(key , fallback)
}