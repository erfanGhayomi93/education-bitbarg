import { Box, Container } from "@mui/material";
import { useState } from "react";
import LogoMenuComponent from "../logo-menu";
import SearchFieldComponent from "../search-field";
import SignInButtonComponent from "../sign-in-button";
import styles from "./app-header-responsive.module.scss";

type PropTypes = {};
export default function AppHeaderResponsiveView(props: PropTypes) {
  const [valueSearch, setvalueSearch] = useState("");

  return (
    <Container className={styles.menuResponsive} maxWidth="lg">
      <div className={styles.topHeader}>
        <Box></Box>
        <Box>
          <LogoMenuComponent />
        </Box>
        <Box>
          <SignInButtonComponent />
        </Box>
      </div>
      <div className={styles.textField}>
        <SearchFieldComponent value={valueSearch} setvalue={setvalueSearch} />
      </div>
    </Container>
  );
}
