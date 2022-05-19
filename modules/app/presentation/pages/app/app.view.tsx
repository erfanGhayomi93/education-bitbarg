// import styles from './app.module.scss';
import { Grow, CssBaseline, IconButton } from "@mui/material";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
import WarningIcon from "@mui/icons-material/Warning";
import { createRef } from "react";
import AppHeaderComponent from "@/core/components/layout/app-header";
import AppFooterComponent from "@/core/components/layout/app-footer";

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
        <AppHeaderComponent />
        <Component {...pageProps} />
        <AppFooterComponent />
      </SnackbarProvider>
    </>
  );
}
