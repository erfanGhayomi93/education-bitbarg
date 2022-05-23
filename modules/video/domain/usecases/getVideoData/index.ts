import { VideoDatasource } from "../../../data/datasources/video.datasource"


export default async function getDetailsData(enTitle : any) {
    const {result , error} = await VideoDatasource(enTitle)

    if(error) return {error}
    return {data : result}
}