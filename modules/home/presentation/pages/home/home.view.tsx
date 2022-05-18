import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./home.module.scss";
import ImgHome from "@/public/assets/images/img-home.svg";
import Icon1 from "@/public/assets/images/icon-1.svg";
import Icon2 from "@/public/assets/images/icon-2.svg";

type PropTypes = {};
export default function HomeView(props: PropTypes) {
  return (
    <div className={styles.home}>
      <Container maxWidth="lg" className={styles.box}>
        <Box className={styles.icon1}>
          <Image src={Icon1} />
        </Box>
        <div className={styles.content}>
          <Typography variant="h1" component="h1">
            کریپتو کارنسی را با بیت‌برگ یاد بگیرید..!
          </Typography>
          <Typography variant="h6" component="h6">
            مجموعه‌ای از آموزش‌های ارز دیجیتال برای یادگیری ساخت کیف پول، ترید،
            ایردراپ و ... را در ایجاد دنبال کنید
          </Typography>
          <div className={styles.subContent}>
            <Box className={styles.item}>
              <Typography variant="h5" component="span">
                +1,000
              </Typography>
              <Typography variant="h6" component="span">
                آموزش
              </Typography>
            </Box>
            <Box className={styles.item}>
              <Typography variant="h5" component="span">
                +۲۰,000
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
