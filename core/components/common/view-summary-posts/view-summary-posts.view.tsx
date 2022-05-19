import {
  CAtegory,
  POst,
} from "@/modules/home/presentation/pages/home/home.view";
import { Box, Button, Chip, Container, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import CardPostComponent from "../card-post";
import styles from "./view-summary-posts.module.scss";
import DoneIcon from "@mui/icons-material/Done";

type PropTypes = {
  data: {
    title: string;
    posts: POst[];
    listCategories?: CAtegory[];
    isCategory?: boolean;
  };
};

export default function viewSummaryPostsView({ data }: PropTypes) {
  return (
    <>
      <Container
        maxWidth="lg"
        className={styles.summaryPosts}
        style={{ marginBottom: data.isCategory ? "0" : "40px" }}
      >
        <div className={styles.parentTitle}>
          <Box className={styles.title}>
            <Image src={data.title} />
          </Box>
          {data.isCategory && data?.listCategories && (
            <Box className={styles.chips}>
              <Stack direction="row" spacing={1}>
                {data?.listCategories.map((item: CAtegory, ind: number) => (
                  <Chip
                    key={ind}
                    label={item.faTitle}
                    className={styles.chip}
                    variant="filled"
                    clickable
                    color="info"
                    deleteIcon={<DoneIcon />}
                    onDelete={undefined}
                    // onClick={handleClick}
                  />
                ))}
              </Stack>
            </Box>
          )}
        </div>
        <Box className={styles.box}>
          {data.posts.map((item, ind) => (
            <CardPostComponent key={ind} data={item} />
          ))}
        </Box>
      </Container>
      {data.isCategory && (
        <Container>
          <Box className={styles.showMore}>
            <Button fullWidth variant="outlined" color="inherit">
              مشاهده بیش‌تر
            </Button>
          </Box>
        </Container>
      )}
    </>
  );
}
