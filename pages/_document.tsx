import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="light">
        <Head>
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/inter-roman.var.woff2"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/vercel.svg" type="image/svg+xml" />
          <meta name="theme-color" content="#111" />
        </Head>
        <body className="dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
