import styles from "./login-box.module.scss";
import { Box, Typography, Grid, Button } from "@mui/material";

type PropTypes = {
  isDarkTheme: boolean;
  openLogin: () => void;
};
export default function LoginBoxView(props: PropTypes) {
  const { isDarkTheme, openLogin } = props;
  return (
    <Box
      className={styles.loginBox}
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        borderRadius: 2,
        mb: 2.5,
      }}
    >
      <Typography sx={{ mb: 1 }} variant="h6" component="h2" fontWeight={700}>
        ورود به بیت برگ
      </Typography>
      <Typography sx={{ mb: 1.5 }}>
        جهت استفاده از خدمات بیت برگ حساب کاربری خود را بسازید و یا از طریق دکمه
        ورود وارد حساب کاربری خود شوید.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button
            className={isDarkTheme ? styles.darkButton : styles.lightButton}
            variant="contained"
            color="inherit"
            fullWidth
            onClick={openLogin}
          >
            ورود
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Button
            className={isDarkTheme ? styles.darkButton : styles.lightButton}
            variant="contained"
            color="inherit"
            fullWidth
            onClick={openLogin}
          >
            ثبت نام
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
