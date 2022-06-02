import SearchComponent, {
  getServerSideProps,
} from "@/modules/search/presentation/pages/search";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type PropTypes = {
  dataServer: any;
};

const Search: NextPage<PropTypes> = (props) => {
  const router = useRouter();
  return (
    <>
      <Head>{/* <title>{router.query.enTitle}</title> */}</Head>
      <SearchComponent {...props} />
    </>
  );
};

export default Search;
export { getServerSideProps };
