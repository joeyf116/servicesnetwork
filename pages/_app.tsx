import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import NavigationBar from '../components/navigation/NavigationBar';
import React, { useState } from 'react';


function MyApp({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const authenticateUser = (): void => {
    setIsLoggedIn(true);
  }

  return (
      <>
        <NavigationBar loggedIn={isLoggedIn} />
        <Component {...pageProps} authenticatedUser={authenticateUser} />
      </>
  )
}

export default MyApp;

// MonggoDB ATLAS
// jfitzdevelop
// DevelopMongoDb123