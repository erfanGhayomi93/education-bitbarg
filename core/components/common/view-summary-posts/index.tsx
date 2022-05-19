import {
  CAtegory,
  POst,
} from "@/modules/home/presentation/pages/home/home.view";
import ViewSummaryPostsView from "./view-summary-posts.view";

type PropTypes = {
  data: {
    title: string;
    posts: POst[];
    listCategories?: CAtegory[];
    isCategory?: boolean;
  };
};

export default function ViewSummaryPostsComponent({ data }: PropTypes) {
  return <ViewSummaryPostsView data={data} />;
}
