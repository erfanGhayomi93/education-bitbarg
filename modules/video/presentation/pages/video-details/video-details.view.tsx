import { Box, Chip, Container, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./video-details.module.scss";
import timeLineIcon from "@/public/assets/images/time-line.svg";
import ViewSummaryPostsComponent from "@/core/components/common/view-summary-posts";
import SimilarIcon from "@/public/assets/images/similarPosts.svg";
import Icon3 from "@/public/assets/images/icon-3.svg";
import Icon2 from "@/public/assets/images/icon-2.svg";
import { useEffect } from "react";

type PropTypes = {
  data: any;
};
export default function VideoDetailsView({ data }: PropTypes) {
  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <>
      <Container className={styles.container} maxWidth="lg">
        <div className={styles.boxVideo}>
          <Box className={styles.video}>
            <iframe
              src={data.post.url}
              allowFullScreen={true}
              className={styles.iframe}
            />
          </Box>
          <Box className={styles.details}>
            <div className={styles.topDetails}>
              <Chip
                className={styles.chip}
                label={data.post.category}
                variant="filled"
                color="info"
              />
              <Box display="flex">
                <Image src={timeLineIcon} />
                <Typography
                  className={styles.publishedAt}
                  variant="body1"
                  component="span"
                >
                  {data.post.publishedAt}
                </Typography>
              </Box>
            </div>
            <Typography className={styles.title} variant="h3" component="h3">
              {data.post.faTitle}
            </Typography>
            <Typography className={styles.text} variant="h6" component="p">
              {data.post.description}
            </Typography>
            <Box className={styles.tags}>
              {data.post.tags.map((item: any) => (
                <Typography variant="body1" component="span" key={item.id}>
                  {item.slug}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box className={styles.icon1}>
            <Image src={Icon3} />
          </Box>
          <Box className={styles.icon2}>
            <Image src={Icon2} />
          </Box>
        </div>
      </Container>
      <div className={styles.boxViewSummary}>
        {/* <ViewSummaryPostsComponent data={dataSimilarPosts} /> */}
      </div>
    </>
  );
}

const dataSimilarPosts = {
  title: SimilarIcon,
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

// const data = {
//   src: "",
//   publishedAt: "5 دقیقه",
//   category: "کیف پول",
//   faTitle: "آموزش ساخت کیف پول با استفاده از تراست ولت",
//   text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
//   tags: ["#کیف_پول", "#کیف_پول", "#کیف_پول"],
// };
