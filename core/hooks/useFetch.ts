import useSWR from "swr";
import http from "@/core/http";
import { DefaultFetchConfig } from "../constants/types";

export default function useFetch(
  url: string | null,
  config?: DefaultFetchConfig
) {
  return useSWR(
    url,
    (url: string) => http.get(url).then((res: any) => res),
    config
  );
}
