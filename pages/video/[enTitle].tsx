import VideoDetailsComponent, {
  getStaticProps,
  getStaticPaths,
} from "@/modules/video/presentation/pages/video-details";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type PropTypes = {
  data: any;
};

const VideoDetails: NextPage<PropTypes> = (props) => {
  const router = useRouter();
  // const { faTitle } = props.data.post;

  return (
    <>
      <Head>
        <meta name="header-title" content={props.data.post.faTitle} />
        <title>{props.data.post.faTitle}</title>
      </Head>
      <VideoDetailsComponent
        {...props}
        {...{ isFallback: router.isFallback }}
      />
    </>
  );
};

export default VideoDetails;
export { getStaticProps, getStaticPaths };
