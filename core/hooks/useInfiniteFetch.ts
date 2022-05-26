import { useEffect, useMemo, useState } from "react";
import useUpdateEffect from "@/core/hooks/useUpdateEffect";
import http from "@/core/http";
import useSWRInfinite, { SWRInfiniteConfiguration } from "swr/infinite";
// import { makeQueryString } from "../helpers";
import { ParsedUrlQuery } from "querystring";

export type InfiniteFetchConfig = SWRInfiniteConfiguration<any, any>;
type InfiniteFetchKeyOptions<RT> = {
  url: string | null;
  params?: ParsedUrlQuery;
  rowBuilder?: (data: any) => RT;
  fetchOnMount?: boolean;
};
export default function useInfiniteFetch<RT = any>(
  { url, params, rowBuilder, fetchOnMount = true }: InfiniteFetchKeyOptions<RT>,
  config?: InfiniteFetchConfig
) {
  const res = useSWRInfinite(
    paginationKeyGenerator(url, params),
    (url: string) => http.get(url).then((res: any) => res),
    config
  );
  const { data, error, size, setSize, isValidating, mutate } = res;
  const [page, setPage] = useState(size || 0);

  // useEffect(() => {
  //   if (
  //     // !isValidating &&
  //     fetchOnMount &&
  //     !data &&
  //     !error &&
  //     size === 1 &&
  //     config &&
  //     config.revalidateOnMount === false
  //   ) {
  //     setSize(1);
  //   }
  // }, []);

  useUpdateEffect(() => {
    if (size !== page) {
      setSize(page);
    }
  }, [page]);

  useUpdateEffect(() => {
    setPage(1);
    // mutate();
  }, [JSON.stringify(params)]);

  const meta = getPaginateMeta(data);
  const rows: RT[] = useMemo(() => {
    return getRows(data, rowBuilder);
  }, [data, rowBuilder]);

  const isLoadingInitialData = Boolean(!data && !error && url);
  const isLoading =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined") ||
    isValidating;

  return {
    ...res,
    setSize: setPage,
    rows,
    meta,
    isLoadingInitialData,
    isLoading,
    error: data ? data[data.length - 1]?.error : undefined,
  };
}

// helpers
function paginationKeyGenerator(url: string | null, params?: ParsedUrlQuery) {
  return (pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.result.items.length) return null;

    // const queryString = makeQueryString(params);
    const queryString = params;

    return url
      ? `${url}?page=${pageIndex + 1}${queryString ? "&" + queryString : ""}`
      : url;
  };
}
function getPaginateMeta(data: any) {
  if (data && data.length && data[data.length - 1]?.result) {
    const {
      pagination_helper: { count, current_page, per_page, total, total_pages },
      ...other
    } = data[data.length - 1].result.meta;
    return {
      paginateHelper: {
        pageSize: count,
        currentPage: current_page,
        perPage: per_page,
        total,
        lastPage: total_pages,
      },
      ...other,
    };
  }
  return {};
}
function getRows(data: any, rowBuilder: any) {
  if (!rowBuilder || !data || !data.length) return [];
  return data.reduce(
    (prev: any, next: any) => [
      ...prev,
      ...(next.result?.items.map(rowBuilder) || []),
    ],
    []
  );
}
