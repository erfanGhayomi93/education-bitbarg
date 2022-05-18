// import styles from './app.module.scss';
import { Grow, CssBaseline, IconButton, Hidden } from "@mui/material";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
import WarningIcon from "@mui/icons-material/Warning";
import { createRef } from "react";
import AppHeaderComponent from "@/core/components/layout/app-header/app-header";
import AppHeaderResponsiveComponent from "@/core/components/layout/app-header/app-header/components/app-header-responsive";

export default function AppView(props: AppProps) {
  const { Component, pageProps } = props;
  const notistackRef = createRef<any>();

  const onClickDismiss = (key: any) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        TransitionComponent={Grow as any}
        ref={notistackRef}
        autoHideDuration={3000}
        action={(key) => (
          <IconButton color="inherit" onClick={onClickDismiss(key)}>
            <CloseIcon />
          </IconButton>
        )}
        iconVariant={{
          error: <WarningIcon sx={{ mr: 1 }} />,
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <CssBaseline />
        <Hidden mdDown>
          <AppHeaderComponent />
        </Hidden>
        <Hidden mdUp>
          <AppHeaderResponsiveComponent />
        </Hidden>

        <Component {...pageProps} />
      </SnackbarProvider>
    </>
  );
}
