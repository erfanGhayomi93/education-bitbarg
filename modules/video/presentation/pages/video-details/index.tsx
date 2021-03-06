import getDetailsData from "@/modules/video/domain/usecases/getVideoData";
import VideoDetailsView from "./video-details.view";
import { GetStaticPaths, GetStaticProps } from "next";

type PropTypes = {
  data: any;
  isFallback: boolean;
};
export default function VideoDetailsComponent(props: PropTypes) {
  return <VideoDetailsView {...props} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const detailsData = await getDetailsData(context?.params?.enTitle);

  if (!detailsData.data || detailsData.error) throw detailsData.error;

  return {
    props: {
      data: detailsData.data,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
