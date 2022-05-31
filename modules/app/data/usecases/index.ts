import { getCategoriesListDs, getSearchKeyDs } from "../datasources/app.datasource"

export const getCategoriesList = () =>{
    return getCategoriesListDs()
}

export const getSearchKey = (key : string) =>{
    return getSearchKeyDs(key)
}