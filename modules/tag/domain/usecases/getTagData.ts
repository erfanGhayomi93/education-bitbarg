import { tagDatasource, useTagDs } from "@/modules/tag/data/datasources/tag.datasource";


export const getTagData = async (key : any) => {
    const data = await tagDatasource(key)

    if(data.error) return {error : data.error}

    return {data}
}

export const useTag = (key : any , fallback : any) => {
    return useTagDs(key , fallback)
}