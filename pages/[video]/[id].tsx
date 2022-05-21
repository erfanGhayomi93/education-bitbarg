import VideoDetailsComponent from "@/modules/video/presentation/pages/video-details";
import type { NextPage } from "next";
// import CoinDetailsPage, {
//   getStaticPaths,
//   getStaticProps,
//   PropTypes,
// } from "@/modules/coin/presentation/pages/coin-details";
import Head from "next/head";
type PropTypes = {};

const Coin: NextPage<PropTypes> = () => {
  //   const { coin } = props;
  return (
    <>
      <Head>
        <title>video</title>
      </Head>
      <VideoDetailsComponent />
    </>
  );
};

// export { getStaticPaths, getStaticProps };
export default Coin;
