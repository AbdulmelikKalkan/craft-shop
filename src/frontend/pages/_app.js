// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // 2. Use at the root of your app
    <SessionProvider session={session}>
      <NextUIProvider>
        <ThemeProvider defaultTheme="system" enableSystem={true}>
          <Component {...pageProps} />
        </ThemeProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;
