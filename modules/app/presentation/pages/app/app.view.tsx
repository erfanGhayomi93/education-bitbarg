import { Grow, CssBaseline, IconButton, Typography } from "@mui/material";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
import WarningIcon from "@mui/icons-material/Warning";
import { createRef } from "react";
import AppFooterComponent from "@/core/components/layout/app-footer";
import LoadingComponent from "@/core/components/common/loading";

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
        <LoadingComponent />
        <Component {...pageProps} />
        <AppFooterComponent />
      </SnackbarProvider>
    </>
  );
}
