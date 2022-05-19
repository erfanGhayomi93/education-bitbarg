import ViewSummaryPostsComponent from "@/core/components/common/view-summary-posts";
import HeaderHomeComponent from "../../components/header-home";
// import MostSeenPostComponent from "../../components/most-seen-post";
import styles from "./home.module.scss";
import MostSeenIcon from "@/public/assets/images/mostSeenPost.svg";
import NewstPostIcon from "@/public/assets/images/newstPost.svg";
import CategoriesIcon from "@/public/assets/images/categories.svg";

type PropTypes = {};

export interface POst {
  image: string;
  category: string;
  publishedAt: string;
  faTitle: string;
}
export default function HomeView(props: PropTypes) {
  return (
    <div className={styles.home}>
      <HeaderHomeComponent />
      {/* <MostSeenPostComponent /> */}
      <ViewSummaryPostsComponent data={dataMostSeen} />
      <ViewSummaryPostsComponent data={dataNewstPost} />
      <ViewSummaryPostsComponent data={dataCategoriesPost} />
    </div>
  );
}

const dataMostSeen = {
  title: MostSeenIcon,
  icon: "",
  posts: [
    {
      image: "/assets/images/defaultImgPost.svg",
      category: "category1",
      publishedAt: "time1",
      faTitle: "title1",
    },
    {
      image: "/assets/images/defaultImgPost.svg",
      category: "category2",
      publishedAt: "time2",
      faTitle: "title2",
    },
    {
      image: "/assets/images/defaultImgPost.svg",
      category: "category2",
      publishedAt: "time2",
      faTitle: "title2",
    },
    {
      image: "/assets/images/defaultImgPost.svg",
      category: "category2",
      publishedAt: "time2",
      faTitle: "title2",
    },
    {
      image: "/assets/images/defaultImgPost.svg",
      category: "category2",
      publishedAt: "time2",
      faTitle: "title2",
    },
  ],
};

const dataNewstPost = {
  title: NewstPostIcon,
  icon: "",
  posts: [
    {
      image: "/assets/images/defaultImgPost.svg",
      category: "category1",
      publishedAt: "time1",
      faTitle: "title1",
    },
    {
      image: "/assets/images/defaultImgPost.svg",
      category: "category2",
      publishedAt: "time2",
      faTitle: "title2",
    },
    {
      image: "/assets/images/defaultImgPost.svg",
      category: "category2",
      publishedAt: "time2",
      faTitle: "title2",
    },
    {
      image: "/assets/images/defaultImgPost.svg",
      category: "category2",
      publishedAt: "time2",
      faTitle: "title2",
    },
    {
      image: "/assets/images/defaultImgPost.svg",
      category: "category2",
      publishedAt: "time2",
      faTitle: "title2",
    },
  ],
};

const dataCategoriesPost = {
  title: CategoriesIcon,
  icon: "",
  posts: [
    {
      image: "/assets/images/defaultImgPost.svg",
      category: "category1",
      publishedAt: "time1",
      faTitle: "title1",
    },
    {
      image: "/assets/images/defaultImgPost.svg",
      category: "category2",
      publishedAt: "time2",
      faTitle: "title2",
    },
    {
      image: "/assets/images/defaultImgPost.svg",
      category: "category2",
      publishedAt: "time2",
      faTitle: "title2",
    },
    {
      image: "/assets/images/defaultImgPost.svg",
      category: "category2",
      publishedAt: "time2",
      faTitle: "title2",
    },
    {
      image: "/assets/images/defaultImgPost.svg",
      category: "category2",
      publishedAt: "time2",
      faTitle: "title2",
    },
  ],
};
