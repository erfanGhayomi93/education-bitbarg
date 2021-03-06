import HomeView from "./home.view";
import getHomeData from "@/modules/home/domain/usecases/getHomeData";
import { GetStaticPaths, GetStaticProps } from "next";
import { useGetCategoryDs } from "@/modules/home/data/datasources/home.getCategory";
import { useState } from "react";

type PropTypes = {
  data: any;
};
export default function HomeComponent(props: PropTypes) {
  const { categories } = props.data.items;
  const [activeCategory, setActiveCategory] = useState(categories[0].enTitle);
  const { data, isValidating } = useGetCategoryDs(activeCategory);
  return (
    <HomeView
      {...props}
      dataCategoriesItems={data}
      isValidating={isValidating}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const mainDate = await getHomeData();

  if (!mainDate.data || mainDate.error) throw mainDate.error;

  return {
    props: {
      data: mainDate.data,
    },
    revalidate: 60,
  };
};
