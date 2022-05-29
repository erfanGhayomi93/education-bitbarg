import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/pwa/icons/icon-192x192.png"
          />
          <link rel="stylesheet" href="/fonts/style.css" />

          {(this.props as any).emotionStyleTags}
        </Head>
        <body dir="rtl" id="bitbarg">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
