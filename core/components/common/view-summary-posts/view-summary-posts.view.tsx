import { POst } from "@/modules/home/presentation/pages/home/home.view";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CardPostComponent from "../card-post";
import styles from "./view-summary-posts.module.scss";
import timeLineIcon from "@/public/assets/images/time-line.svg";

type PropTypes = {
  data: {
    title: string;
    icon: string;
    posts: POst[];
  };
};

export default function viewSummaryPostsView({ data }: PropTypes) {
  return (
    <Container maxWidth="lg" className={styles.summaryPosts}>
      <Box className={styles.title}>
        <Image src={data.title} />
      </Box>
      <div className={styles.wrapper}>
        <div className={styles.parent}>
          <Box className={styles.box}>
            {data.posts.map((item, ind) => (
              <CardPostComponent key={ind} data={item} />
            ))}
          </Box>
        </div>
      </div>
    </Container>
  );
}
