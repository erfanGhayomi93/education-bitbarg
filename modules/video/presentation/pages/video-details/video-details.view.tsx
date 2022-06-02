import { Box, Chip, Container, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./video-details.module.scss";
import timeLineIcon from "@/public/assets/images/time-line.svg";
import ViewSummaryPostsComponent from "@/core/components/common/view-summary-posts";
import SimilarIcon from "@/public/assets/images/similarPosts.svg";
import Icon3 from "@/public/assets/images/icon-3.svg";
import Icon2 from "@/public/assets/images/icon-2.svg";
import VideoDetailsSkeleton from "./video-details.skeleton";
import AppHeaderComponent from "@/core/components/layout/app-header";
import Link from "next/link";

type PropTypes = {
  data: any;
  isFallback: boolean;
};
export default function VideoDetailsView({ data, isFallback }: PropTypes) {
  return (
    <>
      <AppHeaderComponent
        className={styles.header}
        backHref="/"
        absoluteHref
        toolbarContent={
          <>
            <Typography className={styles.headerTitle}>
              {data?.post?.faTitle}
            </Typography>
          </>
        }
        bgcolor="background.paper"
      />
      <Container className={styles.container} maxWidth="lg">
        {!isFallback ? (
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
                  <Link
                    href="/search/[key]"
                    as={`/search/${item.slug}`}
                    key={item.id}
                  >
                    <Typography variant="body1" component="span">
                      {item.slug}
                    </Typography>
                  </Link>
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
        ) : (
          <VideoDetailsSkeleton />
        )}
      </Container>
      <div className={styles.boxViewSummary}>
        <ViewSummaryPostsComponent
          data={data?.relatedPosts}
          title={SimilarIcon}
          isValidating={isFallback}
        />
      </div>
    </>
  );
}
