import type { NextPageWithAuthAndLayout } from "@/lib/types";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

type AppPropsWithAuthAndLayout = AppProps & {
  Component: NextPageWithAuthAndLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithAuthAndLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
