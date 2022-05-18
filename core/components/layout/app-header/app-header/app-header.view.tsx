import { Container, Box, Typography } from "@mui/material";
import styles from "./app-header.module.scss";
import Link from "next/link";
import SearchFieldComponent from "./components/search-field";
import { useState } from "react";
import LogoMenuComponent from "./components/logo-menu";
import SignInButtonComponent from "./components/sign-in-button";

type PropTypes = {};
export default function AppHeaderView(props: PropTypes) {
  const [valueSearch, setvalueSearch] = useState("");

  return (
    <header>
      <Container maxWidth="lg">
        <div className={styles.header}>
          <Box>
            <LogoMenuComponent />
          </Box>
          <Box className={styles.menu}>
            <ul>
              <li>
                <Link href="/" passHref>
                  <Typography variant="body1" component="a">
                    خانه
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <Typography variant="body1" component="a">
                    آموزش ها
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <Typography variant="body1" component="a">
                    تماس با ما
                  </Typography>
                </Link>
              </li>
            </ul>
          </Box>
          <Box className={styles.textField}>
            <SearchFieldComponent
              value={valueSearch}
              setvalue={setvalueSearch}
            />
          </Box>
          <Box>
            <SignInButtonComponent />
          </Box>
        </div>
      </Container>
    </header>
  );
}
