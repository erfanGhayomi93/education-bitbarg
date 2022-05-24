import { CAtegory, POst } from "@/modules/home/domain/entities/home";
import { Box, Button, Chip, Container, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import CardPostComponent from "../card-post";
import styles from "./view-summary-posts.module.scss";
import DoneIcon from "@mui/icons-material/Done";

type PropTypes = {
  title: any;
  data: POst[];
  category?: CAtegory[];
  setActiveCategory?: any;
  activeCategory?: string | null;
};

export default function viewSummaryPostsView({
  data,
  title,
  category,
  activeCategory,
  setActiveCategory,
}: PropTypes) {
  return (
    <>
      <Container
        maxWidth="lg"
        className={styles.summaryPosts}
        style={{ marginBottom: category ? "0" : "40px" }}
      >
        <div className={styles.parentTitle}>
          <Box className={styles.title}>
            <Image src={title} />
          </Box>
          {category && (
            <Box className={styles.chips}>
              <Stack direction="row" spacing={1}>
                {category.map((item: CAtegory, ind: number) => (
                  <Chip
                    key={ind}
                    label={item.faTitle}
                    className={styles.chip}
                    variant={
                      activeCategory === item.enTitle ? "filled" : "outlined"
                    }
                    clickable={false}
                    color="info"
                    deleteIcon={<DoneIcon />}
                    onDelete={undefined}
                    onClick={() => setActiveCategory(item.enTitle)}
                  />
                ))}
              </Stack>
            </Box>
          )}
        </div>
        <Box className={styles.box}>
          {data.map((item, ind) => (
            <CardPostComponent key={ind} data={item} />
          ))}
        </Box>
      </Container>
      {category && (
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
