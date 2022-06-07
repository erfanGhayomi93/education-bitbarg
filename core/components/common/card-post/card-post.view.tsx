import { Box, Chip, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./card-post.module.scss";
import timeLineIcon from "@/public/assets/images/time-line.svg";
import { POst } from "@/modules/home/domain/entities/home";
import Link from "next/link";

type PropTypes = {
  data: POst;
};
export default function CardPostView({ data }: PropTypes) {
  return (
    <>
      <div className={styles.cardPost}>
        <Link href="/video/[enTitle]" as={`/video/${data.enTitle}`} passHref>
          <a>
            <Box
              className={styles.image}
              style={{
                backgroundImage: `url(${
                  data.image ? data.image : "/assets/images/defaultImgPost.svg"
                })`,
              }}
            ></Box>
            <div>
              <Box className={styles.topContent}>
                <Chip
                  className={styles.category}
                  label={data.category}
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
          </a>
        </Link>
      </div>
    </>
  );
}
