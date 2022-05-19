import { POst } from "@/modules/home/presentation/pages/home/home.view";
import ViewSummaryPostsView from "./view-summary-posts.view";

type PropTypes = {
  data: {
    title: string;
    icon: string;
    posts: POst[];
  };
};

export default function ViewSummaryPostsComponent({ data }: PropTypes) {
  return <ViewSummaryPostsView data={data} />;
}
