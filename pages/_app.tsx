import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import SSRProvider from "react-bootstrap/SSRProvider";
import type { AppProps } from "next/app";
import NavigationBar from "../components/navigation/NavigationBar";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <SSRProvider>
        <NavigationBar />
        <Component {...pageProps} />
      </SSRProvider>
    </UserProvider>
  );
}

export default MyApp;
