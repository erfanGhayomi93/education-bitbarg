import TagPage, {
  getStaticProps,
  getStaticPaths,
} from "@/modules/tag/presentation/pages/tag";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type PropTypes = {
  dataServer: any;
};

const Tag: NextPage<PropTypes> = (props) => {
  const router = useRouter();
  let title: any = router?.query?.tag || "";

  return (
    <>
      <Head>
        <meta name="header-title" content={title} />
        <meta name="robots" content="noindex,nofollow" />
        <title>{title}</title>
      </Head>
      <TagPage {...props} />
    </>
  );
};

export default Tag;
export { getStaticProps, getStaticPaths };
