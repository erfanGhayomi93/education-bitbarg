import { CAtegory, POst } from "@/modules/home/domain/entities/home";
import ViewSummaryPostsView from "./view-summary-posts.view";

type PropTypes = {
  title: any;
  data: POst[];
  category?: CAtegory[];
  activeCategory?: string | null;
  setActiveCategory?: any;
};
export default function ViewSummaryPostsComponent(props: PropTypes) {
  const { activeCategory, setActiveCategory } = props;
  return (
    <ViewSummaryPostsView
      {...props}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
    />
  );
}
