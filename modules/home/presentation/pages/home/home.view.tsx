import ViewSummaryPostsComponent from "@/core/components/common/view-summary-posts";
import HeaderHomeComponent from "../../components/header-home";
import styles from "./home.module.scss";
import MostSeenIcon from "@/public/assets/images/mostSeenPost.svg";
import NewstPostIcon from "@/public/assets/images/newstPost.svg";
import CategoriesIcon from "@/public/assets/images/categories.svg";

type PropTypes = {
  data: any;
  activeCategory?: string;
  setActiveCategory?: any;
  dataCategoriesItems?: any;
};

export default function HomeView({
  data,
  activeCategory,
  setActiveCategory,
  dataCategoriesItems,
}: PropTypes) {
  const { mostSeenPosts, newestPosts, categories, categoryPosts } = data.items;

  return (
    <div className={styles.home}>
      <HeaderHomeComponent />
      <ViewSummaryPostsComponent data={mostSeenPosts} title={MostSeenIcon} />
      <ViewSummaryPostsComponent data={newestPosts} title={NewstPostIcon} />
      <ViewSummaryPostsComponent
        data={dataCategoriesItems?.result?.items.posts || categoryPosts}
        title={CategoriesIcon}
        category={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </div>
  );
}
