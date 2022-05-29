import styles from "./header-home.module.scss";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import ImgHome from "@/public/assets/images/img-home.svg";
import Icon1 from "@/public/assets/images/icon-1.svg";
import Icon2 from "@/public/assets/images/icon-2.svg";

type PropTypes = {
  postsCount: number;
  userCount: number;
};
export default function HeaderHomeView({ postsCount, userCount }: PropTypes) {
  return (
    <div className={styles.headerHome}>
      <Container maxWidth="lg" className={styles.box}>
        <Box className={styles.icon1}>
          <Image src={Icon1} />
          deweffsfds
        </Box>
        <div className={styles.content}>
          <Typography variant="h1" component="h1">
            1 کریپتو کارنسی را با بیت‌برگ یاد بگیرید..!
          </Typography>
          <Typography variant="h6" component="h6">
            مجموعه‌ای از آموزش‌های ارز دیجیتال برای یادگیری ساخت کیف پول، ترید،
            ایردراپ و ... را در ایجاد دنبال کنید
          </Typography>
          <div className={styles.subContent}>
            <Box className={styles.item}>
              <Typography variant="h5" component="span">
                +{postsCount}
              </Typography>
              <Typography variant="h6" component="span">
                آموزش
              </Typography>
            </Box>
            <Box className={styles.item}>
              <Typography variant="h5" component="span">
                +{userCount}
              </Typography>
              <Typography variant="h6" component="span">
                کاربر
              </Typography>
            </Box>
          </div>
        </div>
        <div className={styles.image}>
          <Image src={ImgHome} />
        </div>
      </Container>
      <Box className={styles.icon2}>
        <Image src={Icon2} />
      </Box>
    </div>
  );
}
