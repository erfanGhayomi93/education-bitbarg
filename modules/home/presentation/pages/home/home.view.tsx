import ViewSummaryPostsComponent from "@/core/components/common/view-summary-posts";
import HeaderHomeComponent from "../../components/header-home";
import MostSeenIcon from "@/public/assets/images/mostSeenPost.svg";
import NewstPostIcon from "@/public/assets/images/newstPost.svg";
import CategoriesIcon from "@/public/assets/images/categories.svg";
import AppHeaderComponent from "@/core/components/layout/app-header";
import styles from "./home.module.scss";
import { Box, Typography } from "@mui/material";

type PropTypes = {
  data: any;
  activeCategory?: string;
  isValidating: boolean;
  setActiveCategory?: any;
  dataCategoriesItems?: any;
};

export default function HomeView({
  data,
  activeCategory,
  isValidating,
  setActiveCategory,
  dataCategoriesItems,
}: PropTypes) {
  const { mostSeenPosts, newestPosts, categories, categoryPosts } = data.items;

  return (
    <div>
      <AppHeaderComponent
        className={styles.header}
        backHref="/"
        absoluteHref
        toolbarContent={
          <>
            <Typography variant="h6" className={styles.headerTitle}>
              آموزش‌
            </Typography>
          </>
        }
        bgcolor="background.paper"
      />

      <HeaderHomeComponent {...data.meta} />

      <ViewSummaryPostsComponent
        data={mostSeenPosts}
        title={MostSeenIcon}
        isValidating={false}
      />
      <ViewSummaryPostsComponent
        data={newestPosts}
        title={NewstPostIcon}
        isValidating={false}
      />
      <ViewSummaryPostsComponent
        data={dataCategoriesItems?.result?.items.posts || categoryPosts}
        title={CategoriesIcon}
        category={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        isValidating={isValidating}
      />
    </div>
  );
}
