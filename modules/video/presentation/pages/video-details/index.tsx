import getDetailsData from "@/modules/video/domain/usecases/getVideoData";
import VideoDetailsView from "./video-details.view";
import { GetServerSideProps } from "next";

type PropTypes = {
  data: any;
  isFallback: boolean;
};
export default function VideoDetailsComponent(props: PropTypes) {
  return <VideoDetailsView {...props} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const detailsData = await getDetailsData(context?.params?.id);

  if (!detailsData.data || detailsData.error) throw detailsData.error;

  return {
    props: {
      data: detailsData.data,
    },
  };
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     paths: [],
//     fallback: true,
//   };
// };

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
