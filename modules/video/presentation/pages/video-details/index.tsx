import getDetailsData from "@/modules/video/domain/usecases/getVideoData";
import VideoDetailsView from "./video-details.view";
import { GetStaticPaths, GetStaticProps } from "next";

type PropTypes = {
  data: any;
};
export default function VideoDetailsComponent(props: PropTypes) {
  return <VideoDetailsView {...props} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const [detailsData] = await Promise.all([
    getDetailsData(context?.params?.id),
  ]);

  if (!detailsData.data || detailsData.error) throw detailsData.error;

  return {
    props: {
      data: detailsData.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  console.log("context", context);
  return {
    paths: [{ params: { id: "tire-builder" } }],
    fallback: "blocking",
  };
};
