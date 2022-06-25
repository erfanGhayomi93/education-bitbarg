import SearchComponent, {
  getStaticProps,
  getStaticPaths,
} from "@/modules/search/presentation/pages/search";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type PropTypes = {
  dataServer: any;
};

const Search: NextPage<PropTypes> = (props) => {
  const router = useRouter();
  let title: any = router?.query?.key || "";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="header-title" content={title} />
      </Head>
      <SearchComponent {...props} />
    </>
  );
};

export default Search;
export { getStaticProps, getStaticPaths };
