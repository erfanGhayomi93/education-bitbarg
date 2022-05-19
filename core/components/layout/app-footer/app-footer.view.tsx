import { Box, Container, Typography } from "@mui/material";
import styles from "./app-footer.module.scss";

type PropTypes = {};
export default function AppFooterView(props: PropTypes) {
  return (
    <Container maxWidth="lg">
      <div className={styles.footer}>
        <div className={styles.box}>
          <Box className={styles.item}>
            <Typography className={styles.title} variant="h6" component="h5">
              آموزش ارز دیجیتال
            </Typography>
            <Typography className={styles.text} variant="body1" component="p">
              “آموزش ارز دیجیتال” مدرسه آموزش حرفه‌ای مبانی و اصول ارز دیجیتال
              برای کاربران فارسی زبان می‌باشد
            </Typography>
          </Box>
          <Box className={styles.item}>
            <Typography className={styles.title} variant="h6" component="h5">
              دسته‌بندی‌ها
            </Typography>
            <ul>
              <li>دسته‌بندی اول</li>
              <li>دسته‌بندی دوم</li>
              <li>دسته‌بندی سوم</li>
              <li>دسته‌بندی چهارم</li>
            </ul>
          </Box>
          <Box className={styles.item}>
            <Typography className={styles.title} variant="h6" component="h5">
              دسترسی سریع
            </Typography>
            <ul>
              <li>تماس ما</li>
            </ul>
          </Box>
        </div>
      </div>
    </Container>
  );
}
