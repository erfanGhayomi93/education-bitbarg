import {
  Container,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import styles from "./app-header.module.scss";
import Link from "next/link";
import LogoMenuComponent from "./components/logo-menu";
import AppHeaderResponsiveComponent from "./components/menu-responsive";
import SearchIcon from "@mui/icons-material/Search";

type PropTypes = {};

export interface ITemMenu {
  label: string;
  route: string;
}

const dataMenu: ITemMenu[] = [
  { label: "خانه", route: "/" },
  { label: "آموزش ها", route: "/" },
  { label: "تماس با ما", route: "/" },
];

export default function AppHeaderView(props: PropTypes) {
  return (
    <header>
      <Container maxWidth="lg">
        <div className={styles.header}>
          <Box className={styles.item} display="flex">
            <Box className={styles.menuResponsive}>
              <AppHeaderResponsiveComponent data={dataMenu} />
            </Box>

            <LogoMenuComponent />
          </Box>
          <Box className={`${styles.item} ${styles.menu}`}>
            <ul>
              {dataMenu.map((item, ind) => (
                <li key={ind}>
                  <Link href={item.route} passHref>
                    <Typography variant="body1" component="a">
                      {item.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </Box>
          <Box className={`${styles.item} ${styles.textField}`}>
            <TextField
              fullWidth
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon className={styles.searchIcon} />
                  </InputAdornment>
                ),
              }}
              id="filled-search"
              label="جستجو در آموزش‌ها...‍"
              variant="filled"
            />
          </Box>
          {/* <Box className={styles.item}>
            <Button variant="contained" color="success">
              ورود یا ثبت‌نام
            </Button>{" "}
          </Box> */}
        </div>
      </Container>
    </header>
  );
}
