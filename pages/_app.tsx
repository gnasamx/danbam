import type { NextPageWithAuthAndLayout } from "@/lib/types";
import type { AppProps } from "next/app";
import "../styles/globals.css";

type AppPropsWithAuthAndLayout = AppProps & {
  Component: NextPageWithAuthAndLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithAuthAndLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
