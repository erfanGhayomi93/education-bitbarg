import { CategoryDatasource, categotrisPathDatasource, useCategoriesLoadMoreDs } from "../../data/datasources/category.datasource";


export const getCategoryData = async (enTitle : string | string[] | undefined) => {
    const data = await CategoryDatasource(enTitle)

    if(data.error) return {error : data.error}

    return {data}
}

export const useCategoriesLoadMore = (enTitle : string | string[] | undefined , fallback : any) => {
    return useCategoriesLoadMoreDs(enTitle , fallback)
}

export const getCategoriesListPaths = async () => {
    const {result , error} = await categotrisPathDatasource()

    if(error) return {error}
    return {data : result}
}