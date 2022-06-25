import CategoryComponent, {
  getStaticProps,
  getStaticPaths,
} from "@/modules/category/presentation/pages/category";
import type { NextPage } from "next";
import Head from "next/head";

type PropTypes = {
  dataServer: any;
};

const VideoDetails: NextPage<PropTypes> = (props) => {
  // const category = props?.dataServer?.result?.items?.posts[0]?.category;

  return (
    <>
      <Head>
        <title>{props?.dataServer?.result?.items?.posts[0]?.category}</title>
        <meta
          name="header-title"
          content={props?.dataServer?.result?.items?.posts[0]?.category}
        />
      </Head>
      <CategoryComponent {...props} />
    </>
  );
};

export default VideoDetails;
export { getStaticProps, getStaticPaths };
