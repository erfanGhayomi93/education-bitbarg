import {
  getSearchData,
  useSearch,
} from "@/modules/search/domain/usecases/getSearchData";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";
import SearchView from "./search.view";

type PropTypes = {
  dataServer: any;
};

export default function SearchComponent(props: PropTypes) {
  const router = useRouter();
  const { data, error, mutate, size, setSize, isValidating } = useSearch(
    router?.query?.key,
    props.dataServer
  );

  const dataFinal = useMemo(() => {
    let result: { items: any[]; meta: any } = { items: [], meta: {} };

    data?.forEach((items: any) => {
      items?.result?.items?.forEach((post: any) => {
        result.items.push(post);
      });
    });

    if (data) result.meta = data[data.length - 1]?.result?.meta;

    return result;
  }, [data, router.isFallback]);

  const allProps = {
    ...props,
    data: dataFinal,
    error,
    mutate,
    size,
    setSize,
    isValidating,
    router,
  };

  return <SearchView {...allProps} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const dataServer = await getSearchData(context?.params?.key);

  if (!dataServer.data?.result || dataServer.error) throw dataServer.error;

  return {
    props: {
      dataServer: dataServer.data,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
