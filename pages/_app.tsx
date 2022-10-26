import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import TopBar from '../components/navigation/top-bar';
import Footer from '../components/layout/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <React.Fragment>
    <TopBar/>
    <Component {...pageProps} />
    <Footer/>
  </React.Fragment>
 );
}

export default MyApp
