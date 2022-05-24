import VideoDetailsComponent, {
  getStaticProps,
  getStaticPaths,
} from "@/modules/video/presentation/pages/video-details";
import type { NextPage } from "next";
import Head from "next/head";

type PropTypes = {
  data: any;
};

const VideoDetails: NextPage<PropTypes> = (props) => {
  const { faTitle } = props.data.post;
  return (
    <>
      <Head>
        <title>{faTitle}</title>
      </Head>
      <VideoDetailsComponent {...props} />
    </>
  );
};

export default VideoDetails;
export { getStaticProps, getStaticPaths };
