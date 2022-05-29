import { Box, Skeleton, Typography } from "@mui/material";
import styles from "./card-post.module.scss";

export default function SkeletonView() {
  return (
    <div className={styles.cardPost}>
      <Skeleton variant="rectangular" className={styles.image} />
      <div>
        <Box className={styles.topContent}>
          <Skeleton
            variant="rectangular"
            height={32}
            width={120}
            sx={{ marginTop: "4px", borderRadius: 16 }}
          />
          <Skeleton
            variant="rectangular"
            height={25}
            width={80}
            sx={{ marginTop: "4px" }}
          />
        </Box>
        <Box className={styles.content}>
          <Typography variant="h6" component="p">
            <Skeleton
              variant="text"
              width={"100%"}
              height={30}
              sx={{ marginTop: "5px" }}
            />
          </Typography>
        </Box>
      </div>
    </div>
  );
}
