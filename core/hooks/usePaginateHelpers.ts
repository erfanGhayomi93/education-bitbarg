import { useMemo } from "react";
import useDebouncedState from "@/core/hooks/useDebouncedState";
import { ParsedUrlQuery } from "querystring";
import { InfiniteFetchConfig } from "./useInfiniteFetch";

export type GetPaginateHookType<T> = (
  params?: ParsedUrlQuery,
  config?: InfiniteFetchConfig
) => {
  rows: T[];
  meta?: any;
  size: number;
  setSize: (size: number) => void;
  isLoading: boolean;
  mutate: () => void;
  isValidating?: boolean;
  error?: any;
};

export default function usePaginateHelpers<T = any>(
  getHook: GetPaginateHookType<T>,
  _pageSize: number,
  params?: ParsedUrlQuery,
  config?: InfiniteFetchConfig
) {
  const [inputValue, searchText, setInputValue, setSearchText] =
    useDebouncedState("");
  const { rows, meta, size, setSize, isLoading, mutate, error } = getHook(
    {
      ...params,
      search: searchText,
    },
    config
  );

  const fakeItemCount = useMemo(() => {
    if (!meta?.paginateHelper) return _pageSize;
    const {
      pageSize = _pageSize,
      currentPage,
      lastPage,
      total,
    } = meta.paginateHelper;
    const fakeTotal = pageSize * (currentPage + 1);
    if (fakeTotal > total) {
      return total;
    }
    return fakeTotal + 1;
  }, [meta]);

  const handleItemLoaded = (index: number) => Boolean(rows[index]);
  const handleLoadMore = (start?: number) => {
    if (!meta?.paginateHelper) {
      if (size < 1) {
        setSize(1);
      }
      return;
    }
    const page = start
      ? start / (meta.paginateHelper.pageSize || _pageSize) + 1
      : meta.paginateHelper.currentPage + 1;
    if (page !== Math.floor(page)) return;
    if (size !== page) {
      setSize(page);
    }
  };

  return {
    search: { inputValue, searchText, setInputValue, setSearchText },
    rows,
    meta,
    fakeItemCount,
    handleItemLoaded,
    handleLoadMore,
    isLoading,
    setSize,
    mutate,
    error,
  };
}
