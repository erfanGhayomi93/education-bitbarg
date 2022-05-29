import { Box, Container, Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./video-details.module.scss";
import Icon3 from "@/public/assets/images/icon-3.svg";
import Icon2 from "@/public/assets/images/icon-2.svg";

export default function VideoDetailsSkeleton() {
  return (
    <>
      <Container className={styles.container} maxWidth="lg">
        <div className={styles.boxVideo}>
          <Skeleton
            variant="rectangular"
            className={styles.video}
            sx={{ borderRadius: 3 }}
          />

          <Box className={styles.details}>
            <div className={styles.topDetails}>
              <Skeleton
                variant="rectangular"
                height={32}
                width={120}
                sx={{ margin: "4px 0", borderRadius: 16 }}
              />
              <Skeleton
                variant="rectangular"
                height={32}
                width={80}
                sx={{ margin: "4px 0" }}
              />
            </div>
            <Typography className={styles.title} variant="h3" component="h3">
              <Skeleton variant="text" />
            </Typography>
            <Typography className={styles.text} variant="h6" component="p">
              <Skeleton variant="text" />
            </Typography>
            <Box className={styles.tags}>
              {Array.from(Array(6)).map((item: any, ind: number) => (
                <Typography variant="body1" component="span" key={ind}>
                  <Skeleton width={80} height={20} variant="text" />
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
    </>
  );
}
