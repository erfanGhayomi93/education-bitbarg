import ViewSummaryPostsComponent from "@/core/components/common/view-summary-posts";
import HeaderHomeComponent from "../../components/header-home";
import styles from "./home.module.scss";
import MostSeenIcon from "@/public/assets/images/mostSeenPost.svg";
import NewstPostIcon from "@/public/assets/images/newstPost.svg";
import CategoriesIcon from "@/public/assets/images/categories.svg";
import axios from "axios";

type PropTypes = {
  data: any;
  activeCategory?: string;
  setActiveCategory?: any;
};
const fetcher = async (url: any) => {
  return await axios.get(url).then((res) => res.data);
};

export default function HomeView({
  data,
  activeCategory,
  setActiveCategory,
}: PropTypes) {
  const { mostSeenPosts, newestPosts, categories, categoryPosts } = data.items;

  return (
    <div className={styles.home}>
      <HeaderHomeComponent />
      <ViewSummaryPostsComponent data={mostSeenPosts} title={MostSeenIcon} />
      <ViewSummaryPostsComponent data={newestPosts} title={NewstPostIcon} />
      <ViewSummaryPostsComponent
        data={categoryPosts}
        title={CategoriesIcon}
        category={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </div>
  );
}
