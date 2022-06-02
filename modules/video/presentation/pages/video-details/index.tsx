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
  const detailsData = await getDetailsData(context?.params?.id);

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
    fallback: true,
  };
};

// export const getStaticPaths = async () => {
//   const categoriesList = await getCategoriesList();

//   console.log("categoriesList", categoriesList);
//   return {
//     paths: categoriesList?.result?.items.map((item : any) => ({
//       {params : {id : item.enTitle}}
//     })),
//     fallback: true,
//   };
// };
