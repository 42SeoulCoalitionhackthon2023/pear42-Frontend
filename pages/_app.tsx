/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Navbar from '../component/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  // <ThemeProvider>
  return (
    <>
      <Head>
        <title>PEAR42</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
  /* </ThemeProvider> */
}
