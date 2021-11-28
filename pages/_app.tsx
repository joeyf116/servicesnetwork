import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider'
import type { AppProps } from 'next/app';
import NavigationBar from '../components/navigation/NavigationBar';
import React, { useState } from 'react';
import { SessionProvider } from "next-auth/react";


function MyApp({ Component,
  pageProps: { session, ...pageProps } }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
  const authenticateUser = (): void => {
    setIsLoggedIn(true);
  }

  return (
    <SessionProvider session={session}>
        <SSRProvider>
          <NavigationBar />
          <Component {...pageProps} authenticatedUser={authenticateUser} />
        </SSRProvider>
      </SessionProvider>
  )
}

export default MyApp;

// MonggoDB ATLAS
// jfitzdevelop
// DevelopMongoDb123