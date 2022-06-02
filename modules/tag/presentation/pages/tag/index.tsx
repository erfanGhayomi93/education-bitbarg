import { getTagData, useTag } from "@/modules/tag/domain/usecases/getTagData";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";
import TagView from "./tag.view";

type PropTypes = {
  dataServer: any;
};

export default function TagPage(props: PropTypes) {
  const router = useRouter();
  const { data, error, mutate, size, setSize, isValidating } = useTag(
    router?.query?.tag,
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

  return <TagView {...allProps} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const dataServer = await getTagData(context?.params?.tag);
  console.log("context", context);

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
    fallback: true,
  };
};
