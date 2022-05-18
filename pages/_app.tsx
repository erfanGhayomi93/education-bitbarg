import "@/core/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { themeLight, themeDark } from "@/core/theme";
import { CacheProvider, EmotionCache, jsx } from "@emotion/react";
import createEmotionCache from "@/core/theme/emotionCache";
import createRtlCache from "@/core/theme/rtl";
import localize from "@/core/localization";
import AppComponent from "@/modules/app/presentation/pages/app";
import useAppTheme from "@/core/hooks/useAppTheme";
import { ThemeProvider } from "@mui/material/styles";

const clientSideEmotionCache = createEmotionCache();
const clientSideRtlCache = createRtlCache();

type PropTypes = AppProps & {
  emotionCache?: EmotionCache;
  rtlCache?: EmotionCache;
  Component: any;
};
export default function Root(props: PropTypes) {
  return <App {...props} />;
}

function App(props: PropTypes) {
  const theme = useAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={props.emotionCache || clientSideEmotionCache}>
        <CacheProvider value={props.rtlCache || clientSideRtlCache}>
          <Head>
            <title>{localize("APP__TITLE")}</title>
            <meta name="description" content="Descriptions" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
            <meta
              name="theme-color"
              content={
                (true ? themeDark : themeLight).palette.background.default
              }
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <AppComponent {...props} />
        </CacheProvider>
      </CacheProvider>
    </ThemeProvider>
  );
}
