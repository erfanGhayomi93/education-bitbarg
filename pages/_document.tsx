import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa">
        <Head>
          <link rel="stylesheet" href="/fonts/style.css" />
          <meta charSet="UTF-8" />

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
