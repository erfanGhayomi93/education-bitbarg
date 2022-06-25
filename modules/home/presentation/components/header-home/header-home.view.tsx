import styles from "./header-home.module.scss";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import ImgHome from "@/public/assets/images/img-home.svg";
import Icon1 from "@/public/assets/images/icon-1.svg";
import Icon2 from "@/public/assets/images/icon-2.svg";
import Icon1Responsive from "@/public/assets/images/icon-1-responsive.svg";
import Icon2Responsive from "@/public/assets/images/icon-2-responsive.svg";
import SearchInputComponent from "@/core/components/layout/search-input";

type PropTypes = {
  postsCount: number;
  siteVisits: number;
};
export default function HeaderHomeView({ postsCount, siteVisits }: PropTypes) {
  return (
    <>
      <div className={styles.headerHome}>
        <Container maxWidth="lg" className={styles.box}>
          <Box className={styles.icon1}>
            <Image src={Icon1} />
          </Box>
          <Box className={styles.icon1Responsive}>
            <Image src={Icon1Responsive} />
          </Box>
          <div className={styles.content}>
            <Typography variant="h1" component="h1">
              کریپتو کارنسی را با بیت‌برگ یاد بگیرید..!
            </Typography>
            <Typography variant="h6" component="h6">
              مجموعه‌ای از آموزش‌های ارز دیجیتال برای یادگیری ساخت کیف پول،
              ترید، ایردراپ و ... را در اینجا دنبال کنید
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
                  {siteVisits.toLocaleString("en-US")}
                </Typography>
                <Typography variant="h6" component="span">
                  بازدید
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
        <Box className={styles.icon2Responsive}>
          <Image src={Icon2Responsive} />
        </Box>
      </div>
      <Container>
        <Box className={styles.desktopDown}>
          <SearchInputComponent />
        </Box>
      </Container>
    </>
  );
}
