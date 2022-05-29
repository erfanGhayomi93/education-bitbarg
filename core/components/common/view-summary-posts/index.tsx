import { CAtegory, POst } from "@/modules/home/domain/entities/home";
import ViewSummaryPostsView from "./view-summary-posts.view";

type PropTypes = {
  title: any;
  data: POst[];
  category?: CAtegory[];
  activeCategory?: string | null;
  setActiveCategory?: any;
  isValidating: boolean;
};
export default function ViewSummaryPostsComponent(props: PropTypes) {
  const { activeCategory, setActiveCategory, isValidating } = props;
  return (
    <ViewSummaryPostsView
      {...props}
      isValidating={isValidating}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
    />
  );
}
