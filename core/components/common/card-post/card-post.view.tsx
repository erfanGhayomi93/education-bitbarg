import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./card-post.module.scss";
import timeLineIcon from "@/public/assets/images/time-line.svg";
import { POst } from "@/modules/home/presentation/pages/home/home.view";

type PropTypes = {
  data: POst;
};
export default function CardPostView({ data }: PropTypes) {
  return (
    <div className={styles.cardPost}>
      <Box
        className={styles.image}
        style={{
          background: `url(${data.image})`,
        }}
      ></Box>
      <div>
        <Box className={styles.topContent}>
          <Typography
            className={styles.category}
            variant="body1"
            component="span"
          >
            {data.category}
          </Typography>
          <Box display="flex">
            <Image src={timeLineIcon} />
            <Typography
              className={styles.publishedAt}
              variant="body1"
              component="span"
            >
              {data.publishedAt}
            </Typography>
          </Box>
        </Box>
        <Box className={styles.content}>
          <Typography variant="h6" component="p">
            {data.faTitle}
          </Typography>
        </Box>
      </div>
    </div>
  );
}
