import type { NextPageWithAuthAndLayout } from "@/lib/types";
import type { AppProps } from "next/app";
import "../styles/application.css";
import { ThemeProvider } from "next-themes";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/router";

type AppPropsWithAuthAndLayout = AppProps & {
  Component: NextPageWithAuthAndLayout;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithAuthAndLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session} refetchOnWindowFocus={false}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {Component.auth ? (
          <Auth>{getLayout(<Component {...pageProps} />)}</Auth>
        ) : (
          getLayout(<Component {...pageProps} />)
        )}
      </ThemeProvider>
    </SessionProvider>
  );
}

function Auth({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const isUser = !!session?.user;
  React.useEffect(() => {
    if (status === "loading") return;
    if (!isUser) router.replace("/sign-in");
  }, [isUser, router, status]);

  if (isUser) {
    return <>{children}</>;
  }
  return null;
}

export default MyApp;
