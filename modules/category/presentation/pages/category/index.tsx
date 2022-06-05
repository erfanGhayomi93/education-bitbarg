import {
  getCategoriesListPaths,
  getCategoryData,
  useCategoriesLoadMore,
} from "@/modules/category/domain/usecases/getCategoryData";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";
import CategoryView from "./category.view";

type PropTypes = {
  dataServer: any;
};

export default function CategoryComponent(props: PropTypes) {
  const router = useRouter();
  const { data, error, mutate, size, setSize, isValidating } =
    useCategoriesLoadMore(router?.query?.enTitle, props.dataServer);

  const dataFinal = useMemo(() => {
    let result: { items: any[]; meta: any } = { items: [], meta: {} };

    data?.forEach((items: any) => {
      items?.result?.items?.posts.forEach((post: any) => {
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

  return <CategoryView {...allProps} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const dataServer = await getCategoryData(context?.params?.enTitle);

  if (!dataServer.data?.result || dataServer.error) throw dataServer.error;

  return {
    props: {
      dataServer: dataServer.data,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: any = async () => {
  const pathsCategory = await getCategoriesListPaths();

  const setPaths = () => {
    if (!pathsCategory?.data) {
      return []
    }

    return (pathsCategory?.data?.items?.map((item: any) => ({
      params: { enTitle: item?.enTitle }
    })))
  }

  return {
    paths: setPaths(),
    fallback: true,
  };
};
