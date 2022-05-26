import CategoryComponent, {
  getStaticProps,
  getStaticPaths,
} from "@/modules/category/presentation/pages/category";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type PropTypes = {
  dataServer: any;
};

const VideoDetails: NextPage<PropTypes> = (props) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.enTitle}</title>
      </Head>
      <CategoryComponent {...props} />
    </>
  );
};

export default VideoDetails;
export { getStaticProps, getStaticPaths };
