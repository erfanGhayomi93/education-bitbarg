import { getHomeDataDS } from "../../data/datasources/home.datasource";

export default async function getHomeData() {
  const { result, error } = await getHomeDataDS();

  if (error) return { error };
  return { data: result }
}
