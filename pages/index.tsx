import type { NextPage } from "next";
import Head from "next/head";
import HomePage, {
  getStaticProps,
} from "@/modules/home/presentation/pages/home";

const Home: NextPage = (props: any) => {
  return (
    <div>
      <Head>
        <title>آموزش</title>
        <meta name="header-title" content={"آموزش"} />
      </Head>

      <HomePage {...props} />
    </div>
  );
};

export default Home;
export { getStaticProps };
